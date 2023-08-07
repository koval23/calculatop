//--------------------------------

const form = document.querySelector('.form');
const form1 = document.querySelector('.form1');
if (form) {
	form.addEventListener("submit", function (e) {
		const formNumOne = form.querySelector('#num_1').value;
		const formNumTwo = form.querySelector('#num_2').value;
		const formResult = form.querySelector('.form__result');
		formResult.innerHTML = getSumm(formNumOne, formNumTwo);

		e.preventDefault();
	});
}
if (form1) {
	form1.addEventListener("submit", function (e) {

		const formNumOne1 = form1.querySelector('#num_4').value;
		const formNumTwo1 = form1.querySelector('#num_5').value;
		const formResult1 = form1.querySelector('.form__result2');
		formResult1.innerHTML = getSumm2(formNumOne1, formNumTwo1);

		e.preventDefault();
	});
}

function getSumm(numOne, numTwo) {
	return Number(numOne) * Number(numTwo);
}
function getSumm2(numOne1, numTwo1) {
	return Number(numOne1) / Number(numTwo1);
}
