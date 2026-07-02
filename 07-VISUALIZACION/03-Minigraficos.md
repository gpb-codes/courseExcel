# Minigráficos (Sparklines)

Los **minigráficos** (o sparklines) son gráficos en miniatura que caben **dentro de una sola celda**. Fueron popularizados por Edward Tufte, experto en visualización de datos, como una forma de mostrar tendencias directamente junto a los datos que las generan.

## ¿Qué son los minigráficos?

- Un gráfico diminuto incrustado **dentro de una celda** de Excel.
- Muestra la tendencia de una serie de datos sin ocupar espacio adicional.
- **No tiene ejes, leyenda, título ni etiquetas** — es minimalista por diseño.
- Se actualiza automáticamente cuando cambian los datos de origen.

### ¿Cuándo usar minigráficos?

| Situación | Por qué funciona |
|-----------|-----------------|
| Dashboard de ventas | Muestra tendencia de cada producto en la misma fila |
| Informe de KPIs | El ejecutivo ve la dirección (sube/baja) sin distraerse |
| Tablas grandes | No necesitas 200 gráficos individuales |
| Reportes impresos | Ocupan espacio mínimo, máxima información |

## Tipos de minigráfico

Excel ofrece tres tipos de minigráficos, cada uno con un propósito distinto:

| Tipo | Apariencia | Para qué usarlo |
|------|-----------|-----------------|
| **Línea** | Línea continua con puntos | Mostrar tendencia general (sube, baja, estable) |
| **Columna** | Barras verticales pequeñas | Comparar variación entre períodos uno a uno |
| **Ganancia/Pérdida** | Barras positivas (arriba) y negativas (abajo) | Visualizar solo si hubo ganancia o pérdida en cada período |

> **Pro Tip:** Usa **minigráficos de línea** para tendencias temporales (ventas mensuales), **de columna** para comparar valores período a período, y **ganancia/pérdida** cuando solo te importe el signo (positivo/negativo), como en estados de resultados.

## Cómo crear minigráficos paso a paso

1. Selecciona **la celda donde quieres que aparezca** el minigráfico (ej: H2).
2. Ve a **Insertar > Minigráficos** (grupo Minigráficos).
3. Elige el tipo: **Línea**, **Columna** o **Ganancia/Pérdida**.
4. En el cuadro "Rango de datos", selecciona los datos a graficar (ej: B2:G2).
5. Haz clic en **Aceptar**.

El minigráfico aparece dentro de la celda seleccionada, mostrando la tendencia de esos datos en un espacio diminuto.

## Personalizar minigráficos

Al seleccionar una celda que contiene un minigráfico, aparece la pestaña contextual **Diseño de minigráfico** en la cinta de opciones.

### Opciones de personalización

| Opción | Descripción | Ejemplo de uso |
|--------|-------------|---------------|
| **Editar datos** | Cambiar el rango de origen | Si agregas más meses a tu tabla |
| **Tipo** | Cambiar entre línea, columna, ganancia/pérdida | Probar cuál se ve mejor |
| **Color de línea** | Color de la línea del minigráfico | Azul para ventas, rojo para costos |
| **Color de marcador** | Color de los puntos individuales | Destacar valores importantes |
| **Punto máximo** | Marcar el valor más alto con un color distinto | ¿Cuál fue el mejor mes? |
| **Punto mínimo** | Marcar el valor más bajo | ¿Cuál fue el peor mes? |
| **Primer punto** | Marcar el valor inicial | Visualizar el punto de partida |
| **Último punto** | Marcar el valor final | ¿Cómo terminó la tendencia? |
| **Marcadores** | Mostrar todos los puntos | Útil en líneas con pocos datos |
| **Mostrar eje** | Mostrar línea de eje horizontal | Cuando hay valores negativos |

### Cómo personalizar

1. Selecciona la celda con el minigráfico.
2. **Diseño de minigráfico** > grupo **Mostrar**.
3. Marca: **Punto máximo** y **Punto mínimo** (elige colores contrastantes).
4. Cambia el color en **Color de línea** o **Color de marcador**.

## Copiar minigráficos a múltiples filas

Como los minigráficos se comportan como celdas normales, puedes copiarlos fácilmente:

1. Crea el primer minigráfico en la primera fila.
2. Arrastra el **controlador de relleno** (el cuadrito en la esquina inferior derecha de la celda) hacia abajo.
3. Cada minigráfico se ajusta automáticamente a su fila correspondiente.

También puedes copiar (Ctrl+C) y pegar (Ctrl+V) como con cualquier celda.

> **Pro Tip:** Si tus datos están en una **Tabla de Excel** (Ctrl+T), los minigráficos se copian automáticamente al agregar nuevas filas, manteniendo la coherencia del diseño.

## Agrupar minigráficos

Los minigráficos pueden agruparse para compartir el mismo eje vertical (misma escala). Esto es útil cuando quieres comparar tendencias entre filas de forma honesta.

1. Selecciona varias celdas con minigráficos (mantén presionada la tecla Ctrl).
2. **Diseño de minigráfico > Agrupar**.
3. Ahora todos comparten el mismo eje vertical; las variaciones se ven en proporción real.

Para desagrupar: selecciona el grupo > **Diseño de minigráfico > Desagrupar**.

## Manejo de datos ocultos y vacíos

En **Diseño de minigráfico > Editar datos > Ocultos y vacíos**:

| Opción | Comportamiento |
|--------|---------------|
| Mostrar datos ocultos | Incluye filas/columnas ocultas en el gráfico |
| Celdas vacías como: | Elegir entre "Cero", "Conectar línea" o "No graficar" |

## Escenario de negocio real

**Contexto:** Tienes un reporte mensual de ventas por producto con 12 meses de datos. En lugar de crear 20 gráficos separados (uno por producto), agregas una columna de minigráficos al final de la tabla.

**Resultado:** En una sola mirada, el gerente ve qué productos están en tendencia ascendente (línea que sube), cuáles están cayendo (línea que baja) y cuáles son estables. Todo en la misma fila del producto, sin navegar a otra hoja.

**Antes:** 20 gráficos ocupaban 2 hojas completas.
**Después:** 20 minigráficos en una columna de 20 celdas. Misma información, 10% del espacio.

## Ejercicio práctico paso a paso

### Ejercicio 1: Minigráficos de línea

1. Crea una tabla de ventas mensuales:

| Producto | Ene | Feb | Mar | Abr | May | Jun | Tendencia |
|----------|-----|-----|-----|-----|-----|-----|-----------|
| Laptop | 10 | 12 | 15 | 14 | 18 | 22 | |
| Mouse | 30 | 28 | 35 | 32 | 40 | 38 | |
| Teclado | 15 | 15 | 20 | 18 | 22 | 25 | |
| Monitor | 5 | 7 | 6 | 8 | 10 | 12 | |

2. Selecciona **H2** > **Insertar > Minigráficos > Línea**.
3. Rango de datos: `B2:G2`. Ubicación: `H2`. Aceptar.
4. Arrastra H2 hacia abajo hasta H5 para copiar a todos los productos.
5. Personaliza: color de línea azul, marca **Punto máximo** en verde, **Punto mínimo** en rojo.
6. Agrupa los 4 minigráficos (Ctrl + clic en cada uno) > **Agrupar**.

### Ejercicio 2: Minigráficos de columna

1. En la misma tabla, agrega una columna "Columna" en I1.
2. Selecciona **I2** > **Insertar > Minigráficos > Columna**.
3. Mismo rango de datos: `B2:G2`.
4. Arrastra hacia abajo.
5. Compara la visualización: ¿línea o columna transmite mejor la información?

### Ejercicio 3: Minigráficos de ganancia/pérdida

1. Crea datos que incluyan valores negativos:

| Mes | Ingresos | Costos | Ganancia |
|-----|----------|--------|----------|
| Ene | 50000 | 45000 | 5000 |
| Feb | 55000 | 52000 | 3000 |
| Mar | 48000 | 50000 | -2000 |
| Abr | 60000 | 51000 | 9000 |
| May | 58000 | 55000 | 3000 |
| Jun | 62000 | 49000 | 13000 |

2. Selecciona la celda junto a "Ganancia" y crea un minigráfico de **Ganancia/Pérdida** con rango D2:D7.
3. Observa cómo las pérdidas (marzo) aparecen como barras hacia abajo en rojo.

## Errores comunes

| Error | Por qué ocurre | Solución |
|-------|---------------|----------|
| **Minigráficos no se ven** | La celda es muy angosta o la fuente muy grande | Ajusta el ancho de columna o reduce el tamaño de fuente |
| **No se copian correctamente** | No usaste el controlador de relleno correctamente | Arrastra el controlador o copia y pega la celda |
| **Escalas diferentes entre filas** | Cada minigráfico tiene su propia escala | Agrúpalos (Diseño > Agrupar) para escala uniforme |
| **Datos vacíos = línea rota** | Las celdas vacías rompen la línea | Configura celdas vacías como "Cero" o "Conectar línea" |
| **No veo los puntos destacados** | No marcaste las opciones en Mostrar | Activa Punto máximo, Punto mínimo, etc. en la pestaña Diseño |

## Atajos de teclado

| Atajo | Acción |
|-------|--------|
| `Alt + N + S + L` | Insertar minigráfico de línea |
| `Alt + N + S + C` | Insertar minigráfico de columna |
| `Alt + N + S + W` | Insertar minigráfico de ganancia/pérdida |
| `Ctrl + D` | Copiar minigráfico hacia abajo (rellenar) |

## Puntos clave

- Los minigráficos son gráficos dentro de una celda, sin ejes ni leyendas
- Ideales para dashboards y reportes donde el espacio es limitado
- Tres tipos: línea (tendencia), columna (comparación), ganancia/pérdida (signo)
- Se copian como cualquier celda con el controlador de relleno
- Agrúpalos para que compartan la misma escala vertical
- Marca puntos máximos/mínimos para destacar valores clave
- Complementan perfectamente a los gráficos tradicionales, no los reemplazan

---

**Siguiente tema:** [04-Graficos-Dinamicos.md](04-Graficos-Dinamicos.md)
