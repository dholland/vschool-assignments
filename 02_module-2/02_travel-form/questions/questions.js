const travelForm = document
	.getElementById('travelForm')
	.addEventListener('submit', handleForm);

function handleForm(ev) {
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

	//https://developer.mozilla.org/en-US/docs/Web/API/FormData/values

	console.log(formData.values('on'));

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
}
