# Funciones básicas: SUMA, PROMEDIO, CONTAR, MAX, MIN, CONTARA, CONTAR.BLANCO

Las funciones son fórmulas predefinidas que realizan cálculos complejos con una sola palabra. En lugar de escribir `=A1+A2+A3+A4+A5`, usas `=SUMA(A1:A5)`. Dominar las funciones básicas es el siguiente paso después de entender las referencias, y te permitirá analizar datos de manera eficiente.

## Sintaxis de una función

### Estructura general

```
=NOMBRE_FUNCIÓN(argumento1; argumento2; ...)
```

| Componente | Descripción | Ejemplo |
|------------|-------------|---------|
| `=` | Toda fórmula empieza con igual | |
| `NOMBRE_FUNCIÓN` | Nombre de la función en español o inglés | `SUMA`, `SUM`, `PROMEDIO` |
| `()` | Paréntesis que contienen los argumentos | |
| `;` | Separador de argumentos (en español) | `;` (en inglés es `,`) |
| Argumento | Valor, celda, rango u otra función | `A1:A10`, `10`, `"texto"` |

### Funciones sin argumentos

Algunas funciones no necesitan argumentos, pero siempre requieren los paréntesis:

| Función | Descripción |
|---------|-------------|
| `=HOY()` | Fecha actual |
| `=AHORA()` | Fecha y hora actual |
| `=ALEATORIO()` | Número aleatorio entre 0 y 1 |

## Las 7 funciones básicas que debes conocer

### 1. SUMA

Suma todos los números en un rango.

```
=SUMA(número1; [número2]; ...)
```

| Ejemplo | Resultado |
|---------|-----------|
| `=SUMA(A1:A10)` | Suma todos los valores de A1 a A10 |
| `=SUMA(A1:A10; C1:C10)` | Suma dos rangos separados |
| `=SUMA(A1; A3; A5)` | Suma celdas individuales no contiguas |
| `=SUMA(100; 200; 300)` | Suma números directos |

> **Pro Tip:** `SUMA` ignora automáticamente las celdas con texto, celdas vacías y valores lógicos. Solo suma números. Esto la hace segura para usar en rangos con datos mixtos.

### 2. PROMEDIO

Calcula el promedio aritmético (media) de un conjunto de números.

```
=PROMEDIO(número1; [número2]; ...)
```

| Ejemplo | Resultado |
|---------|-----------|
| `=PROMEDIO(A1:A10)` | Promedio de A1 a A10 |
| `=PROMEDIO(A1:A10; 0)` | Promedio incluyendo 0 como límite inferior |

**Diferencia entre PROMEDIO y MEDIA manual:**
- `=PROMEDIO(A1:A5)` → `(A1+A2+A3+A4+A5)/5`
- `=SUMA(A1:A5)/CONTAR(A1:A5)` → mismo resultado

### 3. CONTAR

Cuenta cuántas celdas en un rango contienen **números**.

```
=CONTAR(valor1; [valor2]; ...)
```

| Ejemplo | Resultado |
|---------|-----------|
| `=CONTAR(A1:A10)` | Cuenta celdas con números en A1:A10 |
| `=CONTAR(A1:A10; B1:B10)` | Cuenta números en dos rangos |

**Importante:** CONTAR solo cuenta números, no texto, ni celdas vacías, ni valores lógicos.

### 4. CONTARA

Cuenta cuántas celdas **NO están vacías** (números, texto, errores, etc.).

```
=CONTARA(valor1; [valor2]; ...)
```

| Rango de ejemplo | CONTAR | CONTARA |
|------------------|--------|---------|
| `10`, `20`, `"Hola"`, `30`, vacío | 3 | 4 |
| `"Ana"`, `"Luis"`, vacío, `"Pedro"`, `100` | 1 | 4 |

### 5. CONTAR.BLANCO

Cuenta cuántas celdas están **vacías** en un rango.

```
=CONTAR.BLANCO(rango)
```

| Ejemplo | Resultado |
|---------|-----------|
| `=CONTAR.BLANCO(A1:A10)` | Número de celdas vacías en A1:A10 |

### 6. MAX

Devuelve el valor **máximo** (más grande) de un conjunto de números.

```
=MAX(número1; [número2]; ...)
```

| Ejemplo | Resultado |
|---------|-----------|
| `=MAX(A1:A10)` | El valor más alto en A1:A10 |
| `=MAX(A1:A10; 100)` | El valor más alto, pero nunca menor que 100 |

### 7. MIN

Devuelve el valor **mínimo** (más pequeño) de un conjunto de números.

```
=MIN(número1; [número2]; ...)
```

| Ejemplo | Resultado |
|---------|-----------|
| `=MIN(A1:A10)` | El valor más bajo en A1:A10 |
| `=MIN(A1:A10; 0)` | El valor más bajo, pero nunca mayor que 0 |

## Tabla resumen de funciones básicas

| Función | ¿Qué hace? | Cuenta texto | Cuenta vacíos | Ejemplo |
|---------|-----------|-------------|---------------|---------|
| `SUMA` | Suma números | Ignora | Ignora | `=SUMA(A1:A10)` |
| `PROMEDIO` | Media aritmética | Ignora | Ignora | `=PROMEDIO(A1:A10)` |
| `CONTAR` | Cuenta números | No | No | `=CONTAR(A1:A10)` |
| `CONTARA` | Cuenta no vacíos | Sí | No | `=CONTARA(A1:A10)` |
| `CONTAR.BLANCO` | Cuenta vacíos | No | Sí | `=CONTAR.BLANCO(A1:A10)` |
| `MAX` | Valor máximo | Ignora | Ignora | `=MAX(A1:A10)` |
| `MIN` | Valor mínimo | Ignora | Ignora | `=MIN(A1:A10)` |

## Insertar funciones fácilmente

### Método 1: Insertar función (recomendado para principiantes)

1. Selecciona la celda donde quieres la función
2. Fórmulas > **Insertar función** (o `Shift + F3`)
3. Busca la función por nombre o categoría
4. Excel te guía paso a paso en un cuadro que muestra:
   - Descripción de la función
   - Cada argumento con su explicación
   - El valor actual de cada argumento
   - El resultado final

### Método 2: Escribir directamente (más rápido con práctica)

1. Escribe `=` seguido de las primeras letras de la función (ej: `=SU`)
2. Excel muestra una lista de autocompletado con funciones que coinciden
3. Usa las flechas para navegar y Tab para seleccionar
4. Excel muestra la sintaxis de la función mientras escribes

### Método 3: Selección de rango con mouse

1. Escribe `=SUMA(`
2. Arrastra el mouse sobre el rango deseado
3. Excel inserta la referencia automáticamente
4. Cierra el paréntesis y presiona Enter

## Autosuma (el atajo más productivo)

### Cómo funciona

El botón **Σ Autosuma** (Inicio > Edición) o el atajo `Alt + =`:

1. Selecciona una celda debajo de una columna de números
2. Presiona `Alt + =`
3. Excel detecta automáticamente el rango a sumar (lo resalta con borde)
4. Presiona Enter para aceptar

### Variantes de Autosuma

El botón Σ tiene un menú desplegable con más funciones:

| Opción del menú Σ | Atajo | Función |
|-------------------|-------|---------|
| Suma | `Alt + =` | `=SUMA(...)` |
| Promedio | | `=PROMEDIO(...)` |
| Contar números | | `=CONTAR(...)` |
| Máximo | | `=MAX(...)` |
| Mínimo | | `=MIN(...)` |

> **Pro Tip:** Selecciona todo el rango de datos incluyendo la celda vacía de totales y presiona `Alt + =`. Excel suma cada columna individualmente en una sola operación.

## Funciones con varios rangos

Todas las funciones básicas aceptan múltiples rangos separados por `;`:

```
=SUMA(A1:A10; C1:C10; E1:E10)
```

Esto suma tres rangos distintos en una sola llamada.

**Ejemplo de negocio:** Sumar ventas de tres regiones en tres columnas distintas.

## Anidar funciones básicas (funciones dentro de funciones)

Puedes usar el resultado de una función como argumento de otra:

```
=SUMA(A1:A10)/CONTAR(A1:A10)
```
→ Calcula el promedio manualmente (SUMA ÷ CONTAR)

```
=MAX(A1:A10)-MIN(A1:A10)
```
→ Calcula el rango (diferencia entre máximo y mínimo)

```
=SUMA(A1:A10)/MAX(A1:A10)
```
→ Suma total dividida por el valor máximo (proporción)

## Combinar funciones con formato condicional (avanzado)

Puedes usar funciones en reglas de formato condicional:

1. Selecciona tus datos
2. Inicio > Formato condicional > Nueva regla > "Utilice una fórmula..."
3. Escribe `=A1>PROMEDIO($A$1:$A$10)`
4. Aplica formato verde → resalta los valores por encima del promedio

## Errores comunes

### Error 1: Usar CONTAR cuando se necesita CONTARA
Tienes nombres de empleados en A1:A10 y usas `CONTAR(A1:A10)` → resultado 0 (porque son texto, no números).

**Solución:** Usa `CONTARA` para contar celdas no vacías con cualquier tipo de contenido.

### Error 2: Rango incorrecto en SUMA
Escribes `=SUMA(A1:A10)` pero los datos reales llegan hasta A20.

**Solución:** Siempre verifica que el rango incluya todos los datos, especialmente después de agregar nuevas filas.

### Error 3: Olvidar el paréntesis de cierre
`=SUMA(A1:A10` → Excel muestra error.

**Solución:** Excel a veces ofrece corregirlo automáticamente. Si no, cuenta los paréntesis: mismo número de `(` que de `)`.

### Error 4: Confundir PROMEDIO con MEDIANA
`PROMEDIO` calcula la media aritmética. `MEDIANA` calcula el valor central. Si hay valores atípicos (outliers), la mediana es más representativa.

**Solución:** Para salarios o precios de vivienda, usa `MEDIANA` en lugar de `PROMEDIO`.

### Error 5: No actualizar rangos al agregar datos
Tienes `=SUMA(A1:A10)` y agregas datos en A11. La fórmula no incluye A11.

**Solución:** Usa rangos más grandes de lo necesario (`=SUMA(A1:A1000)`) o convierte el rango en Tabla de Excel (las tablas expanden rangos automáticamente).

## Ejercicio paso a paso: Análisis de ventas mensuales

### Escenario de negocio
Eres analista de ventas y tienes los datos de ventas diarias de enero. Debes calcular indicadores clave: total mensual, promedio diario, mejor día, peor día, y días con ventas registradas.

### Parte 1: Generar datos de ventas
1. Abre un libro nuevo
2. En **A1** escribe `Día`, en **B1** escribe `Ventas ($)`
3. Genera 30 días de datos (supón un mes de 30 días):
   - En **A2:A31** escribe `1` a `30` (usa el control de relleno)
   - En **B2** escribe `=ALEATORIO.ENTRE(10000; 50000)` → arrastra hasta B31
   - (ALEATORIO.ENTRE genera números aleatorios cada vez que calculas)
4. Para fijar los valores: selecciona B2:B31 > Copiar > Clic derecho > Pegado especial > Valores

### Parte 2: Indicadores principales
1. En **D1** escribe `Indicador`, en **E1** escribe `Valor`
2. En **D2** escribe `Total del mes` → **E2**: `=SUMA(B2:B31)`
3. En **D3** escribe `Promedio diario` → **E3**: `=PROMEDIO(B2:B31)`
4. En **D4** escribe `Día pico (máximo)` → **E4**: `=MAX(B2:B31)`
5. En **D5** escribe `Día bajo (mínimo)` → **E5**: `=MIN(B2:B31)`
6. En **D6** escribe `Días con ventas` → **E6**: `=CONTAR(B2:B31)`
7. En **D7** escribe `Celdas vacías en rango` → **E7**: `=CONTAR.BLANCO(B2:B31)`

### Parte 3: Análisis adicional (funciones anidadas)
1. En **D9** escribe `Rango (máx - mín)` → **E9**: `=E4-E5`
2. En **D10** escribe `Ventas totales / mejor día` → **E10**: `=E2/E4`
3. En **D11** escribe `% del mejor día` → **E11**: `=E4/E2` → formato **Porcentaje**
4. En **D12** escribe `Días con ventas > $30,000`
   - **E12**: `=CONTAR.SI(B2:B31;">30000")` (CONTAR.SI lo veremos después)

### Parte 4: Formato y presentación
1. Selecciona E2:E11 > Inicio > Formato de número > **Moneda** o **Número** con separador de miles
2. E2:E11 sin decimales
3. Aplica negrita a los encabezados

### Parte 5: Prueba de actualización
1. Selecciona cualquier celda con datos de ventas (B2:B31) y cambia un valor
2. Presiona F9 (recalcular) o Enter
3. Observa cómo todos los indicadores se actualizan automáticamente

### Parte 6: Bonus - ¿Qué día fue el mejor?
1. En **D14** escribe `Mejor día (fecha)`
2. Usa `=INDICE(A2:A31; COINCIDIR(MAX(B2:B31); B2:B31; 0))`
   - (No te preocupes por esta fórmula ahora, la veremos más adelante)
3. Esto te dice el día exacto donde ocurrió la venta más alta

## Ejercicio adicional: Reporte de calificaciones

### Escenario
Eres profesor y necesitas calcular las estadísticas de calificaciones de tus 20 alumnos.

1. En **A1** escribe `Nombre`, en **B1** escribe `Nota`
2. En **A2:A21** escribe nombres de estudiantes (los que quieras)
3. En **B2:B21** escribe notas entre 0 y 100
4. Calcula en columnas separadas:
   - Promedio de la clase → `=PROMEDIO(B2:B21)`
   - Nota más alta → `=MAX(B2:B21)`
   - Nota más baja → `=MIN(B2:B21)`
   - Cuántos estudiantes aprobaron (nota >= 60) → `=CONTAR.SI(B2:B21;">=60")`
   - Cuántos reprobaron (nota < 60) → `=CONTAR.SI(B2:B21;"<60")`

## Aspectos destacados (Key Takeaways)

- Las funciones son fórmulas predefinidas que simplifican cálculos complejos
- `SUMA`, `PROMEDIO`, `CONTAR`, `MAX`, `MIN` son las 5 funciones esenciales
- `CONTARA` cuenta celdas no vacías; `CONTAR.BLANCO` cuenta vacías
- El autocompletado de funciones y `Shift + F3` facilitan la inserción de funciones
- `Alt + =` es el atajo más rápido para Autosuma
- Las funciones aceptan rangos continuos (`A1:A10`) y rangos múltiples separados por `;`
- `CONTAR` solo cuenta números, no texto ni celdas vacías
- Las funciones se pueden **anidar** (combinar dentro de otras) para crear cálculos más complejos
- Las funciones ignoran celdas vacías y con texto a menos que estén diseñadas específicamente para procesarlos
- Convierte rangos a **Tablas de Excel** para que los rangos de las funciones se expandan automáticamente

---

**Siguiente tema:** [04-Funciones-Texto-Fecha.md](04-Funciones-Texto-Fecha.md)
