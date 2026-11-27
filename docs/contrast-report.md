# Relatório de contraste — Vítreo DS

Gerado por `npm run contrast`. Cada linha mostra o **pior caso**: vidros translúcidos são
compostos sobre todos os fundos possíveis (canvas e blocos de luz) e com o reflexo (sheen) aplicado.
Pares lado a lado (anel de foco, degrau de elevação do hover, campo + chumbo) passam se uma das cores atinge 3:1 contra o vizinho.

| Tema | Camada | Par | Tipo | Frente | Fundo (pior caso) | Razão | Mínimo | |
|---|---|---|---|---|---|---|---|---|
| light | L0 | canvas · texto | texto | #171A1D | #C7D2E2 (luz blue) | **11.41:1** | 4.5:1 | ✅ |
| light | L0 | canvas · texto suave | texto | #515760 | #C7D2E2 (luz blue) | **4.76:1** | 4.5:1 | ✅ |
| light | L1 | surface neutral soft · texto | texto | #171A1D | #EFF2F7 (luz blue/liso) | **15.61:1** | 4.5:1 | ✅ |
| light | L1 | surface neutral soft · texto suave | texto | #515760 | #EFF2F7 (luz blue/liso) | **6.51:1** | 4.5:1 | ✅ |
| light | L1 | surface neutral soft · ícone (accent) | gráfico | #515760 | #EFF2F7 (luz blue/liso) | **6.51:1** | 3:1 | ✅ |
| light | L1 | surface neutral strong · texto | texto | #F6F7F6 | #45484C (canvas/reflexo) | **8.56:1** | 4.5:1 | ✅ |
| light | L1 | surface neutral strong · texto suave | texto | #B7C0BD | #45484C (canvas/reflexo) | **4.94:1** | 4.5:1 | ✅ |
| light | L1 | surface neutral strong · ícone (accent) | gráfico | #E0B76F | #45484C (canvas/reflexo) | **4.89:1** | 3:1 | ✅ |
| light | L1 | surface cobalt soft · texto | texto | #06173A | #E4E4F3 (luz red/liso) | **14.04:1** | 4.5:1 | ✅ |
| light | L1 | surface cobalt soft · texto suave | texto | #1B3D80 | #E4E4F3 (luz red/liso) | **8.25:1** | 4.5:1 | ✅ |
| light | L1 | surface cobalt soft · ícone (accent) | gráfico | #3A69C3 | #E4E4F3 (luz red/liso) | **4.19:1** | 3:1 | ✅ |
| light | L1 | surface cobalt strong · texto | texto | #FFFFFF | #395791 (canvas/reflexo) | **7.14:1** | 4.5:1 | ✅ |
| light | L1 | surface cobalt strong · texto suave | texto | #E1ECFF | #395791 (canvas/reflexo) | **6.00:1** | 4.5:1 | ✅ |
| light | L1 | surface cobalt strong · ícone (accent) | gráfico | #E1ECFF | #395791 (canvas/reflexo) | **6.00:1** | 3:1 | ✅ |
| light | L1 | surface ruby soft · texto | texto | #35040B | #F3E0E3 (luz blue/liso) | **14.12:1** | 4.5:1 | ✅ |
| light | L1 | surface ruby soft · texto suave | texto | #761726 | #F3E0E3 (luz blue/liso) | **8.63:1** | 4.5:1 | ✅ |
| light | L1 | surface ruby soft · ícone (accent) | gráfico | #B73B49 | #F3E0E3 (luz blue/liso) | **4.44:1** | 3:1 | ✅ |
| light | L1 | surface ruby strong · texto | texto | #FFFFFF | #883643 (canvas/reflexo) | **7.91:1** | 4.5:1 | ✅ |
| light | L1 | surface ruby strong · texto suave | texto | #FFE4E4 | #883643 (canvas/reflexo) | **6.58:1** | 4.5:1 | ✅ |
| light | L1 | surface ruby strong · ícone (accent) | gráfico | #FFE4E4 | #883643 (canvas/reflexo) | **6.58:1** | 3:1 | ✅ |
| light | L1 | surface amber soft · texto | texto | #241700 | #ECE4D5 (luz blue/liso) | **13.89:1** | 4.5:1 | ✅ |
| light | L1 | surface amber soft · texto suave | texto | #563B00 | #ECE4D5 (luz blue/liso) | **8.23:1** | 4.5:1 | ✅ |
| light | L1 | surface amber soft · ícone (accent) | gráfico | #8F6500 | #ECE4D5 (luz blue/liso) | **4.13:1** | 3:1 | ✅ |
| light | L1 | surface amber strong · texto | texto | #FFFFFF | #6C5522 (canvas/reflexo) | **7.08:1** | 4.5:1 | ✅ |
| light | L1 | surface amber strong · texto suave | texto | #F7E9D2 | #6C5522 (canvas/reflexo) | **5.91:1** | 4.5:1 | ✅ |
| light | L1 | surface amber strong · ícone (accent) | gráfico | #F7E9D2 | #6C5522 (canvas/reflexo) | **5.91:1** | 3:1 | ✅ |
| light | L1 | surface verdigris soft · texto | texto | #002017 | #E1E7E1 (luz red/liso) | **13.76:1** | 4.5:1 | ✅ |
| light | L1 | surface verdigris soft · texto suave | texto | #004D3D | #E1E7E1 (luz red/liso) | **7.88:1** | 4.5:1 | ✅ |
| light | L1 | surface verdigris soft · ícone (accent) | gráfico | #108066 | #E1E7E1 (luz red/liso) | **3.90:1** | 3:1 | ✅ |
| light | L1 | surface verdigris strong · texto | texto | #FFFFFF | #226557 (canvas/reflexo) | **6.88:1** | 4.5:1 | ✅ |
| light | L1 | surface verdigris strong · texto suave | texto | #DDF0E9 | #226557 (canvas/reflexo) | **5.81:1** | 4.5:1 | ✅ |
| light | L1 | surface verdigris strong · ícone (accent) | gráfico | #DDF0E9 | #226557 (canvas/reflexo) | **5.81:1** | 3:1 | ✅ |
| light | L1 | surface amethyst soft · texto | texto | #20112E | #E6E2F5 (luz blue/liso) | **14.05:1** | 4.5:1 | ✅ |
| light | L1 | surface amethyst soft · texto suave | texto | #4D3269 | #E6E2F5 (luz blue/liso) | **8.40:1** | 4.5:1 | ✅ |
| light | L1 | surface amethyst soft · ícone (accent) | gráfico | #7E59A5 | #E6E2F5 (luz blue/liso) | **4.30:1** | 3:1 | ✅ |
| light | L1 | surface amethyst strong · texto | texto | #FFFFFF | #654D7D (canvas/reflexo) | **7.21:1** | 4.5:1 | ✅ |
| light | L1 | surface amethyst strong · texto suave | texto | #EFE7FA | #654D7D (canvas/reflexo) | **6.00:1** | 4.5:1 | ✅ |
| light | L1 | surface amethyst strong · ícone (accent) | gráfico | #EFE7FA | #654D7D (canvas/reflexo) | **6.00:1** | 3:1 | ✅ |
| light | L1 | surface moss soft · texto | texto | #141D03 | #E1E8DF (luz blue/liso) | **13.90:1** | 4.5:1 | ✅ |
| light | L1 | surface moss soft · texto suave | texto | #374812 | #E1E8DF (luz blue/liso) | **7.99:1** | 4.5:1 | ✅ |
| light | L1 | surface moss soft · ícone (accent) | gráfico | #607731 | #E1E8DF (luz blue/liso) | **4.01:1** | 3:1 | ✅ |
| light | L1 | surface moss strong · texto | texto | #FFFFFF | #526032 (canvas/reflexo) | **6.81:1** | 4.5:1 | ✅ |
| light | L1 | surface moss strong · texto suave | texto | #E8EEDE | #526032 (canvas/reflexo) | **5.74:1** | 4.5:1 | ✅ |
| light | L1 | surface moss strong · ícone (accent) | gráfico | #E8EEDE | #526032 (canvas/reflexo) | **5.74:1** | 3:1 | ✅ |
| light | L2 | botão secondary · texto | texto | #171A1D | #E9ECEB (hover/liso) | **14.70:1** | 4.5:1 | ✅ |
| light | L2 | botão primary · texto | texto | #FFFFFF | #3A60A9 (reflexo) | **6.13:1** | 4.5:1 | ✅ |
| light | L2 | botão accent · texto | texto | #FFFFFF | #7D5E14 (reflexo) | **6.02:1** | 4.5:1 | ✅ |
| light | L2 | botão danger · texto | texto | #FFFFFF | #9F3846 (reflexo) | **6.69:1** | 4.5:1 | ✅ |
| light | L2 | botão ghost em neutral soft · texto | texto | #171A1D | #D5D8DD (luz blue/liso/hover) | **12.26:1** | 4.5:1 | ✅ |
| light | L2 | botão ghost em neutral strong · texto | texto | #F6F7F6 | #5A5D61 (canvas/reflexo/hover) | **6.16:1** | 4.5:1 | ✅ |
| light | L2 | botão ghost em cobalt soft · texto | texto | #06173A | #C9CCDC (luz red/liso/hover) | **11.03:1** | 4.5:1 | ✅ |
| light | L2 | botão ghost em cobalt strong · texto | texto | #FFFFFF | #516B9E (canvas/reflexo/hover) | **5.32:1** | 4.5:1 | ✅ |
| light | L2 | botão ghost em ruby soft · texto | texto | #35040B | #DCC6C9 (luz blue/liso/hover) | **11.02:1** | 4.5:1 | ✅ |
| light | L2 | botão ghost em ruby strong · texto | texto | #FFFFFF | #964E59 (canvas/reflexo/hover) | **5.93:1** | 4.5:1 | ✅ |
| light | L2 | botão ghost em amber soft · texto | texto | #241700 | #D4CBBC (luz blue/liso/hover) | **10.94:1** | 4.5:1 | ✅ |
| light | L2 | botão ghost em amber strong · texto | texto | #FFFFFF | #7E693D (canvas/reflexo/hover) | **5.26:1** | 4.5:1 | ✅ |
| light | L2 | botão ghost em verdigris soft · texto | texto | #002017 | #C6CFC9 (luz red/liso/hover) | **10.84:1** | 4.5:1 | ✅ |
| light | L2 | botão ghost em verdigris strong · texto | texto | #FFFFFF | #3D776B (canvas/reflexo/hover) | **5.18:1** | 4.5:1 | ✅ |
| light | L2 | botão ghost em amethyst soft · texto | texto | #20112E | #CEC9DD (luz blue/liso/hover) | **11.05:1** | 4.5:1 | ✅ |
| light | L2 | botão ghost em amethyst strong · texto | texto | #FFFFFF | #77638C (canvas/reflexo/hover) | **5.33:1** | 4.5:1 | ✅ |
| light | L2 | botão ghost em moss soft · texto | texto | #141D03 | #C8CFC4 (luz blue/liso/hover) | **10.96:1** | 4.5:1 | ✅ |
| light | L2 | botão ghost em moss strong · texto | texto | #FFFFFF | #66734A (canvas/reflexo/hover) | **5.08:1** | 4.5:1 | ✅ |
| light | L2 | campo · texto | texto | #171A1D | #FFFFFF (campo) | **17.47:1** | 4.5:1 | ✅ |
| light | L2 | campo · placeholder | texto | #666E78 | #FFFFFF (campo) | **5.16:1** | 4.5:1 | ✅ |
| light | L2 | campo · contorno (borda ou fundo) vs camada | contorno | #666E78+#FFFFFF | #C7D2E2 (canvas(luz blue)) | **3.37:1** | 3:1 | ✅ |
| light | L2 | foco · anel bicolor vs camada | contorno | #171A1D+#F0D5A9 | #526032 (moss strong(canvas/reflexo)) | **4.80:1** | 3:1 | ✅ |
| light | L2 | foco · externo vs interno | contorno | #171A1D | #F0D5A9 (anel) | **12.31:1** | 3:1 | ✅ |
| light | ação | primary em fundo · texto | texto | #FFFFFF | #3A60A9 (reflexo) | **6.13:1** | 4.5:1 | ✅ |
| light | ação | primary em fundo · botão × camada | gráfico | #2952A2 | #C7D2E2 (luz blue) | **4.86:1** | 3:1 | ✅ |
| light | ação | accent em fundo · texto | texto | #FFFFFF | #7D5E14 (reflexo) | **6.02:1** | 4.5:1 | ✅ |
| light | ação | accent em fundo · botão × camada | gráfico | #725000 | #C7D2E2 (luz blue) | **4.79:1** | 3:1 | ✅ |
| light | ação | danger em fundo · texto | texto | #FFFFFF | #9F3846 (reflexo) | **6.69:1** | 4.5:1 | ✅ |
| light | ação | danger em fundo · botão × camada | gráfico | #972736 | #C7D2E2 (luz blue) | **5.16:1** | 3:1 | ✅ |
| light | ação | primary em neutral soft · texto | texto | #FFFFFF | #3A60A9 (reflexo) | **6.13:1** | 4.5:1 | ✅ |
| light | ação | primary em neutral soft · botão × camada | gráfico | #2952A2 | #EFF2F7 (luz blue/liso) | **6.65:1** | 3:1 | ✅ |
| light | ação | accent em neutral soft · texto | texto | #FFFFFF | #7D5E14 (reflexo) | **6.02:1** | 4.5:1 | ✅ |
| light | ação | accent em neutral soft · botão × camada | gráfico | #725000 | #EFF2F7 (luz blue/liso) | **6.55:1** | 3:1 | ✅ |
| light | ação | danger em neutral soft · texto | texto | #FFFFFF | #9F3846 (reflexo) | **6.69:1** | 4.5:1 | ✅ |
| light | ação | danger em neutral soft · botão × camada | gráfico | #972736 | #EFF2F7 (luz blue/liso) | **7.05:1** | 3:1 | ✅ |
| light | ação | primary em neutral strong · texto | texto | #171A1D | #C5DAFF (liso) | **12.35:1** | 4.5:1 | ✅ |
| light | ação | primary em neutral strong · botão × camada | gráfico | #C5DAFF | #45484C (canvas/reflexo) | **6.50:1** | 3:1 | ✅ |
| light | ação | accent em neutral strong · texto | texto | #171A1D | #F0D5A9 (liso) | **12.31:1** | 4.5:1 | ✅ |
| light | ação | accent em neutral strong · botão × camada | gráfico | #F0D5A9 | #45484C (canvas/reflexo) | **6.48:1** | 3:1 | ✅ |
| light | ação | danger em neutral strong · texto | texto | #171A1D | #FFCACA (liso) | **12.11:1** | 4.5:1 | ✅ |
| light | ação | danger em neutral strong · botão × camada | gráfico | #FFCACA | #45484C (canvas/reflexo) | **6.37:1** | 3:1 | ✅ |
| light | ação | primary em cobalt soft · texto | texto | #FFFFFF | #14725F (reflexo) | **5.81:1** | 4.5:1 | ✅ |
| light | ação | primary em cobalt soft · botão × camada | gráfico | #006651 | #E4E4F3 (luz red/liso) | **5.54:1** | 3:1 | ✅ |
| light | ação | accent em cobalt soft · texto | texto | #FFFFFF | #7D5E14 (reflexo) | **6.02:1** | 4.5:1 | ✅ |
| light | ação | accent em cobalt soft · botão × camada | gráfico | #725000 | #E4E4F3 (luz red/liso) | **5.84:1** | 3:1 | ✅ |
| light | ação | danger em cobalt soft · texto | texto | #FFFFFF | #9F3846 (reflexo) | **6.69:1** | 4.5:1 | ✅ |
| light | ação | danger em cobalt soft · botão × camada | gráfico | #972736 | #E4E4F3 (luz red/liso) | **6.29:1** | 3:1 | ✅ |
| light | ação | primary em cobalt strong · texto | texto | #171A1D | #BEE3D6 (liso) | **12.60:1** | 4.5:1 | ✅ |
| light | ação | primary em cobalt strong · botão × camada | gráfico | #BEE3D6 | #395791 (canvas/reflexo) | **5.15:1** | 3:1 | ✅ |
| light | ação | accent em cobalt strong · texto | texto | #171A1D | #F0D5A9 (liso) | **12.31:1** | 4.5:1 | ✅ |
| light | ação | accent em cobalt strong · botão × camada | gráfico | #F0D5A9 | #395791 (canvas/reflexo) | **5.03:1** | 3:1 | ✅ |
| light | ação | danger em cobalt strong · texto | texto | #171A1D | #FFCACA (liso) | **12.11:1** | 4.5:1 | ✅ |
| light | ação | danger em cobalt strong · botão × camada | gráfico | #FFCACA | #395791 (canvas/reflexo) | **4.95:1** | 3:1 | ✅ |
| light | ação | primary em ruby soft · texto | texto | #FFFFFF | #3A60A9 (reflexo) | **6.13:1** | 4.5:1 | ✅ |
| light | ação | primary em ruby soft · botão × camada | gráfico | #2952A2 | #F3E0E3 (luz blue/liso) | **5.87:1** | 3:1 | ✅ |
| light | ação | accent em ruby soft · texto | texto | #FFFFFF | #7D5E14 (reflexo) | **6.02:1** | 4.5:1 | ✅ |
| light | ação | accent em ruby soft · botão × camada | gráfico | #725000 | #F3E0E3 (luz blue/liso) | **5.79:1** | 3:1 | ✅ |
| light | ação | danger em ruby soft · texto | texto | #FFFFFF | #9F3846 (reflexo) | **6.69:1** | 4.5:1 | ✅ |
| light | ação | danger em ruby soft · botão × camada | gráfico | #972736 | #F3E0E3 (luz blue/liso) | **6.23:1** | 3:1 | ✅ |
| light | ação | primary em ruby strong · texto | texto | #171A1D | #C5DAFF (liso) | **12.35:1** | 4.5:1 | ✅ |
| light | ação | primary em ruby strong · botão × camada | gráfico | #C5DAFF | #883643 (canvas/reflexo) | **5.59:1** | 3:1 | ✅ |
| light | ação | accent em ruby strong · texto | texto | #171A1D | #F0D5A9 (liso) | **12.31:1** | 4.5:1 | ✅ |
| light | ação | accent em ruby strong · botão × camada | gráfico | #F0D5A9 | #883643 (canvas/reflexo) | **5.57:1** | 3:1 | ✅ |
| light | ação | danger em ruby strong · texto | texto | #171A1D | #FFCACA (liso) | **12.11:1** | 4.5:1 | ✅ |
| light | ação | danger em ruby strong · botão × camada | gráfico | #FFCACA | #883643 (canvas/reflexo) | **5.48:1** | 3:1 | ✅ |
| light | ação | primary em amber soft · texto | texto | #FFFFFF | #3A60A9 (reflexo) | **6.13:1** | 4.5:1 | ✅ |
| light | ação | primary em amber soft · botão × camada | gráfico | #2952A2 | #ECE4D5 (luz blue/liso) | **5.89:1** | 3:1 | ✅ |
| light | ação | accent em amber soft · texto | texto | #FFFFFF | #14725F (reflexo) | **5.81:1** | 4.5:1 | ✅ |
| light | ação | accent em amber soft · botão × camada | gráfico | #006651 | #ECE4D5 (luz blue/liso) | **5.51:1** | 3:1 | ✅ |
| light | ação | danger em amber soft · texto | texto | #FFFFFF | #9F3846 (reflexo) | **6.69:1** | 4.5:1 | ✅ |
| light | ação | danger em amber soft · botão × camada | gráfico | #972736 | #ECE4D5 (luz blue/liso) | **6.25:1** | 3:1 | ✅ |
| light | ação | primary em amber strong · texto | texto | #171A1D | #C5DAFF (liso) | **12.35:1** | 4.5:1 | ✅ |
| light | ação | primary em amber strong · botão × camada | gráfico | #C5DAFF | #6C5522 (canvas/reflexo) | **5.01:1** | 3:1 | ✅ |
| light | ação | accent em amber strong · texto | texto | #171A1D | #BEE3D6 (liso) | **12.60:1** | 4.5:1 | ✅ |
| light | ação | accent em amber strong · botão × camada | gráfico | #BEE3D6 | #6C5522 (canvas/reflexo) | **5.11:1** | 3:1 | ✅ |
| light | ação | danger em amber strong · texto | texto | #171A1D | #FFCACA (liso) | **12.11:1** | 4.5:1 | ✅ |
| light | ação | danger em amber strong · botão × camada | gráfico | #FFCACA | #6C5522 (canvas/reflexo) | **4.91:1** | 3:1 | ✅ |
| light | ação | primary em verdigris soft · texto | texto | #FFFFFF | #3A60A9 (reflexo) | **6.13:1** | 4.5:1 | ✅ |
| light | ação | primary em verdigris soft · botão × camada | gráfico | #2952A2 | #E1E7E1 (luz red/liso) | **5.94:1** | 3:1 | ✅ |
| light | ação | accent em verdigris soft · texto | texto | #FFFFFF | #7D5E14 (reflexo) | **6.02:1** | 4.5:1 | ✅ |
| light | ação | accent em verdigris soft · botão × camada | gráfico | #725000 | #E1E7E1 (luz red/liso) | **5.86:1** | 3:1 | ✅ |
| light | ação | danger em verdigris soft · texto | texto | #FFFFFF | #9F3846 (reflexo) | **6.69:1** | 4.5:1 | ✅ |
| light | ação | danger em verdigris soft · botão × camada | gráfico | #972736 | #E1E7E1 (luz red/liso) | **6.31:1** | 3:1 | ✅ |
| light | ação | primary em verdigris strong · texto | texto | #171A1D | #C5DAFF (liso) | **12.35:1** | 4.5:1 | ✅ |
| light | ação | primary em verdigris strong · botão × camada | gráfico | #C5DAFF | #226557 (canvas/reflexo) | **4.87:1** | 3:1 | ✅ |
| light | ação | accent em verdigris strong · texto | texto | #171A1D | #F0D5A9 (liso) | **12.31:1** | 4.5:1 | ✅ |
| light | ação | accent em verdigris strong · botão × camada | gráfico | #F0D5A9 | #226557 (canvas/reflexo) | **4.85:1** | 3:1 | ✅ |
| light | ação | danger em verdigris strong · texto | texto | #171A1D | #FFCACA (liso) | **12.11:1** | 4.5:1 | ✅ |
| light | ação | danger em verdigris strong · botão × camada | gráfico | #FFCACA | #226557 (canvas/reflexo) | **4.77:1** | 3:1 | ✅ |
| light | ação | primary em amethyst soft · texto | texto | #FFFFFF | #7D5E14 (reflexo) | **6.02:1** | 4.5:1 | ✅ |
| light | ação | primary em amethyst soft · botão × camada | gráfico | #725000 | #E6E2F5 (luz blue/liso) | **5.80:1** | 3:1 | ✅ |
| light | ação | accent em amethyst soft · texto | texto | #FFFFFF | #14725F (reflexo) | **5.81:1** | 4.5:1 | ✅ |
| light | ação | accent em amethyst soft · botão × camada | gráfico | #006651 | #E6E2F5 (luz blue/liso) | **5.50:1** | 3:1 | ✅ |
| light | ação | danger em amethyst soft · texto | texto | #FFFFFF | #9F3846 (reflexo) | **6.69:1** | 4.5:1 | ✅ |
| light | ação | danger em amethyst soft · botão × camada | gráfico | #972736 | #E6E2F5 (luz blue/liso) | **6.24:1** | 3:1 | ✅ |
| light | ação | primary em amethyst strong · texto | texto | #171A1D | #F0D5A9 (liso) | **12.31:1** | 4.5:1 | ✅ |
| light | ação | primary em amethyst strong · botão × camada | gráfico | #F0D5A9 | #654D7D (canvas/reflexo) | **5.08:1** | 3:1 | ✅ |
| light | ação | accent em amethyst strong · texto | texto | #171A1D | #BEE3D6 (liso) | **12.60:1** | 4.5:1 | ✅ |
| light | ação | accent em amethyst strong · botão × camada | gráfico | #BEE3D6 | #654D7D (canvas/reflexo) | **5.20:1** | 3:1 | ✅ |
| light | ação | danger em amethyst strong · texto | texto | #171A1D | #FFCACA (liso) | **12.11:1** | 4.5:1 | ✅ |
| light | ação | danger em amethyst strong · botão × camada | gráfico | #FFCACA | #654D7D (canvas/reflexo) | **5.00:1** | 3:1 | ✅ |
| light | ação | primary em moss soft · texto | texto | #FFFFFF | #3A60A9 (reflexo) | **6.13:1** | 4.5:1 | ✅ |
| light | ação | primary em moss soft · botão × camada | gráfico | #2952A2 | #E1E8DF (luz blue/liso) | **5.94:1** | 3:1 | ✅ |
| light | ação | accent em moss soft · texto | texto | #FFFFFF | #7D5E14 (reflexo) | **6.02:1** | 4.5:1 | ✅ |
| light | ação | accent em moss soft · botão × camada | gráfico | #725000 | #E1E8DF (luz blue/liso) | **5.86:1** | 3:1 | ✅ |
| light | ação | danger em moss soft · texto | texto | #FFFFFF | #9F3846 (reflexo) | **6.69:1** | 4.5:1 | ✅ |
| light | ação | danger em moss soft · botão × camada | gráfico | #972736 | #E1E8DF (luz blue/liso) | **6.31:1** | 3:1 | ✅ |
| light | ação | primary em moss strong · texto | texto | #171A1D | #C5DAFF (liso) | **12.35:1** | 4.5:1 | ✅ |
| light | ação | primary em moss strong · botão × camada | gráfico | #C5DAFF | #526032 (canvas/reflexo) | **4.81:1** | 3:1 | ✅ |
| light | ação | accent em moss strong · texto | texto | #171A1D | #F0D5A9 (liso) | **12.31:1** | 4.5:1 | ✅ |
| light | ação | accent em moss strong · botão × camada | gráfico | #F0D5A9 | #526032 (canvas/reflexo) | **4.80:1** | 3:1 | ✅ |
| light | ação | danger em moss strong · texto | texto | #171A1D | #FFCACA (liso) | **12.11:1** | 4.5:1 | ✅ |
| light | ação | danger em moss strong · botão × camada | gráfico | #FFCACA | #526032 (canvas/reflexo) | **4.72:1** | 3:1 | ✅ |
| light | dados | série 1 | gráfico | #5283E0 | #EFF2F7 (luz blue/liso) | **3.30:1** | 3:1 | ✅ |
| light | dados | série 2 | gráfico | #D55661 | #EFF2F7 (luz blue/liso) | **3.52:1** | 3:1 | ✅ |
| light | dados | série 3 | gráfico | #AE7C00 | #EFF2F7 (luz blue/liso) | **3.30:1** | 3:1 | ✅ |
| light | dados | série 4 | gráfico | #379A7F | #EFF2F7 (luz blue/liso) | **3.08:1** | 3:1 | ✅ |
| light | dados | série 5 | gráfico | #9772C0 | #EFF2F7 (luz blue/liso) | **3.42:1** | 3:1 | ✅ |
| light | dados | série 6 | gráfico | #78914B | #EFF2F7 (luz blue/liso) | **3.15:1** | 3:1 | ✅ |
| dark | L0 | canvas · texto | texto | #E9ECEB | #4C431C (luz yellow) | **8.29:1** | 4.5:1 | ✅ |
| dark | L0 | canvas · texto suave | texto | #B9BEC5 | #4C431C (luz yellow) | **5.27:1** | 4.5:1 | ✅ |
| dark | L1 | surface neutral soft · texto | texto | #E9ECEB | #3C3D36 (luz yellow/reflexo) | **9.26:1** | 4.5:1 | ✅ |
| dark | L1 | surface neutral soft · texto suave | texto | #B9BEC5 | #3C3D36 (luz yellow/reflexo) | **5.89:1** | 4.5:1 | ✅ |
| dark | L1 | surface neutral soft · ícone (accent) | gráfico | #B9BEC5 | #3C3D36 (luz yellow/reflexo) | **5.89:1** | 3:1 | ✅ |
| dark | L1 | surface neutral strong · texto | texto | #171A1D | #DCDFDF (canvas/liso) | **13.07:1** | 4.5:1 | ✅ |
| dark | L1 | surface neutral strong · texto suave | texto | #515760 | #DCDFDF (canvas/liso) | **5.45:1** | 4.5:1 | ✅ |
| dark | L1 | surface neutral strong · ícone (accent) | gráfico | #515760 | #DCDFDF (canvas/liso) | **5.45:1** | 3:1 | ✅ |
| dark | L1 | surface cobalt soft · texto | texto | #F2F7FF | #283855 (luz yellow/reflexo) | **10.89:1** | 4.5:1 | ✅ |
| dark | L1 | surface cobalt soft · texto suave | texto | #C5DAFF | #283855 (luz yellow/reflexo) | **8.28:1** | 4.5:1 | ✅ |
| dark | L1 | surface cobalt soft · ícone (accent) | gráfico | #9BBEFE | #283855 (luz yellow/reflexo) | **6.24:1** | 3:1 | ✅ |
| dark | L1 | surface cobalt strong · texto | texto | #171A1D | #6D98E7 (canvas/liso) | **6.07:1** | 4.5:1 | ✅ |
| dark | L1 | surface cobalt strong · texto suave | texto | #06173A | #6D98E7 (canvas/liso) | **6.13:1** | 4.5:1 | ✅ |
| dark | L1 | surface cobalt strong · ícone (accent) | gráfico | #06173A | #6D98E7 (canvas/liso) | **6.13:1** | 3:1 | ✅ |
| dark | L1 | surface ruby soft · texto | texto | #FFF4F4 | #592424 (luz yellow/reflexo) | **11.39:1** | 4.5:1 | ✅ |
| dark | L1 | surface ruby soft · texto suave | texto | #FFCACA | #592424 (luz yellow/reflexo) | **8.50:1** | 4.5:1 | ✅ |
| dark | L1 | surface ruby soft · ícone (accent) | gráfico | #FAA2A4 | #592424 (luz yellow/reflexo) | **6.29:1** | 3:1 | ✅ |
| dark | L1 | surface ruby strong · texto | texto | #171A1D | #DF747A (canvas/liso) | **5.77:1** | 4.5:1 | ✅ |
| dark | L1 | surface ruby strong · texto suave | texto | #35040B | #DF747A (canvas/liso) | **5.91:1** | 4.5:1 | ✅ |
| dark | L1 | surface ruby strong · ícone (accent) | gráfico | #35040B | #DF747A (canvas/liso) | **5.91:1** | 3:1 | ✅ |
| dark | L1 | surface amber soft · texto | texto | #FCF6EB | #483813 (luz yellow/reflexo) | **10.57:1** | 4.5:1 | ✅ |
| dark | L1 | surface amber soft · texto suave | texto | #F0D5A9 | #483813 (luz yellow/reflexo) | **8.01:1** | 4.5:1 | ✅ |
| dark | L1 | surface amber soft · ícone (accent) | gráfico | #E0B76F | #483813 (luz yellow/reflexo) | **6.05:1** | 3:1 | ✅ |
| dark | L1 | surface amber strong · texto | texto | #171A1D | #C39025 (canvas/liso) | **6.08:1** | 4.5:1 | ✅ |
| dark | L1 | surface amber strong · texto suave | texto | #241700 | #C39025 (canvas/liso) | **6.10:1** | 4.5:1 | ✅ |
| dark | L1 | surface amber strong · ícone (accent) | gráfico | #241700 | #C39025 (canvas/liso) | **6.10:1** | 3:1 | ✅ |
| dark | L1 | surface verdigris soft · texto | texto | #F0F9F6 | #1D4130 (luz yellow/reflexo) | **10.55:1** | 4.5:1 | ✅ |
| dark | L1 | surface verdigris soft · texto suave | texto | #BEE3D6 | #1D4130 (luz yellow/reflexo) | **8.16:1** | 4.5:1 | ✅ |
| dark | L1 | surface verdigris soft · ícone (accent) | gráfico | #92CCB9 | #1D4130 (luz yellow/reflexo) | **6.22:1** | 3:1 | ✅ |
| dark | L1 | surface verdigris strong · texto | texto | #171A1D | #5EAB93 (canvas/liso) | **6.42:1** | 4.5:1 | ✅ |
| dark | L1 | surface verdigris strong · texto suave | texto | #002017 | #5EAB93 (canvas/liso) | **6.33:1** | 4.5:1 | ✅ |
| dark | L1 | surface verdigris strong · ícone (accent) | gráfico | #002017 | #5EAB93 (canvas/liso) | **6.33:1** | 3:1 | ✅ |
| dark | L1 | surface amethyst soft · texto | texto | #F8F5FD | #433249 (luz yellow/reflexo) | **10.82:1** | 4.5:1 | ✅ |
| dark | L1 | surface amethyst soft · texto suave | texto | #E1D1F5 | #433249 (luz yellow/reflexo) | **8.13:1** | 4.5:1 | ✅ |
| dark | L1 | surface amethyst soft · ícone (accent) | gráfico | #C9B1E7 | #433249 (luz yellow/reflexo) | **6.07:1** | 3:1 | ✅ |
| dark | L1 | surface amethyst strong · texto | texto | #171A1D | #A889CC (canvas/liso) | **5.91:1** | 4.5:1 | ✅ |
| dark | L1 | surface amethyst strong · texto suave | texto | #20112E | #A889CC (canvas/liso) | **6.01:1** | 4.5:1 | ✅ |
| dark | L1 | surface amethyst strong · ícone (accent) | gráfico | #20112E | #A889CC (canvas/liso) | **6.01:1** | 3:1 | ✅ |
| dark | L1 | surface moss soft · texto | texto | #F5F8F1 | #373E19 (luz yellow/reflexo) | **10.44:1** | 4.5:1 | ✅ |
| dark | L1 | surface moss soft · texto suave | texto | #D3DEC1 | #373E19 (luz yellow/reflexo) | **7.99:1** | 4.5:1 | ✅ |
| dark | L1 | surface moss soft · ícone (accent) | gráfico | #B4C697 | #373E19 (luz yellow/reflexo) | **6.11:1** | 3:1 | ✅ |
| dark | L1 | surface moss strong · texto | texto | #171A1D | #8DA269 (canvas/liso) | **6.27:1** | 4.5:1 | ✅ |
| dark | L1 | surface moss strong · texto suave | texto | #141D03 | #8DA269 (canvas/liso) | **6.24:1** | 4.5:1 | ✅ |
| dark | L1 | surface moss strong · ícone (accent) | gráfico | #141D03 | #8DA269 (canvas/liso) | **6.24:1** | 3:1 | ✅ |
| dark | L2 | botão secondary · texto | texto | #F6F7F6 | #5A5F68 (hover/reflexo) | **5.96:1** | 4.5:1 | ✅ |
| dark | L2 | botão primary · texto | texto | #171A1D | #9BBEFE (liso) | **9.31:1** | 4.5:1 | ✅ |
| dark | L2 | botão accent · texto | texto | #171A1D | #E0B76F (liso) | **9.30:1** | 4.5:1 | ✅ |
| dark | L2 | botão danger · texto | texto | #171A1D | #FAA2A4 (liso) | **8.96:1** | 4.5:1 | ✅ |
| dark | L2 | botão ghost em neutral soft · texto | texto | #E9ECEB | #51524B (luz yellow/reflexo/hover) | **6.66:1** | 4.5:1 | ✅ |
| dark | L2 | botão ghost em neutral strong · texto | texto | #171A1D | #C5C8C7 (canvas/liso/hover) | **10.34:1** | 4.5:1 | ✅ |
| dark | L2 | botão ghost em cobalt soft · texto | texto | #F2F7FF | #404F69 (luz yellow/reflexo/hover) | **7.66:1** | 4.5:1 | ✅ |
| dark | L2 | botão ghost em cobalt strong · texto | texto | #171A1D | #6389CF (canvas/liso/hover) | **4.99:1** | 4.5:1 | ✅ |
| dark | L2 | botão ghost em ruby soft · texto | texto | #FFF4F4 | #6D3D3D (luz yellow/reflexo/hover) | **8.14:1** | 4.5:1 | ✅ |
| dark | L2 | botão ghost em ruby strong · texto | texto | #171A1D | #C7696F (canvas/liso/hover) | **4.74:1** | 4.5:1 | ✅ |
| dark | L2 | botão ghost em amber soft · texto | texto | #FCF6EB | #5E4F2D (luz yellow/reflexo/hover) | **7.46:1** | 4.5:1 | ✅ |
| dark | L2 | botão ghost em amber strong · texto | texto | #171A1D | #AE8124 (canvas/liso/hover) | **4.99:1** | 4.5:1 | ✅ |
| dark | L2 | botão ghost em verdigris soft · texto | texto | #F0F9F6 | #365748 (luz yellow/reflexo/hover) | **7.46:1** | 4.5:1 | ✅ |
| dark | L2 | botão ghost em verdigris strong · texto | texto | #171A1D | #569985 (canvas/liso/hover) | **5.26:1** | 4.5:1 | ✅ |
| dark | L2 | botão ghost em amethyst soft · texto | texto | #F8F5FD | #594A5E (luz yellow/reflexo/hover) | **7.60:1** | 4.5:1 | ✅ |
| dark | L2 | botão ghost em amethyst strong · texto | texto | #171A1D | #967CB7 (canvas/liso/hover) | **4.87:1** | 4.5:1 | ✅ |
| dark | L2 | botão ghost em moss soft · texto | texto | #F5F8F1 | #4E5533 (luz yellow/reflexo/hover) | **7.36:1** | 4.5:1 | ✅ |
| dark | L2 | botão ghost em moss strong · texto | texto | #171A1D | #7F9260 (canvas/liso/hover) | **5.14:1** | 4.5:1 | ✅ |
| dark | L2 | campo · texto | texto | #F6F7F6 | #282C31 (campo) | **13.08:1** | 4.5:1 | ✅ |
| dark | L2 | campo · placeholder | texto | #B9BEC5 | #282C31 (campo) | **7.52:1** | 4.5:1 | ✅ |
| dark | L2 | campo · contorno (borda ou fundo) vs camada | contorno | #9BA2AC+#282C31 | #4C431C (canvas(luz yellow)) | **3.83:1** | 3:1 | ✅ |
| dark | L2 | foco · anel bicolor vs camada | contorno | #E0B76F+#171A1D | #4C431C (canvas(luz yellow)) | **5.25:1** | 3:1 | ✅ |
| dark | L2 | foco · externo vs interno | contorno | #E0B76F | #171A1D (anel) | **9.30:1** | 3:1 | ✅ |
| dark | ação | primary em fundo · texto | texto | #171A1D | #9BBEFE (liso) | **9.31:1** | 4.5:1 | ✅ |
| dark | ação | primary em fundo · botão × camada | gráfico | #9BBEFE | #4C431C (luz yellow) | **5.25:1** | 3:1 | ✅ |
| dark | ação | accent em fundo · texto | texto | #171A1D | #E0B76F (liso) | **9.30:1** | 4.5:1 | ✅ |
| dark | ação | accent em fundo · botão × camada | gráfico | #E0B76F | #4C431C (luz yellow) | **5.25:1** | 3:1 | ✅ |
| dark | ação | danger em fundo · texto | texto | #171A1D | #FAA2A4 (liso) | **8.96:1** | 4.5:1 | ✅ |
| dark | ação | danger em fundo · botão × camada | gráfico | #FAA2A4 | #4C431C (luz yellow) | **5.06:1** | 3:1 | ✅ |
| dark | ação | primary em neutral soft · texto | texto | #171A1D | #9BBEFE (liso) | **9.31:1** | 4.5:1 | ✅ |
| dark | ação | primary em neutral soft · botão × camada | gráfico | #9BBEFE | #3C3D36 (luz yellow/reflexo) | **5.87:1** | 3:1 | ✅ |
| dark | ação | accent em neutral soft · texto | texto | #171A1D | #E0B76F (liso) | **9.30:1** | 4.5:1 | ✅ |
| dark | ação | accent em neutral soft · botão × camada | gráfico | #E0B76F | #3C3D36 (luz yellow/reflexo) | **5.86:1** | 3:1 | ✅ |
| dark | ação | danger em neutral soft · texto | texto | #171A1D | #FAA2A4 (liso) | **8.96:1** | 4.5:1 | ✅ |
| dark | ação | danger em neutral soft · botão × camada | gráfico | #FAA2A4 | #3C3D36 (luz yellow/reflexo) | **5.64:1** | 3:1 | ✅ |
| dark | ação | primary em neutral strong · texto | texto | #FFFFFF | #264786 (reflexo) | **9.04:1** | 4.5:1 | ✅ |
| dark | ação | primary em neutral strong · botão × camada | gráfico | #1B3D80 | #DCDFDF (canvas/liso) | **7.76:1** | 3:1 | ✅ |
| dark | ação | accent em neutral strong · texto | texto | #FFFFFF | #5E450D (reflexo) | **9.00:1** | 4.5:1 | ✅ |
| dark | ação | accent em neutral strong · botão × camada | gráfico | #563B00 | #DCDFDF (canvas/liso) | **7.77:1** | 3:1 | ✅ |
| dark | ação | danger em neutral strong · texto | texto | #FFFFFF | #7D2331 (reflexo) | **9.77:1** | 4.5:1 | ✅ |
| dark | ação | danger em neutral strong · botão × camada | gráfico | #761726 | #DCDFDF (canvas/liso) | **8.18:1** | 3:1 | ✅ |
| dark | ação | primary em cobalt soft · texto | texto | #171A1D | #92CCB9 (liso) | **9.62:1** | 4.5:1 | ✅ |
| dark | ação | primary em cobalt soft · botão × camada | gráfico | #92CCB9 | #283855 (luz yellow/reflexo) | **6.45:1** | 3:1 | ✅ |
| dark | ação | accent em cobalt soft · texto | texto | #171A1D | #E0B76F (liso) | **9.30:1** | 4.5:1 | ✅ |
| dark | ação | accent em cobalt soft · botão × camada | gráfico | #E0B76F | #283855 (luz yellow/reflexo) | **6.23:1** | 3:1 | ✅ |
| dark | ação | danger em cobalt soft · texto | texto | #171A1D | #FAA2A4 (liso) | **8.96:1** | 4.5:1 | ✅ |
| dark | ação | danger em cobalt soft · botão × camada | gráfico | #FAA2A4 | #283855 (luz yellow/reflexo) | **6.01:1** | 3:1 | ✅ |
| dark | ação | primary em cobalt strong · texto | texto | #FFFFFF | #0D5647 (reflexo) | **8.62:1** | 4.5:1 | ✅ |
| dark | ação | primary em cobalt strong · botão × camada | gráfico | #004D3D | #6D98E7 (canvas/liso) | **3.43:1** | 3:1 | ✅ |
| dark | ação | accent em cobalt strong · texto | texto | #FFFFFF | #5E450D (reflexo) | **9.00:1** | 4.5:1 | ✅ |
| dark | ação | accent em cobalt strong · botão × camada | gráfico | #563B00 | #6D98E7 (canvas/liso) | **3.61:1** | 3:1 | ✅ |
| dark | ação | danger em cobalt strong · texto | texto | #FFFFFF | #7D2331 (reflexo) | **9.77:1** | 4.5:1 | ✅ |
| dark | ação | danger em cobalt strong · botão × camada | gráfico | #761726 | #6D98E7 (canvas/liso) | **3.80:1** | 3:1 | ✅ |
| dark | ação | primary em ruby soft · texto | texto | #171A1D | #9BBEFE (liso) | **9.31:1** | 4.5:1 | ✅ |
| dark | ação | primary em ruby soft · botão × camada | gráfico | #9BBEFE | #592424 (luz yellow/reflexo) | **6.54:1** | 3:1 | ✅ |
| dark | ação | accent em ruby soft · texto | texto | #171A1D | #E0B76F (liso) | **9.30:1** | 4.5:1 | ✅ |
| dark | ação | accent em ruby soft · botão × camada | gráfico | #E0B76F | #592424 (luz yellow/reflexo) | **6.52:1** | 3:1 | ✅ |
| dark | ação | danger em ruby soft · texto | texto | #171A1D | #FAA2A4 (liso) | **8.96:1** | 4.5:1 | ✅ |
| dark | ação | danger em ruby soft · botão × camada | gráfico | #FAA2A4 | #592424 (luz yellow/reflexo) | **6.29:1** | 3:1 | ✅ |
| dark | ação | primary em ruby strong · texto | texto | #FFFFFF | #264786 (reflexo) | **9.04:1** | 4.5:1 | ✅ |
| dark | ação | primary em ruby strong · botão × camada | gráfico | #1B3D80 | #DF747A (canvas/liso) | **3.42:1** | 3:1 | ✅ |
| dark | ação | accent em ruby strong · texto | texto | #FFFFFF | #5E450D (reflexo) | **9.00:1** | 4.5:1 | ✅ |
| dark | ação | accent em ruby strong · botão × camada | gráfico | #563B00 | #DF747A (canvas/liso) | **3.43:1** | 3:1 | ✅ |
| dark | ação | danger em ruby strong · texto | texto | #FFFFFF | #7D2331 (reflexo) | **9.77:1** | 4.5:1 | ✅ |
| dark | ação | danger em ruby strong · botão × camada | gráfico | #761726 | #DF747A (canvas/liso) | **3.61:1** | 3:1 | ✅ |
| dark | ação | primary em amber soft · texto | texto | #171A1D | #9BBEFE (liso) | **9.31:1** | 4.5:1 | ✅ |
| dark | ação | primary em amber soft · botão × camada | gráfico | #9BBEFE | #483813 (luz yellow/reflexo) | **6.06:1** | 3:1 | ✅ |
| dark | ação | accent em amber soft · texto | texto | #171A1D | #92CCB9 (liso) | **9.62:1** | 4.5:1 | ✅ |
| dark | ação | accent em amber soft · botão × camada | gráfico | #92CCB9 | #483813 (luz yellow/reflexo) | **6.26:1** | 3:1 | ✅ |
| dark | ação | danger em amber soft · texto | texto | #171A1D | #FAA2A4 (liso) | **8.96:1** | 4.5:1 | ✅ |
| dark | ação | danger em amber soft · botão × camada | gráfico | #FAA2A4 | #483813 (luz yellow/reflexo) | **5.83:1** | 3:1 | ✅ |
| dark | ação | primary em amber strong · texto | texto | #FFFFFF | #264786 (reflexo) | **9.04:1** | 4.5:1 | ✅ |
| dark | ação | primary em amber strong · botão × camada | gráfico | #1B3D80 | #C39025 (canvas/liso) | **3.61:1** | 3:1 | ✅ |
| dark | ação | accent em amber strong · texto | texto | #FFFFFF | #0D5647 (reflexo) | **8.62:1** | 4.5:1 | ✅ |
| dark | ação | accent em amber strong · botão × camada | gráfico | #004D3D | #C39025 (canvas/liso) | **3.43:1** | 3:1 | ✅ |
| dark | ação | danger em amber strong · texto | texto | #FFFFFF | #7D2331 (reflexo) | **9.77:1** | 4.5:1 | ✅ |
| dark | ação | danger em amber strong · botão × camada | gráfico | #761726 | #C39025 (canvas/liso) | **3.80:1** | 3:1 | ✅ |
| dark | ação | primary em verdigris soft · texto | texto | #171A1D | #9BBEFE (liso) | **9.31:1** | 4.5:1 | ✅ |
| dark | ação | primary em verdigris soft · botão × camada | gráfico | #9BBEFE | #1D4130 (luz yellow/reflexo) | **6.03:1** | 3:1 | ✅ |
| dark | ação | accent em verdigris soft · texto | texto | #171A1D | #E0B76F (liso) | **9.30:1** | 4.5:1 | ✅ |
| dark | ação | accent em verdigris soft · botão × camada | gráfico | #E0B76F | #1D4130 (luz yellow/reflexo) | **6.02:1** | 3:1 | ✅ |
| dark | ação | danger em verdigris soft · texto | texto | #171A1D | #FAA2A4 (liso) | **8.96:1** | 4.5:1 | ✅ |
| dark | ação | danger em verdigris soft · botão × camada | gráfico | #FAA2A4 | #1D4130 (luz yellow/reflexo) | **5.80:1** | 3:1 | ✅ |
| dark | ação | primary em verdigris strong · texto | texto | #FFFFFF | #264786 (reflexo) | **9.04:1** | 4.5:1 | ✅ |
| dark | ação | primary em verdigris strong · botão × camada | gráfico | #1B3D80 | #5EAB93 (canvas/liso) | **3.81:1** | 3:1 | ✅ |
| dark | ação | accent em verdigris strong · texto | texto | #FFFFFF | #5E450D (reflexo) | **9.00:1** | 4.5:1 | ✅ |
| dark | ação | accent em verdigris strong · botão × camada | gráfico | #563B00 | #5EAB93 (canvas/liso) | **3.82:1** | 3:1 | ✅ |
| dark | ação | danger em verdigris strong · texto | texto | #FFFFFF | #7D2331 (reflexo) | **9.77:1** | 4.5:1 | ✅ |
| dark | ação | danger em verdigris strong · botão × camada | gráfico | #761726 | #5EAB93 (canvas/liso) | **4.01:1** | 3:1 | ✅ |
| dark | ação | primary em amethyst soft · texto | texto | #171A1D | #E0B76F (liso) | **9.30:1** | 4.5:1 | ✅ |
| dark | ação | primary em amethyst soft · botão × camada | gráfico | #E0B76F | #433249 (luz yellow/reflexo) | **6.21:1** | 3:1 | ✅ |
| dark | ação | accent em amethyst soft · texto | texto | #171A1D | #92CCB9 (liso) | **9.62:1** | 4.5:1 | ✅ |
| dark | ação | accent em amethyst soft · botão × camada | gráfico | #92CCB9 | #433249 (luz yellow/reflexo) | **6.42:1** | 3:1 | ✅ |
| dark | ação | danger em amethyst soft · texto | texto | #171A1D | #FAA2A4 (liso) | **8.96:1** | 4.5:1 | ✅ |
| dark | ação | danger em amethyst soft · botão × camada | gráfico | #FAA2A4 | #433249 (luz yellow/reflexo) | **5.98:1** | 3:1 | ✅ |
| dark | ação | primary em amethyst strong · texto | texto | #FFFFFF | #5E450D (reflexo) | **9.00:1** | 4.5:1 | ✅ |
| dark | ação | primary em amethyst strong · botão × camada | gráfico | #563B00 | #A889CC (canvas/liso) | **3.51:1** | 3:1 | ✅ |
| dark | ação | accent em amethyst strong · texto | texto | #FFFFFF | #0D5647 (reflexo) | **8.62:1** | 4.5:1 | ✅ |
| dark | ação | accent em amethyst strong · botão × camada | gráfico | #004D3D | #A889CC (canvas/liso) | **3.34:1** | 3:1 | ✅ |
| dark | ação | danger em amethyst strong · texto | texto | #FFFFFF | #7D2331 (reflexo) | **9.77:1** | 4.5:1 | ✅ |
| dark | ação | danger em amethyst strong · botão × camada | gráfico | #761726 | #A889CC (canvas/liso) | **3.70:1** | 3:1 | ✅ |
| dark | ação | primary em moss soft · texto | texto | #171A1D | #9BBEFE (liso) | **9.31:1** | 4.5:1 | ✅ |
| dark | ação | primary em moss soft · botão × camada | gráfico | #9BBEFE | #373E19 (luz yellow/reflexo) | **5.97:1** | 3:1 | ✅ |
| dark | ação | accent em moss soft · texto | texto | #171A1D | #E0B76F (liso) | **9.30:1** | 4.5:1 | ✅ |
| dark | ação | accent em moss soft · botão × camada | gráfico | #E0B76F | #373E19 (luz yellow/reflexo) | **5.96:1** | 3:1 | ✅ |
| dark | ação | danger em moss soft · texto | texto | #171A1D | #FAA2A4 (liso) | **8.96:1** | 4.5:1 | ✅ |
| dark | ação | danger em moss soft · botão × camada | gráfico | #FAA2A4 | #373E19 (luz yellow/reflexo) | **5.74:1** | 3:1 | ✅ |
| dark | ação | primary em moss strong · texto | texto | #FFFFFF | #264786 (reflexo) | **9.04:1** | 4.5:1 | ✅ |
| dark | ação | primary em moss strong · botão × camada | gráfico | #1B3D80 | #8DA269 (canvas/liso) | **3.72:1** | 3:1 | ✅ |
| dark | ação | accent em moss strong · texto | texto | #FFFFFF | #5E450D (reflexo) | **9.00:1** | 4.5:1 | ✅ |
| dark | ação | accent em moss strong · botão × camada | gráfico | #563B00 | #8DA269 (canvas/liso) | **3.73:1** | 3:1 | ✅ |
| dark | ação | danger em moss strong · texto | texto | #FFFFFF | #7D2331 (reflexo) | **9.77:1** | 4.5:1 | ✅ |
| dark | ação | danger em moss strong · botão × camada | gráfico | #761726 | #8DA269 (canvas/liso) | **3.92:1** | 3:1 | ✅ |
| dark | dados | série 1 | gráfico | #73A0F4 | #3C3D36 (luz yellow/reflexo) | **4.23:1** | 3:1 | ✅ |
| dark | dados | série 2 | gráfico | #EC7A80 | #3C3D36 (luz yellow/reflexo) | **4.02:1** | 3:1 | ✅ |
| dark | dados | série 3 | gráfico | #CE9725 | #3C3D36 (luz yellow/reflexo) | **4.23:1** | 3:1 | ✅ |
| dark | dados | série 4 | gráfico | #63B49B | #3C3D36 (luz yellow/reflexo) | **4.47:1** | 3:1 | ✅ |
| dark | dados | série 5 | gráfico | #B190D7 | #3C3D36 (luz yellow/reflexo) | **4.11:1** | 3:1 | ✅ |
| dark | dados | série 6 | gráfico | #95AB6E | #3C3D36 (luz yellow/reflexo) | **4.37:1** | 3:1 | ✅ |
