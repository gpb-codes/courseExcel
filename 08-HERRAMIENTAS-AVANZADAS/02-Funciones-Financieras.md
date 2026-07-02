# Funciones financieras básicas

Las funciones financieras de Excel te permiten calcular préstamos, inversiones, tasas de interés y plazos sin necesidad de fórmulas matemáticas complejas. Aunque el curso es para principiantes, estas funciones son tan útiles en la vida cotidiana que vale la pena dominarlas desde ahora.

## Conceptos financieros básicos

Antes de usar las funciones, es importante entender estos conceptos:

| Término | Significado | Ejemplo |
|---------|-------------|---------|
| **Tasa (tasa)** | Interés por período | 12% anual = 1% mensual |
| **Nper (nper)** | Número total de pagos | 5 años × 12 meses = 60 pagos |
| **VA (va)** | Valor actual (hoy) | Monto del préstamo hoy |
| **VF (vf)** | Valor futuro | Saldo después del último pago |
| **Pago (pago)** | Cantidad por período | Cuota mensual |
| **Tipo (tipo)** | ¿Cuándo se paga? | 0 = final del período, 1 = inicio |

### Convención de signos en Excel

Excel usa una **convención de signos**: los pagos que **salen** de tu bolsillo son negativos; los que **entran** son positivos.

- Si pides un préstamo de $100,000: el VA es **positivo** (recibes el dinero).
- Si pagas $2,000 al mes: el PAGO es **negativo** (sale de tu bolsillo).
- Si ahorras $500 al mes: el ahorro es **negativo** (lo depositas).
- Si recibes $92,000 al final: el VF es **positivo** (lo recibes).

## PAGO (pago de un préstamo)

Calcula el pago periódico (cuota) de un préstamo basado en pagos constantes y una tasa de interés fija.

### Sintaxis

```excel
=PAGO(tasa; nper; va; [vf]; [tipo])
```

| Argumento | Requerido | Descripción |
|-----------|-----------|-------------|
| **tasa** | Sí | Tasa de interés por período (anual / 12 para mensual) |
| **nper** | Sí | Número total de pagos (años × 12 para mensual) |
| **va** | Sí | Valor actual o monto del préstamo |
| **vf** | No | Valor futuro deseado (0 por defecto = saldar la deuda) |
| **tipo** | No | 0 = pago al final del período, 1 = al inicio |

### Ejemplo: Préstamo de $100,000 al 12% anual a 5 años

```excel
=PAGO(12%/12; 5*12; -100000)
```

- **Tasa mensual**: 12% / 12 = 1%
- **Períodos**: 5 × 12 = 60
- **VA**: -100000 (el banco te da el dinero)

Resultado: **$2,224.44** por mes.

### ¿Qué pasa si cambias el plazo?

| Plazo | Pago mensual | Total pagado | Intereses totales |
|-------|-------------|-------------|-------------------|
| 3 años | $3,321.43 | $119,571.48 | $19,571.48 |
| 5 años | $2,224.44 | $133,466.40 | $33,466.40 |
| 10 años | $1,434.71 | $172,165.20 | $72,165.20 |

> **Pro Tip:** Usa PAGO para comparar escenarios de crédito antes de firmar. Un plazo más largo reduce la cuota mensual pero aumenta los intereses totales. Crea una tabla de sensibilidad modificando el plazo y la tasa.

### Ejemplo: Calcular si puedes comprar un auto

Quieres un auto de $15,000. El banco ofrece 36 meses al 9% anual. ¿Cuánto pagarías al mes?

```excel
=PAGO(9%/12; 36; -15000)
```

Resultado: **$477.00** por mes.

## VA (Valor Actual)

Calcula cuánto vale **hoy** una serie de pagos futuros. Es el inverso de PAGO: dado un pago periódico, ¿cuánto puedes pedir prestado?

### Sintaxis

```excel
=VA(tasa; nper; pago; [vf]; [tipo])
```

### Ejemplo: ¿Cuánto puedes pedir prestado?

Ganas $500 al mes para pagar un préstamo a 3 años al 6% anual. ¿Cuánto te prestarían?

```excel
=VA(6%/12; 36; -500)
```

Resultado: **$16,435.51** es el máximo que puedes pedir prestado.

### Ejemplo: ¿Cuánto debo invertir hoy para recibir $1,000 mensuales?

Quieres recibir $1,000 mensuales durante 3 años al 6% anual. ¿Cuánto necesitas invertir hoy?

```excel
=VA(6%/12; 36; 1000)
```

Resultado: Necesitas invertir **$32,871.02** hoy.

## VF (Valor Futuro)

Calcula cuánto valdrá una inversión en el futuro después de hacer pagos periódicos.

### Sintaxis

```excel
=VF(tasa; nper; pago; [va]; [tipo])
```

### Ejemplo: Ahorro para el retiro

Si ahorras $500 al mes al 8% anual durante 10 años:

```excel
=VF(8%/12; 120; -500)
```

| Meses | Ahorro mensual | Tasa anual | Valor futuro |
|-------|---------------|-----------|-------------|
| 60 | $500 | 8% | $36,838.94 |
| 120 | $500 | 8% | $92,417.22 |
| 240 | $500 | 8% | $296,305.88 |

> **Pro Tip:** El **interés compuesto** es la magia detrás del ahorro a largo plazo. Nota cómo al duplicar el tiempo (de 10 a 20 años), el valor futuro se triplica, no se duplica. Empieza a ahorrar temprano.

### Ejemplo: ¿Cuánto tendré si ahorro $200 al mes?

```excel
=VF(6%/12; 12; -200)
```

En un año, ahorrando $200 al mes al 6% anual: **$2,467.11** (aportaste $2,400, ganaste $67.11 en intereses).

## TASA (Tasa de interés)

Calcula la tasa de interés de un préstamo o inversión cuando conoces el pago, plazo y monto.

### Sintaxis

```excel
=TASA(nper; pago; va; [vf]; [tipo])
```

### Ejemplo: ¿Qué tasa de interés te están cobrando?

Pides $10,000 y pagas $450 mensuales durante 24 meses. ¿Qué tasa de interés anual te cobran?

```excel
=TASA(24; -450; 10000) * 12
```

Multiplicas por 12 para convertir la tasa mensual a anual.

Resultado: **~9.19% anual**.

## NPER (Número de Períodos)

Calcula cuántos pagos necesitas para saldar una deuda o alcanzar una meta de ahorro.

### Sintaxis

```excel
=NPER(tasa; pago; va; [vf]; [tipo])
```

### Ejemplo: ¿Cuántos meses para pagar la deuda?

Debes $5,000 al 18% anual y pagas $300 al mes:

```excel
=NPER(18%/12; -300; 5000)
```

Resultado: **~19 meses**.

### Ejemplo: ¿Cuánto tiempo para ahorrar $50,000?

Ahorras $1,000 al mes al 6% anual para llegar a $50,000:

```excel
=NPER(6%/12; -1000; 0; 50000)
```

| Ahorro mensual | Tiempo para $50,000 |
|---------------|---------------------|
| $500 | ~84 meses (7 años) |
| $1,000 | ~45 meses (3.75 años) |
| $2,000 | ~23 meses (≈2 años) |

## Cómo usar estas funciones juntas

Estas funciones están diseñadas para usarse en conjunto. Por ejemplo:

**Caso: Decidir entre dos opciones de financiamiento**

| Opción | Precio | Tasa | Plazo | Pago mensual (PAGO) |
|--------|--------|------|-------|--------------------|
| Banco A | $20,000 | 10% anual | 48 meses | =PAGO(10%/12;48;-20000) = $507.08 |
| Banco B | $20,000 | 12% anual | 60 meses | =PAGO(12%/12;60;-20000) = $444.89 |

**Análisis:** Banco B tiene cuota más baja pero más intereses totales ($6,693 vs $4,340). Depende de tu capacidad de pago mensual.

## Escenario de negocio real

**Contexto:** Estás evaluando la compra de un equipo de cómputo para tu negocio.

**Opción 1 - Contado:** $25,000 (usas tu ahorro).
**Opción 2 - Crédito:** $5,000 de enganche y 12 pagos de $1,800 al 15% anual.

Para comparar, calcula el VA de la opción 2:

```excel
=VA(15%/12; 12; -1800)
```

Si el VA de los pagos es menor a $20,000 (el saldo a financiar), el crédito es más caro que pagar de contado.

## Ejercicio práctico paso a paso

### Ejercicio 1: Préstamo personal

1. En **A1** escribe `Monto del préstamo:`.
2. En **B1** escribe `100000`.
3. En **A2** escribe `Tasa anual:`.
4. En **B2** escribe `12%`.
5. En **A3** escribe `Plazo en años:`.
6. En **B3** escribe `5`.
7. En **A4** escribe `Pago mensual:`.
8. En **B4** escribe `=PAGO(B2/12; B3*12; -B1)`.
9. Cambia el plazo a 10 años y observa cómo baja el pago (pero suben los intereses totales).

### Ejercicio 2: Meta de ahorro

1. En **C1** escribe `Ahorro mensual:`.
2. En **D1** escribe `500`.
3. En **C2** escribe `Tasa anual:`.
4. En **D2** escribe `8%`.
5. En **C3** escribe `Años:`.
6. En **D3** escribe `10`.
7. En **C4** escribe `Valor futuro:`.
8. En **D4** escribe `=VF(D2/12; D3*12; -D1)`.
9. Cambia el ahorro a $1,000 o el plazo a 20 años y observa el impacto.

### Ejercicio 3: ¿Cuánto puedes pagar por una casa?

1. Sabes que puedes pagar **$1,500** al mes.
2. La tasa actual es **7% anual**.
3. El plazo máximo es **30 años**.
4. En **E4** escribe `=VA(7%/12; 30*12; -1500)`.
5. Resultado: **$225,357.82** es el monto máximo que puedes financiar.

## Errores comunes

| Error | Por qué ocurre | Solución |
|-------|---------------|----------|
| **Resultados negativos inesperados** | No respetaste la convención de signos | Recuerda: pagos salientes son negativos, entrantes son positivos |
| **Tasa incorrecta** | Usaste la tasa anual sin dividir entre 12 | Si los pagos son mensuales: tasa / 12 |
| **Períodos incorrectos** | Usaste años en lugar de meses | Plazo en años × 12 para pagos mensuales |
| **#¡NUM!** | La tasa o plazo generan un cálculo imposible | Verifica que la tasa sea realista y que nper > 0 |
| **Resultado no coincide con el banco** | Los bancos usan comisiones y seguros adicionales | Las funciones calculan solo el interés, no costos extras |

## Atajos de teclado

| Atajo | Acción |
|-------|--------|
| `Alt + M + E` | Insertar función financiera |
| `F2` | Editar la celda con la fórmula |
| `F4` | Cambiar entre referencia relativa/absoluta (útil para copiar fórmulas) |
| `Ctrl + Shift + %` | Formato de porcentaje |

## Puntos clave

- **PAGO**: calcula cuotas de préstamos (tasa, nper, VA)
- **VF**: proyecta el crecimiento de ahorros e inversiones
- **VA**: determina cuánto puedes pedir prestado o invertir hoy
- **TASA**: descubre la tasa de interés oculta en un plan de pagos
- **NPER**: calcula cuánto tiempo toma alcanzar una meta financiera
- La convención de signos es clave: pagos que salen son negativos
- Siempre convierte tasa anual a tasa por período (dividir entre 12 para mensual)
- El interés compuesto hace que ahorrar temprano tenga un impacto exponencial

---

**Siguiente tema:** [03-Introduccion-Macros.md](03-Introduccion-Macros.md)
