(function () {
    var student1 = {
        firstName: 'Menna',
        lastName: 'Samir',
        age: 30,
        location: 'Egypt',
    };
    var student2 = {
        firstName: 'Menna',
        lastName: 'Mohammed',
        age: 30,
        location: 'Egypt',
    };
    var studentList = [student1, student2];
    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');
    for (var _i = 0, studentList_1 = studentList; _i < studentList_1.length; _i++) {
        var student = studentList_1[_i];
        var row = document.createElement('tr');
        var nameColumn = document.createElement('td');
        var locationColumn = document.createElement('td');
        var nameText = document.createTextNode("".concat(student.firstName));
        var locationText = document.createTextNode("".concat(student.location));
        nameColumn.appendChild(nameText);
        locationColumn.appendChild(locationText);
        row.appendChild(nameColumn);
        row.appendChild(locationColumn);
        tableBody.append(row);
    }
    table.appendChild(tableBody);
    document.body.appendChild(table);
})();
