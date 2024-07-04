"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentClass = void 0;
exports.printTeacher = printTeacher;
exports.createStudent = createStudent;
function printTeacher(firstName, lastName) {
    return "".concat(firstName[0], ". ").concat(lastName);
}
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this._firstName;
    };
    return StudentClass;
}());
exports.StudentClass = StudentClass;
function createStudent(ctor, firstName, lastName) {
    return new ctor(firstName, lastName);
}
