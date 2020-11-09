const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "consulinetcc2020@gmail.com",
        pass: "Vinicius120"
    },
});

const mailOptions = {
    from: 'consulinetcc2020@gmail.com',
    to: 'guaguinhireis@gmail.com',
    subject: 'Seu exame esta pronto!',
    text: 'Olá Vinicius, aqui esta o resultado do seu exame',
    html: '<p>OK</p>'
};

transporter.sendMail(mailOptions, function (err, info) {
    if (err)
        console.log(err)
    else
        console.log(info);
});