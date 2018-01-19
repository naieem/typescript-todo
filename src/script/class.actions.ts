/**
 * Project Name: Typescript todo
 * Description: File to add eventlistener to dom elements
 * Author: Naieem Mahmud Supto
 * Author URI: http://naieem.me/
 * Repository: http://github.com/naieem/
 * Version: 1.2.4
 * License: GPL2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 */

//----------- Importing dependencies ------------//
import Istudent from './student'; // student enum
import StudentService from './class.studentService'; // list of initial students
import {DomActionsControllerModule} from './class.domActionController';
//----------- declaring class ------------//
export  class Actions {
    private studentService:StudentService;
    private studentList:Istudent[];
    private domActionController:DomActionsControllerModule;
    constructor() {
        this.studentService=new StudentService();
        this.domActionController=new DomActionsControllerModule();
    }
    updateData(data:any):void{
        
        console.log(data);
    }
    addNew(){
        let newst:Istudent=new Istudent(10,'supto',16);
        
        this.studentService.addNewStudent(newst);
        
        console.log(this.studentService.students);
        debugger;
        this.domActionController.renderStudentList(this.studentService.students);
        
    }
}