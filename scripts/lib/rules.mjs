/**
 * Aplica src/tokens/rules.json a um tema: gera os tokens de ação (primary, accent,
 * danger) do fundo e de cada vidro, sem mutar o tema de entrada.
 */

const groupKeys = node => Object.keys(node ?? {}).filter(key => !key.startsWith('$'));

const colorRef = path => ({ $value: `{color.${path}}` });

/**
 * @param {object} rules conteúdo de rules.json
 * @param {string} action primary | accent | danger
 * @param {string} tone tom do vidro, ou 'canvas'
 * @returns {string} família da paleta
 */
const hueFor = (rules, action, tone) => rules.actions[action].on[tone] ?? rules.actions[action].default;

/**
 * @param {object} rules
 * @param {string} themeName light | dark
 * @param {string} layer canvas | soft | strong
 * @param {string} tone
 * @returns {object} grupo DTCG { primary: { bg, bg-hover, fg }, … }
 */
const actionsFor = (rules, themeName, layer, tone) => {
  const fill = rules.fill[rules.layers[themeName][layer]];
  return Object.fromEntries(
    groupKeys(rules.actions).map(action => {
      const hue = hueFor(rules, action, tone);
      return [action, {
        bg: colorRef(`${hue}.${fill.bg}`),
        'bg-hover': colorRef(`${hue}.${fill['bg-hover']}`),
        fg: colorRef(fill.fg),
      }];
    }),
  );
};

/**
 * @param {object} theme tema DTCG (themes/*.json)
 * @param {string} themeName light | dark
 * @param {object} rules conteúdo de rules.json
 * @returns {object} novo tema com control.* (fundo) e surface.*.*.action.* gerados
 */
export const applyRules = (theme, themeName, rules) => {
  const surface = Object.fromEntries(
    groupKeys(theme.surface).map(tone => [
      tone,
      Object.fromEntries(
        groupKeys(theme.surface[tone]).map(emphasis => [
          emphasis,
          { ...theme.surface[tone][emphasis], action: actionsFor(rules, themeName, emphasis, tone) },
        ]),
      ),
    ]),
  );
  return {
    ...theme,
    control: { ...theme.control, ...actionsFor(rules, themeName, 'canvas', 'canvas') },
    surface: { ...theme.surface, ...surface },
  };
};
