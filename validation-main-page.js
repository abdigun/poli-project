	// // var valid password
	// var inputValid = $('.input-valid');

	// // validating input inside sign up form 

	// // regex 
	// const patterns = {
	// 	userName : /^[\w\d]{6,12}$/i,
	// 	emailSignUp: /^([a-z\d\.-_]+)@([a-z\d-]+)\.([a-z]{2,8})?$/i,
	// 	passwordSignUp:/^[\w@-]{8,20}$/,
	// 	addressSignUp:/^([a-z\d\.-_\s\,]+)?$/i,
	// 	inputcity:/^([a-z\d\.-_\s]+)?$/i,
	// 	inputstate:/^[a-z\s]+$/i,
	// 	inputpostcode:/^[\d]{4,10}$/
	// }

	// //validation function
	// function validateEmail(regex) {
	// 	if (regex.test(value)) {
	// 		$('.pass-not').removeClass('respon-pass');
	// 	}
	// 	else {
	// 		$('.pass-not').addClass('respon-pass');
	// 	}
	// }

	// // inputValid.each((input) => {
	// // 	$('input').on('keypress', (e) => {
	// // 	//console.log(e.target.attributes.name.value);
	// // 	validateEmail(e.target, patterns[e.target.attributes.name.value])
	// // 	});
	// // });


// validation script here

const inputs = document.querySelectorAll('input');

// validate the input inside the form using regex

// using the 'name' inside html 

const patterns = {
		userName : /^[\w\d]{6,12}$/i,
		emailSignUp: /^([a-z\d\.-_]+)@([a-z\d-]+)\.([a-z]{2,8})?$/i,
		passwordSignUp:/^[\w@-]{8,20}$/,
		addressSignUp:/^([a-z\d\.-_\s\,]+)?$/i,
		inputcity:/^([a-z\d\.-_\s]+)?$/i,
		inputstate:/^[a-z\s]+$/i,
		inputpostcode:/^[\d]{4,10}$/
};



//validation function

function validate(field, regex){
	if(regex.test(field.value)){
		field.className = 'valid';
	}
	else {field.className = 'invalid';}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', (e) => {
	console.log(e.target.attributes.name.value);
	validate(e.target, patterns[e.target.attributes.name.value])
	});
});
