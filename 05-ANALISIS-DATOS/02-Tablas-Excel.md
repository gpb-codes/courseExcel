# Tablas de Excel (Ctrl + T)

Las **Tablas de Excel** (antes llamadas "listas" o "rangos con formato de tabla") son una de las características más subestimadas pero más poderosas de Excel. No deben confundirse con las **Tablas Dinámicas** (que veremos más adelante). Una Tabla de Excel convierte un rango común en una **tabla inteligente** con propiedades automáticas.

---

## ¿Qué es una Tabla de Excel?

Es un rango de datos al que Excel reconoce como una unidad con sentido. Al convertir un rango en tabla, obtienes beneficios como:

- Formato profesional automático
- Filtros activados por defecto
- Fórmulas que se autocompletan en nuevas filas
- Referencias con nombres legibles en lugar de direcciones de celda
- Expansión automática al agregar datos
- Fila de totales con funciones predefinidas

---

## Crear una tabla

### Método 1: Atajo de teclado (recomendado)

1. Selecciona cualquier celda dentro de tus datos.
2. Presiona `Ctrl + T`.
3. Asegúrate de que **"La tabla tiene encabezados"** esté marcado.
4. Haz clic en Aceptar.

### Método 2: Menú

1. Selecciona cualquier celda dentro de tus datos.
2. **Inicio > Dar formato como tabla** y elige un estilo.
3. Confirma que el rango sea correcto y que tenga encabezados.

> **Requisito importante:** tus datos deben tener encabezados en la primera fila. Sin encabezados, la tabla no funciona correctamente.

---

## ¿Qué obtienes automáticamente?

| Característica | Descripción |
|----------------|-------------|
| **Formato profesional** | Filas alternadas con colores que se mantienen al agregar filas |
| **Filtros activados** | Cada columna tiene su flecha de filtro |
| **Referencias con nombres** | Usas `Tabla1[Producto]` en lugar de `A2:A100` |
| **Fórmulas auto-copiadas** | Al escribir una fórmula en una columna, se copia a toda la columna automáticamente |
| **Expansión automática** | Al escribir en la fila siguiente, la tabla se expande para incluirla |
| **Fila de totales** | Puedes activar una fila especial al final con SUMAS, PROMEDIOS, etc. |

---

## Beneficios principales en detalle

### 1. Expansión automática

En un rango normal, si agregas datos en la fila 101 y tu fórmula suma hasta la fila 100, el nuevo dato no se incluye. Con una tabla, al escribir cualquier valor en la fila inmediatamente inferior, la tabla se expande automáticamente y todas las fórmulas, formatos y tablas dinámicas vinculadas se actualizan.

### 2. Fórmulas que se auto-rellenan

Escribe una fórmula en cualquier celda de una columna vacía de la tabla y pulsa Enter. Excel copia automáticamente la fórmula a todas las filas de la tabla. No necesitas arrastrar.

### 3. Referencias descriptivas

En lugar de escribir `=SUMA(A2:A100)`, escribes `=SUMA(Tabla1[Cantidad])`. Esto es mucho más legible y, al agregar filas, el rango se ajusta automáticamente.

### 4. Actualización en cascada

Los filtros, formatos condicionales, gráficos y tablas dinámicas que dependen de una Tabla de Excel se actualizan automáticamente cuando la tabla crece o cambia.

---

## Nombrar tu tabla

Por defecto Excel asigna nombres como `Tabla1`, `Tabla2`, etc. Es buena práctica renombrarlas:

1. Selecciona cualquier celda dentro de la tabla.
2. Ve a la pestaña **Diseño de tabla** (contextual).
3. En el cuadro **Nombre de tabla** escribe un nombre descriptivo.
4. **Reglas:** sin espacios, sin caracteres especiales, sin empezar con número.

| Nombre original | Nombre recomendado |
|-----------------|-------------------|
| Tabla1 | `Ventas2024` |
| Tabla2 | `Empleados` |
| Tabla3 | `Inventario` |

---

## Fórmulas con tablas: el lenguaje estructurado

Las tablas usan **referencias estructuradas** en lugar de direcciones de celda.

### Sintaxis básica

| Fórmula con rango normal | Fórmula con tabla |
|--------------------------|-------------------|
| `=SUMA(C2:C100)` | `=SUMA(Ventas[Cantidad])` |
| `=PROMEDIO(D2:D100)` | `=PROMEDIO(Ventas[Precio])` |
| `=CONTAR.SI(A2:A100;"Laptop")` | `=CONTAR.SI(Ventas[Producto];"Laptop")` |

### Referencias especiales

| Referencia | Significado |
|------------|-------------|
| `Ventas[Producto]` | Toda la columna Producto |
| `Ventas[[#Encabezados];[Producto]]` | Solo la celda del encabezado |
| `Ventas[[#Totales];[Total]]` | Solo la celda de totales |
| `Ventas[[#Datos];[Total]]` | Solo los datos (sin encabezado ni totales) |

---

## La pestaña Diseño de tabla

Al seleccionar cualquier celda dentro de una tabla, aparece la pestaña contextual **Diseño de tabla**. Estas son sus opciones:

| Opción | Función |
|--------|---------|
| **Nombre de tabla** | Renombrar la tabla |
| **Cambiar tamaño** | Expandir o reducir el rango de la tabla manualmente |
| **Resumir con tabla dinámica** | Crea una tabla dinámica vinculada a esta tabla |
| **Quitar duplicados** | Elimina filas repetidas basado en una o más columnas |
| **Convertir en rango** | Vuelve a un rango normal (pierde propiedades de tabla) |
| **Fila de totales** | Agrega una fila al final con funciones de resumen |
| **Estilos de tabla** | Galería de estilos predefinidos |
| **Filas alternadas** | Activa/desactiva el bandeado de filas |
| **Primera columna / Última columna** | Formato especial para la primera/última columna |

### Fila de totales

Actívala marcando la casilla **Fila de totales**. Aparece una fila al final con el texto "Total". Haz clic en cualquier celda de esa fila para desplegar un menú con funciones:

| Función | Qué hace |
|---------|----------|
| Suma | Suma todos los valores de la columna |
| Promedio | Calcula el promedio |
| Contar | Cuenta celdas con datos |
| Contar números | Cuenta solo celdas numéricas |
| Máx | Valor máximo |
| Mín | Valor mínimo |

---

## PRO TIPS

> **Pro Tip #1 — Tablas como fuentes de datos dinámicas**
> Si creas una tabla dinámica a partir de una Tabla de Excel, al agregar nuevas filas a la tabla solo necesitas **Actualizar** la tabla dinámica — no necesitas cambiar el rango de origen. Esto es un gran ahorro de tiempo.

> **Pro Tip #2 — Segmentación de datos en tablas**
> Las segmentaciones de datos no son solo para tablas dinámicas. Selecciona tu tabla > Diseño de tabla > **Insertar segmentación**. Agrega botones visuales para filtrar la tabla al instante.

> **Pro Tip #3 — Columna calculada automática**
> Si tienes una columna "Precio" y otra "Cantidad", escribe en una tercera columna vacía `=[@Precio]*[@Cantidad]`. La fórmula se copia a toda la tabla automáticamente. El `@` hace referencia a la misma fila.

> **Pro Tip #4 — La tabla se mueve contigo**
> Si tienes un gráfico vinculado a `A1:C100` y agregas filas, el gráfico no se actualiza. Si el gráfico está vinculado a `Ventas[Producto]`, se actualiza automáticamente.

---

## Tabla vs Rango normal

| Característica | Rango normal | Tabla de Excel |
|----------------|--------------|----------------|
| Se expande automáticamente al agregar datos | No | Sí |
| Fórmulas se copian automáticamente | No | Sí |
| Filtros activados automáticamente | No | Sí |
| Referencias con nombres legibles | No (`A1:C100`) | Sí (`Tabla1[Columna]`) |
| Formato de filas alternadas | Manual | Automático |
| Fila de totales con menú de funciones | No | Sí |
| Las tablas dinámicas se actualizan con nuevos datos | No (hay que cambiar rango) | Sí |
| Quitar duplicados con un clic | No | Sí |

---

## Escenario empresarial: control de inventario

Eres gerente de logística y llevas el inventario en Excel. Cada semana recibes 50-100 productos nuevos. Sin tablas, tendrías que:

1. Actualizar rangos en fórmulas manualmente.
2. Verificar que los filtros incluyan los nuevos datos.
3. Actualizar la tabla dinámica de resumen de inventario.

**Con una tabla de Excel:**

1. Escribes los productos nuevos en la fila siguiente — la tabla se expande.
2. Las fórmulas de valor de inventario (`=Cantidad * PrecioCosto`) se copian solas.
3. La tabla dinámica de resumen se actualiza con un clic derecho > Actualizar.

---

## Errores comunes

| Error | Descripción | Solución |
|-------|-------------|----------|
| **"Ya existe una tabla en este rango"** | Estás intentando crear una tabla donde ya hay una | Convierte la tabla existente en rango antes de crear otra |
| **Fórmulas que no se copian** | La columna ya tenía datos mezclados (algunos sin fórmula) | Limpia la columna y vuelve a escribir la fórmula |
| **Referencias rotas al renombrar** | Otras fórmulas usaban `Tabla1` y cambiaste el nombre | Usa el nuevo nombre `Ventas[Columna]` |
| **La tabla no se expande** | Tienes datos pegados justo debajo de la tabla | Inserta una fila en blanco entre la tabla y los otros datos |
| **Fila de totales muestra texto "Total"** | No has seleccionado una función | Haz clic en la celda de totales y elige una función (SUMA, PROMEDIO...) |

---

## Ejercicio práctico completo

### Parte 1: Crear la tabla

1. Ingresa estos datos empezando en A1:

| Producto | Categoría | Cantidad | Precio | Total |
|----------|-----------|----------|--------|-------|
| Laptop | Electrónica | 5 | 800 | |
| Mouse | Electrónica | 20 | 25 | |
| Escritorio | Muebles | 3 | 350 | |
| Silla | Muebles | 10 | 120 | |
| Teclado | Electrónica | 15 | 45 | |
| Libro | Papelería | 30 | 15 | |
| Cuaderno | Papelería | 40 | 8 | |

2. Selecciona cualquier celda y presiona `Ctrl + T`. Acepta con encabezados.
3. En la columna Total (E2), escribe la fórmula: `=[@Cantidad]*[@Precio]` y presiona Enter.
   - Observa cómo se llena automáticamente toda la columna.

### Parte 2: Personalizar la tabla

1. Ve a **Diseño de tabla** y en **Nombre de tabla** escribe `Ventas`.
2. Cambia a un estilo de tabla diferente (el que más te guste).
3. Activa **Fila de totales**.
4. En la fila de totales de la columna Total, selecciona **SUMA**.
5. En la fila de totales de Cantidad, selecciona **PROMEDIO**.

### Parte 3: Probar la expansión automática

1. Agrega esta nueva fila debajo del último producto:
   - Producto: Monitor, Categoría: Electrónica, Cantidad: 8, Precio: 250
2. Escribe el valor en la celda de Cantidad. Observa:
   - La tabla se expande para incluir la nueva fila.
   - El formato de filas alternadas se mantiene.
   - La columna Total se llena automáticamente.
   - La fila de totales se actualiza con los nuevos valores.

### Parte 4: Usar referencias estructuradas

1. En una celda fuera de la tabla (ej: G1), escribe `=SUMA(Ventas[Total])`. Debe mostrar la suma total.
2. En G2, escribe `=PROMEDIO(Ventas[Precio])`. Debe mostrar 194.4 aprox.
3. En G3, escribe `=CONTAR.SI(Ventas[Categoría];"Electrónica")`. Debe mostrar 4 (Laptop, Mouse, Teclado, Monitor).

### Parte 5: Quitar duplicados

1. Inserta una fila duplicada (ej: copia Laptop exactamente igual).
2. Ve a Diseño de tabla > **Quitar duplicados**.
3. Marca todas las columnas y acepta. La fila duplicada se elimina.
4. Guarda como `05-tablas.xlsx`.

---

## Key Takeaways

- `Ctrl + T` convierte cualquier rango en una **tabla inteligente** con propiedades automáticas.
- Las tablas usan **referencias estructuradas** (`Ventas[Total]`) que son más legibles y no se rompen.
- Las tablas se **expanden automáticamente** al agregar filas — todo vinculado se actualiza.
- La **fila de totales** ofrece SUMAS, PROMEDIOS y más con un clic.
- Las tablas son la base ideal para alimentar **tablas dinámicas** y **gráficos**.
- Siempre nombra tus tablas con nombres descriptivos (sin espacios).

---

**Siguiente tema:** [03-Validacion-Datos.md](03-Validacion-Datos.md)
