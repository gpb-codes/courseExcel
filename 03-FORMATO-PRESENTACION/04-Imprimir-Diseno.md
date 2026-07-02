# Imprimir y diseño de página

Imprimir en Excel tiene sus trucos. Una hoja que se ve perfecta en pantalla puede salir mal en papel si no configuras correctamente los márgenes, la orientación, el área de impresión y los saltos de página. Saber configurar la impresión es una habilidad esencial para cualquier profesional que deba presentar reportes impresos.

## Vista preliminar

### Acceder a la vista preliminar

Archivo > Imprimir (o `Ctrl + P`)

En esta pantalla ves dos áreas:
- **Izquierda:** todas las opciones de configuración de impresión
- **Derecha:** la vista previa exacta de cómo se verá en papel

### Navegar en la vista previa

| Acción | Cómo hacerlo |
|--------|--------------|
| Ver página siguiente/anterior | Flechas en la parte inferior de la vista previa |
| Acercar/alejar | Control de zoom en la parte inferior derecha |
| Ir a una página específica | Número de página / total de páginas |
| Mostrar márgenes | Botón "Mostrar márgenes" en la vista previa (esquina inferior derecha) |

> **Pro Tip:** Activa "Mostrar márgenes" en la vista previa para ver y ajustar visualmente los márgenes arrastrando las líneas azules. Es mucho más intuitivo que poner números en el cuadro de diálogo.

## Configuración básica de impresión

### Opciones de impresión

| Opción | Descripción | Cuándo usarla |
|--------|-------------|---------------|
| **Imprimir hojas activas** | Imprime solo la(s) hoja(s) seleccionada(s) | Uso más común |
| **Imprimir todo el libro** | Imprime TODAS las hojas del libro | Reportes completos con varias hojas |
| **Imprimir selección** | Solo el rango de celdas que seleccionaste antes de imprimir | Cuando solo necesitas un fragmento |
| **Intercalar** | 1,2,1,2 vs 1,1,2,2 (para múltiples copias) | Impresión de múltiples copias de un informe |

### Opciones de copias

- **Número de copias:** Cuántas veces imprimir el mismo contenido
- **Intercalar:** Marca "Intercalar" si quieres juegos completos del documento (1,2,3,1,2,3) vs. todas las páginas iguales juntas (1,1,2,2,3,3)

### Ahorro de tinta y papel

- **Impresión a una cara / a doble cara:** Depende de tu impresora
- **Impresión en blanco y negro:** Desde Configurar página > Hoja > Imprimir en blanco y negro
- **Borrador:** Desde Propiedades de la impresora, baja la calidad (ahorra tinta)

## Orientación de página

### Cuándo usar cada orientación

| Orientación | Cuándo usarla | Ejemplo |
|-------------|---------------|---------|
| **Vertical** (retrato) | Datos con pocas columnas pero muchas filas | Lista de empleados, catálogo, inventario |
| **Horizontal** (apaisada) | Datos con muchas columnas | Reportes financieros con 10+ columnas, tablas comparativas |

**Cómo cambiar:** Diseño de página > Orientación > Vertical u Horizontal

> **Pro Tip:** Como regla general, usa **Horizontal** para cualquier tabla que tenga más de 5 columnas. Usa **Vertical** para listas o formularios.

## Márgenes

### Márgenes predefinidos

Diseño de página > Márgenes:

| Opción | Superior | Inferior | Izquierdo | Derecho | Encabezado | Pie |
|--------|----------|----------|-----------|---------|------------|-----|
| Normal | 1.91 cm | 1.91 cm | 1.78 cm | 1.78 cm | 0.76 cm | 0.76 cm |
| Estrecho | 1.27 cm | 1.27 cm | 0.64 cm | 0.64 cm | 0 cm | 0 cm |
| Ancho | 2.54 cm | 2.54 cm | 2.54 cm | 2.54 cm | 1.27 cm | 1.27 cm |

**Recomendación:** Para tablas de datos, usa **Estrecho** (maximiza el espacio útil en la página).

### Márgenes personalizados

Diseño de página > Márgenes > Márgenes personalizados... > pestaña Márgenes

Aquí puedes centrar la hoja en la página:
- **Horizontalmente:** Marca esta opción para centrar la tabla de izquierda a derecha
- **Verticalmente:** Marca esta opción para centrar de arriba a abajo (útil cuando la tabla es pequeña)

## Ajustar a página (escalado)

### La opción más importante para impresión profesional

**Diseño de página > Ajustar área de impresión:**

| Opción | Descripción |
|--------|-------------|
| **Ancho:** 1 página | Fuerza el contenido a que quepa en 1 página de ancho (alto automático) |
| **Alto:** 1 página | Fuerza a que quepa en 1 página de alto (ancho automático) |
| **Escala:** 100% | Tamaño normal. Reducir al 75% comprime todo |

**Recomendación profesional:** Configura **Ancho: 1 página** y **Alto: Automático**. Así el contenido se ajusta al ancho de la página sin comprimir verticalmente más de lo necesario.

> **Pro Tip:** No bajes la escala a menos del 60%. Por debajo de eso el texto se vuelve ilegible. Si no cabe al 60%, considera cambiar a orientación Horizontal o dividir en dos tablas.

### Escalado vs. ajuste manual

| Método | Ventaja | Desventaja |
|--------|---------|------------|
| Escala al 80% | Una sola opción | El texto puede quedar muy pequeño |
| Ancho: 1 página | Se ajusta automáticamente | Puede escalar demasiado si la tabla es ancha |
| Ajustar área de impresión | Control total | Requiere ajuste manual de columnas |

## Saltos de página

### Vista de salto de página

Diseño de página > Vista de salto de página (o el icono en la barra de estado inferior derecha)

La hoja se muestra con líneas azules que indican dónde se corta cada página:

- **Línea azul continua:** Salto de página establecido por Excel automáticamente
- **Línea azul discontinua:** Salto manual que puedes agregar o arrastrar

### Agregar, mover y eliminar saltos

| Acción | Cómo hacerlo |
|--------|--------------|
| Agregar salto vertical | Selecciona una columna > Diseño de página > Saltos > Insertar salto de página |
| Agregar salto horizontal | Selecciona una fila > Diseño de página > Saltos > Insertar salto de página |
| Mover salto | Arrastra la línea azul en la vista de salto de página |
| Eliminar salto | Selecciona la celda junto al salto > Diseño de página > Saltos > Eliminar salto de página |
| Restablecer todos | Diseño de página > Saltos > Restablecer todos los saltos de página |

### Vista previa de salto de página

Además de la vista de salto de página, puedes usar **Vista Diseño de página** (icono en la barra de estado o Vista > Diseño de página). Esta vista muestra:
- Reglas (superior e izquierda)
- Márgenes visibles
- Encabezados y pies de página editables directamente
- El área gris indica las zonas que no se imprimirán

## Encabezados y pies de página

### Cómo agregarlos

Diseño de página > Configurar página > Encabezado/Pie de página (o en Vista Diseño de página, haz clic en "Haga clic para agregar encabezado")

### Encabezados y pies predefinidos

| Opción de encabezado | Muestra |
|----------------------|---------|
| Ninguno | Sin encabezado |
| Página 1 | `Página 1` |
| Página 1 de ? | `Página 1 de 5` |
| Confidencial | `Confidencial` + fecha |
| Nombre del libro | `04-Imprimir-Diseno` |

### Opciones de personalización

En el cuadro de diálogo Encabezado/Pie de página, tienes 3 secciones editables: izquierda, centro y derecha. Los botones de código te permiten insertar:

| Código | Qué inserta | Ícono |
|--------|-------------|-------|
| `&[Página]` | Número de página actual | `#` |
| `&[Páginas]` | Número total de páginas | `##` |
| `&[Fecha]` | Fecha actual | Calendario |
| `&[Hora]` | Hora actual | Reloj |
| `&[Ruta]` | Ruta completa del archivo | Carpeta |
| `&[Archivo]` | Nombre del archivo | Libro |
| `&[Pestaña]` | Nombre de la hoja | Hoja |

**Ejemplo profesional de pie de página:**
- Izquierda: `&[Pestaña]` (nombre de la hoja)
- Centro: `Confidencial`
- Derecha: `Página &[Página] de &[Páginas]`

## Área de impresión

### Definir el área de impresión

Cuando solo necesitas imprimir una parte específica de tu hoja:

1. Selecciona el rango de celdas que quieres imprimir
2. Diseño de página > Área de impresión > **Establecer área de impresión**
3. La hoja tendrá un borde punteado gris indicando el área definida

### Gestionar el área de impresión

| Acción | Cómo hacerlo |
|--------|--------------|
| Agregar más celdas | Selecciona nuevo rango > Área de impresión > Agregar al área de impresión |
| Limpiar | Diseño de página > Área de impresión > Limpiar área de impresión |
| Seleccionar desde imprimir | Archivo > Imprimir > Configuración > "Imprimir selección" |

### Diferencia entre área de impresión y selección

| Método | Ventaja | Desventaja |
|--------|---------|------------|
| **Área de impresión** | Se guarda con el libro; siempre imprimirá esa área | Hay que limpiarla manualmente si cambia |
| **Imprimir selección** | No modifica el libro; se elige en el momento | Hay que hacer la selección cada vez |

## Tamaño de papel

### Tamaños disponibles

Diseño de página > Tamaño:

| Formato | Uso |
|---------|-----|
| Carta (21.59 x 27.94 cm) | Estándar en Norteamérica |
| A4 (21 x 29.7 cm) | Estándar en Europa y Latinoamérica |
| Legal (21.59 x 35.56 cm) | Documentos legales |
| Tabloide (27.94 x 43.18 cm) | Mapas, planos, tablas muy grandes |

### Configuración de impresora específica

Si necesitas márgenes no estándar o tamaño de papel especial, haz clic en **Propiedades** dentro del cuadro de diálogo de Configurar página. Ahí puedes configurar:
- Calidad de impresión (DPI)
- Bandeja de papel
- Impresión a doble cara
- Escala de grises

## Opciones de hoja (cuadrícula, encabezados)

Diseño de página > Opciones de hoja:

| Opción | Descripción | Atajo |
|--------|-------------|-------|
| **Ver cuadrícula** | Muestra/oculta la cuadrícula gris en pantalla (no afecta impresión) | |
| **Imprimir cuadrícula** | Imprime las líneas de cuadrícula | Hace que los datos se vean más organizados |
| **Ver encabezados** | Muestra/oculta A, B, C... y 1, 2, 3... en pantalla | |
| **Imprimir encabezados** | Imprime las letras de columna y números de fila | Útil para referencias en documentación técnica |

> **Pro Tip:** Para reportes profesionales, NO imprimas cuadrícula. Deja que los bordes de la tabla definan las separaciones. Las cuadrículas impresas se ven amateurs.

### Repetir filas/columnas en todas las páginas

Cuando una tabla se imprime en varias páginas, los encabezados solo aparecen en la primera página a menos que configures lo siguiente:

**Diseño de página > Configurar página > Hoja > "Imprimir títulos":**

| Opción | Descripción | Ejemplo |
|--------|-------------|---------|
| **Repetir filas en extremo superior** | Filas que se repiten en la parte superior de cada página | `$1:$3` (las primeras 3 filas) |
| **Repetir columnas a la izquierda** | Columnas que se repiten en la izquierda de cada página | `$A:$A` (la columna A) |

**Ejemplo:** Si tu encabezado está en las filas 1-2 y tu tabla ocupa 10 columnas × 200 filas, configura `$1:$2` en "Repetir filas". Así, cada página impresa mostrará el encabezado.

## Errores comunes

### Error 1: No revisar la vista previa antes de imprimir
Imprimir sin vista previa es la causa más común de desperdicio de papel. Pueden salir 10 páginas cuando esperabas 2.

**Solución:** Siempre presiona `Ctrl + P` primero y revisa el número de páginas y cómo se ve cada una.

### Error 2: Datos cortados en medio de una página
Al imprimir, una tabla puede partirse dejando filas "huérfanas" al inicio o final de página.

**Solución:** En Diseño de página > Configurar página > pestaña Hoja > marca **"Revisar errores"** o usa la vista de salto de página para ajustar dónde se corta.

### Error 3: Escalar demasiado el contenido
Poner "Ajustar a 1 página de ancho × 1 página de alto" cuando la tabla es grande puede comprimir el texto al 40%, haciéndolo ilegible.

**Solución:** En lugar de forzar a 1 página de alto, usa "Ancho: 1 página, Alto: Automático". O usa orientación Horizontal.

### Error 4: No repetir encabezados en páginas siguientes
Imprimir 10 páginas de datos donde solo la primera página tiene los encabezados de columna.

**Solución:** Configura "Repetir filas en extremo superior" con la fila de encabezado.

### Error 5: Imprimir con fondo pero sin margen
Un color de fondo oscuro en las celdas consume mucha tinta y puede hacer ilegible el texto.

**Solución:** En Configurar página > Hoja, marca "Imprimir en blanco y negro" o usa colores de relleno muy claros.

### Error 6: No verificar los saltos de página automáticos
Excel inserta saltos de página automáticos que pueden partir tablas por la mitad.

**Solución:** Ve a Vista de salto de página y ajusta manualmente los saltos para que las tablas no se partan.

## Ejercicio paso a paso: Configurar impresión profesional de un reporte

### Escenario de negocio
Debes imprimir un reporte de ventas anual con 12 columnas (una por mes) y 50 productos. El reporte debe imprimirse profesionalmente para la junta directiva.

### Parte 1: Crear los datos
1. Abre un libro nuevo
2. En **A1** escribe `Reporte Anual de Ventas 2024`
3. En **A3:M3** escribe: `Producto`, `Ene`, `Feb`, `Mar`, `Abr`, `May`, `Jun`, `Jul`, `Ago`, `Sep`, `Oct`, `Nov`, `Dic`
4. En **A4:A53** escribe `Producto 1` a `Producto 50` (usa el control de relleno: escribe "Producto 1", arrastra hacia abajo)
5. En **B4:M53** escribe la fórmula `=ALEATORIO.ENTRE(1000;10000)` para generar datos simulados
6. Copia y pega como valores para fijar los datos

### Parte 2: Configurar página
1. Diseño de página > Orientación > **Horizontal**
2. Diseño de página > Márgenes > **Estrecho**
3. Diseño de página > Tamaño > **Carta** o **A4** según tu región
4. En la fila 2 (debajo del título principal), pon encabezados de columna con formato profesional

### Parte 3: Escala y área de impresión
1. Diseño de página > Ancho: **1 página**, Alto: **Automático**
2. Selecciona **A1:M53** > Diseño de página > Área de impresión > Establecer

### Parte 4: Repetir encabezados
1. Diseño de página > Configurar página > pestaña **Hoja**
2. En "Repetir filas en extremo superior", haz clic y selecciona **$1:$3**
3. En "Repetir columnas a la izquierda", selecciona **$A:$A** (para que el nombre del producto se vea siempre)

### Parte 5: Encabezado y pie de página
1. En la misma ventana, ve a la pestaña **Encabezado/Pie de página**
2. Encabezado personalizado:
   - Izquierda: `&[Pestaña]`
   - Centro: `Confidencial`
   - Derecha: `&[Fecha]`
3. Pie de página personalizado:
   - Izquierda: `Preparado por: [Tu nombre]`
   - Derecha: `Página &[Página] de &[Páginas]`

### Parte 6: Ajustes finos
1. Archivo > Imprimir (`Ctrl + P`)
2. Observa el número de páginas en la vista previa
3. Ajusta el escalado si es necesario (sin bajar del 70%)
4. Marca "Mostrar márgenes" para ver las líneas de margen
5. Arrastra los márgenes si alguna columna queda justo al borde

### Parte 7: Vista de salto de página
1. Ve a Vista de salto de página
2. Observa cómo se dividen las páginas
3. Si una fila de producto queda partida entre dos páginas, arrastra la línea azul discontinua para ajustar
4. Vuelve a Vista Normal y guarda como `04-configurar-impresion.xlsx`

## Aspectos destacados (Key Takeaways)

- Siempre usa **Vista preliminar** (`Ctrl + P`) antes de imprimir
- Configura **Ancho: 1 página** en escalado para evitar que las columnas se desborden
- Usa **Repetir filas/columnas** en todas las páginas para mantener la legibilidad de los encabezados
- Los **márgenes estrechos** maximizan el área útil de impresión
- **Orientación Horizontal** es la mejor opción para tablas con más de 5 columnas
- Los **saltos de página** se controlan visualmente desde la vista de salto de página
- Los **encabezados y pies de página** añaden profesionalismo (número de página, fecha, nombre del archivo)
- No imprimas la **cuadrícula** de Excel; usa bordes de tabla para un acabado profesional
- Crea un **área de impresión** fija si siempre imprimes el mismo rango de datos

---

**Siguiente módulo:** [04-FORMULAS-FUNCIONES](../04-FORMULAS-FUNCIONES/01-Primeras-Formulas.md)
