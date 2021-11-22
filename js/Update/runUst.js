import { createUstDropBox } from '../view/DOM/createUstDropBox.js';
import { getAllUst, getFilterUst } from '../Handler/handlerUst.js';
import { removeSpanError, getSpanErrorUst } from '../view/Display/displayError.js';
import { eventToUstLi } from '../Handler/liEvent.js';
import { handlerTargetUst } from '../Handler/Targets/handlerUstTarget.js';


export const runUst = (STATEDATA) => {
	handlerTargetUst(STATEDATA);

	// INPUT
	const inputUst = document.querySelector('.inp-ust');

	inputUst.addEventListener('input', () => {
		let inpValue = inputUst.value;
		const allUst = document.querySelector('.all-ust');
		if (inpValue.length > 2) {
			const filtUst = getFilterUst(inpValue);
			allUst.innerHTML = '';
			// deleted duplicate ustensils inside the dropBox
			const noDblUst = filtUst.filter(function (ele, pos) {
				return filtUst.indexOf(ele) == pos;
			});

			const tagsSelected = document.querySelectorAll('.tag-ust span');
			const tagsToErase = [];

			if (tagsSelected.length > 0) {
				tagsSelected.forEach(span => {
					tagsToErase.push(span.innerHTML);
				})
				tagsToErase.forEach(tag => {
					noDblUst.forEach((ust, index) => {
						if (ust.toLocaleLowerCase() == tag.toLocaleLowerCase()) {
							noDblUst.splice(index, 1);
						};
					});
				});
			};
			if (noDblUst == 0) {
				getSpanErrorUst();
			} else {
				removeSpanError();
				createUstDropBox(noDblUst);
			}
		} else if (inpValue.length == 0) {
			const allUst = getAllUst(STATEDATA);
			allUst.innerHTML = '';
			createUstDropBox(allUst);
			removeSpanError();
		}
		eventToUstLi(STATEDATA);
	});
};


// import { createUstDropBox } from '../view/DOM/createUstDropBox.js';
// import { createUstTags } from '../view/DOM/createTags.js';
// import { getAllUst, getFilterUst, handlerUstLi } from '../Handler/handlerUst.js';
// import { UpdateData } from './UpdateState.js';
// import { closeUstDropBox, openUstDropBox } from '../view/Display/displayUstDropBox.js';
// import { closeIngDropBox } from '../view/Display/displayIngDropBox.js';
// import { closeAppDropBox } from '../view/Display/displayAppDropBox.js';
// import { deletedTag } from '../view/Display/displayTags.js';
// import { removeSpanError, getSpanErrorUst } from '../view/Display/displayError.js';
// import { runTest } from './run.js';


// export const runUst = (STATEDATA) => {
	// const inpUst1 = document.querySelector('.target-ust');
	// const inpUst2 = document.querySelector('.inp-ust');
	// // TAB ON INPUT1
	// inpUst1.addEventListener("keyup", (e) => {
	// 	if (e.keyCode === 9) {
	// 		focusInpUst1();
	// 	}
	// });
	// // CLICK
	// inpUst1.addEventListener('click', () => {
	// 	focusInpUst1();
	// });
	// // INPUT
	// inpUst2.addEventListener('input', () => {
	// 	let inpValue = inpUst2.value;
	// 	const allUst = document.querySelector('.all-ust');
	// 	if (inpValue.length > 2) {
	// 		const filtUst = getFilterUst(inpValue);
	// 		allUst.innerHTML = '';
	// 		// deleted duplicate ustensils inside the dropBox
	// 		const noDblUst = filtUst.filter(function (ele, pos) {
	// 			return filtUst.indexOf(ele) == pos;
	// 		});

	// 		const tagsSelected = document.querySelectorAll('.tag-ust span');
	// 		const tagsToErase = [];

	// 		if (tagsSelected.length > 0) {
	// 			tagsSelected.forEach(span => {
	// 				tagsToErase.push(span.innerHTML);
	// 			})
	// 			tagsToErase.forEach(tag => {
	// 				noDblUst.forEach((ust, index) => {
	// 					if (ust.toLocaleLowerCase() == tag.toLocaleLowerCase()) {
	// 						noDblUst.splice(index, 1);
	// 					};
	// 				});
	// 			});
	// 		};
	// 		if (noDblUst == 0) {
	// 			getSpanErrorUst();
	// 		} else {
	// 			removeSpanError();
	// 			createUstDropBox(noDblUst);
	// 		}
	// 	} else if (inpValue.length == 0) {
	// 		const allUst = getAllUst(STATEDATA);
	// 		allUst.innerHTML = '';
	// 		createUstDropBox(allUst);
			
	// 		removeSpanError();
	// 	}

	// 	const ustLis = document.querySelectorAll('.ust-li');
	// 	ustLis.forEach(li => {
	// 		li.addEventListener('click', () => {
	// 			clickOnUstLi(li);
	// 		})
	// 	})
	// });

	// const focusInpUst1 = () => {
	// 	openUstDropBox();
	// 	closeIngDropBox();
	// 	closeAppDropBox();
	// 	inpUst2.focus();
	
	// 	const allUst = getAllUst(STATEDATA);
	// 	createUstDropBox(allUst);
	// 	handlerUstLi();
	
	// 	// CLICK ON A TAG
	// 	const ustLis = document.querySelectorAll('.ust-li');
	// 	ustLis.forEach(li => {
	// 		li.addEventListener('click', () => {
	// 			clickOnUstLi(li);
	// 		})
	// 	})
	// 	removeSpanError();
	// }
	
	// const clickOnUstLi = (li) => {
	// 		const allUst = document.querySelector('.all-ust');
	// 		allUst.innerHTML = '';
							
	// 		let inpValue = li.innerHTML;
	// 		let className = li.className;
	// 		const filtUst = getFilterUst(inpValue);
	// 		const noDblUst = filtUst.filter(function (ele, pos) {
	// 			return filtUst.indexOf(ele) == pos;
	// 		});
	// 		//const updateState = new UpdateData(STATEDATA, inpValue);
	// 		//updateState.updateState(filtUst);
	// 		runTest(className,inpValue);

	// 		createUstDropBox(noDblUst);
	// 		createUstTags(inpValue);
	// 		deletedTag();
	// 		closeUstDropBox();
	// };
// };

 