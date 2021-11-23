import { createIngDropBox } from '../view/DOM/createIngDropBox.js';
import { createIngTags } from '../view/DOM/createTags.js';
import { getAllIng, getFilterIng, handlerIngLi } from '../Handler/handlerIng.js';
import { UpdateData } from './UpdateState.js';
// import { closeIngDropBox, openIngDropBox } from '../view/Display/displayIngDropBox.js';
// import { closeAppDropBox } from '../view/Display/displayAppDropBox.js';
// import { closeUstDropBox } from '../view/Display/displayUstDropBox.js';
// import { deletedTag } from '../view/Display/displayTags.js';
// import { removeSpanError, getSpanErrorIng } from '../view/Display/displayError.js';
// import { updateIngRecipe } from './afterDeleted.js';
import { recipes } from '../data.js';

export const runTest = (classInput , name) => {

	let state = [...recipes];

	const updateState = new UpdateData(state);
	console.log("runTest name : " + name)

	let type = "";

	switch (classInput) {
		case "li ing-li":
			type = classInput.substring(3,6);
					updateState.updateAllData(name,type)
			break;

		case "li app-li":
			type = classInput.substring(3,6);
					updateState.updateAllData(name,type)
			break;

		case "li ust-li":
			type = classInput.substring(3,6);
					updateState.updateAllData(name,type)
			break;

		default:
			break;
	}
}


// export const runIng = (STATEDATA) => {
// 	const inpIng1 = document.querySelector('.target-ing');
// 	const inpIng2 = document.querySelector('.inp-ing');
// 	// TAB ON INPUT1
// 	inpIng1.addEventListener("keyup", (e) => {
// 		if (e.keyCode === 9) {
// 			focusInpIng1();
// 		}
// 	});

// 	// CLICK ON INPUT1
// 	inpIng1.addEventListener('click', () => {
// 		focusInpIng1();
// 	});

// 	// INPUT2
// 	inpIng2.addEventListener('input', () => {
// 		const allIng = document.querySelector('.all-ing');

// 		let inpValue = inpIng2.value;
// 		if (inpValue.length > 2) {
// 			const filtIng = getFilterIng(inpValue);
// 			allIng.innerHTML = '';
// 			// deleted duplicate ingredients inside the dropBox
// 			const noDblIng = filtIng.filter(function (ele, pos) {
// 				return filtIng.indexOf(ele) == pos;
// 			});

// 			const tagsSelected = document.querySelectorAll('.tag-ing span');
// 			const tagsToErase = [];

// 			if (tagsSelected.length > 0) {
// 				tagsSelected.forEach(span => {
// 					tagsToErase.push(span.innerHTML);
// 				})
// 				tagsToErase.forEach(tag => {
// 					noDblIng.forEach((ing, index) => {
// 						if (ing.toLocaleLowerCase() == tag.toLocaleLowerCase()) {
// 							noDblIng.splice(index, 1);
// 						};
// 					});
// 				});
// 			};
// 			if (noDblIng == 0) {
// 				getSpanErrorIng();
// 			} else {
// 				removeSpanError();
// 				createIngDropBox(noDblIng);
// 			}
// 		} else if (inpValue.length == 0) {
// 			const allIng = getAllIng(STATEDATA);
// 			allIng.innerHTML = '';
// 			createIngDropBox(allIng);

// 			removeSpanError();
// 		}
// 		const ingLis = document.querySelectorAll('.ing-li');
// 		ingLis.forEach(li => {
// 			li.addEventListener('click', () => {
// 				clickOnIngLi(li);
// 			})
// 		});
// 	});

// 	const focusInpIng1 = () => {
// 		openIngDropBox();
// 		closeAppDropBox();
// 		closeUstDropBox();
// 		inpIng2.focus();

// 		const allIng = getAllIng(STATEDATA);
// 		createIngDropBox(allIng);
// 		handlerIngLi();

// 		// CLICK ON A TAG
// 		const ingLis = document.querySelectorAll('.ing-li');
// 		ingLis.forEach(li => {
// 			li.addEventListener('click', () => {
// 				clickOnIngLi(li);
// 			})
// 		});
// 		removeSpanError();
// 	}

// 	const clickOnIngLi = (li) => {
// 		let inpValue = li.innerHTML;
// 		let className = li.className;
// 		runTest(className,inpValue)

// 		createIngTags(inpValue);
// 		deletedTag();
// 		// createIngDropBox(noDblIng);
// 		closeIngDropBox();
// 	};
// };