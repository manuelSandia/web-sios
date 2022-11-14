const { Router }= require('express');
const router = Router();
const nodemailer = require('nodemailer');
const Swal = require('sweetalert2');

router.post('/send-mail', async(req, res) =>{
    const { name, email, phone, message } = req.body;

    contenHTML = `
        <h1>Informacion de visitante de Sios-Web</h1>
        <ul>
            <li><b>Nombre:</b> ${name}</li>
            <li><b>correo:</b> <a href="mailto:${email}">${email}</a></li>
            <li><b>Telefono:</b> ${phone}</li>
        </ul>
        <br>
        <p>${message}</p>
    `
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: 'sandiamanuel@gmail.com', // generated ethereal user
          pass: 'ztjuhekiqbdfykio',
        }  
    });

    const info = await transporter.sendMail({
        from: '"Sios-Web" <sios-weeb@example.com>',
        to:'sandiamanuel@gmail.com',
        subject: 'Formulario de contacto sios-web',
        html: contenHTML
    });

    console.log('mensaje enviado', info.messageId);
       
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Su mensaje ha sido enviado',
        showConfirmButton: false,
        timer: 1500
    });

    res.redirect('/');
    
});




module.exports = router;