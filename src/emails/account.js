const sgMail = require('@sendgrid/mail')
const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to: 'tejareddy.teju@gmail.com',
    from: 'tejareddy.teju@gmail.com',
    subject: 'First email from TaskApp',
    text: 'Test email from TaskApp'
})