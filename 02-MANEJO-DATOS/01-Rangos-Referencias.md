# Rangos y referencias

## ¿Qué es un rango?

Un **rango** es un conjunto de dos o más celdas seleccionadas. Los rangos son la base del trabajo en Excel: casi todo lo que harás (sumas, promedios, gráficos, tablas) opera sobre rangos.

### Sintaxis de un rango

Se escribe con la **celda superior izquierda**, **dos puntos (`:`)**, y la **celda inferior derecha**:

```
Inicio:Fin
  A1  :  C10
```

Esto significa: "todas las celdas desde A1 hasta C10".

### Tipos de rangos

| Tipo | Sintaxis | Celdas incluidas | Representación visual |
|------|----------|-------------------|----------------------|
| **Una columna** | A1:A10 | A1, A2, A3, ..., A10 | 🟦 |
| **Una fila** | A1:C1 | A1, B1, C1 | 🟦🟦🟦 |
| **Bloque rectangular** | A1:C10 | 10 filas × 3 columnas = 30 celdas | 🟦🟦🟦 |
| **Múltiples filas y columnas** | B2:E5 | 4 filas × 4 columnas = 16 celdas | 🟦🟦🟦🟦 |
| **Hoja completa** | A:XFD | ¡Todas las celdas! | 🟦 (inmenso) |

### Ejemplos prácticos

| Rango | Significado | ¿Cuántas celdas? |
|-------|-------------|------------------|
| A1:A10 | Columna A, filas 1 a 10 | 10 celdas |
| A1:C1 | Fila 1, columnas A, B, C | 3 celdas |
| B2:D8 | 7 filas × 3 columnas | 21 celdas |
| A1:C10 | 10 filas × 3 columnas | 30 celdas |
| E:E | Columna E completa | 1,048,576 celdas |
| 10:10 | Fila 10 completa | 16,384 celdas |

> **💡 Pro Tip:** Para calcular celdas en un rango mentalmente: filas × columnas. B2:D8 = (8-2+1) × (4-2+1) = 7 × 3 = 21 celdas. La fórmula es `(fila_fin - fila_inicio + 1) × (col_fin - col_inicio + 1)`.

## Referencias en fórmulas: el poder real

Cuando usas un rango en una fórmula, estás creando una **referencia**. La magia es que si cambias los datos en las celdas origen, el resultado de la fórmula se actualiza automáticamente.

### Referencias unidimensionales

```
=SUMA(A1:A10)   → Suma los valores en la columna A, filas 1 a 10
=PROMEDIO(B1:B1)→ Promedio de los valores en B1 (solo una celda, pero usa formato de rango)
=CONTAR(C1:C20) → Cuenta cuántos números hay en C1:C20
```

### Referencias bidimensionales

```
=SUMA(A1:C10)      → Suma TODAS las celdas en el bloque A1:C10
=PROMEDIO(B2:D8)   → Promedio del bloque B2:D8
=MAX(A1:F1)        → Valor máximo en la fila 1, columnas A a F
=MIN(A:A)          → Valor mínimo en toda la columna A
```

### Ejemplo visual

| | A | B | C |
|---|---|---|---|
| **1** | 10 | 20 | 30 |
| **2** | 40 | 50 | 60 |
| **3** | 70 | 80 | 90 |

- `=SUMA(A1:C3)` → 10+20+30+40+50+60+70+80+90 = **450**
- `=SUMA(A1:A3)` → 10+40+70 = **120**
- `=PROMEDIO(B1:C2)` → (20+30+50+60)/4 = **40**
- `=MAX(A1:C1)` → **30**

> **💡 Pro Tip:** Cuando escribes `=SUMA(` y luego seleccionas el rango con el mouse, Excel escribe la referencia automáticamente. Es más rápido y evita errores de tipeo.

## Seleccionar rangos en la práctica

### Con el mouse

1. Haz clic en la **primera celda** del rango
2. Sin soltar el clic, **arrastra** hasta la última celda
3. Suelta el clic: el rango queda seleccionado

### Con el teclado (más preciso)

1. Selecciona la primera celda
2. Mantén presionado `Shift`
3. Usa las **flechas direccionales** para expandir la selección

### Para rangos grandes (mejor método)

1. Haz clic en la **primera celda**
2. Mantén presionado `Shift`
3. Haz clic en la **última celda**

Esto selecciona todo el bloque intermedio sin arrastrar. Ideal para rangos que no caben en la pantalla.

### Rangos no contiguos

Usa `Ctrl + clic` para seleccionar celdas o rangos que no están juntos:

```
=SUMA(A1:A10; C1:C10)   → Suma dos rangos separados
```

## Copiar, cortar y pegar

### Operaciones básicas

| Acción | Atajo | Descripción |
|--------|-------|-------------|
| **Copiar** | `Ctrl + C` | Copia al portapapeles |
| **Cortar** | `Ctrl + X` | Corta al portapapeles |
| **Pegar** | `Ctrl + V` | Pega todo (fórmula, formato, comentarios) |
| **Deshacer** | `Ctrl + Z` | Revierte la última acción |

### El proceso

1. **Selecciona** el rango origen
2. **Copia** (`Ctrl + C`) o **Corta** (`Ctrl + X`)
3. **Selecciona** la celda destino (solo la primera celda)
4. **Pega** (`Ctrl + V`)
5. Aparece un borde intermitente alrededor del origen. Presiona `Esc` para quitarlo.

## Pegado especial: el secreto de los profesionales

`Ctrl + Alt + V` abre el menú de **Pegado especial**. Aquí puedes elegir QUÉ pegar exactamente:

| Opción | ¿Qué pega? | ¿Cuándo usarlo? |
|--------|-----------|-----------------|
| **Valores** | Solo el resultado, no la fórmula | Cuando quieres "congelar" un resultado |
| **Formatos** | Solo colores, bordes, fuentes | Para copiar estilo sin cambiar datos |
| **Fórmulas** | Solo las fórmulas | Cuando la estructura es lo que importa |
| **Transponer** | Cambia filas por columnas | Para rotar una tabla |
| **Anchos de columna** | Solo el ancho | Para mantener consistencia visual |
| **Validación** | Solo reglas de validación | Para copiar listas desplegables |
| **Imágenes** | Pega como imagen estática | Para capturas de pantalla en Excel |
| **Vincular datos** | Crea vínculo al origen | Datos que se actualizan solos |

### Ejemplo de transponer

**Antes (datos en fila):**
```
A1=100   B1=200   C1=300
```

**Después de transponer (pegar en A3):**
```
A3=100
A4=200
A5=300
```

## Mover celdas

### Método 1: Arrastrar

1. Selecciona el rango
2. Coloca el mouse en el **borde** de la selección (el cursor cambia a una cruz con flechas)
3. Arrastra a la nueva ubicación
4. Suelta

### Método 2: Cortar y pegar

1. Selecciona el rango
2. `Ctrl + X` (aparece un borde intermitente)
3. Selecciona el destino
4. `Ctrl + V`

### Método 3: Arrastrar con Shift para insertar

Si mantienes `Shift` mientras arrastras, Excel **inserta** las celdas entre otras en lugar de sobrescribirlas.

## El controlador de relleno

El **controlador de relleno** es el cuadrito verde en la **esquina inferior derecha** de la celda o rango seleccionado.

| Acción | Resultado |
|--------|-----------|
| Arrastrar hacia abajo | Copia el contenido o completa una serie |
| Arrastrar hacia la derecha | Copia el contenido o completa una serie |
| Arrastrar hacia arriba | Copia (pero menos común) |
| Arrastrar hacia la izquierda | Copia (pero menos común) |
| Arrastrar con botón derecho | Menú contextual con opciones (serie, formatos, etc.) |

### Si solo arrastras 1 celda

- **Texto**: se copia igual (ej: "Hola" → "Hola", "Hola", "Hola")
- **Número**: se copia igual (100 → 100, 100, 100)
- **Fecha**: se incrementa en 1 día (15/01 → 16/01, 17/01, 18/01)
- **Día de la semana**: se incrementa (Lunes → Martes, Miércoles)

### Si seleccionas 2+ celdas antes de arrastrar

Excel calcula la **diferencia** entre los valores y la repite:
- `1, 2` → `3, 4, 5, 6...`
- `10, 20` → `30, 40, 50...`
- `Enero, Febrero` ya se reconoce como serie

## Escenario del mundo real

**Caso: Presupuesto de marketing mensual**

| A | B | C | D | E |
|---|---|---|---|---|
| **Concepto** | **Enero** | **Febrero** | **Marzo** | **Total** |
| Redes Sociales | 5000 | 5000 | 5000 | `=SUMA(B2:D2)` |
| Google Ads | 12000 | 15000 | 13000 | `=SUMA(B3:D3)` |
| Email Marketing | 3000 | 3000 | 4000 | `=SUMA(B4:D4)` |
| **Total** | `=SUMA(B2:B4)` | `=SUMA(C2:C4)` | `=SUMA(D2:D4)` | `=SUMA(E2:E4)` |

Puedes escribir la fórmula una vez y copiarla al resto. O mejor aún: escribe `=SUMA(B2:D2)` en E2 y arrastra el controlador de relleno hasta E4. La referencia se ajusta automáticamente.

## Errores comunes del principiante

| Error | Ejemplo | Explicación | Solución |
|-------|---------|-------------|----------|
| **No seleccionar todo el rango** | Seleccionar A1 en vez de A1:C10 | La fórmula solo afecta una celda | Verifica el rango antes de aplicar |
| **Arrastrar mal el controlador** | Arrastrar desde el medio de la celda | No se activa el controlador | Pon el mouse exactamente en el cuadrito inferior derecho |
| **Olvidar Esc después de copiar** | El borde intermitente sigue activo | Puedes pegar sin querer en otro lugar | Presiona `Esc` después de pegar |
| **Pegar sin pegado especial** | Pegas formato basura de otra fuente | La hoja se ve inconsistente | Usa `Ctrl + Alt + V` y elige "Valores" |
| **Rango incorrecto en fórmula** | `=SUMA(A1:A10)` cuando los datos llegan a A15 | Cálculo incompleto | Verifica siempre que el rango cubra todos los datos |
| **No usar signo de dos puntos** | Escribir `A1 A10` en vez de `A1:A10` | Error de sintaxis | Los rangos siempre llevan `:` |
| **Confundir filas con columnas** | Escribir `A1:A10` cuando quieres `A1:J1` | Rango vertical vs horizontal | Revisa qué dirección necesitas |

## Ejercicio práctico completo

### Parte 1: Crear y copiar rangos

1. En un libro nuevo, escribe los siguientes datos:

   | | A | B | C | D |
   |---|---|---|---|---|
   | **1** | 10 | 20 | 30 | 40 |
   | **2** | 50 | 60 | 70 | 80 |
   | **3** | 90 | 100 | 110 | 120 |
   | **4** | 130 | 140 | 150 | 160 |

### Parte 2: Fórmulas con rangos

5. En **A5**, escribe `=SUMA(A1:A4)` → Suma de A1 a A4.
6. En **B5**, escribe `=PROMEDIO(B1:B4)` → Promedio de B1 a B4.
7. En **C5**, escribe `=MAX(C1:C4)` → Valor máximo de C1 a C4.
8. En **D5**, escribe `=MIN(D1:D4)` → Valor mínimo de D1 a D4.
9. En **A7**, escribe `=SUMA(A1:D4)` → Suma de TODAS las celdas (debe dar 1360).

### Parte 3: Copiar y mover

10. Selecciona el rango **A1:D4**, copia (`Ctrl + C`).
11. Ve a la celda **A10** y pega (`Ctrl + V`).
12. Selecciona **A1:D4** nuevamente, corta (`Ctrl + X`).
13. Ve a **F1** y pega (`Ctrl + V`).
14. Selecciona **F1:I4** (los datos recién pegados), coloca el mouse en el borde y arrastra a **F6**.

### Parte 4: Pegado especial

15. En **A15**, escribe `=A1+100` y copia A15 a A16:A18.
16. Selecciona **A15:A18**, copia (`Ctrl + C`).
17. Ve a **C15**, clic derecho > Pegado especial > **Valores**.
18. Observa que en C15:C18 ya no hay fórmulas, solo números.

### Parte 5: Transponer

19. Selecciona **A1:D1**, copia (`Ctrl + C`).
20. Ve a **A20**, clic derecho > Pegado especial > **Transponer**.
21. Los datos en fila ahora aparecen en columna (vertical).

### Parte 6: Controlador de relleno

22. En **A25** escribe `Hola`, arrastra el controlador hasta **A30**.
23. En **B25** escribe `1`, en **B26** escribe `2`, selecciona ambas y arrastra hasta **B35**.
24. En **C25** escribe `Lunes`, arrastra hasta **C31**.

## Puntos clave

- Un **rango** se define con `:`, ej: `A1:C10`
- Selecciona rangos con `Shift + flechas` o `Shift + clic`
- `Ctrl + C` / `Ctrl + V` para copiar y pegar
- **Pegado especial** (`Ctrl + Alt + V`) para pegar solo valores, formatos o transponer
- Arrastra el **borde** de la selección para mover celdas
- Usa `Shift + arrastrar` para insertar en medio de datos existentes
- El **controlador de relleno** copia o completa series automáticamente
- Siempre verifica que tus rangos en fórmulas cubran exactamente los datos que necesitas

---

**Siguiente tema:** [02-Series-Autocompletar.md](02-Series-Autocompletar.md)
