# INDICE + COINCIDIR

La combinación de `INDICE` y `COINCIDIR` es la alternativa más potente y flexible a `BUSCARV`. Mientras `BUSCARV` tiene limitaciones importantes, `INDICE + COINCIDIR` resuelve todas ellas y te permite hacer búsquedas en cualquier dirección.

---

## ¿Por qué INDICE + COINCIDIR en lugar de BUSCARV?

| Limitación de BUSCARV | Cómo lo resuelve INDICE+COINCIDIR |
|-----------------------|-----------------------------------|
| Solo busca en la primera columna de la tabla | Puedes buscar en cualquier columna |
| El resultado debe estar a la derecha del valor buscado | Puedes buscar hacia la izquierda o derecha |
| Si insertas columnas, el número de columna se desfasa | Usa nombres de rango o columnas independientes |
| No puedes buscar con múltiples criterios fácilmente | Soporta búsquedas con múltiples condiciones |
| La tabla debe ser contigua | Los rangos pueden ser independientes |

---

## COINCIDIR (encontrar la posición)

`=COINCIDIR(valor_buscado; rango_unico; tipo_coincidencia)`

Devuelve la **posición** (un número: 1, 2, 3...) donde encuentra el valor dentro de un rango.

### Argumentos

| Argumento | Descripción | Valor recomendado |
|-----------|-------------|-------------------|
| `valor_buscado` | El valor que quieres encontrar | `"Mouse"` o `E1` |
| `rango_unico` | El rango donde buscar (una sola columna o fila) | `A1:A10` |
| `tipo_coincidencia` | 0 = exacta, 1 = menor o igual, -1 = mayor o igual | **Siempre 0** |

### Ejemplo

| A |
|---|
| Laptop |
| Mouse |
| Teclado |
| Monitor |

`=COINCIDIR("Mouse"; A1:A4; 0)` → **2** (Mouse está en la posición 2 del rango)

### Casos de uso directo

- Saber en qué fila está un dato: `=COINCIDIR("P003"; A1:A100; 0)`
- Verificar si un valor existe (si devuelve `#N/A`, no existe):
  `=NO(ESERROR(COINCIDIR("P003"; A1:A100; 0)))` → VERDADERO si existe

---

## INDICE (devolver el valor de una posición)

`=INDICE(rango; fila; [columna])`

Devuelve el valor que se encuentra en una posición específica dentro de un rango.

### Argumentos

| Argumento | Descripción | Ejemplo |
|-----------|-------------|---------|
| `rango` | El rango del que quieres obtener un valor | `B1:B10` |
| `fila` | La posición (número de fila) dentro del rango | `3` |
| `columna` | La posición de columna (opcional si el rango es 1D) | `1` |

### Ejemplo con tabla

| A | B | C |
|---|---|---|
| Laptop | 800 | 5 |
| Mouse | 25 | 20 |
| Teclado | 45 | 15 |
| Monitor | 250 | 8 |

`=INDICE(A1:A4; 3; 1)` → "Teclado"
`=INDICE(B1:B4; 2; 1)` → 25
`=INDICE(C1:C4; 4; 1)` → 8

> **Nota:** para rangos de una sola columna, el tercer argumento es opcional.
> `=INDICE(B1:B4; 2)` → 25

---

## Cómo juntar INDICE + COINCIDIR

La magia ocurre cuando usamos `COINCIDIR` para encontrar la posición y se la pasamos a `INDICE`.

### Estructura general

`=INDICE(rango_resultado; COINCIDIR(valor_buscado; rango_busqueda; 0))`

1. `COINCIDIR` encuentra la fila donde está el valor buscado.
2. `INDICE` usa esa fila para devolver el valor del rango resultado.

### Ejemplo clásico

| A (Producto) | B (Precio) | C (Stock) |
|---|---|---|
| Laptop | 800 | 5 |
| Mouse | 25 | 20 |
| Teclado | 45 | 15 |
| Monitor | 250 | 8 |

**Buscar el precio de "Teclado":**
`=INDICE(B1:B4; COINCIDIR("Teclado"; A1:A4; 0))`

**Evaluación paso a paso:**
1. `COINCIDIR("Teclado"; A1:A4; 0)` → busca "Teclado" en A1:A4 → devuelve **3**
2. `INDICE(B1:B4; 3)` → devuelve el valor de la fila 3 en B1:B4 → **45**

### Ejemplo práctico con celda de referencia

En **E1** escribes `Mouse`, en **F1** pones:
`=INDICE(B1:B4; COINCIDIR(E1; A1:A4; 0))` → 25

Si cambias E1 a "Monitor", F1 se actualiza a 250.

---

## Ventaja: buscar a la izquierda

Con `BUSCARV`, el resultado debe estar a la **derecha** del valor buscado. Con `INDICE+COINCIDIR`, no hay esa limitación.

### Ejemplo: buscar el producto por su precio

Quieres saber qué producto cuesta 25:

`=INDICE(A1:A4; COINCIDIR(25; B1:B4; 0))` → "Mouse"

Aquí buscamos en la columna B (Precio) y devolvemos de la columna A (Producto). Con BUSCARV esto es imposible sin reordenar las columnas.

### Ejemplo: buscar por stock

`=INDICE(A1:A4; COINCIDIR(20; C1:C4; 0))` → "Mouse" (el único con stock=20)

---

## Ventaja: buscar en múltiples criterios

Puedes buscar donde se cumplan **varias condiciones** simultáneamente.

### Sintaxis para múltiples criterios

`=INDICE(rango_resultado; COINCIDIR(1; (rango1=valor1)*(rango2=valor2); 0))`

### Ejemplo: buscar precio donde Producto="Mouse" Y Stock=20

`=INDICE(B1:B4; COINCIDIR(1; (A1:A4="Mouse")*(C1:C4=20); 0))` → 25

**Cómo funciona:**
1. `(A1:A4="Mouse")` → matriz de VERDADERO/FALSO
2. `(C1:C4=20)` → matriz de VERDADERO/FALSO
3. Al multiplicar (VERDADERO*VERDADERO = 1, cualquier otra combinación = 0)
4. `COINCIDIR(1; ...)` busca la fila donde ambos son 1

> **Importante:** esta fórmula debe ingresarse con `Ctrl + Mayús + Enter` (fórmula matricial en versiones anteriores a Excel 365).

---

## Ventaja: tolerante a inserción de columnas

Si insertas una columna en el medio de tu tabla:

| A | B | C | D |
|---|---|---|---|
| Producto | Categoría | Precio | Stock |

En `BUSCARV`, si buscabas columna 2 y se insertó una columna nueva, ahora el resultado es incorrecto (la columna 2 ya no es la que esperabas).

En `INDICE+COINCIDIR` usas rangos independientes. `INDICE(C1:C4; ...)` siempre apunta a Precio, sin importar cuántas columnas insertes entre A y C.

---

## PRO TIPS

> **Pro Tip #1 — Combinación con validación de datos**
> Usa una lista desplegable (validación de datos) para elegir el producto y que INDICE+COINCIDIR busque el precio automáticamente. Crea un formulario de consulta interactivo.

> **Pro Tip #2 — Rango dinámico con DESREF**
> Combínalo con `DESREF` para que el rango crezca automáticamente al agregar datos:
> `=INDICE(DESREF(B1;0;0;CONTARA(A:A);1); COINCIDIR(E1; DESREF(A1;0;0;CONTARA(A:A);1); 0))`

> **Pro Tip #3 — INDICE+COINCIDIR con dos columnas de resultado**
> Una misma función COINCIDIR puede alimentar múltiples INDICE:
> `=INDICE(B1:B10; COINCIDIR(E1; A1:A10; 0))` para Precio
> `=INDICE(C1:C10; COINCIDIR(E1; A1:A10; 0))` para Stock
> Solo pagas el costo de la búsqueda una vez.

> **Pro Tip #4 — Reemplazo completo de BUSCARV**
> Si dominas INDICE+COINCIDIR, puedes olvidarte de BUSCARV. Esta combinación es más rápida en cálculos (Excel la procesa más eficientemente) y mucho más flexible.

---

## Escenario empresarial: consulta de productos

Eres gerente de logística y necesitas un sistema de consulta rápida de productos.

**Tabla de inventario (A1:D10):**

| Producto | Código | Precio | Stock |
|----------|--------|--------|-------|
| Laptop HP | HP-001 | 800 | 15 |
| Mouse Genérico | MG-002 | 25 | 50 |
| Teclado Mecánico | TM-003 | 45 | 30 |
| Monitor Dell | MD-004 | 250 | 12 |
| Silla Ergo | SE-005 | 120 | 8 |

**Panel de consulta (F1:H3):**

| F | G | H |
|---|---|---|
| Código a buscar: | `HP-001` | |
| Precio: | `=INDICE(C2:C6; COINCIDIR(G1; B2:B6; 0))` | → 800 |
| Stock: | `=INDICE(D2:D6; COINCIDIR(G1; B2:B6; 0))` | → 15 |

**Ventajas sobre BUSCARV:**
- Busca por código (columna B), no necesita que esté en la primera columna.
- Devuelve precio y stock con dos INDICE independientes.
- Si alguien mueve columnas, las fórmulas no se rompen.

---

## Errores comunes

| Error | Descripción | Solución |
|-------|-------------|----------|
| **`#N/A`** | COINCIDIR no encontró el valor | Verifica que el valor exista y no tenga espacios extra |
| **`#¡VALOR!`** | Los rangos tienen diferentes dimensiones | Asegura que el rango de COINCIDIR y el de INDICE tengan el mismo número de filas |
| **Resultado incorrecto** | El tipo de coincidencia no es 0 | Usa siempre `0` en el tercer argumento de COINCIDIR |
| **Fórmula matricial no funciona** | En Excel anterior a 365, falta `Ctrl + Mayús + Enter` | Presiona `Ctrl + Mayús + Enter` para fórmulas con múltiples criterios |
| **Busca en toda la columna** | Usar `A:A` en rangos grandes es lento | Limita los rangos a los datos reales (ej: `A1:A1000`) |

---

## Ejercicio práctico completo

### Parte 1: Crear la tabla

En **A1:C6**:

| A | B | C |
|---|---|---|
| Producto | Precio | Stock |
| Laptop | 800 | 5 |
| Mouse | 25 | 20 |
| Teclado | 45 | 15 |
| Monitor | 250 | 8 |
| Silla | 120 | 12 |

### Parte 2: COINCIDIR (entender posiciones)

1. En **E1**: `=COINCIDIR("Mouse"; A2:A6; 0)` → debe dar 2 (Mouse está en fila 2 del rango)
2. En **E2**: `=COINCIDIR("Silla"; A2:A6; 0)` → debe dar 5
3. En **E3**: `=COINCIDIR("Audífonos"; A2:A6; 0)` → debe dar `#N/A` (no existe)

### Parte 3: INDICE (entender el resultado)

1. En **F1**: `=INDICE(A2:A6; 3; 1)` → "Teclado"
2. En **F2**: `=INDICE(B2:B6; 4; 1)` → 250
3. En **F3**: `=INDICE(C2:C6; 1; 1)` → 5

### Parte 4: INDICE + COINCIDIR juntos

1. En **H1** escribe `Producto`, **I1** `Precio`, **J1** `Stock`.
2. En **H2** escribe `Monitor`.
3. En **I2**: `=INDICE(B2:B6; COINCIDIR(H2; A2:A6; 0))` → debe mostrar 250
4. En **J2**: `=INDICE(C2:C6; COINCIDIR(H2; A2:A6; 0))` → debe mostrar 8
5. Cambia H2 a "Teclado". I2 debe cambiar a 45, J2 a 15.

### Parte 5: Buscar a la izquierda (lo que BUSCARV no puede hacer)

1. En **L1** escribe `Precio`, **M1** `Producto`.
2. En **L2** escribe **25**.
3. En **M2**: `=INDICE(A2:A6; COINCIDIR(L2; B2:B6; 0))` → debe mostrar "Mouse"
4. Cambia L2 a **120** → debe mostrar "Silla".

### Parte 6: Múltiples criterios

1. En **N1** escribe `Producto`, **O1** `Color`, **P1** **Rdo**.
2. Agrega una columna **D** con valores de color: Rojo, Verde, Azul, Rojo, Azul.
3. En **N3** escribe `Mouse`, **O3** `Verde`.
4. En **P3**: `=INDICE(B2:B6; COINCIDIR(1; (A2:A6=N3)*(D2:D6=O3); 0))`
5. Presiona `Ctrl + Mayús + Enter` si usas Excel anterior a 365.
6. Debe mostrar 25 (Mouse Verde cuesta 25).
7. Guarda como `06-indice-coincidir.xlsx`.

---

## Key Takeaways

- `COINCIDIR` encuentra la **posición** de un valor en un rango; `INDICE` devuelve el **valor** en una posición.
- Juntos, `INDICE + COINCIDIR` reemplazan a `BUSCARV` con mucha más flexibilidad.
- Puedes buscar **a la izquierda** (el resultado antes del valor buscado), cosa imposible con BUSCARV.
- Soporta **búsqueda con múltiples criterios** combinando condiciones con multiplicación matricial.
- Es **tolerante a inserciones** de columnas — las fórmulas no se rompen.
- Para búsquedas simples, `BUSCARV` es más directa. Para búsquedas complejas o profesionales, usa `INDICE + COINCIDIR`.

---

**Siguiente tema:** [04-Funciones-Anidadas.md](04-Funciones-Anidadas.md)
