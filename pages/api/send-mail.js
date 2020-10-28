import nodeMailer from 'nodemailer'
import sgTransport from 'nodemailer-sendgrid-transport'
import sgMail from '@sendgrid/mail'

export default (req, res) => {
    if (req.method === 'POST') {
        const { area, name, celular, email, people, time} = req.body

        sgMail.setApiKey('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')

        const contentHTML = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <title>Correo</title>
            </head>
            <body>
                <h2>Información de la reserva: ${area}</h2>
                <ul>
                    <li>Zona: ${area}</li>
                    <li>Nombre: ${name}</li>
                    <li>Celular: ${celular}</li>
                    <li>Email: ${email}</li>
                    <li>Numero de personas: ${people}</li>
                    <li>Hora: ${time}</li>
                </ul>
            </body>
            </html>
        `
        const msg = {
            to: 'sebas_ariasd@hotmail.com',
            from: 'sebas_ariasd@hotmail.com',
            subject: 'Reserva Capital Bistró Panmá',
            text: 'esete es el texto de inicio',
            html: contentHTML
        }
        
        res.status(200).json({ info : info})

    } else {
        // Handle any other HTTP method
    }
}