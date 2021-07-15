const nodemailer = require('nodemailer');

exports.handler = function (event, context, callback) {

    let data = JSON.parse(event.body)

    let transporter = nodemailer.createTransport({
        host: "smtp.zoho.com.au",
        port: "587",
        auth: {
            user: "anthony.almany@zohomail.com.au",
            pass: "samplePass"
        }
    });

    transporter.sendMail({
        from: "smtp.zoho.com.au",
        to: "anthony.almany@zohomail.com.au",
        subject: `Sending with React, Nodemailer and Netlify`,
        html: `
            <h3>Email from ${data.name} ${data.email}<h3>
            <p>${data.message}<p>
            `
    }, function (error, info) {
        if (error) {
            callback(error);
        } else {
            callback(null, {
                statusCode: 200,
                body: JSON.stringify({
                    'result': 'success'
                })
            });
        }
    });
}