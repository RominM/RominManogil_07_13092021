import { recipes } from "../data.js";

export const getAllUst = (STATEDATA) => {
   let arrayUst = [];
   STATEDATA.forEach(recipe => {
      if(recipe.display) {
         recipe.ustensils.forEach(ustensil => {
            const ustensilsList = ustensil;
            arrayUst.push(ustensilsList);
         })
      }
   });
   const filtUstArray = arrayUst.filter(function (ele, pos) {
      return arrayUst.indexOf(ele) == pos;
   })
   return filtUstArray
};

// Includes to lower case
export const getFilterUst = (inpValue) => {
   const data =[...recipes];
   let filtUst = [];

   data.forEach(recipe => {
      if(recipe.display) {
         recipe.ustensils.forEach(ustensil => {
            const ustMemo = ustensil.toLocaleLowerCase();
            ustMemo.includes(inpValue.toLowerCase()) && filtUst.push(ustMemo);
         })
      }
   })
   return filtUst
};

export const handlerUstLi = () => {

   const ustLis = document.querySelectorAll('.ust-li');

   const tagsSelected = document.querySelectorAll('.tag-ust span');
   const tagsToErase = [];

   if (tagsSelected.length > 0) {
      tagsSelected.forEach(span => {
         tagsToErase.push(span.innerHTML);
      })
      tagsToErase.forEach(tag => {
         ustLis.forEach(li => {
            if (li.innerHTML.toLocaleLowerCase() == tag.toLocaleLowerCase()) {
               li.style.display = 'none';
            };
         });
      });
   };
}