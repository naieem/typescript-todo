// ====================================================
// student service to interact with data 
// and api call behavior
// ====================================================

import student from "./student"; // students backbone
import studentList from './studentList'; // list of initial students
export default class StudentService{
    students:any[];
    // ======================================
    // main nucleus function of the class
    // ======================================
    constructor() {
        this.students=studentList;
    }
    // =======================================
    // return all students list
    // =======================================
    getAllStudents(){
        return this.students;
    }
    // =======================================
    // adding new students
    // =======================================
    addNewStudent(){
        this.students.push(new student(5,'new',1010));
        debugger;
    }
    editStudent(data:any){
        debugger;
    }
}