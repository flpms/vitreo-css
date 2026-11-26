# Relatório de contraste — Vítreo DS

Gerado por `npm run contrast`. Cada linha mostra o **pior caso**: vidros translúcidos são
compostos sobre todos os fundos possíveis (canvas e blocos de luz) e com o reflexo (sheen) aplicado.
Contornos bicolores (chumbo + brilho, anel de foco) passam se uma das cores atinge 3:1 contra o vizinho.

| Tema | Camada | Par | Tipo | Frente | Fundo (pior caso) | Razão | Mínimo | |
|---|---|---|---|---|---|---|---|---|
| light | L0 | canvas · texto | texto | #111111 | #C9D9F8 (luz blue) | **13.25:1** | 4.5:1 | ✅ |
| light | L0 | canvas · texto suave | texto | #4A4A52 | #C9D9F8 (luz blue) | **6.16:1** | 4.5:1 | ✅ |
| light | L1 | surface neutral · texto | texto | #111111 | #FFF0E9 (luz red/liso) | **16.93:1** | 4.5:1 | ✅ |
| light | L1 | surface neutral · texto suave | texto | #4A4A52 | #FFF0E9 (luz red/liso) | **7.87:1** | 4.5:1 | ✅ |
| light | L1 | surface neutral · chumbo+brilho vs camada | contorno | #111111+#FFFDF7 | #C9D9F8 (luz blue) | **13.25:1** | 3:1 | ✅ |
| light | L1 | surface red · texto | texto | #FFFFFF | #A13D34 (canvas/reflexo) | **6.51:1** | 4.5:1 | ✅ |
| light | L1 | surface red · texto suave | texto | #FFE6E2 | #A13D34 (canvas/reflexo) | **5.47:1** | 4.5:1 | ✅ |
| light | L1 | surface red · chumbo+brilho vs camada | contorno | #111111+#FFFDF7 | #C9D9F8 (luz blue) | **13.25:1** | 3:1 | ✅ |
| light | L1 | surface blue · texto | texto | #FFFFFF | #3D5E94 (canvas/reflexo) | **6.49:1** | 4.5:1 | ✅ |
| light | L1 | surface blue · texto suave | texto | #E3ECFD | #3D5E94 (canvas/reflexo) | **5.46:1** | 4.5:1 | ✅ |
| light | L1 | surface blue · chumbo+brilho vs camada | contorno | #111111+#FFFDF7 | #C9D9F8 (luz blue) | **13.25:1** | 3:1 | ✅ |
| light | L1 | surface yellow · texto | texto | #111111 | #EFC52A (luz blue/liso) | **11.38:1** | 4.5:1 | ✅ |
| light | L1 | surface yellow · texto suave | texto | #26262E | #EFC52A (luz blue/liso) | **9.05:1** | 4.5:1 | ✅ |
| light | L1 | surface yellow · chumbo+brilho vs camada | contorno | #111111+#FFFDF7 | #C9D9F8 (luz blue) | **13.25:1** | 3:1 | ✅ |
| light | L1 | surface emerald · texto | texto | #FFFFFF | #256D4F (canvas/reflexo) | **6.21:1** | 4.5:1 | ✅ |
| light | L1 | surface emerald · texto suave | texto | #DDF7EA | #256D4F (canvas/reflexo) | **5.49:1** | 4.5:1 | ✅ |
| light | L1 | surface emerald · chumbo+brilho vs camada | contorno | #111111+#FFFDF7 | #C9D9F8 (luz blue) | **13.25:1** | 3:1 | ✅ |
| light | L2 | botão primary · texto | texto | #FFFFFF | #BB3328 (reflexo) | **5.83:1** | 4.5:1 | ✅ |
| light | L2 | botão secondary · texto | texto | #FFFFFF | #3361AA (reflexo) | **6.16:1** | 4.5:1 | ✅ |
| light | L2 | botão accent · texto | texto | #111111 | #E0AE00 (hover/liso) | **9.19:1** | 4.5:1 | ✅ |
| light | L2 | botão ghost em neutral · texto | texto | #111111 | #E2D5CF (luz red/liso/hover) | **13.17:1** | 4.5:1 | ✅ |
| light | L2 | botão ghost em red · texto | texto | #FFFFFF | #AC544C (canvas/reflexo/hover) | **5.07:1** | 4.5:1 | ✅ |
| light | L2 | botão ghost em blue · texto | texto | #FFFFFF | #5571A1 (canvas/reflexo/hover) | **4.91:1** | 4.5:1 | ✅ |
| light | L2 | botão ghost em yellow · texto | texto | #111111 | #D4AF27 (luz blue/liso/hover) | **8.97:1** | 4.5:1 | ✅ |
| light | L2 | botão ghost em emerald · texto | texto | #FFFFFF | #3F7F65 (canvas/reflexo/hover) | **4.76:1** | 4.5:1 | ✅ |
| light | L2 | campo · texto | texto | #111111 | #FFFDF7 (campo) | **18.56:1** | 4.5:1 | ✅ |
| light | L2 | campo · placeholder | texto | #4A4A52 | #FFFDF7 (campo) | **8.63:1** | 4.5:1 | ✅ |
| light | L2 | controle · chumbo+brilho vs camada | contorno | #111111+#FFFDF7 | #256D4F (emerald(canvas/reflexo)) | **6.11:1** | 3:1 | ✅ |
| light | L2 | foco · anel bicolor vs camada | contorno | #111111+#FFD43B | #256D4F (emerald(canvas/reflexo)) | **4.36:1** | 3:1 | ✅ |
| light | L2 | foco · externo vs interno | contorno | #111111 | #FFD43B (anel) | **13.25:1** | 3:1 | ✅ |
| dark | L0 | canvas · texto | texto | #F5F1E6 | #443501 (luz yellow) | **10.58:1** | 4.5:1 | ✅ |
| dark | L0 | canvas · texto suave | texto | #B9B3A6 | #443501 (luz yellow) | **5.72:1** | 4.5:1 | ✅ |
| dark | L1 | surface neutral · texto | texto | #F5F1E6 | #37332B (luz yellow/reflexo) | **11.10:1** | 4.5:1 | ✅ |
| dark | L1 | surface neutral · texto suave | texto | #B9B3A6 | #37332B (luz yellow/reflexo) | **6.00:1** | 4.5:1 | ✅ |
| dark | L1 | surface neutral · chumbo+brilho vs camada | contorno | #0B0B0F+#B9B3A6 | #443501 (luz yellow) | **5.72:1** | 3:1 | ✅ |
| dark | L1 | surface red · texto | texto | #FFFDF7 | #902C1E (luz yellow/reflexo) | **8.06:1** | 4.5:1 | ✅ |
| dark | L1 | surface red · texto suave | texto | #FFC9C2 | #902C1E (luz yellow/reflexo) | **5.62:1** | 4.5:1 | ✅ |
| dark | L1 | surface red · chumbo+brilho vs camada | contorno | #0B0B0F+#B9B3A6 | #443501 (luz yellow) | **5.72:1** | 3:1 | ✅ |
| dark | L1 | surface blue · texto | texto | #FFFDF7 | #2D4D7F (luz yellow/reflexo) | **8.37:1** | 4.5:1 | ✅ |
| dark | L1 | surface blue · texto suave | texto | #C4D6FA | #2D4D7F (luz yellow/reflexo) | **5.82:1** | 4.5:1 | ✅ |
| dark | L1 | surface blue · chumbo+brilho vs camada | contorno | #0B0B0F+#B9B3A6 | #443501 (luz yellow) | **5.72:1** | 3:1 | ✅ |
| dark | L1 | surface yellow · texto | texto | #111111 | #EBC437 (canvas/liso) | **11.23:1** | 4.5:1 | ✅ |
| dark | L1 | surface yellow · texto suave | texto | #26262E | #EBC437 (canvas/liso) | **8.93:1** | 4.5:1 | ✅ |
| dark | L1 | surface yellow · chumbo+brilho vs camada | contorno | #0B0B0F+#B9B3A6 | #443501 (luz yellow) | **5.72:1** | 3:1 | ✅ |
| dark | L1 | surface emerald · texto | texto | #FFFDF7 | #1B603F (luz yellow/reflexo) | **7.43:1** | 4.5:1 | ✅ |
| dark | L1 | surface emerald · texto suave | texto | #BDEFD6 | #1B603F (luz yellow/reflexo) | **5.93:1** | 4.5:1 | ✅ |
| dark | L1 | surface emerald · chumbo+brilho vs camada | contorno | #0B0B0F+#B9B3A6 | #443501 (luz yellow) | **5.72:1** | 3:1 | ✅ |
| dark | L2 | botão primary · texto | texto | #0B0B0F | #FF5A4E (liso) | **6.38:1** | 4.5:1 | ✅ |
| dark | L2 | botão secondary · texto | texto | #0B0B0F | #5B8DEF (liso) | **6.08:1** | 4.5:1 | ✅ |
| dark | L2 | botão accent · texto | texto | #0B0B0F | #FFD43B (liso) | **13.78:1** | 4.5:1 | ✅ |
| dark | L2 | botão ghost em neutral · texto | texto | #F5F1E6 | #4E4A41 (luz yellow/reflexo/hover) | **7.81:1** | 4.5:1 | ✅ |
| dark | L2 | botão ghost em red · texto | texto | #FFFDF7 | #9D4538 (luz yellow/reflexo/hover) | **6.17:1** | 4.5:1 | ✅ |
| dark | L2 | botão ghost em blue · texto | texto | #FFFDF7 | #46628D (luz yellow/reflexo/hover) | **6.10:1** | 4.5:1 | ✅ |
| dark | L2 | botão ghost em yellow · texto | texto | #111111 | #D1AE33 (canvas/liso/hover) | **8.86:1** | 4.5:1 | ✅ |
| dark | L2 | botão ghost em emerald · texto | texto | #FFFDF7 | #367355 (luz yellow/reflexo/hover) | **5.55:1** | 4.5:1 | ✅ |
| dark | L2 | campo · texto | texto | #F5F1E6 | #1A1A21 (campo) | **15.33:1** | 4.5:1 | ✅ |
| dark | L2 | campo · placeholder | texto | #B9B3A6 | #1A1A21 (campo) | **8.29:1** | 4.5:1 | ✅ |
| dark | L2 | controle · chumbo+brilho vs camada | contorno | #0B0B0F+#B9B3A6 | #1B603F (emerald(luz yellow/reflexo)) | **3.62:1** | 3:1 | ✅ |
| dark | L2 | foco · anel bicolor vs camada | contorno | #FFD43B+#0B0B0F | #1B603F (emerald(luz yellow/reflexo)) | **5.30:1** | 3:1 | ✅ |
| dark | L2 | foco · externo vs interno | contorno | #FFD43B | #0B0B0F (anel) | **13.78:1** | 3:1 | ✅ |
