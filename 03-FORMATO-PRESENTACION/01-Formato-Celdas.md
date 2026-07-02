# Formato de celdas

El formato de celda cambia **cómo se ve** el contenido, no el contenido en sí. Una celda con el valor `100` se puede mostrar como `$100.00`, `100.00`, `100 €`, `100%`, o simplemente `100` según el formato que le apliques. Dominar el formato de celdas es lo que separa una hoja de aspecto amateur de un reporte profesional listo para presentar a clientes o directivos.

## Acceso al cuadro de Formato de celdas

Hay tres formas principales de acceder a todas las opciones de formato:

| Método | Acción |
|--------|--------|
| Atajo universal | `Ctrl + 1` (el más rápido y recomendado) |
| Cinta de opciones | Inicio > Número > flecha diagonal en la esquina inferior derecha |
| Menú contextual | Clic derecho sobre la celda > Formato de celdas |

### Herramientas rápidas en la cinta (Inicio)

| Grupo | Botones principales | Atajo |
|-------|---------------------|-------|
| Número | Formato de número, Moneda, Porcentaje, Millares | `Ctrl + Mayús + ~` (general) |
| Fuente | Tipo, Tamaño, Negrita, Cursiva, Subrayado, Color | `Ctrl + N`, `Ctrl + K`, `Ctrl + S` |
| Alineación | Izquierda, Centro, Derecha, Combinar, Ajustar texto | `Ctrl + 1` > Alineación |
| Bordes | Bordes finos, gruesos, todos, exteriores | |
| Relleno | Color de fondo (balde de pintura) | |

## Categorías de formato de número

El cuadro de Formato de celdas (`Ctrl + 1`) > pestaña **Número** ofrece estas categorías:

| Categoría | Descripción | Ejemplo de visualización |
|-----------|-------------|--------------------------|
| General | Sin formato especial. Muestra el número como fue ingresado. | `100` |
| Número | Con separador de miles y decimales configurables. | `100.00`, `1,000.50` |
| Moneda | Símbolo monetario delante, decimales alineados. | `$100.00`, `€100.00` |
| Contabilidad | Alinea símbolos monetarios a la izquierda, números a la derecha. | `$ 100.00` |
| Fecha | Múltiples formatos: corta, larga, personalizada. | `15/01/2024`, `14 de marzo de 2012` |
| Hora | Horas, minutos y segundos en varios formatos. | `14:30:00`, `02:30 PM` |
| Porcentaje | Multiplica el valor de la celda por 100 y añade `%`. | `10%` (celda con `0.1`) |
| Fracción | Muestra números decimales como fracciones. | `1/4` (celda con `0.25`) |
| Científico | Notación científica con exponente. | `1.00E+03` |
| Texto | El contenido se muestra exactamente como se escribe. | `00123` (no lo convierte a 123) |
| Especial | Formatos predefinidos: código postal, teléfono, DNI. | `01234` (código postal) |
| Personalizada | Creas tu propio formato con códigos personalizados. | `#,##0.00 "€"` |

### Formato personalizado (Personalizada)

Los códigos de formato personalizado te dan control total. Siguen esta estructura:

```
[positivo];[negativo];[cero];[texto]
```

| Código | Significado | Ejemplo |
|--------|-------------|---------|
| `0` | Dígito obligatorio (muestra 0 si no hay) | `00.0` → `05.0` |
| `#` | Dígito opcional (no muestra 0 extra) | `#.##0` |
| `.` | Separador decimal | |
| `,` | Separador de miles | |
| `%` | Multiplica por 100 y muestra `%` | |
| `"texto"` | Texto literal | `#" unidades"` → `5 unidades` |
| `[Rojo]` | Color condicional | `[Rojo][<0]` números negativos en rojo |

**Ejemplo práctico:** Formato personalizado `[Azul]#,##0.00;[Rojo]-#,##0.00;"Cero";"@"` muestra:
- Positivos en azul: `1,234.56`
- Negativos en rojo: `-567.89`
- Cero muestra la palabra: `Cero`
- Texto se muestra normalmente

## Formato de fuente

### Opciones disponibles en la pestaña Fuente (`Ctrl + 1` > Fuente)

| Opción | Descripción | Atajo |
|--------|-------------|-------|
| Fuente | Tipo de letra (Calibri, Arial, Times New Roman) | |
| Estilo | Normal, Negrita, Cursiva, Negrita Cursiva | `Ctrl + N` (negrita), `Ctrl + K` (cursiva) |
| Tamaño | De 1 a 409 puntos | `Ctrl + Mayús + >` (aumentar), `Ctrl + Mayús + <` (disminuir) |
| Subrayado | Sencillo, Doble, Contabilidad | `Ctrl + S` (sencillo) |
| Color | Paleta de colores del tema | |
| Efectos | Tachado, Superíndice, Subíndice | |

### Reglas profesionales para tipografía en Excel

1. **Encabezados:** fuente en negrita, tamaño 12-14 pt, color blanco sobre fondo oscuro
2. **Datos numéricos:** fuente sans-serif (Calibri, Arial), tamaño 10-11 pt
3. **Títulos de reporte:** tamaño 16-20 pt, negrita, combinado sobre varias columnas
4. **Nunca uses más de 2 fuentes** en un mismo libro

### Atajos de formato rápido sin menús

| Atajo | Acción |
|-------|--------|
| `Ctrl + N` | Negrita |
| `Ctrl + K` | Cursiva |
| `Ctrl + S` | Subrayado |
| `Ctrl + 5` | Tachado |
| `Ctrl + Mayús + &` | Borde exterior |
| `Ctrl + Mayús + _` | Quitar bordes |
| `Ctrl + Mayús + ~` | Formato General |
| `Ctrl + Mayús + $` | Formato Moneda |
| `Ctrl + Mayús + %` | Formato Porcentaje |
| `Ctrl + Mayús + #` | Formato Fecha |

## Alineación y orientación

### Opciones de alineación horizontal

| Opción | Cuándo usarla |
|--------|---------------|
| Izquierda | Texto, etiquetas, nombres |
| Centro | Encabezados, títulos |
| Derecha | Números, cantidades monetarias (estándar contable) |
| Rellenar | Repite el valor para llenar toda la celda |
| Justificar | Texto largo, párrafos descriptivos |
| Centrar en selección | Alternativa profesional a Combinar y centrar |

### Opciones de orientación

Puedes rotar el texto en cualquier ángulo: `Ctrl + 1` > Alineación > Orientación. Útil para encabezados de columnas estrechas:

- **0°** (horizontal) → estándar
- **90°** (vertical ascendente) → encabezados angostos
- **-90°** (vertical descendente) → efecto visual
- **45°** (inclinado) → equilibrio entre legibilidad y espacio

### Ajustar texto vs Combinar celdas

| Método | Ventajas | Desventajas |
|--------|----------|-------------|
| **Ajustar texto** (`Ctrl + 1` > Alineación > Ajustar texto) | No pierde datos; la fila se expande automáticamente | Puede desalinear el diseño si no se configura bien |
| **Combinar y centrar** | Títulos visualmente limpios | Solo conserva el valor de la celda superior izquierda; dificulta ordenar/filtrar |
| **Centrar en selección** (`Ctrl + 1` > Alineación > Horizontal > Centrar en selección) | No pierde ninguna celda; visualmente idéntico a combinar | Menos conocido |

> **Pro Tip:** Evita "Combinar y centrar" siempre que sea posible. Usa "Centrar en selección" desde `Ctrl + 1` > Alineación. No perderás datos y podrás ordenar/filtrar sin problemas.

## Bordes y relleno

### Bordes profesionales

Los bordes deben usarse con moderación. Un error común es bordear cada celda individualmente.

**Regla de oro para tablas profesionales:**
- **Sin bordes** en los datos → más limpio
- **Borde inferior** (fino) en cada fila de datos → guía visual sutil
- **Borde grueso** alrededor de la tabla completa → marco
- **Fondo de color + texto blanco** en encabezados → separación clara

| Tipo de borde | Atajo | Uso recomendado |
|---------------|-------|-----------------|
| Todos los bordes | | Solo para formularios, nunca para tablas |
| Borde exterior | `Ctrl + Mayús + &` | Para bordear toda la tabla |
| Borde inferior fino | | Para separar filas de datos |
| Borde inferior grueso | | Para separar totales o secciones |
| Línea doble | | Para totales finales (estilo contable) |

### Relleno (color de fondo)

| Elemento | Color de fondo recomendado | Color de texto |
|----------|---------------------------|----------------|
| Encabezados de tabla | Azul oscuro (#2F5496) o gris oscuro | Blanco |
| Filas alternadas | Azul muy claro (#D6E4F0) o gris claro | Automático (negro) |
| Totales | Naranja claro (#FFF2CC) | Negro |
| Celdas de entrada de datos | Amarillo claro (#FFFFCC) | Negro |
| Celdas con fórmulas | Verde claro (#E2EFDA) | Negro |

## La pestaña Proteger

Desde `Ctrl + 1` > Proteger puedes bloquear u ocultar celdas. Esto solo tiene efecto cuando la hoja está protegida (Revisar > Proteger hoja).

| Opción | Efecto |
|--------|--------|
| Bloqueada | Evita que se modifique la celda (activado por defecto en todas) |
| Oculta | Oculta la fórmula en la barra de fórmulas |

> **Pro Tip:** Para crear formularios profesionales: selecciona TODAS las celdas, desmarca "Bloqueada". Luego selecciona SOLO las celdas de entrada y márcalas como bloqueadas. Finalmente protege la hoja. Así el usuario solo puede editar las celdas que tú definas.

## Formato condicional (introducción)

Aunque lo veremos a detalle más adelante, el Formato condicional (Inicio > Formato condicional) te permite aplicar formato automáticamente según el valor de la celda:

| Regla | Ejemplo | Resultado |
|-------|---------|-----------|
| Resaltar celdas > Mayor que | `>100` | Celdas > 100 en verde |
| Reglas superiores/inferiores | Top 10 | Las 10 celdas más altas resaltadas |
| Barras de datos | | Barra proporcional dentro de la celda |
| Escalas de color | | Degradado rojo-amarillo-verde |
| Conjuntos de iconos | | Semáforos, flechas, estrellas |

## Errores comunes (y cómo evitarlos)

### Error 1: Combinar celdas con datos múltiples
Al combinar A1:A3 con datos en A1, A2 y A3, solo se conserva A1. Los demás se pierden sin advertencia.

**Solución:** Antes de combinar, copia los datos necesarios en una sola celda, o usa "Centrar en selección".

### Error 2: Formato incorrecto para cálculos
Una celda con formato "Texto" no se calculará aunque tenga `=SUMA(A1:A10)`. La fórmula se verá como texto literal.

**Solución:** Cambia a formato General o Número, luego vuelve a escribir la fórmula.

### Error 3: Fechas que no se reconocen
Escribir `15-ene-2024` puede interpretarse como texto si el formato regional es diferente.

**Solución:** Usa `=FECHA(2024;1;15)` o escribe en formato que Excel reconozca según tu región.

### Error 4: Exceso de bordes
Bordear todas las celdas de una tabla grande la hace ver recargada y difícil de leer.

**Solución:** Bordes mínimos. Usa colores de fondo alternados en lugar de bordes.

### Error 5: Confiar en que el color significa algo
Aplicar color manual a celdas no es lo mismo que Formato condicional. Si los datos cambian, el color manual no se actualiza.

**Solución:** Usa Formato condicional para colores que dependan del valor.

## Ejercicio paso a paso: Reporte financiero mensual

### Escenario de negocio
Eres analista financiero y necesitas crear un reporte de ingresos y gastos del mes con formato profesional.

### Parte 1: Preparar la estructura
1. Abre un libro nuevo
2. En **A1** escribe `Reporte Financiero - Enero 2024`
3. En **A3** escribe `Categoría`, en **B3** `Presupuesto`, en **C3** `Real`, en **D3** `Variación`, en **E3** `% Cumplimiento`
4. En **A4:A8** escribe: `Ventas`, `Servicios`, `Gastos Operativos`, `Nómina`, `Utilidad Neta`

### Parte 2: Aplicar formato profesional
1. Selecciona **A1:E1** > Combinar y centrar (o mejor: Centrar en selección)
2. Fuente tamaño 18, negrita, color azul oscuro
3. Selecciona **A3:E3** (encabezados) > fondo azul oscuro, texto blanco, negrita, tamaño 12
4. Selecciona **A4:E8** > aplica bordes solo inferiores (Inicio > Bordes > Borde inferior)
5. En **B4:C8** ingresa números de ejemplo: ventas 50000, servicios 15000, gastos 30000, nómina 20000, utilidad 15000

### Parte 3: Fórmulas y formato condicional
1. **D4**: `=C4-B4` → arrastra hasta D8
2. **E4**: `=C4/B4` → formato **Porcentaje** con 0 decimales → arrastra hasta E8
3. Selecciona **E4:E8** > Inicio > Formato condicional > Barras de datos > Azul
4. Selecciona **D4:D8** > Formato condicional > Resaltar celdas > Mayor que > `0` > Verde; y otra regla > Menor que > `0` > Rojo

### Parte 4: Toques finales
1. Selecciona la fila 5 (Servicios) > color de relleno gris claro (fila alternada)
2. La fila 8 (Utilidad) > borde superior grueso (estilo contable)
3. `Ctrl + 1` > Proteger > desmarca "Bloqueada" en B4:C8 → protege la hoja (Revisar > Proteger hoja)
4. Guarda como `01-formato-celdas.xlsx`

## Aspectos destacados (Key Takeaways)

- `Ctrl + 1` es el atajo universal para abrir Formato de celdas
- El formato cambia la apariencia, no el valor subyacente de la celda
- Los formatos personalizados te permiten crear reglas de visualización avanzadas
- Usa "Centrar en selección" en lugar de "Combinar y centrar" para evitar pérdida de datos
- Los bordes deben usarse con moderación; prefiere colores de fondo alternados
- El formato condicional aplica formato automático según reglas que tú defines
- Bloquear celdas + proteger hoja crea formularios seguros y profesionales
- El formato "Porcentaje" multiplica el valor por 100; no escribas `10%` como `10`, escribe `0.1`

---

**Siguiente tema:** [02-Estilos-Temas.md](02-Estilos-Temas.md)
