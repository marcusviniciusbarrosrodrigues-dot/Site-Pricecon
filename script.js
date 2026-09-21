// Número oficial da Pricecon (só dígitos, com DDI 55)
const WHATSAPP_NUMBER = "1150710736";

// Botão "Abrir conversa no WhatsApp" (hero e seção de contato)
function openWhatsApp() {
    const mensagem = "Olá! Vim pelo site da Pricecon e gostaria de saber mais sobre os serviços.";
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
}

// Formulário de contato: monta a mensagem com os dados preenchidos
function sendForm(event) {
    event.preventDefault();

    const nome = document.getElementById("name").value.trim();
    const assunto = document.getElementById("subject").value;
    const mensagemCampo = document.getElementById("message").value.trim();

    const texto =
        `Olá, meu nome é ${nome}.\n` +
        `Assunto: ${assunto}\n` +
        (mensagemCampo ? `Mensagem: ${mensagemCampo}\n` : "") +
        `Gostaria de receber mais informações sobre os serviços da Pricecon.`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
}