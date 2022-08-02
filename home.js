const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
});

document.getElementById("mainMenu").onchange = function() {
    if (this.selectedIndex!==0) {
        window.location.href = this.value;
    }        
};