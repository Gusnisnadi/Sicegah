import { useEffect } from 'react';
import "./chatbot.css"

function ChatBot({ webhookUrl }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.innerHTML = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
      createChat({
        webhookUrl: '${webhookUrl}',
        mode: 'fullscreen',
        initialMessages: [
		'Selamat datang di Sicegah, apakah ada yang bisa saya bantu'
	    ],
        i18n: {
            en: {
                title: 'Sipencegah',
                subtitle: "Sistem peringatan kondisi wilayah publik berbasis visualisasi map dan penganalisis kondisi badan berdasarkan hasil monitoring",
                footer: '',
                getStarted: 'Percakapan baru',
                inputPlaceholder: 'Ketikan pertanyaanmu...',
            },
        },
      });
    `;
    document.body.appendChild(script);

    return () => {
      const chat = document.querySelector('#n8n-chat');
      if (chat) chat.remove();
      document.body.removeChild(script);
    };
  }, [webhookUrl]);

  return null; // This component doesn’t render any visible JSX
}

export default ChatBot;
