const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configurer Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.post('/api/contact', (req, res) => {
  const { firstName, lastName, email, interest, message, toEmail } = req.body;
  const mailOptions = {
    from: email,
    to: toEmail,
    subject: `Nouveau message de ${firstName} ${lastName}`,
    text: `Intérêt: ${interest}\n\nMessage: ${message}`
  };
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Erreur lors de l\'envoi de l\'email');
    } else {
      console.log('Email envoyé: ' + info.response);
      res.status(200).send('Email envoyé avec succès');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});