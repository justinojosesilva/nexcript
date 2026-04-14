export function paymentFailedEmailTemplate(args: {
  userEmail: string;
  organizationName: string;
  amountBrl: string;
  nextRetryDate: string;
  updateCardUrl: string;
}): string {
  const { userEmail, organizationName, amountBrl, nextRetryDate, updateCardUrl } = args;

  return `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Falha no Pagamento — Nexcript</title>
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
          color: #c0392b;
          font-size: 22px;
          margin: 20px 0;
          text-align: center;
        }
        p {
          color: #555;
          font-size: 16px;
          margin: 15px 0;
        }
        .info-box {
          background-color: #fff8f8;
          border: 1px solid #f5c6cb;
          border-radius: 6px;
          padding: 20px;
          margin: 20px 0;
        }
        .info-row {
          display: flex;
          justify-content: space-between;
          margin: 8px 0;
          font-size: 15px;
        }
        .info-label {
          color: #888;
        }
        .info-value {
          font-weight: 600;
          color: #333;
        }
        .button-container {
          text-align: center;
          margin: 30px 0;
        }
        .button {
          display: inline-block;
          padding: 12px 32px;
          background-color: #c0392b;
          color: #fff;
          text-decoration: none;
          border-radius: 6px;
          font-weight: 600;
          font-size: 16px;
        }
        .button:hover {
          background-color: #a93226;
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
            <div class="logo">Nexcript</div>
            <p class="subtitle">Plataforma de Produção de Conteúdo com IA</p>
          </div>

          <h1>⚠️ Falha no Pagamento</h1>

          <p>Olá,</p>

          <p>Houve uma falha ao processar o pagamento da sua assinatura <strong>${organizationName}</strong>. Para manter o acesso ininterrupto à plataforma, atualize as informações do cartão.</p>

          <div class="info-box">
            <div class="info-row">
              <span class="info-label">Valor cobrado:</span>
              <span class="info-value">R$ ${amountBrl}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Próxima tentativa:</span>
              <span class="info-value">${nextRetryDate}</span>
            </div>
          </div>

          <p>Atualize seu cartão antes da próxima tentativa para evitar a suspensão da conta:</p>

          <div class="button-container">
            <a href="${updateCardUrl}" class="button">Atualizar Cartão</a>
          </div>

          <p>Se já atualizou o cartão ou acredita que isso é um erro, entre em contato com nosso suporte.</p>

          <div class="footer">
            <p>© 2026 Nexcript. Todos os direitos reservados.</p>
            <p>Enviado para: <strong>${userEmail}</strong></p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}
