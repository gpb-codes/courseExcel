# Estilos y temas

Los **estilos** y **temas** te dan una apariencia profesional sin necesidad de ser diseñador. Mientras que el formato manual requiere configurar celda por celda, los estilos aplican formatos predefinidos completos con un solo clic, y los temas cambian la paleta visual de todo el libro al instante.

## Estilos de celda

### ¿Qué son los estilos de celda?

Un estilo es un conjunto guardado de opciones de formato (fuente, tamaño, color, bordes, relleno, formato de número) que puedes aplicar con un solo clic.

**Ubicación:** Inicio > Estilos > Estilos de celda (galería de estilos predefinidos)

### Galería de estilos incluidos

Excel viene con estilos listos para usar, organizados por categoría:

| Categoría | Estilos | Cuándo usarlos |
|-----------|---------|----------------|
| **Bueno, Malo, Neutral** | Bueno (verde), Malo (rojo), Neutral (amarillo) | Semáforos visuales, indicadores rápidos |
| **Datos y modelo** | Entrada, Salida, Cálculo, Celda de nota | Para distinguir tipos de celdas en modelos financieros |
| **Títulos y encabezados** | Título 1, Título 2, Título 3, Encabezado | Encabezados jerárquicos de reporte |
| **Estilos temáticos** | 20% - Énfasis 1 a 6, 40%, 60% | Coinciden con los colores del tema activo |
| **Formato de número** | Moneda, Porcentaje, Millares | Aplicar formato numérico rápido |

> **Pro Tip:** Los estilos "Entrada" (fondo blanco, borde fino) y "Cálculo" (fondo naranja claro) son el estándar de la industria en modelos financieros para distinguir celdas donde el usuario ingresa datos vs. celdas con fórmulas.

### Crear tu propio estilo personalizado

1. Aplica formato manual a una celda (fuente, color, bordes, número)
2. Inicio > Estilos de celda > **Nuevo estilo de celda**
3. Dale un nombre (ej: "Mi Encabezado Personalizado")
4. Marca qué propiedades quieres incluir (Número, Alineación, Fuente, etc.)
5. Haz clic en Aceptar

Tu estilo aparecerá en la galería en la sección **Personalizado**. Estará disponible en todas las hojas del libro.

### Modificar o duplicar un estilo existente

1. Haz clic derecho sobre un estilo en la galería
2. Elige **Modificar** para cambiar sus propiedades
3. Elige **Duplicar** para crear una variante personalizada

**Aplicación práctica:** Si trabajas con plantillas de presupuestos, crea estilos personalizados para:
- `Entrada_Usuario` → celda amarilla, borde punteado
- `Formula_Oculta` → fuente blanca, celda protegida
- `Total_Departamento` → negrita, borde doble superior, relleno gris

## Dar formato como tabla

### ¿Qué hace "Dar formato como tabla"?

Selecciona cualquier rango de datos > Inicio > Dar formato como tabla. No es solo decoración:

1. **Formato profesional**: Colores alternados en filas que se mantienen al ordenar
2. **Filtros automáticos**: Se activan en cada columna del encabezado
3. **Tabla de Excel**: El rango se convierte oficialmente en una "Tabla" (objeto con nombre como `Tabla1`)
4. **Referencias estructuradas**: Puedes usar nombres de columna en fórmulas en lugar de referencias de celda
5. **Expansión automática**: Al escribir datos en una fila adyacente, la tabla se expande y el formato se aplica solo

### Beneficios de las Tablas de Excel

| Característica | Sin tabla | Con tabla |
|----------------|-----------|-----------|
| Fórmulas | `=SUMA(B2:B100)` | `=SUMA(Tabla1[Cantidad])` |
| Nuevos datos | Hay que arrastrar fórmulas | Se expande automáticamente |
| Formato | Manual o condicional | Se mantiene con filas alternadas |
| Filtros | Hay que agregarlos manualmente | Vienen incluidos |
| Navegación | Ir a B2:B100 | `Tabla1` aparece en Administrador de nombres |

### Cómo crear y personalizar una tabla

1. Selecciona tu rango de datos (incluyendo encabezados)
2. Inicio > Dar formato como tabla
3. Elige un estilo de la galería
4. Confirma que "La tabla tiene encabezados" está marcado

### Diseño de tabla (pestaña contextual)

Al seleccionar cualquier celda de la tabla, aparece la pestaña **Diseño de tabla**:

| Opción | Descripción |
|--------|-------------|
| Nombre de la tabla | Cambia `Tabla1` por un nombre descriptivo (ej: `Ventas2024`) |
| Filas de encabezado | Muestra/oculta la fila de encabezados |
| Filas alternadas | Activa/desactiva el color alternado |
| Primera columna | Énfasis en la primera columna (negrita) |
| Última columna | Énfasis en la última columna |
| Total | Agrega fila de totales con funciones desplegables (SUMA, PROMEDIO, CONTAR, etc.) |
| Botón de filtro | Muestra/oculta los filtros |
| Convertir a rango | Vuelve la tabla a un rango normal (pierde las propiedades de tabla) |

> **Pro Tip:** Usa la **fila de totales** (Diseño de tabla > Total) para mostrar SUBTOTALES con tablas. Cada celda de la fila de totales tiene un menú desplegable donde puedes elegir SUMA, PROMEDIO, CONTAR, MAX, MIN, etc.

### Tablas dinámicas vs. Tablas de Excel

| Tabla de Excel | Tabla dinámica |
|----------------|----------------|
| Objeto que organiza datos en filas y columnas | Herramienta de resumen y análisis |
| Se crea desde Inicio > Dar formato como tabla | Se crea desde Insertar > Tabla dinámica |
| Los datos se editan directamente | Los datos son de solo lectura (resumen) |
| Ideal para entrada de datos | Ideal para informes y análisis |

## Temas

### ¿Qué es un tema?

Un tema es un conjunto de **colores**, **fuentes** y **efectos** que define la apariencia visual de todo el libro. Cambiar el tema actualiza automáticamente todos los elementos que usan colores y fuentes del tema.

**Ubicación:** Diseño de página > Temas

### Componentes de un tema

| Componente | Descripción | Se modifica en |
|------------|-------------|----------------|
| **Colores** | Paleta de 12 colores (4 de texto/fondo, 6 de énfasis, 2 de hipervínculo) | Diseño de página > Colores |
| **Fuentes** | Dos fuentes: una para títulos, otra para cuerpo | Diseño de página > Fuentes |
| **Efectos** | Estilos visuales para formas (sombra, 3D, bisel) | Diseño de página > Efectos |

### Paleta de colores del tema

Cada tema tiene 12 colores definidos. Puedes verlos en cualquier selector de color (relleno, fuente, forma) bajo la sección **Colores del tema**:

| Color | Uso típico |
|-------|------------|
| Énfasis 1 | Color primario de la marca, encabezados |
| Énfasis 2 | Color secundario, acentos |
| Énfasis 3-6 | Colores complementarios, gráficos |
| Fondo oscuro 1-2 | Fondos de diapositivas o encabezados oscuros |
| Texto/Fondo claro 1-2 | Fondos claros, texto principal |

### Beneficios de usar temas

1. **Consistencia visual:** Todos los elementos del libro usan la misma paleta
2. **Cambio instantáneo:** Modifica el aspecto completo del libro en segundos
3. **Personalizable:** Crea tus propios temas con colores corporativos
4. **Portabilidad:** Los temas se pueden compartir entre libros (archivo `.thmx`)

### Cómo crear un tema corporativo personalizado

1. **Diseño de página > Colores > Personalizar colores**
   - Asigna los colores de tu empresa a cada énfasis
   - Ponle un nombre (ej: "Colores Corporativos")
2. **Diseño de página > Fuentes > Personalizar fuentes**
   - Elige fuente para títulos y para cuerpo
   - Ponle un nombre (ej: "Fuentes Corporativas")
3. **Diseño de página > Temas > Guardar tema actual**
   - Guarda todo como archivo `.thmx`
   - Puedes compartirlo con tu equipo

### Diferencias clave: Estilos vs Temas

| Aspecto | Estilos | Temas |
|---------|---------|-------|
| Alcance | Una celda o rango | Todo el libro |
| Qué cambia | Formato completo (fuente, color, bordes, número) | Colores, fuentes y efectos |
| Persistencia | Se guarda con el libro | Se guarda con el libro, pero se puede cambiar |
| Personalización | Creas estilos individuales | Creas temas completos |
| Cuándo usarlo | Para aplicar formato consistente a elementos específicos | Para cambiar la identidad visual completa |

## Copiar formato con el pincel

### Cómo usar el Copiar formato

1. Selecciona la celda con el formato que deseas copiar
2. Inicio > Copiar formato (o `Ctrl + Mayús + C`)
3. Haz clic en la celda destino (o arrastra sobre un rango)

### Copiar formato múltiple

- **Doble clic** en Copiar formato para que permanezca activo
- Aplica el formato a cuantas celdas necesites
- Presiona `Esc` para desactivarlo

> **Pro Tip:** El Copiar formato también copia el ancho de columna si seleccionas columnas completas antes de usarlo. Es ideal para uniformar el ancho de varias columnas rápidamente.

## Errores comunes

### Error 1: Confundir tema con estilo
Un tema cambia la paleta de colores, pero NO cambia el formato aplicado manualmente. Las celdas con formato manual (color específico, no color del tema) no se actualizarán al cambiar el tema.

**Solución:** Siempre usa **Colores del tema** en lugar de colores estándar, especialmente en libros que compartirás.

### Error 2: No nombrar las tablas
Cuando conviertes un rango en tabla, Excel la nombra automáticamente `Tabla1`, `Tabla2`, etc. Si tienes varias tablas, es fácil confundirse.

**Solución:** En Diseño de tabla, asígnale un nombre descriptivo como `Ventas_Enero` o `Empleados_2024`.

### Error 3: Ordenar datos sin expandir la selección
Fuera de una tabla, al ordenar puedes desordenar los datos si no seleccionas todo el rango. Dentro de una tabla, esto no pasa.

**Solución:** Convierte tus rangos en tablas de Excel antes de ordenar.

### Error 4: Aplicar formato manual sobre tablas
Si aplicas color manual a celdas dentro de una tabla con filas alternadas, el color alternado puede desconfigurarse o el formato manual no se expande con la tabla.

**Solución:** Usa los estilos de tabla de la galería y NO apliques formato manual sobre ellos.

### Error 5: No usar fila de totales
Muchos usuarios suman datos de una tabla escribiendo fórmulas debajo, sin saber que la tabla tiene una fila de totales integrada.

**Solución:** Activa Diseño de tabla > Total. Cada columna tendrá un menú desplegable con funciones.

## Ejercicio paso a paso: Reporte de ventas con estilos y temas

### Escenario de negocio
Eres gerente de ventas y necesitas crear un reporte semanal de ventas por producto, con formato profesional que puedas compartir con la dirección.

### Parte 1: Datos iniciales
1. Abre un libro nuevo
2. En **A1** escribe `Reporte Semanal de Ventas`
3. En **A3:F3** escribe los encabezados: `Producto`, `Categoría`, `Cantidad`, `Precio Unitario`, `Total`, `Vendedor`
4. Ingresa al menos 8 productos con datos variados:

| Producto | Categoría | Cantidad | Precio Unitario | Vendedor |
|----------|-----------|----------|-----------------|----------|
| Laptop Pro | Electrónica | 5 | 1200 | Ana |
| Monitor 27" | Electrónica | 3 | 450 | Luis |
| Silla Ergo | Muebles | 10 | 250 | Carla |
| Escritorio | Muebles | 2 | 580 | Pedro |
| Mouse Gamer | Electrónica | 15 | 85 | Ana |
| Teclado Mec | Electrónica | 8 | 120 | Luis |
| Lámpara LED | Iluminación | 20 | 35 | Carla |
| Archivero | Muebles | 1 | 890 | Pedro |

### Parte 2: Calcular total y aplicar estilos
1. **F3**: `=C3*D3` → arrastra hasta F10
2. Selecciona **A3:F10** > Inicio > Dar formato como tabla > Elige un diseño azul
3. En Diseño de tabla, activa **Total** y en la columna Total elige **SUMA**
4. Cambia el nombre de la tabla a `Ventas_Semana1`

### Parte 3: Aplicar estilos de celda
1. Selecciona **A1:F1** > Estilos de celda > Título 1
2. Selecciona el rango **C3:F10** (datos numéricos) > Estilos de celda > Moneda
3. Selecciona **D3:D10** (precios) > Estilos de celda > Moneda
4. Selecciona **C3:C10** (cantidades) > Estilos de celda > Porcentaje... no, mejor Normal y aplica formato manual

### Parte 4: Cambiar el tema
1. Diseño de página > Temas
2. Pasa el mouse por cada tema para ver la vista previa en vivo
3. Elige **"Datos"** (tema con colores profesionales)
4. Observa cómo cambian los colores de la tabla y los estilos
5. Vuelve al tema original **"Office"**

### Parte 5: Crear y guardar tema personalizado
1. Diseño de página > Colores > Personalizar colores
2. Énfasis 1: Azul oscuro corporativo (`#003366`)
3. Énfasis 2: Naranja (`#FF6600`)
4. Guarda como `Corporativo`
5. Diseño de página > Temas > Guardar tema actual como `Tema_Corporativo.thmx`

### Parte 6: Usar Copiar formato
1. En una celda vacía, aplica formato manual: fondo amarillo, borde punteado rojo
2. Selecciona esa celda > Copiar formato (doble clic)
3. Haz clic en varias celdas de entrada de datos para aplicar el mismo formato
4. Presiona `Esc` para desactivar

## Aspectos destacados (Key Takeaways)

- Los **estilos de celda** aplican formatos completos predefinidos con un solo clic
- **Dar formato como tabla** convierte un rango en una Tabla de Excel con filtros, formato alternado y expansión automática
- Los **temas** cambian la paleta de colores, fuentes y efectos de TODO el libro
- Usa siempre **Colores del tema** en lugar de colores estándar para que los cambios de tema se reflejen
- Crea **temas personalizados** para mantener la identidad corporativa en todos tus reportes
- El **Copiar formato** (`Ctrl + Mayús + C`) permite duplicar formato rápidamente
- Las **tablas de Excel** son diferentes de las **tablas dinámicas**: las primeras son para datos editables, las segundas para resumen y análisis
- La **fila de totales** en una tabla te da SUBTOTALES con funciones desplegables

---

**Siguiente tema:** [03-Imagenes-Formas.md](03-Imagenes-Formas.md)
