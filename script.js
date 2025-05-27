let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let contacto = document.querySelector('#btn-contacto');
let sobreMi = document.querySelector('#btn-sobreMi');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

contacto.onclick = (e) => {
    e.preventDefault();
    const downloadLink = document.querySelector('#downloadContact');
    if (downloadLink) {
        downloadLink.click();
    }
};

sobreMi.onclick = () => {
    document.getElementById("sobreMi").scrollIntoView({
        behavior: "smooth"
    });
};

const vcardData = `
BEGIN:VCARD
VERSION:3.0
FN:Alexander Ruiz
N:Ruiz;Alexander;;;
TEL;TYPE=work:+573116300576
EMAIL:directorcomercial@luma.com.co
URL:https://luma.com.co
URL:https://www.facebook.com/almaceneslumaoficial/
URL:https://www.instagram.com/almaceneslumaoficial
END:VCARD
`.trim();

const blob = new Blob([vcardData], { type: 'text/vcard' });
const url = URL.createObjectURL(blob);

const downloadLink = document.querySelector('#downloadContact');
if (downloadLink) {
    downloadLink.href = url;
}