/**
 * Registra um custom element só uma vez (evita erro quando o bundle é carregado duas vezes).
 * @param {string} name
 * @param {CustomElementConstructor} constructor
 * @returns {CustomElementConstructor}
 */
export const defineElement = (name, constructor) => {
  if (customElements.get(name)) return customElements.get(name);

  customElements.define(name, constructor);
  return constructor;
};
