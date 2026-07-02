# BUSCARV y BUSCARH

**BUSCARV** (búsqueda vertical) y **BUSCARH** (búsqueda horizontal) son funciones que buscan un valor dentro de una tabla y devuelven un valor relacionado. Son esenciales para trabajar con bases de datos, catálogos y tablas de referencia.

---

## ¿Cuándo usar BUSCARV?

Imagina que tienes una **tabla maestra** con información de productos:

| Código | Producto | Precio | Categoría |
|--------|----------|--------|-----------|
| P001 | Laptop | 800 | Electrónica |
| P002 | Mouse | 25 | Electrónica |
| P003 | Teclado | 45 | Electrónica |

Y en otra parte tienes una lista de ventas donde solo tienes el código. Necesitas **buscar el precio** automáticamente. Ahí entra BUSCARV.

**Usos típicos:**
- Buscar el precio de un producto por su código.
- Obtener el nombre del empleado por su ID.
- Buscar la calificación de un estudiante por su matrícula.
- Encontrar la dirección de un cliente por su RFC.

---

## Sintaxis de BUSCARV

`=BUSCARV(valor_buscado; tabla; columna_resultado; falso)`

| Argumento | Descripción | Ejemplo |
|-----------|-------------|---------|
| `valor_buscado` | El valor que quieres encontrar | `E1` (contiene "P003") |
| `tabla` | El rango donde buscar (incluye la columna del valor y la del resultado) | `$A$1:$D$100` |
| `columna_resultado` | Número de columna dentro de la tabla (1=primera columna de la tabla) | `2` (devuelve columna B) |
| `falso` | **SIEMPRE** usa FALSO (coincidencia exacta) | `FALSO` o `0` |

### Reglas de oro de BUSCARV

1. **El valor buscado debe estar en la PRIMERA columna** de tu rango tabla.
2. **Usa SIEMPRE FALSO** (o 0) para búsqueda exacta. VERDADERO causa errores difíciles de detectar.
3. **Usa referencias absolutas** (`$A$1:$D$100`) para la tabla para poder arrastrar la fórmula.
4. **Valor buscado y tabla deben coincidir en tipo:** ambos texto o ambos número.
5. **El número de columna cuenta desde el inicio de la tabla**, no desde la hoja.

---

## Ejemplo básico paso a paso

### Datos iniciales

Tabla de precios en A1:B5:

| Código | Precio |
|--------|--------|
| P001 | 500 |
| P002 | 1200 |
| P003 | 300 |
| P004 | 850 |

### Fórmula

En E1 escribes `P003` (el código que buscas).
En F1 escribes: `=BUSCARV(E1; $A$1:$B$5; 2; FALSO)`

**Resultado:** 300

### Explicación

1. Excel busca `P003` en la primera columna del rango `$A$1:$B$5` (columna A).
2. Lo encuentra en la fila 3.
3. Devuelve el valor de la columna 2 de ese rango (columna B) en la misma fila → 300.

---

## Ejemplo: tabla de empleados

| ID | Nombre | Departamento | Salario |
|----|--------|-------------|---------|
| E001 | Ana López | Ventas | 35000 |
| E002 | Luis Pérez | IT | 42000 |
| E003 | María Ruiz | RH | 28000 |
| E004 | Carlos Solís | Finanzas | 38000 |

**Buscar departamento de E003:**
`=BUSCARV("E003"; $A$1:$D$5; 3; FALSO)` → "RH"

**Buscar salario de E001:**
`=BUSCARV("E001"; $A$1:$D$5; 4; FALSO)` → 35000

---

## La columna resultado: Error común

El número de columna **se cuenta dentro de la tabla**, no de la hoja.

| A | B | C | D | E |
|---|---|---|---|---|
| ID | Nombre | Depto | Salario | Bono |

Si defines la tabla como `$A$1:$D$5`:
- Columna 1 = A (ID)
- Columna 2 = B (Nombre)
- Columna 3 = C (Depto)
- Columna 4 = D (Salario)

Si quieres buscar por ID y obtener el **Salario**, usas columna **4**.

---

## SI.ERROR + BUSCARV (manejo de errores)

Cuando BUSCARV no encuentra el valor, devuelve `#N/A`. Para evitar que este error se vea en tu reporte:

`=SI.ERROR(BUSCARV(E1; $A$1:$B$5; 2; FALSO); "No encontrado")`

### Escenario real

Tienes 1000 ventas y algunas usan códigos de producto que ya no están en el catálogo. En lugar de `#N/A` aparecerá "No encontrado" o "Producto descontinuado".

### Variantes útiles

`=SI.ERROR(BUSCARV(E1; $A$1:$B$5; 2; FALSO); 0)` → muestra 0 si no existe

`=SI.ERROR(BUSCARV(E1; $A$1:$B$5; 2; FALSO); "")` → muestra celda vacía

---

## BUSCARH (búsqueda horizontal)

`BUSCARH` funciona igual que `BUSCARV`, pero busca en la **primera fila** (horizontal) y devuelve un valor de la misma columna en otra fila.

### Sintaxis

`=BUSCARH(valor_buscado; tabla; fila_resultado; FALSO)`

### Cuándo usar BUSCARH

Cuando tus datos están organizados en filas en lugar de columnas:

| A | B | C | D | E |
|---|---|---|---|---|
| Producto | Laptop | Mouse | Teclado | Monitor |
| Precio | 800 | 25 | 45 | 250 |
| Stock | 5 | 20 | 15 | 8 |

**Buscar precio de "Teclado":**
`=BUSCARH("Teclado"; $A$1:$E$3; 2; FALSO)` → 45

**Buscar stock de "Monitor":**
`=BUSCARH("Monitor"; $A$1:$E$3; 3; FALSO)` → 8

---

## PRO TIPS

> **Pro Tip #1 — BUSCARV con Tabla de Excel**
> Si conviertes tu tabla de búsqueda en una **Tabla de Excel** (`Ctrl+T`) llamada `Productos`, puedes usar:
> `=BUSCARV(E1; Productos; 2; FALSO)`
> La referencia es dinámica — al agregar productos, BUSCARV los incluye automáticamente.

> **Pro Tip #2 — Aproximación con VERDADERO para rangos**
> Si usas `1` en lugar de `FALSO`, BUSCARV hace búsqueda aproximada. Útil para rangos de comisiones:
> `=BUSCARV(A1; $D$1:$E$5; 2; VERDADERO)` donde D1:D5 tiene umbrales (0, 1000, 5000, 10000) y E1:E5 los porcentajes.

> **Pro Tip #3 — Concatenar para búsqueda con múltiples criterios**
> ¿Necesitas buscar por dos columnas (ej: Producto + Talla)? Crea una columna auxiliar combinada:
> `=BUSCARV(A1&B1; $D$1:$E$100; 2; FALSO)` donde D es la columna auxiliar con `=A2&B2`.

> **Pro Tip #4 — BUSCARV con coincidencia parcial usando comodines**
> Puedes usar `*` en el valor buscado. Ej: `=BUSCARV("Lap*"; $A$1:$B$100; 2; FALSO)` encuentra el primer valor que empiece con "Lap".

---

## Escenario empresarial: facturación automática

Tienes un catálogo de productos en una hoja llamada `Catálogo`:

| A | B | C |
|---|---|---|
| Código | Producto | Precio |
| P001 | Laptop HP | $800 |
| P002 | Mouse Inalámbrico | $25 |
| P003 | Teclado Mecánico | $45 |
| P004 | Monitor 24" | $250 |
| P005 | Silla Ergonómica | $120 |

En otra hoja (`Factura`), capturas los códigos y quieres que el producto y precio se llenen automáticamente:

| A | B | C | D |
|---|---|---|---|
| Cantidad | Código | Producto | Precio |
| 2 | P003 | `=BUSCARV(B2; Catalogo!$A$1:$C$6; 2; FALSO)` | `=BUSCARV(B2; Catalogo!$A$1:$C$6; 3; FALSO)` |
| 5 | P001 | `=BUSCARV(B3; Catalogo!$A$1:$C$6; 2; FALSO)` | `=BUSCARV(B3; Catalogo!$A$1:$C$6; 3; FALSO)` |

**Beneficio:** escribes solo el código y el sistema completa el resto. Sin errores de tipeo en nombres o precios.

### Con SI.ERROR para códigos inexistentes

`=SI.ERROR(BUSCARV(B2; Catálogo!$A$1:$C$6; 2; FALSO); "Código inválido")`

---

## Errores comunes

| Error | Descripción | Solución |
|-------|-------------|----------|
| **`#N/A`** | No encontró el valor buscado | Verifica que exista. Revisa espacios extra con `=ESPACIOS(A1)` |
| **`#¡REF!`** | El número de columna es mayor al ancho de la tabla | Si tu tabla tiene 3 columnas, el máximo es 3 |
| **Valor incorrecto** | La columna resultado apunta a la columna equivocada | Recuerda: la columna 1 es la primera columna de la tabla, no de la hoja |
| **`#¡VALOR!`** | El valor buscado y la tabla no coinciden en tipo | Si buscas un número, la primera columna debe tener números |
| **Resultado incorrecto con VERDADERO** | Usaste VERDADERO en lugar de FALSO | Siempre usa `FALSO` o `0` para búsqueda exacta |
| **No funciona al arrastrar** | No usaste referencias absolutas (`$A$1:$B$100`) | Cambia a `$A$1:$B$100` para que la tabla no se mueva |

---

## Ejercicio práctico completo

### Parte 1: Crear tabla de catálogo

En **A1:C6** crea la tabla de productos:

| A | B | C |
|---|---|---|
| Código | Producto | Precio |
| P001 | Laptop | 800 |
| P002 | Mouse | 25 |
| P003 | Teclado | 45 |
| P004 | Monitor | 250 |
| P005 | Silla | 120 |

### Parte 2: BUSCARV básico

1. En **E1** escribe `Código`, en **F1** `Producto`, en **G1** `Precio`.
2. En **E2** escribe `P003`.
3. En **F2**: `=BUSCARV(E2; $A$2:$C$6; 2; FALSO)` → debe mostrar "Teclado"
4. En **G2**: `=BUSCARV(E2; $A$2:$C$6; 3; FALSO)` → debe mostrar 45

### Parte 3: Probar diferentes códigos

1. Cambia E2 a `P005`. Producto debe cambiar a "Silla", Precio a 120.
2. Cambia E2 a `P001`. Producto = "Laptop", Precio = 800.
3. Escribe `P099` en E2. Debe aparecer `#N/A` (no existe).

### Parte 4: Manejo de errores con SI.ERROR

1. En **E4** escribe `Código` y **F4** `Producto (seguro)`.
2. En **E5** escribe `P099`.
3. En **F5**: `=SI.ERROR(BUSCARV(E5; $A$2:$C$6; 2; FALSO); "No existe")`
4. Debe mostrar "No existe" en lugar de `#N/A`.

### Parte 5: BUSCARV con otra hoja

1. Crea una **nueva hoja** llamada `Ventas`.
2. En Ventas, escribe en **A1**: `Código`, **B1**: `Precio`.
3. En **A2**: `P004`.
4. En **B2**: `=BUSCARV(A2; Catálogo!$A$2:$C$6; 3; FALSO)` (nota la referencia a la otra hoja).
5. Debe mostrar 250.

### Parte 6: BUSCARH

1. En una nueva hoja, escribe datos horizontalmente:

| A | B | C | D | E |
|---|---|---|---|---|
| Producto | Laptop | Mouse | Teclado | Monitor |
| Precio | 800 | 25 | 45 | 250 |

2. En **A4** escribe `Buscar:` y en **B4**: `Mouse`.
3. En **A5**: `=BUSCARH(B4; $A$1:$E$2; 2; FALSO)` → debe mostrar 25.

6. Guarda como `06-buscarv.xlsx`.

---

## Key Takeaways

- `BUSCARV` busca un valor en la **primera columna** de una tabla y devuelve un valor de la misma fila.
- **Siempre usa `FALSO`** (o `0`) para búsquedas exactas — el `VERDADERO` solo es para rangos.
- Usa **referencias absolutas** (`$A$1:$B$100`) para que la tabla no se desplace al arrastrar.
- Combina `SI.ERROR` con `BUSCARV` para evitar `#N/A` y mostrar mensajes amigables.
- `BUSCARH` es igual pero trabaja horizontalmente (busca en la primera fila).
- **Limitaciones:** BUSCARV solo busca a la derecha (el resultado debe estar a la derecha del valor buscado). Para más flexibilidad, usa `INDICE` + `COINCIDIR`.

---

**Siguiente tema:** [03-INDICE-COINCIDIR.md](03-INDICE-COINCIDIR.md)
