//https://coursework.vschool.io/employee-records/
// 05/03/20

const employees = [];

function Employee(name, jobTitle, salery, status = 'full-time') {
	this.name = name;
	this.jobTitle = jobTitle;
	this.salery = salery;
	this.status = status;
}

Employee.prototype.printEmployeeForm = function () {
	console.log(
		`Name: ${this.name}, Job Title: ${this.jobTitle}, Salery: ${this.salery}/year, Status: ${this.status}`
	);
};

const newEmployee = employees.push(
	new Employee('Danny', 'Producer', 170000, 'Part-Time'),
	new Employee('Mike', 'Editor', 50000, 'Contractor'),
	new Employee('Sam', 'Body Guard', 25000)
);

function printAllEmployeeForms(arr) {
	for (let i = 0; i < arr.length; i++) {
		arr[i].printEmployeeForm();
	}
}

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function saleryCost(arr) {
	let total = 0;
	for (let i = 0; i < arr.length; i++) {
		total += arr[i].salery;
	}
	return numberWithCommas('$' + total);
}

// console.log(employees[2].salery);

printAllEmployeeForms(employees);
// console.log(saleryCost(employees));
