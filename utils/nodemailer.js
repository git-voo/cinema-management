const nodemailer = require("nodemailer"); 
const getFirstName = require("./getFirstname");



const mail = (code, receiver) => {
    //code is the verification code being sent to user
    // receiver is an object that holds user with which we can access user's name and email address
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: receiver.email,
        subject: 'Verification Code',
        html: `<p> Welcome <b>${getFirstName(receiver.fullName)}</b>, Your verification code is ${code} </p>`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
         if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}


module.exports = mail