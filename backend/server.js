const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Configurer nodemailer avec Mailtrap
// Looking to send emails in production? Check out our Email API/SMTP product!
var transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "e3298a7939b3b4",
    pass: "c6603109047f89"
  }
});

// Route pour le formulaire de contact
app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, email, interest, message, toEmail } = req.body;
  
  // Options du mail
  const mailOptions = {
    from: email, // L'email sera "envoyé" par l'utilisateur du formulaire
    to: toEmail, // L'email sera capturé par Mailtrap avant d'être envoyé
    subject: `Nouveau message de ${firstName} ${lastName} - Intérêt: ${interest}`,
    text: `
      De: ${firstName} ${lastName}
      Email: ${email}
      Intérêt: ${interest}
      
      Message:
      ${message}
    `,
    html: `
      <strong>De:</strong> ${firstName} ${lastName}<br>
      <strong>Email:</strong> ${email}<br>
      <strong>Intérêt:</strong> ${interest}<br>
      <br>
      <strong>Message:</strong><br>
      ${message.replace(/\n/g, '<br>')}
    `
  };
  
  try {
    // Envoyer l'email (sera capturé par Mailtrap)
    const info = await transporter.sendMail(mailOptions);
    console.log('Email envoyé à Mailtrap:', info.messageId);
    res.status(200).json({ 
      success: true, 
      message: 'Message envoyé avec succès (capturé par Mailtrap)',
      messageId: info.messageId
    });
  } catch (error) {
    console.error('Erreur d\'envoi d\'email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Erreur lors de l\'envoi de l\'email'
    });
  }
});

// Démarrer le serveur
app.listen(5002, () => {
  console.log('Serveur en cours d\'exécution sur le port 5002');
});