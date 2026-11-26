# Relatório de contraste — Vítreo DS

Gerado por `npm run contrast`. Cada linha mostra o **pior caso**: vidros translúcidos são
compostos sobre todos os fundos possíveis (canvas e blocos de luz) e com o reflexo (sheen) aplicado.
Pares lado a lado (anel de foco, degrau de elevação do hover, campo + chumbo) passam se uma das cores atinge 3:1 contra o vizinho.

| Tema | Camada | Par | Tipo | Frente | Fundo (pior caso) | Razão | Mínimo | |
|---|---|---|---|---|---|---|---|---|
| light | L0 | canvas · texto | texto | #171A1D | #FEE6E6 (luz ruby) | **14.70:1** | 4.5:1 | ✅ |
| light | L0 | canvas · texto suave | texto | #515760 | #FEE6E6 (luz ruby) | **6.13:1** | 4.5:1 | ✅ |
| light | L1 | surface neutral soft · texto | texto | #171A1D | #FFF8F8 (luz ruby/liso) | **16.66:1** | 4.5:1 | ✅ |
| light | L1 | surface neutral soft · texto suave | texto | #515760 | #FFF8F8 (luz ruby/liso) | **6.95:1** | 4.5:1 | ✅ |
| light | L1 | surface neutral soft · ícone (accent) | gráfico | #515760 | #FFF8F8 (luz ruby/liso) | **6.95:1** | 3:1 | ✅ |
| light | L1 | surface neutral strong · texto | texto | #F6F7F6 | #45484C (canvas/reflexo) | **8.56:1** | 4.5:1 | ✅ |
| light | L1 | surface neutral strong · texto suave | texto | #B7C0BD | #45484C (canvas/reflexo) | **4.94:1** | 4.5:1 | ✅ |
| light | L1 | surface neutral strong · ícone (accent) | gráfico | #E0B76F | #45484C (canvas/reflexo) | **4.89:1** | 3:1 | ✅ |
| light | L1 | surface cobalt soft · texto | texto | #06173A | #E7EBF9 (luz ruby/liso) | **14.80:1** | 4.5:1 | ✅ |
| light | L1 | surface cobalt soft · texto suave | texto | #1B3D80 | #E7EBF9 (luz ruby/liso) | **8.70:1** | 4.5:1 | ✅ |
| light | L1 | surface cobalt soft · ícone (accent) | gráfico | #3A69C3 | #E7EBF9 (luz ruby/liso) | **4.42:1** | 3:1 | ✅ |
| light | L1 | surface cobalt strong · texto | texto | #FFFFFF | #395791 (canvas/reflexo) | **7.14:1** | 4.5:1 | ✅ |
| light | L1 | surface cobalt strong · texto suave | texto | #E1ECFF | #395791 (canvas/reflexo) | **6.00:1** | 4.5:1 | ✅ |
| light | L1 | surface cobalt strong · ícone (accent) | gráfico | #E1ECFF | #395791 (canvas/reflexo) | **6.00:1** | 3:1 | ✅ |
| light | L1 | surface ruby soft · texto | texto | #35040B | #FFE4E4 (luz ruby/liso) | **14.92:1** | 4.5:1 | ✅ |
| light | L1 | surface ruby soft · texto suave | texto | #761726 | #FFE4E4 (luz ruby/liso) | **9.12:1** | 4.5:1 | ✅ |
| light | L1 | surface ruby soft · ícone (accent) | gráfico | #B73B49 | #FFE4E4 (luz ruby/liso) | **4.69:1** | 3:1 | ✅ |
| light | L1 | surface ruby strong · texto | texto | #FFFFFF | #883643 (canvas/reflexo) | **7.91:1** | 4.5:1 | ✅ |
| light | L1 | surface ruby strong · texto suave | texto | #FFE4E4 | #883643 (canvas/reflexo) | **6.58:1** | 4.5:1 | ✅ |
| light | L1 | surface ruby strong · ícone (accent) | gráfico | #FFE4E4 | #883643 (canvas/reflexo) | **6.58:1** | 3:1 | ✅ |
| light | L1 | surface amber soft · texto | texto | #241700 | #F9E8D6 (luz ruby/liso) | **14.67:1** | 4.5:1 | ✅ |
| light | L1 | surface amber soft · texto suave | texto | #563B00 | #F9E8D6 (luz ruby/liso) | **8.69:1** | 4.5:1 | ✅ |
| light | L1 | surface amber soft · ícone (accent) | gráfico | #8F6500 | #F9E8D6 (luz ruby/liso) | **4.36:1** | 3:1 | ✅ |
| light | L1 | surface amber strong · texto | texto | #FFFFFF | #6C5522 (canvas/reflexo) | **7.08:1** | 4.5:1 | ✅ |
| light | L1 | surface amber strong · texto suave | texto | #F7E9D2 | #6C5522 (canvas/reflexo) | **5.91:1** | 4.5:1 | ✅ |
| light | L1 | surface amber strong · ícone (accent) | gráfico | #F7E9D2 | #6C5522 (canvas/reflexo) | **5.91:1** | 3:1 | ✅ |
| light | L1 | surface verdigris soft · texto | texto | #002017 | #E4EEE8 (luz ruby/liso) | **14.50:1** | 4.5:1 | ✅ |
| light | L1 | surface verdigris soft · texto suave | texto | #004D3D | #E4EEE8 (luz ruby/liso) | **8.30:1** | 4.5:1 | ✅ |
| light | L1 | surface verdigris soft · ícone (accent) | gráfico | #108066 | #E4EEE8 (luz ruby/liso) | **4.11:1** | 3:1 | ✅ |
| light | L1 | surface verdigris strong · texto | texto | #FFFFFF | #226557 (canvas/reflexo) | **6.88:1** | 4.5:1 | ✅ |
| light | L1 | surface verdigris strong · texto suave | texto | #DDF0E9 | #226557 (canvas/reflexo) | **5.81:1** | 4.5:1 | ✅ |
| light | L1 | surface verdigris strong · ícone (accent) | gráfico | #DDF0E9 | #226557 (canvas/reflexo) | **5.81:1** | 3:1 | ✅ |
| light | L1 | surface amethyst soft · texto | texto | #20112E | #F2E7F6 (luz ruby/liso) | **14.83:1** | 4.5:1 | ✅ |
| light | L1 | surface amethyst soft · texto suave | texto | #4D3269 | #F2E7F6 (luz ruby/liso) | **8.87:1** | 4.5:1 | ✅ |
| light | L1 | surface amethyst soft · ícone (accent) | gráfico | #7E59A5 | #F2E7F6 (luz ruby/liso) | **4.54:1** | 3:1 | ✅ |
| light | L1 | surface amethyst strong · texto | texto | #FFFFFF | #654D7D (canvas/reflexo) | **7.21:1** | 4.5:1 | ✅ |
| light | L1 | surface amethyst strong · texto suave | texto | #EFE7FA | #654D7D (canvas/reflexo) | **6.00:1** | 4.5:1 | ✅ |
| light | L1 | surface amethyst strong · ícone (accent) | gráfico | #EFE7FA | #654D7D (canvas/reflexo) | **6.00:1** | 3:1 | ✅ |
| light | L1 | surface moss soft · texto | texto | #141D03 | #EDECE0 (luz ruby/liso) | **14.66:1** | 4.5:1 | ✅ |
| light | L1 | surface moss soft · texto suave | texto | #374812 | #EDECE0 (luz ruby/liso) | **8.43:1** | 4.5:1 | ✅ |
| light | L1 | surface moss soft · ícone (accent) | gráfico | #607731 | #EDECE0 (luz ruby/liso) | **4.23:1** | 3:1 | ✅ |
| light | L1 | surface moss strong · texto | texto | #FFFFFF | #526032 (canvas/reflexo) | **6.81:1** | 4.5:1 | ✅ |
| light | L1 | surface moss strong · texto suave | texto | #E8EEDE | #526032 (canvas/reflexo) | **5.74:1** | 4.5:1 | ✅ |
| light | L1 | surface moss strong · ícone (accent) | gráfico | #E8EEDE | #526032 (canvas/reflexo) | **5.74:1** | 3:1 | ✅ |
| light | L2 | botão primary · texto | texto | #FFFFFF | #3A60A9 (reflexo) | **6.13:1** | 4.5:1 | ✅ |
| light | L2 | botão secondary · texto | texto | #171A1D | #E9ECEB (hover/liso) | **14.70:1** | 4.5:1 | ✅ |
| light | L2 | botão accent · texto | texto | #171A1D | #CE9725 (hover/liso) | **6.72:1** | 4.5:1 | ✅ |
| light | L2 | botão danger · texto | texto | #FFFFFF | #9F3846 (reflexo) | **6.69:1** | 4.5:1 | ✅ |
| light | L2 | botão ghost em neutral soft · texto | texto | #171A1D | #E3DDDE (luz ruby/liso/hover) | **13.06:1** | 4.5:1 | ✅ |
| light | L2 | botão ghost em neutral strong · texto | texto | #F6F7F6 | #5A5D61 (canvas/reflexo/hover) | **6.16:1** | 4.5:1 | ✅ |
| light | L2 | botão ghost em cobalt soft · texto | texto | #06173A | #CCD1E2 (luz ruby/liso/hover) | **11.61:1** | 4.5:1 | ✅ |
| light | L2 | botão ghost em cobalt strong · texto | texto | #FFFFFF | #516B9E (canvas/reflexo/hover) | **5.32:1** | 4.5:1 | ✅ |
| light | L2 | botão ghost em ruby soft · texto | texto | #35040B | #E7C9CA (luz ruby/liso/hover) | **11.62:1** | 4.5:1 | ✅ |
| light | L2 | botão ghost em ruby strong · texto | texto | #FFFFFF | #964E59 (canvas/reflexo/hover) | **5.93:1** | 4.5:1 | ✅ |
| light | L2 | botão ghost em amber soft · texto | texto | #241700 | #DFCFBD (luz ruby/liso/hover) | **11.54:1** | 4.5:1 | ✅ |
| light | L2 | botão ghost em amber strong · texto | texto | #FFFFFF | #7E693D (canvas/reflexo/hover) | **5.26:1** | 4.5:1 | ✅ |
| light | L2 | botão ghost em verdigris soft · texto | texto | #002017 | #C9D5CF (luz ruby/liso/hover) | **11.41:1** | 4.5:1 | ✅ |
| light | L2 | botão ghost em verdigris strong · texto | texto | #FFFFFF | #3D776B (canvas/reflexo/hover) | **5.18:1** | 4.5:1 | ✅ |
| light | L2 | botão ghost em amethyst soft · texto | texto | #20112E | #D9CDDE (luz ruby/liso/hover) | **11.64:1** | 4.5:1 | ✅ |
| light | L2 | botão ghost em amethyst strong · texto | texto | #FFFFFF | #77638C (canvas/reflexo/hover) | **5.33:1** | 4.5:1 | ✅ |
| light | L2 | botão ghost em moss soft · texto | texto | #141D03 | #D3D3C5 (luz ruby/liso/hover) | **11.54:1** | 4.5:1 | ✅ |
| light | L2 | botão ghost em moss strong · texto | texto | #FFFFFF | #66734A (canvas/reflexo/hover) | **5.08:1** | 4.5:1 | ✅ |
| light | L2 | campo · texto | texto | #171A1D | #FFFFFF (campo) | **17.47:1** | 4.5:1 | ✅ |
| light | L2 | campo · placeholder | texto | #666E78 | #FFFFFF (campo) | **5.16:1** | 4.5:1 | ✅ |
| light | L2 | campo · contorno (borda ou fundo) vs camada | contorno | #7F8791+#FFFFFF | #FFE4E4 (ruby soft(luz ruby/liso)) | **3.03:1** | 3:1 | ✅ |
| light | L2 | hover · degrau de elevação (brilho + sombra) vs camada | contorno | #FFFFFF+#171A1D | #526032 (moss strong(canvas/reflexo)) | **6.81:1** | 3:1 | ✅ |
| light | L2 | foco · anel bicolor vs camada | contorno | #171A1D+#F0D5A9 | #526032 (moss strong(canvas/reflexo)) | **4.80:1** | 3:1 | ✅ |
| light | L2 | foco · externo vs interno | contorno | #171A1D | #F0D5A9 (anel) | **12.31:1** | 3:1 | ✅ |
| light | dados | série 1 | gráfico | #5283E0 | #F6F7F6 (canvas) | **3.44:1** | 3:1 | ✅ |
| light | dados | série 2 | gráfico | #D55661 | #F6F7F6 (canvas) | **3.67:1** | 3:1 | ✅ |
| light | dados | série 3 | gráfico | #AE7C00 | #F6F7F6 (canvas) | **3.44:1** | 3:1 | ✅ |
| light | dados | série 4 | gráfico | #379A7F | #F6F7F6 (canvas) | **3.21:1** | 3:1 | ✅ |
| light | dados | série 5 | gráfico | #9772C0 | #F6F7F6 (canvas) | **3.57:1** | 3:1 | ✅ |
| light | dados | série 6 | gráfico | #78914B | #F6F7F6 (canvas) | **3.29:1** | 3:1 | ✅ |
| dark | L0 | canvas · texto | texto | #E9ECEB | #372603 (luz amber) | **12.27:1** | 4.5:1 | ✅ |
| dark | L0 | canvas · texto suave | texto | #B9BEC5 | #372603 (luz amber) | **7.80:1** | 4.5:1 | ✅ |
| dark | L1 | surface neutral soft · texto | texto | #E9ECEB | #37352F (luz amber/reflexo) | **10.33:1** | 4.5:1 | ✅ |
| dark | L1 | surface neutral soft · texto suave | texto | #B9BEC5 | #37352F (luz amber/reflexo) | **6.57:1** | 4.5:1 | ✅ |
| dark | L1 | surface neutral soft · ícone (accent) | gráfico | #B9BEC5 | #37352F (luz amber/reflexo) | **6.57:1** | 3:1 | ✅ |
| dark | L1 | surface neutral strong · texto | texto | #171A1D | #DCDFDF (canvas/liso) | **13.07:1** | 4.5:1 | ✅ |
| dark | L1 | surface neutral strong · texto suave | texto | #515760 | #DCDFDF (canvas/liso) | **5.45:1** | 4.5:1 | ✅ |
| dark | L1 | surface neutral strong · ícone (accent) | gráfico | #515760 | #DCDFDF (canvas/liso) | **5.45:1** | 3:1 | ✅ |
| dark | L1 | surface cobalt soft · texto | texto | #F2F7FF | #1B3260 (luz cobalt/reflexo) | **11.62:1** | 4.5:1 | ✅ |
| dark | L1 | surface cobalt soft · texto suave | texto | #C5DAFF | #1B3260 (luz cobalt/reflexo) | **8.84:1** | 4.5:1 | ✅ |
| dark | L1 | surface cobalt soft · ícone (accent) | gráfico | #9BBEFE | #1B3260 (luz cobalt/reflexo) | **6.66:1** | 3:1 | ✅ |
| dark | L1 | surface cobalt strong · texto | texto | #171A1D | #7197E7 (luz ruby/liso) | **6.07:1** | 4.5:1 | ✅ |
| dark | L1 | surface cobalt strong · texto suave | texto | #06173A | #7197E7 (luz ruby/liso) | **6.12:1** | 4.5:1 | ✅ |
| dark | L1 | surface cobalt strong · ícone (accent) | gráfico | #06173A | #7197E7 (luz ruby/liso) | **6.12:1** | 3:1 | ✅ |
| dark | L1 | surface ruby soft · texto | texto | #FFF4F4 | #591924 (luz ruby/reflexo) | **12.22:1** | 4.5:1 | ✅ |
| dark | L1 | surface ruby soft · texto suave | texto | #FFCACA | #591924 (luz ruby/reflexo) | **9.12:1** | 4.5:1 | ✅ |
| dark | L1 | surface ruby soft · ícone (accent) | gráfico | #FAA2A4 | #591924 (luz ruby/reflexo) | **6.75:1** | 3:1 | ✅ |
| dark | L1 | surface ruby strong · texto | texto | #171A1D | #DF747A (canvas/liso) | **5.77:1** | 4.5:1 | ✅ |
| dark | L1 | surface ruby strong · texto suave | texto | #35040B | #DF747A (canvas/liso) | **5.91:1** | 4.5:1 | ✅ |
| dark | L1 | surface ruby strong · ícone (accent) | gráfico | #35040B | #DF747A (canvas/liso) | **5.91:1** | 3:1 | ✅ |
| dark | L1 | surface amber soft · texto | texto | #FCF6EB | #44320D (luz amber/reflexo) | **11.48:1** | 4.5:1 | ✅ |
| dark | L1 | surface amber soft · texto suave | texto | #F0D5A9 | #44320D (luz amber/reflexo) | **8.70:1** | 4.5:1 | ✅ |
| dark | L1 | surface amber soft · ícone (accent) | gráfico | #E0B76F | #44320D (luz amber/reflexo) | **6.57:1** | 3:1 | ✅ |
| dark | L1 | surface amber strong · texto | texto | #171A1D | #C39025 (canvas/liso) | **6.08:1** | 4.5:1 | ✅ |
| dark | L1 | surface amber strong · texto suave | texto | #241700 | #C39025 (canvas/liso) | **6.10:1** | 4.5:1 | ✅ |
| dark | L1 | surface amber strong · ícone (accent) | gráfico | #241700 | #C39025 (canvas/liso) | **6.10:1** | 3:1 | ✅ |
| dark | L1 | surface verdigris soft · texto | texto | #F0F9F6 | #103B3C (luz cobalt/reflexo) | **11.39:1** | 4.5:1 | ✅ |
| dark | L1 | surface verdigris soft · texto suave | texto | #BEE3D6 | #103B3C (luz cobalt/reflexo) | **8.81:1** | 4.5:1 | ✅ |
| dark | L1 | surface verdigris soft · ícone (accent) | gráfico | #92CCB9 | #103B3C (luz cobalt/reflexo) | **6.72:1** | 3:1 | ✅ |
| dark | L1 | surface verdigris strong · texto | texto | #171A1D | #62AA93 (luz ruby/liso) | **6.40:1** | 4.5:1 | ✅ |
| dark | L1 | surface verdigris strong · texto suave | texto | #002017 | #62AA93 (luz ruby/liso) | **6.31:1** | 4.5:1 | ✅ |
| dark | L1 | surface verdigris strong · ícone (accent) | gráfico | #002017 | #62AA93 (luz ruby/liso) | **6.31:1** | 3:1 | ✅ |
| dark | L1 | surface amethyst soft · texto | texto | #F8F5FD | #3F2C43 (luz amber/reflexo) | **11.74:1** | 4.5:1 | ✅ |
| dark | L1 | surface amethyst soft · texto suave | texto | #E1D1F5 | #3F2C43 (luz amber/reflexo) | **8.83:1** | 4.5:1 | ✅ |
| dark | L1 | surface amethyst soft · ícone (accent) | gráfico | #C9B1E7 | #3F2C43 (luz amber/reflexo) | **6.59:1** | 3:1 | ✅ |
| dark | L1 | surface amethyst strong · texto | texto | #171A1D | #A889CC (canvas/liso) | **5.91:1** | 4.5:1 | ✅ |
| dark | L1 | surface amethyst strong · texto suave | texto | #20112E | #A889CC (canvas/liso) | **6.01:1** | 4.5:1 | ✅ |
| dark | L1 | surface amethyst strong · ícone (accent) | gráfico | #20112E | #A889CC (canvas/liso) | **6.01:1** | 3:1 | ✅ |
| dark | L1 | surface moss soft · texto | texto | #F5F8F1 | #333814 (luz amber/reflexo) | **11.38:1** | 4.5:1 | ✅ |
| dark | L1 | surface moss soft · texto suave | texto | #D3DEC1 | #333814 (luz amber/reflexo) | **8.71:1** | 4.5:1 | ✅ |
| dark | L1 | surface moss soft · ícone (accent) | gráfico | #B4C697 | #333814 (luz amber/reflexo) | **6.66:1** | 3:1 | ✅ |
| dark | L1 | surface moss strong · texto | texto | #171A1D | #8DA269 (canvas/liso) | **6.27:1** | 4.5:1 | ✅ |
| dark | L1 | surface moss strong · texto suave | texto | #141D03 | #8DA269 (canvas/liso) | **6.24:1** | 4.5:1 | ✅ |
| dark | L1 | surface moss strong · ícone (accent) | gráfico | #141D03 | #8DA269 (canvas/liso) | **6.24:1** | 3:1 | ✅ |
| dark | L2 | botão primary · texto | texto | #171A1D | #73A0F4 (liso) | **6.71:1** | 4.5:1 | ✅ |
| dark | L2 | botão secondary · texto | texto | #F6F7F6 | #5A5F68 (hover/reflexo) | **5.96:1** | 4.5:1 | ✅ |
| dark | L2 | botão accent · texto | texto | #171A1D | #E0B76F (liso) | **9.30:1** | 4.5:1 | ✅ |
| dark | L2 | botão danger · texto | texto | #171A1D | #EC7A80 (liso) | **6.37:1** | 4.5:1 | ✅ |
| dark | L2 | botão ghost em neutral soft · texto | texto | #E9ECEB | #4C4B46 (luz amber/reflexo/hover) | **7.36:1** | 4.5:1 | ✅ |
| dark | L2 | botão ghost em neutral strong · texto | texto | #171A1D | #C5C8C7 (canvas/liso/hover) | **10.34:1** | 4.5:1 | ✅ |
| dark | L2 | botão ghost em cobalt soft · texto | texto | #F2F7FF | #354A73 (luz cobalt/reflexo/hover) | **8.20:1** | 4.5:1 | ✅ |
| dark | L2 | botão ghost em cobalt strong · texto | texto | #171A1D | #6688CF (luz ruby/liso/hover) | **4.99:1** | 4.5:1 | ✅ |
| dark | L2 | botão ghost em ruby soft · texto | texto | #FFF4F4 | #693839 (luz amber/reflexo/hover) | **8.75:1** | 4.5:1 | ✅ |
| dark | L2 | botão ghost em ruby strong · texto | texto | #171A1D | #C7696F (canvas/liso/hover) | **4.74:1** | 4.5:1 | ✅ |
| dark | L2 | botão ghost em amber soft · texto | texto | #FCF6EB | #5A4928 (luz amber/reflexo/hover) | **8.06:1** | 4.5:1 | ✅ |
| dark | L2 | botão ghost em amber strong · texto | texto | #171A1D | #AE8124 (canvas/liso/hover) | **4.99:1** | 4.5:1 | ✅ |
| dark | L2 | botão ghost em verdigris soft · texto | texto | #F0F9F6 | #2B5252 (luz cobalt/reflexo/hover) | **8.04:1** | 4.5:1 | ✅ |
| dark | L2 | botão ghost em verdigris strong · texto | texto | #171A1D | #599985 (luz ruby/liso/hover) | **5.24:1** | 4.5:1 | ✅ |
| dark | L2 | botão ghost em amethyst soft · texto | texto | #F8F5FD | #55445A (luz amber/reflexo/hover) | **8.21:1** | 4.5:1 | ✅ |
| dark | L2 | botão ghost em amethyst strong · texto | texto | #171A1D | #967CB7 (canvas/liso/hover) | **4.87:1** | 4.5:1 | ✅ |
| dark | L2 | botão ghost em moss soft · texto | texto | #F5F8F1 | #4A4F2F (luz amber/reflexo/hover) | **7.96:1** | 4.5:1 | ✅ |
| dark | L2 | botão ghost em moss strong · texto | texto | #171A1D | #7F9260 (canvas/liso/hover) | **5.14:1** | 4.5:1 | ✅ |
| dark | L2 | campo · texto | texto | #F6F7F6 | #282C31 (campo) | **13.08:1** | 4.5:1 | ✅ |
| dark | L2 | campo · placeholder | texto | #B9BEC5 | #282C31 (campo) | **7.52:1** | 4.5:1 | ✅ |
| dark | L2 | campo · contorno (borda ou fundo) vs camada | contorno | #9BA2AC+#282C31 | #DF747A (ruby strong(canvas/liso)) | **4.64:1** | 3:1 | ✅ |
| dark | L2 | hover · degrau de elevação (brilho + sombra) vs camada | contorno | #E9ECEB+#171A1D | #DF747A (ruby strong(canvas/liso)) | **5.77:1** | 3:1 | ✅ |
| dark | L2 | foco · anel bicolor vs camada | contorno | #E0B76F+#171A1D | #DF747A (ruby strong(canvas/liso)) | **5.77:1** | 3:1 | ✅ |
| dark | L2 | foco · externo vs interno | contorno | #E0B76F | #171A1D (anel) | **9.30:1** | 3:1 | ✅ |
| dark | dados | série 1 | gráfico | #73A0F4 | #37352F (luz amber/reflexo) | **4.72:1** | 3:1 | ✅ |
| dark | dados | série 2 | gráfico | #EC7A80 | #37352F (luz amber/reflexo) | **4.48:1** | 3:1 | ✅ |
| dark | dados | série 3 | gráfico | #CE9725 | #37352F (luz amber/reflexo) | **4.72:1** | 3:1 | ✅ |
| dark | dados | série 4 | gráfico | #63B49B | #37352F (luz amber/reflexo) | **4.99:1** | 3:1 | ✅ |
| dark | dados | série 5 | gráfico | #B190D7 | #37352F (luz amber/reflexo) | **4.59:1** | 3:1 | ✅ |
| dark | dados | série 6 | gráfico | #95AB6E | #37352F (luz amber/reflexo) | **4.87:1** | 3:1 | ✅ |
