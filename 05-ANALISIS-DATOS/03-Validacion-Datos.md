# Validación de datos

La validación de datos es una herramienta que **controla qué puede escribir el usuario** en una celda. Es esencial para mantener la integridad de tus datos, evitar errores de captura y estandarizar la entrada de información.

---

## ¿Para qué sirve la validación de datos?

- **Evitar errores:** impedir que alguien escriba texto donde van números, o fechas imposibles.
- **Estandarizar entradas:** crear listas desplegables para que el usuario solo elija opciones válidas.
- **Limitar rangos:** restringir valores numéricos, fechas u horas a un rango específico.
- **Guiar al usuario:** mostrar mensajes de ayuda cuando se selecciona una celda.
- **Prevenir datos inválidos:** mostrar un mensaje de error personalizado cuando se ingresa algo incorrecto.

---

## Cómo crear una validación de datos

### Pasos generales

1. **Selecciona** las celdas donde aplicarás la validación.
2. **Datos > Validación de datos** (o `Alt + D + L`).
3. En la pestaña **Configuración** eliges el criterio de validación.
4. En **Mensaje de entrada** escribes un texto que aparecerá al seleccionar la celda.
5. En **Mensaje de error** personalizas el texto que se muestra si el usuario ingresa un valor incorrecto.

### Las 3 pestañas del cuadro de diálogo

| Pestaña | Propósito |
|---------|-----------|
| **Configuración** | Define el criterio de validación (qué tipo de dato se permite) |
| **Mensaje de entrada** | Texto informativo que aparece cuando la celda está seleccionada (opcional) |
| **Mensaje de error** | Alerta que aparece cuando el usuario ingresa un dato no válido (opcional) |

---

## Tipos de validación disponibles

| Criterio | ¿Qué controla? | Ejemplo de uso |
|----------|----------------|----------------|
| **Número entero** | Solo números enteros en un rango | Edad entre 18 y 65 |
| **Decimal** | Números con decimales en un rango | Precio >= 0 |
| **Lista** | Solo valores de una lista predefinida | Sí / No, departamentos, categorías |
| **Fecha** | Fechas dentro de un rango | Fecha de ingreso entre 01/01/2020 y HOY() |
| **Hora** | Horas dentro de un rango | Entrada entre 8:00 y 18:00 |
| **Longitud de texto** | Cantidad máxima de caracteres | Código postal de 5 caracteres |
| **Personalizada** | Una fórmula que debe dar VERDADERO | `=A1>B1` (fecha inicio < fecha fin) |

---

## Listas desplegables (el tipo más usado)

La validación tipo **Lista** es la más utilizada porque crea menús desplegables que facilitan la captura y evitan errores tipográficos.

### Crear una lista desplegable básica

1. Selecciona las celdas destino.
2. **Datos > Validación de datos**.
3. En **Permitir** elige **Lista**.
4. En **Origen**, escribe las opciones separadas por punto y coma (`;`):
   - `Ventas;IT;RH;Finanzas;Operaciones`
5. Aceptar. Las celdas mostrarán una flecha para desplegar las opciones.

### Lista con rango externo

Si las opciones pueden cambiar con el tiempo, es mejor escribirlas en un rango de celdas:

1. Escribe las opciones en una columna auxiliar (ej: Z1:Z5).
2. En **Origen**, selecciona ese rango: `=$Z$1:$Z$5`.
3. Para modificar las opciones, solo cambia las celdas auxiliares.

> **Ventaja:** si agregas o quitas opciones en el rango auxiliar, las listas se actualizan automáticamente.

### Lista dinámica con tabla de Excel

Si conviertes el rango auxiliar en una **Tabla de Excel** (`Ctrl + T`) llamada `Departamentos`, puedes usar:

`=DESREF(Departamentos;0;0;CONTARA(Departamentos);1)`

Esto crea una lista que se expande automáticamente al agregar nuevas opciones.

---

## Mensaje de entrada

El mensaje de entrada es una ayuda visual que aparece cuando el usuario selecciona la celda:

```
Título: "Edad del empleado"
Mensaje: "Escribe la edad entre 18 y 65 años. Solo números enteros."
```

Esto guía al usuario sin necesidad de instrucciones aparte.

---

## Mensaje de error

Cuando alguien ingresa un valor inválido, Excel muestra un mensaje. Puedes configurar 3 estilos:

| Estilo | Comportamiento | Símbolo |
|--------|----------------|---------|
| **Detener** | Bloquea la entrada. No se puede ingresar el valor inválido | ⛔ |
| **Advertencia** | Muestra advertencia pero permite continuar | ⚠️ |
| **Información** | Solo informa, no bloquea | ℹ️ |

### Ejemplos de mensajes de error personalizados

```
Estilo: Detener
Título: "Edad no válida"
Mensaje: "La edad debe estar entre 18 y 65 años. Verifica el dato."
```

```
Estilo: Advertencia
Título: "Departamento incorrecto"
Mensaje: "Elige un departamento de la lista. ¿Quieres continuar?"
```

---

## PRO TIPS

> **Pro Tip #1 — Validación en cascada (dependiente)**
> Puedes crear listas que cambien según el valor de otra celda. Ej: seleccionas "México" en País, y la lista de Ciudades muestra solo ciudades mexicanas. Se logra con `INDIRECTO` y nombres definidos. Ejemplo:
> 1. Define nombres: `Mexico` = `$G$2:$G$5` (ciudades), `España` = `$H$2:$H$4`.
> 2. En validación de Ciudad, origen: `=INDIRECTO(A1)` (donde A1 tiene el país).

> **Pro Tip #2 — Validación con fórmula personalizada**
> Útil para reglas complejas. Ej: que la fecha de fin sea mayor que la fecha de inicio:
> - Selecciona las celdas de Fecha Fin.
> - Validación > Personalizada.
> - Fórmula: `=B2>A2` (donde B2 es fecha fin y A2 fecha inicio).

> **Pro Tip #3 — Copiar validación a otras celdas**
> Usa **Copiar** (`Ctrl + C`) y **Pegado especial > Validación** para copiar las reglas a otras celdas sin copiar el valor.

> **Pro Tip #4 — Encontrar celdas con validación**
> Para localizar todas las celdas con reglas: Inicio > Buscar y seleccionar > **Validación de datos** > selecciona "Todos". Excel resalta las celdas que tienen validación.

---

## Escenario empresarial: formulario de registro de empleados

Eres analista de RH y necesitas que el equipo capture datos de nuevos empleados de forma estandarizada. Diseñas esta tabla con validaciones:

| Columna | Validación | Configuración |
|---------|-----------|---------------|
| Nombre | Longitud de texto | Máximo 50 caracteres |
| Edad | Número entero | Entre 18 y 65 |
| Departamento | Lista | `Ventas;IT;RH;Finanzas;Operaciones` |
| Fecha de ingreso | Fecha | Entre `01/01/2020` y `=HOY()` |
| Sueldo | Decimal | Mayor o igual a 0 |
| Activo | Lista | `Sí;No` |
| Tipo de contrato | Lista | `Indeterminado;Temporal;Prácticas` |

**Resultado:** cualquier persona puede capturar datos sin riesgo de errores. Los departamentos siempre se escriben igual, las edades son realistas, y las fechas no pueden ser futuras.

---

## Validación en cascada (nivel intermedio)

La validación en cascada permite que una lista dependa del valor de otra celda. Es muy usada en formularios.

### Ejemplo paso a paso: País y Ciudad

1. Crea esta estructura en una hoja auxiliar (ej: Hoja2):

| A (Países) | B (México) | C (España) | D (Argentina) |
|------------|------------|------------|---------------|
| México | CDMX | Madrid | Buenos Aires |
| España | Guadalajara | Barcelona | Córdoba |
| Argentina | Monterrey | Valencia | Rosario |

2. Selecciona cada columna de ciudades y asígnale un **nombre definido** (Fórmulas > Definir nombre):
   - El rango `B2:B4` se llama `Mexico`
   - El rango `C2:C4` se llama `España`
   - El rango `D2:D4` se llama `Argentina`

3. En la celda donde irá el **País** (ej: A1), crea una validación tipo Lista con origen: `Países` (el rango A2:A4).

4. En la celda donde irá la **Ciudad** (ej: B1), crea una validación tipo Lista con origen: `=INDIRECTO(A1)`.

**Resultado:** al seleccionar "México" en A1, la lista de B1 muestra solo "CDMX, Guadalajara, Monterrey".

---

## Errores comunes

| Error | Descripción | Solución |
|-------|-------------|----------|
| **La lista no muestra las opciones** | Las opciones están en otro libro cerrado | Las listas solo funcionan con rangos del mismo libro. Copia las opciones al libro actual |
| **La validación no bloquea datos pegados** | Copiar y pegar sobre celdas con validación ignora la regla | Usa **Pegado especial > Validación** o pega solo valores |
| **"Este valor no coincide con las restricciones"** | Ingresaste un valor que no está en la lista o no cumple el rango | Revisa las opciones permitidas o ajusta la validación |
| **Quitar validación por error** | Seleccionaste celdas y elegiste "Borrar todo" en validación | No hay problema — solo re-aplica la validación |
| **Validación no funciona al arrastrar** | Arrastrar celdas puede sobrescribir validaciones | Usa **Pegado especial > Validación** en lugar de arrastrar |

---

## Ejercicio práctico completo

### Parte 1: Configurar encabezados

Crea esta estructura en una hoja nueva:

| A | B | C | D | E |
|---|---|---|---|---|
| Nombre | Edad | Departamento | Fecha ingreso | Activo |

### Parte 2: Aplicar validaciones

1. **Edad (B2:B10)**
   - Validación > Número entero > Mín: 18, Máx: 65
   - Mensaje de entrada: "Escribe la edad del empleado (18-65)"
   - Mensaje de error: "La edad debe estar entre 18 y 65 años"

2. **Departamento (C2:C10)**
   - Validación > Lista > Origen: `Ventas;IT;RH;Finanzas;Operaciones`
   - Mensaje de entrada: "Selecciona un departamento de la lista"

3. **Fecha ingreso (D2:D10)**
   - Validación > Fecha > Entre: `01/01/2020` y `=HOY()`
   - Mensaje de error: "La fecha debe ser entre 01/01/2020 y hoy"

4. **Activo (E2:E10)**
   - Validación > Lista > Origen: `Sí;No`
   - Mensaje de entrada: "¿El empleado está activo?"

### Parte 3: Probar las validaciones

1. Completa 3-4 filas con datos válidos.
2. Intenta escribir "treinta" en Edad — debe rechazarlo.
3. Escribe 70 en Edad — debe mostrar el mensaje de error.
4. Intenta escribir "Contabilidad" en Departamento — debe rechazarlo.
5. Escribe una fecha de 2019 en Fecha ingreso — debe rechazarla.
6. Prueba la lista desplegable en Activo (Sí/No).

### Parte 4: Desafío adicional

1. Agrega una columna **F** llamada **Sueldo** con validación: Decimal >= 0.
2. Agrega una columna **G** llamada **Tipo** con lista: `Indeterminado;Temporal;Prácticas`.
3. Llena 5 filas completas con datos variados pero siempre válidos.
4. Guarda como `05-validacion.xlsx`.

---

## Key Takeaways

- La validación de datos **previene errores** en la entrada de datos al restringir valores.
- Las **listas desplegables** son la validación más usada: evitan errores tipográficos y estandarizan categorías.
- Los **mensajes de entrada** guían al usuario; los **mensajes de error** alertan sobre datos inválidos.
- La **validación personalizada** con fórmulas permite reglas complejas (ej: fecha inicio < fecha fin).
- La **validación en cascada** con `INDIRECTO` crea listas dependientes dinámicas.
- `Alt + D + L` abre el cuadro de validación de datos rápidamente.

---

**Siguiente tema:** [04-Tablas-Dinamicas.md](04-Tablas-Dinamicas.md)
