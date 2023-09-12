const nodeMailer = require('nodemailer')

const mailConfig = async(to, sub, content) =>{
    try {
        
        //mail configuration
        const transporter = await nodeMailer.createTransport({
            service:process.env.EMAIL_SERVICE,
            host:process.env.EMAIL_HOST,
            port:process.env.EMAIL_PORT,
            auth: {
                user:process.env.EMAIL_ID,
                pass:process.env.EMAIL_PASS
            }
        });

        //transport mail(send mail)
        let info = await transporter.sendMail({
            from: process.env.EMAIL_ID,
            to,
            subject:sub,
            html: `<div>${content}</div>`
        });
        return info;
    } catch (error) {
        throw error;
    }
}
module.exports = mailConfig