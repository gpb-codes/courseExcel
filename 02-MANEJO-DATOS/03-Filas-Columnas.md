# Filas y columnas: la estructura de tu hoja

Las filas y columnas son los **componentes estructurales** de Excel. Manejarías correctamente es fundamental para tener hojas organizadas, profesionales y fáciles de mantener. Aprender a insertar, eliminar, ajustar y mover filas/columnas marca la diferencia entre una hoja aficionada y una hoja profesional.

## Anatomía de una hoja

```
     A        B        C        D        E
  ┌────────┬────────┬────────┬────────┬────────┐
1 │        │        │        │        │        │
  ├────────┼────────┼────────┼────────┼────────┤
2 │        │        │        │        │        │
  ├────────┼────────┼────────┼────────┼────────┤
3 │        │        │        │        │        │
  └────────┴────────┴────────┴────────┴────────┘

  ↑                              ↑
  Letra de columna               Número de fila
```

- **Columnas**: identificadas por letras (A, B, C, ..., Z, AA, AB, ..., XFD)
- **Filas**: identificadas por números (1, 2, 3, ..., 1,048,576)
- **Intersección**: una celda (ej: A1, B5)

## Insertar filas o columnas

### Insertar una fila

**Método 1: Clic derecho**
1. Haz clic derecho en el **número de fila** donde quieras insertar
2. Selecciona **"Insertar"**
3. La nueva fila aparece **ARRIBA** de la fila seleccionada

> Ejemplo: si seleccionas fila 5, la nueva fila será la nueva fila 5, y la antigua fila 5 pasa a ser fila 6.

**Método 2: Desde la cinta**
1. Selecciona cualquier celda de la fila donde quieras insertar
2. Inicio > Insertar (en el grupo Celdas) > Insertar filas de hoja

**Método 3: Atajo de teclado**
- `Alt + I + F` (menú clásico alternativo)

### Insertar una columna

**Método 1: Clic derecho**
1. Haz clic derecho en la **letra de columna** donde quieras insertar
2. Selecciona **"Insertar"**
3. La nueva columna aparece **A LA IZQUIERDA** de la columna seleccionada

> Ejemplo: si seleccionas columna C, la nueva columna será la nueva columna C, y la antigua C pasa a ser columna D.

**Método 2: Desde la cinta**
1. Selecciona cualquier celda de la columna donde quieras insertar
2. Inicio > Insertar > Insertar columnas de hoja

### Insertar varias filas o columnas a la vez

1. **Selecciona varias** filas o columnas (ej: filas 5, 6, 7)
2. Clic derecho > Insertar
3. Se insertan **tantas filas/columnas como seleccionaste**

**Ejemplo práctico:** si seleccionas filas 10, 11, 12 y 13 (4 filas) y haces clic derecho > Insertar, Excel agrega 4 filas nuevas arriba de la fila 10.

> **💡 Pro Tip:** Para insertar una fila sin usar el mouse: selecciona cualquier celda de la fila, presiona `Alt + I` (menú Insertar), luego `F` (filas). O más fácil: clic derecho en el número de fila y presiona `I` (Insertar) inmediatamente.

## Eliminar filas o columnas

**Método 1: Clic derecho**
1. Selecciona la fila o columna (clic en número/letra)
2. Clic derecho > **Eliminar**

**Método 2: Desde la cinta**
1. Selecciona cualquier celda de la fila/columna
2. Inicio > Eliminar > Eliminar filas/columnas de hoja

**Método 3: Seleccionando celdas**
- Selecciona celdas en la fila/columna y usa Inicio > Eliminar > Eliminar filas/columnas de hoja

### ⚠️ ADVERTENCIA: Eliminar vs Borrar contenido

| Acción | Resultado | ¿Se puede deshacer? |
|--------|-----------|-------------------|
| **Eliminar fila/columna** | Desaparece toda la fila/columna, los datos se pierden | ✅ Sí, con `Ctrl + Z` |
| **Borrar contenido** (Supr) | Solo borra los datos, la fila/columna sigue ahí | ✅ Sí |

**No confundir:** `Supr` borra el contenido pero deja la estructura. Clic derecho > Eliminar borra TODO (estructura + datos).

## Ajustar ancho y alto

### Ancho de columna

| Método | Cómo hacerlo | Resultado |
|--------|-------------|-----------|
| **Autoajustar** | Doble clic en el borde derecho de la letra de columna | Ajusta al contenido más largo |
| **Arrastrar** | Arrastra el borde entre dos letras de columna | Ancho manual |
| **Valor exacto** | Clic derecho > Ancho de columna > Escribir número | Ancho preciso |
| **Múltiples columnas** | Selecciona varias, ajusta una | Todas se ajustan al mismo ancho |

### Alto de fila

| Método | Cómo hacerlo | Resultado |
|--------|-------------|-----------|
| **Autoajustar** | Doble clic en el borde inferior del número de fila | Ajusta al contenido más alto |
| **Arrastrar** | Arrastra el borde entre dos números de fila | Alto manual |
| **Valor exacto** | Clic derecho > Alto de fila > Escribir número | Alto preciso |
| **Autoajustar todo** | Inicio > Formato > Autoajustar alto de fila | Ajusta todas las filas |

### Unidades de medida

| Elemento | Unidad | Equivalencia aproximada |
|----------|--------|------------------------|
| **Ancho de columna** | Caracteres (fuente estándar) | 1 unidad ≈ ancho de un carácter |
| **Alto de fila** | Puntos (1/72 de pulgada) | 15 puntos ≈ 0.21 pulgadas ≈ 5.3 mm |

> **💡 Pro Tip:** Si tienes texto largo en una celda y no quieres que se desborde a las celdas vecinas:
> 1. **Ajustar texto**: Inicio > Ajustar texto (la fila se expande verticalmente)
> 2. **Combinar celdas**: Inicio > Combinar y centrar (fusiona celdas adyacentes)
> 3. **Autoajustar ancho**: doble clic en el borde de la columna (se ajusta al contenido más largo)

## Ocultar y mostrar filas/columnas

A veces necesitas ocultar datos sin eliminarlos. Por ejemplo, columnas de cálculos intermedios que el usuario final no debe ver.

### Ocultar

| Método | Acción |
|--------|--------|
| Clic derecho | Selecciona fila/columna > clic derecho > **Ocultar** |
| Atajo (filas) | `Ctrl + 9` |
| Atajo (columnas) | `Ctrl + 0` (cero) |

### Mostrar

| Método | Acción |
|--------|--------|
| Clic derecho | Selecciona las filas/columnas vecinas > clic derecho > **Mostrar** |
| Atajo (filas) | `Ctrl + Shift + 9` |
| Atajo (columnas) | `Ctrl + Shift + 0` (cero) |

### Cómo detectar filas/columnas ocultas

Busca estos indicios visuales:

- **Filas**: los números de fila saltan (ej: 5, 6, 8, 9 — la fila 7 está oculta)
- **Columnas**: las letras saltan (ej: A, B, D, E — la columna C está oculta)
- **Doble línea**: en el borde donde están las filas/columnas ocultas

### Mostrar TODO de golpe

1. Selecciona **toda la hoja** (`Ctrl + E`)
2. Clic derecho en número de fila > **Mostrar** (para filas)
3. Clic derecho en letra de columna > **Mostrar** (para columnas)

O más rápido: selecciona toda la hoja y usa los atajos `Ctrl + Shift + 9` y `Ctrl + Shift + 0`.

## Mover filas o columnas enteras

Reordenar datos es una tarea común. Aquí tienes los métodos correctos:

### Método 1: Arrastrar (recomendado)

1. **Selecciona** la fila/columna completa (clic en número/letra)
2. Coloca el mouse en el **borde** de la selección
3. El cursor cambia a una **cruz con 4 flechas** (🞣)
4. **Arrastra** a la nueva ubicación
5. Para **insertar entre medio**: mantén presionado `Shift` mientras arrastras

### Método 2: Cortar y pegar

1. Selecciona la fila/columna completa
2. `Ctrl + X` (cortar)
3. Selecciona la fila/columna destino
4. Clic derecho > **Insertar celdas cortadas**

> ⚠️ **Importante:** No uses `Ctrl + V` directo con filas/columnas completas cortadas. Usa "Insertar celdas cortadas" para no sobrescribir datos existentes.

### Método 3: Atajo de teclado para mover

1. Selecciona la fila/columna
2. `Ctrl + X`
3. Ve al destino
4. `Ctrl + Shift + =` (inserta las celdas cortadas)

## Casos de uso empresariales

### Caso 1: Reorganizar un reporte mensual

Recibes un reporte donde los meses están desordenados:

```
Col A: Marzo, Col B: Enero, Col C: Febrero
```

**Solución:** selecciona columna A (Marzo), arrastra después de columna C. Luego mueve columnas según necesidad. En 10 segundos tienes Enero, Febrero, Marzo en orden.

### Caso 2: Ocultar columnas de cálculo

Tu jefe quiere ver el reporte final, pero no las columnas de cálculo intermedio:

```
A: Producto, B: Precio, C: Costo, D: Margen, E: IVA, F: Precio Final
```

**Solución:** oculta las columnas C y E (cálculos intermedios). Tu jefe ve solo A, B, D, F. Los datos siguen allí, las fórmulas siguen funcionando, pero la hoja se ve limpia.

### Caso 3: Insertar espacio para nuevos datos

Tienes datos de enero a junio en filas 1-6. Llegó información de julio y la necesitas en medio:

1. Selecciona fila 4 (donde empieza el segundo trimestre)
2. Clic derecho > Insertar (se crea una fila vacía arriba)
3. Escribe los nuevos datos en la fila 4
4. Los datos existentes se desplazaron hacia abajo automáticamente

## Errores comunes del principiante

| Error | Consecuencia | Solución |
|-------|-------------|----------|
| **Eliminar fila con datos importantes** | Pierdes información permanentemente | Siempre revisa antes, usa `Ctrl + Z` si te equivocas |
| **No seleccionar toda la fila/columna** | Solo se mueve una celda, no toda la fila | Haz clic en el número/letra, no en la celda |
| **Arrastrar sin Shift** | Sobrescribes datos en lugar de insertar | Mantén `Shift` mientras arrastras |
| **Confundir Ocultar con Eliminar** | Crees que borraste datos, pero están ocultos | Busca saltos en números de fila / letras de columna |
| **No autoajustar después de pegar** | Datos cortados visualmente | Doble clic en borde de columna después de pegar |
| **Ocultar fila 1 o columna A** | Difícil de mostrar porque no hay "vecinos" | Selecciona desde A1 o usa "Ir a" (F5 > A1) luego mostrar |
| **Insertar sin seleccionar toda la fila** | Opciones deshabilitadas | Asegúrate de que la fila completa esté seleccionada |
| **Mover columna y no ajustar fórmulas** | Referencias se dañan | Usa mover (arrastrar/cortar) en lugar de copiar y pegar |

### Cómo mostrar fila 1 o columna A ocultas

Si ocultaste la fila 1 o columna A (no hay "filas vecinas" arriba o "columnas vecinas" a la izquierda):

1. Presiona `F5` (Ir a)
2. Escribe `A1` y presiona Enter
3. Inicio > Formato > Ocultar y mostrar > Mostrar filas/columnas
4. O usa `Ctrl + Shift + 9` / `Ctrl + Shift + 0`

## Ejercicio práctico completo

### Parte 1: Insertar filas y columnas

1. En un libro nuevo, escribe los siguientes datos:

   | | A | B | C | D |
   |---|---|---|---|---|
   | **1** | Producto | Precio | Cantidad | Total |
   | **2** | Laptop | 15000 | 5 | =B2*C2 |
   | **3** | Mouse | 250 | 20 | =B3*C3 |
   | **4** | Teclado | 450 | 15 | =B4*C4 |
   | **5** | Monitor | 8000 | 3 | =B5*C5 |

### Parte 2: Insertar

2. **Inserta una fila** arriba de la fila 1 (productos):
   - Selecciona fila 1 > Clic derecho > Insertar
   - En la nueva fila 1, escribe en A1: **MI INVENTARIO 2024**
   - Selecciona A1:D1 > Inicio > Combinar y centrar
   - Pon el texto en **Negrita** y **tamaño 14**

3. **Inserta una columna** a la izquierda de la columna A:
   - Selecciona columna A > Clic derecho > Insertar
   - En la nueva A2, escribe: **1**; en A3: **2**; en A4: **3**; en A5: **4**; en A6: **5** (números de ítem)
   - En A1, escribe **#**

4. **Inserta una fila** entre Teclado y Monitor (entre filas 5 y 6 originales):
   - Selecciona fila 6 (Monitor) > Clic derecho > Insertar
   - En la nueva fila 6, escribe: **Audífonos**, **1200**, **10**

### Parte 3: Eliminar

5. **Elimina la fila 8** (que ahora está vacía si insertaste mal):
   - Selecciona fila 8 > Clic derecho > Eliminar

### Parte 4: Ajustar ancho y alto

6. **Autoajusta** la columna B: doble clic en el borde derecho de la letra B.
7. **Autoajusta** todas las columnas: selecciona B:F, doble clic en borde de cualquier columna.
8. **Cambia el alto de la fila 1** a 30 puntos: clic derecho > Alto de fila > 30.

### Parte 5: Ocultar y mostrar

9. **Oculta la columna D** (Cantidad): selecciona D > clic derecho > Ocultar.
10. Observa que la columna E ahora está al lado de C.
11. **Muestra la columna D**: selecciona C y E > clic derecho > Mostrar.
12. **Oculta la fila 4** (Mouse): selecciona fila 4 > clic derecho > Ocultar.
13. **Muestra la fila 4**: selecciona filas 3 y 5 > clic derecho > Mostrar.

### Parte 6: Mover filas y columnas

14. **Mueve la fila "Audífonos"** para que esté antes de "Teclado":
    - Selecciona la fila de Audífonos completa
    - Pon el mouse en el borde
    - Mantén `Shift` y arrastra entre Teclado y Monitor

15. **Mueve la columna "Total"** para que esté después de "Producto":
    - Selecciona columna E (Total)
    - Pon el mouse en el borde
    - Mantén `Shift` y arrastra entre las columnas B (Producto... perdón, después de # y Producto)
    - Nota: ahora # es A, Producto es B, Total debe ir después de Producto... arrastra columna E a la posición después de B

## Puntos clave

- Insertar filas/columnas: clic derecho en el número/letra > Insertar
- Las filas nuevas van **arriba**, las columnas nuevas van **a la izquierda**
- Eliminar filas/columnas borra TODO; borrar contenido (Supr) solo borra datos
- **Autoajustar**: doble clic en el borde de la columna/fila
- **Ocultar**: `Ctrl + 9` (filas), `Ctrl + 0` (columnas); para mostrar, agrega Shift
- **Mover**: selecciona fila/columna, arrastra el borde con `Shift` para insertar entre medio
- Las filas/columnas ocultas se detectan por saltos en los números/letras
- Usa ocultar para limpiar la vista sin perder datos

---

**Siguiente módulo:** [03-FORMATO-PRESENTACION](../03-FORMATO-PRESENTACION/01-Formato-Celdas.md)
