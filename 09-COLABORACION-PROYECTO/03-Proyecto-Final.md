# Proyecto final integrador

¡Felicidades por llegar al final del curso! Este proyecto integra **todo** lo que aprendiste en los 9 módulos en un solo archivo. Es tu oportunidad de demostrar que dominas Excel para resolver un problema real de negocio.

## Escenario

Eres el encargado de administrar las ventas de **"ElectroTech"**, una pequeña empresa que vende productos electrónicos. El gerente general te ha pedido un **panel de control completo** que permita:

- Visualizar las ventas del período
- Analizar el rendimiento por producto, vendedor y región
- Identificar tendencias y oportunidades
- Tomar decisiones basadas en datos

Tu misión: crear un archivo de Excel profesional, bien estructurado y completamente funcional.

## Estructura del archivo

Tu archivo `Proyecto-Final.xlsx` debe contener las siguientes hojas:

| Hoja | Contenido |
|------|-----------|
| **Ventas** | Datos originales de transacciones |
| **Análisis** | Resumen con fórmulas y KPIs |
| **Búsquedas** | Tabla maestra de productos |
| **Dashboard** | Tabla dinámica + gráficos + formato condicional |
| **Simulación** | Análisis Y si (Buscar objetivo + escenarios) |
| **README** | Breve explicación del archivo (opcional pero recomendado) |

---

## Requisitos detallados

### 1. Datos originales (hoja "Ventas")

Crea una tabla con **al menos 40 filas** de transacciones realistas. Usa esta estructura:

| Fecha | Producto | Categoría | Cantidad | Precio Unit. | Vendedor | Región |
|-------|----------|-----------|----------|-------------|----------|--------|
| 15/01/2024 | Laptop Pro | Electrónica | 3 | 1200 | Ana López | Norte |
| 16/01/2024 | Mouse Inalámbrico | Accesorios | 10 | 35 | Carlos Ruiz | Sur |
| ... | ... | ... | ... | ... | ... | ... |

**Requisitos de variedad:**
- **6+ productos** diferentes en **3 categorías** (Electrónica, Accesorios, Periféricos)
- **4 vendedores** (Ana López, Carlos Ruiz, María Díaz, Juan Pérez)
- **3 regiones** (Norte, Sur, Centro)
- **Fechas** distribuidas en **3-4 meses** (ej: enero a abril 2024)
- **Precios** realistas y variados

**Ejemplo de datos de productos:**

| Producto | Categoría | Precio |
|----------|-----------|--------|
| Laptop Pro | Electrónica | 1200 |
| Tablet Gen3 | Electrónica | 450 |
| Monitor 27" | Periféricos | 280 |
| Teclado Mecánico | Periféricos | 85 |
| Mouse Inalámbrico | Accesorios | 35 |
| Audífonos Bluetooth | Accesorios | 60 |

### 2. Columna Total (en la misma hoja)

Agrega una columna **Total** al final que calcule Ingresos:

```excel
=[@Cantidad]*[@[Precio Unit.]]
```

Usa la sintaxis de **Tabla de Excel** (estructurada). Si prefieres fórmula normal:

```excel
=D2*E2
```

### 3. Tabla de Excel

Convierte todo el rango de datos (incluyendo la columna Total) en una **Tabla de Excel**:

1. Selecciona cualquier celda de los datos.
2. `Ctrl + T` (o **Insertar > Tabla**).
3. Marca "La tabla tiene encabezados".
4. En la pestaña **Diseño de tabla**, asígnale el nombre: `Ventas`.

### 4. Validación de datos

Aplica validación con **lista desplegable** en la columna Categoría:

1. Selecciona la columna Categoría (excepto el encabezado).
2. **Datos > Validación de datos > Lista**.
3. En **Origen**: escribe `Electrónica,Accesorios,Periféricos`.
4. Opcional: agrega un **mensaje de entrada** ("Selecciona una categoría") y un **aviso de error** ("Categoría no válida").

### 5. Hoja "Análisis" con fórmulas

Crea un resumen ejecutivo con indicadores clave (KPIs):

#### Tabla de KPIs

| Indicador | Fórmula | Ejemplo de resultado |
|-----------|---------|---------------------|
| **Total de ventas** | `=SUMA(Ventas[Total])` | $125,430 |
| **Promedio por venta** | `=PROMEDIO(Ventas[Total])` | $3,135.75 |
| **Transacciones totales** | `=CONTARA(Ventas[Fecha])` | 40 |
| **Venta más alta** | `=MAX(Ventas[Total])` | $12,000 |
| **Venta más baja** | `=MIN(Ventas[Total])` | $35 |
| **Producto estrella** | `=BUSCARV(MAX(ventas); ...)` | Laptop Pro |
| **Vendedor del mes** | Usa SUMAR.SI o tabla dinámica | Ana López |
| **Total por región** | `=SUMAR.SI(Ventas[Región];"Norte";Ventas[Total])` | $45,000 |
| **Comisión estimada (5%)** | `=TotalVentas*0.05` | $6,271.50 |

> **Pro Tip:** Para el "Producto estrella", puedes combinar `INDICE` y `COINCIDIR` con `MAX.:

```excel
=INDICE(Ventas[Producto];COINCIDIR(MAX(Ventas[Total]);Ventas[Total];0))
```

Agrega formato a los KPI:
- **Verde** para valores positivos o por encima del promedio
- **Negrita** en los títulos
- **Bordes** para separar secciones
- **Formato de moneda** para valores económicos

### 6. Hoja "Búsquedas"

Crea una **tabla maestra de productos** con:

| Código | Producto | Precio | Stock | Categoría |
|--------|----------|--------|-------|-----------|
| P001 | Laptop Pro | 1200 | 25 | Electrónica |
| P002 | Tablet Gen3 | 450 | 40 | Electrónica |
| P003 | Monitor 27" | 280 | 30 | Periféricos |
| P004 | Teclado Mecánico | 85 | 100 | Periféricos |
| P005 | Mouse Inalámbrico | 35 | 200 | Accesorios |
| P006 | Audífonos Bluetooth | 60 | 75 | Accesorios |

**Funcionalidad de búsqueda:**
Crea una sección donde el usuario ingrese un código y Excel devuelva los datos automáticamente:

1. En **A12** escribe "Código a buscar:" y en **B12** deja una celda para entrada.
2. En las siguientes celdas, usa **BUSCARV** o **INDICE+COINCIDIR**:

```excel
=BUSCARV($B$12; $A$1:$E$7; 2; FALSO)   → Producto
=BUSCARV($B$12; $A$1:$E$7; 3; FALSO)   → Precio
=BUSCARV($B$12; $A$1:$E$7; 4; FALSO)   → Stock
```

Versión más robusta con INDICE+COINCIDIR:

```excel
=INDICE($B$2:$B$7; COINCIDIR($B$12; $A$2:$A$7; 0))   → Producto
=INDICE($C$2:$C$7; COINCIDIR($B$12; $A$2:$A$7; 0))   → Precio
```

### 7. Tabla dinámica (hoja "Dashboard")

Crea una tabla dinámica que muestre:

- **Producto** en filas
- **Región** en columnas
- **Total** de ventas como valores
- **Vendedor** como filtro de informe (o en la sección de filtros)

**Configuración adicional:**
- Formato de números en moneda ($)
- Ordenar de mayor a menor por Total general
- Aplicar un diseño de **Tabulación** (Diseño > Mostrar en formato tabulado)
- Ocultar subtotales si es necesario

### 8. Gráfico dinámico (hoja "Dashboard")

Del punto anterior, crea un **gráfico dinámico** de columnas agrupadas:

1. Selecciona la tabla dinámica > **Analizar > Gráfico dinámico** > **Columna agrupada**.
2. Posiciona el gráfico al lado de la tabla dinámica.
3. Agrega **segmentación de datos** para **Vendedor** (y opcionalmente **Región**).
4. Personaliza el diseño:
   - Título del gráfico: "Ventas por Producto y Región"
   - Colores corporativos (azul, naranja, gris)
   - Etiquetas de datos en las barras
   - Leyenda clara

### 9. Formato condicional (hoja "Ventas")

Aplica formato condicional a la columna **Total**:

| Regla | Formato | Rango |
|-------|---------|-------|
| Total > $3,000 | Relleno verde claro, texto verde oscuro | Columna Total |
| Total > $5,000 | Relleno verde fuerte, texto blanco negrita | Columna Total |
| Total < $500 | Relleno rojo claro, texto rojo oscuro | Columna Total |

Adicionalmente, aplica **escalas de color** a la columna Cantidad para visualizar qué productos se venden en mayor volumen.

### 10. Análisis Y si (hoja "Simulación")

Reserva una hoja "Simulación" con dos análisis:

#### A. Buscar Objetivo

Configura una calculadora de metas:

| Celda | Contenido |
|-------|-----------|
| A1 | "Producto:" |
| B1 | Desplegable con productos (validación de datos) |
| A2 | "Precio:" |
| B2 | 1200 |
| A3 | "Cantidad:" |
| B3 | (vacío, lo calculará Excel) |
| A4 | "Ingreso total:" |
| B4 | `=B2*B3` |

**Pregunta:** ¿Cuántas unidades debo vender para llegar a $50,000 de ingresos?

Usa **Buscar objetivo**: Definir celda B4, con valor 50000, para cambiar B3.

#### B. Tabla de datos

Crea una tabla que muestre ingresos a diferentes combinaciones de precio y cantidad:

| | Precio $1000 | Precio $1100 | Precio $1200 | Precio $1300 | Precio $1400 |
|--|------------|------------|------------|------------|------------|
| **5 uds** | | | | | |
| **10 uds** | | | | | |
| **15 uds** | | | | | |
| **20 uds** | | | | | |
| **25 uds** | | | | | |

Usa una **Tabla de datos de dos variables** con la fórmula de ingreso en la celda de la esquina.

### 11. Protección (hoja "Ventas")

Protege la hoja "Ventas" con las siguientes configuraciones:

1. **Desbloquear** el rango de datos (A2:G{última fila}) para permitir entrada.
2. **Mantener bloqueados**: encabezados, columna Total (fórmulas).
3. **Proteger la hoja** con contraseña: `proyecto2024`.
4. En las opciones de protección, permite:
   - Seleccionar celdas bloqueadas y desbloqueadas
   - Usar Autofiltro
   - Ordenar

### 12. Comentarios

Agrega al menos **4 comentarios** explicando partes importantes del archivo:

| Celda | Comentario |
|-------|-----------|
| A1 (Análisis) | "Dashboard de indicadores clave de ElectroTech" |
| B12 (Búsquedas) | "Ingresa un código de producto (P001-P006) para buscar sus datos" |
| Tabla dinámica | "Filtra por vendedor para ver su desempeño individual" |
| Simulación B3 | "Usa Buscar objetivo: Datos > Análisis Y si > Buscar objetivo" |

### 13. Power Query (opcional, nivel avanzado)

1. Carga los datos de la tabla Ventas a Power Query.
2. Aplica un filtro: solo ventas de la región **Centro**.
3. Agrega una columna calculada: **Descuento** (si Total > 5000, descuento 10%; si no, 0%).
4. Carga los datos filtrados a una nueva hoja "Ventas_Centro".
5. Conecta esta consulta para que se actualice automáticamente.

### 14. Macro (opcional, nivel avanzado)

Graba una macro llamada `FormatearReporte` que:

1. Seleccione la tabla Ventas.
2. Aplique formato de **filas alternadas** (Diseño de tabla > Filas con bandas).
3. Active **Autofiltro**.
4. Ajuste el ancho de columnas al contenido.
5. Asigna la macro a un **botón** en la hoja "Ventas" con el texto "Aplicar formato".

## Checklist de verificación

Antes de entregar, verifica que tu proyecto cumple con todo:

- [ ] Datos originales: 40+ filas con variedad realista
- [ ] Columna Total con fórmula
- [ ] Tabla de Excel nombrada "Ventas"
- [ ] Validación de datos con lista desplegable
- [ ] Hoja "Análisis" con KPIs y fórmulas
- [ ] Hoja "Búsquedas" con BUSCARV o INDICE+COINCIDIR
- [ ] Tabla dinámica con Producto, Región, Total
- [ ] Gráfico dinámico profesional con segmentación
- [ ] Formato condicional en columna Total
- [ ] Buscar objetivo configurado
- [ ] Tabla de datos (opcional)
- [ ] Hoja "Ventas" protegida con celdas desbloqueadas
- [ ] 4+ comentarios explicativos
- [ ] Power Query (opcional, nivel++)
- [ ] Macro con botón (opcional, nivel++)

## Rúbrica de evaluación

| Criterio | Excelente | Bueno | Suficiente |
|----------|-----------|-------|------------|
| Datos | 40+ filas, 6+ productos, 3 categorías | 30+ filas, 4+ productos | 20+ filas, 3 productos |
| Fórmulas | SUMAR.SI, INDICE+COINCIDIR, funciones variadas | SUMA, PROMEDIO, BUSCARV | Solo SUMA y PROMEDIO |
| Visualización | Gráfico dinámico + segmentación + formato condicional | Gráfico dinámico básico | Sin gráfico o sin formato |
| Protección | Celdas desbloqueadas + hoja protegida | Hoja protegida | Sin protección |
| Extras | Power Query + Macro | Una de las dos | Ninguna |
| Presentación | Colores, bordes, comentarios, diseño limpio | Cuidado básico | Sin formato |

## Entregable

Un solo archivo: **`Proyecto-Final.xlsx`** (o `.xlsm` si incluyes macros).

El archivo debe contener todas las hojas y funcionalidades descritas en esta guía.

## Consejos finales

1. **Planifica antes de empezar**: dibuja un esquema de las hojas y cómo se conectan.
2. **Trabaja por capas**: primero los datos, luego las fórmulas, después los análisis visuales, al final la protección y comentarios.
3. **Prueba todo**: cambia datos, actualiza tablas dinámicas, verifica que las fórmulas den resultados correctos.
4. **Pulso final**: ajusta colores, fuentes, alineación. Un diseño limpio marca la diferencia.
5. **Documenta**: los comentarios ayudan a quien reciba el archivo a entender tu trabajo.

---

## Puntos clave del curso completo

| Módulo | Habilidad adquirida |
|--------|-------------------|
| 1-2 | Fundamentos, navegación, formatos básicos |
| 3 | Fórmulas y funciones esenciales |
| 4 | Referencias y funciones de búsqueda |
| 5 | Tablas dinámicas y análisis de datos |
| 6 | Validación, ordenar, filtrar, subtotales |
| 7 | Visualización con gráficos, formato condicional, minigráficos |
| 8 | Herramientas avanzadas: análisis Y si, financieras, macros, Power Query |
| 9 | Colaboración, protección, revisión y proyecto final |

---

¡Felicidades! Has completado el curso de Excel para principiantes. Ahora tienes las habilidades para analizar datos, crear informes profesionales y automatizar tareas. Sigue practicando y explorando; Excel tiene mucho más por descubrir.
