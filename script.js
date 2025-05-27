let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let contacto = document.querySelector('#btn-contacto');
let sobreMi = document.querySelector('#btn-sobreMi')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


contacto.onclick = () => {
    document.getElementById("contacto").scrollIntoView({
        behavior:"smooth"
    });
}


sobreMi.onclick = () => {
    document.getElementById("sobreMi").scrollIntoView({
        behavior:"smooth"
    });
}

const vcardData = `
BEGIN:VCARD
VERSION:3.0
FN:Juan Pérez
N:Pérez;Juan;;;
TEL;TYPE=work:+521234567890
EMAIL:juan.perez@empresa.com
URL:https://www.empresa.com
URL:https://www.portafolio.com
X-SOCIALPROFILE;type=LinkedIn:https://linkedin.com/in/juanperez
X-SOCIALPROFILE;type=Instagram:https://instagram.com/juanux
END:VCARD
  `.trim();



  const blob = new Blob([vcardData], { type: 'text/vcard' });
  const url = URL.createObjectURL(blob);

  const downloadLink = document.getElementById('downloadContact');
  downloadLink.href = url;