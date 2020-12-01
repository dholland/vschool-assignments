const travelForm = document
	.getElementById('travelForm')
	.addEventListener('submit', handleForm2);

function handleForm2(ev) {
	ev.preventDefault();
	let travelForm = ev.target;
	const formData = new FormData(travelForm);

	let obj = { diet: [] };

	console.log(formData);
	// figuring out the data
	let entries = [...formData.entries()];
	const keys = [...formData.keys()];
	const values = [...formData.values()];

	// console.log('diet', diet);
	// console.log('values', values);
	// console.log('keys', keys);
	// console.log('entries', entries);

	// formData.forEach((item) => {
	// 	let [key, value] = item;
	// 	console.log(key, value);
	// });

	for (let [key, value] of formData) {
		// console.log(formData.get(key));
		if (key === 'Dietary Restrictions') {
			obj.diet.push(value);
			// for (value of formData.get(key)) {
			// }
		} else {
			obj[key] = formData.get(key);
		}
	}

	console.log('diet', obj.diet);
	travelForm.reset();
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
