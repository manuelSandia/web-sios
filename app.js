require('dotenv').config();
const hbs = require('hbs');
const express = require('express');
const res = require('express/lib/response');
const path = require('path');
const app = express();
const port = process.env.PORT;


// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials'); 

app.use(express.urlencoded({extended:false}));

app.use(require('./routes/index'));

// Servir contenido estatico
// app.use( express.static('public'));  

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => { 
    res.render('home', {

        // Header
        titulo: 'Sios Asesores',

        swipTitle1: 'Sistemas Profit Plus',
        swipDesc1:  'Es la solución de gestión administrativa para potenciar el funcionamiento de su negocio.',
        swipButt1:  'Saber Mas',

        swipTitle2: 'Sistema Sigesp Enterprise',
        swipDesc2:  'Simplifique los procesos de gestión administrativa en las organizaciones del sector público venezolano.',
        swipButt2:  'Saber Mas',

        swipTitle3: 'Equipos Fiscales',
        swipDesc3:  'En Sios Asesores contamos con maquinas e impresoras fiscales para su empresa o negocio.',
        swipButt3:  'Saber Mas',

        //Servicios
        servTitle: 'Nuestros Servicios',
        servButt:  'Servicios',

        titulo1: 'SOLUCIONES',
        titSub1: 'INFORMATICAS',
        desc1:   'Implantacion, capacitacion y mantenimiento de Sistemas Profit Plus y Sigesp',

        titulo2: 'EQUIPOS',
        titSub2: 'FISCALES',
        desc2:   'Somos distribuidor autorizado de equipos fiscales de la marca The factory HKA.',

        titulo3: 'INFRAESTRUCTURA',
        titSub3: 'DE COMPUTACION',
        desc3:   'Mantenimiento de hardware y software, redes de area local, virtualizacion, sevidores linux y windows.',


        // PROFIT PLUS
        profitTitle: 'Sistemas Profit Plus',
        profitDesc:  'Es la solución de gestión administrativa que ofrece soporte a los procesos de negocio de su organización de forma integral, sencilla y flexible en la área de invetntario, compras, ventas, importaciones y tesorería, potenciando el funcionamiento de su negocio.',

        //PROFIT seccion 1
        proSecTitle1: 'Administrativo 2k8 / 2k12',
        proAdmTitle1: 'Acerca del Sistema',
        proAdmDesc1:  'Es la solución de gestión administrativa que ofrece soporte a los procesos de negocio de su organización de forma integral, sencilla y flexible. Maneja áreas como: Inventario, Compras, Ventas, Cuentas por Cobrar, Cuentas por Pagar, Caja y Banco.',
        proAdmTitle2: 'Confiabilidad',
        proAdmDesc2:  'Permite dar una visión global de su negocio, lo cual significa disponibilidad de información para la toma de decisiones en el momento oportuno.',
        proAdmTitle3: 'Versatilidad',
        proAdmDesc3:  'Es multi-empresa, multi-almacen, multi-moneda, y multi-idioma. Tiene toda la información en línea, no necesita cierres mensuales.',

        //PROFIT seccion2
        proSecTitle2:  'Contabilidad 2k8 / 2k12',
        proContTitle1: 'Acerca del Sistema',
        proContDesc1:  'Automatice su gestión contable General, Financiera y Fiscal de forma integral con comprobantes contables (manuales y automáticos) en base a los documentos almacenados en Profit Plus Administrativo y Nomina.',
        proContTitle2: 'sólidas capacidades de generación de reportes',
        proContDesc2:  'Reportes diseñados en base a los requerimientos exigidos por la ley para los procesos contables los cuales son almacenados y visualizados en: Excel, Word, PDF, Formatos RTF y Crystal Reports).',
        proContTitle3: 'Maneja de forma inteligente sus transacciones',
        proContDesc3:  'Gestión de activos fijos y pasivos realizables de la empresa. Ajustes por inflación fiscal y financiero.',

        //PROFIT seccion3
        proSecTitle3: 'Nomina 2k8 / 2k12',
        proNomTitle1: 'Acerca del sistema',
        proNomDesc1:  'La herramienta más avanzada para el manejo del Capital Humano. Usted podrá configurar y calcular la nómina para los diversos contratos, así como llevar un control en las áreas de préstamos, vacaciones y liquidaciones.',
        proNomTitle2: 'Abierto y flexible',
        proNomDesc2:  'Permite crear y aplicar cualquier concepto relacionado con el pago a los trabajadores, así como conceptos que pueda ir acumulando para su pago posterior (prestaciones sociales, intereses sobre prestaciones etc.).',
        proNomTitle3: 'Ajustado a las leyes Actuales',
        proNomDesc3:  'Cumple con los lineamientos de la nueva Ley Orgánica del trabajo, los trabajadores y trabajadoras',

        //PROFIT seccion4
        proSecTitle4:  'Produccion 2k8',
        proProdTitle1: 'Acerca del Sistema',
        proProdDesc1:  'Facilita automatizar la producción y sus procesos operativos, permitiendo una visión global de los mismos, lo cual significa disponibilidad de información para la toma de decisiones en el momento oportuno, aumentando la competitividad de la empresa.',


        // SIGESP
        sigespTitle: 'Sigesp Enterprises',
        sigespDesc:  'SIGESP es un sistema integrado que simplifica los procesos de gestión administrativa en las organizaciones del sector público venezolano. Está conformado por una serie de módulos configurables, que gestionan diversas tareas y proporcionan respuesta inmediata y oportuna a las necesidades de registro presupuestario, patrimonial, contable y administrativo.',

        //SIGESP seccion 1
        sigSecTitle1: 'Modulo Contable',
        sigContTitle: 'Modulo Contable',
        sigContDesc:  'Descripcion y caracteristicas del modulo.',

        //SIGESP seccion2
        sigSecTitle2: 'Modulo Administrativo',
        sigAdmTitle:  'Modulo Administrativo',
        sigAdmDesc:   'Descripcion y caracteristicas del modulo.',

        //SIGESP seccion3
        sigSecTitle3: 'Modulo Auxiliar',
        sigAuxTitle:  'Modulo Auxiliar',
        sigAuxDesc:   'Descripcion y caracteristicas del modulo.',

        //SIGESP seccion4
        sigSecTitle4: 'Modulo Personal',
        sigPerTitle:  'Modulo Personal',
        sigPerDesc:   'Descripcion y caracteristicas del modulo.',

        //SIGESP seccion5
        sigSecTitle5: 'Modulo Especial de Facturacion',
        sigFacTitle:  'Modulo Espesial de Facturacion',
        sigFacDesc:   'Descripcion y caracteristicas del modulo.',



        // EQUIPOS FISCALES
        equipTitle: 'Equipos Fiscales',
        equipDesc:  'Somos Distribuidores autorizados de equipos fiscales de la marca The factory HKA.',

        //seccion1
        equiSecTitle1: 'Impresoras Fiscales',
        impFiscTitle1: 'Dascom Tally 1140',
        impFiscDesc1:  'La DASCOM Tally 1140, es una Impresora Fiscal fabricada bajo estrictos estándares de calidad, que dan a su moderno diseño, la seguridad y la robustez necesaria para cumplir con las normativas fiscales vigentes en el país.',

        impFiscTitle2: 'Fiscat HKA 80',
        impFiscDesc2:  'La Impresora Fiscal HKA80 se caracteriza por su alta rapidez de impresión de tickets, cuenta con un diseño robusto y seguro cumpliendo así las normativas fiscales del país. La impresora posee un cortador automático de papel, impresión de códigos de barra en 1D y 2D, comunicación vía Serial o USB tipo B para la PC, puerto para Gaveta y Display externo.',

        impFiscTitle3: 'Aclas PP9 Plus',
        impFiscDesc3:  'La impresora fiscal PP9-PLUS es un equipo de impresión térmica ideal para pequeños y medianos negocios debido a su competitivo precio y a su diseño compacto, que garantiza la comodidad de los usuarios y facilita las transacciones fiscales.',

        //seccion2
        equiSecTitle2: 'Maquinas Fiscales',
        maqFiscTitle1: 'Aclas CR2050',
        maqFiscDesc1:  'Es una caja registradora fiscal térmica, portatil, ideal para medianas y pequeñas empresas con una arquitectura de diseño ampliamente reducida lo que la hace compacta y ligera para adaptarse a sus necesidades.',

        //seccion3
        equiSecTitle3:  'Dispositivos de Transmision',
        disTransTitle1: 'iSmart-W',
        disTransDesc1:  'Es un dispositivo electrónico, que se conecta a una máquina fiscal, permitiendo extraer los reportes Z contenidos en la memoria fiscal y transmitirlos a el servidor  del Sistema Centralizado de Facturación Electrónica.',

        disTransTitle2: 'iSmart-G',
        disTransDesc2:  'Es un dispositivo electrónico, que se conecta a una máquina fiscal, permitiendo extraer los reportes Z contenidos en la memoria fiscal y transmitirlos a el servidor  del Sistema Centralizado de Facturación Electrónica.',

        disTransTitle3: 'iMobile',
        disTransDesc3:  'Es un dispositivo electrónico, que se conecta a una máquina fiscal, permitiendo extraer los reportes Z contenidos en la memoria fiscal y transmitirlos a el servidor  del Sistema Centralizado de Facturación Electrónica.',

        //seccion4
        equiSecTitle4: 'Soporte Tecnico',
        sopTecTitle1:  'Soporte Tecnico Especializado',
        sopTecDesc:    'En Sios Asesores contamos con un equipo técnico profesional dispuestos a apoyarte en la revisión de equipos fiscales con inmediatez y precisión.',

        //seccion5
        equiSecTitle5: 'Repuestos y Suministros',
        repSumTitle:   'Repuestos y Suministros',
        repSumDesc:    'En Sios Asesores te ayudamos a mantener tus equipos fiscales HKA al dia, brindandote los repuestos y suministros que necesitas.',


        // INFRAESTRUCTURA DE COMPUTACION
        compTitle: 'Infraestructura de Computacion',
        compDesc:  'Somos distribuidores de hardaware de marca asi como tambien ofrecemos soluciones Tecnologicas y soporte tecnico en cuanto a infraestructura de computacion.',

        //seccion1
        compSecTitle1:  'Equipos',
        equiCompTitle1: 'Estaciones de Trabajo',
        equiCompDesc1:  'Ofrecemos equipos Workstations de alto rendimiento de marcas reconocidas adaptadas a las necesidades especificas de nuestros clientes.',

        equiCompTitle2: 'Equipos Activos de Red',
        equiCompDesc2:  'En Sios Asesores ofrecemos una amplia variedad de equipos para redes alambricas como inalambricas de marcas reconocidas y con los mejores precios del mercado.',

        equiCompTitle3: 'Servidores',
        equiCompDesc3:  'En Sios Asesores te ofrecemos equipos para servidores de Alta Gamma de marcas reconocidas a los mejores precios del mercado.',

        equiCompTitle4: 'Equipos de Respaldo Electrico',
        equiCompDesc4:  'En Sios Asesores ofrecemos equipos de respaldo electrico de la marca APC para brindar proteccion, seguridad y respaldo a sus equipos.',

        //seccion2
        compSecTitle2:  'Servidores',
        equiServTitle1: 'Servidores Linux',
        equiServDesc1:  'Ofrecemos servidores impulsados por el sistema operativo de código abierto de Linux que ofrece a las empresas una opción de bajo costo para entregar contenido, aplicaciones y servicios a sus clientes.',

        equiServTitle2: 'Servidores Widows',
        equiServDesc2:  'Ofrecemos instalacion de servidores impulsados por sistema Windows Server nejorando los resultador corporativos, de administracion sencilla, de modo que el sistema se pude manejar de forma rapida y eficiente. Ademas destaca por ser muy flexible.',

        //seccion3
        compSecTitle3:  'Redes',
        equiRedTitle1:  'Redes de área local',
        equiRedDesc1:   'En Sios Asesores ofrecemos instalaciones y configuraciones en redes locales corporativas para mantener la seguridad y la operación amigable de los recursos de su empresa.',

        //seccion4
        compSecTitle4:  'Soporte Tecnico',
        sopTecTitle1:   'Mantenimiento de Hardware y Software',
        sopTecDesc1:    'En Sios Asesores contamos con un equipo técnico profesional especializado en el mantenimiento correctivo y preventivo de hardware y software.',

        
        // NOSOTROS
        nosTitle: 'Acerca de Nosotros',
        nosDesc:  'Sios Asesores C.A. somos una empresa especializada en servicios y consultoria informatica, computacion y software. Inscrita en el Registro Nacioneal de Contratistas, destacandonos a nivel regional en el desarrollo e implantacion de soluciones informaticas.',

        // VALORES DE LA EMPRESA
        tarjTitle1: 'Visión',
        tarjDesc1:  'Destacarnos a nivel regional, en el desarrollo e implantación de soluciones informáticas para PyMEs y gobiernos locales.',

        tarjTitle2: 'Misión',
        tarjDesc2:  'Satisfacer las necesidades de nuestros clientes en el área de la tecnología de la información, ofreciendo software y hardware ajustado a las necesidades, con el apoyo de aliados de alto valor estratégico.',

        tarjTitle3:'Valores',
        tarjItem1: 'Integridad y Honestidad',
        tarjItem2: 'Calidad',
        tarjItem3: 'Compromiso con el cliente',
        tarjItem4: 'Responsabilidad',

        // AÑOS DE EXPERIENCIA
        expTitle1: 'Años de Experiencia',
        expDesc1:  'comprobada en desarrollo e implantación de Software para la pequeña y mediana empresa así como la administración pública a nivel municipal.',
        expButton: 'Contactanos',
        contNum1:  '17',
        contDesc1: 'Clientes Sector Publico',
        contNum2:  '15',
        contDesc2: 'Clientes Sector Privado',

        // BENEFICIOS DE SER CLIENTE SIOS
        benTitleMain: 'Beneficios de ser cliente sios',
        benButton:    '¡Conoce Mas!',

        bentitle1: 'Titulo del 1er Beneficio',
        benDesc1:  'Aqui va la descripcion del 1er beneficio de ser cliente en Sios Asesores.',

        bentitle2: 'Titulo del 2do Beneficio',
        benDesc2:  'Aqui va la descripcion del 2do beneficio de ser cliente en Sios Asesores.',
        
        bentitle3: 'Titulo del 3er Beneficio',
        benDesc3:  'Aqui va la descripcion del 3er beneficio de ser cliente en Sios Asesores.',

        bentitle4: 'Titulo del 4to Beneficio',
        benDesc4:  'Aqui va la descripcion del 4to beneficio de ser cliente en Sios Asesores.',

        // OPINIONES
        opinTitle: 'reseñas de nuestros clientes',

        clientName1:  'Nombre del cliente 1',
        clientYears1: 'cliente desde hace 20 años',
        clientDesc1:  'Descripcion de la opinion del cliente 1.',

        clientName2:  'Nombre del cliente 2',
        clientYears2: 'Cliente desde hace 10 años',
        clientDesc2:  'Descripcion de la opinion del cliente 2.',

        clientName3:  'Nombre del cliente 3',
        clientYears3: 'Cliente desde hace 5 años',
        clientDesc3:  'Descripcion de la opinion del cliente 2.',

        // INFORMACION DE CONTACTO
        telf1: '+58 416-6025883',
        telf2: '+58 414-7174288',
        direccion: 'Prolongación Av. 2 Lora Urbanización El Encanto Oficentro El Encanto Piso PH, Local PH5, Merida',
        correo:    'sios.asesores@gmail.com',

        // FORMULARIO DE CONTACTO
        contactFormTitle: '¡Contactanos!',
        contactFormDesc:  'Si tienes alguna pregunta, solo rellena el formulario de contacto, y te respoderemos en la brevedad posible.',
        contactFormButt:  'Enviar',

    });
});

app.get('/dt1140', (req, res) => { 
    res.render('mFiscales', {

        titulo:'Dascom Tally TD1140',
        
        contenido1: 'La DASCOM Tally 1140, es una Impresora Fiscal fabricada bajo estrictos estándares de calidad, que dan a su moderno diseño, la seguridad y la robustez necesaria para cumplir con las normativas fiscales vigentes en el país.',
        contenido2: 'Es un equipo diseñado y adaptado a las nuevas exigencias tecnológicas, lo cual brinda una mayor facilidad de manejo y programación.',
        contenido3: 'Esta impresora se ajusta a las regulaciones de ley establecidas por el SENIAT para máquinas fiscales bajo la providencia SENIAT/GF/00064 de fecha 17 febrero del 2016.',
        img1: 'images/imp/dascon1.png',
        img2: 'images/imp/dascon2.png',
        img3: 'images/imp/dascon3.png',

        icono1:    'images/icons/icon-1.png',
        icondesc1: 'Ferreterias',
        icono2:    'images/icons/icon-2.png',
        icondesc2: 'Clinicas',
        icono3:    'images/icons/icon-3.png',
        icondesc3: 'Hoteles',
        
    });
});

app.get('/hka80', (req, res)=>{
    res.render('mFiscales',{

        titulo: 'Fiscat HKA80',
        
        contenido1: 'La Impresora Fiscal HKA80 se caracteriza por su alta rapidez de impresión de tickets, cuenta con un diseño robusto y seguro cumpliendo así las normativas fiscales del país. La impresora posee un cortador automático de papel, impresión de códigos de barra en 1D y 2D, comunicación vía Serial o USB tipo B para la PC, puerto para Gaveta y Display externo. Por último, su sistema integrado Anti-Tamper es capaz de detectar al momento que se abre el equipo y graba esa información en la memoria de auditoria, garantizando la seguridad y robustez que se requiere en una máquina fiscal.',
        contenido2: 'Diseño compacto y elegante, mayor rapidez de comunicación y altas prestaciones en rendimiento.',
        contenido3: 'Esta impresora se ajusta a las regulaciones de ley establecidas por el SENIAT para máquinas fiscales bajo la providencia SENIAT/GF/00064 de fecha 17 febrero del 2016',
        img1: 'images/imp/hka1.png',
        img2: 'images/imp/hka2.png',
        img3: 'images/imp/hka3.png',

        icono1:    'images/icons/icon-5.png',
        icondesc1: 'Cafeterias',
        icono2:    'images/icons/icon-6.png',
        icondesc2: 'Supermercados',
        icono3:    'images/icons/icon-8.png',
        icondesc3: 'Farmacias',
    });
});

app.get('/pp9plus',(req, res)=>{
    res.render('mFiscales',{

        titulo: 'Aclas PP9-PLUS',
        
        contenido1: 'La impresora fiscal PP9-PLUS es un equipo de impresión térmica ideal para pequeños y medianos negocios debido a su competitivo precio y a su diseño compacto, que garantiza la comodidad de los usuarios y facilita las transacciones fiscales.',
        contenido2: 'Como destacada ventaja competitiva, esta impresora posee una solución integrada de comunicación que transmite los datos contenidos en la memoria fiscal vía WiFi; además tiene la opción de conexión inalámbrica Bluetooth  para la comunicación con sistemas de facturación, mayor velocidad de impresión y una batería interna de respaldo, en caso de fallas del suministro eléctrico.',
        contenido3: 'Este equipo cumple con las regulaciones de ley establecidas por el SENIAT para máquinas fiscales bajo la Providencia Administrativa N° SNAT/2018/0141 de fecha 16 de Octubre 2018.',
        img1: 'images/imp/aclas1.png',
        img2: 'images/imp/aclas2.png',
        img3: 'images/imp/aclas3.png',

        icono1:    'images/icons/icon-9.png',
        icondesc1: 'Heladeria',
        icono2:    'images/icons/icon-11.png',
        icondesc2: 'Boutique',
        icono3:    'images/icons/icon-13.png',
        icondesc3: 'Tiendas',

    });
});

app.get('/cr2050', (req, res)=>{
    res.render('mFiscales',{

        titulo: 'Caja Registradora CR2050',
        
        contenido1: 'Es una caja registradora fiscal térmica, portatil, ideal para medianas y pequeñas empresas con una arquitectura de diseño ampliamente reducida lo que la hace compacta y ligera para adaptarse a sus necesidades.',
        contenido2: 'Esta caja registradora cumple con las regulaciones de ley establecidas por el SENIAT para máquinas fiscales bajo la Providencia Administrativas Nº SNAT/2018/0141 de fecha 6 de Noviembre 2018.',
        contenido3: '',
        img1: 'images/imp/cr-1.png',
        img2: 'images/imp/cr-2.png',
        img3: 'images/imp/cr-3.png',

        icono1:    'images/icons/icon-9.png',
        icondesc1: 'Heladeria',
        icono2:    'images/icons/icon-14.png',
        icondesc2: 'Transpote / Delivery',
        icono3:    'images/icons/icon-13.png',
        icondesc3: 'Tiendas',

    }); 
});

app.get('/ismartg', (req, res)=>{ 
    res.render('dTrans', {

        titulo: 'Dispositivo de Transmision iSmart-G',
        
        contenido1: 'Es un dispositivo electrónico, que se conecta a una máquina fiscal, permitiendo extraer los reportes Z contenidos en la memoria fiscal y transmitirlos a el servidor  del Sistema Centralizado de Facturación Electrónica.',
        contenido2: 'Él está conformado por un hardware y un software que al conectarse entre el sistema de facturación y una máquina fiscal a través del puerto serial, permite hacer la lectura de los datos contenidos en la memoria de trabajo, memoria fiscal y memoria de auditoria, generando un archivo con la información leída o extraída para luego enviarla vía internet a el servidor del Sistema Centralizado de Facturación Electrónica.',
        contenido3: '',
        img1: 'images/imp/ismart.png',
        img2: 'images/imp/ismart.png',
        img3: 'images/imp/ismart.png',

        icono1:    'images/imp/hka3.png',
        icondesc1: 'Fiscat HKA80',
        icono2:    'images/imp/dascon3.png',
        icondesc2: 'Tally Dascom 1140',
        icono3:    'images/imp/bixolon-1.png',
        icondesc3: 'Bixolon',

        banner:'images/imp/bannerdt-4.png',

    });
});

app.get('/ismartw', (req, res)=>{
    res.render('dTrans', {

        titulo: 'Dispositivo de Transmision iSmart-W',
        
        contenido1: 'Es un dispositivo electrónico, que se conecta a una máquina fiscal, permitiendo extraer los reportes Z contenidos en la memoria fiscal y transmitirlos a el servidor  del Sistema Centralizado de Facturación Electrónica.',
        contenido2: 'Él está conformado por un hardware y un software que al conectarse entre el sistema de facturación y una máquina fiscal a través del puerto serial, permite hacer la lectura de los datos contenidos en la memoria de trabajo, memoria fiscal y memoria de auditoria, generando un archivo con la información leída o extraída para luego enviarla vía internet a el servidor del Sistema Centralizado de Facturación Electrónica.',
        contenido3: '',
        img1: 'images/imp/ismartw.png',
        img2: 'images/imp/ismart-2.png',
        img3: 'images/imp/ismartw.png',

        icono1:    'images/imp/hka3.png',
        icondesc1: 'Fiscat HKA80',
        icono2:    'images/imp/dascon3.png',
        icondesc2: 'Tally Dascom 1140',
        icono3:    'images/imp/bixolon-1.png',
        icondesc3: 'Bixolon SRP-812',

        banner:'images/imp/bannerdt-5.png',

    });
});

app.get('/imobile', (req, res)=>{
    res.render('dTrans', {

        titulo: 'Dispositivo de Transmision iMobile',
        
        contenido1: 'Es un dispositivo electrónico, que se conecta a una máquina fiscal, permitiendo extraer los reportes Z contenidos en la memoria fiscal y transmitirlos a el servidor  del Sistema Centralizado de Facturación Electrónica.',
        contenido2: 'Él está conformado por un hardware y un software que al conectarse entre el sistema de facturación y una máquina fiscal a través del puerto serial, permite hacer la lectura de los datos contenidos en la memoria de trabajo, memoria fiscal y memoria de auditoria, generando un archivo con la información leída o extraída para luego enviarla vía internet a el servidor del Sistema Centralizado de Facturación Electrónica.',
        contenido3: '',
        img1: 'images/imp/dthka.png',
        img2: 'images/imp/dthka-2.png',
        img3: 'images/imp/dthka-1.png',

        icono1:    'images/imp/hka3.png',
        icondesc1: 'Fiscat HKA80',
        icono2:    'images/imp/dascon3.png',
        icondesc2: 'Tally Dascom 1140',
        icono3:    'images/imp/bixolon-1.png',
        icondesc3: 'Bixolon SRP-812',

        banner:'images/imp/bannerdt-3.png',

    });
});

app.get('*', (req, res)=>{
    res.sendFile(__dirname + '/public/404.html');
});


app.listen(port, () => {
    console.log(`app listening on port ${port}`)
});