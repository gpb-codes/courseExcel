<h1 align="center">Curso de Excel Profesional</h1>

<p align="center">
  <strong>13 modulos · 68 temas · ~16 horas de contenido</strong><br>
  De fundamentos a dashboard profesional. Power Query, VBA, automatizacion y proyectos reales.
</p>

<p align="center">
  <a href="https://ansuz-academy-excel.pages.dev">Ver sitio web del curso</a>
</p>

---

<h2>Estructura del curso</h2>

<table>
<tr>
  <th>Modulo</th>
  <th>Temas</th>
  <th>Duracion</th>
  <th>Nivel</th>
</tr>
<tr>
  <td>M01 - Primeros Pasos</td>
  <td>5</td>
  <td>~65 min</td>
  <td>Principiante</td>
</tr>
<tr>
  <td>M02 - Manejo de Datos</td>
  <td>5</td>
  <td>~65 min</td>
  <td>Principiante</td>
</tr>
<tr>
  <td>M03 - Formato y Presentacion</td>
  <td>6</td>
  <td>~75 min</td>
  <td>Principiante</td>
</tr>
<tr>
  <td>M04 - Formulas y Funciones</td>
  <td>7</td>
  <td>~100 min</td>
  <td>Intermedio</td>
</tr>
<tr>
  <td>M05 - Analisis de Datos</td>
  <td>6</td>
  <td>~85 min</td>
  <td>Intermedio</td>
</tr>
<tr>
  <td>M06 - Funciones Logicas y Busqueda</td>
  <td>6</td>
  <td>~95 min</td>
  <td>Intermedio</td>
</tr>
<tr>
  <td>M07 - Visualizacion</td>
  <td>6</td>
  <td>~85 min</td>
  <td>Intermedio</td>
</tr>
<tr>
  <td>M08 - Herramientas Avanzadas</td>
  <td>6</td>
  <td>~100 min</td>
  <td>Avanzado</td>
</tr>
<tr>
  <td>M09 - Colaboracion y Proyecto Final</td>
  <td>5</td>
  <td>~90 min</td>
  <td>Avanzado</td>
</tr>
<tr>
  <td>M10 - Power Query y Transformacion</td>
  <td>4</td>
  <td>~70 min</td>
  <td>Avanzado</td>
</tr>
<tr>
  <td>M11 - Automatizacion con VBA</td>
  <td>4</td>
  <td>~80 min</td>
  <td>Experto</td>
</tr>
<tr>
  <td>M12 - Colaboracion y Cloud</td>
  <td>4</td>
  <td>~60 min</td>
  <td>Avanzado</td>
</tr>
<tr>
  <td>M13 - Dashboard Profesional</td>
  <td>3</td>
  <td>~70 min</td>
  <td>Experto</td>
</tr>
</table>

---

<h2>Contenido del repositorio</h2>

<pre>
01-PRIMEROS-PASOS/        - Lecciones en markdown
02-MANEJO-DATOS/          - Lecciones en markdown
03-FORMATO-PRESENTACION/  - Lecciones en markdown
04-FORMULAS-FUNCIONES/    - Lecciones en markdown
05-ANALISIS-DATOS/        - Lecciones en markdown
06-FUNCIONES-LOGICAS-BUSQUEDA/ - Lecciones en markdown
07-VISUALIZACION/         - Lecciones en markdown
08-HERRAMIENTAS-AVANZADAS/ - Lecciones en markdown
09-COLABORACION-PROYECTO/ - Lecciones en markdown
web/                      - Sitio web del curso (SPA, PWA)
  index.html              - Pagina principal
  simulador.html          - Simulador de Excel interactivo
  css/style.css           - Estilos
  js/app.js               - Logica de la aplicacion
  sw.js                   - Service Worker (offline)
  manifest.json           - Manifiesto PWA
  resources/              - Ejercicios descargables (.xlsx)
generar_pdfs.py           - Generador de PDFs desde markdown
pdf/                      - PDFs generados (ignorado por git)
</pre>

---

<h2>Tecnologias</h2>

<ul>
  <li><strong>Frontend:</strong> HTML5, CSS3, JavaScript (ES6+)</li>
  <li><strong>PWA:</strong> Service Worker, manifest.json</li>
  <li><strong>Backend/PDF:</strong> Python 3 + fpdf2</li>
  <li><strong>Deploy:</strong> Cloudflare Pages</li>
  <li><strong>Contenido:</strong> Markdown (34 lecciones)</li>
</ul>

---

<h2>Requisitos locales</h2>

<ul>
  <li>Python 3.8+ para generar PDFs: <code>pip install fpdf2 markdown</code></li>
  <li>Navegador moderno para el sitio web</li>
  <li>Excel 2016+ o Excel Online para los ejercicios</li>
</ul>

<h2>Comandos utiles</h2>

<pre>
# Generar PDFs
python generar_pdfs.py

# Desplegar en Cloudflare Pages (desde web/)
npx wrangler pages deploy . --project-name ansuz-academy-excel
</pre>

---

<p align="center">
  <a href="https://ansuz-academy-excel.pages.dev">ansuz-academy-excel.pages.dev</a>
</p>
