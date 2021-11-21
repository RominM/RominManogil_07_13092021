import { openUstDropBox } from "../Display/displayUstDropBox.js";

// CREATE UST DROPBOX
export const createUstDropBox = (arrayUst) => {
   const containerUst = document.querySelector('.inp-container-ust');
   const inputUst = document.querySelector('.inp-ust');
   
   let allUst = document.querySelector('.all-ust');
   arrayUst.sort();
   // If allUst existe get empty
   if (allUst) {
      allUst.innerHTML = '';
   } else { // else it creted it
      allUst = document.createElement('ul');
      allUst.classList.add('all-ust');
      containerUst.append(allUst);
   }

   arrayUst.forEach(eachUst => {
      const ustLi = document.createElement('li');
      ustLi.classList.add('li', 'ust-li');
      ustLi.innerHTML = eachUst;

      allUst.append(ustLi);
   })
   openUstDropBox();
   inputUst.focus();
};
