const travelForm = document
	.getElementById('travelForm')
	.addEventListener('submit', handleForm2);

function handleForm1(ev) {
	ev.preventDefault();
	let travelForm = ev.target;
	const formData = new FormData(travelForm);
	let obj = { diet: [] };
	console.log(formData);
	for (let [key, values] of formData) {
		if (formData.get(key) === 'on') {
			console.log(formData.get(values));
		} else {
			obj[key] = formData.get(key);
		}
	}
}

function handleForm2(ev) {
	ev.preventDefault();
	let travelForm = ev.target;
	const formData = new FormData(travelForm);

	let obj = { diet: [] };

	for (let [key] of formData) {
		if (formData.get(key) === 'on') {
			for (value of formData.values()) {
				obj.diet.push(value);
			}
		} else {
			obj[key] = formData.get(key);
		}
	}
	console.log(formData);
	console.log('diet', obj.diet);
}
// console.log(obj);

//https://developer.mozilla.org/en-US/docs/Web/API/FormData/values

// console.log(formData.values('on'));

// alert(
// 	`First Name: ${obj.firstName}
//      Last Name: ${obj.lastName}
//      Age: ${obj.age}
//      Age: ${obj.destination}
//      Gender: ${obj.gender}
//      Dietary Restrictions: ${obj.diet}
//     `
// );
// travelForm.reset();
