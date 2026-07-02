# Gráficos básicos

Un gráfico vale más que mil números. Excel puede transformar filas de datos en visualizaciones profesionales con solo unos clics. Los gráficos permiten detectar tendencias, comparar categorías y comunicar hallazgos de forma mucho más efectiva que una tabla de números.

## ¿Por qué usar gráficos?

El cerebro humano procesa imágenes 60,000 veces más rápido que el texto. Un gráfico bien diseñado permite:

- **Identificar tendencias** al instante (¿las ventas suben o bajan?)
- **Comparar categorías** visualmente (¿qué producto vende más?)
- **Detectar anomalías** (picos o caídas inesperadas)
- **Comunicar resultados** a jefes o clientes de forma clara
- **Tomar decisiones** basadas en datos, no en corazonadas

## Crear un gráfico en 3 pasos

1. **Selecciona tus datos** (incluyendo encabezados de columna).
2. **Insertar > Elegir tipo de gráfico** (columna, línea, circular, etc.).
3. El gráfico aparece automáticamente en la hoja.

También puedes presionar `Alt + F1` para crear un gráfico al instante con la configuración predeterminada.

> **Pro Tip:** Si seleccionas una celda vacía en lugar de un rango, Excel no podrá generar el gráfico. Asegúrate siempre de seleccionar los datos primero.

## Tipos de gráfico y cuándo usarlos

Cada tipo de gráfico tiene un propósito específico. Elegir el incorrecto puede confundir a tu audiencia.

| Tipo de gráfico | Para qué sirve | Ejemplo de uso |
|----------------|----------------|----------------|
| **Columnas** | Comparar categorías | Ventas por producto, ingresos por mes |
| **Barras** | Comparar categorías con etiquetas largas | Ventas por país (nombres largos) |
| **Líneas** | Mostrar tendencias en el tiempo | Crecimiento de ingresos 2020-2024 |
| **Circular (pastel)** | Mostrar proporciones de un total | Participación de mercado por producto |
| **Dispersión (XY)** | Relación entre dos variables | Correlación entre gasto en publicidad y ventas |
| **Áreas** | Volumen a lo largo del tiempo | Tráfico web mensual acumulado |
| **Anillos** | Similar al circular pero con múltiples series | Composición de ingresos por línea de negocio |
| **Radar** | Comparar múltiples variables | Evaluación de competencias por empleado |

> **Pro Tip:** Evita los gráficos circulares si tienes más de 5 categorías. El ojo humano no puede distinguir bien proporciones pequeñas. Usa columnas apiladas o barras horizontales como alternativa.

## Elementos de un gráfico

Todo gráfico profesional debe incluir estos elementos:

- **Título del gráfico**: debe describir claramente qué muestra. Ej: "Ventas del primer semestre 2024" en lugar de solo "Ventas".
- **Eje horizontal (X)**: contiene las categorías (meses, productos, regiones...).
- **Eje vertical (Y)**: contiene los valores numéricos (ventas, cantidades, porcentajes...).
- **Leyenda**: identifica cada serie de datos cuando hay múltiples.
- **Etiquetas de datos**: muestra el valor exacto en cada barra, punto o sector.
- **Líneas de cuadrícula**: guías horizontales/verticales para leer valores con precisión (usa con moderación).

### Cómo agregar o quitar elementos

1. Selecciona el gráfico.
2. Haz clic en el botón **+** (Elementos del gráfico) que aparece a la derecha.
3. Marca o desmarca: Título del gráfico, Etiquetas de datos, Leyenda, Líneas de cuadrícula, etc.

## Personalizar el gráfico

Al seleccionar un gráfico, aparecen **tres botones** flotantes a la derecha:

| Botón | Función | ¿Qué puedes hacer? |
|-------|---------|-------------------|
| **+** | Elementos del gráfico | Agregar/quitar título, etiquetas, leyenda, cuadrícula |
| **🖌** (Pincel) | Estilo y color | Aplicar diseños predefinidos y paletas de colores |
| **📊** (Filtro) | Filtrar datos | Mostrar u ocultar series o categorías específicas |

### La pestaña Diseño de gráfico

Al seleccionar el gráfico, aparecen dos pestañas contextuales en la cinta de opciones:

**Diseño:**
- Cambiar tipo de gráfico
- Intercambiar filas/columnas
- Seleccionar datos (agregar/quitar series)
- Mover gráfico a otra hoja
- Aplicar diseños rápidos

**Formato:**
- Relleno de forma (color de fondo)
- Contorno de forma (borde)
- Efectos de forma (sombra, 3D, bisel)
- Tamaño y propiedades
- WordArt para títulos

## Dar formato a ejes

Puedes personalizar ambos ejes para mejorar la legibilidad:

1. Haz clic derecho sobre el eje > **Dar formato al eje**.
2. Opciones útiles:
   - **Límites**: ajusta el mínimo/máximo del eje vertical.
   - **Unidades**: cambia la escala (cada 1,000 o 10,000).
   - **Número**: formato de moneda, porcentaje, miles, etc.
   - **Etiquetas**: posición, rotación, intervalo.

> **Pro Tip:** Si los valores de tu eje Y son muy grandes (ej: 1,500,000), usa el formato de número "miles" (1,500) para que el eje sea más legible. Haz clic derecho en el eje > Dar formato al eje > Número > Personalizado > escribe `#,##0,` para miles o `#,##0,,` para millones.

## Gráficos recomendados

Excel 2016+ incluye la función **Gráficos recomendados**:

1. Selecciona tus datos.
2. Insertar > Gráficos recomendados.
3. Excel analiza tus datos y sugiere el tipo de gráfico más adecuado.
4. Explora las vistas previas antes de decidir.

Esto es especialmente útil cuando no estás seguro de qué tipo de gráfico usar.

## Escenario de negocio real

**Contexto:** Eres analista de ventas en una tienda departamental. Necesitas presentar al gerente general un informe visual de las ventas del primer semestre.

Con los datos de ventas mensuales, puedes crear:
1. Un **gráfico de columnas** para mostrar ventas totales por mes.
2. Un **gráfico de líneas** superpuesto para mostrar la tendencia.
3. Un **gráfico circular** para mostrar la contribución de cada categoría al total.
4. Un **panel** combinando varios gráficos en una sola hoja.

## Ejercicio práctico paso a paso

### Ejercicio 1: Tu primer gráfico

1. Crea la siguiente tabla en Excel:

| Mes | Ventas |
|-----|--------|
| Enero | 15000 |
| Febrero | 18000 |
| Marzo | 12000 |
| Abril | 22000 |
| Mayo | 19000 |
| Junio | 25000 |

2. Selecciona el rango A1:B7 (incluyendo encabezados).
3. Ve a **Insertar > Gráficos > Columna agrupada 2D**.
4. Agrega el título: Haz clic en el título y escribe "Ventas primer semestre 2024".
5. Agrega etiquetas de datos: Botón **+** > marcar **Etiquetas de datos**.
6. Cambia el color de las barras: Doble clic en las barras > Formato > Relleno de forma > Elige azul oscuro.
7. Mueve el gráfico a una hoja nueva: Clic derecho en el gráfico > **Mover gráfico...** > **Hoja nueva** > nombre "Gráfico Ventas".

### Ejercicio 2: Comparar dos series

1. Agrega datos de "Meta" a tu tabla:

| Mes | Ventas | Meta |
|-----|--------|------|
| Enero | 15000 | 17000 |
| Febrero | 18000 | 17000 |
| Marzo | 12000 | 17000 |
| Abril | 22000 | 17000 |
| Mayo | 19000 | 17000 |
| Junio | 25000 | 17000 |

2. Haz clic derecho en el gráfico > **Seleccionar datos** > **Agregar**.
3. En "Nombre de la serie": Meta. En "Valores de la serie": selecciona C2:C7.
4. Cambia el gráfico a **Líneas y columnas**:
   - Selecciona la serie "Meta" > clic derecho > **Cambiar tipo de gráfico de serie** > **Línea**.
   - Esto crea un gráfico combinado (columnas para ventas, línea para meta).

### Ejercicio 3: Gráfico circular

1. Crea datos de participación por producto:

| Producto | Ventas |
|----------|--------|
| Laptops | 45000 |
| Teléfonos | 38000 |
| Tablets | 22000 |
| Accesorios | 15000 |

2. Selecciona > Insertar > Circular > Circular 2D.
3. Agrega etiquetas con porcentajes: Botón **+** > **Etiquetas de datos** > flecha derecha > **Más opciones** > marcar **Porcentaje** y desmarcar **Valor**.
4. Explota un sector: Haz clic dos veces en un sector (lento) y arrastra hacia afuera.

## Errores comunes

| Error | Por qué ocurre | Solución |
|-------|---------------|----------|
| **Gráfico en blanco** | No seleccionaste los datos antes de insertar | Borra el gráfico, selecciona datos, inserta de nuevo |
| **Eje Y no empieza en cero** | Excel a veces ajusta la escala automáticamente | Clic derecho en eje > Dar formato al eje > Límites > Mínimo = 0 |
| **Etiquetas ilegibles** | Texto muy largo o inclinado | Reduce el texto o usa barras (horizontales) en vez de columnas |
| **Demasiados colores** | Cada barra de un color distinto sin motivo | Usa un solo color para una serie; reserva colores distintos para series diferentes |
| **Gráfico circular con 10 categorías** | El gráfico circular es ilegible con muchos sectores | Agrupa categorías pequeñas en "Otros" o usa barras apiladas |

## Atajos de teclado

| Atajo | Acción |
|-------|--------|
| `Alt + F1` | Crear gráfico al instante en la misma hoja |
| `F11` | Crear gráfico en una hoja nueva |
| `Ctrl + 1` | Abrir formato del elemento seleccionado |
| Flechas | Navegar entre elementos del gráfico |
| `Supr` | Eliminar el gráfico o elemento seleccionado |

## Puntos clave

- Los gráficos transforman datos en información visual accionable
- Elije el tipo de gráfico según el mensaje que quieras comunicar (comparación, tendencia, proporción)
- Un gráfico profesional necesita título claro, ejes etiquetados y diseño limpio
- `Alt + F1` es tu mejor aliado para crear gráficos al instante
- Los gráficos combinados (columna + línea) son ideales para mostrar real vs. meta

---

**Siguiente tema:** [02-Formato-Condicional.md](02-Formato-Condicional.md)
