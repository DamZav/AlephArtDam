// Función para validar credenciales
async function validarCredenciales(email, contraseña) {
    // const usuariosAlmacenados = JSON.parse(localStorage.getItem("users"));
    try {
        const response = await fetch('https://alephart.up.railway.app/api/users/login', { // si hay login???
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            // mandamos email y contraseña
            body: JSON.stringify({ 
                email: email, 
                password: contraseña 
            })
        });

        if (!response.ok) {
            throw new Error('Error en l repuesta sel servidor.');
        }

        const data = await response.json();

        if (data.success) {
            localStorage.setItem(---no se qué contestará---);
            return true; // Credenciales válidaas
        } else {
            return false;
        }
    } catch (error) {
        console.error('Error al validar credenciales', error);
        return false;
    }
}


// Manejar el inicio de sesión
document.getElementById("formularioRegistro").addEventListener("submit", async function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const contraseña = document.getElementById("inputPassword").value.trim();

    // Validar campos vacíos
    if (!email || !contraseña) {
        Swal.fire({
            icon: "warning",
            title: "Campos vacíos",
            text: "Por favor, ingrese su correo electrónico y contraseña.",
        });
        return;
    }

    // Validar credenciales
    const esValido = await validarCredenciales(email, password);

    if (esValido) {
        Swal.fire({
            icon: "success",
            title: "Inicio de sesión exitoso",
            text: "¡Bienvenido!",
            timer: 1500,
            showConfirmButton: false
        }).then(() => {
            window.location.href = "../Publicaciones/Principal/principal.html"; // Redirige a la página de publicaciones
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Credenciales inválidas",
            text: "Nombre de usuario o contraseña incorrectos.",
        });
    }
});


// https://alephart.up.railway.app/api/users