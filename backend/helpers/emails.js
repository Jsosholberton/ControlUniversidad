import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

/**
 * Send a registration email with a confirmation link.
 * @param {Object} datos - Data for the registration email.
 */
export const emailReg = async (datos) => {
  const { email, name, token } = datos;

  // Create a transport configuration for sending email
  const transport = nodemailer.createTransport({
    host: process.env.HOST_NODEMAILER,
    port: process.env.PORT_NODEMAILER,
    auth: {
      user: process.env.USER_NODEMAILER,
      pass: process.env.PASS_NODEMAILER,
    },
  });

  // Compose and send the registration confirmation email
  const info = await transport.sendMail({
    from: '"Control almuerzos - Admin" <control@almuerzos.com>', // Sender's information
    to: email, // Recipient's email
    subject: "Universidad del Quindío - Confirma tu cuenta", // Email subject
    text: "Confirma tu cuenta en el aplicativo", // Plain text version of the email
    html: `<p>Hola ${name} Confirma tu cuenta en el aplicativo:</p>
    <p>Tu cuenta aún no esta lista, confirma clickeando el siguiente enlace:
    <a href="${process.env.FRONTEND_URL}confirmar/${token}">Confirmar cuenta</a> </p>
    <p>Si no solicitaste esto, puedes ignorar este mensaje</p>
    `
  });
};

/**
 * Send a password reset email with a link to reset your password.
 * @param {Object} datos - Data for the password reset email.
 */
export const emailPwd = async (datos) => {
    const { email, name, token } = datos;

    // Create a transport configuration for sending the password restoration email
    const transport = nodemailer.createTransport({
      host: process.env.HOST_NODEMAILER,
      port: process.env.PORT_NODEMAILER,
      auth: {
        user: process.env.USER_NODEMAILER,
        pass: process.env.PASS_NODEMAILER,
      },
    });

    // Compose and send the password restoration email
    const info = await transport.sendMail({
      from: '"Control almuerzos - Admin" <control@almuerzos.com>', // Sender's information
      to: email, // Recipient's email
      subject: "Aplicativo Universidad del Quindío - Restaura tu contraseña", // Email subject
      text: "Restaura tu cuenta en el aplicativo", // Plain text version of the email
      html: `<p>Hola: ${name} restaura tu cuenta en el aplicativo de control de almuerzos de la Universidad del Quindío</p>
      <p>Dale click al enlace de abajo para restaurar tu cuenta:
      <a href="${process.env.FRONTEND_URL}olvidepassword/${token}">Restaurar</a> </p>
      <p>Si no solicitaste restaurar tu contraseña puedes ingnorar este correo</p>
      `
    });
  };
