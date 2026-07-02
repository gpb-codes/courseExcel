# Referencias relativas, absolutas y mixtas

Entender las referencias es el tema que separa a quienes "saben usar Excel" de quienes realmente dominan la herramienta. Una comprensión sólida de cómo se comportan las referencias al copiar fórmulas te permitirá crear hojas de cálculo eficientes, reutilizables y libres de errores.

## ¿Qué son las referencias en Excel?

Una **referencia** identifica una celda o un rango de celdas. Cuando usas `A1` en una fórmula, estás diciendo "toma el valor de la celda A1". El comportamiento de esa referencia al copiar la fórmula depende de si es **relativa**, **absoluta** o **mixta**.

## Referencia relativa (la que se mueve)

### ¿Qué es?

Una referencia relativa se ajusta automáticamente cuando copias la fórmula a otra ubicación. Es el tipo de referencia por defecto en Excel.

### Cómo funciona

Cuando copias una fórmula, Excel ajusta la referencia según la **distancia** entre la celda original y la celda destino.

**Ejemplo:** Si en B1 tienes `=A1` y copias B1 a B2, la fórmula se convierte en `=A2` (se movió 1 fila hacia abajo, la referencia también se movió 1 fila hacia abajo).

### Ejemplo detallado

Supón que en la celda **B1** escribes `=A1+10`. Luego arrastras (copias) la fórmula desde B1 hasta B5:

| Celda original | Fórmula original | Copiar a | Fórmula resultante |
|----------------|------------------|----------|--------------------|
| B1 | `=A1+10` | B2 | `=A2+10` |
| B1 | `=A1+10` | B3 | `=A3+10` |
| B1 | `=A1+10` | B4 | `=A4+10` |
| B1 | `=A1+10` | B5 | `=A5+10` |

**¿Qué pasó?** Excel movió la referencia de fila de `A1` a `A2`, `A3`, etc. porque la fórmula se copió hacia abajo. La columna `A` se mantuvo porque la copia fue vertical.

### Ejemplo en 2 dimensiones (horizontal y vertical)

Si en **B1** tienes `=A1` y copias la fórmula hacia la derecha:

| Celda | Fórmula |
|-------|---------|
| B1 | `=A1` |
| C1 | `=B1` (se movió 1 columna a la derecha) |
| D1 | `=C1` (se movió 2 columnas a la derecha) |

**Aplicación práctica:**
- Calcular el subtotal de cada fila: `=A2*B2` en C2, arrastras hacia abajo → `=A3*B3`, `=A4*B4`...

## Referencia absoluta (la que no se mueve)

### ¿Qué es?

Una referencia absoluta **no cambia** cuando copias la fórmula. Se indica con el símbolo `$` delante de la letra de columna y del número de fila: `$A$1`.

### Cuándo usarla

Cuando necesitas que una fórmula siempre apunte a una celda específica, sin importar dónde copies la fórmula.

### Ejemplo clásico: Calcular el IVA de varios productos

Tienes una lista de productos con precios y quieres calcular el IVA (16%) usando una celda fija E1 que contiene `0.16`:

| A | B | C | D | E |
|---|---|---|---|---|
| Producto | Precio | IVA | Total | **IVA %** |
| Producto 1 | 100 | `=B2*$E$1` | `=B2+C2` | **0.16** |
| Producto 2 | 200 | `=B3*$E$1` | `=B3+C3` | |
| Producto 3 | 150 | `=B4*$E$1` | `=B4+C4` | |
| Producto 4 | 300 | `=B5*$E$1` | `=B5+C5` | |

**¿Por qué `$E$1`?** Si usaras `E1` (relativa) en C2 y arrastraras hacia abajo:
- C2: `=B2*E1` ✓
- C3: `=B3*E2` ✗ (E2 está vacía)
- C4: `=B4*E3` ✗

Con `$E$1`, todas las filas apuntan correctamente a la celda que contiene el 0.16.

**Ventaja adicional:** Si el IVA cambia a 0.18, solo modificas E1 y todas las fórmulas se actualizan al instante.

### Segundo ejemplo: Tipo de cambio

Tienes precios en dólares y quieres convertirlos a euros usando un tipo de cambio en F1:

| A | B | C | D | E | F |
|---|---|---|---|---|---|
| Producto | Precio USD | Precio EUR | | | **Tipo Cambio** |
| Laptop | 1200 | `=B2*$F$1` | | | **0.92** |
| Monitor | 450 | `=B3*$F$1` | | | |
| Teclado | 85 | `=B4*$F$1` | | | |

Si el tipo de cambio cambia a 0.95, solo actualizas F1.

## Referencia mixta (una fija, otra no)

### ¿Qué es?

Una referencia mixta tiene una parte fija (absoluta) y otra móvil (relativa):

- `$A1` → columna **A fija**, fila **relativa**
- `A$1` → columna **relativa**, fila **1 fija**

### Cuándo usar cada una

| Tipo | Fórmula | Comportamiento al copiar |
|------|---------|--------------------------|
| Columna absoluta | `$A1` | Siempre columna A, fila cambia |
| Fila absoluta | `A$1` | Columna cambia, siempre fila 1 |

### Ejemplo clásico: Tabla de multiplicar

Crear una tabla de multiplicar del 1 al 10 es el ejemplo perfecto de referencia mixta:

**Configuración:**
- A2:A11 → números 1 al 10 (vertical)
- B1:K1 → números 1 al 10 (horizontal)

**Fórmula en B2:** `=$A2*B$1`

**¿Qué hace esta fórmula?**
- `$A2`: La columna A es fija (siempre tomará de la columna A), pero la fila es relativa (cambiará al arrastrar hacia abajo)
- `B$1`: La fila 1 es fija (siempre tomará de la fila 1), pero la columna es relativa (cambiará al arrastrar hacia la derecha)

**Al arrastrar B2 hasta K11:**

| Celda | Fórmula | Cálculo |
|-------|---------|---------|
| B2 | `=$A2*B$1` | 1 × 1 = 1 |
| C2 | `=$A2*C$1` | 1 × 2 = 2 |
| B3 | `=$A3*B$1` | 2 × 1 = 2 |
| C3 | `=$A3*C$1` | 2 × 2 = 4 |
| K11 | `=$A11*K$1` | 10 × 10 = 100 |

### Segundo ejemplo: Presupuesto mensual con tasa de crecimiento

Quieres proyectar 12 meses de ingresos con una tasa de crecimiento mensual:

| A | B | C | D | ... | M |
|---|---|---|---|---|---|
| Mes | Mes 1 | Mes 2 | Mes 3 | | Mes 12 |
| Ingreso base: 5000 | `=$B$1*(1+$A3)` | | | | |

Donde A3:A14 contiene la fórmula `=MES()*0` para el primer mes... mejor un ejemplo más claro:

**Ejemplo de proyección financiera:**

| | A | B | C | D |
|---|---|---|---|---|
| 1 | **Ingreso base:** | 50000 | **Crecimiento:** | 0.05 |
| 2 | **Mes** | **Proyección** | | |
| 3 | **Enero** | `=$B$1` | | |
| 4 | **Febrero** | `=B3*(1+$D$1)` | | |
| 5 | **Marzo** | `=B4*(1+$D$1)` | | |

`$B$1` es absoluta (siempre el ingreso base), `$D$1` es absoluta (siempre el 0.05), pero B3, B4 son relativas (cambian según la fila).

## Atajo de teclado: F4

La tecla **F4** es el atajo más importante para trabajar con referencias. Mientras escribes o editas una fórmula:

1. Coloca el cursor sobre una referencia (ej: `A1`)
2. Presiona **F4** repetidamente para alternar:

```
A1   →   $A$1   →   A$1   →   $A1   →   A1   (vuelta al inicio)
```

| Presiones | Resultado | Tipo |
|-----------|-----------|------|
| 1 vez | `$A$1` | Absoluta |
| 2 veces | `A$1` | Mixta (fila fija) |
| 3 veces | `$A1` | Mixta (columna fija) |
| 4 veces | `A1` | Relativa (vuelta al inicio) |

> **Pro Tip:** Puedes aplicar F4 a múltiples referencias en una misma fórmula. Edita la celda (F2), selecciona la referencia que quieres cambiar, presiona F4. O selecciona toda la fórmula y F4 cambia la última referencia escrita.

## Referencias a rangos

Además de referencias a una celda, puedes referenciar un rango completo:

| Sintaxis | Significado | Ejemplo |
|----------|-------------|---------|
| `A1:A10` | Todas las celdas de A1 a A10 (misma columna) | `=SUMA(A1:A10)` |
| `A1:E1` | Todas las celdas de A1 a E1 (misma fila) | `=PROMEDIO(A1:E1)` |
| `A1:C10` | Todas las celdas en el rectángulo A1-C10 | `=CONTAR(A1:C10)` |

### Referencias a otras hojas

Para referenciar celdas de otra hoja dentro del mismo libro:

```
=NombreHoja!Referencia
```

| Ejemplo | Significado |
|---------|-------------|
| `=Enero!B5` | Valor de la celda B5 en la hoja "Enero" |
| `=SUMA(Enero!B5:B10)` | Suma B5:B10 de la hoja "Enero" |
| `=Enero!$B$5` | Referencia absoluta a B5 de la hoja "Enero" |

### Referencias a otros libros (externas)

Para referenciar celdas de otro libro (archivo):

```
='[NombreLibro.xlsx]NombreHoja'!Referencia
```

Ejemplo: `='[Presupuesto2024.xlsx]Enero'!$B$5`

**Precaución:** Las referencias externas se rompen si el libro fuente se mueve o se renombra.

## Aplicaciones en el mundo real

### Caso 1: Factura con IVA e IRPF

| A | B | C | D | E |
|---|---|---|---|---|
| 1 | **Concepto** | **Base** | **IVA (21%)** | **IRPF (15%)** | **Total** |
| 2 | Servicio A | 1000 | `=B2*$G$1` | `=B2*$G$2` | `=B2+C2-D2` |
| 3 | Servicio B | 2500 | `=B3*$G$1` | `=B3*$G$2` | `=B3+C3-D3` |

Donde G1=0.21 (IVA) y G2=0.15 (IRPF).

### Caso 2: Tabla de amortización de préstamo

| A | B | C | D | E |
|---|---|---|---|---|
| 1 | **Monto:** | 100000 | **Tasa anual:** | 0.08 |
| 2 | **Periodo** | **Saldo inicial** | **Interés** | **Pago** | **Saldo final** |
| 3 | 1 | `=$B$1` | `=B3*$E$1/12` | 2000 | `=B3+C3-D3` |
| 4 | 2 | `=E3` | `=B4*$E$1/12` | 2000 | `=B4+C4-D4` |

### Caso 3: Comisiones por vendedor con tasa variable

Diferentes vendedores tienen diferentes tasas de comisión:

| A | B | C | D | E |
|---|---|---|---|---|
| 1 | **Vendedor** | **Ventas** | **Tasa** | **Comisión** | |
| 2 | Ana | 50000 | 0.05 | `=B2*$C2` | |
| 3 | Luis | 30000 | 0.03 | `=B3*$C3` | |
| 4 | Carla | 70000 | 0.07 | `=B4*$C4` | |

Aquí `$C2` es mixta: columna C fija (siempre la tasa), fila relativa (cambia por vendedor).

## Errores comunes

### Error 1: Olvidar el `$` en referencias absolutas
Copias una fórmula y la referencia se desplaza, rompiendo el cálculo.

**Solución:** Cuando tengas un valor que se repite (IVA, tipo de cambio, descuento), piensa: "¿Esta referencia debe moverse o no?". Si no debe moverse, usa `$`.

### Error 2: Poner `$` donde no se necesita
Usar `$A$1` en una fórmula que solo se copia verticalmente. Si solo se mueve en una dirección, una referencia mixta es más clara.

**Solución:** Analiza en qué dirección(es) se copiará la fórmula. La referencia debe coincidir.

### Error 3: Confundir fila y columna en referencias mixtas
En `$A1`, la columna A es fija. En `A$1`, la fila 1 es fija.

**Solución:** Memoriza: `$` delante de la letra = columna fija; `$` delante del número = fila fija.

### Error 4: No usar F4 por desconocimiento
Escribir `$A$1` manualmente en lugar de presionar F4 sobre `A1`.

**Solución:** Acostúmbrate a usar F4 mientras escribes fórmulas. Es más rápido y evita errores de sintaxis.

### Error 5: Referencias a otras hojas sin el signo `!`
Escribir `=EneroB5` en lugar de `=Enero!B5`.

**Solución:** Cuando hagas clic en una celda de otra hoja, Excel escribe la referencia correctamente. Siempre usa el clic para referencias entre hojas.

## Ejercicio paso a paso: Sistema de facturación

### Escenario de negocio
Eres contador y necesitas crear una plantilla de factura donde:
- Cada producto tiene cantidad y precio unitario
- El IVA (16%) está en una celda separada
- El tipo de cambio USD/EUR está en otra celda
- Las fórmulas deben funcionar al copiarse a nuevas filas

### Parte 1: Configurar la hoja
1. Abre un libro nuevo
2. En **A1** escribe `FACTURA / INVOICE`
3. En **A3:F3** escribe: `Producto`, `Cantidad`, `Precio Unitario`, `Importe USD`, `Importe EUR`, `IVA EUR`

### Parte 2: Datos de configuración (referencias absolutas)
1. En **H1** escribe `Tipo de Cambio:`
2. En **I1** escribe `0.92` (USD → EUR)
3. En **H2** escribe `IVA %:`
4. En **I2** escribe `0.16` (16%)
5. En **H3** escribe `Descuento %:`
6. En **I3** escribe `0` (0%, lo cambiaremos después)

### Parte 3: Productos y fórmulas (referencias mixtas y absolutas)
1. En **A4** escribe `Teclado`, **B4** `10`, **C4** `25.00`
2. En **A5** escribe `Mouse`, **B5** `20`, **C5** `12.50`
3. En **A6** escribe `Monitor`, **B6** `5`, **C6** `150.00`
4. En **A7** escribe `Laptop`, **B7** `2`, **C7** `800.00`
5. Deja la fila 8 para subtotales

### Parte 4: Fórmulas con referencias absolutas y mixtas
1. **D4** (Importe USD): `=B4*C4` → arrastra hasta D7
2. **E4** (Importe EUR): `=D4*$I$1` → arrastra hasta E7
   - `$I$1` es absoluta → siempre apunta al tipo de cambio
3. **F4** (IVA EUR): `=E4*$I$2` → arrastra hasta F7
   - `$I$2` es absoluta → siempre apunta al IVA
4. **G4** (Total EUR con IVA): `=E4+F4` → arrastra hasta G7

### Parte 5: Totales
1. **A8**: `SUBTOTALES`
2. **D8**: `=SUMA(D4:D7)`
3. **E8**: `=SUMA(E4:E7)`
4. **F8**: `=SUMA(F4:F7)`
5. **G8**: `=SUMA(G4:G7)`
6. **A9**: `DESCUENTO`
7. **G9**: `=G8*$I$3`
8. **A10**: `TOTAL FINAL`
9. **G10**: `=G8-G9`

### Parte 6: Probar la dinamización
1. Cambia el tipo de cambio en **I1** de `0.92` a `0.95` → todos los euros se actualizan
2. Cambia el IVA en **I2** de `0.16` a `0.21` → se actualiza el IVA de todos los productos
3. Cambia el descuento en **I3** de `0` a `0.10` → se aplica 10% de descuento al total
4. Agrega un nuevo producto en la fila 11 → ¿funcionan las fórmulas? (pista: necesitas expandir SUMA)

### Parte 7: Tabla de multiplicar con referencias mixtas
1. Crea una tabla de multiplicar del 1 al 10
2. A2:A11 → `1` a `10` (con relleno rápido: escribe 1, 2, selecciona y arrastra)
3. B1:K1 → `1` a `10`
4. B2: `=$A2*B$1`
5. Arrastra B2 hacia la derecha hasta K2, luego hacia abajo hasta K11
6. Verifica que cada celda muestre la multiplicación correcta (B2=1, C2=2, B3=2, C3=4...)
7. Si alguna celda no es correcta, revisa la fórmula de esa celda con F2

## Aspectos destacados (Key Takeaways)

- **Referencia relativa** (`A1`): se ajusta automáticamente al copiar → para cálculos que siguen un patrón
- **Referencia absoluta** (`$A$1`): siempre apunta a la misma celda → para valores fijos (IVA, tipo de cambio)
- **Referencia mixta** (`$A1` o `A$1`): solo una parte se fija → para tablas bidimensionales
- Usa **F4** mientras escribes fórmulas para alternar entre tipos de referencia
- Analiza la **dirección de copia** para decidir qué parte debe ser absoluta
- Las referencias a **otras hojas** usan el formato `=NombreHoja!Referencia`
- Un diseño correcto de referencias permite cambiar parámetros (IVA, tasa) en una sola celda y que todo el modelo se actualice
- Las referencias mixtas son ideales para **tablas de multiplicar**, **proyecciones** y **matrices de datos**

---

**Siguiente tema:** [03-Funciones-Basicas.md](03-Funciones-Basicas.md)
