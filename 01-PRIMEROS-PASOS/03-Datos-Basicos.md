# Introducir datos: texto, números y fechas

## Cómo Excel interpreta los datos

Cuando escribes algo en una celda, Excel automáticamente **clasifica** el dato en una categoría. Esta clasificación no es decorativa: determina qué puedes hacer con ese dato. Un número se puede sumar, una fecha se puede restar, pero el texto no.

### La regla visual definitiva

Mira la alineación del dato en la celda:

| Alineación | Tipo de dato | Ejemplos |
|------------|-------------|----------|
| **Izquierda** | Texto (cadena) | `Hola`, `Calle 123`, `001234` |
| **Derecha** | Número | `100`, `3.14`, `-50`, `2024` |
| **Derecha** | Fecha / Hora | `15/01/2024`, `14:30` |
| **Derecha** | Moneda / Contabilidad | `$50.00` |
| **Derecha** | Porcentaje | `10%` |
| **Centrado** (a veces) | Personalizado (depende del formato) | Números con formato especial |

> **💡 Pro Tip:** ¿Ves un número alineado a la izquierda? Excel lo está tratando como texto. Esto pasa con códigos postales, números de teléfono o IDs con ceros a la izquierda. Para convertirlo a número real, multiplica la celda por 1: escribe `=A1*1` en otra celda.

## Tipos de datos: guía completa

### 1. Texto (cadenas de caracteres)

Todo lo que no es número ni fecha. Incluye letras, símbolos y **números que no quieres calcular** (como códigos o teléfonos).

| Ejemplo | ¿Es texto? | ¿Por qué? |
|---------|-----------|-----------|
| `Juan Pérez` | ✅ Sí | Solo letras |
| `Calle 123` | ✅ Sí | Mezcla letras y números |
| `001234` | ✅ Sí (si tiene formato texto) | El cero a la izquierda indica que no es número |
| `=HOLA()` | ✅ Sí | Es una función, pero Excel la ve como instrucción |

**Longitud máxima:** Una celda puede contener hasta 32,767 caracteres de texto.

### 2. Números

Cualquier valor numérico con o sin decimales. Excel reconoce:

| Formato | Ejemplo válido | Ejemplo NO válido |
|---------|---------------|-------------------|
| Entero | `100` | -- |
| Decimal | `3.14` | `3,14` (depende de configuración regional) |
| Negativo | `-50` | `(50)` (es contabilidad, no número simple) |
| Científico | `1.5E3` (=1500) | -- |
| Porcentaje | `10%` (almacena 0.10) | -- |

**Precisión:** Excel maneja hasta 15 dígitos significativos. Después del 15, redondea.

### 3. Fechas

Las fechas son **números con formato** (días transcurridos desde el 1 de enero de 1900). Esto significa que puedes hacer operaciones aritméticas con ellas.

| Fecha que ves | Valor real (número) |
|---------------|---------------------|
| 01/01/1900 | 1 |
| 15/01/2024 | 45306 |
| 31/12/2024 | 45657 |
| 01/01/2025 | 45658 |

> **Esto es increíblemente útil:** puedes sumar 7 días a una fecha simplemente con `=A1+7`, y Excel automáticamente muestra la nueva fecha. Puedes calcular la edad de una persona restando su fecha de nacimiento de la fecha actual.

**Formatos de fecha comunes** (dependen de tu región):

| Formato | Ejemplo | Región típica |
|---------|---------|---------------|
| DD/MM/AAAA | 15/01/2024 | Latinoamérica, Europa |
| MM/DD/AAAA | 01/15/2024 | Estados Unidos |
| DD-MMM-AAAA | 15-Ene-2024 | Internacional |
| AAAA-MM-DD | 2024-01-15 | ISO estándar |

### 4. Horas

Internamente, las horas son **fracciones decimales de un día**:

| Hora que ves | Valor real | Cálculo |
|-------------|------------|---------|
| 06:00 AM | 0.25 | 6 ÷ 24 |
| 12:00 PM | 0.50 | 12 ÷ 24 |
| 06:00 PM | 0.75 | 18 ÷ 24 |

Puedes sumar y restar horas: `=B1-A1` calcula la duración entre dos tiempos.

### 5. Fórmulas

Siempre empiezan con el signo `=`:
- `=A1+B1` suma dos celdas
- `=SUMA(A1:A10)` suma un rango
- `=AHORA()` muestra la fecha y hora actual

## Editar el contenido de una celda

| Acción | Cómo hacerlo | Atajo |
|--------|-------------|-------|
| **Escribir nuevo contenido** | Selecciona la celda y escribe (reemplaza) | -- |
| **Editar sin borrar** | Doble clic en la celda o usa la barra de fórmulas | `F2` |
| **Borrar una celda** | Selecciona y presiona Supr | `Supr` o `Delete` |
| **Deshacer** | El botón de deshacer | `Ctrl + Z` |
| **Rehacer** | El botón de rehacer | `Ctrl + Y` |
| **Cancelar edición** | Mientras escribes, cancela | `Esc` |
| **Confirmar edición** | Mientras escribes, confirma | `Enter` o `Tab` |

> **💡 Pro Tip:** `F2` es quizás la tecla más importante después de Ctrl+C y Ctrl+V. Te permite editar parcialmente una celda sin borrar su contenido. Úsalo constantemente.

## Seleccionar celdas como un profesional

### Selección básica

| Acción | Cómo hacerlo | Atajo |
|--------|-------------|-------|
| Una celda | Haz clic en ella | -- |
| Rango contiguo | Clic en primera celda + arrastrar | `Shift + flechas` |
| Rango grande | Clic en primera celda + Shift + clic en última | `Shift + clic` |
| Fila completa | Clic en el número de fila | `Shift + Barra espaciadora` |
| Columna completa | Clic en la letra de columna | `Ctrl + Barra espaciadora` |
| Todas las celdas | Clic en la esquina superior izquierda | `Ctrl + E` |
| Celdas no contiguas | Ctrl + clic en cada una | `Ctrl + clic` |

### Selección avanzada

| Acción | Método |
|--------|--------|
| Saltar al final de datos | `Ctrl + flecha direccional` |
| Seleccionar hasta el final | `Ctrl + Shift + flecha` |
| Seleccionar región actual | `Ctrl + *` (asterisco en teclado numérico) |

## Trucos de escritura esenciales

| Tecla | Lo que hace |
|-------|-------------|
| `Enter` | Confirma y baja a la siguiente celda |
| `Tab` | Confirma y avanza a la derecha |
| `Shift + Enter` | Confirma y sube una celda |
| `Shift + Tab` | Confirma y retrocede a la izquierda |
| `Esc` | Cancela lo que estás escribiendo |
| `F2` | Edita la celda actual |
| `Ctrl + Enter` | Llena todas las celdas seleccionadas con el mismo valor |

### Ejemplo de Ctrl + Enter

1. Selecciona el rango A1:A10
2. Escribe `Pendiente` (sin presionar Enter)
3. Presiona `Ctrl + Enter`
4. ¡Todas las 10 celdas tienen "Pendiente"!

## Fechas y horas: cuidado especial

### Cómo escribir fechas correctamente

Excel es flexible al escribir, pero estricto al almacenar:

**Formas válidas de escribir:**
- `15/01/2024`
- `15-01-2024`
- `15/Ene/2024`
- `Enero 15, 2024`

**Cuidado con el formato USA:**
- `01/15/2024` es 15 de enero en USA
- `01/15/2024` podría ser 1 de enero si tu sistema está en español

### Operaciones con fechas

| Fórmula | Resultado | Explicación |
|---------|-----------|-------------|
| `=A1+7` | Una semana después | Suma 7 días |
| `=B1-A1` | Días entre dos fechas | Resta directa |
| `=DIAS(B1,A1)` | Días entre dos fechas | Misma resta pero más clara |
| `=A1+30` | Un mes aproximado | Suma 30 días |
| `=FECHA(2024, MES(A1)+1, DIA(A1))` | Un mes exacto | Usa la función FECHA |

## Escenario del mundo real

**Caso: Sistema de inventario básico**

Tienes un pequeño negocio y necesitas llevar un inventario:

| A | B | C | D |
|---|---|---|---|
| **Producto** | **Precio** | **Cantidad** | **Fecha ingreso** |
| Laptop HP | 15000 | 5 | 15/01/2024 |
| Mouse USB | 250 | 20 | 15/01/2024 |
| Teclado | 450 | 10 | 16/01/2024 |

Fórmulas útiles:
- `=B2*C2` → Valor total del producto Laptop: **75,000**
- `=SUMA(B2:B4)` → Precio promedio no, es suma de precios: **15,700**
- `=D2+30` → Fecha de próximo conteo: **14/02/2024**

## Errores comunes del principiante

| Error | Ejemplo | Consecuencia | Solución |
|-------|---------|-------------|----------|
| **Apóstrofe antes de número** | `'001234` | El número se vuelve texto, no se puede calcular | Usa formato personalizado "000000" |
| **Espacios en números** | `1 000` en lugar de `1000` | Excel lo ve como texto | NUNCA uses espacios en números |
| **Punto vs coma decimal** | `3,14` en sistema con punto decimal | Excel no lo reconoce como número | Usa la configuración regional correcta |
| **Fecha en formato conflictivo** | `01/02/2024` | ¿1 feb o 2 ene? Depende de la región | Sé explícito: `01-Feb-2024` |
| **No usar $ en precios** | `15000` sin formato moneda | Se ve como número simple | Aplica formato de moneda después |
| **Borrar con espacio** | Presionar barra espaciadora "para borrar" | La celda tiene un espacio invisible, no está vacía | Usa `Supr` siempre |

## Ejercicio práctico completo

### Parte 1: Tipos de datos

1. En un libro nuevo, escribe en las siguientes celdas:

   | Celda | Escribe | Tipo esperado | Alineación esperada |
   |-------|---------|---------------|---------------------|
   | A1 | Tu nombre completo | Texto | Izquierda |
   | A2 | Tu edad | Número | Derecha |
   | A3 | Tu peso en kg (ej: 70.5) | Número decimal | Derecha |
   | A4 | `15/01/2024` (o la fecha actual) | Fecha | Derecha |
   | A5 | `Hoy es ` (sin espacio al final) | Texto | Izquierda |
   | B1 | Tu ciudad | Texto | Izquierda |
   | B2 | Tu código postal (ej: 00123) | Número | Derecha |
   | B3 | `14:30` | Hora | Derecha |

2. **Observa la alineación** de cada celda. ¿Coincide con la tabla?

### Parte 2: Editar celdas

3. Presiona `F2` en A1 y agrega tu apellido al final sin borrar el nombre.
4. Presiona `F2` en A5 y escribe `Hoy es ` + la fecha que pusiste en A4.
5. Selecciona A1 y A2, presiona `Ctrl + Z` para deshacer (si algo salió mal).
6. En **C1**, escribe `=A2+10` y presiona Enter. Verás tu edad + 10 años.
7. En **C2**, escribe `=A4+7`. Verás la fecha de la próxima semana.

### Parte 3: Manejo de fechas

8. En **D1**, escribe tu fecha de cumpleaños (ej: `22/05/1990`).
9. En **D2**, escribe `=D1+30`. ¿Qué fecha aparece?
10. En **D3**, escribe `=D1+365`. ¿Qué fecha aparece?
11. En **E1**, escribe `=HOY()` (sin espacios). Te dará la fecha actual.
12. En **E2**, escribe `=E1-D1`. Son los días desde tu cumpleaños hasta hoy.

### Parte 4: Trucos de productividad

13. Selecciona el rango **F1:F10**, escribe `Prueba` y presiona `Ctrl + Enter`.
14. Selecciona **G1**, escribe `100`, presiona `Enter`, escribe `200` en G2, presiona `Enter`, escribe `300` en G3.
15. Selecciona **G1:G3**, mira la barra de estado. ¿Ves la suma? ¿El promedio?

## Puntos clave

- Excel clasifica automáticamente texto (izquierda), números/fechas (derecha)
- Las **fechas** son números internamente; por eso se pueden sumar y restar
- Usa `F2` para editar una celda sin borrar su contenido
- `Ctrl + Enter` llena múltiples celdas con el mismo valor al instante
- `Ctrl + Z` deshace errores (tu mejor amigo en Excel)
- Nunca uses espacios en los números ni apóstrofes a menos que sea necesario
- Las horas son fracciones del día; las fechas son días desde 1900
- Siempre verifica la alineación: si un número está a la izquierda, algo anda mal

---

**Siguiente módulo:** [02-MANEJO-DATOS](../02-MANEJO-DATOS/01-Rangos-Referencias.md)
