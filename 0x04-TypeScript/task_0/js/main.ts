interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Menna',
    lastName: 'Samir',
    age: 30,
    location: 'Egypt',
};

const student2: Student = {
    firstName: 'Menna',
    lastName: 'Mohammed',
    age: 30,
    location: 'Egypt',
};

const studentList: Array<Student> = [student1, student2];

const table = document.createElement('table');
const tableBody = document.createElement('tbody');

for (const student of studentList) {
    const row = document.createElement('tr');
    const nameColumn = document.createElement('td');
    const locationColumn = document.createElement('td');
    const nameText = document.createTextNode(`${student.firstName}`);
    const locationText = document.createTextNode(`${student.location}`);
    nameColumn.appendChild(nameText);
    locationColumn.appendChild(locationText);
    row.appendChild(nameColumn);
    row.appendChild(locationColumn);
    tableBody.append(row);
}

table.appendChild(tableBody);
document.body.appendChild(table);
