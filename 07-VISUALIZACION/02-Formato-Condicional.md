# Formato condicional

El formato condicional cambia automáticamente el **color, fuente, borde o icono** de una celda según el valor que contiene. Es como tener un semáforo inteligente en tus datos: sin leer cada número, sabes al instante qué celdas requieren atención.

## ¿Para qué sirve el formato condicional?

- **Resaltar valores críticos**: ventas por debajo de la meta → rojo; por encima → verde
- **Identificar datos duplicados** en listas grandes
- **Crear barras de colores** dentro de celdas (barras de datos) que funcionan como gráficos en miniatura
- **Mostrar iconos** (flechas, semáforos, estrellas) que indican el estado de cada valor
- **Aplicar mapas de calor** con escalas de color degradado
- **Detectar errores** o valores fuera de rango automáticamente

## Acceso a la herramienta

**Inicio > Formato condicional** (grupo Estilos).

Aquí encontrarás todas las opciones para crear, administrar y limpiar reglas.

## Reglas predefinidas

Excel incluye reglas listas para usar, organizadas en categorías:

| Categoría | Regla | Ejemplo de uso |
|-----------|-------|---------------|
| **Resaltar reglas de celdas** | Mayor que, menor que, igual a, entre, texto que contiene, fecha, duplicados | Marcar ventas > $10,000 |
| **Reglas superiores/inferiores** | Top 10, top 10%, inferiores, por debajo del promedio, por encima del promedio, valores únicos | Identificar al top 10% de vendedores |
| **Barras de datos** | Barra de color proporcional dentro de cada celda | Visualizar el volumen de inventario sin gráfico |
| **Escalas de color** | Degradado de 2 o 3 colores (ej: rojo-blanco-azul) | Mapa de calor de rendimiento por región |
| **Conjuntos de iconos** | Flechas (3/5 direcciones), semáforos, estrellas, formas | Indicar si cada vendedor cumplió su meta |

> **Pro Tip:** Para datos financieros, usa barras de datos en las celdas de ingresos y conjuntos de iconos (flechas) en las columnas de variación porcentual. Así combinas dos tipos de información visual en una misma tabla.

## Crear tu primera regla paso a paso

1. Selecciona el rango de celdas (ej: B2:B10 con valores numéricos).
2. **Inicio > Formato condicional > Resaltar reglas de celdas > Mayor que**.
3. Escribe `1000` en el campo de valor.
4. Elige el formato "Relleno rojo claro con texto rojo oscuro" (o personalizado).
5. Haz clic en **Aceptar**.

Ahora todas las celdas con valor > 1000 se marcan automáticamente en rojo. Si cambias un valor, el formato se actualiza al instante.

## Reglas múltiples y prioridad

Puedes aplicar varias reglas sobre el mismo rango. **El orden importa**: Excel evalúa las reglas en el orden en que aparecen y aplica la primera que se cumple.

### Administrar reglas

**Inicio > Formato condicional > Administrar reglas**.

Aquí puedes:
- **Ver** todas las reglas del libro, hoja o selección
- **Agregar** nuevas reglas
- **Editar** reglas existentes
- **Eliminar** reglas
- **Reordenar** reglas con las flechas de subir/bajar
- **Detener si es verdadero**: si marcas esta opción, Excel no evalúa las reglas siguientes cuando esta se cumple

> **Pro Tip:** Si tienes una regla que no se aplica como esperas, probablemente hay otra regla con mayor prioridad que la está sobrescribiendo. Ve a Administrar reglas y revisa el orden.

## Barras de datos (visualización sin gráficos)

Las barras de datos convierten cada celda en un minigráfico de barra proporcional al valor:

1. Selecciona un rango numérico (ej: inventario por producto).
2. **Inicio > Formato condicional > Barras de datos**.
3. Elige un color (azul, verde, rojo, etc.).
4. Cada celda muestra una barra: las celdas con valores altos tienen la barra más larga; las de valores bajos, más corta.

**Personalización avanzada:**
- Haz clic derecho en una celda con barra > **Formato condicional > Administrar reglas > Editar regla**.
- Opciones: mostrar solo la barra (sin número), barra negativa/hueco, dirección (izquierda a derecha o viceversa).

## Escalas de color (mapas de calor)

Perfectas para detectar patrones en grandes conjuntos de datos:

1. Selecciona un rango numérico completo.
2. **Inicio > Formato condicional > Escalas de color**.
3. Elige una combinación: Rojo-Blanco-Azul, Verde-Amarillo-Rojo, etc.
4. Los valores altos toman un color, los medios otro, los bajos un tercero.

**Casos de uso:**
- Temperaturas en un mapa de regiones
- Rentabilidad por producto
- Horas de trabajo por empleado
- Calificaciones de satisfacción por sucursal

## Conjuntos de iconos

Los iconos agregan un símbolo visual a cada celda según su valor relativo:

1. Selecciona un rango de porcentajes (ej: cumplimiento de meta).
2. **Inicio > Formato condicional > Conjuntos de iconos > Flechas (3)**.
3. Por defecto: verde > 67%, amarillo 33-67%, rojo < 33%.
4. Puedes personalizar los umbrales en **Administrar reglas > Editar regla**.

**Regla de negocio aplicada:** Si una celda muestra flecha roja, sabes que ese vendedor está por debajo del 33% de su meta sin necesidad de leer el número exacto.

## Fórmulas en formato condicional (nivel avanzado)

Cuando las reglas predefinidas no son suficientes, puedes usar **fórmulas** para definir condiciones personalizadas.

### Sintaxis básica

La fórmula debe devolver `VERDADERO` para aplicar el formato.

| Propósito | Fórmula |
|-----------|---------|
| Resaltar celdas por encima del promedio general | `=A1>PROMEDIO($A$1:$A$10)` |
| Resaltar filas completas | `=$B1>1000` (aplica a rango = filas completas) |
| Resaltar fines de semana | `=DIASEM($A1;2)>5` |
| Resaltar celdas vacías | `=A1=""` |
| Resaltar celdas con errores | `=ESERROR(A1)` |
| Resaltar valores únicos | `=CONTAR.SI($A$1:$A$100;A1)=1` |

### Ejemplo práctico: Resaltar filas completas

Si tus datos están en A1:D20 y quieres resaltar toda la fila cuando la columna B supere 1000:

1. Selecciona A1:D20 (con A1 como celda activa).
2. **Inicio > Formato condicional > Nueva regla > Usar una fórmula**.
3. Ingresa: `=$B1>1000`.
4. Define el formato (relleno amarillo).
5. Aceptar.

**Atención:** el signo `$` antes de la columna es clave: fija la columna B para que toda la fila se evalúe contra ese valor.

## Escenario de negocio real

**Contexto:** Eres gerente de ventas y tienes una tabla con 200 vendedores. Cada mes importas datos actualizados. Necesitas identificar rápidamente:

1. **Vendedores estrella** (ventas > $50,000) → fondo verde oscuro
2. **Vendedores en riesgo** (ventas < $15,000) → fondo rojo con texto en negrita
3. **Cumplimiento de meta** (porcentaje) → iconos de flechas
4. **Tendencia** (variación vs mes anterior) → flechas de 5 direcciones

Con formato condicional, todo esto se aplica automáticamente al importar datos nuevos.

## Ejercicio práctico paso a paso

### Ejercicio 1: Reglas básicas

1. Crea esta tabla:

| Vendedor | Ventas | % Meta |
|----------|--------|--------|
| Ana López | 8500 | 85% |
| Carlos Ruiz | 12000 | 120% |
| María Díaz | 4500 | 45% |
| Juan Pérez | 9500 | 95% |
| Laura Gómez | 15000 | 150% |
| Pedro Sánchez | 3200 | 32% |
| Sofía Torres | 11000 | 110% |
| Diego Ramírez | 7800 | 78% |
| Valentina Ortiz | 14200 | 142% |
| Andrés Medina | 6100 | 61% |

2. Selecciona **B2:B11** > **Formato condicional > Barras de datos > Azul**.
3. Agrega otra regla: **B2:B11 > 10000** → Relleno verde claro, texto verde oscuro.
4. Agrega otra regla: **B2:B11 < 5000** → Relleno rojo claro, texto rojo oscuro.
5. En **C2:C11** > **Formato condicional > Conjuntos de iconos > Flechas (3)**.
6. Ve a **Administrar reglas** y observa el orden de las reglas.

### Ejercicio 2: Fórmula condicional

1. En la misma tabla, selecciona **A2:C11**.
2. **Nueva regla > Usar una fórmula**.
3. Ingresa: `=$B2<5000`.
4. Formato: Relleno amarillo con borde rojo.
5. Aceptar. Ahora las filas completas con ventas < 5000 se resaltan.

### Ejercicio 3: Escala de color + iconos

1. Crea una tabla de temperatura con 12 ciudades y temperaturas de 5°C a 40°C.
2. Selecciona el rango numérico.
3. **Escalas de color > Rojo-Blanco-Azul** (rojo = calor, azul = frío).
4. Ahora ves un mapa de calor instantáneo: ciudades frías en azul, cálidas en rojo.

## Errores comunes

| Error | Por qué ocurre | Solución |
|-------|---------------|----------|
| **La regla no se aplica** | El rango seleccionado no es correcto o hay otra regla con prioridad | Ve a Administrar reglas y verifica el orden y el rango |
| **Fórmula condicional no funciona** | La fórmula tiene referencias incorrectas | Usa `$` para fijar columnas en referencias absolutas |
| **Iconos inconsistentes** | Los umbrales por defecto no coinciden con tus datos | Personaliza los umbrales en Editar regla |
| **Demasiadas reglas lentas** | Reglas complejas en rangos muy grandes | Minimiza el número de reglas; usa tablas de Excel |
| **Copiar formato condicional se desordena** | Las referencias se desplazan al pegar | Copia solo con Pegado especial > Formatos |

## Atajos de teclado

| Atajo | Acción |
|-------|--------|
| `Alt + H + L` | Abrir menú de Formato condicional |
| `Alt + H + L + N` | Nueva regla |
| `Alt + H + L + R` | Administrar reglas |
| `Alt + H + L + C` | Limpiar reglas |
| `F4` | Repetir última acción (útil para aplicar mismo formato) |

## Puntos clave

- El formato condicional automatiza el resaltado visual sin intervención manual
- Las reglas se evalúan en orden de prioridad; la primera que se cumple gana
- Las barras de datos y escalas de color transforman números en visuales sin crear gráficos
- Los conjuntos de iconos son ideales para indicadores de rendimiento (semáforos, flechas)
- Las fórmulas condicionales abren posibilidades ilimitadas para reglas personalizadas
- Usa `=$B1>1000` para resaltar filas completas según el valor de una columna

---

**Siguiente tema:** [03-Minigraficos.md](03-Minigraficos.md)
