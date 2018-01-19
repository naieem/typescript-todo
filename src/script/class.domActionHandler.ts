/**
 * Project Name: Typescript todo
 * Description: This module renders dome element on request from action controler
 * Author: Naieem Mahmud Supto
 * Author URI: http://naieem.me/
 * Repository: http://github.com/naieem/
 * Version: 1.2.4
 * License: GPL2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 */

 //----------- importng dependencies ------------//
import { recycleDom } from "./class.recycleDom";
import {Actions} from "./class.actions";
import IStudent from "./student";
import model from "./class.model";


//----------- declaring class functions ------------//
export class DomActionHandler {
    private model:any;
    constructor() {
        this.model=new model().getAllModel(); // array of dom element object to apply actions
    }

    /**
     * Rendering form field for updating and inserting data
     * @param {}
     */
    renderData(eventData?:any){
        let formDom = document.getElementById("form");
        let txt = '';
        let storeModels: any = [];
        //----------- data to be passed in the dom ------------//
        let dataObj = JSON.stringify(eventData);
        
        for (let index = 0; index < this.model.edit.length; index++) {
            if (this.model.edit[index].input.type == 'text') {
                txt += '<label for="' + this.model.edit[index].label + '">' + this.model.edit[index].label + '</label>';
                if(!eventData){
                    txt += '<input type="text" st-model=' + this.model.edit[index].input.modelName + ' name="' + this.model.edit[index].input.modelName + '">';
                }else{
                    txt += '<input type="text" st-index="'+eventData.index+'" st-model=' + this.model.edit[index].input.modelName + ' name="' + this.model.edit[index].input.modelName + '">';
                }
                storeModels.push(this.model.edit[index].input.modelName);
            }
            if (this.model.edit[index].input.type == 'button') {
                txt += '<button type="button"';
                if (this.model.edit[index].input.action) {
                    txt += 'st-click="' + this.model.edit[index].input.action + '"';
                }
                txt += " st-element st-data='" + dataObj + "'>" + this.model.edit[index].input.value + "</button>"
            }
        }
        
        formDom.innerHTML = txt;
        /**
         * initiated new class with eventdata and all DOM array element
         * return {}
         */
        if(eventData)
        new recycleDom().bindValue(eventData);
    }

    /**
     * Rendering student list in the DOM element
     * @param {}
     */
    renderStudentList(studentList:IStudent[]){
        let listDom = document.getElementById('stList');
        let stListDom = "<ul>";
        for (let index = 0; index < studentList.length; index++) {
            let dataObj = this.cloneObject(studentList[index]);
            dataObj.index = index;
            dataObj = JSON.stringify(dataObj);
            stListDom += "<li st-data='" + dataObj + "'>index: " +index + " name: " + studentList[index].name + " roll:" + studentList[index].roll + "</li>";
        }
        stListDom += "</ul>";
        listDom.innerHTML = stListDom;
    }

    /**
     * Main function to execute all actions 
     * that will be transferred to class.actions.ts module
     * @param {}
     */
    executeEvent(actionName:string){
        let actions=new Actions();
        eval("actions."+actionName);
        // actions[actionName]();
    }

    /**
     * Getting value form DOM according to the st-model attribute
     * @param obj
     */
    getValueFromModel(models:any){
        let result:any=[];
        for (let index = 0; index < models.length; index++) {
            let model = models[index];
            let obj:any={};
            let element=document.querySelector("[st-model='"+model+"']") as HTMLInputElement;
            let modelName = element.getAttribute('st-model');
            let arrayIndex:string;
            if(element.hasAttribute('st-index')){
                arrayIndex = element.getAttribute('st-index');
            }else{
                arrayIndex="-1";
            }
            obj={
                index:arrayIndex,
                name:modelName,
                value:element.value
            }
            
            result.push(obj);
        }
        return result;
    }

    // ===========================================
    // deep cloning object
    // ===========================================
    
    cloneObject(obj: any) {
        if (obj === null || typeof obj !== "object") {
            return obj;
        } else if (Array.isArray(obj)) {
            let clonedArr:any[];
            obj.forEach(function (element) {
                clonedArr.push(this.cloneObject(element))
            });
            return clonedArr;
        } else {
            let clonedObj:any={};
            for (var prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                    clonedObj[prop] = this.cloneObject(obj[prop]);
                }
            }
            return clonedObj;
        }
    }
    /**
     * Clearing form data after any action execution
     * @param {}
     */
    clearFormData(){
        let formDom = document.getElementById("form");
        formDom.innerHTML="";
    }

}