# Análisis Y si... (Buscar objetivo, tabla de datos, escenarios)

El análisis "Y si..." es una de las herramientas más poderosas de Excel. Te permite responder preguntas como: *"¿qué precio debo poner para ganar $10,000?"*, *"¿qué pasa si las ventas suben 20%?"* o *"¿cuántas unidades necesito vender para cubrir costos?"*. En lugar de probar valores manualmente, Excel hace el trabajo por ti.

## ¿Qué es el análisis "Y si..."?

Es un conjunto de herramientas que calculan resultados hipotéticos cambiando valores de entrada. Excel incluye tres herramientas principales:

| Herramienta | Para qué sirve | Ejemplo |
|-------------|---------------|---------|
| **Buscar objetivo** | Encontrar el valor de entrada necesario para alcanzar un resultado exacto | ¿Qué precio debo fijar para ganar $10,000? |
| **Tabla de datos** | Ver múltiples resultados cambiando una o dos variables | ¿Qué ganancia obtengo a distintos precios? |
| **Administrador de escenarios** | Guardar y comparar diferentes conjuntos de valores | Comparar escenarios optimista vs. pesimista |

## Buscar objetivo

Buscar objetivo es como tener un asistente que resuelve ecuaciones por ti. Tú le dices el resultado que quieres, y Excel encuentra el valor de entrada necesario.

### Sintaxis del problema

Necesitas tres cosas:
1. Una **celda con fórmula** (el resultado que quieres controlar)
2. El **valor objetivo** (el resultado deseado)
3. Una **celda variable** (el valor que Excel debe encontrar)

### Ejemplo paso a paso: ¿Cuánto debo vender para ganar $5,000?

1. En **A1** escribe `Ventas` (déjalo vacío por ahora).
2. En **B1** escribe `Costo` y en **B2** ingresa `2000`.
3. En **C1** escribe `Utilidad` y en **C2** ingresa `=A2-B2`.
4. Ve a **Datos > Análisis Y si > Buscar objetivo**.
5. Configura:
   - **Definir celda**: `$C$2` (la celda con la fórmula de utilidad)
   - **Con valor**: `5000` (lo que quieres ganar)
   - **Para cambiar**: `$A$2` (lo que Excel debe calcular)
6. Haz clic en **Aceptar**.
7. Excel encuentra que necesitas **$7,000 en ventas** para ganar $5,000.

> **Pro Tip:** Buscar objetivo solo funciona con **una celda variable**. Si necesitas cambiar dos valores simultáneamente, usa Solver (complemento de Excel) o una tabla de datos de dos variables.

### Aplicaciones reales de Buscar objetivo

| Escenario | Qué necesitas | Qué calcula Excel |
|-----------|--------------|-------------------|
| Fijar precio de producto | Costo + margen deseado | Precio de venta necesario |
| Meta de ventas | Comisión por venta + ingreso deseado | Unidades a vender |
| Pago de préstamo | Tasa, plazo y pago deseado | Monto máximo del préstamo |
| Punto de equilibrio | Costos fijos, costos variables, margen | Unidades mínimas a vender |
| Meta de ahorro | Ahorro mensual, tasa, tiempo | Valor futuro de la inversión |

## Tabla de datos (una variable)

La tabla de datos te permite ver **una matriz de resultados** probando múltiples valores de una variable.

### Ejemplo: ¿Cuánto gano a diferentes niveles de ventas?

1. En **A1** escribe `Ventas`, **B1** escribe `Costo fijo`, **C1** escribe `Utilidad`.
2. En **A2** deja vacío (variable), **B2** escribe `2000`, **C2** escribe `=A2-B2`.
3. En **A5:A15** escribe valores de ventas: 1000, 2000, 3000... hasta 10000.
4. En **B4** escribe `=C2` (referencia a la fórmula original).
5. Selecciona el rango **A4:B15**.
6. **Datos > Análisis Y si > Tabla de datos**.
7. En **Celda de columna**: selecciona `$A$2` (porque los valores de prueba están en columna).
8. Haz clic en **Aceptar**.
9. Excel calcula instantáneamente la utilidad para cada nivel de ventas.

| Ventas | Utilidad |
|--------|----------|
| 1000 | -1000 |
| 2000 | 0 |
| 3000 | 1000 |
| 4000 | 2000 |
| ... | ... |

> **Pro Tip:** La tabla de datos es ideal para análisis de sensibilidad. Por ejemplo, puedes ver rápidamente en qué punto dejas de perder dinero (punto de equilibrio: ventas = costo).

### Tabla de datos con variable en fila

Si tus valores de prueba están organizados en fila (horizontal), usa **Celda de fila** en lugar de Celda de columna.

## Tabla de datos (dos variables)

Cuando necesitas variar **dos variables simultáneamente**, la tabla de datos de dos variables es la herramienta ideal.

### Ejemplo: Variando ventas y costos al mismo tiempo

1. Crea la fórmula original en alguna celda (ej: **A1** con la fórmula de utilidad).
2. En la primera **fila** (ej: B1:G1) escribe diferentes costos: 1500, 2000, 2500, 3000, 3500, 4000.
3. En la primera **columna** (ej: A2:A11) escribe diferentes niveles de ventas: 1000 a 10000.
4. En la celda de la esquina (**A1**) escribe `=C2` (referencia a la fórmula original de utilidad).
5. Selecciona todo el rango (A1:G11).
6. **Datos > Análisis Y si > Tabla de datos**.
7. **Celda de fila**: selecciona la celda que contiene el costo en tu fórmula original.
8. **Celda de columna**: selecciona la celda que contiene las ventas en tu fórmula original.
9. Aceptar.

Resultado: una matriz completa donde cada celda muestra la utilidad para una combinación específica de ventas y costo.

> **Pro Tip:** Las tablas de datos de dos variables son muy usadas en finanzas para analizar cómo cambios en dos factores (ej: tasa de interés y plazo) afectan un resultado (ej: pago mensual).

## Administrador de escenarios

El Administrador de escenarios te permite **guardar diferentes conjuntos de valores** y cambiar entre ellos con un clic.

### Cómo crear escenarios

1. Ve a **Datos > Análisis Y si > Administrador de escenarios**.
2. Haz clic en **Agregar**.
3. **Nombre del escenario**: "Optimista" (sin espacios, o usa guiones bajos).
4. **Celdas cambiantes**: selecciona las celdas que cambiarán (ej: Precio, Cantidad).
5. **Comentario**: opcional, describe el escenario.
6. Ingresa los valores para cada celda cambiante.
7. **Agregar** otro escenario: "Pesimista" con valores diferentes.
8. Para ver un escenario: selecciona el escenario > **Mostrar**.

### Ejemplo: Escenarios de negocio

| Variable | Normal | Optimista | Pesimista |
|----------|--------|-----------|-----------|
| Precio | $100 | $120 | $80 |
| Cantidad | 50 | 80 | 30 |
| Costo | $2,000 | $1,800 | $2,500 |
| **Utilidad** | **$3,000** | **$7,800** | **-$100** |

Al mostrar cada escenario, Excel reemplaza los valores y las fórmulas se recalculan automáticamente.

### Crear un resumen de escenarios

El Administrador de escenarios puede generar un informe comparativo:

1. Abre **Administrador de escenarios**.
2. Haz clic en **Resumen**.
3. Elige **Resumen de escenarios**.
4. En **Celdas de resultado**: selecciona las celdas con fórmulas clave.
5. Excel crea una nueva hoja con una tabla comparativa de todos los escenarios.

## Escenario de negocio real

**Contexto:** Eres dueño de un pequeño negocio de venta de camisetas personalizadas.

**Datos:** Cada camiseta cuesta $15 producirla y la vendes a $35. Tienes costos fijos mensuales de $1,200. Quieres saber:

1. **Punto de equilibrio**: ¿cuántas camisetas debes vender para no perder? (Buscar objetivo)
2. **Sensibilidad de precio**: ¿cómo cambia la ganancia si vendes a $30, $35, $40, $45? (Tabla de datos)
3. **Escenarios**: ¿qué pasa si suben los costos de producción o si aumentas el precio? (Administrador de escenarios)

## Ejercicio práctico paso a paso

### Ejercicio 1: Buscar objetivo

1. En **A1** escribe `=B1*C1`.
2. En **B1** escribe `100` (precio unitario).
3. En **C1** déjalo vacío (cantidad a calcular).
4. **Datos > Análisis Y si > Buscar objetivo**.
5. Definir celda: `$A$1`, con valor: `5000`, para cambiar: `$C$1`.
6. Excel calcula que necesitas vender **50 unidades** para llegar a $5,000.

### Ejercicio 2: Tabla de datos

1. En **D1** escribe `Precio`, en **E1** escribe `Utilidad`.
2. En **D2:D11** escribe precios de 50 a 140 (paso 10).
3. En **E1** escribe `=A1` (referencia a la fórmula original).
4. Selecciona **D1:E11** > **Tabla de datos**.
5. Celda de columna: `$B$1` (precio). Aceptar.
6. Excel calcula la utilidad a cada precio.

### Ejercicio 3: Administrador de escenarios

1. Crea dos escenarios:
   - **Normal**: precio 100, cantidad 50.
   - **Promoción**: precio 80, cantidad 80.
2. Agrega una celda de resultado: `=B1*C1` (ingresos totales).
3. Alterna entre escenarios y observa cómo cambian los ingresos.
4. Genera un **Resumen de escenarios** para ver la comparación lado a lado.

## Errores comunes

| Error | Por qué ocurre | Solución |
|-------|---------------|----------|
| **Buscar objetivo no encuentra solución** | La fórmula no puede alcanzar el valor objetivo con los datos actuales | Verifica que la fórmula esté correcta y que el valor objetivo sea realista |
| **Tabla de datos muestra el mismo resultado en todas las celdas** | La referencia a la celda de columna/fila es incorrecta | Asegúrate de que la celda de columna apunte a la celda correcta en tu fórmula original |
| **Escenario no cambia las celdas** | Las celdas cambiantes no coinciden con las celdas de la hoja | Verifica que seleccionaste las celdas correctas al crear el escenario |
| **Error #REF! en tabla de datos** | Se eliminaron filas/columnas que la tabla de datos referenciaba | Revisa las referencias y vuelve a crear la tabla |
| **Los valores de la tabla de datos no se actualizan** | El cálculo automático está desactivado | Presiona F9 para forzar el recálculo |

## Atajos de teclado

| Atajo | Acción |
|-------|--------|
| `Alt + A + W + G` | Buscar objetivo |
| `Alt + A + W + T` | Tabla de datos |
| `Alt + A + W + E` | Administrador de escenarios |
| `F9` | Recalcular todas las fórmulas |
| `Shift + F9` | Recalcular la hoja activa |

## Puntos clave

- **Buscar objetivo**: encuentra el valor de entrada para un resultado deseado (1 variable)
- **Tabla de datos**: genera múltiples resultados probando una o dos variables
- **Administrador de escenarios**: guarda y compara diferentes conjuntos de valores
- El análisis "Y si..." convierte Excel en una herramienta de simulación de negocios
- Útil para punto de equilibrio, fijación de precios, proyecciones financieras
- Combínalo con formato condicional para visualizar los resultados de las tablas de datos

---

**Siguiente tema:** [02-Funciones-Financieras.md](02-Funciones-Financieras.md)
