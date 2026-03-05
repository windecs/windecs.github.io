const express = require("express");
const bodyParser = require("body-parser");
const twilio = require("twilio");

const app = express();
app.use(bodyParser.json());

// данные из Twilio
const accountSid = "ACfec354764ca8a446322276eddd0d15b0";
const authToken = "21bc7f192f58cd68723f8d24d4009ff2";
const client = twilio(accountSid, authToken);

app.post("/send-sms", (req, res) => {
  const msg = req.body.message;
  const toPhone = "+37120374975"; // телефон получателя

  client.messages
    .create({
      body: msg,
      from: "+14155238886", // твой Twilio номер
      to: toPhone
    })
    .then(message => res.send("SMS отправлено!"))
    .catch(err => res.send(err));
});

app.listen(3000, () => console.log("Сервер запущен на http://localhost:3000"));
