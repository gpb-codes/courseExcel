# Tablas dinámicas

Las **tablas dinámicas** son, sin discusión, la herramienta más poderosa de Excel para el análisis de datos. Convierten miles de filas de datos sin procesar en un resumen interactivo en segundos, sin escribir una sola fórmula.

---

## ¿Qué es una tabla dinámica?

Una tabla dinámica es un **resumen interactivo** de datos. Tomas columnas de tu base de datos (fecha, producto, región, ventas) y las **arrastras** a diferentes áreas para crear reportes. Puedes reorganizar, filtrar y profundizar en los datos con solo arrastrar campos.

### ¿Qué NO es una tabla dinámica?

- No es una **Tabla de Excel** (Ctrl+T) — eso es una tabla inteligente para organizar datos.
- No es una **fórmula** — es una herramienta visual que crea resúmenes automáticos.
- No modifica los datos originales — solo los resume en una vista aparte.

---

## Requisitos previos

Para que una tabla dinámica funcione correctamente, los datos de origen deben:

1. Tener **encabezados** en cada columna.
2. No tener filas completamente vacías.
3. No tener columnas completamente vacías.
4. Ser un rango contiguo (sin saltos entre datos).
5. Tener datos consistentes (ej: no mezclar texto y números en la misma columna).

### Ejemplo de datos válidos

| Fecha | Producto | Región | Vendedor | Ventas |
|-------|----------|--------|----------|--------|
| 15/01/2024 | Laptop | Norte | Ana | 8000 |
| 15/01/2024 | Mouse | Sur | Luis | 500 |
| 16/01/2024 | Laptop | Sur | Ana | 8000 |
| 16/01/2024 | Teclado | Norte | Luis | 675 |

---

## Crear tu primera tabla dinámica

1. Selecciona **cualquier celda** dentro de tus datos.
2. **Insertar > Tabla dinámica** (o `Alt + N + V`).
3. En el cuadro:
   - **Seleccionar una tabla o rango:** verifica que el rango sea correcto.
   - **¿Dónde quieres ubicar la tabla dinámica?** Elige "Nueva hoja" (recomendado) o "Hoja existente".
4. Haz clic en Aceptar.

Se crea una hoja nueva con dos áreas:
- **Izquierda:** el área donde se construye la tabla dinámica (vacía al inicio).
- **Derecha:** el panel **Campos de tabla dinámica** con la lista de columnas de tus datos.

---

## Las 4 áreas de la tabla dinámica

| Área | Función | Ejemplo |
|------|---------|---------|
| **Filas** | Categorías que aparecen como filas | Producto, Región, Vendedor |
| **Columnas** | Categorías que aparecen como columnas | Año, Trimestre, Mes |
| **Valores** | Los números que quieres resumir | Ventas, Cantidad, Precio |
| **Filtros** | Filtros globales que afectan toda la tabla | País, Año, Categoría |

### Cómo usar las 4 áreas

**Arrastra** los campos del panel a cada área. O haz clic derecho sobre un campo y elige "Agregar como...".

**Ejemplo básico:**
- Arrastra **Producto** a **Filas** → cada producto es una fila
- Arrastra **Ventas** a **Valores** → suma de ventas por producto

**Resultado:**

| Producto | Suma de Ventas |
|----------|---------------|
| Laptop | 16000 |
| Mouse | 500 |
| Teclado | 675 |

---

## Personalizar los valores

No siempre quieres sumar. Puedes cambiar la operación:

1. Haz clic en el campo dentro del área **Valores**.
2. Selecciona **Configuración de campo de valor**.
3. Elige la función deseada:

| Función | Cuándo usarla |
|---------|---------------|
| **Suma** | Totales de ventas, ingresos, costos |
| **Promedio** | Precio promedio, calificación media |
| **Contar** | Número de transacciones, clientes únicos |
| **Máx** | Venta más alta, fecha más reciente |
| **Mín** | Venta más baja, fecha más antigua |
| **Producto** | Multiplicación de valores |

### Formato de números

También puedes cambiar el formato de los valores:
1. Clic derecho en un valor > **Configuración de campo de valor**.
2. En la parte inferior, haz clic en **Formato de número**.
3. Elige formato moneda, número, porcentaje, etc.

---

## Agrupar datos

### Agrupar fechas

Si tienes una columna de fechas, Excel las agrupa automáticamente. Puedes agrupar por:

- **Meses**
- **Trimestres**
- **Años**
- **Días**
- **Semanas**

**Cómo hacerlo:** haz clic derecho en una fecha dentro de la tabla dinámica > **Agrupar** y selecciona los períodos.

### Agrupar números

Crea rangos automáticos. Ej: agrupar edades en 18-25, 26-35, 36-45, etc.

1. Haz clic derecho en un valor numérico > **Agrupar**.
2. Define **Comenzando en**, **Terminando en** y **Por** (tamaño del grupo).

### Agrupar texto manualmente

Selecciona varias filas, haz clic derecho > **Agrupar**. Crea un grupo personalizado (ej: juntar "Laptop" y "Monitor" en "Equipos").

---

## Segmentación de datos (filtros visuales)

Las segmentaciones son botones visuales que permiten filtrar la tabla dinámica con un clic.

1. Selecciona la tabla dinámica.
2. **Insertar > Segmentación de datos** (o clic derecho en la tabla dinámica > Segmentación).
3. Elige los campos por los que quieres filtrar.
4. Aparecen paneles con botones. Haz clic en los valores para filtrar.

> **Ventaja:** las segmentaciones muestran qué filtros están activos visualmente, a diferencia de los filtros normales.

---

## Línea de tiempo (filtro de fechas visual)

Si trabajas con fechas, la **Línea de tiempo** es aún mejor que la segmentación:

1. Selecciona la tabla dinámica.
2. **Insertar > Línea de tiempo**.
3. Elige el campo de fecha.
4. Aparece un control deslizante para seleccionar meses, trimestres o años.

---

## Actualizar datos

**Importante:** si cambias los datos de origen, la tabla dinámica **NO se actualiza automáticamente**. Debes actualizarla manualmente:

- **Opción 1:** clic derecho en la tabla dinámica > **Actualizar**.
- **Opción 2:** **Datos > Actualizar todo** (`Ctrl + Alt + F5`).

### Tabla dinámica + Tabla de Excel = dinamita

Si conviertes tus datos de origen en una **Tabla de Excel** (`Ctrl + T`) antes de crear la tabla dinámica, entonces al agregar nuevos datos solo necesitas **Actualizar** — no necesitas cambiar el rango de origen.

---

## PRO TIPS

> **Pro Tip #1 — Mostrar valores como porcentaje**
> En Configuración de campo de valor > **Mostrar valores como**, puedes elegir:
> - % del total general
> - % del total de fila
> - % del total de columna
> - Diferencia respecto a período anterior
> Esto convierte tu tabla dinámica en un análisis porcentual sin fórmulas.

> **Pro Tip #2 — Campo calculado**
> Puedes agregar columnas calculadas dentro de la tabla dinámica. Ej: si tienes Ventas y Costo, crea un campo calculado `=Ventas - Costo` para ver la ganancia. En la tabla dinámica, ve a **Analizar > Campos, elementos y conjuntos > Campo calculado**.

> **Pro Tip #3 — Doble clic para ver los detalles**
> Haz doble clic en cualquier valor de la tabla dinámica. Excel crea una nueva hoja con TODAS las filas de datos que componen ese valor. Es ideal para auditoría.

> **Pro Tip #4 — Orden personalizado dentro de la tabla dinámica**
> Puedes arrastrar elementos manualmente para reordenarlos. O usa el orden personalizado de Excel para que los meses aparezcan en orden cronológico, no alfabético.

> **Pro Tip #5 — Conexión múltiple de segmentaciones**
> Una segmentación puede controlar VARIAS tablas dinámicas a la vez. Clic derecho en la segmentación > **Conexiones de informe** y marca todas las tablas dinámicas que debe controlar.

---

## Escenario empresarial: análisis de ventas anuales

Eres gerente comercial y tienes 12,000 filas de ventas de todo el año. Necesitas responder:

1. **¿Cuál es el producto más vendido?** → Pon Producto en Filas, Ventas en Valores. Ordena de mayor a menor.
2. **¿Qué región vendió más en cada trimestre?** → Pon Región en Filas, Fecha agrupada por Trimestre en Columnas, Ventas en Valores.
3. **¿Quién es el vendedor del año?** → Pon Vendedor en Filas, Ventas en Valores, orden descendente.
4. **¿Cómo evolucionaron las ventas mes a mes?** → Pon Fecha agrupada por Mes en Filas, Ventas en Valores. Agrega una línea de tiempo.
5. **¿Qué porcentaje de ventas representa cada categoría?** → Pon Producto en Filas, Ventas en Valores, y en "Mostrar valores como" elige % del total general.

---

## Errores comunes

| Error | Descripción | Solución |
|-------|-------------|----------|
| **"Ya existe una tabla dinámica..."** | Estás creando una tabla dinámica sobre otra | Usa una hoja nueva o un rango diferente |
| **Los datos nuevos no aparecen** | La tabla dinámica no se actualiza automáticamente | Haz clic derecho > **Actualizar** |
| **"No se puede abrir el archivo..."** | El origen de datos se movió o renombró | Ve a Datos > **Cambiar origen de datos** y selecciona el nuevo rango |
| **Valores incorrectos en el resumen** | Puede haber datos duplicados o errores en el origen | Revisa los datos originales y elimina duplicados |
| **La segmentación no funciona** | No está conectada a la tabla dinámica | Clic derecho en la segmentación > **Conexiones de informe** |
| **Fechas no se agrupan correctamente** | Las fechas están como texto, no como tipo fecha | Convierte usando **Texto en columnas** o función `=FECHA()` |

---

## Ejercicio práctico completo

### Parte 1: Datos de origen

Crea al menos 20 filas completas:

| Fecha | Producto | Región | Vendedor | Ventas |
|-------|----------|--------|----------|--------|
| 15/01/2024 | Laptop | Norte | Ana | 8000 |
| 15/01/2024 | Mouse | Sur | Luis | 500 |
| 16/01/2024 | Laptop | Sur | Ana | 8000 |
| 16/01/2024 | Teclado | Norte | Luis | 675 |
| 17/01/2024 | Escritorio | Centro | María | 3500 |
| 17/01/2024 | Silla | Norte | Ana | 1200 |
| 18/01/2024 | Mouse | Centro | Luis | 750 |
| 18/01/2024 | Monitor | Sur | María | 2000 |
| 19/01/2024 | Laptop | Centro | Ana | 8000 |
| 19/01/2024 | Teclado | Sur | María | 900 |
| 20/01/2024 | Silla | Centro | Luis | 2400 |
| 20/01/2024 | Escritorio | Norte | Ana | 3500 |
| 21/01/2024 | Monitor | Centro | María | 2500 |
| 21/01/2024 | Mouse | Norte | Luis | 625 |
| 22/01/2024 | Laptop | Sur | Ana | 8000 |
| 22/01/2024 | Teclado | Centro | María | 450 |
| 23/01/2024 | Escritorio | Sur | Luis | 3500 |
| 23/01/2024 | Silla | Centro | Ana | 1200 |
| 24/01/2024 | Monitor | Norte | María | 2000 |
| 24/01/2024 | Mouse | Sur | Luis | 500 |

### Parte 2: Crear tabla dinámica básica

1. Selecciona cualquier celda de los datos. **Insertar > Tabla dinámica > Nueva hoja**.
2. Arrastra **Producto** a **Filas**.
3. Arrastra **Ventas** a **Valores**.
4. Haz clic derecho en un valor > **Ordenar > De mayor a menor**.

### Parte 3: Agregar dimensiones

1. Arrastra **Región** a **Columnas**.
2. Ahora ves ventas por producto y por región en una matriz.

### Parte 4: Agrupar fechas

1. Arrastra **Fecha** a **Filas** (encima de Producto).
2. Haz clic derecho en cualquier fecha > **Agrupar**.
3. Selecciona **Meses** y **Años**. Aceptar.

### Parte 5: Filtrar y segmentar

1. Arrastra **Vendedor** al área de **Filtros**.
2. Filtra para ver solo un vendedor.
3. Inserta una **Segmentación de datos** para **Producto**.
4. Inserta una **Línea de tiempo** para **Fecha**.

### Parte 6: Personalizar cálculos

1. En Valores, haz clic en Suma de Ventas > **Configuración de campo de valor**.
2. Cambia a **Promedio**.
3. Luego cambia a **Contar** (número de transacciones).
4. Finalmente, en **Mostrar valores como**, elige **% del total general**.

### Parte 7: Auditar con doble clic

1. Haz doble clic en cualquier valor de la tabla dinámica.
2. Observa cómo Excel crea una hoja nueva con los detalles de ese valor.
3. Guarda como `05-tabla-dinamica.xlsx`.

---

## Key Takeaways

- Las tablas dinámicas **resumen miles de filas** en segundos sin fórmulas.
- Las **4 áreas** (Filas, Columnas, Valores, Filtros) son la clave para construir reportes.
- **Agrupar** fechas, números o texto permite crear categorías personalizadas.
- Las **segmentaciones** y **líneas de tiempo** son filtros visuales interactivos.
- La tabla dinámica **no se actualiza sola** — usa `Ctrl + Alt + F5` o clic derecho > Actualizar.
- Combina tablas dinámicas con **Tablas de Excel** (Ctrl+T) para rangos dinámicos automáticos.
- El **doble clic** en un valor revela los datos de origen detrás de ese número.

---

**Siguiente módulo:** [06-FUNCIONES-LOGICAS-BUSQUEDA](../06-FUNCIONES-LOGICAS-BUSQUEDA/01-SI-Y-O.md)
