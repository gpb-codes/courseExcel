# Series y autocompletar: productividad inteligente

El **controlador de relleno** (ese pequeño cuadrito verde en la esquina inferior derecha de una celda seleccionada) es una de las herramientas **más potentes y subestimadas** de Excel. Con él puedes crear secuencias, copiar datos y hasta hacer que Excel adivine lo que quieres escribir.

## ¿Qué puede hacer el controlador de relleno?

Excel reconoce patrones automáticamente. Cuando arrastras el controlador, analiza el contenido de las celdas seleccionadas y extrapola la serie.

### Series predefinidas que Excel reconoce

| Escribes esto | Arrastras y Excel completa |
|---------------|---------------------------|
| `1`, `2` | `3`, `4`, `5`, `6`, `7`... |
| `Lunes` | `Martes`, `Miércoles`, `Jueves`... |
| `Enero` | `Febrero`, `Marzo`, `Abril`... |
| `Ene` | `Feb`, `Mar`, `Abr`... |
| `Trimestre 1` | `Trimestre 2`, `Trimestre 3`, `Trimestre 4` |
| `2020` | `2021`, `2022`, `2023`, `2024`... |
| `15/01/2024` | `16/01/2024`, `17/01/2024`, `18/01/2024`... |
| `Producto 1` | `Producto 2`, `Producto 3`, `Producto 4`... |
| `1er trimestre` | `2do trimestre`, `3er trimestre`, `4to trimestre` |
| `Q1` | `Q2`, `Q3`, `Q4`, `Q1` (cíclico) |

> **💡 Pro Tip:** Excel reconoce meses y días de la semana en español, inglés y muchos otros idiomas. Si escribes "Monday" en una versión en español, también funcionará si el sistema está configurado en inglés. El reconocimiento depende del idioma de Office, no del contenido de la celda.

### Series numéricas: cómo funciona el patrón

Cuando seleccionas **dos o más** celdas antes de arrastrar, Excel calcula la **diferencia** entre los valores y la repite:

| Seleccionas | Diferencia | Serie completa |
|-------------|-----------|----------------|
| `1`, `2` | +1 | `3`, `4`, `5`, `6`, `7`... |
| `10`, `20` | +10 | `30`, `40`, `50`, `60`... |
| `100`, `90` | -10 | `80`, `70`, `60`, `50`... |
| `2`, `4`, `6` | +2 (de los primeros dos) | `8`, `10`, `12`, `14`... |
| `1`, `4` | +3 | `7`, `10`, `13`, `16`... |
| `1000`, `500` | -500 | `0`, `-500`, `-1000`... |

### Serie con paso personalizado usando el botón derecho

Si arrastras el controlador con **clic derecho** (en lugar de izquierdo), al soltar aparece un menú con opciones:

1. Escribe `1` en A1
2. Pon el mouse en el controlador
3. Arrastra hacia abajo con **clic derecho**
4. Suelta y elige **"Serie..."**
5. Configura: Valor de incremento: `5`, Valor de límite: `100`
6. ¡Serie 1, 6, 11, 16, 21... hasta 96!

## Opciones del autocompletar (menú contextual)

Cuando arrastras con clic izquierdo y sueltas, aparece un pequeño ícono (⏻) en la esquina inferior derecha del rango relleno. Al hacer clic, tienes estas opciones:

| Opción | ¿Qué hace? | Cuándo usarla |
|--------|-----------|---------------|
| **Copiar celdas** | Copia exactamente el mismo valor | Cuando no quieres serie, solo copia |
| **Serie de relleno** | Continúa el patrón (predeterminado) | La opción más común |
| **Solo formatos** | Rellena solo el formato visual | Para extender estilo sin cambiar datos |
| **Relleno rápido** | Activa Flash Fill para esta columna | Para extraer o combinar datos |
| **Serie de tendencia** | Calcula la línea de mejor ajuste | Para proyecciones y pronósticos |

## Relleno rápido (Flash Fill) - `Ctrl + E`

Esta función es **casi magia**. Flash Fill detecta patrones en tus datos y los replica automáticamente. No necesita fórmula, solo un ejemplo.

### Ejemplo 1: Extraer nombres

| A (Nombre completo) | B (Flash Fill) |
|---------------------|----------------|
| Juan Pérez González | Juan |
| María López García | **escribe `María` → Ctrl + E** → se llena solo |
| Carlos Ruiz Fernández | Carlos |
| Ana Martínez López | Ana |

### Ejemplo 2: Extraer apellidos

| A (Nombre completo) | B (Flash Fill) |
|---------------------|----------------|
| Juan Pérez González | Pérez González |
| María López García | **escribe `López García` → Ctrl + E** → se llena solo |
| Carlos Ruiz Fernández | Ruiz Fernández |
| Ana Martínez López | Martínez López |

### Ejemplo 3: Formatear datos

| A | B (Flash Fill) |
|---|---|
| juanperez@gmail.com | juanperez |
| marialopez@hotmail.com | **escribe `marialopez` → Ctrl + E** → se llena |
| carlosruiz@yahoo.com | carlosruiz |

### Ejemplo 4: Combinar datos

| A | B | C (Flash Fill) |
|---|---|---|
| Juan | Pérez | Juan Pérez |
| María | López | **escribe `María López` → Ctrl + E** → se llena |
| Carlos | Ruiz | Carlos Ruiz |

### Cómo usar Flash Fill

1. Escribe el **primer resultado** manualmente en la celda B1
2. Presiona `Enter`
3. En B2, empieza a escribir el segundo resultado
4. Excel muestra una **vista previa en gris** de cómo completaría toda la columna
5. Presiona `Ctrl + E` para aceptar
6. Si no hay vista previa, escribe el segundo ejemplo y luego `Ctrl + E`

> **💡 Pro Tip:** Flash Fill NO es dinámico. Si cambias los datos originales, tendrás que volver a aplicar `Ctrl + E`. Es una herramienta de "una sola vez". Para soluciones dinámicas, usa fórmulas como `=EXTRAE()`, `=IZQUIERDA()` o `=DERECHA()`.

## Series personalizadas

Puedes crear tus propias listas para que Excel las reconozca automáticamente.

### Cómo crear una serie personalizada

1. Archivo > Opciones > Avanzadas
2. Desplázate hasta **"General"**
3. Haz clic en **"Modificar listas personalizadas..."**
4. En "Entradas de lista", escribe tu serie (una por línea o separada por comas):

   ```
   Sucursal Norte
   Sucursal Sur
   Sucursal Este
   Sucursal Oeste
   Sucursal Centro
   ```

5. Haz clic en **Agregar** y luego en **Aceptar**

Ahora, si escribes "Sucursal Norte" y arrastras el controlador, Excel completará "Sucursal Sur", "Sucursal Este", etc.

### Usos comunes de series personalizadas

- Nombres de sucursales o departamentos
- Categorías de productos
- Nombres de empleados para turnos
- Etapas de un proceso (Inicio, Desarrollo, Pruebas, Finalización)
- Prioridades (Crítica, Alta, Media, Baja)

## Escenario del mundo real

**Caso: Planilla de asistencia mensual**

Necesitas crear una tabla con los días del mes y marcar asistencia:

1. **A1**: escribe `01/01/2024`, arrastra hasta **A31**
2. Excel completa todos los días del mes automáticamente
3. **B1**: escribe `Lunes`... no, mejor usa `=TEXTO(A1,"dddd")` para obtener el nombre del día

| A | B | C | D |
|---|---|---|---|
| **Fecha** | **Día** | **Entrada** | **Salida** |
| 01/01/2024 | =TEXTO(A2,"dddd") | 09:00 | 18:00 |
| 02/01/2024 | =TEXTO(A3,"dddd") | 09:00 | 18:00 |
| ... | ... | ... | ... |
| 31/01/2024 | =TEXTO(A32,"dddd") | 09:00 | 18:00 |

¡En segundos tienes el mes completo listo!

**Caso: Factura con numeración automática**

1. **A1**: escribe `FACT-001`
2. Arrastra el controlador hacia abajo
3. Excel genera: FACT-002, FACT-003, FACT-004...

## Errores comunes del principiante

| Error | Qué pasa | Solución |
|-------|----------|----------|
| **Arrastrar 1 celda numérica** | Solo copia el mismo número (no crea serie) | Escribe 2 números (1 y 2), selecciona ambos, arrastra |
| **Flash Fill no funciona** | No detecta el patrón | Da 2 o 3 ejemplos manuales, luego `Ctrl + E` |
| **Serie se desvía** | Arrastraste muy lejos y los números se disparan | Usa la opción "Serie..." con valor de límite |
| **Datos con ceros a la izquierda** | `001` se convierte en `1` al arrastrar | Pon apóstrofe: `'001` o formato personalizado "000" |
| **Fechas se vuelven números** | Al arrastrar, a veces se ven como 45000 | Cambia el formato a Fecha en Inicio > Formato de número |
| **No aparece el menú de autocompletar** | El ícono está en una esquina difícil de ver | Aparece SIEMPRE al soltar. Busca el ⏻ en la parte inferior derecha |
| **Serie personalizada no se guarda** | Cerró Excel sin aplicar cambios | Verifica que aparezca en la lista después de agregarla |

## Ejercicio práctico completo

### Parte 1: Series básicas

1. En **A1**, escribe `Enero`. Arrastra el controlador hacia abajo hasta **A12**.
   - Resultado: Febrero, Marzo, Abril, Mayo, Junio, Julio, Agosto, Septiembre, Octubre, Noviembre, Diciembre.
2. En **B1**, escribe `Lunes`. Arrastra hasta **B7**.
   - Resultado: Martes, Miércoles, Jueves, Viernes, Sábado, Domingo.
3. En **C1**, escribe `Ene-2024`. Arrastra hasta **C12**.
   - Resultado: Feb-2024, Mar-2024... Dic-2024.

### Parte 2: Series numéricas con paso

4. En **D1**, escribe `5`. En **D2**, escribe `10`. Selecciona ambas y arrastra hasta **D10**.
   - Resultado: 15, 20, 25, 30, 35, 40, 45, 50.
5. En **E1**, escribe `2020`. En **E2**, escribe `2025`. Selecciona ambas y arrastra hasta **E10**.
   - Resultado: 2030, 2035, 2040, 2045, 2050.
6. En **F1**, escribe `100`. En **F2**, escribe `90`. Selecciona ambas y arrastra hasta **F11**.
   - Resultado: 80, 70, 60, 50, 40, 30, 20, 10, 0.

### Parte 3: Fechas en serie

7. En **G1**, escribe `15/01/2024`. Arrastra hasta **G15**.
   - Resultado: cada día sucesivo (16, 17, 18...).
8. En **H1**, escribe `01/01/2024`. En **H2**, escribe `01/02/2024`. ¿Qué pasa si arrastras?
   - Resultado: 01/03/2024, 01/04/2024... (primeros de cada mes).

### Parte 4: Flash Fill

9. En **A10**, escribe `Juan Pérez López`. En **B10**, escribe `Juan`.
10. En **A11**, escribe `María García Ruiz`. En **B11**, escribe `María` y presiona `Ctrl + E`.
    - Flash Fill debería completar los nombres.
11. En **C10**, escribe `juan.perez@email.com`. En **C11**, escribe `maria.garcia@email.com`.
12. En **D10**, escribe `juanperez`. En **D11**, escribe `mariagarcia` y presiona `Ctrl + E`.

### Parte 5: Menú contextual del controlador

13. En **A15**, escribe `1`. Arrastra con **clic derecho** hasta **A25**.
14. En el menú, elige **"Serie..."**.
15. Configura: Valor de incremento: `3`, Valor de límite: `30`.
16. Haz clic en **Aceptar**.
    - Resultado: 1, 4, 7, 10, 13, 16, 19, 22, 25, 28.

### Parte 6: Serie de tendencia

17. En **A30**, escribe `100`. En **A31**, escribe `200`. En **A32**, escribe `400`.
18. Arrastra con **clic derecho** desde A30:A32 hasta **A36**.
19. Elige **"Serie de tendencia"**.
    - Resultado: Muestra la proyección basada en la tendencia.

## Puntos clave

- El **controlador de relleno** (cuadrito verde) es la herramienta más rápida para crear series
- Para series numéricas, **siempre da al menos 2 valores** para que Excel calcule el paso
- **Flash Fill** (`Ctrl + E`) extrae o combina datos sin fórmulas, solo con ejemplos
- Arrastrar con **clic derecho** da opciones adicionales como "Serie..." y "Serie de tendencia"
- Las **series personalizadas** se configuran en Archivo > Opciones > Avanzadas
- Flash Fill no es dinámico; si los datos cambian, debes re-aplicarlo
- Los meses, días, trimestres y fechas se reconocen automáticamente
- El menú contextual del autocompletar permite cambiar entre copiar, serie, solo formato o relleno rápido

---

**Siguiente tema:** [03-Filas-Columnas.md](03-Filas-Columnas.md)
