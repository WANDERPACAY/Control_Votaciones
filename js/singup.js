//obtiene informacion del boton y el contenedor
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
//lee cuando se le de click al boton y agrega el evento al container
signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});
//lee cuando se le de click al boton y quita el evento al container
signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});