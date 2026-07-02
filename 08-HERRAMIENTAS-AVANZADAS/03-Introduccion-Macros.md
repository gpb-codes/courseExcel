# Introducción a Macros

Una **macro** es una secuencia de acciones grabadas que puedes reproducir cuando quieras. Piensa en ella como un video que Excel graba mientras trabajas y que puede repetir automáticamente. Las macros transforman tareas repetitivas en procesos de un solo clic.

## ¿Para qué sirven las macros?

- **Automatizar tareas repetitivas**: formatear tablas, copiar datos, generar informes
- **Aplicar el mismo proceso** a diferentes archivos o pestañas
- **Crear botones** que ejecuten acciones complejas sin saber programar
- **Estandarizar formatos** en toda la organización
- **Reducir errores humanos** al eliminar pasos manuales

### Ejemplos del mundo real

| Tarea repetitiva | Macro solución |
|-----------------|----------------|
| Dar formato a un reporte mensual (colores, bordes, anchos) | Grabas el formato una vez, lo aplicas cada mes con un clic |
| Exportar datos a otro sistema | Grabas la secuencia de copiar/pegar/guardar |
| Limpiar datos importados | Grabas filtros, eliminación de columnas, cambios de formato |
| Generar facturas desde una plantilla | Grabas la copia de datos y el llenado de campos |

## Grabar tu primera macro

### Paso 1: Activar la pestaña Desarrollador

Si no ves la pestaña **Desarrollador** en la cinta de opciones:

1. **Archivo > Opciones > Personalizar cinta**.
2. En el panel derecho, marca **Desarrollador**.
3. Aceptar.

### Paso 2: Grabar la macro

1. **Ver > Macros > Grabar macro** (o el botón **Grabar macro** en la barra de estado inferior).
2. **Nombre de la macro**: `MiPrimerMacro` (sin espacios, sin caracteres especiales).
3. **Tecla de método abreviado**: opcional, ej: `Ctrl + Mayús + P` (usa Ctrl + Mayús para no sobrescribir atajos nativos de Excel).
4. **Guardar macro en**: "Este libro" (para que solo funcione en este archivo).
5. **Descripción**: "Aplica formato de encabezado a las celdas seleccionadas".
6. **Aceptar**. Excel comienza a grabar **todo** lo que hagas.

### Paso 3: Realiza las acciones

Mientras se graba, haz exactamente lo que quieres automatizar:

1. Selecciona la celda A1.
2. Escribe "Nombre".
3. Presiona Tab.
4. Escribe "Edad".
5. Selecciona A1:B1.
6. Aplica **Negrita** y color de fondo azul.
7. Ajusta el ancho de columna.

### Paso 4: Detener la grabación

**Ver > Macros > Detener grabación** (o el botón cuadrado en la barra de estado).

¡Felicidades! Has creado tu primera macro.

> **Pro Tip:** Durante la grabación, **cada clic y cada tecla** se registra. Si cometes un error (ej: abriste un menú por accidente), esas acciones también se graban. Si algo sale mal, es mejor detener la grabación y empezar de nuevo.

## Ejecutar la macro

### Método 1: Desde el menú

1. **Ver > Macros > Ver macros** (o `Alt + F8`).
2. Selecciona la macro.
3. **Ejecutar**.

### Método 2: Atajo de teclado

Si le asignaste un atajo (`Ctrl + Mayús + P`), solo presiona esas teclas.

### Método 3: Desde un botón

1. **Insertar > Formas** > elige un rectángulo o botón.
2. Dibuja el botón en la hoja.
3. Al soltar el mouse, se abre "Asignar macro".
4. Selecciona tu macro > Aceptar.
5. Haz clic en el botón para probarlo.

## Seguridad de macros

Las macros pueden contener código malicioso. Excel tiene medidas de seguridad para protegerte:

### Configuración de seguridad

**Archivo > Opciones > Centro de confianza > Configuración del Centro de confianza > Configuración de macros**.

| Opción | Qué hace | ¿Cuándo usarla? |
|--------|----------|-----------------|
| **Deshabilitar todas** | Ninguna macro se ejecuta | Archivos de origen desconocido |
| **Deshabilitar con notificación** | Las macros están deshabilitadas pero Excel te avisa | **Recomendado para la mayoría** |
| **Deshabilitar sin notificación** | Las macros están deshabilitadas sin aviso | Entornos corporativos estrictos |
| **Habilitar todas** | Todas las macros se ejecutan sin pregunta | **No recomendado** (riesgo de seguridad) |

### Formato de archivo

Los archivos que contienen macros deben guardarse con extensión **`.xlsm`** (Libro de Excel habilitado para macros), no `.xlsx`.

- `.xlsx` = libro normal (sin macros)
- `.xlsm` = libro con macros
- `.xlsb` = libro binario (puede contener macros, más rápido para archivos grandes)

## El Editor de VBA

Cuando grabas una macro, Excel escribe código en un lenguaje llamado **VBA** (Visual Basic for Applications). No necesitas saber programar para usar macros grabadas, pero entender el editor te ayuda a personalizarlas.

### Cómo ver el código generado

1. **Ver > Macros > Ver macros**.
2. Selecciona tu macro.
3. Haz clic en **Modificar** (o presiona `Alt + F11` para abrir el editor directamente).

### El editor de VBA

Se abrirá una ventana con código similar a:

```vb
Sub MiPrimerMacro()
'
' MiPrimerMacro Macro
' Aplica formato de encabezado a las celdas seleccionadas
'
    Range("A1").Select
    ActiveCell.FormulaR1C1 = "Nombre"
    Range("B1").Select
    ActiveCell.FormulaR1C1 = "Edad"
    Range("A1:B1").Select
    Selection.Font.Bold = True
    With Selection.Interior
        .Pattern = xlSolid
        .Color = 15773696
    End With
End Sub
```

**Observaciones:**
- `Sub ... End Sub` define el inicio y fin de la macro.
- Cada línea es una instrucción que Excel ejecutó.
- Las líneas que empiezan con `'` son comentarios (no se ejecutan).
- Puedes modificar valores directamente en el código.

> **Pro Tip:** Cuando grabes macros, **usa siempre referencias relativas** (opción en Ver > Macros > Usar referencias relativas). Si no, la macro siempre actuará sobre las mismas celdas exactas. Con referencias relativas, la macro trabaja sobre las celdas que tengas seleccionadas.

## Asignar macro a un botón (método avanzado)

### Desde la pestaña Desarrollador

1. **Desarrollador > Insertar > Botón de comando (Control ActiveX)**.
2. Dibuja el botón en la hoja.
3. Haz clic derecho en el botón > **Ver código**.
4. Escribe: `Call NombreDeTuMacro`.
5. Cierra el editor. Al hacer clic en el botón, se ejecuta la macro.

### Desde Formas

1. **Insertar > Formas > Rectángulo redondeado**.
2. Dibuja y escribe el texto: "Ejecutar Reporte".
3. Clic derecho > **Asignar macro** > selecciona la macro.
4. Para darle estilo profesional: clic derecho > Formato de forma > Relleno degradado, sin borde.

## Escenario de negocio real

**Contexto:** Cada mes recibes un archivo con datos de ventas en bruto. Necesitas:

1. Eliminar las primeras 3 filas (encabezados del sistema).
2. Aplicar formato de tabla (alternar colores de fila).
3. Agregar una columna de total (Cantidad × Precio).
4. Aplicar filtros automáticos.
5. Ajustar anchos de columna.
6. Insertar una fila de totales con SUMAS.

En lugar de hacer estos 15 pasos cada mes, **grabas una macro una vez** y la ejecutas cada mes. Lo que tomaba 15 minutos ahora toma 2 segundos.

## Ejercicio práctico paso a paso

### Ejercicio 1: Macro de formateo

1. Activa la pestaña **Desarrollador** (si no la ves, sigue el paso anterior).
2. **Ver > Macros > Grabar macro**.
3. Nombre: `FormatearEncabezados`. Atajo: `Ctrl + Mayús + N`.
4. Realiza estas acciones:
   - Escribe "Nombre" en A1, "Edad" en B1, "Email" en C1.
   - Selecciona A1:C1.
   - **Negrita**, color de fondo azul oscuro, fuente blanca.
   - Ajusta el ancho de columnas automáticamente.
5. **Detener grabación**.
6. Limpia el contenido de A1:C1.
7. Presiona `Ctrl + Mayús + N`: se ejecuta la macro y los encabezados aparecen formateados.

### Ejercicio 2: Macro con referencias relativas

1. **Ver > Macros > Usar referencias relativas** (debe estar activado).
2. Graba una macro que:
   - Seleccione una celda cualquiera.
   - Escriba "Dato".
   - Se mueva una celda a la derecha.
   - Escriba "Valor".
3. Detén la grabación.
4. Ahora, selecciona cualquier celda y ejecuta la macro. Siempre escribe "Dato" y "Valor" a partir de la celda activa.

### Ejercicio 3: Botón con macro

1. Graba una macro llamada `LimpiarDatos` que borre el contenido de A1:C10.
2. **Insertar > Formas > Rectángulo**.
3. Dibuja el botón y escribe "Limpiar".
4. **Asignar macro** > selecciona `LimpiarDatos`.
5. Prueba hacer clic en el botón.

### Ejercicio 4: Explorar el código VBA

1. Presiona `Alt + F11` para abrir el editor de VBA.
2. En el panel izquierdo (Explorador de proyectos), busca **Módulos > Módulo1**.
3. Haz doble clic para ver el código de tus macros.
4. Busca la línea con `Range("A1").Select` y cambia "A1" por "D1".
5. Cierra el editor y ejecuta la macro: ahora escribe en D1.

## Errores comunes

| Error | Por qué ocurre | Solución |
|-------|---------------|----------|
| **No se puede ejecutar la macro** | Las macros están deshabilitadas | Ve a Centro de confianza > Habilitar macros (con notificación) |
| **El archivo no se guarda** | Intentas guardar como .xlsx con macros | Guarda como **.xlsm** (Libro habilitado para macros) |
| **La macro hace cosas que no esperaba** | Grabaste acciones accidentales | Vuelve a grabar o edita el código VBA para eliminar líneas |
| **La macro no funciona en otra hoja** | Usaste referencias absolutas en lugar de relativas | Activa "Usar referencias relativas" antes de grabar |
| **Error al abrir el archivo** | El archivo viene de internet y está bloqueado | Clic derecho en el archivo > Propiedades > Marcar "Desbloquear" |
| **La macro se ejecuta muy lenta** | Tiene muchos Select y ActiveCell en el código | En VBA, desactiva `Application.ScreenUpdating = False` al inicio |

## Atajos de teclado

| Atajo | Acción |
|-------|--------|
| `Alt + F8` | Ver lista de macros (ejecutar) |
| `Alt + F11` | Abrir Editor de VBA |
| `Alt + L + R` | Grabar macro (con pestaña Desarrollador activa) |
| `Ctrl + Mayús + (letra)` | Ejecutar macro por atajo asignado |
| `F5` | Ejecutar macro desde el Editor de VBA |

## Puntos clave

- Una macro graba y reproduce acciones de Excel automáticamente
- Se guardan en archivos **.xlsm** (no .xlsx)
- Siempre verifica la configuración de seguridad de macros
- **Usar referencias relativas** hace que las macros funcionen desde cualquier celda
- Puedes asignar macros a botones, atajos de teclado o ejecutarlas desde el menú
- El Editor de VBA (Alt + F11) te permite ver y modificar el código generado
- Las macros ahorran tiempo en tareas repetitivas y reducen errores humanos
- Empieza con macros simples; a medida que aprendas VBA, podrás crear automatizaciones más complejas

---

**Siguiente tema:** [04-Power-Query-Basico.md](04-Power-Query-Basico.md)
