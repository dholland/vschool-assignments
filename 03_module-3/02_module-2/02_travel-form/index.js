const travelForm = document
	.getElementById('travelForm')
	.addEventListener('submit', handleForm);

function handleForm(ev) {
	console.log('event', ev);
	ev.preventDefault();
	let travelForm = ev.target;
	const formData = new FormData(travelForm);
	let obj = { diet: [] };
	for (let [key] of formData) {
		if (formData.get(key) === 'on') {
			obj.diet.push(key);
		} else {
			obj[key] = formData.get(key);
		}
	}
	console.log(obj);

	alert(
		`First Name: ${obj.firstName}
	     Last Name: ${obj.lastName}
	     Age: ${obj.age}
	     Age: ${obj.destination}
	     Gender: ${obj.gender}
	     Dietary Restrictions: ${obj.diet}
	    `
	);
	travelForm.reset();
}
