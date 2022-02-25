// alert('Hola desde Javascript')
document.getElementById('btnCorreo')
    .addEventListener('click', function (event) {
        event.preventDefault()
        if (validarFormulario() == 4) {
            console.log('Acción de btnCorreo')
        } else {
            console.error('errores en el formulario')
        }
    })

document.getElementById('btnWhatsapp')
    .addEventListener('click', function (event) {
        event.preventDefault()
        if (validarFormulario() == 4) {
            console.log('Acción de btnWhatsapp')
            let mensaje = document.getElementsByClassName('form')[0].txtMensaje
            let url = `https://web.whatsapp.com/send/?phone=6871234567&text=${mensaje}`
            window.location(url)
        } else {
            console.error('errores en el formulario')
        }
    })

function validarFormulario() {
    let form = document.getElementsByClassName('form')[0]
    let nombre = form.txtNombre.checkValidity()
    let correo = form.txtCorreo.checkValidity()
    let asunto = form.txtAsunto.checkValidity()
    let mensaje = form.txtMensaje.checkValidity()
    return nombre + correo + asunto + mensaje
}