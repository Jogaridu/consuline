const axios = require('axios');

module.exports = {
    enviarSMS(sms) {
        return axios.post("https://api2.totalvoice.com.br/sms", sms, {
            headers: {
                "Access-Token": "b58f34ec55fd05470dbf60ae27d81f23"
            }
        })
    }
}