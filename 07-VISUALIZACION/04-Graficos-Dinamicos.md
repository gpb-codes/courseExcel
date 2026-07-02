# Gráficos dinámicos

Un **gráfico dinámico** es la combinación perfecta entre una tabla dinámica y un gráfico: tiene la interactividad de la tabla dinámica con la potencia visual de un gráfico. Al filtrar, agrupar o segmentar los datos, el gráfico se actualiza automáticamente.

## ¿Qué es un gráfico dinámico?

- Es un gráfico basado en una **tabla dinámica** subyacente.
- Hereda toda la flexibilidad de las tablas dinámicas (filtrar, agrupar, segmentar).
- Se **actualiza en tiempo real** cuando cambias los campos o filtros.
- Los botones de filtro aparecen directamente en el gráfico para interactuar.

### ¿Cuándo usar un gráfico dinámico vs. un gráfico normal?

| Característica | Gráfico normal | Gráfico dinámico |
|---|---|---|
| Rango de datos fijo | Sí (rango estático) | No (se adapta a la tabla dinámica) |
| Filtros interactivos | No (hay que editar el rango) | Sí (filtros en el gráfico mismo) |
| Agrupar datos (fechas, rangos) | Manual | Automático (agrupar en la tabla dinámica) |
| Agregar/quitar campos | Rediseñar el gráfico | Arrastrar campos |
| Segmentaciones de datos | No compatible | Sí, nativo |
| Ideal para | Informes estáticos | Dashboards interactivos |

## Crear un gráfico dinámico

### Opción 1: Desde una tabla dinámica existente

Si ya tienes una tabla dinámica:

1. Selecciona cualquier celda dentro de la **tabla dinámica**.
2. Ve a **Insertar > Gráfico dinámico** (o pestaña **Analizar > Gráfico dinámico**).
3. Elige el tipo de gráfico (columna, línea, circular, etc.).
4. El gráfico aparece vinculado a la tabla dinámica.

### Opción 2: Desde cero (crea tabla + gráfico juntos)

1. Selecciona tus datos originales (incluyendo encabezados).
2. **Insertar > Gráfico dinámico** (en el grupo Gráficos).
3. Elige el tipo de gráfico.
4. Se crean automáticamente la tabla dinámica y el gráfico lado a lado.
5. En el panel de campos, arrastra los campos a las áreas correspondientes.

> **Pro Tip:** La opción 2 es más rápida cuando empiezas desde cero. La opción 1 es útil cuando ya tienes tablas dinámicas configuradas y solo quieres agregar el componente visual.

## Cómo funciona: El panel de campos

A la derecha aparece el panel **Campos de tabla dinámica** con cuatro áreas:

| Área | Función | Equivalente en gráfico |
|------|---------|----------------------|
| **Ejes (categorías)** | Categorías en el eje X | Meses, productos, regiones |
| **Leyenda (series)** | Divide los datos en series | Líneas/barras de colores distintos |
| **Valores** | Datos numéricos a graficar | Altura de barras, puntos de línea |
| **Filtros** | Filtros globales para todo el gráfico | Segmentación general |

### Ejemplo de configuración

Para un gráfico que muestre **ventas por producto por región**:

1. Arrastra **Producto** a **Ejes**.
2. Arrastra **Ventas** a **Valores**.
3. Arrastra **Región** a **Leyenda**.
4. Arrastra **Fecha** a **Filtros**.

Resultado: un gráfico de barras agrupadas con un producto por eje y una barra de color distinto por región.

## Filtrar gráficos dinámicos

Los gráficos dinámicos incluyen **botones de filtro** directamente en el gráfico:

- **Filtros de campo**: haz clic en el botón de filtro junto al nombre del campo para mostrar/ocultar elementos.
- **Segmentaciones de datos**: agrega controles visuales (botones) para filtrar por producto, fecha, vendedor, etc.

### Cómo agregar una segmentación de datos

1. Selecciona el gráfico dinámico.
2. **Analizar > Insertar segmentación de datos** (o en el gráfico, botón **Agregar segmentación**).
3. Elige el campo (ej: Producto, Vendedor).
4. Aparecen botones que puedes presionar para filtrar.
5. Mantén presionada la tecla Ctrl para seleccionar múltiples.

## Agrupar datos en gráficos dinámicos

Una de las ventajas más poderosas: **agrupar fechas** por mes, trimestre o año.

1. En la tabla dinámica (no en el gráfico), haz clic derecho en una fecha.
2. **Agrupar > Meses**, **Trimestres**, **Años** (o combinaciones).
3. El gráfico se actualiza automáticamente para mostrar la nueva agrupación.

También puedes agrupar valores numéricos: clic derecho en un valor numérico > **Agrupar** > define el rango y el intervalo.

## Cambiar el tipo de gráfico

Puedes cambiar el tipo de gráfico dinámico sin perder la configuración:

1. Selecciona el gráfico dinámico.
2. **Diseño > Cambiar tipo de gráfico** (clic derecho en el gráfico también).
3. Elige: columna, línea, circular, barras, áreas, etc.

**Recomendaciones:**
- **Columna agrupada**: ideal para comparar categorías con múltiples series
- **Columna apilada**: muestra la composición del total por categoría
- **Línea**: para tendencias temporales
- **Circular**: solo si tienes una sola serie y pocas categorías

## Escenario de negocio real

**Contexto:** Eres analista de una cadena de tiendas. Tienes datos de ventas de todo el año con Fecha, Producto, Región, Vendedor y Ventas. Necesitas un dashboard que el gerente pueda explorar por su cuenta.

**Solución:**
1. Creas un gráfico dinámico de columnas (Ventas por Producto, con Región como series).
2. Agregas segmentaciones de datos para **Vendedor** y **Mes**.
3. El gerente hace clic en "Norte" y "Marzo" y el gráfico muestra solo esas ventas.
4. Agrega un segundo gráfico (circular) que muestra la contribución de cada producto al total filtrado.

El gerente puede hacer 20 preguntas distintas sin pedirte un nuevo informe cada vez.

## Ejercicio práctico paso a paso

### Ejercicio 1: Crear el primer gráfico dinámico

1. Crea estos datos:

| Fecha | Producto | Región | Vendedor | Ventas |
|-------|----------|--------|----------|--------|
| 15/01/2024 | Laptop | Norte | Ana | 2400 |
| 15/01/2024 | Mouse | Norte | Ana | 300 |
| 16/01/2024 | Laptop | Sur | Carlos | 2400 |
| 16/01/2024 | Teclado | Sur | Carlos | 450 |
| 17/01/2024 | Monitor | Norte | Ana | 1250 |
| 17/01/2024 | Laptop | Centro | María | 2400 |
| 18/01/2024 | Mouse | Centro | María | 300 |
| 18/01/2024 | Teclado | Norte | Ana | 450 |
| 19/01/2024 | Monitor | Sur | Carlos | 1250 |
| 19/01/2024 | Laptop | Centro | María | 2400 |
| 20/01/2024 | Mouse | Sur | Carlos | 300 |
| 20/01/2024 | Teclado | Centro | María | 450 |

2. Selecciona todo el rango (A1:E13).
3. **Insertar > Gráfico dinámico > Columna agrupada**. Aceptar.
4. En el panel: arrastra **Producto** a Ejes, **Ventas** a Valores, **Región** a Leyenda.
5. Observa cómo se crea el gráfico automáticamente.

### Ejercicio 2: Agregar interactividad

1. En el gráfico, ve a **Analizar > Insertar segmentación de datos**.
2. Marca **Vendedor** y **Fecha**.
3. Haz clic en "Ana" en la segmentación — el gráfico muestra solo las ventas de Ana.
4. Haz clic en "Carlos" — el gráfico cambia al instante.
5. Mantén Ctrl y selecciona "Ana" y "María" — ahora ves dos vendedores.

### Ejercicio 3: Agrupar por mes

1. En la tabla dinámica subyacente (no en el gráfico), haz clic derecho en cualquier fecha.
2. **Agrupar > Meses**.
3. El gráfico se actualiza para mostrar ventas por mes.
4. También puedes agrupar por Trimestres o Años.

### Ejercicio 4: Cambiar tipo y diseñar

1. Selecciona el gráfico.
2. **Diseño > Cambiar tipo de gráfico > Línea**.
3. Observa cómo los datos se ven ahora como líneas de tendencia.
4. Cambia a **Columna apilada** — ahora ves la composición del total por región.
5. Agrega título, etiquetas de datos y elige un estilo profesional.

## Errores comunes

| Error | Por qué ocurre | Solución |
|-------|---------------|----------|
| **El gráfico está vacío** | No arrastraste campos a las áreas correctas | Arrastra un campo numérico a Valores y uno de texto a Ejes |
| **Los datos no se actualizan** | Agregaste datos pero no refrescaste | Clic derecho en el gráfico > Actualizar |
| **Aparece "En blanco"** | La tabla dinámica tiene datos vacíos | Revisa los datos originales; completa o filtra vacíos |
| **No puedo agrupar fechas** | Las fechas pueden tener formato incorrecto | Asegúrate de que la columna Fecha sea tipo fecha, no texto |
| **El gráfico mezcla totales incorrectos** | El campo Valores está configurado como Cuenta en vez de Suma | Clic derecho en el valor > Resumir valores por > Suma |

## Atajos de teclado

| Atajo | Acción |
|-------|--------|
| `Alt + N + D` | Insertar gráfico dinámico |
| `Alt + F5` | Refrescar tabla dinámica (y su gráfico) |
| `Ctrl + Shift + *` | Seleccionar toda la tabla dinámica |
| `Alt + JT + S` | Insertar segmentación de datos |

## Puntos clave

- Los gráficos dinámicos son interactivos: se actualizan al filtrar o segmentar
- Se crean desde una tabla dinámica o desde cero (Insertar > Gráfico dinámico)
- Cuatro áreas clave: Ejes, Leyenda, Valores, Filtros
- Las segmentaciones de datos agregan filtros visuales con un clic
- Las fechas se agrupan por mes, trimestre o año automáticamente
- El tipo de gráfico se puede cambiar sin perder la configuración
- Ideales para dashboards y análisis exploratorio de datos

---

**Siguiente módulo:** [08-HERRAMIENTAS-AVANZADAS](../08-HERRAMIENTAS-AVANZADAS/01-Analisis-Y-Si.md)
