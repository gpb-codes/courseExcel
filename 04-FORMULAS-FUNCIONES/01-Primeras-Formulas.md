# Tus primeras fórmulas

Las fórmulas son el verdadero poder de Excel. Transforman una hoja de cálculo de un simple "cuadro con números" a una herramienta inteligente que realiza cálculos automáticos y se actualiza en tiempo real cuando cambian los datos. Dominar las fórmulas es el primer paso para convertirte en un usuario avanzado de Excel.

## ¿Qué es una fórmula?

Una fórmula es una expresión matemática o lógica que realiza cálculos con los valores de tu hoja. Todo en Excel empieza con el signo `=`.

### Estructura básica de una fórmula

```
= [operando] [operador] [operando]
```

- `=` → indica que es una fórmula (obligatorio)
- **Operando** → puede ser un número, una referencia de celda (`A1`), o un rango (`A1:A10`)
- **Operador** → `+`, `-`, `*`, `/`, `^`, etc.

| Tipo | Ejemplo | Resultado |
|------|---------|-----------|
| Números directos | `=10+5` | `15` |
| Referencias a celdas | `=A1+B1` | Suma del valor de A1 y B1 |
| Mixto | `=A1*1.16` | A1 multiplicado por 1.16 (agregar 16% de IVA) |
| Con funciones | `=SUMA(A1:A10)` | Suma todos los valores de A1 a A10 |

### Diferencia entre fórmula y función

| Concepto | Definición | Ejemplo |
|----------|------------|---------|
| **Fórmula** | Expresión que crea el usuario combinando operandos y operadores | `=A1+B1*C1` |
| **Función** | Fórmula predefinida con un nombre específico | `=SUMA(A1:A10)` |

## Operaciones aritméticas básicas

### Operadores disponibles

| Operación | Símbolo | Ejemplo con celdas | Resultado esperado |
|-----------|---------|--------------------|-------------------|
| Suma | `+` | `=A1+B1` | Suma A1 + B1 |
| Resta | `-` | `=A1-B1` | Resta A1 - B1 |
| Multiplicación | `*` | `=A1*B1` | Multiplica A1 × B1 |
| División | `/` | `=A1/B1` | Divide A1 ÷ B1 |
| Potencia | `^` | `=A1^2` | A1 elevado al cuadrado |
| Porcentaje | `%` | `=A1*10%` | 10% de A1 |

### Ejemplos prácticos de negocio

| Escenario | Fórmula | Explicación |
|-----------|---------|-------------|
| Calcular IVA (16%) | `=A2*0.16` | Precio × 0.16 = IVA |
| Precio con IVA | `=A2*1.16` | Precio × 1.16 = Total con IVA incluido |
| Descuento (10%) | `=A2*0.9` | Precio × 0.9 = Precio con descuento |
| Margen de ganancia | `=(B2-C2)/B2` | (Ingreso - Costo) / Ingreso = Margen en % |
| Comisión de venta (5%) | `=D2*0.05` | Total vendido × 0.05 = Comisión |
| Reparto proporcional | `=A2/SUMA($A$2:$A$10)` | Cada valor dividido entre el total |

### Operador de concatenación

Excel usa el símbolo `&` para unir (concatenar) texto:

| Fórmula | Resultado |
|---------|-----------|
| `="Hola " & "Mundo"` | `Hola Mundo` |
| `=A1 & " " & B1` | "Juan Pérez" (si A1=Juan, B1=Pérez) |
| `="Cliente: " & A2` | `Cliente: María López` |

## Sumar, restar, multiplicar y dividir con celdas

### Referencias a celdas: el concepto fundamental

En lugar de escribir números fijos, usas referencias a celdas. Esto es lo que hace que Excel sea dinámico.

| A | B | Fórmula en C | Resultado |
|---|---|---|---|
| 10 | 5 | `=A1+B1` | 15 |
| 10 | 5 | `=A1-B1` | 5 |
| 10 | 5 | `=A1*B1` | 50 |
| 10 | 5 | `=A1/B1` | 2 |
| 10 | 5 | `=A1^B1` | 100000 |

**Ventaja clave:** Si cambias A1 de 10 a 20, todas las fórmulas que referencian A1 se actualizan automáticamente. No necesitas recalcular nada.

### Cómo escribir una fórmula con referencias

**Método 1: Escribiendo manualmente**
1. Selecciona la celda donde quieres el resultado (ej: C1)
2. Escribe `=A1+B1`
3. Presiona Enter

**Método 2: Haciendo clic (recomendado)**
1. Selecciona la celda destino
2. Escribe `=`
3. **Haz clic** en la primera celda (A1) → aparece en la fórmula
4. Escribe el operador (`+`)
5. **Haz clic** en la segunda celda (B1)
6. Presiona Enter

> **Pro Tip:** Hacer clic en las celdas en lugar de escribir las referencias reduce errores drásticamente. Excel resalta las celdas referenciadas con un borde de color, facilitando la verificación.

## Orden de las operaciones (PEMDAS)

Excel respeta estrictamente el orden matemático de las operaciones:

1. **P**aréntesis `()`
2. **E**xponentes (potencias) `^`
3. **M**ultiplicación y **D**ivisión `* /` (de izquierda a derecha)
4. **A**dición y **S**ustracción `+ -` (de izquierda a derecha)

### Tabla comparativa

| Fórmula | Orden de evaluación | Resultado |
|---------|-------------------|-----------|
| `=10+5*2` | 5×2=10, luego 10+10 | **20** |
| `=(10+5)*2` | 10+5=15, luego 15×2 | **30** |
| `=10+5/5-1` | 5/5=1, luego 10+1-1 | **10** |
| `=(10+5)/(5-1)` | 10+5=15, 5-1=4, 15/4 | **3.75** |
| `=2^3+4*2` | 2^3=8, 4×2=8, 8+8 | **16** |
| `=2^(3+4)*2` | 3+4=7, 2^7=128, 128×2 | **256** |

### Ejemplo de negocio con orden de operaciones

Calcula el precio final de un producto con impuesto y descuento:

``` 
Precio base: 1000
Descuento: 10%
Impuesto: 16%
```

**Fórmula INCORRECTA:** `=1000-1000*0.10+1000*0.16`
→ `=1000 - 100 + 160 = 1060` (¡esto suma el impuesto sobre el precio original!)

**Fórmula CORRECTA con paréntesis:** `=(1000-1000*0.10)*(1+0.16)`
→ `=(1000-100)*(1.16) = 900*1.16 = 1044`

## La barra de fórmulas

### Ubicación y función

La barra de fórmulas está justo arriba de la cuadrícula (entre la cinta de opciones y las letras de columna). Muestra el contenido real de la celda seleccionada:

- **Si la celda contiene texto o número:** muestra el texto/número
- **Si la celda contiene una fórmula:** muestra la fórmula (en la celda ves el resultado)
- **Si la celda está vacía:** está en blanco

### Expandir y contraer la barra

- Haz clic en la flecha hacia abajo `∨` al final de la barra para expandirla (ver fórmulas largas completas)
- O usa `Ctrl + Mayús + U` para alternar entre una línea y varias líneas

### Navegación en la barra de fórmulas

| Acción | Cómo hacerlo |
|--------|--------------|
| Editar fórmula | Haz clic en la barra o presiona `F2` |
| Navegar entre celdas mientras editas | Usa las flechas del teclado (pausa la selección) o haz clic |
| Cancelar edición | Presiona `Esc` |
| Confirmar edición | Presiona Enter o haz clic en ✔ |
| Ver todas las fórmulas de la hoja | `Ctrl + ~` (tilde) |

## La función Autosuma (introducción)

Es el atajo más rápido para sumar. Aunque lo veremos en detalle más adelante:

1. Selecciona la celda vacía debajo de una columna de números (o a la derecha de una fila)
2. Presiona `Alt + =` (o Inicio > Autosuma Σ)
3. Excel selecciona automáticamente el rango que cree que quieres sumar
4. Presiona Enter para aceptar

## Errores comunes

### Error 1: Olvidar el signo `=`
Si escribes `A1+B1` sin el `=` al inicio, Excel trata el contenido como **texto**. La celda mostrará literalmente `A1+B1`.

**Solución:** Siempre verifica que tu fórmula comience con `=`.

### Error 2: Confundir el punto decimal con la coma
En Excel español, el separador decimal es `,` (coma) y el separador de argumentos de funciones es `;` (punto y coma). En Excel inglés es al revés: `.` (punto) para decimal y `,` (coma) para argumentos.

| Contexto | Español | Inglés |
|----------|---------|--------|
| Decimal | `=10,5+5` | `=10.5+5` |
| Separador de argumentos | `=SUMA(A1:A10; B1:B10)` | `=SUM(A1:A10, B1:B10)` |

### Error 3: Paréntesis desbalanceados
Cada `(` necesita su `)` correspondiente. Excel te avisa con un mensaje de error si no coinciden.

**Solución:** Al escribir fórmulas anidadas, cuenta mentalmente los paréntesis. Excel colorea los pares de paréntesis para ayudarte.

### Error 4: Usar una celda vacía en una división
Si B1 está vacía, Excel la trata como 0. `=A1/B1` dará `#¡DIV/0!`.

**Solución:** Usa la función `SI.ERROR` que veremos en próximas lecciones.

### Error 5: No usar paréntesis cuando es necesario
`=10+5*2` es 20, no 30. Sin paréntesis, la multiplicación tiene prioridad.

**Solución:** En caso de duda, usa paréntesis para hacer explícito el orden deseado.

### Error 6: Escribir números con formato incorrecto
Escribir `1.000` en Excel español puede interpretarse como `1` (el punto se toma como separador de miles, trunca el número).

**Solución:** Escribe los números sin separador de miles. El formato visual se aplica con Formato de celdas.

## Ejercicio paso a paso: Calculadora de presupuesto mensual

### Escenario de negocio
Eres consultor financiero y necesitas crear una herramienta de presupuesto mensual para tu cliente, que le permita proyectar ingresos, gastos y ahorros.

### Parte 1: Estructura del presupuesto
1. Abre un libro nuevo
2. En **A1** escribe `Presupuesto Mensual - [Tu Nombre]`
3. En **A3** escribe `Concepto`, en **B3** `Presupuestado`, en **C3** `Real`, en **D3** `Diferencia`

### Parte 2: Ingresos (filas 4-7)
1. **A4:** `Salario`, **B4:** `5000`, **C4:** `5000`
2. **A5:** `Freelance`, **B5:** `1000`, **C5:** `1500`
3. **A6:** `Otros ingresos`, **B6:** `500`, **C6:** `300`
4. **A7:** `Total Ingresos`
5. **B7:** `=B4+B5+B6` → arrastra a **C7** (o escribe la misma fórmula para C)

### Parte 3: Gastos (filas 9-15)
1. **A9:** `Gastos`
2. **A10:** `Hipoteca/Alquiler`, **B10:** `1500`, **C10:** `1500`
3. **A11:** `Servicios (luz, agua, gas)`, **B11:** `300`, **C11:** `280`
4. **A12:** `Transporte`, **B12:** `200`, **C12:** `250`
5. **A13:** `Alimentación`, **B13:** `600`, **C13:** `650`
6. **A14:** `Entretenimiento`, **B14:** `200`, **C14:** `350`
7. **A15:** `Total Gastos`
8. **B15:** `=B10+B11+B12+B13+B14` (o mejor `=SUMA(B10:B14)`) → arrastra a C15

### Parte 4: Cálculos finales (filas 17-19)
1. **A17:** `Ahorro Neto`
2. **B17:** `=B7-B15` (Total Ingresos - Total Gastos)
3. **C17:** `=C7-C15`
4. **A18:** `% Ahorro`
5. **B18:** `=B17/B7` → formato **Porcentaje**
6. **C18:** `=C17/C7` → formato **Porcentaje**
7. **A19:** `Diferencia Presupuesto vs Real`
8. **D7:** `=C7-B7` (diferencia en ingresos)
9. **D15:** `=C15-B15` (diferencia en gastos)

### Parte 5: Probar la dinamización
1. Cambia **C5** (Freelance real) de `1500` a `2000`
2. Observa cómo se actualizan automáticamente C7, C17, C18
3. Cambia **C14** (Entretenimiento real) de `350` a `150`
4. Ve cómo mejora el ahorro

### Parte 6: Practicar orden de operaciones
1. En **E1** escribe `¿Qué fórmula calcularía el ahorro como porcentaje del ingreso total correctamente?`
2. Prueba: `=B17/B7*100` vs `=B17/(B7*100)` vs `=(B17/B7)*100`
3. ¿Cuál da el resultado correcto? (Pista: la multiplicación y división tienen la misma prioridad, se evalúan de izquierda a derecha)

### Parte 7: Bonus - fórmula con paréntesis
1. Quieres calcular tu **tarifa por hora freelance**:
   - En **F1** escribe `Horas trabajadas:`, en **G1** escribe `80`
   - En **F2** escribe `Ingreso freelance:`, en **G2** escribe `1500`
   - En **F3** escribe `Tarifa por hora:`
   - **G3:** `=G2/G1` → `18.75` (€/hora)

2. Guarda como `04-presupuesto-formulas.xlsx`

## Aspectos destacados (Key Takeaways)

- Toda fórmula en Excel comienza con el signo `=`
- Las **referencias a celdas** (ej: `A1`) hacen que las fórmulas sean dinámicas: se actualizan al cambiar los datos
- El orden de operaciones es: Paréntesis → Exponentes → Multiplicación/División → Suma/Resta
- Usa **paréntesis** para controlar el orden de evaluación y mejorar la legibilidad
- La **barra de fórmulas** muestra la fórmula completa mientras la celda muestra el resultado
- Puedes escribir referencias manualmente o haciendo clic en las celdas (más seguro)
- `Alt + =` es el atajo para Autosuma (veremos funciones más adelante)
- En Excel español: separador decimal = `,` ; separador de funciones = `;`
- Siempre verifica fórmulas complejas probando con valores que conozcas

---

**Siguiente tema:** [02-Referencias-Relativas-Absolutas.md](02-Referencias-Relativas-Absolutas.md)
