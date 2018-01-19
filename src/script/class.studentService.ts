/**
 * Project Name: Typescript todo
 * Description: Student service to interact with data
 * Author: Naieem Mahmud Supto
 * Author URI: http://naieem.me/
 * Repository: http://github.com/naieem/
 * Version: 1.2.4
 * License: GPL2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 */

 //----------- Importing dependencies ------------//
import IStudent from "./student"; // students backbone
import studentList from './studentList'; // list of initial students

//----------- Declaring class ------------//
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
    addNewStudent(st:IStudent){
        this.students.push(st);
        
    }
    editStudent(data:any){
        
    }
}