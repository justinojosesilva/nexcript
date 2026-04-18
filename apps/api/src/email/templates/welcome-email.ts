export function welcomeEmailTemplate(args: {
  userName: string;
  userEmail: string;
  createVideoUrl: string;
}): string {
  const { userName, userEmail, createVideoUrl } = args;

  return `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Bem-vindo ao nexvideo</title>
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
          font-size: 28px;
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
        .features {
          background-color: #f5f5f5;
          border-radius: 6px;
          padding: 20px;
          margin: 20px 0;
        }
        .feature-item {
          margin: 12px 0;
          padding-left: 20px;
          position: relative;
        }
        .feature-item:before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #000;
          font-weight: bold;
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

          <h1>Bem-vindo, ${userName}! 🎉</h1>

          <p>Sua conta foi criada e configurada com sucesso! Você já pode começar a criar conteúdo com a ajuda de IA.</p>

          <div class="features">
            <p style="margin-top: 0; font-weight: 600; color: #000;">O que você pode fazer agora:</p>
            <div class="feature-item">Gerar scripts de vídeo com IA</div>
            <div class="feature-item">Criar narrações profissionais</div>
            <div class="feature-item">Analisar tendências de nicho</div>
            <div class="feature-item">Exportar seus projetos</div>
          </div>

          <p>Clique no botão abaixo para criar seu primeiro vídeo e explorar todo o poder do nexvideo:</p>

          <div class="button-container">
            <a href="${createVideoUrl}" class="button">Criar Primeiro Vídeo</a>
          </div>

          <p>Se você tiver dúvidas ou precisar de ajuda, nossa equipe de suporte está pronta para ajudar.</p>

          <p style="font-size: 14px; color: #666;">Aproveite e bom conteúdo! 🚀</p>

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
