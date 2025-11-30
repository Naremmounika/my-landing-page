const doctorContE1 = document.getElementById("doctor-cont");
const doctorParaE1 = document.getElementById("doctorPara");
if (window.innerWidth >= 768) {
    doctorParaE1.textContent = "Painless Root Canal Treatment in Delhi";
    doctorContE1.appendChild(doctorParaE1);
}