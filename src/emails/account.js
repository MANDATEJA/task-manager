const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// sgMail.send({
//     to: 'tejareddy.teju@gmail.com',
//     from: 'tejareddy.teju@gmail.com',
//     subject: 'Thanks for joining in!',
//     text: `Welcome to the app. Let me know how you get along with the app.`
// })

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'tejareddy.teju@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendGoodbyeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'tejareddy.teju@gmail.com',
        subject: 'Until next time!!',
        text: `Goodbye ${name}. Was there anything that we could have done to keep your from cencelling your account? Please let us know.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
}