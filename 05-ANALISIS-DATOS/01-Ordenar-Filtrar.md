# Ordenar y filtrar datos

Cuando trabajas con cientos o miles de filas, encontrar información específica se vuelve imposible a simple vista. Ordenar y filtrar son las dos herramientas fundamentales para navegar, analizar y entender conjuntos de datos grandes en Excel.

---

## Ordenar datos

Ordenar reacomoda las filas según el valor de una o más columnas. Puedes ordenar de forma ascendente (A-Z, menor a mayor) o descendente (Z-A, mayor a menor).

### Ordenamiento rápido

1. Selecciona **una sola celda** dentro de la columna por la que quieres ordenar.
2. Ve a **Inicio > Ordenar y filtrar** o **Datos > Ordenar**.
3. Elige **Ordenar de A a Z** (ascendente) o **Ordenar de Z a A** (descendente).

> **Importante:** no selecciones toda la columna — solo una celda dentro de los datos. Excel detecta automáticamente el rango completo.

### Atajos de teclado

| Acción | Atajo |
|--------|-------|
| Orden ascendente (A-Z / menor a mayor) | `Alt + O + S + A` |
| Orden descendente (Z-A / mayor a menor) | `Alt + O + S + D` |
| Abrir cuadro de orden personalizado | `Alt + D + S` |

---

## Orden personalizado (varios criterios)

Cuando necesitas ordenar por más de una columna, usa el cuadro de diálogo **Datos > Ordenar**.

### Configuración paso a paso

1. **Datos > Ordenar**. Se abre el cuadro de diálogo.
2. En **Ordenar por** elige la primera columna.
3. En **Luego por** elige la segunda columna (se usa cuando hay empates en la primera).
4. Puedes agregar más niveles con **Agregar nivel**.
5. En **Ordenar según** puedes elegir: valores, color de celda, color de fuente o icono.

### Ejemplo práctico de orden multi-nivel

| Nivel | Columna | Criterio |
|-------|---------|----------|
| 1 | País | A-Z |
| 2 | Ciudad | A-Z |
| 3 | Ventas | De mayor a menor |

Esto ordena primero por país alfabéticamente. Dentro de cada país, ordena las ciudades alfabéticamente. Y dentro de cada ciudad, ordena las ventas de mayor a menor.

### Escenario real: reporte de ventas regionales

Tienes un reporte con 500 filas de ventas en toda Latinoamérica. Quieres ver:
- Primero, agrupado por **País** (A-Z)
- Dentro de cada país, por **Vendedor** (A-Z)
- Dentro de cada vendedor, por **Total Ventas** (mayor a menor)

Con el orden personalizado resuelves esto en segundos.

---

## Filtrar datos

El filtro oculta temporalmente las filas que no cumplen ciertos criterios. No borra nada — solo cambia la vista.

### Cómo activar filtros

1. Selecciona cualquier celda dentro de tus datos.
2. **Datos > Filtrar** (o `Ctrl + Mayús + L`).
3. Aparecen flechas desplegables en cada encabezado de columna.
4. Haz clic en una flecha y selecciona los valores que quieres mostrar.

> **Dato clave:** `Ctrl + Mayús + L` activa y desactiva los filtros. Es el atajo más útil que puedes memorizar.

### Filtros por tipo de dato

| Tipo de dato | Opciones de filtro disponibles |
|---|---|
| **Texto** | Contiene, no contiene, empieza con, termina con, es igual a, no es igual a |
| **Número** | Mayor que, menor que, mayor o igual, menor o igual, entre, top 10, arriba del promedio |
| **Fecha** | Hoy, esta semana, este mes, este trimestre, este año, ayer, la semana pasada, personalizado |
| **Color** | Filtrar por color de celda, color de fuente o icono |

### Filtros múltiples (filtros compuestos)

Puedes aplicar filtros en varias columnas simultáneamente. Excel muestra solo las filas que cumplen **todos** los filtros activos al mismo tiempo.

**Ejemplo real:**
- Columna **Región** = "Norte"
- Columna **Ventas** > 5000
- Columna **Fecha** = "Este mes"

Solo se mostrarán las ventas del mes actual en la región Norte que superen los 5000.

### Filtrar por color

Útil cuando has aplicado formato condicional. Por ejemplo, si pintaste de rojo las celdas con ventas bajas, puedes filtrar solo las rojas para revisarlas.

### Filtrar por texto con comodines

| Comodín | Significado | Ejemplo |
|---------|-------------|---------|
| `*` | Cualquier secuencia de caracteres | "Lu*" encuentra Luis, Lucas, Luna |
| `?` | Un solo carácter | "L?sa" encuentra Lisa, Losa |

---

## Quitar filtros

- **Desactivar todo:** Datos > Filtrar (o `Ctrl + Mayús + L`) — quita todos los filtros y las flechas.
- **Limpiar un filtro específico:** haz clic en la flecha de la columna > **Limpiar filtro**.
- **Volver a aplicar:** después de modificar datos, Datos > **Volver a aplicar** (`Ctrl + Alt + L`).

---

## PRO TIPS

> **Pro Tip #1 — Ordenar por lista personalizada**
> ¿Tienes meses (Ene, Feb, Mar...) o días de la semana? Excel no los ordena alfabéticamente si usas orden A-Z. Ve a Datos > Ordenar > **Listas personalizadas** y elige "Enero, Febrero, Marzo..." para que el orden sea cronológico.

> **Pro Tip #2 — Filtrar por selección**
> Haz clic derecho en una celda con el valor que quieres filtrar y elige **Filtrar > Filtrar por valor de celda seleccionada**. Es la forma más rápida de filtrar.

> **Pro Tip #3 — Copiar datos filtrados**
> Cuando copias filas visibles (filtradas) y las pegas, Excel también pega las filas ocultas. Para copiar SOLO lo visible: selecciona, `Alt + ;` (seleccionar solo celdas visibles), luego copia y pega.

> **Pro Tip #4 — Filtro por número de filas (Top N)**
> En columnas numéricas, usa **Top 10** (aunque puedes cambiar 10 por cualquier número) para mostrar solo los N valores más altos o más bajos.

---

## Escenario empresarial: analizando datos de ventas

Imagina que eres analista de ventas y recibes este reporte mensual:

| Fecha | Vendedor | Región | Producto | Cantidad | Precio Unit. | Total |
|-------|----------|--------|----------|----------|-------------|-------|
| 05/01/2024 | Ana López | Norte | Laptop | 3 | 800 | 2400 |
| 05/01/2024 | Luis Pérez | Sur | Mouse | 20 | 25 | 500 |
| 06/01/2024 | Ana López | Sur | Laptop | 2 | 800 | 1600 |
| 06/01/2024 | Carlos Ruiz | Norte | Escritorio | 5 | 350 | 1750 |
| 07/01/2024 | Luis Pérez | Norte | Teclado | 15 | 45 | 675 |
| 07/01/2024 | Ana López | Norte | Monitor | 4 | 250 | 1000 |
| 08/01/2024 | Carlos Ruiz | Sur | Silla | 10 | 120 | 1200 |
| 08/01/2024 | Luis Pérez | Sur | Mouse | 30 | 25 | 750 |

**Preguntas de negocio que puedes responder con ordenar y filtrar:**

1. **¿Quién es el vendedor con más ventas totales?** Filtra por Vendedor y ordena Total de mayor a menor.
2. **¿Qué productos se vendieron en la región Norte?** Activa filtro en Región y selecciona solo "Norte".
3. **¿Cuáles fueron las ventas mayores a $1000 en el Sur?** Filtra Región = "Sur" y Total > 1000.
4. **¿Qué días se vendieron más de 10 unidades?** Filtra Cantidad > 10.

---

## Errores comunes

| Error | Descripción | Solución |
|-------|-------------|----------|
| **Solo ordena una columna** | Seleccionaste toda una columna en vez de una celda, y las demás columnas no se movieron | Deshaz (`Ctrl + Z`), selecciona UNA celda dentro de los datos y vuelve a ordenar |
| **Filas que "desaparecen"** | Aplicaste un filtro y algunas filas no se ven | Busca el ícono de embudo azul en los encabezados y límpialo, o desactiva todos los filtros |
| **Orden incorrecto en fechas** | Las fechas están como texto y no como fecha | Usa la función `=FECHA()` o texto en columnas para convertir a fecha real |
| **No aparecen las flechas de filtro** | Los datos no tienen encabezados o hay celdas vacías en la primera fila | Asegúrate de que la primera fila contenga los títulos de columna |
| **El filtro no muestra todas las opciones** | Hay demasiados valores únicos | Usa el filtro de texto "Contiene" en lugar de seleccionar de la lista |

---

## Ejercicio práctico completo

### Parte 1: Crear datos de prueba

Crea esta tabla de ventas en una hoja nueva:

| Producto | Categoría | Cantidad | Precio | Total |
|----------|-----------|----------|--------|-------|
| Laptop | Electrónica | 5 | 800 | 4000 |
| Mouse | Electrónica | 20 | 25 | 500 |
| Escritorio | Muebles | 3 | 350 | 1050 |
| Silla | Muebles | 10 | 120 | 1200 |
| Teclado | Electrónica | 15 | 45 | 675 |
| Libro | Papelería | 30 | 15 | 450 |
| Cuaderno | Papelería | 40 | 8 | 320 |
| Monitor | Electrónica | 8 | 250 | 2000 |
| Lámpara | Muebles | 25 | 30 | 750 |
| Bolígrafo | Papelería | 100 | 2 | 200 |

### Parte 2: Filtrar

1. Activa filtros con `Ctrl + Mayús + L`.
2. Filtra por **Categoría = "Electrónica"**. ¿Cuántas filas ves? (Respuesta: 3)
3. Limpia el filtro y ahora filtra por **Total > 1000**. ¿Cuántas? (Respuesta: 4)
4. Aplica dos filtros: **Categoría = "Papelería"** Y **Cantidad >= 30**. ¿Cuántas? (Respuesta: 2)
5. Usa el filtro de texto **Contiene** en Producto: busca productos que contengan "ap" (Laptop, Lámpara).

### Parte 3: Ordenar

1. Quita los filtros. Selecciona una celda en Total y ordena de **mayor a menor**.
2. Ordena por **Categoría (A-Z)** y luego por **Total (mayor a menor)**.
3. Ordena por **Cantidad (mayor a menor)**. ¿Qué producto está primero? (Respuesta: Bolígrafo)

### Parte 4: Escenario combinado

1. Filtra por **Categoría = "Electrónica"**.
2. Dentro de ese filtro, ordena **Total de mayor a menor**.
3. ¿Cuál es el producto electrónico con mayor total? (Respuesta: Laptop con 4000)
4. Desactiva los filtros y guarda el archivo como `05-ordenar-filtrar.xlsx`.

---

## Key Takeaways

- **Ordenar** reacomoda filas; **filtrar** las oculta temporalmente sin borrarlas.
- Usa `Ctrl + Mayús + L` para activar/desactivar filtros al instante.
- El orden personalizado permite ordenar por múltiples columnas (hasta 64 niveles).
- Los filtros múltiples usan lógica **Y** (todas las condiciones deben cumplirse).
- Siempre selecciona una **sola celda** dentro de los datos, no toda la columna.
- Los atajos de teclado (`Alt + O + S + A/D`) aceleran enormemente el trabajo.

---

**Siguiente tema:** [02-Tablas-Excel.md](02-Tablas-Excel.md)
