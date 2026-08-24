const WHATSAPP_NUMBER = "5511994671083";

const menu = document.querySelector('.menu');
const links = document.querySelector('.nav-links');
menu?.addEventListener('click', () => links.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

document.getElementById('contactForm')?.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const contact = document.getElementById('contact').value.trim();
  const message = document.getElementById('message').value.trim();
  const notice = document.getElementById('notice');
  if (!name || !contact || !message) return;
  const text = encodeURIComponent(`Olá, SIRIUS!\n\nNome: ${name}\nContato: ${contact}\nMensagem: ${message}`);
  if (WHATSAPP_NUMBER) {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
    notice.textContent = 'Abrindo o WhatsApp...';
  } else {
    notice.textContent = 'Configure o número do WhatsApp no arquivo script.js para receber as solicitações.';
  }
});
document.getElementById('year').textContent = new Date().getFullYear();
