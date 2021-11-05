export const displayError = () => {
	const main = document.querySelector('main');
   const registre = document.querySelector('.registre');
   registre.innerHTML = '';

   const infoError = document.createElement('div');
   infoError.classList.add('infoError');

   const logoError = document.createElement('img');
   logoError.src = '../Images/exclamation-circle-solid.svg';

   const spanError = document.createElement('span');
   spanError.innerHTML = "Sorry, we didn't find recipe...";

	infoError.append(logoError);
	infoError.append(spanError);

	main.append(infoError);
}