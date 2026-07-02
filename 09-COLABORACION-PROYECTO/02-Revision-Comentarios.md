# Revisión y comentarios

Los comentarios y las herramientas de revisión son esenciales para el trabajo colaborativo. Te permiten explicar fórmulas, dar instrucciones, hacer preguntas y realizar un seguimiento de los cambios sin modificar los datos originales.

## Tipos de anotaciones en Excel

Excel tiene dos sistemas de anotación: **comentarios modernos** y **notas antiguas**. Es importante conocer la diferencia.

| Característica | Comentarios modernos | Notas antiguas |
|---------------|---------------------|----------------|
| Disponible desde | Excel 365 | Todas las versiones |
| Hilos de respuesta | Sí (conversaciones) | No |
| Menciones (@usuario) | Sí | No |
| Imagen del autor | Sí | No |
| Marcar como resuelto | Sí | No |
| Atajo de teclado | `Ctrl + Mayús + F2` | `Shift + F2` |
| Ideal para | Colaboración en equipo | Notas personales |

> **Pro Tip:** Si ves "Nota" en lugar de "Comentario" en tu Excel, probablemente tienes una versión anterior. Los comentarios modernos están disponibles en Excel 365 y Excel 2021+.

## Agregar comentarios modernos

Los comentarios modernos funcionan como un chat dentro de la celda: puedes escribir, responder y mencionar a otras personas.

### Cómo agregar un comentario

1. Selecciona la celda donde quieres el comentario.
2. **Revisar > Nuevo comentario** (o clic derecho > **Nuevo comentario**).
3. Escribe tu comentario en el cuadro.
4. Presiona Enter o haz clic fuera del cuadro.

### Responder a un comentario

1. Haz clic en el comentario existente.
2. Aparece un cuadro "Responder...". Escribe tu respuesta.
3. Presiona Enter.

### Mencionar a otras personas

Escribe `@` seguido del nombre de la persona (debe estar en tu organización de Microsoft 365). Esa persona recibirá una notificación por correo.

### Marcar como resuelto

Cuando el tema del comentario está solucionado, haz clic en **"Resolver"** (checkmark). El comentario se vuelve gris pero no se elimina (puedes volver a abrirlo).

### Usos recomendados de los comentarios modernos

| Situación | Ejemplo de comentario |
|-----------|----------------------|
| Explicar una fórmula | "Esta fórmula calcula el IVA sobre el subtotal. Revisar tasa" |
| Preguntar por un dato | "@Ana ¿este precio incluye descuento?" |
| Dejar instrucciones | "Llenar solo las celdas amarillas. Las grises tienen fórmula" |
| Reportar un error | "La suma no cuadra con el reporte de contabilidad. Revisar" |
| Solicitar revisión | "@Carlos ¿puedes verificar estos totales?" |

## Agregar notas (comentarios antiguos)

Las notas son más simples: solo texto, sin hilos ni menciones.

### Cómo agregar una nota

1. Selecciona la celda.
2. **Revisar > Notas > Nueva nota** (o `Shift + F2`).
3. Escribe el texto.
4. Haz clic fuera.

### Diferencia visual

- **Comentario moderno**: un cuadro con la imagen del autor y burbujas de conversación.
- **Nota antigua**: un cuadro amarillo con texto plano. La celda muestra un triángulo rojo en la esquina superior derecha.

## Editar y eliminar anotaciones

### Editar un comentario o nota

- **Comentario moderno**: haz clic en el comentario > haz clic en el texto > edita.
- **Nota antigua**: clic derecho en la celda > **Editar nota**.

### Eliminar una anotación individual

- Clic derecho en la celda > **Quitar comentario** (o **Eliminar nota**).

### Eliminar todas las anotaciones de la hoja

1. **Revisar > Eliminar** (flecha hacia abajo).
2. **Eliminar todos los comentarios de la hoja** (o **Eliminar todas las notas de la hoja**).

### Eliminar todas las anotaciones del libro

No hay un comando directo. Debes ir hoja por hoja y usar "Eliminar todos los comentarios".

## Mostrar y ocultar anotaciones

**Revisar > Mostrar comentarios** (o **Notas > Mostrar todas las notas**).

También puedes configurar cómo se muestran:

**Archivo > Opciones > Avanzadas > Mostrar**:

| Opción | Efecto |
|--------|--------|
| **Sin indicadores ni comentarios** | Todo oculto |
| **Solo indicadores** | Triángulo rojo en la celda, comentario oculto |
| **Comentarios y notas** | Siempre visibles |

## Revisar ortografía

Excel incluye un corrector ortográfico que revisa todo el libro o la selección actual.

### Cómo usarlo

**Revisar > Ortografía** (o presiona `F7`).

### Opciones del corrector

- **Ignorar una vez**: salta esta palabra
- **Ignorar todo**: ignora todas las apariciones de esta palabra
- **Agregar al diccionario**: agrega la palabra al diccionario personal
- **Cambiar**: reemplaza con la sugerencia seleccionada
- **Cambiar todo**: reemplaza todas las apariciones
- **Autocorrección**: agrega la corrección a la lista de autocorrección

### Limitaciones

- El corrector **no detecta errores de contexto** (ej: "tubo" vs "tuvo")
- **No revisa fórmulas** ni valores numéricos
- Para trabajo profesional, complementa con una revisión manual

> **Pro Tip:** Antes de compartir un archivo con clientes o jefes, ejecuta `F7` para revisar ortografía. Un error ortográfico en un título o encabezado puede hacer que todo el trabajo se vea poco profesional.

## Control de cambios (Aceptar o rechazar)

Cuando varias personas editan el mismo archivo, el Control de cambios te permite rastrear y decidir sobre cada modificación.

### Cómo activarlo

1. **Revisar > Control de cambios > Resaltar cambios**.
2. Marca **"Rastrear cambios al editar"**.
3. Configura opciones: cuándo, quién, dónde.

### Aceptar o rechazar cambios

1. **Revisar > Control de cambios > Aceptar o rechazar cambios**.
2. Elige qué cambios revisar (por fecha, usuario o rango).
3. Para cada cambio, elige:
   - **Aceptar**: el cambio se queda
   - **Rechazar**: el cambio se revierte
   - **Aceptar todo**: acepta todos los cambios
   - **Rechazar todo**: rechaza todos los cambios

## Comparar y combinar libros

Excel permite comparar dos versiones del mismo libro y combinarlas:

1. **Revisar > Comparar y combinar libros**.
2. Selecciona la versión anterior.
3. Excel muestra las diferencias resaltadas.
4. Acepta o rechaza cada diferencia.

**Nota:** Esta función requiere que el libro esté configurado como "Libro compartido" (método tradicional).

## Escenario de negocio real

**Contexto:** Eres analista financiero y envías un presupuesto anual a 5 jefes de departamento para que cada uno complete su sección.

1. Cada jefe agrega **comentarios** explicando variaciones en sus partidas.
2. Un jefe escribe: "@analista, ¿por qué el presupuesto de marketing subió 30%?".
3. Respondes: "La campaña digital requiere inversión adicional. Adjunto justificación."
4. Una vez resuelto, marcas el comentario como **resuelto**.
5. Al final, usas **Control de cambios** para revisar todas las modificaciones.
6. Aceptas los cambios válidos y rechazas los incorrectos.
7. Ejecutas `F7` para ortografía.
8. Inspeccionas el documento para eliminar información personal.
9. Compartes la versión final protegida.

## Ejercicio práctico paso a paso

### Ejercicio 1: Comentarios y notas

1. En **A1** escribe `=SUMA(B2:B10)`.
2. Agrega un **comentario moderno**: "Revisar que el rango incluya todas las ventas del mes".
3. En **A3** escribe "Pendiente" y agrega una **nota antigua** (`Shift + F2`): "Confirmar con Ana".
4. Responde al comentario en A1: "Rango verificado, correcto".
5. Marca el comentario como **resuelto**.

### Ejercicio 2: Revisión ortográfica

1. Crea una lista con errores ortográficos intencionales:

| Palabra correcta | Escribe así |
|-----------------|-------------|
| Ventas | Bentas |
| Producto | Prodducto |
| Cantidad | Cantidád |
| Teléfono | Telefono |
| Dirección | Direcsión |

2. Presiona `F7` para iniciar el corrector.
3. Corrige cada palabra.
4. Agrega "Ventas" al diccionario si quieres.

### Ejercicio 3: Control de cambios

1. **Revisar > Control de cambios > Resaltar cambios**.
2. Marca **"Rastrear cambios al editar"**. Aceptar.
3. Cambia el valor de algunas celdas. Observa cómo se marcan con un borde de color.
4. Pasa el mouse sobre la celda cambiada → ves quién y cuándo lo modificó.
5. **Control de cambios > Aceptar o rechazar cambios**.
6. Elige revisar los cambios y decide cuáles aceptar.

## Errores comunes

| Error | Por qué ocurre | Solución |
|-------|---------------|----------|
| **No encuentro "Nuevo comentario"** | Tu versión de Excel usa "Notas" en lugar de comentarios modernos | Usa `Shift + F2` para notas o actualiza a Excel 365 |
| **El comentario no se ve** | Los comentarios están ocultos en Opciones > Avanzadas | Cambia la configuración a "Comentarios y notas" |
| **El control de cambios no funciona** | El libro no está compartido | Configura el libro como compartido (o usa coautoría en OneDrive) |
| **Los cambios no son visibles para otros** | El archivo no está guardado en ubicación compartida | Guarda en OneDrive/SharePoint o activa el control de cambios |
| **El corrector no encuentra errores** | El idioma del diccionario no coincide con el texto | Selecciona el texto > Revisar > Idioma > Definir idioma de corrección |

## Atajos de teclado

| Atajo | Acción |
|-------|--------|
| `Shift + F2` | Nueva nota (antigua) |
| `Ctrl + Mayús + F2` | Nuevo comentario (moderno) |
| `F7` | Revisar ortografía |
| `Ctrl + Mayús + O` | Seleccionar celdas con comentarios |
| `Supr` (con comentario seleccionado) | Eliminar comentario |
| `Mayús + F10 + M` | Menú contextual > Modificar comentario |

## Puntos clave

- Los **comentarios modernos** permiten conversaciones en hilo con @menciones (Excel 365)
- Las **notas antiguas** son más simples, sin hilos ni respuestas (Shift + F2)
- Usa comentarios para explicar, preguntar y dar instrucciones sin alterar los datos
- El **corrector ortográfico** (`F7`) es rápido pero no reemplaza una revisión humana
- El **Control de cambios** rastrea quién modificó qué y permite aceptar/rechazar
- Elimina comentarios resueltos y notas innecesarias antes de compartir la versión final
- Los comentarios mejoran la comunicación en equipo y reducen errores por malentendidos

---

**Siguiente tema:** [03-Proyecto-Final.md](03-Proyecto-Final.md)
