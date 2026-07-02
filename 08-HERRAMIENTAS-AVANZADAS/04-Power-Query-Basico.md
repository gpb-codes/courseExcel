# Power Query básico

Power Query es una herramienta integrada en Excel (desde 2016) diseñada para **conectar, combinar y limpiar datos** antes de analizarlos. Es como tener un taller de reparación de datos dentro de Excel: corrige datos rotos, elimina basura y los deja listos para trabajar.

## ¿Para qué sirve Power Query?

- **Importar datos** de archivos, bases de datos, páginas web y otras fuentes
- **Limpiar datos automáticamente**: quitar espacios, dividir columnas, cambiar tipos de dato
- **Combinar tablas** como un BUSCARV pero mucho más potente y flexible
- **Repetir el proceso** con un solo clic (Actualizar todo)
- **Automatizar la limpieza** de datos que recibes periódicamente

### ¿Cuándo usar Power Query?

| Situación | Power Query es perfecto |
|-----------|------------------------|
| Recibes un CSV semanal con datos sucios | Conectas, limpias una vez, actualizas cada semana |
| Necesitas unir 3 tablas de diferentes archivos | Combínalas en Power Query sin fórmulas |
| Tus datos tienen espacios, errores, formatos inconsistentes | Power Query tiene herramientas de limpieza dedicadas |
| Quieres filtrar antes de cargar a Excel | Power Query carga solo los datos que necesitas |

## Acceder a Power Query

**Datos > Obtener y transformar datos** (grupo de herramientas en la cinta).

Aquí encontrarás:

| Opción | Cuándo usarla |
|--------|--------------|
| **Desde tabla/rango** | Usar datos que ya tienes en una hoja de Excel |
| **Desde archivo de texto/CSV** | Importar archivos planos (exportaciones de sistemas) |
| **Desde archivo > Desde libro de Excel** | Traer datos de otro archivo .xlsx |
| **Desde otras fuentes** | Web, SQL Server, Access, SharePoint, etc. |
| **Consultas y conexiones** | Ver y administrar todas tus consultas de Power Query |
| **Actualizar todo** | Refrescar todas las consultas con datos nuevos |

## Flujo de trabajo en Power Query

El trabajo con Power Query sigue tres pasos siempre:

1. **Conectar**: seleccionas la fuente de datos (rango de Excel, CSV, web, etc.).
2. **Transformar**: limpias, filtras, combinas, ordenas, cambias tipos de dato.
3. **Cargar**: envías los datos limpios a Excel (como tabla o como conexión).

### Paso a paso: De rango de Excel a Power Query

1. Selecciona el rango con datos en tu hoja de Excel.
2. **Datos > Desde tabla/rango** (Excel convierte el rango en tabla automáticamente).
3. Se abre el **Editor de Power Query** con tus datos cargados.
4. Aplica las transformaciones necesarias.
5. **Inicio > Cerrar y cargar** (o **Cerrar y cargar en...** para elegir destino).

## Editor de Power Query

El Editor de Power Query tiene su propia interfaz con:

- **Panel de datos**: vista previa de los datos (como una hoja de Excel).
- **Panel de consultas**: lista de todas las consultas activas.
- **Panel de pasos aplicados** (derecha): cada transformación que aplicaste se registra como un paso.
- **Cinta de opciones**: herramientas agrupadas en Inicio, Transformar, Agregar columna.

### La magia de los "Pasos aplicados"

Cada acción que realizas en Power Query se registra como un **paso** en el panel derecho. Puedes:

- **Ver** la secuencia de pasos
- **Editar** un paso haciendo clic en el engranaje
- **Eliminar** un paso que no necesitas
- **Reordenar** pasos (arrastra hacia arriba o abajo)

Si en el futuro recibes datos nuevos, solo haces clic en **Actualizar** y Power Query ejecuta todos los pasos automáticamente.

> **Pro Tip:** Si eliminas un paso que está en medio de la cadena, los pasos posteriores podrían fallar. Revisa siempre la dependencia entre pasos antes de eliminar.

## Transformaciones comunes

### Tabla de transformaciones esenciales

| Acción | Dónde está | Para qué sirve |
|--------|-----------|---------------|
| **Quitar filas en blanco** | Inicio > Quitar filas > Quitar filas en blanco | Elimina filas completamente vacías |
| **Quitar filas superiores/inferiores** | Inicio > Quitar filas > Quitar filas superiores | Saltar encabezados del sistema |
| **Eliminar columnas** | Clic derecho en columna > Eliminar | Quitar columnas que no necesitas |
| **Cambiar tipo de dato** | Clic en el ícono ABC/123 junto al nombre | Convertir texto a número, fecha, etc. |
| **Dividir columna** | Clic derecho > Dividir columna > Por delimitador | Separar "Nombre Apellido" en dos columnas |
| **Reemplazar valores** | Clic derecho > Reemplazar valores | Cambiar "N/A" por "0" o vacío |
| **Promover encabezados** | Inicio > Usar primera fila como encabezados | Convertir fila 1 en nombres de columna |
| **Recortar** | Clic derecho en columna > Transformar > Recortar | Quitar espacios al inicio/final del texto |
| **Quitar errores** | Inicio > Quitar filas > Quitar errores | Eliminar filas con errores de conversión |
| **Filtrar filas** | Clic en el ícono de filtro en el encabezado | Como autofiltro de Excel |

### Ejemplo: Limpiar datos desde un rango

Supón que tienes estos datos en Excel:

| Nombre | Edad | Ciudad |
|--------|------|--------|
| Ana Pérez | 25 |  Madrid |
| Luis García | abc | Barcelona |
|  | 30 | Valencia |
| Carmen Ruiz | 28 |  Sevilla  |

**Problemas detectados:** espacios extra en Ciudad, texto en Edad (abc), fila vacía.

1. Selecciona el rango > **Datos > Desde tabla/rango**.
2. Se abre Power Query. Observa los pasos: "Origen", "Tipo cambiado...".
3. **Inicio > Quitar filas > Quitar filas en blanco** (elimina la fila vacía).
4. Selecciona la columna **Edad** > clic en el ícono **ABC/123** > **Número entero**.
   - Las filas con "abc" mostrarán error. Puedes filtrarlas o **Quitar errores**.
5. Selecciona **Ciudad** > clic derecho > **Transformar > Recortar** (quita espacios).
6. Selecciona **Ciudad** > clic derecho > **Transformar > Limpiar** (quita caracteres no imprimibles).
7. **Inicio > Cerrar y cargar** > selecciona **Nueva hoja de cálculo**.

## Combinar consultas (Merge)

Power Query puede combinar dos tablas como un BUSCARV, pero mejor.

### Ejemplo: Unir Ventas con Productos

**Tabla 1: Ventas** (CódigoProducto, Cantidad, Fecha)
**Tabla 2: Productos** (Código, Nombre, Precio)

1. Carga ambas tablas a Power Query por separado.
2. En la consulta **Ventas**, ve a **Inicio > Combinar > Combinar consultas**.
3. Selecciona la tabla **Productos**.
4. Selecciona la columna **CódigoProducto** en Ventas y **Código** en Productos.
5. Tipo de combinación: **Externa izquierda** (todas las ventas, busca producto).
6. Expande la nueva columna para traer **Nombre** y **Precio**.
7. Cierra y carga.

> **Pro Tip:** A diferencia de BUSCARV, la Combinar consultas no tiene límite de columnas a devolver. Puedes traer todas las columnas de la tabla de búsqueda sin repetir la fórmula.

## Refrescar datos

Una vez que configuras Power Query, actualizar los datos es trivial:

1. Modifica los datos originales (agrega filas, cambia valores).
2. **Datos > Actualizar todo** (o clic derecho en la consulta > **Actualizar**).
3. Power Query ejecuta todos los pasos nuevamente y actualiza el resultado.

### Configurar actualización automática

En **Propiedades de la consulta** (clic derecho en la consulta > **Propiedades**):

- **Actualizar cada** X minutos (para conexiones a bases de datos).
- **Actualizar al abrir el archivo** (los datos siempre están frescos).

## Escenario de negocio real

**Contexto:** Cada mes, el sistema contable exporta un CSV con ventas del mes. El archivo tiene:
- 3 filas de encabezado del sistema (hay que saltarlas)
- Columnas con espacios y nombres inconsistentes
- Precios en formato texto ("$1,234.50")
- Productos sin código estandarizado

**Solución con Power Query (una sola vez):**
1. Conectas al CSV.
2. Quitas las primeras 3 filas.
3. Promueves la fila 1 como encabezados.
4. Renombras columnas.
5. Cambias Precio de texto a número (reemplazas "$" y ",").
6. Estandarizas nombres de productos (reemplazar mayúsculas/minúsculas).
7. Filtras filas con errores.
8. Cargas a una tabla de Excel.

**El mes siguiente:** solo copias el nuevo CSV en la misma carpeta y haces clic en **Actualizar todo**. Power Query repite todos los pasos automáticamente.

## Ejercicio práctico paso a paso

### Ejercicio 1: Limpiar datos sucios

1. Crea estos datos en A1:C6 (incluye espacios, celdas vacías, etc.):

| Producto | Precio | Stock |
|----------|--------|-------|
| Laptop | 800 | 10 |
| Mouse |  25  | 50 |
| Teclado | 45 |  |
| Monitor | 250 | 15 |
|  |  |  |

2. Selecciona A1:C5 > **Datos > Desde tabla/rango**.
3. En Power Query:
   - **Inicio > Quitar filas > Quitar filas en blanco**.
   - Selecciona **Precio** > clic derecho > **Transformar > Recortar**.
   - Selecciona **Stock** > clic en el icono **ABC/123** > **Número entero**.
   - Si hay errores: **Inicio > Quitar filas > Quitar errores**.
4. **Inicio > Cerrar y cargar** > **Nueva hoja de cálculo**.
5. Vuelve a la hoja original, cambia un dato (ej: "Laptop" → "Laptop Pro").
6. **Datos > Actualizar todo** — la tabla limpia se actualiza.

### Ejercicio 2: Importar un archivo CSV

1. Crea un archivo de texto con el Bloc de notas con estos datos y guárdalo como `ventas.csv`:

```
Fecha,Producto,Cantidad,Precio
01/01/2024,Laptop,3,800
02/01/2024,Mouse,10,25
03/01/2024,Teclado,5,45
```

2. En Excel: **Datos > Desde archivo de texto/CSV**.
3. Selecciona `ventas.csv`. Power Query muestra una vista previa.
4. **Cargar** directamente o **Transformar datos** para limpiar.
5. Si agregas filas al CSV, solo actualiza la consulta en Excel.

### Ejercicio 3: Combinar dos tablas

1. Crea **Tabla 1: Pedidos** (CódigoProducto, Cantidad, Fecha).
2. Crea **Tabla 2: Catálogo** (Código, Producto, Precio).
3. Carga ambas a Power Query.
4. En la consulta **Pedidos**: **Inicio > Combinar > Combinar consultas**.
5. Selecciona **Catálogo**. Une por CódigoProducto = Código.
6. Expande la columna para traer Producto y Precio.
7. Agrega una columna personalizada: `=[Cantidad]*[Precio]` (Total).
8. Cierra y carga.

## Errores comunes

| Error | Por qué ocurre | Solución |
|-------|---------------|----------|
| **Error al cargar** | El tipo de dato no coincide (texto donde espera número) | Cambia el tipo de dato antes de cargar o usa Quitar errores |
| **La consulta no se actualiza** | Los datos originales cambiaron de ubicación | Edita la consulta y actualiza la ruta del archivo |
| **Error "No se encontró la columna"** | Eliminaste o renombraste una columna en pasos anteriores | Revisa los pasos aplicados; puede faltar un paso de renombrar |
| **Datoss duplicados al combinar** | La combinación creó más filas de las esperadas | Usa "Agregar columna de índice" para verificar duplicados |
| **La tabla cargada es de solo lectura** | Power Query carga datos, no permite editarlos directamente | Modifica los datos originales y actualiza, o copia y pega como valores |

## Atajos de teclado

| Atajo | Acción |
|-------|--------|
| `Alt + A + P + T` | Desde tabla/rango (abrir Power Query) |
| `Alt + A + P + R` | Actualizar todo |
| `Ctrl + C` en Editor PQ | Copiar consulta |
| `Ctrl + V` en Editor PQ | Pegar consulta |
| `Supr` | Eliminar paso seleccionado (en panel de pasos) |

## Puntos clave

- Power Query conecta, transforma y carga datos de forma automatizada
- Sigue el flujo: **Conectar → Transformar → Cargar**
- Cada transformación se registra como un "paso" que se re-ejecuta al actualizar
- Las transformaciones comunes incluyen: recortar, dividir, cambiar tipo, quitar errores
- **Combinar consultas** es más potente que BUSCARV (trae todas las columnas)
- Una vez configurado, actualizar datos nuevos toma un solo clic: **Actualizar todo**
- Power Query es la herramienta definitiva para automatizar la limpieza de datos repetitivos

---

**Siguiente módulo:** [09-COLABORACION-PROYECTO](../09-COLABORACION-PROYECTO/01-Compartir-Proteger.md)
