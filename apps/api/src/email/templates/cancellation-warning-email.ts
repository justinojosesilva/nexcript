export function cancellationWarningEmailTemplate(args: {
  userEmail: string;
  organizationName: string;
  cancellationDate: string;
  billingPortalUrl: string;
}): string {
  const { userEmail, organizationName, cancellationDate, billingPortalUrl } = args;

  return `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Assinatura encerrando em breve — nexvideo</title>
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
          color: #e67e22;
          font-size: 22px;
          margin: 20px 0;
          text-align: center;
        }
        p {
          color: #555;
          font-size: 16px;
          margin: 15px 0;
        }
        .warning-box {
          background-color: #fef9f0;
          border: 1px solid #f5d49a;
          border-radius: 6px;
          padding: 20px;
          margin: 20px 0;
          text-align: center;
        }
        .warning-date {
          font-size: 22px;
          font-weight: 700;
          color: #e67e22;
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
      </style>
    </head>
    <body>
      <div class="container">
        <div class="content">
          <div class="header">
            <div class="logo">nexvideo</div>
            <p class="subtitle">Plataforma de Produção de Conteúdo com IA</p>
          </div>

          <h1>⏰ Assinatura encerrando em breve</h1>

          <p>Olá,</p>

          <p>Sua assinatura da organização <strong>${organizationName}</strong> está programada para encerrar automaticamente em:</p>

          <div class="warning-box">
            <div class="warning-date">${cancellationDate}</div>
            <p style="margin: 8px 0 0; color: #888; font-size: 14px;">Após essa data, você perderá acesso às funcionalidades pagas</p>
          </div>

          <p>Se mudou de ideia, acesse o portal de cobrança para reativar ou gerenciar sua assinatura:</p>

          <div class="button-container">
            <a href="${billingPortalUrl}" class="button">Gerenciar Assinatura</a>
          </div>

          <p>Se não deseja continuar, nenhuma ação é necessária — sua assinatura será encerrada na data acima.</p>

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
