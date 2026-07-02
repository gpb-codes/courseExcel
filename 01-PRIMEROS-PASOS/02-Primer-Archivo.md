# Libros, hojas y celdas: tu primer archivo

## Conceptos fundamentales

Antes de escribir cualquier dato, necesitas entender la jerarquía completa de Excel:

```
📁 LIBRO DE EXCEL (.xlsx)
   ┣ 📄 Hoja1
   ┃  ┣ 🟦 Celda A1
   ┃  ┣ 🟦 Celda A2
   ┃  ┗ 🟦 Celda B1, B2, etc.
   ┣ 📄 Hoja2
   ┗ 📄 Hoja3
```

| Nivel | ¿Qué es? | Ejemplo |
|-------|----------|---------|
| **Libro** | El archivo completo (.xlsx) | `Presupuesto_2024.xlsx` |
| **Hoja** | Una página o pestaña dentro del libro | "Enero", "Febrero", "Resumen" |
| **Celda** | Un cuadro individual donde escribes datos | A1, C5, Z100 |
| **Rango** | Un grupo de celdas | A1:C10, B2:B50 |

> **💡 Pro Tip:** Piensa en el libro como un cuaderno, en las hojas como las páginas de ese cuaderno, y en las celdas como los renglones individuales. Esta analogía te ayudará siempre.

## Crear un libro nuevo

Tienes varias formas de empezar:

### Desde cero (Excel cerrado)
1. Abre Excel desde el menú Inicio
2. En la pantalla de inicio, haz clic en **"Libro en blanco"**

### Desde Excel abierto
| Método | Acción |
|--------|--------|
| Atajo de teclado | `Ctrl + U` |
| Menú Archivo | Archivo > Nuevo > Libro en blanco |
| Barra de acceso rápido | Si configuraste el ícono de Nuevo |

### Desde una plantilla
Archivo > Nuevo > Busca "Presupuesto", "Calendario", "Factura" > Haz clic en la plantilla > Crear

Excel incluye decenas de plantillas profesionales listas para usar.

## Guardar tu trabajo: la regla de oro

**Regla #1 de Excel: Guarda antes de empezar, guarda mientras trabajas, guarda antes de cerrar.**

### Formatos de archivo

| Extensión | Tipo | Cuándo usarlo |
|-----------|------|---------------|
| `.xlsx` | Libro de Excel estándar (sin macros) | **Siempre que puedas** (recomendado) |
| `.xls` | Libro antiguo (Excel 97-2003) | Solo si tu jefe usa Excel muy viejo |
| `.xlsm` | Libro con macros habilitadas | Cuando crees automatizaciones |
| `.csv` | Valores separados por comas | Para exportar datos a otros programas |
| `.pdf` | Documento portátil | Para enviar sin que editen |

### Cómo guardar correctamente

1. **Primera vez**: Archivo > Guardar como (o `F12`) > Elegir carpeta > Nombrar archivo > Guardar
2. **Durante el trabajo**: `Ctrl + G` (cada 5-10 minutos)
3. **Como copia**: Archivo > Guardar como > Otro nombre/ubicación
4. **Guardado automático** (OneDrive): Si guardas en OneDrive, Excel guarda automáticamente cada pocos segundos

> **💡 Pro Tip:** Configura el guardado automático cada 5 minutos: Archivo > Opciones > Guardar > Guardar información de recuperación cada 5 minutos. Así, si Excel se cierra inesperadamente, recuperarás casi todo tu trabajo.

## Las celdas: el corazón de Excel

Cada celda tiene una **dirección única** compuesta por:

```
  Columna (letra)
     ↓
     A1
      ↑
    Fila (número)
```

### Ejemplos de direcciones

| Dirección | Columna | Fila | Observación |
|-----------|---------|------|-------------|
| A1 | A | 1 | Esquina superior izquierda |
| B5 | B | 5 | Columna B, fila 5 |
| Z100 | Z | 100 | Columna Z, fila 100 |
| AA1 | AA | 1 | Columna 27, fila 1 |
| XFD1048576 | XFD | 1048576 | Última celda del libro |

### El cuadro de nombres

A la izquierda de la barra de fórmulas, muestra la dirección de la celda seleccionada. Puedes:
- **Ver** dónde estás
- **Escribir** una dirección y presionar Enter para saltar allí
- **Nombrar** un rango (tema avanzado)

## Datos que puedes escribir en una celda

Excel clasifica automáticamente lo que escribes:

| Tipo de dato | Ejemplos | Se alinea a | ¿Se puede calcular? |
|-------------|----------|-------------|---------------------|
| **Texto** | `Hola`, `Nombre`, `Calle 123` | Izquierda | ❌ No |
| **Número** | `100`, `3.14`, `-5`, `2024` | Derecha | ✅ Sí |
| **Fecha** | `15/01/2024`, `Ene 2024` | Derecha | ✅ Sí |
| **Hora** | `14:30`, `6:00 PM` | Derecha | ✅ Sí |
| **Fórmula** | `=10+5`, `=A1+B1` | Derecha | ✅ Sí |

> **💡 Pro Tip:** Tu mejor indicador visual: si un dato está alineado a la derecha es un número o fecha; si está a la izquierda es texto. Si Excel no reconoce un número como tal (ej: con espacios), lo tratará como texto y no podrás hacer cálculos. Revisa siempre la alineación.

## Manejo de hojas

Las hojas son como páginas independientes dentro de tu libro. Aquí tienes todo lo que puedes hacer:

### Acciones básicas

| Acción | Método rápido | Atajo |
|--------|---------------|-------|
| **Agregar hoja** | Clic en el `+` junto a las pestañas | `Shift + F11` |
| **Renombrar** | Doble clic en el nombre de la pestaña | -- |
| **Cambiar color** | Clic derecho > Color de pestaña | -- |
| **Mover** | Arrastra la pestaña a la posición deseada | -- |
| **Copiar** | Clic derecho > Mover o copiar > Crear copia | -- |
| **Eliminar** | Clic derecho > Eliminar | -- |
| **Navegar** | Clic en la pestaña | `Ctrl + AvPág` / `Ctrl + RePág` |

### Buenas prácticas con hojas

- Nombra las hojas de forma descriptiva: "Enero", "Febrero", "Resumen Anual"
- Usa colores para agrupar: azul para datos, verde para cálculos, naranja para reportes
- Ordena las hojas de izquierda a derecha en orden lógico

## Escenario del mundo real

**Caso: Reporte de ventas mensual**

Imagina que trabajas en una tienda y necesitas reportar ventas mensuales:

```
Libro: Reporte_Ventas_2024.xlsx

Hoja1 → "Enero"     (ventas de enero)
Hoja2 → "Febrero"   (ventas de febrero)
Hoja3 → "Trimestre1"(resumen de enero-marzo)
Hoja4 → "Gráficos"  (visualización de datos)
```

Cada hoja está dedicada a un propósito específico, haciendo el archivo organizado y fácil de navegar para tu jefe o clientes.

## Errores comunes del principiante

| Error | Explicación | Cómo evitarlo |
|-------|-------------|---------------|
| **No guardar hasta el final** | Pierdes todo si Excel se cierra | Guarda al inicio con `Ctrl + G` |
| **Guardar solo al cerrar** | No hay recuperación si falla | Guarda cada 5-10 minutos |
| **Olvidar dónde guardaste** | Buscas el archivo por horas | Usa nombres descriptivos y carpetas organizadas |
| **Confundir Guardar con Guardar como** | Sobrescribes sin querer el original | "Guardar" actualiza, "Guardar como" crea copia |
| **Tener todo en una sola hoja** | Archivo desordenado y lento | Usa varias hojas para separar conceptos |
| **Poner espacios en los nombres de archivo** | Problemas al compartir | Usa guiones bajos: `Reporte_Enero.xlsx` |

## Ejercicio práctico completo

Sigue estos pasos para crear y guardar tu primer archivo:

### Parte 1: Crear y estructurar

1. Presiona `Ctrl + U` para crear un libro nuevo en blanco.
2. **Renombra "Hoja1"** como `Mi Primera Hoja` (doble clic en la pestaña).
3. **Agrega una segunda hoja**: haz clic en el `+` junto a las pestañas.
4. **Renombra la nueva hoja** como `Resumen`.
5. **Agrega una tercera hoja** y nómbrala `Referencias`.
6. **Cambia el color** de la pestaña "Mi Primera Hoja" a azul, "Resumen" a verde y "Referencias" a naranja.

### Parte 2: Escribir datos básicos

7. En **A1** de "Mi Primera Hoja", escribe `Hola, soy [tu nombre]`.
8. En **B1**, escribe el año actual (`2024`).
9. En **C1**, escribe la fecha de hoy (`15/01/2024` o el formato que uses).
10. En **D1**, escribe una fórmula simple: `=10+5`.
11. Observa que el texto (A1) está alineado a la izquierda, y los números/fechas/fórmulas (B1, C1, D1) a la derecha.

### Parte 3: Manejar las hojas

12. **Arrastra la hoja "Resumen"** para que quede entre "Mi Primera Hoja" y "Referencias".
13. **Crea una copia** de "Mi Primera Hoja": clic derecho > Mover o copiar > Crear copia.
14. **Elimina la hoja copiada**: clic derecho > Eliminar.

### Parte 4: Guardar

15. Presiona `Ctrl + G` (o `F12` para Guardar como).
16. Elige una ubicación (Escritorio o Documentos).
17. Nombra el archivo: `Mi primer excel.xlsx`.
18. Haz clic en **Guardar**.
19. Cierra el archivo con `Ctrl + F4`.
20. **Vuelve a abrirlo** desde la ubicación donde lo guardaste para verificar que todo esté allí.

## Puntos clave

- Un **libro** es el archivo `.xlsx`, contiene una o más **hojas**, y cada hoja tiene **celdas**
- Siempre **guarda al inicio** con nombre descriptivo, luego usa `Ctrl + G` constantemente
- Las hojas se nombran, colorean, mueven, copian y eliminan según necesites
- Los datos se alinean a la izquierda (texto) o derecha (números/fechas) automáticamente
- Usa hojas separadas para datos, cálculos y reportes
- La extensión moderna es `.xlsx`; evita `.xls` a menos que sea estrictamente necesario

---

**Siguiente tema:** [03-Datos-Basicos.md](03-Datos-Basicos.md)
