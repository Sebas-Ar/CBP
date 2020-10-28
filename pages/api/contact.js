import sgMail from '@sendgrid/mail'

export default (req, res) => {

    if (req.method === 'POST') {
        const { name, cel, mail, msg } = req.body

        sgMail.setApiKey('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')

        const messageHTML = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <title>Contacto</title>
            </head>
            <body>
                <h2>Has recibido un mensaje de ${name}</h2>
                <ul>
                    <li>${cel}</li>
                    <li>${mail}</li>
                    <li>${msg}</li>
                </ul>
            </body>
            </html>
        `
        const inf = {
            to: 'sebas_ariasd@hotmail.com',
            from: 'sebas_ariasd@hotmail.com',
            subject: 'Reserva Capital Bistró Panmá',
            text: 'esete es el texto de inicio',
            html: messageHTML
        }

        sgMail.send(inf)

        console.log(req.body);
        res.status(200).json({info: req.body})
    } else {

    }
}