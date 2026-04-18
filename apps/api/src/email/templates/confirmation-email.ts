export function confirmationEmailTemplate(args: {
  userEmail: string;
  confirmationUrl: string;
}): string {
  const { userEmail, confirmationUrl } = args;

  return `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Confirme seu Email — nexvideo</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
          line-height: 1.6;
          color: #333;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f9f9f9;
        }
        .content {
          background-color: #ffffff;
          border-radius: 8px;
          padding: 40px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .header {
          text-align: center;
          margin-bottom: 30px;
        }
        .logo {
          font-size: 24px;
          font-weight: 700;
          color: #000;
          margin-bottom: 10px;
        }
        .subtitle {
          color: #666;
          font-size: 14px;
        }
        h1 {
          color: #000;
          font-size: 24px;
          margin: 20px 0;
          text-align: center;
        }
        p {
          color: #555;
          font-size: 16px;
          margin: 15px 0;
        }
        .button-container {
          text-align: center;
          margin: 30px 0;
        }
        .button {
          display: inline-block;
          padding: 12px 32px;
          background-color: #000;
          color: #fff;
          text-decoration: none;
          border-radius: 6px;
          font-weight: 600;
          font-size: 16px;
        }
        .button:hover {
          background-color: #1a1a1a;
        }
        .footer {
          border-top: 1px solid #eee;
          margin-top: 30px;
          padding-top: 20px;
          text-align: center;
          font-size: 12px;
          color: #999;
        }
        .warning {
          background-color: #fef3cd;
          border: 1px solid #ffeaa7;
          border-radius: 4px;
          padding: 12px;
          margin: 20px 0;
          font-size: 14px;
          color: #856404;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="content">
          <div class="header">
            <div class="logo">nexvideo</div>
            <p class="subtitle">Plataforma de Produção de Conteúdo com IA</p>
          </div>

          <h1>Confirme seu Email</h1>

          <p>Olá!</p>

          <p>Obrigado por se registrar no nexvideo. Para ativar sua conta, confirme seu endereço de email clicando no botão abaixo:</p>

          <div class="button-container">
            <a href="${confirmationUrl}" class="button">Confirmar Email</a>
          </div>

          <p>Ou copie e cole este link em seu navegador:</p>
          <p style="word-break: break-all; font-size: 12px; color: #666; background-color: #f5f5f5; padding: 10px; border-radius: 4px;">${confirmationUrl}</p>

          <div class="warning">
            <strong>⏰ Este link expira em 24 horas</strong>
          </div>

          <p>Se você não criou essa conta, pode ignorar este email com segurança.</p>

          <div class="footer">
            <p>© 2026 nexvideo. Todos os direitos reservados.</p>
            <p>Enviado para: <strong>${userEmail}</strong></p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}
