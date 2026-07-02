"""
Requirements: pip install fpdf2 markdown

Genera PDFs profesionales para cada tema del curso de Excel.
Descarga autom\u00e1ticamente las fuentes DejaVu (Unicode) en la primera ejecuci\u00f3n.

Mejoras respecto a la versi\u00f3n anterior:
  - Fuentes Unicode DejaVu para caracteres especiales
  - Portadas con fondo degradado profesional
  - C\u00f3digo monoespaciado con fondo gris
  - Tablas con colores alternos y cabecera destacada
  - Vi\u00f1etas Unicode \u2022 y soporte de listas anidadas
  - Im\u00e1genes embebidas desde markdown
  - Tabla de contenidos en PDFs combinados por m\u00f3dulo
  - Barras de progreso durante la generaci\u00f3n
  - Mejor manejo de errores y validaci\u00f3n de archivos
  - N\u00fameros de p\u00e1gina en la barra superior
"""

import os
import re
import sys
import math
import urllib.request
import zipfile
import shutil
from pathlib import Path
from contextlib import suppress

from fpdf import FPDF

# ---------------------------------------------------------------------------
# Configuraci\u00f3n
# ---------------------------------------------------------------------------
CURSO_DIR = os.path.dirname(os.path.abspath(__file__))
PDF_DIR = os.path.join(CURSO_DIR, "pdf")
FONTS_DIR = os.path.join(CURSO_DIR, "fonts")

# Paleta de color principal (p\u00farpura profesional)
PURPLE = (107, 47, 160)
PURPLE_DARK = (72, 22, 115)
PURPLE_DEEP = (45, 10, 82)
PURPLE_LIGHT = (155, 95, 200)
PURPLE_BG = (245, 237, 250)
PURPLE_BG2 = (250, 245, 253)
WHITE = (255, 255, 255)
TEXT_DARK = (60, 60, 60)
TEXT_GRAY = (140, 140, 140)
CODE_BG = (240, 240, 245)
TABLE_HDR_BG = (80, 30, 130)
TABLE_ALT_BG = (248, 242, 252)

# ---------------------------------------------------------------------------
# M\u00f3dulos y sus temas (sin cambios en rutas)
# ---------------------------------------------------------------------------
MODULOS = [
    ("01-PRIMEROS-PASOS", "01", "Primeros Pasos", [
        "01-Conociendo-Excel.md",
        "02-Primer-Archivo.md",
        "03-Datos-Basicos.md",
    ]),
    ("02-MANEJO-DATOS", "02", "Manejo de Datos", [
        "01-Rangos-Referencias.md",
        "02-Series-Autocompletar.md",
        "03-Filas-Columnas.md",
    ]),
    ("03-FORMATO-PRESENTACION", "03", "Formato y Presentaci\u00f3n", [
        "01-Formato-Celdas.md",
        "02-Estilos-Temas.md",
        "03-Imagenes-Formas.md",
        "04-Imprimir-Diseno.md",
    ]),
    ("04-FORMULAS-FUNCIONES", "04", "F\u00f3rmulas y Funciones", [
        "01-Primeras-Formulas.md",
        "02-Referencias-Relativas-Absolutas.md",
        "03-Funciones-Basicas.md",
        "04-Funciones-Texto-Fecha.md",
        "05-Errores-Formulas.md",
    ]),
    ("05-ANALISIS-DATOS", "05", "An\u00e1lisis de Datos", [
        "01-Ordenar-Filtrar.md",
        "02-Tablas-Excel.md",
        "03-Validacion-Datos.md",
        "04-Tablas-Dinamicas.md",
    ]),
    ("06-FUNCIONES-LOGICAS-BUSQUEDA", "06", "Funciones L\u00f3gicas y B\u00fasqueda", [
        "01-SI-Y-O.md",
        "02-BUSCARV-BUSCARH.md",
        "03-INDICE-COINCIDIR.md",
        "04-Funciones-Anidadas.md",
    ]),
    ("07-VISUALIZACION", "07", "Visualizaci\u00f3n", [
        "01-Graficos-Basicos.md",
        "02-Formato-Condicional.md",
        "03-Minigraficos.md",
        "04-Graficos-Dinamicos.md",
    ]),
    ("08-HERRAMIENTAS-AVANZADAS", "08", "Herramientas Avanzadas", [
        "01-Analisis-Y-Si.md",
        "02-Funciones-Financieras.md",
        "03-Introduccion-Macros.md",
        "04-Power-Query-Basico.md",
    ]),
    ("09-COLABORACION-PROYECTO", "09", "Colaboraci\u00f3n y Proyecto Final", [
        "01-Compartir-Proteger.md",
        "02-Revision-Comentarios.md",
        "03-Proyecto-Final.md",
    ]),
]

# ---------------------------------------------------------------------------
# Descarga autom\u00e1tica de fuentes DejaVu (primera ejecuci\u00f3n)
# ---------------------------------------------------------------------------
_DEJAVU_URL = (
    "https://github.com/dejavu-fonts/dejavu-fonts/releases/download/"
    "version_2_37/dejavu-fonts-ttf-2.37.zip"
)
_DEJAVU_ZIP_PREFIX = "dejavu-fonts-ttf-2.37/ttf/"
_DEJAVU_NEEDED = [
    "DejaVuSans.ttf",
    "DejaVuSans-Bold.ttf",
    "DejaVuSans-Oblique.ttf",
    "DejaVuSans-BoldOblique.ttf",
    "DejaVuSansMono.ttf",
    "DejaVuSansMono-Bold.ttf",
]


def ensure_fonts():
    """Descarga las fuentes DejaVu si no existen en FONTS_DIR."""
    if all(os.path.isfile(os.path.join(FONTS_DIR, f)) for f in _DEJAVU_NEEDED):
        return True

    print("  [fonts] Descargando DejaVu fonts (Unicode)...")
    os.makedirs(FONTS_DIR, exist_ok=True)
    zip_path = os.path.join(FONTS_DIR, "dejavu.zip")
    try:
        urllib.request.urlretrieve(_DEJAVU_URL, zip_path)
        with zipfile.ZipFile(zip_path, "r") as zf:
            for fname in _DEJAVU_NEEDED:
                src = _DEJAVU_ZIP_PREFIX + fname
                if src in zf.namelist():
                    with zf.open(src) as src_f, \
                         open(os.path.join(FONTS_DIR, fname), "wb") as dst_f:
                        shutil.copyfileobj(src_f, dst_f)
        os.remove(zip_path)
        print("  [fonts] Listo! Fuentes descargadas en:", FONTS_DIR)
        return True
    except Exception as e:
        print(f"  [fonts] Error descargando fuentes: {e}")
        print("  [fonts] Se usar\u00e1n fuentes por defecto (Helvetica).")
        with suppress(Exception):
            os.remove(zip_path)
        return False


# ---------------------------------------------------------------------------
# Clase principal del PDF
# ---------------------------------------------------------------------------
class CoursePDF(FPDF):
    """PDF profesional con soporte Unicode, degradados, tablas y c\u00f3digo."""

    def __init__(self):
        super().__init__()
        self._setup_fonts()
        # estado para tablas
        self._table_header = False
        self._table_row = 0
        # estado para bloques de c\u00f3digo
        self._in_code = False
        self._code_buf = []
        # tabla de contenidos
        self._toc = []
        # ruta del m\u00f3dulo actual (para resolver im\u00e1genes)
        self._mod_path = ""

    # -- Fuentes ------------------------------------------------------------

    def _setup_fonts(self):
        """Carga DejaVu desde FONTS_DIR. Si falla, usa Helvetica/Courier."""
        self._unicode = False
        if not os.path.isdir(FONTS_DIR):
            return
        sans = {
            "": "DejaVuSans.ttf",
            "B": "DejaVuSans-Bold.ttf",
            "I": "DejaVuSans-Oblique.ttf",
            "BI": "DejaVuSans-BoldOblique.ttf",
        }
        mono = {
            "": "DejaVuSansMono.ttf",
            "B": "DejaVuSansMono-Bold.ttf",
        }
        for style, fname in sans.items():
            path = os.path.join(FONTS_DIR, fname)
            if os.path.isfile(path):
                with suppress(RuntimeError):
                    self.add_font("DejaVu", style, path)
                    self._unicode = True
        for style, fname in mono.items():
            path = os.path.join(FONTS_DIR, fname)
            if os.path.isfile(path):
                with suppress(RuntimeError):
                    self.add_font("DejaVuMono", style, path)

    def _ff(self, style="", mono=False):
        """Devuelve (familia, estilo) seg\u00fan disponibilidad de Unicode."""
        if self._unicode:
            return ("DejaVuMono", style) if mono else ("DejaVu", style)
        return ("Courier", style) if mono else ("Helvetica", style)

    # -- Degradado auxiliar ------------------------------------------------

    def _gradient_rect(self, x, y, w, h, c1, c2, vertical=True):
        """Dibuja un rect\u00e1ngulo degradado de c1 a c2."""
        steps = 40
        for i in range(steps):
            t = i / steps
            r = int(c1[0] + (c2[0] - c1[0]) * t)
            g = int(c1[1] + (c2[1] - c1[1]) * t)
            b = int(c1[2] + (c2[2] - c1[2]) * t)
            self.set_fill_color(r, g, b)
            if vertical:
                self.rect(x, y + h * t, w, h / steps + 0.5, style="F")
            else:
                self.rect(x + w * t, y, w / steps + 0.5, h, style="F")

    # -- P\u00e1gina de portada -----------------------------------------------

    def cover_page(self, module_num, module_name, topic_name,
                   subtitle="Curso de Excel - Desde Cero"):
        """Portada profesional con fondo degradado."""
        self.add_page()
        # degradado completo de fondo
        self._gradient_rect(0, 0, 210, 297, PURPLE_DEEP, PURPLE)
        # rect\u00e1ngulo decorativo tenue (parte inferior)
        self.set_fill_color(180, 140, 210)
        self.rect(0, 220, 210, 77, style="F")

        # M\u00f3dulo badge
        self.set_y(50)
        self.set_font(*self._ff("B"), 12)
        self.set_text_color(*PURPLE_LIGHT)
        self.cell(0, 8, f"M\u00f3dulo {module_num}", align="C", new_x="LMARGIN", new_y="NEXT")

        # Nombre del m\u00f3dulo
        self.set_font(*self._ff("B"), 22)
        self.set_text_color(*WHITE)
        self.cell(0, 14, module_name, align="C", new_x="LMARGIN", new_y="NEXT")

        # L\u00ednea decorativa
        self.set_y(self.get_y() + 4)
        self.set_draw_color(*PURPLE_LIGHT)
        self.set_line_width(0.4)
        self.line(60, self.get_y(), 150, self.get_y())

        # Tema
        self.ln(10)
        self.set_font(*self._ff(""), 16)
        self.set_text_color(*PURPLE_BG)
        self.cell(0, 10, topic_name, align="C", new_x="LMARGIN", new_y="NEXT")

        # Subt\u00edtulo inferior
        self.set_y(255)
        self.set_font(*self._ff("I"), 11)
        self.set_text_color(*PURPLE_LIGHT)
        self.cell(0, 10, subtitle, align="C", new_x="LMARGIN", new_y="NEXT")

    # -- Header / Footer ---------------------------------------------------

    def header(self):
        if self.page_no() <= 1:
            return
        # barra superior
        self.set_fill_color(*PURPLE)
        self.rect(0, 0, 210, 11, style="F")
        f = self._ff("I")
        self.set_font(*f, 7.5)
        self.set_text_color(*WHITE)
        self.cell(8, 11, "")
        dash = "-" if not self._unicode else "\u2014"
        self.cell(0, 11, f"Curso de Excel {dash} Desde Cero", align="L")
        pag = "Pag." if not self._unicode else "P\u00e1g."
        self.cell(0, 11, f"{pag} {self.page_no()}", align="R",
                  new_x="LMARGIN", new_y="NEXT")
        self.ln(5)

    def footer(self):
        if self.page_no() <= 1:
            return
        self.set_y(-13)
        self.set_font(*self._ff("I"), 6.5)
        self.set_text_color(*TEXT_GRAY)
        self.cell(0, 10, "aprendeexcel.desdecero.com", align="C")

    # -- Tabla de contenidos -----------------------------------------------

    def render_toc(self, title, entries):
        """Renderiza una tabla de contenidos (entries = [(nombre, p\u00e1g)])."""
        self.add_page()
        # barra superior
        self.set_fill_color(*PURPLE)
        self.rect(0, 0, 210, 11, style="F")
        self.set_font(*self._ff("I"), 7.5)
        self.set_text_color(*WHITE)
        self.cell(0, 11, f"  {title}", align="L", new_x="LMARGIN", new_y="NEXT")
        self.ln(10)

        self.set_font(*self._ff("B"), 18)
        self.set_text_color(*PURPLE_DEEP)
        self.cell(0, 12, "Contenido", align="C", new_x="LMARGIN", new_y="NEXT")
        self.ln(2)
        self.set_draw_color(*PURPLE_LIGHT)
        self.set_line_width(0.3)
        self.line(60, self.get_y(), 150, self.get_y())
        self.ln(8)

        self.set_font(*self._ff(""), 11)
        for idx, (name, page) in enumerate(entries, 1):
            self.set_text_color(*TEXT_DARK)
            # n\u00famero
            w_num = 10
            self.cell(w_num, 7, f"{idx}.", align="R")
            # nombre
            self.set_text_color(*PURPLE_DARK)
            self.cell(0, 7, name, align="L")
            # p\u00e1gina
            self.set_text_color(*TEXT_GRAY)
            self.cell(0, 7, f"p\u00e1g. {page}", align="R",
                      new_x="LMARGIN", new_y="NEXT")
            # l\u00ednea punteada decorativa (opcional)
            self.set_draw_color(220, 210, 230)
            self.set_line_width(0.1)
            self.line(20, self.get_y() + 0.5, 190, self.get_y() + 0.5)
            self.ln(1)

    # -- T\u00edtulos de cap\u00edtulo -----------------------------------------------

    def chapter_title(self, text):
        """T\u00edtulo de tema dentro del PDF."""
        self.ln(3)
        # barra lateral de color
        self.set_fill_color(*PURPLE)
        self.rect(10, self.get_y(), 2.5, 10, style="F")
        self.set_x(15)
        self.set_font(*self._ff("B"), 15)
        self.set_text_color(*PURPLE_DEEP)
        self.cell(0, 10, text, new_x="LMARGIN", new_y="NEXT")
        self.ln(2)

    # -- Renderizado de contenido markdown ---------------------------------

    def chapter_body(self, md_text, mod_path=""):
        """Renderiza texto markdown al PDF."""
        self._mod_path = mod_path
        text = sanitize_text(md_text)
        lines = text.split("\n")
        i = 0
        while i < len(lines):
            line = lines[i].strip()

            # ---- bloque de c\u00f3digo ----
            if line.startswith("```"):
                lang = line[3:].strip()
                self._code_buf = []
                i += 1
                while i < len(lines) and not lines[i].strip().startswith("```"):
                    self._code_buf.append(lines[i].rstrip())
                    i += 1
                self._render_code_block()
                i += 1
                continue

            # ---- l\u00ednea vac\u00eda ----
            if not line:
                self.ln(4)
                i += 1
                continue

            # ---- encabezados ----
            h_match = re.match(r"^(#{1,5})\s+(.*)", line)
            if h_match:
                level = len(h_match.group(1))
                txt = h_match.group(2)
                sizes = {1: 16, 2: 14, 3: 12, 4: 11, 5: 10}
                colors = {1: PURPLE_DEEP, 2: PURPLE_DARK, 3: PURPLE,
                          4: PURPLE_DARK, 5: PURPLE}
                spc = {1: 10, 2: 8, 3: 6, 4: 4, 5: 3}
                self.set_font(*self._ff("B"), sizes[level])
                self.set_text_color(*colors[level])
                self.cell(0, spc[level], txt, new_x="LMARGIN", new_y="NEXT")
                self.ln(1)
                i += 1
                continue

            # ---- imagen ----
            img_match = re.match(r'!\[([^\]]*)\]\(([^)]+)\)', line)
            if img_match:
                alt_txt, img_path = img_match.groups()
                self._render_image(img_path, mod_path)
                i += 1
                continue

            # ---- listas con vi\u00f1eta ----
            if line.startswith("- ") or line.startswith("* "):
                indent = len(line) - len(line.lstrip())
                bullet_char = "\u2022"
                while i < len(lines) and (lines[i].strip().startswith("- ") or lines[i].strip().startswith("* ")):
                    content = lines[i].strip()[2:]
                    indent_lvl = len(lines[i]) - len(lines[i].lstrip())
                    prefix = "  " * (indent_lvl // 2) if indent_lvl else ""
                    self.set_x(self.l_margin)
                    self.cell(4, 6, "")
                    self.set_font(*self._ff(""), 11)
                    self.set_text_color(*PURPLE)
                    self.cell(5, 6, bullet_char)
                    self.set_text_color(*TEXT_DARK)
                    self._write_inline(prefix + content)
                    self.ln(6)
                    i += 1
                continue

            # ---- listas numeradas ----
            num_match = re.match(r"^(\d+)\.\s+(.*)", line)
            if num_match:
                while i < len(lines):
                    m = re.match(r"^(\d+)\.\s+(.*)", lines[i].strip())
                    if not m:
                        break
                    content = m.group(2)
                    self.set_x(self.l_margin)
                    self.set_font(*self._ff(""), 11)
                    self.set_text_color(*PURPLE)
                    self.cell(4, 6, "")
                    self.cell(6, 6, f"{m.group(1)}.", align="R")
                    self.set_text_color(*TEXT_DARK)
                    self._write_inline(content)
                    self.ln(6)
                    i += 1
                continue

            # ---- l\u00ednea separadora ----
            if re.match(r"^-{3,}$", line):
                self.set_draw_color(*PURPLE_LIGHT)
                self.set_line_width(0.2)
                self.line(40, self.get_y() + 2, 170, self.get_y() + 2)
                self.ln(6)
                i += 1
                continue

            # ---- tabla ----
            if line.startswith("|") and line.endswith("|"):
                i = self._render_table(lines, i)
                continue

            # ---- p\u00e1rrafo normal ----
            self.set_font(*self._ff(""), 11)
            self.set_text_color(*TEXT_DARK)
            self._write_inline(line)
            self.ln(5)
            i += 1

    # -- Renderizado interno ------------------------------------------------

    def _render_code_block(self):
        """Dibuja un bloque de c\u00f3digo con fuente mono y fondo gris."""
        if not self._code_buf:
            return
        # determinar alto del bloque
        line_h = 5.5
        padding = 3
        block_h = len(self._code_buf) * line_h + padding * 2
        x0 = self.l_margin + 3
        y0 = self.get_y()
        w = 210 - self.l_margin - 10

        # salto de p\u00e1gina si es necesario
        if y0 + block_h > self.h - self.b_margin:
            self.add_page()
            y0 = self.get_y()

        # fondo gris
        self.set_fill_color(*CODE_BG)
        self.set_draw_color(210, 205, 215)
        self.set_line_width(0.15)
        # rect\u00e1ngulo redondeado no disponible, usamos rect normal
        self.rect(x0 - 2, y0, w + 4, block_h, style="DF")

        # contenido
        self.set_font(*self._ff("", mono=True), 8.5)
        self.set_text_color(*TEXT_DARK)
        for cline in self._code_buf:
            if self.get_y() > self.h - self.b_margin - line_h:
                self.add_page()
                self.set_font(*self._ff("", mono=True), 8.5)
                self.set_text_color(*TEXT_DARK)
            self.set_x(x0 + 1)
            # escapar caracteres problem\u00e1ticos
            display = cline.replace("\t", "    ")
            self.cell(0, line_h, display, new_x="LMARGIN", new_y="NEXT")
        self.ln(4)

    def _render_image(self, img_path, mod_path):
        """Intenta incrustar una imagen local."""
        # buscar en varias ubicaciones
        candidates = []
        if mod_path:
            candidates.append(os.path.join(mod_path, img_path))
        if self._mod_path:
            candidates.append(os.path.join(self._mod_path, img_path))
        candidates.append(os.path.join(CURSO_DIR, img_path))
        candidates.append(img_path)

        full = None
        for c in candidates:
            if os.path.isfile(c):
                full = c
                break
        if not full:
            self.set_font(*self._ff("I"), 9)
            self.set_text_color(*TEXT_GRAY)
            self.cell(0, 6, f"[Imagen no encontrada: {img_path}]",
                      new_x="LMARGIN", new_y="NEXT")
            self.ln(2)
            return

        try:
            max_w = 160
            # fpdf2 image detecta dimensiones autom\u00e1ticamente
            self.image(full, x=self.l_margin + 5, w=max_w)
            self.ln(3)
        except Exception:
            self.set_font(*self._ff("I"), 9)
            self.set_text_color(*TEXT_GRAY)
            self.cell(0, 6, f"[Error al cargar imagen: {img_path}]",
                      new_x="LMARGIN", new_y="NEXT")
            self.ln(2)

    def _write_inline(self, text):
        """Escribe texto con soporte de **negrita** en l\u00ednea."""
        parts = re.split(r"\*\*(.+?)\*\*", text)
        for idx, part in enumerate(parts):
            if not part:
                continue
            if idx % 2 == 1:
                self.set_font(*self._ff("B"), 11)
            else:
                self.set_font(*self._ff(""), 11)
            self.write(5.5, part)

    def _render_table(self, lines, start_idx):
        """Renderiza una tabla markdown desde start_idx. Devuelve \u00edndice final."""
        # recolectar filas
        rows = []
        sep_found = False
        i = start_idx
        while i < len(lines):
            line = lines[i].strip()
            if not (line.startswith("|") and line.endswith("|")):
                break
            cols = [c.strip() for c in line.split("|")[1:-1]]
            # detectar separador
            if all(re.match(r"^:?-{3,}:?$", c) for c in cols):
                sep_found = True
                i += 1
                continue
            rows.append(cols)
            i += 1

        if not rows:
            return i

        # determinar n\u00famero de columnas
        num_cols = max(len(r) for r in rows)
        # si hay separador, la primera fila es cabecera
        header_row = rows[0] if sep_found else None
        data_rows = rows[1:] if sep_found else rows

        # anchos proporcionales
        usable = 190
        col_w = usable / max(num_cols, 1)

        # verificar salto de p\u00e1gina antes de la tabla
        row_h = 7
        total_table_h = (len(data_rows) + (1 if header_row else 0)) * row_h + 2
        if self.get_y() + total_table_h > self.h - self.b_margin:
            self.add_page()

        # cabecera
        if header_row:
            self.set_font(*self._ff("B"), 8.5)
            self.set_fill_color(*TABLE_HDR_BG)
            self.set_text_color(*WHITE)
            for c in header_row + [""] * (num_cols - len(header_row)):
                self.cell(col_w, row_h, c, border=1, fill=True, align="C",
                          new_x="RIGHT")
            self.ln()
            # l\u00ednea gruesa tras cabecera
            self.set_draw_color(*PURPLE_DARK)
            self.set_line_width(0.4)
            y_line = self.get_y() - 0.3
            self.line(self.l_margin, y_line, self.l_margin + usable, y_line)
            self.set_line_width(0.15)

        # filas de datos
        self.set_draw_color(200, 190, 210)
        for r_idx, row in enumerate(data_rows):
            fill = r_idx % 2 == 0
            if fill:
                self.set_fill_color(*TABLE_ALT_BG)
            else:
                self.set_fill_color(*WHITE)
            self.set_text_color(*TEXT_DARK)
            self.set_font(*self._ff(""), 8.5)
            # verificar salto de p\u00e1gina
            if self.get_y() + row_h > self.h - self.b_margin:
                self.add_page()
                # repetir cabecera en nueva p\u00e1gina
                if header_row:
                    self.set_font(*self._ff("B"), 8.5)
                    self.set_fill_color(*TABLE_HDR_BG)
                    self.set_text_color(*WHITE)
                    for c in header_row + [""] * (num_cols - len(header_row)):
                        self.cell(col_w, row_h, c, border=1, fill=True,
                                  align="C", new_x="RIGHT")
                    self.ln()
                    self.set_draw_color(*PURPLE_DARK)
                    self.set_line_width(0.4)
                    y_line = self.get_y() - 0.3
                    self.line(self.l_margin, y_line,
                              self.l_margin + usable, y_line)
                    self.set_line_width(0.15)
                fill = r_idx % 2 == 0
                if fill:
                    self.set_fill_color(*TABLE_ALT_BG)
                else:
                    self.set_fill_color(*WHITE)
                self.set_text_color(*TEXT_DARK)
                self.set_font(*self._ff(""), 8.5)

            for c in row + [""] * (num_cols - len(row)):
                self.cell(col_w, row_h, c, border=1, fill=True, align="C",
                          new_x="RIGHT")
            self.ln()

        self.ln(5)
        return i


# ---------------------------------------------------------------------------
# Funciones auxiliares
# ---------------------------------------------------------------------------

def sanitize_text(text):
    """Limpia caracteres Unicode problem\u00e1ticos para PDF.

    Con DejaVu la mayor\u00eda se renderiza bien, pero reemplazamos
    algunos por equivalentes m\u00e1s seguros.
    """
    replacements = {
        "\u00ad": "-",     # soft hyphen
        "\u200b": "",      # zero-width space
        "\u200c": "",      # zero-width non-joiner
        "\u200d": "",      # zero-width joiner
        "\ufeff": "",      # BOM
    }
    for k, v in replacements.items():
        text = text.replace(k, v)

    # limpiar caracteres de control (excepto \n, \r, \t)
    result = []
    for ch in text:
        cp = ord(ch)
        if cp < 32 and cp not in (9, 10, 13):
            continue
        if cp == 0x7f:
            continue
        result.append(ch)
    return "".join(result)


def clean_md(text):
    """Elimina l\u00edneas de navegaci\u00f3n y metadatos del markdown."""
    lines = text.split("\n")
    kept = []
    for line in lines:
        s = line.strip()
        if s.startswith("**Siguiente") or s.startswith("---"):
            if "Siguiente" in s or "tema:" in s or "m\u00f3dulo:" in s:
                continue
        if "Siguiente tema:" in s or "Siguiente m\u00f3dulo:" in s:
            continue
        kept.append(line)
    return "\n".join(kept)


def extract_module_folders(name):
    """Extrae el nombre limpio de un tema desde el nombre de archivo."""
    base = name.replace(".md", "")
    if "-" in base:
        parts = base.split("-", 1)
        if parts[0].isdigit():
            return parts[1]
    return base


def progress_bar(current, total, prefix=""):
    """Barra de progreso en terminal."""
    pct = current / total if total else 0
    bar_len = 30
    filled = int(bar_len * pct)
    bar = "\u2588" * filled + "\u2591" * (bar_len - filled)
    sys.stdout.write(f"\r{prefix} [{bar}] {current}/{total} ({pct:.0%})")
    sys.stdout.flush()
    if current >= total:
        sys.stdout.write("\n")


# ---------------------------------------------------------------------------
# Generaci\u00f3n principal
# ---------------------------------------------------------------------------

def _count_content_pages(content, mod_path):
    """Estima cu\u00e1ntas p\u00e1ginas ocupar\u00e1 este contenido."""
    p = CoursePDF()
    p.set_auto_page_break(auto=True, margin=20)
    p.add_page()
    p.chapter_body(content, mod_path)
    return p.page_no()


def _render_topic_to_pdf(pdf, topic_name, content, mod_path,
                          module_num, module_name, is_first=False):
    """Renderiza un tema completo (portada + contenido) en el pdf dado."""
    pdf.cover_page(module_num, module_name, topic_name)
    pdf.ln(4)
    pdf.chapter_title(topic_name)
    pdf.chapter_body(content, mod_path)
    return pdf


def generate_pdfs():
    """Genera todos los PDFs individuales y combinados."""
    os.makedirs(PDF_DIR, exist_ok=True)
    ensure_fonts()

    total_topics = sum(len(t) for _, _, _, t in MODULOS)
    done = 0

    print("Generando PDFs del curso de Excel...")
    print(f"  {len(MODULOS)} m\u00f3dulos, {total_topics} temas\n")

    for folder, num, name, topics in MODULOS:
        mod_path = os.path.join(CURSO_DIR, folder)
        if not os.path.isdir(mod_path):
            print(f"  [!] Carpeta no encontrada: {folder}")
            continue

        module_pdfs = []

        for topic_file in topics:
            filepath = os.path.join(mod_path, topic_file)
            if not os.path.isfile(filepath):
                print(f"\n  [!] No encontrado: {folder}/{topic_file}")
                done += 1
                progress_bar(done, total_topics, "  Progreso")
                continue

            # leer y limpiar
            try:
                with open(filepath, "r", encoding="utf-8") as f:
                    content = f.read()
            except Exception as e:
                print(f"\n  [!] Error leyendo {topic_file}: {e}")
                done += 1
                progress_bar(done, total_topics, "  Progreso")
                continue

            content = clean_md(content)
            topic_name = extract_module_folders(topic_file)

            # --- PDF individual ---
            try:
                pdf = CoursePDF()
                pdf.set_auto_page_break(auto=True, margin=20)
                _render_topic_to_pdf(pdf, topic_name, content, mod_path,
                                     num, name)

                safe_name = re.sub(r'[<>:"/\\|?*]', '', topic_name)
                safe_name = f"{num}_{safe_name.replace(' ', '_')}.pdf"
                pdf_path = os.path.join(PDF_DIR, safe_name)
                pdf.output(pdf_path)
                module_pdfs.append(pdf_path)
            except Exception as e:
                print(f"\n  [!] Error generando {topic_file}: {e}")
                done += 1
                progress_bar(done, total_topics, "  Progreso")
                continue

            done += 1
            progress_bar(done, total_topics, "  Progreso")

        # --- PDF combinado del m\u00f3dulo (con TOC) ---
        if module_pdfs:
            try:
                _generate_combined_pdf(mod_path, num, name, topics,
                                       module_pdfs)
            except Exception as e:
                print(f"\n  [!] Error generando combinado {num}_{name}: {e}")

    print(f"\nHecho! {done} PDFs individuales + {len(MODULOS)} PDFs combinados")
    print(f"  Destino: {PDF_DIR}")


def _generate_combined_pdf(mod_path, num, name, topics, module_pdfs):
    """Genera el PDF combinado del m\u00f3dulo con TOC al inicio."""
    # cargar contenidos primero
    topics_data = []
    for topic_file in topics:
        filepath = os.path.join(mod_path, topic_file)
        if not os.path.isfile(filepath):
            continue
        try:
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()
            content = clean_md(content)
            topic_name = extract_module_folders(topic_file)
            topics_data.append((topic_name, content))
        except Exception:
            continue

    if not topics_data:
        return

    # --- primera pasada: contar p\u00e1ginas de cada tema ---
    toc_entries = []
    accum_pages = 1  # la TOC ocupar\u00e1 1 p\u00e1gina, el contenido empieza en p\u00e1g 2
    for topic_name, content in topics_data:
        toc_entries.append((topic_name, accum_pages + 1))  # +1 por la portada
        total_pages = _count_content_pages(content, mod_path)
        accum_pages += total_pages  # el contenido total del tema

    # --- segunda pasada: render final ---
    combined = CoursePDF()
    combined.set_auto_page_break(auto=True, margin=20)

    # TOC
    combined.render_toc(f"{num}  {name}", [
        (name, page) for name, page in toc_entries
    ])

    # Contenido
    for topic_name, content in topics_data:
        _render_topic_to_pdf(combined, topic_name, content, mod_path,
                             num, name)

    # guardar
    safe_mod_name = re.sub(r'[<>:"/\\|?*]', '', name)
    combined_path = os.path.join(PDF_DIR, f"{num}_{safe_mod_name}.pdf")
    combined.output(combined_path)
    print(f"\n  [OK] Combinado: {num}_{safe_mod_name}.pdf")


# ---------------------------------------------------------------------------
# Entry point
# ---------------------------------------------------------------------------
if __name__ == "__main__":
    generate_pdfs()
