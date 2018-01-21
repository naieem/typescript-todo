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
import Istudent from './class.student'; // student enum
import StudentService from './class.studentService'; // list of initial students
import {DomActionsControllerModule} from './class.domActionController';
import { DomActionHandler } from './class.domActionHandler';

import appController from "./class.appController";

//----------- declaring class ------------//
export  class Actions {
    //----------- variable declaration block ------------//
    private studentService:StudentService;
    private studentList:Istudent[];
    private domActionController:DomActionsControllerModule;
    private domactionActionhandler:DomActionHandler;
    private appController:appController;

    //----------- functions of the class ------------//
    constructor() {
        this.appController=new appController();
        this.studentService=new StudentService();
        this.domActionController=new DomActionsControllerModule();
        this.domactionActionhandler=new DomActionHandler()
    }

    /**
     * This function is used for multiple purpose
     * 1.If it is a update call then update will be executed
     * 2.If it is an insert call then an insert will be executed
     */
    updateData(){
        let upsertData=this.domActionController.getValueFromModel(arguments);
        
        let obj:any={};
        for (let i = 0; i < upsertData.length; i++) {
            //----------- checking if it is an insert call ------------//
            if(upsertData[i].index =='-1'){
                obj=this.constructObject(upsertData);
                this.studentService.students.push(obj);
                
                break;
            }
            else if(this.studentService.students[upsertData[i].index][upsertData[i].name]!=upsertData[i].value){
                this.studentService.students[upsertData[i].index][upsertData[i].name]=upsertData[i].value;
            }                
        }
        //----------- rendering list once again ------------//
        this.appController.renderStudentList();
        //----------- clearing the form after function is finished execution ------------//
        this.appController.clearFormData();
    }

    /**
     * function is called when add new button is called
     * @param {}
     */
    addNew(){
        this.domactionActionhandler.renderData();
        //----------- digesting the dom ------------//
        this.domActionController.callHandlerToDigest();        
    }

    // ===================================================
    // Constructing dom object to insert new student data
    // ===================================================
    constructObject(arr:any[]){
        let result:any={};
        for (let index = 0; index < arr.length; index++) {
            result[arr[index].name]=arr[index].value;            
        }
        return result;
    }
}