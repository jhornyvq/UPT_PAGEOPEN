<?php
// Este script simula la lógica de autenticación en el servidor.
// ¡ADVERTENCIA: Este es un ejemplo básico y no seguro para producción!
// Para un sistema real, necesitarías:
// 1. Conexión a una base de datos.
// 2. Hash de contraseñas (nunca almacenar contraseñas en texto plano).
// 3. Sentencias preparadas para evitar inyección SQL.
// 4. Manejo de sesiones para mantener al usuario autenticado.

header('Content-Type: text/plain'); // Asegura que la respuesta sea texto plano

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Recuperar los datos enviados desde el formulario (AJAX)
    $codigo = isset($_POST['t1']) ? $_POST['t1'] : ''; // Código/Usuario
    $password = isset($_POST['t2']) ? $_POST['t2'] : ''; // Contraseña
    $kamousagi = isset($_POST['kamousagi']) ? $_POST['kamousagi'] : ''; // Código de la imagen

    // --- Lógica de autenticación SIMULADA ---
    // En un entorno real, aquí te conectarías a una base de datos
    // y verificarías el usuario, la contraseña (hasheada) y el código de imagen.

    // Ejemplo: Usuario de prueba "admin", Contraseña "12345", Código de imagen "upt"
    if ($codigo === 'admin' && $password === '12345' && $kamousagi === 'upt') {
        echo 'OK'; // Inicio de sesión exitoso
    } else {
        echo 'ERROR'; // Credenciales inválidas
    }

} else {
    // Si la solicitud no es POST, no se permite el acceso directo
    echo 'Acceso no permitido.';
}

exit; // Asegura que no se envíe nada más después de la respuesta.
?>