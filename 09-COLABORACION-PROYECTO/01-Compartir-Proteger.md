# Compartir y proteger

Cuando compartes un archivo de Excel con colegas o clientes, quieres que lo **vean pero no lo rompan**. Las herramientas de protección de Excel te permiten controlar exactamente qué pueden hacer otros usuarios con tu trabajo.

## ¿Por qué proteger un archivo?

- **Evitar modificaciones accidentales**: que alguien borre una fórmula sin querer
- **Controlar el acceso**: solo ciertas personas pueden abrir o editar
- **Preservar la integridad de los datos**: que los encabezados y fórmulas se mantengan intactos
- **Cumplir normativas**: proteger información sensible o confidencial
- **Guiar al usuario**: que solo pueda editar las celdas destinadas para entrada de datos

## Proteger una hoja

La protección de hoja limita lo que se puede hacer en una hoja específica.

### Cómo proteger una hoja

1. Clic derecho en la pestaña de la hoja (abajo) > **Proteger hoja**.
2. Opcional: escribe una **contraseña** (recomendado, pero no olvides la contraseña).
3. En la lista, elige qué acciones están **permitidas**:
   - **Seleccionar celdas bloqueadas**: permitido por defecto (solo lectura)
   - **Seleccionar celdas desbloqueadas**: permitido (pueden editar estas)
   - **Formatear celdas**: opcional
   - **Insertar filas/columnas**: opcional
   - **Ordenar y filtrar**: útil si tienes tablas
4. Aceptar.

### Cómo desproteger una hoja

Clic derecho en la pestaña > **Desproteger hoja** (ingresa la contraseña si la tiene).

### Opciones de protección detalladas

| Opción | ¿Qué permite? | ¿Cuándo activarla? |
|--------|--------------|-------------------|
| **Seleccionar celdas bloqueadas** | Ver pero no editar | Siempre (para que el usuario vea los datos) |
| **Seleccionar celdas desbloqueadas** | Editar las celdas permitidas | Siempre (para que puedan ingresar datos) |
| **Formatear celdas** | Cambiar colores, fuentes, bordes | Cuando el usuario necesita personalizar la vista |
| **Insertar filas/columnas** | Agregar nuevas filas o columnas | Formularios o listas que crecen |
| **Ordenar y filtrar** | Usar autofiltro y ordenar datos | Tablas que el usuario necesita explorar |
| **Usar tabla dinámica** | Crear o modificar tablas dinámicas | Reportes interactivos |

## Celdas bloqueadas vs. desbloqueadas

Por defecto, **todas las celdas de una hoja están bloqueadas**. Sin embargo, el bloqueo solo se activa cuando proteges la hoja.

Esto significa que si proteges la hoja sin cambiar nada, **ninguna celda se puede editar**.

### Cómo permitir editar solo algunas celdas

1. **Selecciona las celdas** que el usuario sí pueda modificar (ej: B2:B10).
2. Presiona `Ctrl + 1` (Formato de celdas) > pestaña **Proteger**.
3. **Desmarca** la opción "Bloqueada".
4. Luego **protege la hoja** (clic derecho > Proteger hoja).

Ahora los usuarios solo pueden editar B2:B10; el resto de la hoja está protegida.

> **Pro Tip:** Esta técnica es ideal para **formularios y plantillas**. Diseña una hoja donde las celdas de entrada estén desbloqueadas (blancas o con borde punteado) y las celdas con fórmulas estén bloqueadas (con color de fondo gris). El usuario sabe intuitivamente dónde escribir.

### Ejemplo práctico: Plantilla de factura

| Celda | Estado | Contenido |
|-------|--------|-----------|
| A1 | Bloqueada | "FACTURA" (texto fijo) |
| B2 | **Desbloqueada** | Nombre del cliente (entrada) |
| B3 | **Desbloqueada** | Fecha (entrada) |
| B4 | **Desbloqueada** | Producto (entrada) |
| C4 | **Desbloqueada** | Cantidad (entrada) |
| D4 | Bloqueada | =C4*E4 (fórmula protegida) |
| E4 | **Desbloqueada** | Precio (entrada) |
| F4 | Bloqueada | =+D4*1.16 (IVA, fórmula protegida) |

## Proteger un libro (estructura)

Esta protección controla la **estructura del libro**: mover, eliminar, ocultar o renombrar hojas.

### Cómo proteger la estructura

**Archivo > Información > Proteger libro > Proteger estructura del libro** (o **Revisar > Proteger libro**).

- **Bloquear estructura**: evita agregar, mover, eliminar, ocultar o renombrar hojas
- **Bloquear ventanas**: evita cambiar el tamaño/posición de las ventanas del libro

### Proteger con contraseña para abrir

**Archivo > Información > Proteger libro > Cifrar con contraseña**.

- Establece una contraseña que se solicitará **para abrir el archivo**
- **Advertencia**: si pierdes la contraseña, no hay forma de recuperar el archivo

> **Pro Tip:** Guarda las contraseñas en un gestor de contraseñas corporativo. Excel no ofrece recuperación de contraseñas olvidadas. Si pierdes la contraseña de cifrado, **los datos se pierden para siempre**.

## Proteger contra escritura al guardar

Esta opción se configura al guardar el archivo:

1. **Archivo > Guardar como > Examinar**.
2. En el botón **Herramientas** (junto al botón Guardar) > **Opciones generales**.
3. Opciones disponibles:
   - **Contraseña de apertura**: se solicita al abrir el archivo
   - **Contraseña de escritura**: se solicita al intentar guardar cambios
   - **Recomendar solo lectura**: sugiere abrir como solo lectura (no es seguridad real)

## Marcar como final

**Archivo > Información > Proteger libro > Marcar como final**.

- Marca el documento como versión final (solo lectura)
- **No es seguridad real**: el usuario puede hacer clic en "Editar de todas formas"
- Es más una advertencia visual que una protección

## Compartir archivos

### Método tradicional (obsoleto)

**Revisar > Compartir libro** (Libro compartido) — No recomendado. Este método es antiguo, propenso a conflictos y Microsoft recomienda no usarlo.

### Método moderno (recomendado)

**Botón Compartir** (esquina superior derecha de Excel):

1. Guarda el archivo en **OneDrive** o **SharePoint**.
2. Haz clic en **Compartir**.
3. Ingresa los correos de las personas.
4. Elige permisos: **Puede editar** o **Puede ver**.
5. Opcional: agregar mensaje.
6. Enviar.

**Colaboración simultánea (coautoría):** Excel 365 permite que varias personas editen el **mismo archivo al mismo tiempo** si está en OneDrive o SharePoint. Cada persona ve los cambios de los demás en tiempo real.

### Compartir por correo

**Archivo > Compartir > Correo electrónico**:

- Enviar como archivo adjunto (cada quien recibe una copia)
- Enviar como PDF (el receptor no puede editar)
- Enviar como vínculo (todos trabajan sobre la misma versión)

## Control de cambios (Seguimiento)

Excel puede rastrear quién cambió qué y cuándo:

**Revisar > Control de cambios > Resaltar cambios**.

- Marca **"Rastrear cambios al editar"**
- Opciones: cuándo (desde fecha), quién (usuario), dónde (rango)
- Los cambios se muestran con bordes de color y comentarios
- Puedes **Aceptar o rechazar cambios** de forma individual

> **Pro Tip:** El Control de cambios es útil cuando varias personas trabajan en un archivo que **no está en OneDrive**. Para archivos en la nube, la coautoría en tiempo real es mejor porque muestra cambios instantáneamente sin necesidad de "aceptar/rechazar".

## Inspeccionar documento (quitar información personal)

Antes de compartir un archivo, es buena práctica eliminar información oculta:

**Archivo > Información > Inspeccionar documento > Inspeccionar**.

PowerPoint busca y permite eliminar:
- Comentarios y anotaciones
- **Metadatos** (nombre del autor, empresa, última modificación)
- Datos XML personalizados
- Encabezados y pies de página
- Filas y columnas ocultas
- **Información de ruta del archivo**

## Escenarios de negocio reales

### Escenario 1: Plantilla de presupuesto para el equipo

Creaste una plantilla de presupuesto mensual. Necesitas que el equipo solo pueda modificar las celdas de gastos reales, no las fórmulas de totales ni los encabezados.

**Solución:**
1. Desbloquea las celdas de entrada (gastos reales).
2. Protege la hoja con contraseña.
3. Comparte el archivo como plantilla.

### Escenario 2: Reporte mensual para la gerencia

El reporte contiene datos confidenciales de todas las sucursales. Solo el gerente general debe abrirlo, pero el subgerente solo debe ver sus datos.

**Solución:**
1. Cifra el archivo con contraseña de apertura solo para el gerente.
2. Para el subgerente, crea una copia con filtros y protege las columnas sensibles.

## Ejercicio práctico paso a paso

### Ejercicio 1: Proteger una hoja

1. Crea esta tabla:

| Nombre | Edad | Email |
|--------|------|-------|
| Ana López | 30 | ana@email.com |
| Carlos Ruiz | 25 | carlos@email.com |

2. **Protege la hoja** (sin contraseña) > **Aceptar**.
3. Intenta editar cualquier celda → Excel muestra un mensaje de error.
4. **Desprotege la hoja** (clic derecho > Desproteger hoja).

### Ejercicio 2: Celdas bloqueadas vs. desbloqueadas

1. Selecciona **A2:C3** (los datos).
2. `Ctrl + 1` > **Proteger** > desmarca "Bloqueada". Aceptar.
3. Selecciona **A1:C1** (encabezados) y verifica que estén bloqueadas.
4. **Protege la hoja** (con contraseña: `excel123`).
5. Ahora puedes editar los datos (A2:C3) pero no los encabezados (A1:C1).
6. Intenta editar "Nombre" → no puedes (está bloqueado).

### Ejercicio 3: Proteger el libro

1. Ve a **Revisar > Proteger libro**.
2. Marca **Estructura**. Opcional: pon contraseña.
3. Intenta: clic derecho en la pestaña de la hoja → "Insertar" y "Eliminar" están deshabilitados.
4. **Revisar > Desproteger libro** para desactivar.

### Ejercicio 4: Inspeccionar documento

1. Agrega tu nombre en **Archivo > Opciones > Nombre de usuario**.
2. Guarda el archivo.
3. **Archivo > Información > Inspeccionar documento > Inspeccionar**.
4. Marca las opciones que quieres revisar.
5. Haz clic en **Quitar todo** junto a los elementos que quieras eliminar.

## Errores comunes

| Error | Por qué ocurre | Solución |
|-------|---------------|----------|
| **Olvidé la contraseña de la hoja** | No hay forma de recuperarla con Excel estándar | Usa un gestor de contraseñas |
| **Las celdas no se pueden editar aunque la hoja esté desprotegida** | El libro puede estar protegido | Revisar > Desproteger libro |
| **"El archivo está bloqueado"** | El archivo está en uso por otro usuario | Pide que cierren el archivo o espera unos minutos |
| **Protección no funciona en columnas ocultas** | Ocultar columnas no las protege | La protección de hoja sí aplica a columnas ocultas, pero debes haberlas bloqueado |
| **Compartir libro no permite ciertas funciones** | El modo "Libro compartido" antiguo bloquea formato condicional, tablas, etc. | Usa coautoría moderna (OneDrive/SharePoint) en lugar del libro compartido heredado |

## Atajos de teclado

| Atajo | Acción |
|-------|--------|
| `Ctrl + 1` | Formato de celdas (incluye pestaña Proteger) |
| `Alt + R + P` | Proteger hoja |
| `Alt + R + P + W` | Desproteger hoja (si tiene contraseña) |
| `Alt + R + S` | Proteger libro (estructura) |
| `Alt + F + I` | Información del archivo (proteger, inspeccionar) |

## Puntos clave

- La **protección de hoja** controla qué pueden hacer los usuarios en una hoja específica
- Las celdas deben estar **desbloqueadas** explícitamente para permitir edición en una hoja protegida
- La **protección de libro** controla la estructura (agregar/eliminar hojas)
- El **cifrado con contraseña** protege el archivo completo contra apertura no autorizada
- Usa **Marcar como final** como advertencia visual, no como medida de seguridad real
- La **coautoría en OneDrive/SharePoint** es el método moderno para colaborar
- **Inspeccionar documento** elimina metadatos e información personal antes de compartir
- **Nunca olvides tus contraseñas** — Excel no puede recuperarlas

---

**Siguiente tema:** [02-Revision-Comentarios.md](02-Revision-Comentarios.md)
