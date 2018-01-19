/**
 * Project Name: Typescript todo
 * Description: File for DOM manupulations.
 * Author: Naieem Mahmud Supto
 * Author URI: http://naieem.me/
 * Repository: http://github.com/naieem/
 * Version: 1.2.4
 * License: GPL2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 */
'use strict';

//----------- Importing dependencies ------------//
import Istudent from "./student";
import StudentService from "./class.studentService";
import {DomActionsControllerModule} from './class.domActionController';

//----------- Declaring class ------------//
export default class Bootstrap {
    // ======================================
    // main variable declaration block
    // ======================================
    private studentService:StudentService;
    private actionController:DomActionsControllerModule;
    // ======================================
    // neucleus of the class
    // ======================================
    
    constructor() {
        this.studentService=new StudentService();
        this.actionController=new DomActionsControllerModule();
        this.renderStudentList();
        //----------- defining clickevent ------------//
        this.actionController.listEventListener();
        this.actionController.clickEventsListener();
    }

    //----------- Function declaration block ------------//

    
    // ======================================
    // rendering studentlist in dom element
    // ======================================
    
    renderStudentList() {
        this.actionController.renderStudentList(this.getStudentList());
    }

    

    // ==============================
    // fetching studentlist
    // ==============================
    
    getStudentList(){
        return this.studentService.getAllStudents();
    }
    //----------- End of function declaration block ------------//
}