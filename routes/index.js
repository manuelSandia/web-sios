const { Router }= require('express');
const router = Router();
const nodemailer = require('nodemailer');
const userEmail = process.env.USERMAIL;
const userHost = process.env.HOST;
const clave = process.env.GOOGLE_KEY;


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
        host: userHost,
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: userEmail, // generated ethereal user
          pass: clave,
        }  
    });

    const info = await transporter.sendMail({
        from: '"Sios-Web" <sios-weeb@example.com>',
        to:'sandiamanuel@gmail.com',
        subject: 'Formulario de contacto sios-web',
        html: contenHTML
    });

    console.log('mensaje enviado', info.messageId);
    
});


module.exports = router;