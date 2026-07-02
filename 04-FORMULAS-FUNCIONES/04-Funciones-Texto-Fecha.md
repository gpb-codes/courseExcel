# Funciones de texto y fecha

Las funciones de texto y fecha son indispensables en el día a día de cualquier profesional de Excel. Las funciones de texto te permiten limpiar, formatear y extraer información de cadenas de caracteres. Las funciones de fecha te permiten calcular tiempos, plazos, antigüedades y vencimientos. Dominar ambos grupos te ahorrará horas de trabajo manual.

## Funciones de texto

### Por qué necesitas funciones de texto

Los datos del mundo real rara vez llegan limpios. Nombres en mayúsculas y minúsculas mezcladas, espacios extra, números de teléfono sin formato, direcciones incompletas... Las funciones de texto te permiten estandarizar y limpiar estos datos automáticamente.

### Tabla completa de funciones de texto

| Función | Qué hace | Ejemplo | Resultado |
|---------|----------|---------|-----------|
| CONCATENAR | Une varios textos en uno | =CONCATENAR(A1; " "; B1) | "Juan Pérez" |
| (operador &) | Alternativa moderna a CONCATENAR | =A1 & " " & B1 | "Juan Pérez" |
| CONCAT | Une listas de textos completas | =CONCAT(A1:A5) | "JuanAnaCarlos..." |
| TEXTO.UNIR | Une con delimitador, ignora vacíos | =TEXTO.UNIR(", "; VERDADERO; A1:A5) | "Juan, Ana, Carlos" |
| MAYUSC | Convierte a mayúsculas | =MAYUSC("excel") | "EXCEL" |
| MINUSC | Convierte a minúsculas | =MINUSC("EXCEL") | "excel" |
| NOMPROPIO | Primera letra de cada palabra en mayúscula | =NOMPROPIO("juan pérez lópez") | "Juan Pérez López" |
| LARGO | Cuenta caracteres | =LARGO("Excel") | 5 |
| EXTRAE | Extrae caracteres desde una posición | =EXTRAE("Excel 2024"; 7; 4) | "2024" |
| IZQUIERDA | Primeros N caracteres | =IZQUIERDA("Excel 2024"; 5) | "Excel" |
| DERECHA | Últimos N caracteres | =DERECHA("Excel 2024"; 4) | "2024" |
| ESPACIOS | Elimina espacios extra | =ESPACIOS("  Hola   Mundo  ") | "Hola Mundo" |
| HALLAR | Busca texto (distingue mayúsculas) | =HALLAR("excel"; "Aprende Excel") | 9 |
| ENCONTRAR | Busca texto (NO distingue mayúsculas) | =ENCONTRAR("excel"; "Aprende EXCEL") | 9 |
| REEMPLAZAR | Reemplaza en posición específica | =REEMPLAZAR("Hola Mundo"; 6; 5; "Excel") | "Hola Excel" |
| SUSTITUIR | Reemplaza texto específico global | =SUSTITUIR("2024-01-15"; "-"; "/") | "2024/01/15" |
| TEXTO | Número a texto con formato | =TEXTO(HOY(); "dddd dd/mmmm/aaaa") | "jueves 02/julio/2026" |
| VALOR | Texto a número | =VALOR("123") | 123 |
| IGUAL | Compara dos textos (distingue mayúsculas) | =IGUAL("SI"; "si") | FALSO |

### Casos prácticos de funciones de texto

#### Caso 1: Limpiar datos de clientes importados

Tienes nombres en un sistema legacy y necesitas estandarizarlos:

| A (Original) | B (Fórmula) | C (Resultado) |
|---|---|---|
| juan carlos pérez | =NOMPROPIO(A2) | Juan Carlos Pérez |
| MARÍA GARCÍA LÓPEZ | =NOMPROPIO(A3) | María García López |
|  pedro  luis   ramos  | =ESPACIOS(NOMPROPIO(A4)) | Pedro Luis Ramos |

#### Caso 2: Extraer año de una fecha en texto

| A | B (Fórmula) | Resultado |
|---|---|---|
| 15/01/2024 | =DERECHA(A1; 4) | "2024" |
| 15-01-2024 | =EXTRAE(A1; 7; 4) | "2024" |

#### Caso 3: Generar correo electrónico automático

| A | B | C (Fórmula) | Resultado |
|---|---|---|---|
| Juan | Pérez | =MINUSC(A2) & "." & MINUSC(B2) & "@empresa.com" | juan.perez@empresa.com |

#### Caso 4: Validar longitud de datos

Tarjetas de crédito deben tener 16 dígitos:

| A (Tarjeta) | B (Fórmula) | Resultado |
|---|---|---|
| 1234567890123456 | =LARGO(A2)=16 | VERDADERO |
| 12345678 | =LARGO(A3)=16 | FALSO |

#### Caso 5: Extraer nombre de un correo electrónico

| A | B (Fórmula) | Resultado |
|---|---|---|
| juan.perez@empresa.com | =IZQUIERDA(A2; ENCONTRAR("@"; A2)-1) | juan.perez |

### Unir textos con &

El operador & es la forma más moderna y rápida de unir textos:

`
=A1 & " " & B1
`

Ventajas sobre CONCATENAR:
- Menos escritura
- Más legible
- Se combina fácilmente con funciones

| Fórmula | Resultado |
|---------|-----------|
| =A1 & " - " & B1 | "Producto - " |
| ="Total: $" & C1 | "Total: " |
| =A1 & " (" & B1 & " unidades)" | "Laptop (10 unidades)" |

### TEXTO.UNIR (la evolución de CONCATENAR)

Disponible en Excel 2019 y Office 365:

`
=TEXTO.UNIR(delimitador; ignorar_vacíos; texto1; [texto2]; ...)
`

| Parámetro | Descripción |
|-----------|-------------|
| delimitador | Qué va entre cada texto (ej: ", " o "; ") |
| ignorar_vacíos | VERDADERO para saltar celdas vacías |
| texto1, texto2... | Los textos o rangos a unir |

**Ejemplo:** =TEXTO.UNIR(", "; VERDADERO; A1:A10) → "Juan, Ana, Carlos, María..."

## Funciones de fecha

### Cómo almacena Excel las fechas

Excel almacena las fechas como números enteros (serial number):
- 1 = 1 de enero de 1900
- 2 = 2 de enero de 1900
- 45000 = 15 de marzo de 2023 (aproximadamente)

Esto permite:
- **Sumar días**: =A1+30 → 30 días después de la fecha en A1
- **Restar fechas**: =B1-A1 → días entre dos fechas
- **Ordenar cronológicamente**: al ser números, el orden funciona naturalmente

### Tabla de funciones de fecha

| Función | Qué hace | Ejemplo | Resultado |
|---------|----------|---------|-----------|
| HOY() | Fecha actual (se actualiza cada día) | =HOY() | 02/07/2026 |
| AHORA() | Fecha y hora actual | =AHORA() | 02/07/2026 14:30 |
| DIA(fecha) | Extrae el día de una fecha | =DIA("15/01/2024") | 15 |
| MES(fecha) | Extrae el mes (1-12) | =MES("15/01/2024") | 1 |
| AÑO(fecha) | Extrae el año | =AÑO("15/01/2024") | 2024 |
| DIASEM(fecha) | Día de la semana (1=domingo) | =DIASEM("15/01/2024") | 2 |
| FECHA(año; mes; día) | Crea una fecha | =FECHA(2024; 1; 15) | 15/01/2024 |
| FECHANUMERO(texto) | Convierte texto a fecha | =FECHANUMERO("15-ene-2024") | 15/01/2024 |
| DIAS.LAB(inicio; fin) | Días laborables entre fechas | =DIAS.LAB(A1; B1) | 22 |
| DIAS.LAB.INTL(inicio; fin; fin_de_semana) | Días laborables personalizado | =DIAS.LAB.INTL(A1; B1; 11) | 22 (solo domingo libre) |
| SIFECHA(inicio; fin; unidad) | Diferencia en años/meses/días | =SIFECHA(A1; B1; "m") | 6 (meses) |
| FECHAMES(fecha; meses) | Suma/resta meses a una fecha | =FECHAMES("15/01/2024"; 3) | 15/04/2024 |
| FRAC.AÑO(inicio; fin) | Fracción de año entre fechas | =FRAC.AÑO(A1; B1) | 0.5 (medio año) |
| HORA(fecha_hora) | Extrae la hora | =HORA(AHORA()) | 14 |
| MINUTO(fecha_hora) | Extrae los minutos | =MINUTO(AHORA()) | 30 |
| SEGUNDO(fecha_hora) | Extrae los segundos | =SEGUNDO(AHORA()) | 15 |

### Calcular días entre fechas

**Días calendario:** simplemente resta las fechas:

`
= B1 - A1
`

| A (Inicio) | B (Fin) | C (Fórmula) | Resultado |
|---|---|---|---|
| 01/01/2024 | 15/01/2024 | =B2-A2 | 14 |
| 01/01/2024 | 15/03/2024 | =B3-A3 | 74 |

**Días laborables:** excluye fines de semana (y opcionalmente festivos):

`
=DIAS.LAB(inicio; fin; [festivos])
`

| A (Inicio) | B (Fin) | C (Fórmula) | Resultado |
|---|---|---|---|
| 01/01/2024 | 15/01/2024 | =DIAS.LAB(A2; B2) | 11 (vs 14 calendario) |
| 01/01/2024 | 15/01/2024 | =DIAS.LAB(A3; B3; F1:F3) | 10 (excluye 3 festivos) |

**Meses entre fechas:** con SIFECHA:

`
=SIFECHA(inicio; fin; "m")
`

| Unidad | Significado | Ejemplo |
|--------|-------------|---------|
| "y" | Años completos | SIFECHA(01/01/2020; 01/01/2024; "y") → 4 |
| "m" | Meses completos | SIFECHA(01/01/2024; 01/03/2024; "m") → 2 |
| "d" | Días completos | SIFECHA(01/01/2024; 15/01/2024; "d") → 14 |
| "ym" | Meses restantes después de años | SIFECHA(01/01/2020; 01/03/2024; "ym") → 2 |
| "yd" | Días restantes después de años | SIFECHA(01/01/2020; 15/01/2024; "yd") → 14 |

> Pro Tip: SIFECHA no aparece en la lista de autocompletado ni en la ayuda de Excel. Es una función "oculta". Pero funciona perfectamente. Escríbela manualmente.

### Sumar y restar tiempo a fechas

| Operación | Fórmula | Resultado |
|-----------|---------|-----------|
| +30 días | =A1+30 | Fecha + 30 días |
| +3 meses | =FECHAMES(A1; 3) | Mismo día, 3 meses después |
| +1 año | =FECHA(AÑO(A1)+1; MES(A1); DIA(A1)) | Mismo día, 1 año después |
| +2 horas | =A1 + 2/24 | Fecha + 2 horas |
| +30 minutos | =A1 + 30/1440 | Fecha + 30 minutos |

### Aplicación: Formato condicional con fechas

El formato condicional combinado con funciones de fecha es extremadamente poderoso:

**Resaltar vencimientos próximos (7 días):**
1. Selecciona el rango de fechas
2. Inicio > Formato condicional > Nueva regla > Usar fórmula
3. Fórmula: =Y(A1>HOY(); A1-HOY()<=7)
4. Formato: relleno rojo, texto blanco

**Resaltar celdas con fecha pasada (vencidas):**
1. Fórmula: =A1<HOY()
2. Formato: relleno gris, texto tachado

**Resaltar fines de semana:**
1. Fórmula: =O(DIASEM(A1)=1; DIASEM(A1)=7)
2. Formato: relleno amarillo claro

### Función TEXTO con fechas

La función TEXTO convierte una fecha en texto con el formato que especifiques:

`
=TEXTO(fecha; "formato")
`

| Formato | Resultado (ejemplo) |
|---------|---------------------|
| "dd/mm/aaaa" | 15/01/2024 |
| "dddd dd/mmmm/aaaa" | lunes 15/enero/2024 |
| "mmmm aaaa" | enero 2024 |
| "dddd" | lunes |
| "aaa" | lun |
| "mm-aa" | 01-24 |

## Errores comunes

### Error 1: Fecha como texto
Escribes 15-ene-2024 y Excel no lo reconoce como fecha. Lo trata como texto.

**Solución:** Usa =FECHA(2024; 1; 15) o =FECHANUMERO("15-ene-2024").

### Error 2: Restar fechas en orden incorrecto
=A1-B1 donde A1 es anterior a B1 → resultado negativo.

**Solución:** Siempre usa fecha_fin - fecha_inicio. O usa =ABS(B1-A1) para valor absoluto.

### Error 3: Confundir el signo para concatenar
Usar + para unir textos: =A1+B1 da #VALOR! si son textos.

**Solución:** Usa & para unir textos: =A1 & B1.

### Error 4: No actualizar HOY() en libros congelados
Si abres un libro meses después, HOY() mostrará la fecha actual, no la fecha en que se creó el reporte.

**Solución:** Si necesitas la fecha fija del día que creaste el reporte, usa Ctrl + ; (punto y coma) para insertar la fecha como valor fijo.

### Error 5: Diferencia entre DIAS.LAB con y sin festivos
DIAS.LAB sin el tercer argumento solo excluye sábados y domingos. Puede dar resultados inexactos si hay días festivos entre las fechas.

**Solución:** Crea una lista de días festivos en una columna auxiliar y pásala como tercer argumento.

### Error 6: Usar CONCATENAR en lugar de & o TEXTO.UNIR
CONCATENAR está disponible pero es más limitado. En Excel moderno, usa & o TEXTO.UNIR.

## Ejercicio paso a paso: Control de vencimientos de contratos

### Escenario de negocio
Eres administrador de contratos y necesitas crear un sistema de control de vencimientos. Tienes la fecha de inicio y la duración en meses de cada contrato. Debes calcular la fecha de vencimiento, los días restantes y clasificar el estado.

### Parte 1: Estructura de datos
1. Abre un libro nuevo
2. En **A1:F1** escribe: Contrato, Cliente, Inicio, Duración (meses), Vencimiento, Días restantes, Estado

### Parte 2: Datos de ejemplo
1. En **A2:A6** escribe: C-001 a C-005
2. En **B2:B6** escribe nombres de clientes: Empresa A, Empresa B, etc.
3. En **C2:C6** escribe fechas de inicio variadas (usa =FECHA(2024; 1; 15) etc.)
4. En **D2:D6** escribe duraciones: 12, 6, 24, 3, 18

### Parte 3: Calcular vencimiento y días restantes
1. **E2** (Vencimiento): =FECHAMES(C2; D2) → arrastra hasta E6
   - FECHAMES suma la duración en meses a la fecha de inicio
2. **F2** (Días restantes): =E2-HOY() → arrastra hasta F6
   - Muestra días hasta el vencimiento (negativo si ya venció)
3. **G2** (Estado): =SI(F2<0; "VENCIDO"; SI(F2<=30; "Por vencer"; "Vigente"))
   - Usamos la función SI (la veremos en profundidad más adelante)

### Parte 4: Formato condicional
1. Selecciona **E2:E6** > Formato condicional > Resaltar celdas > Menor que > =HOY() > formato rojo
   - Esto resalta contratos vencidos
2. Selecciona **F2:F6** > Formato condicional > Reglas superiores/inferiores > Menor que > 30 > formato amarillo
   - Esto resalta contratos por vencer próximamente

### Parte 5: Limpiar nombres de clientes
1. Copia los nombres de B2:B6 y pégalos como valores en H2:H6
2. En **H2** escribe JUAN CARLOS (en mayúsculas, con espacios)
3. En **I2**: =ESPACIOS(NOMPROPIO(H2)) → "Juan Carlos"
4. En **H3** escribe  MARÍA  GARCÍA 
5. En **I3**: =ESPACIOS(NOMPROPIO(H3)) → "María García"

### Parte 6: Generar IDs de contrato automáticos
1. En **J2**: ="CTG-" & AÑO(C2) & "-" & TEXTO(FILA()-1; "000")
   - Resultado: "CTG-2024-001"

### Parte 7: Bonus - Función HOY fija vs dinámica
1. En **K1**: =HOY() (dinámica, cambiará cada día)
2. En **K2**: Presiona Ctrl + ; (inserta la fecha actual como valor fijo)
3. Vuelve a abrir el libro mañana: K1 habrá cambiado, K2 no

### Parte 8: Edad de los empleados (días transcurridos)
1. En **A10** escribe Empleado, **B10** Fecha Nacimiento, **C10** Edad
2. En **A11:A15** escribe nombres
3. En **B11:B15** escribe fechas de nacimiento
4. En **C11**: =SIFECHA(B11; HOY(); "y") → Calcula años exactos
5. En **D11**: =SIFECHA(B11; HOY(); "ym") → Meses restantes después de los años
6. En **E11**: =SIFECHA(B11; HOY(); "md") → Días restantes después de los meses
7. En **F11**: =C11 & " años, " & D11 & " meses, " & E11 & " días" → Texto completo

## Aspectos destacados (Key Takeaways)

- Las funciones de texto permiten **limpiar, estandarizar y extraer** información de cadenas
- El operador & es la forma más eficiente de unir textos en Excel moderno
- NOMPROPIO + ESPACIOS es la combinación ideal para limpiar nombres importados
- TEXTO.UNIR es superior a CONCATENAR para unir rangos con delimitador
- Excel almacena las fechas como números (serial numbers), lo que permite operaciones aritméticas
- Resta dos fechas para obtener días entre ellas: =B1-A1
- FECHAMES suma meses a una fecha de forma precisa
- SIFECHA calcula diferencias en años, meses o días sin redondeos
- HOY() es dinámica (cambia cada día); Ctrl + ; inserta fecha fija
- Combina funciones de fecha con formato condicional para alertas de vencimiento

---

**Siguiente tema:** [05-Errores-Formulas.md](05-Errores-Formulas.md)
