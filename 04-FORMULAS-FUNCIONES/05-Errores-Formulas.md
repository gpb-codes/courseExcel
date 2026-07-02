# Gestión de errores en fórmulas

Los errores en las fórmulas son normales, incluso para usuarios avanzados. La diferencia entre un principiante y un experto no es que el experto nunca cometa errores, sino que sabe identificar rápidamente qué significa cada error y cómo solucionarlo. En esta lección aprenderás a interpretar, diagnosticar y prevenir los errores más comunes en Excel.

## Tipos de error y su significado

### Tabla completa de errores

| Error | Significado | Causa común |
|-------|-------------|-------------|
| #¡DIV/0! | División entre cero | Dividiste entre una celda vacía o con valor 0 |
| #¿NOMBRE? | Nombre no reconocido | Escribiste mal el nombre de una función o falta un rango |
| #N/A | No disponible | Una función de búsqueda (BUSCARV, XLOOKUP) no encontró el valor |
| #¡REF! | Referencia inválida | Eliminaste una celda, fila o columna que la fórmula usaba |
| #¡VALOR! | Tipo de dato incorrecto | Intentaste sumar texto como si fuera número |
| #¡NUM! | Número inválido | Número demasiado grande, pequeño, o cálculo inválido |
| #NULO! | Intersección nula | Dos rangos que no se cruzan |
| #CALC! | Error de cálculo | Error en funciones de matriz dinámica o bucle sin fin |
| #¡DESBORDAR! | Desbordamiento | Resultado de una fórmula de matriz que se extiende más allá de la hoja |
| #¡CAMPO! | Campo no encontrado | Error en Power Query o conexiones de datos |
| #CONEXIÓN! | Conexión perdida | Referencia a un libro externo que no está disponible |

### Ejemplos visuales de cada error

| Fórmula | Error | Por qué |
|---------|-------|---------|
| =10/0 | #¡DIV/0! | División entre cero |
| =10/A1 (A1 vacía) | #¡DIV/0! | Excel trata la celda vacía como 0 |
| =SUMA(A1:A10) escrito =SUMA(A1:A10 | #¿NOMBRE? | Paréntesis faltante o función mal escrita |
| =BUSCARV("Ana"; A1:B10; 3; FALSO) | #¡REF! | Columna índice 3 no existe (solo hay A y B) |
| =BUSCARV("Pedro"; A1:B10; 2; FALSO) si no existe Pedro | #N/A | Valor buscado no encontrado |
| =A1+B1 donde A1="Hola" y B1=5 | #¡VALOR! | Suma de texto + número |
| =A1:C1 A3:C5 | #NULO! | Los rangos A1:C1 y A3:C5 no se cruzan |

## Estrategias para debuggear errores

### Método 1: Hacer clic en la celda con error

Al seleccionar una celda con error, aparece un icono de advertencia ⚠️ con opciones:

| Opción | Descripción |
|--------|-------------|
| Ayuda sobre este error | Abre la documentación de Microsoft |
| Mostrar pasos de cálculo | Abre el evaluador de fórmulas |
| Omitir error | Marca la celda como "error ignorado" (tiene un borde verde) |
| Modificar en la barra de fórmulas | Editar directamente la fórmula |
| Opciones de comprobación de errores | Configurar cómo Excel detecta errores |

### Método 2: Rastrear precedentes y dependientes

Fórmulas > Auditoría de fórmulas:

| Herramienta | Qué hace | Atajo |
|-------------|----------|-------|
| **Rastrear precedentes** | Muestra flechas desde la fórmula hacia las celdas que usa | Alt + T + U + T |
| **Rastrear dependientes** | Muestra flechas desde la celda hacia las fórmulas que la usan | Alt + T + U + D |
| **Quitar flechas** | Elimina las flechas de rastreo | |

### Método 3: Evaluar fórmula (paso a paso)

Fórmulas > Auditoría de fórmulas > Evaluar fórmula (o selecciona la celda y presiona la herramienta)

Esta herramienta te muestra cómo Excel evalúa la fórmula **paso a paso**:
1. Abre el evaluador
2. Haz clic en **Evaluar** para ver cada operación en orden
3. Observa cómo Excel resuelve primero los paréntesis internos
4. Identifica exactamente en qué paso ocurre el error

**Ejemplo:** Evalúa =(A1+B1)*C1 → primero suma A1+B1, luego multiplica por C1

### Método 4: Ver todas las fórmulas de la hoja

Presiona Ctrl + ~ (tilde) para alternar entre mostrar resultados y mostrar fórmulas.

**Usos:**
- Verificar que todas las fórmulas en una columna sigan el mismo patrón
- Identificar celdas con valores escritos manualmente (no tienen =)
- Depurar fórmulas largas comparando patrones

### Método 5: Comprobación de errores

Fórmulas > Auditoría de fórmulas > Comprobar errores → Excel examina toda la hoja y te lleva a cada celda con error, ofreciendo sugerencias.

## Función SI.ERROR (la más importante para manejar errores)

### Sintaxis

`
=SI.ERROR(valor; valor_si_error)
`

| Parámetro | Descripción |
|-----------|-------------|
| valor | La fórmula o expresión que quieres evaluar |
| valor_si_error | Qué mostrar si la fórmula da cualquier error |

### Cómo funciona

SI.ERROR captura **cualquier tipo de error** (#¡DIV/0!, #N/A, #¡VALOR!, etc.) y muestra un valor alternativo en su lugar.

### Ejemplos prácticos

| Escenario | Sin SI.ERROR | Con SI.ERROR |
|-----------|-------------|--------------|
| División entre cero | #¡DIV/0! | =SI.ERROR(A1/B1; "N/A") → "N/A" |
| Búsqueda no encontrada | #N/A | =SI.ERROR(BUSCARV(...); "No encontrado") |
| Suma con texto | #¡VALOR! | =SI.ERROR(A1+B1; 0) → 0 |

### Ejemplo de negocio: Reporte de márgenes

| A | B | C | D (Sin SI.ERROR) | D (Con SI.ERROR) |
|---|---|---|---|---|
| Producto | Ingreso | Costo | =B2/C2 (margen) | =SI.ERROR(B2/C2; "Sin costo") |
| Producto 1 | 100 | 50 | 2.00 | 2.00 |
| Producto 2 | 200 | 0 | #¡DIV/0! | Sin costo |
| Producto 3 | 150 | 75 | 2.00 | 2.00 |
| Producto 4 | 0 | 0 | #¡DIV/0! | Sin costo |

> Pro Tip: Usa SI.ERROR para limpiar reportes que serán vistos por otras personas. Los errores se ven poco profesionales. En su lugar, muestra mensajes claros como "No disponible" o "Pendiente".

## Función SI.ND (específica para #N/A)

### Sintaxis

`
=SI.ND(valor; valor_si_na)
`

Similar a SI.ERROR, pero solo captura errores #N/A. Deja pasar otros tipos de error (como #¡DIV/0! o #¡VALOR!).

### Cuándo usar SI.ND vs SI.ERROR

| Función | Captura | Úsala cuando... |
|---------|---------|-----------------|
| SI.ERROR | Todos los errores | Quieres una solución general |
| SI.ND | Solo #N/A | Quieres que otros errores se muestren para debuggear |

## Función ESERROR (detección de errores)

### Sintaxis

`
=ESERROR(valor)
`

Devuelve VERDADERO si el valor es cualquier error, FALSO si no.

### Uso práctico

1. Verificar si una celda tiene error antes de usarla en un cálculo
2. Combinada con SI para acciones condicionales

`
=SI(ESERROR(A1); "Error detectado"; A1*2)
`

| A1 | Fórmula | Resultado |
|----|---------|-----------|
| 5 | =SI(ESERROR(A1); "Error"; A1*2) | 10 |
| #¡DIV/0! | =SI(ESERROR(A1); "Error"; A1*2) | "Error detectado" |

## Función ES.ND (específica para #N/A)

`
=ES.ND(valor)
`

Devuelve VERDADERO solo si el valor es #N/A. Útil para verificar resultados de búsquedas.

## Errores comunes de principiantes (y cómo evitarlos)

### Error: Olvidar el signo =

Si escribes A1+B1 sin el =, Excel lo trata como texto. La celda muestra literalmente "A1+B1".

**Solución:** Siempre comienza con =. Si ves texto donde esperas un resultado, revisa el inicio de la fórmula.

### Error: Paréntesis desbalanceados

Toda función necesita su paréntesis de cierre. =SUMA(A1:A10 falta el ) final.

**Solución:** Al escribir, cuenta los paréntesis. Excel colorea los pares para ayudarte. Si ves #¿NOMBRE?, revisa los paréntesis.

### Error: Separador incorrecto según el idioma

En Excel español, los argumentos se separan con ; (punto y coma). En inglés, con , (coma).

| Región | Decimal | Separador de argumentos |
|--------|---------|------------------------|
| Español | , (coma) | ; (punto y coma) |
| Inglés | . (punto) | , (coma) |

**Solución:** Configura tu Excel en el idioma correcto. Si trabajas con archivos de otra región, verifica los separadores.

### Error: Rango incorrecto

Usar A1:A10 cuando debió ser A1:B10, o A1:A50 cuando los datos llegan hasta A100.

**Solución:** Siempre verifica los límites del rango, especialmente después de agregar filas. Usa Tablas de Excel para rangos dinámicos.

### Error: No actualizar rangos al agregar datos

Tienes =SUMA(A1:A50) y agregas datos en A51. La suma no incluirá A51.

**Solución:** Usa rangos más grandes (=SUMA(A1:A1000)) o convierte el rango en Tabla de Excel.

### Error: Celdas con formato Texto

Una celda con formato "Texto" puede tener =SUMA(A1:A10) visible como texto, no como resultado.

**Solución:** Cambia el formato de la celda a General, luego vuelve a escribir la fórmula (o presiona F2 + Enter).

### Error: Referencias circulares

Una fórmula que se referencia a sí misma, directa o indirectamente:
- Directa: =A1+1 en la celda **A1** (A1 se referencia a sí misma)
- Indirecta: A1 = B1+1, B1 = A1+1 (referencia circular entre dos celdas)

**Solución:** Excel te avisa con un mensaje de "Referencia circular". Ve a Fórmulas > Auditoría de fórmulas > Comprobar referencias circulares para identificar la cadena.

### Error: Celdas vacías en divisiones

Si B1 está vacía, =A1/B1 da #¡DIV/0! porque Excel trata la celda vacía como 0.

**Solución:** Usa =SI.ERROR(A1/B1; 0) o verifica con =SI(B1<>0; A1/B1; 0).

## Función SI para prevención de errores

Una alternativa más controlada a SI.ERROR es usar la función SI para verificar condiciones antes de realizar el cálculo:

`
=SI(B1=0; 0; A1/B1)
`

Esta fórmula: si B1 es 0, muestra 0; si no, divide A1 entre B1.

| Ventaja sobre SI.ERROR | Desventaja |
|------------------------|------------|
| Sabes exactamente qué error estás previniendo | Más código que escribir |
| No oculta errores inesperados | Solo previene condiciones conocidas |

## Indicadores de error en la celda (bordes verdes)

Excel marca automáticamente las celdas que podrían tener errores **potenciales** con un pequeño triángulo verde en la esquina superior izquierda:

| Indicador | Posible problema |
|-----------|------------------|
| Triángulo verde | Error potencial detectado por Excel |
| Triángulo rojo | Error grave (generalmente en versiones antiguas) |
| Triángulo azul | Error de validación de datos |

**Cómo configurar los indicadores:**
Archivo > Opciones > Fórmulas > Comprobación de errores > Marcar/desmarcar reglas específicas

## La tilde () como herramienta de depuración

El atajo Ctrl + ~ muestra todas las fórmulas de la hoja. Es especialmente útil:

1. **Ver patrones:** ¿Todas las fórmulas de una columna tienen la misma estructura?
2. **Detectar valores duros:** Busca celdas sin = en columnas que deberían tener fórmulas
3. **Encontrar inconsistencias:** ¿Una fila tiene =A1+B1 mientras las otras tienen =SUMA(A1:B1)?

## Errores específicos de BUSCARV y XLOOKUP

Los errores #N/A en búsquedas son los más frecuentes en Excel. Causas:

| Causa | Solución |
|-------|----------|
| El valor buscado no existe en la primera columna | Verifica que el dato exista |
| Espacios extra en los datos | Usa ESPACIOS para limpiar |
| Diferencia de formato (número vs texto) | Usa VALOR o TEXTO para unificar |
| La tabla no está ordenada (BUSCARV con VERDADERO) | Ordena la tabla o usa FALSO |
| Índice de columna incorrecto | Cuenta las columnas desde la primera de la tabla |

## Errores de referencia circular

### Qué es una referencia circular

Ocurre cuando una fórmula se refiere a sí misma, directa o indirectamente.

**Ejemplo directo:** En la celda A1 escribes =A1+1. Excel no puede calcularlo porque A1 se necesita a sí misma.

**Ejemplo indirecto:**
- A1: =B1*2
- B1: =A1/2

Excel detecta el ciclo y lo muestra en la barra de estado: "Referencias circulares".

### Cómo detectar y solucionar

1. Fórmulas > Auditoría de fórmulas > Comprobar referencias circulares
2. Excel te muestra cada celda involucrada en el ciclo
3. Revisa la lógica: ¿una celda debería usar su propio valor? (normalmente no)
4. Si es intencional (cálculos iterativos): Archivo > Opciones > Fórmulas > Habilitar cálculo iterativo

> Pro Tip: Las referencias circulares intencionales son raras y avanzadas. Si no estás seguro, casi siempre es un error.

## Buenas prácticas para evitar errores

### Antes de escribir la fórmula

1. **Planifica:** ¿Qué resultado esperas? ¿Qué datos necesitas?
2. **Limpia los datos:** Asegúrate de que no haya espacios extra, formatos incorrectos o valores atípicos
3. **Organiza las entradas:** Separa claramente las celdas de entrada (datos) de las celdas de salida (fórmulas)

### Mientras escribes la fórmula

1. **Usa F2 para editar** y ver las referencias coloreadas
2. **Haz clic en las celdas** en lugar de escribir las referencias manualmente
3. **Usa F4** para alternar referencias absolutas/relativas
4. **Verifica los paréntesis:** deben coincidir en número

### Después de escribir la fórmula

1. **Prueba con valores conocidos** (ej: 0, 1, 100) para verificar que el resultado sea lógico
2. **Arrastra la fórmula** a otras celdas y verifica que se comporte correctamente
3. **Usa Ctrl + ~** para ver todas las fórmulas de la hoja
4. **Agrega SI.ERROR** para limpiar los resultados visibles

## Ejercicio paso a paso: Reporte de ventas con manejo de errores

### Escenario de negocio
Eres analista de ventas y recibes datos de diferentes regiones. Algunas regiones no reportaron datos (celdas vacías), algunos precios tienen errores y algunos productos tienen costo 0. Debes crear un reporte limpio profesional sin errores visibles.

### Parte 1: Crear datos con errores potenciales
1. Abre un libro nuevo
2. En **A1:E1** escribe: Producto, Región, Ventas, Costo, Margen
3. En **A2:A6** escribe: Producto A a Producto E
4. En **B2:B6** escribe regiones: Norte, Sur, Este, Oeste, Centro
5. En **C2:C6** escribe ventas: 1000, 2500, 500, `, 1800 (deja C4 vacío)
6. En **D2:D6** escribe costos: 600,  , 200, 450, 750

### Parte 2: Calcular margen con manejo de errores
1. **E2**: =SI.ERROR((C2-D2)/C2; "Datos insuficientes") → arrastra hasta E6
   - Esta fórmula calcula el margen como (Ventas - Costo) / Ventas
   - Si hay error (división entre 0 o ventas vacías), muestra "Datos insuficientes"
2. ¿Qué observas en E3? (Costo 0) → margen del 100% (es correcto, pero sospechoso)
3. ¿Qué observas en E4? (Ventas vacía) → "Datos insuficientes"

### Parte 3: Mejorar la fórmula con verificación adicional
1. **F2**: =SI(C2<=0; "Sin ventas"; SI(D2<=0; "Sin costo"; (C2-D2)/C2)) → arrastra
2. Esta versión diferencia entre "Sin ventas" y "Sin costo"
3. Formato de F2:F6 > **Porcentaje** para los resultados numéricos

### Parte 4: Reporte con totales protegidos
1. En **A8** escribe Totales:
2. **C8**: =SI.ERROR(SUMA(C2:C6); "Error en datos")
3. **D8**: =SI.ERROR(SUMA(D2:D6); "Error en datos")
4. **E8**: =SI.ERROR(C8-D8; "Error en datos")

### Parte 5: Generar errores intencionalmente para aprender
1. En **A10** escribe Prueba de errores:
2. **A11**: =10/0 → #¡DIV/0!
3. **A12**: =SUMA(A → #¿NOMBRE?
4. **A13**: =BUSCARV("Z"; A2:B6; 2; FALSO) → #N/A (si "Z" no existe)
5. **A14**: =A1+B1 donde A1 no es número → #¡VALOR!
6. Selecciona A10:D14, observa los diferentes tipos de error

### Parte 6: Usar Evaluar fórmula para depurar
1. En **G2**: =SI(C2>0; (C2-D2)/C2; "Sin ventas")
2. Selecciona G2 > Fórmulas > Evaluar fórmula
3. Presiona **Evaluar** repetidamente y observa cada paso:
   - Paso 1: Evalúa C2>0 → VERDADERO o FALSO
   - Paso 2: Evalúa el SI en consecuencia
   - Paso 3: Si VERDADERO, calcula (C2-D2)/C2

### Parte 7: Probar el rastreo de precedentes
1. Selecciona E2
2. Fórmulas > Rastrear precedentes → flechas desde C2 y D2 hasta E2
3. Selecciona C2
4. Fórmulas > Rastrear dependientes → flechas desde C2 hasta las fórmulas que lo usan (E2, F2, G2, C8)
5. Fórmulas > Quitar flechas

## Aspectos destacados (Key Takeaways)

- Cada error en Excel tiene un significado específico: #¡DIV/0! (división entre 0), #N/A (no encontrado), #¡REF! (referencia eliminada), etc.
- Usa SI.ERROR para capturar cualquier error y mostrar un mensaje personalizado
- Usa SI.ND para capturar solo errores #N/A (útil cuando quieres ver otros errores)
- Ctrl + ~ muestra todas las fórmulas de la hoja, ideal para depuración
- **Evaluar fórmula** analiza paso a paso cómo Excel calcula una fórmula
- **Rastrear precedentes/dependientes** muestra las relaciones entre celdas
- Prevén errores de división verificando que el denominador no sea 0 con SI
- Las referencias circulares ocurren cuando una fórmula se referencia a sí misma
- Los triángulos verdes en las celdas indican errores potenciales detectados por Excel
- Un reporte profesional **nunca muestra errores** al usuario final: usa SI.ERROR para limpiar la salida

---

**Siguiente módulo:** [05-ANALISIS-DATOS](../05-ANALISIS-DATOS/01-Ordenar-Filtrar.md)
