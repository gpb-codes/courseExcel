# Funciones SI, Y, O

Las funciones lógicas son el cerebro de Excel. Permiten que una celda **tome decisiones** basadas en condiciones. En lugar de solo mostrar un valor fijo, una celda con una función lógica puede mostrar "Aprobado" o "Reprobado", "Sí" o "No", "Bono" o "Sin bono", dependiendo de los datos.

---

## La función SI

`=SI(condición; valor_si_verdadero; valor_si_falso)`

La función `SI` evalúa una condición y devuelve un resultado si es VERDADERA y otro si es FALSA.

### Anatomía de la función

| Argumento | Descripción | Ejemplo |
|-----------|-------------|---------|
| `condición` | Una expresión que da VERDADERO o FALSO | `A1>=60` |
| `valor_si_verdadero` | Lo que se muestra si la condición se cumple | `"Aprobado"` |
| `valor_si_falso` | Lo que se muestra si la condición no se cumple | `"Reprobado"` |

### Ejemplo clásico: ¿Aprobaste?

| A (Nota) | B (Resultado) |
|----------|---------------|
| 85 | `=SI(A1>=60; "Aprobado"; "Reprobado")` |
| 45 | `=SI(A2>=60; "Aprobado"; "Reprobado")` |
| 90 | `=SI(A3>=60; "Aprobado"; "Reprobado")` |

**Resultados:**
- A1=85 → 85>=60 es VERDADERO → "Aprobado"
- A2=45 → 45>=60 es FALSO → "Reprobado"
- A3=90 → 90>=60 es VERDADERO → "Aprobado"

### Casos de uso reales

| Situación | Fórmula |
|-----------|---------|
| ¿Supera el mínimo de ventas? | `=SI(B2>=10000; "Meta cumplida"; "Meta no cumplida")` |
| ¿Hay stock suficiente? | `=SI(C2>=10; "Stock OK"; "Reabastecer")` |
| ¿El pago está vencido? | `=SI(HOY()>D2; "Vencido"; "Al día")` |
| Asignar categoría por edad | `=SI(A1>=18; "Adulto"; "Menor")` |

---

## Operadores de comparación

Estos operadores se usan dentro de la condición del SI:

| Operador | Significado | Ejemplo | Resultado |
|----------|-------------|---------|-----------|
| `=` | Igual a | `A1="Sí"` | VERDADERO si A1 contiene exactamente "Sí" |
| `>` | Mayor que | `A1>100` | VERDADERO si A1 > 100 |
| `<` | Menor que | `A1<50` | VERDADERO si A1 < 50 |
| `>=` | Mayor o igual | `A1>=60` | VERDADERO si A1 >= 60 |
| `<=` | Menor o igual | `A1<=100` | VERDADERO si A1 <= 100 |
| `<>` | Distinto de | `A1<>""` | VERDADERO si A1 NO está vacío |

> **Texto vs Números:** las comparaciones de texto no distinguen mayúsculas/minúsculas en Excel. `"Sí"` y `"sí"` son iguales.

---

## SI anidado (múltiples condiciones)

Cuando tienes más de dos resultados posibles, puedes poner un `SI` dentro de otro `SI`.

### Sintaxis

`=SI(condición1; resultado1; SI(condición2; resultado2; SI(condición3; resultado3; resultado_final)))`

### Ejemplo: calificaciones

| Nota | Fórmula |
|------|---------|
| 95 | `=SI(A1>=90; "Sobresaliente"; SI(A1>=70; "Notable"; SI(A1>=60; "Aprobado"; "Reprobado")))` |
| 75 | (misma fórmula) |
| 55 | (misma fórmula) |

**Evaluación paso a paso para A1=75:**
1. ¿75>=90? → FALSO → pasa al siguiente SI
2. ¿75>=70? → VERDADERO → devuelve "Notable"

**Evaluación paso a paso para A1=95:**
1. ¿95>=90? → VERDADERO → devuelve "Sobresaliente" (se detiene, no sigue evaluando)

> **Regla clave:** Excel evalúa de **izquierda a derecha**. En cuanto una condición es VERDADERA, devuelve el resultado y se detiene. Por eso el orden de las condiciones importa.

### Escenario real: comisiones por ventas

| Vendedor | Ventas | Comisión |
|----------|--------|----------|
| Ana | 25000 | `=SI(B2>=30000; "15%"; SI(B2>=20000; "10%"; SI(B2>=10000; "5%"; "0%")))` |
| Luis | 18000 | (misma fórmula) |
| María | 5000 | (misma fórmula) |

**Resultados:** Ana → 10%, Luis → 5%, María → 0%

### Límite de anidamiento

Excel permite hasta **64 SI anidados**. Sin embargo, en la práctica, con más de 3-4 niveles el código se vuelve difícil de leer y mantener. Para casos complejos, considera usar:

- `BUSCARV` con tabla de referencia
- `ELEGIR`
- `SI.CONJUNTO` (Excel 2019+ y 365)

---

## Función Y

`=Y(condición1; condición2; ...)`

Devuelve **VERDADERO** solo si **TODAS** las condiciones son verdaderas. Si alguna es falsa, devuelve FALSO.

### Tabla de verdad de Y

| Condición 1 | Condición 2 | Resultado de Y |
|-------------|-------------|----------------|
| VERDADERO | VERDADERO | **VERDADERO** |
| VERDADERO | FALSO | FALSO |
| FALSO | VERDADERO | FALSO |
| FALSO | FALSO | FALSO |

### Ejemplo: bono por cumplir ventas Y asistencia

| Empleado | Ventas | Asistencia | Bono |
|----------|--------|------------|------|
| Ana | 12000 | 98 | `=SI(Y(B2>=10000; C2>=95); "Bono completo"; "Sin bono")` |
| Luis | 15000 | 80 | (misma fórmula) |
| María | 8000 | 97 | (misma fórmula) |

**Resultados:**
- Ana: ventas >= 10000 (SÍ) Y asistencia >= 95 (SÍ) → **"Bono completo"**
- Luis: ventas >= 10000 (SÍ) Y asistencia >= 95 (NO) → **"Sin bono"**
- María: ventas >= 10000 (NO) Y asistencia >= 95 (SÍ) → **"Sin bono"**

### Otros usos de Y

- `=Y(A1>0; A1<100)` → número entre 1 y 99
- `=Y(A1<>""; A2<>"")` → ambas celdas no están vacías
- `=Y(MES(A1)=1; AÑO(A1)=2024)` → enero de 2024

---

## Función O

`=O(condición1; condición2; ...)`

Devuelve **VERDADERO** si **AL MENOS UNA** condición es verdadera. Solo devuelve FALSO si todas son falsas.

### Tabla de verdad de O

| Condición 1 | Condición 2 | Resultado de O |
|-------------|-------------|----------------|
| VERDADERO | VERDADERO | **VERDADERO** |
| VERDADERO | FALSO | **VERDADERO** |
| FALSO | VERDADERO | **VERDADERO** |
| FALSO | FALSO | FALSO |

### Ejemplo: descuento para jubilados O estudiantes

| Cliente | Tipo | Descuento |
|---------|------|-----------|
| Don José | Jubilado | `=SI(O(B2="Jubilado"; B2="Estudiante"); "10% descuento"; "Precio normal")` |
| Laura | Estudiante | (misma fórmula) |
| Carlos | Profesional | (misma fórmula) |

**Resultados:**
- Don José: ¿Jubilado? **SÍ** → **"10% descuento"**
- Laura: ¿Estudiante? **SÍ** → **"10% descuento"**
- Carlos: ¿Jubilado? NO, ¿Estudiante? NO → **"Precio normal"**

### Otros usos de O

- `=O(A1=""; A2="")` → alguna de las celdas está vacía
- `=O(DIAS.LAB(HOY();A1)<=5; B1="Urgente")` → urgente por plazo o etiqueta
- `=O(A1="Rojo"; A1="Azul"; A1="Verde")` → el valor es un color primario

---

## Combinar SI + Y + O

Puedes combinar `Y` y `O` dentro de un mismo `SI` para condiciones complejas.

### Sintaxis combinada

`=SI(Y(condición1; O(condición2; condición3)); valor_verdadero; valor_falso)`

### Ejemplo: campaña de marketing

Quieres enviar una oferta especial a clientes que cumplan:
- **Y**: sean cliente Premium (A1="Premium")
- **O**: hayan comprado más de $10,000 en el último mes **O** tengan más de 5 años como clientes

`=SI(Y(A1="Premium"; O(B1>10000; C1>=5)); "Enviar oferta"; "No enviar")`

### Ejemplo: préstamo bancario

Aprobación de préstamo si:
- Ingresos >= 30000 **Y** (antigüedad laboral >= 2 años **O** score crediticio > 700)

`=SI(Y(B2>=30000; O(C2>=2; D2>700)); "Aprobado"; "Rechazado")`

---

## PRO TIPS

> **Pro Tip #1 — SI + Y + O con rangos completos**
> Puedes usar `Y` y `O` con rangos para validar múltiples filas. Ej: `=Y(A1:A10>0)` devuelve FALSO si algún valor es <=0. Esto funciona como fórmula matricial.

> **Pro Tip #2 — SI con valores lógicos directos**
> No necesitas `SI(A1=VERDADERO;...)`. Si A1 ya contiene VERDADERO o FALSO, puedes usar `=SI(A1; "Sí"; "No")`.

> **Pro Tip #3 — Usar + y * en lugar de Y y O**
> En fórmulas matriciales, `(A1:A10="Sí")*1` convierte los VERDADEROS en 1 y FALSO en 0. Equivale a Y. La suma `+` equivale a O.

> **Pro Tip #4 — SI con formato condicional**
> Combina las funciones lógicas con **Formato condicional**. Por ejemplo, resalta en rojo las celdas donde `=SI(Y(B2<10000; C2<95); "Riesgo"; "OK")`.

---

## Errores comunes

| Error | Descripción | Solución |
|-------|-------------|----------|
| **Texto sin comillas** | `=SI(A1=Si;...)` falta comillas alrededor de texto | `=SI(A1="Si";...)` |
| **Punto y coma vs coma** | En español se usa `;` como separador de argumentos | Usa `;` si tu Excel está en español |
| **Demasiados SI anidados** | Más de 5 niveles se vuelve ilegible | Usa `BUSCARV` o `SI.CONJUNTO` como alternativa |
| **Referencia circular** | La fórmula se refiere a su propia celda | Usa una celda auxiliar para cálculos intermedios |
| **No evalúa correctamente** | Condiciones en orden incorrecto en SI anidados | Revisa que las condiciones más restrictivas vayan primero |

---

## Ejercicio práctico completo

### Parte 1: Datos de empleados

Crea esta tabla empezando en A1:

| A | B | C | D | E |
|---|---|---|---|---|
| Nombre | Ventas | Asistencia % | Categoría | Bono |
| Ana | 18000 | 100 | | |
| Luis | 9500 | 85 | | |
| María | 22000 | 98 | | |
| Carlos | 12000 | 70 | | |
| Sofía | 5000 | 95 | | |

### Parte 2: SI básico para categoría

En **D2**, escribe:
`=SI(B2>=15000; "Oro"; SI(B2>=10000; "Plata"; "Bronce"))`

Arrastra hacia abajo hasta D6.

### Parte 3: SI + Y para bono

En **E2**, escribe:
`=SI(Y(B2>=10000; C2>=95); "Sí"; "No")`

Arrastra hacia abajo hasta E6.

### Parte 4: SI + O para descuento

En **G1** escribe `Descuento`. En **G2**:
`=SI(O(D2="Oro"; D2="Plata"); "10% desc."; "")`

Arrastra hacia abajo. Observa que los de categoría "Bronce" no reciben descuento.

### Parte 5: Combinación compleja

En **H1** escribe `Bono especial`. En **H2**:
`=SI(Y(B2>=10000; O(C2>=95; D2="Oro")); "Bono especial"; "")`

### Parte 6: Prueba de escenarios

1. Cambia las ventas de Luis a 16000. ¿Su categoría cambia a Plata?
2. Cambia la asistencia de Carlos a 96. ¿Ahora recibe bono?
3. ¿Qué pasa si pones un texto en lugar de número en Ventas?
4. Guarda como `06-si-logicas.xlsx`.

---

## Key Takeaways

- `SI(condición; verdadero; falso)` es la función lógica fundamental de Excel.
- `Y` requiere que **todas** las condiciones sean verdaderas; `O` requiere **al menos una**.
- Los SI anidados se evalúan de izquierda a derecha; ordena condiciones de la más restrictiva a la más general.
- Combina `SI` + `Y` + `O` para crear lógicas complejas de negocio.
- Los valores de texto deben ir entre **comillas dobles** (`"Sí"`).
- Si necesitas más de 3-4 niveles de SI, considera usar `BUSCARV` o `SI.CONJUNTO`.

---

**Siguiente tema:** [02-BUSCARV-BUSCARH.md](02-BUSCARV-BUSCARH.md)
