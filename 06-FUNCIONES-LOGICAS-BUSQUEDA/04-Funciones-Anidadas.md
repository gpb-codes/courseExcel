# Anidamiento de funciones

Anidar funciones significa poner una función **dentro de otra** como argumento. Es como las muñecas rusas: una función contiene a otra, que contiene a otra... Esto te permite resolver problemas complejos en una **sola celda** sin necesidad de columnas auxiliares.

---

## ¿Por qué anidar funciones?

| Sin anidar (varias celdas) | Con anidamiento (una celda) |
|----------------------------|----------------------------|
| Celda B1: `=A1/B1` | `=SI.ERROR(A1/B1; 0)` |
| Celda C1: `=ESERROR(B1)` | |
| Celda D1: `=SI(C1; 0; B1)` | |

El anidamiento reduce el número de celdas necesarias, hace las hojas más limpias y facilita la auditoría de las fórmulas.

---

## Cómo evalúa Excel las funciones anidadas

Excel evalúa las funciones **de adentro hacia afuera** (de la función más interna a la más externa).

### Ejemplo: división segura

`=SI(ESERROR(A1/B1); 0; A1/B1)`

**Paso a paso con A1=10, B1=0:**
1. Primero: `A1/B1` → `10/0` → `#¡DIV/0!` (error)
2. Segundo: `ESERROR(#¡DIV/0!)` → `VERDADERO`
3. Tercero: `SI(VERDADERO; 0; A1/B1)` → `0`

**Paso a paso con A1=10, B1=2:**
1. Primero: `A1/B1` → `10/2` → `5`
2. Segundo: `ESERROR(5)` → `FALSO`
3. Tercero: `SI(FALSO; 0; A1/B1)` → `5`

### Regla fundamental

> La función más interna se evalúa primero. Su resultado se convierte en el argumento de la función que la contiene.

---

## Ejemplos de anidamiento por nivel

### Nivel 1: Texto + fecha

`="Hoy es " & TEXTO(HOY(); "dddd dd de mmmm de yyyy")`

**Resultado:** "Hoy es jueves 02 de julio de 2026"

**Anatomía:**
- `HOY()` → devuelve la fecha actual (02/07/2026)
- `TEXTO(fecha; "formato")` → convierte la fecha al texto "jueves 02 de julio de 2026"
- `&` → concatena "Hoy es " con el texto anterior

**Otros formatos útiles con TEXTO:**

| Formato | Resultado |
|---------|-----------|
| `"dddd dd de mmmm de yyyy"` | jueves 02 de julio de 2026 |
| `"dd/mm/aaaa"` | 02/07/2026 |
| `"mmmm aaaa"` | julio 2026 |
| `"ddd"` | jue |
| `"0.00%"` | 12.50% (convierte 0.125 en "12.50%") |

### Nivel 2: Manejo de errores

`=SI.ERROR(PROMEDIO(A1:A10); "Sin datos")`

Si el rango A1:A10 contiene algún error, `PROMEDIO` devolvería error. `SI.ERROR` lo captura y muestra "Sin datos".

### Nivel 3: Búsqueda segura + condicional

`=SI(BUSCARV(D2; A:B; 2; FALSO)>1000; "Alto"; "Bajo")`

1. `BUSCARV(D2; A:B; 2; FALSO)` → busca y devuelve un precio
2. El resultado se compara: `>1000` → VERDADERO o FALSO
3. `SI(...)` → muestra "Alto" o "Bajo"

### Nivel 4: Triple anidamiento

`=SI.ERROR(SI(BUSCARV(E1; $A$1:$C$10; 3; FALSO)>=100; "Caro"; "Barato"); "No encontrado")`

1. Busca el producto
2. Evalúa si es >= 100
3. Muestra "Caro" o "Barato"
4. Si hay error (producto no existe), muestra "No encontrado"

---

## Estructura visual del anidamiento

Para entender fórmulas complejas, ayuda ver la indentación:

```
=SI(
    Y(
        A1>=60;
        O(
            B1="Aprobado";
            B1="Exento"
        )
    );
    "Certificado";
    "No certificado"
)
```

Cada nivel de indentación representa una función anidada dentro de otra.

---

## Buenas prácticas para anidar funciones

### 1. Divide y vencerás: construye paso a paso

En lugar de escribir toda la fórmula de golpe:

| Paso | Celda | Fórmula | Resultado |
|------|-------|---------|-----------|
| 1 | Z1 | `=A1/B1` | 5 o error |
| 2 | Z2 | `=ESERROR(Z1)` | VERDADERO/FALSO |
| 3 | Z3 | `=SI(Z2; 0; Z1)` | Resultado final |
| **Final** | C1 | `=SI(ESERROR(A1/B1); 0; A1/B1)` | Todo en una |

Una vez que funciona, puedes **anidar** combinando los pasos.

### 2. Usa la barra de fórmulas

Haz clic en el texto de la fórmula dentro de la barra de fórmulas. Excel muestra cada función con un tooltip y colorea los argumentos correspondientes.

### 3. Paréntesis de colores

Excel colorea los pares de paréntesis coincidentes. Si ves un color que no cierra, falta o sobra un paréntesis.

| Problema | Señal |
|----------|-------|
| Faltan paréntesis | Excel no acepta la fórmula o da error |
| Sobran paréntesis | Paréntesis sin función coincidente |
| Color extraño | Un paréntesis está cerrando en el lugar equivocado |

### 4. Evaluar fórmula (herramienta de depuración)

**Fórmulas > Evaluar fórmula** (o `Alt + M + V`)

Esta herramienta ejecuta la fórmula **paso a paso**:
1. Subraya la parte que se evaluará.
2. Haz clic en **Evaluar** para ejecutar esa parte.
3. Repite hasta ver el resultado final.

Es la mejor forma de entender y depurar fórmulas anidadas.

### 5. Límite de anidamiento

Excel permite hasta **64 niveles** de funciones anidadas. Sin embargo:

| Niveles | Recomendación |
|---------|---------------|
| 1-3 | Anidamiento directo, claro y legible |
| 4-5 | Considera si vale la pena o mejor usar celdas auxiliares |
| 6+ | **No lo hagas.** Divide en celdas auxiliares o usa `LET` (Excel 365) |

---

## PRO TIPS

> **Pro Tip #1 — Función LET (Excel 365)**
> `LET` te permite definir variables dentro de una fórmula. Ejemplo:
> `=LET(promedio; PROMEDIO(A1:A10); SI(promedio>=60; "Aprueba"; "Reprueba"))`
> Así evitas repetir cálculos y la fórmula es más legible.

> **Pro Tip #2 — Anidar con formato condicional**
> Crea reglas avanzadas de formato condicional usando funciones anidadas. Ej: resaltar filas completas donde `Y(B2>=10000; C2>=95)`.

> **Pro Tip #3 — Nombres definidos para simplificar**
> Si una fórmula anidada usa el mismo rango varias veces, define un nombre (Fórmulas > Definir nombre). Ej: nombrar `$A$1:$C$100` como `Datos` y usar `Datos` en la fórmula.

> **Pro Tip #4 — Combinar con validación de datos**
> Puedes anidar funciones en la validación de datos personalizada. Ej: `=Y(C2>=18; D2>0)` asegura que edad >= 18 Y sueldo > 0.

---

## Escenario empresarial: reporte automatizado de desempeño

Eres analista de RH y necesitas una fórmula que, para cada empleado, evalúe:

- Si tiene **ventas >= 15000** → "Oro"
- Si no, pero tiene **ventas >= 10000** → "Plata"
- Si no, **promedio de sus 3 meses** >= 90 → "Bronce por desempeño"
- Si no → "Sin categoría"

Además, si el empleado no existe en la base de datos, debe decir "Empleado no encontrado".

### Solución con anidamiento

`=SI.ERROR(SI(B2>=15000; "Oro"; SI(B2>=10000; "Plata"; SI(PROMEDIO(C2:E2)>=90; "Bronce por desempeño"; "Sin categoría"))); "Empleado no encontrado")`

### Ejemplo de datos

| Empleado | Ventas | Mes1 | Mes2 | Mes3 | Categoría |
|----------|--------|------|------|------|-----------|
| Ana López | 18000 | 95 | 92 | 98 | `=SI.ERROR(SI(B2>=15000; "Oro"; SI(B2>=10000; "Plata"; SI(PROMEDIO(C2:E2)>=90; "Bronce"; "Sin categoría"))); "No encontrado")` → **Oro** |
| Luis Pérez | 8000 | 91 | 88 | 93 | → **Bronce por desempeño** (promedio >= 90) |
| Error | #N/A | | | | → **Empleado no encontrado** |

---

## Errores comunes

| Error | Descripción | Solución |
|-------|-------------|----------|
| **`#¿NOMBRE?`** | La función no existe o está mal escrita | Revisa la ortografía de la función (en español) |
| **`#¡VALOR!`** | Tipo de dato incorrecto en algún argumento | Usa `TEXTO`, `VALOR` o `NUMERO` para convertir tipos |
| **Falta paréntesis de cierre** | Excel muestra error "Fórmula incorrecta" | Cuenta los paréntesis de apertura y cierre |
| **Demasiados argumentos** | Función recibe más argumentos de los esperados | Revisa la sintaxis de cada función |
| **Resultado inesperado** | Error lógico en la combinación de funciones | Usa **Evaluar fórmula** paso a paso |
| **Excel lento** | Demasiadas fórmulas anidadas con rangos grandes | Reduce rangos o usa celdas auxiliares |

---

## Ejercicio práctico completo

### Parte 1: Manejo seguro de errores

1. En **A1:A5** escribe: `100`, `200`, `texto`, `300`, `400`.
2. En **C1**: `=PROMEDIO(A1:A5)` → observa que da error por el texto.
3. En **C2**: `=SI.ERROR(PROMEDIO(A1:A5); "Error en datos")` → muestra "Error en datos"
4. En **C3**: `=SI.ERROR(SUMA(A1:A5); 0)` → muestra 1000 (SUMA ignora texto)
5. En **C4**: `="Total: " & SI.ERROR(SUMA(A1:A5); "sin datos")` → "Total: 1000"

### Parte 2: SI anidado con Y y O

1. En **A7** escribe `90`, **A8** `50`, **A9** `80`.
2. En **B7**: `=SI(Y(A7>=60; O(A8>=60; A9>=60)); "Pasa"; "No pasa")`
   - A7=90>=60? SÍ. ¿A8>=60? NO, ¿A9>=60? SÍ → O da SÍ → Y da SÍ → "Pasa"
3. Arrastra la fórmula a B8. Debe mostrar "No pasa".

### Parte 3: BUSCARV anidado con SI

1. En **A1:C5** crea:

| A | B | C |
|---|---|---|
| Código | Producto | Precio |
| P001 | Laptop | 800 |
| P002 | Mouse | 25 |
| P003 | Teclado | 45 |
| P004 | Monitor | 250 |

2. En **E1** escribe `P003`.
3. En **F1**: `=SI(BUSCARV(E1; $A$1:$C$5; 3; FALSO)>100; "Caro"; "Barato")`
4. Con P003 → 45 > 100? NO → "Barato"
5. Cambia E1 a P001 → 800 > 100? SÍ → "Caro"
6. Cambia E1 a P099 → `#N/A`

### Parte 4: Máximo anidamiento seguro

1. En **F2**: `=SI.ERROR(SI(BUSCARV(E1; $A$1:$C$5; 3; FALSO)>=500; "Premium"; "Estándar"); "No existe")`
2. P001 (800) → "Premium"
3. P003 (45) → "Estándar"
4. P099 → "No existe"

### Parte 5: Combinación completa

1. En **A10** escribe `Nombre`, **B10** `Ventas`, **C10** `Asistencia`, **D10** `Resultado`.
2. En **A11** escribe `Ana`, **B11** 12000, **C11** 98.
3. En **D11** crea una fórmula anidada que:
   - Si Ventas >= 15000 → "Excelente"
   - Si Ventas >= 10000 Y Asistencia >= 95 → "Muy bueno"
   - Si Ventas >= 10000 → "Bueno" (pero con asistencia < 95)
   - Si Ventas < 10000 → "Requiere mejora"
   - Si hay error → "Revisar datos"

**Solución:** `=SI.ERROR(SI(B11>=15000; "Excelente"; SI(Y(B11>=10000; C11>=95); "Muy bueno"; SI(B11>=10000; "Bueno"; "Requiere mejora"))); "Revisar datos")`

### Parte 6: Usar Evaluar fórmula

1. Selecciona la celda con la fórmula más compleja.
2. Ve a **Fórmulas > Evaluar fórmula**.
3. Haz clic en **Evaluar** repetidamente para ver cómo Excel procesa cada paso.
4. Observa el orden de evaluación (de adentro hacia afuera).
5. Guarda como `06-anidadas.xlsx`.

---

## Key Takeaways

- **Anidar** es poner una función dentro de otra para resolver problemas complejos en una celda.
- Excel evalúa **de adentro hacia afuera** — la función más interna primero.
- Construye fórmulas complejas **paso a paso** en celdas auxiliares y luego combínalas.
- Usa **Evaluar fórmula** (`Alt + M + V`) para depurar paso a paso.
- Más de 5 niveles de anidamiento: considera **celdas auxiliares** o la función `LET`.
- `SI.ERROR` es el mejor aliado para anidar búsquedas y operaciones que pueden fallar.
- Los **paréntesis de colores** en la barra de fórmulas ayudan a identificar errores de sintaxis.

---

**Siguiente módulo:** [07-VISUALIZACION](../07-VISUALIZACION/01-Graficos-Basicos.md)
