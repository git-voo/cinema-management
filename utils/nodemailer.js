const nodemailer = require("nodemailer")



export const mail = (code, receiver) => {
    //code is the verification code being sent to user
    // receiver is an object that holds user with which we can access user's name and email address
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ourEmail@email.com',
            pass: 'rumbledpassword'
        }
    });

    const mailOptions = {
        from: 'ourEmail@email.com',
        to: receiver.email,
        subject: 'Verification Code',
        html: `<p> Welcome <b>${receiver.name}</b>, Your verification code is ${code} </p>`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}