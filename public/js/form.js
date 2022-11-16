const boton = document.querySelector('#btnEnviar');
const mensaje = document.querySelector('#contact-message-2');
const miFormulario = document.querySelector('#formulario');

boton.disabled = true;

mensaje.addEventListener('input', () =>{
    boton.disabled = false;
});


miFormulario.addEventListener('submit', () =>{

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Datos Enviados Exitosamente',
        showConfirmButton: false,
        timer: 4500
    });

    setTimeout(
        function(){window.location.reload();}
    ,6000);
});
