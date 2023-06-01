const switchButton = document.getElementById('switch');
 
switchButton.addEventListener('click', () => {
    document.body.classList.toggle('dark'); //alterna el HTML a modo 'dark'
    switchButton.classList.toggle('active');//cuando el boton esta en modo activo cambia a modo claro
});