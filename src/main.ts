import "./style.css";

const currentYear = new Date().getFullYear();

const footerYear = document.querySelector("footer p");

if (footerYear) {
    footerYear.textContent = `© ${currentYear} Your Name`;
}