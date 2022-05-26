require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID; 
const authToken = process.env.TWILIO_AUTH_TOKEN; 

const client = require('twilio')(accountSid, authToken);

contatos.forEach(element => {
        console.log(element['Nome'])
        console.log(element['Telefone'])

        const nome = element['Nome']
        const telefone = element['Telefone']
        
        client.messages.create({
                body:
                `Oi ${nome}`,
                from: 'whatsapp:+14155238886',
                to: `whatsapp:+55${telefone}`
        }).then(message => console.log(message.sid)).done();
        console.log('Enviado!\n\n')
});