/*
File Name: Script.ts
Description: This is the file for DOM action provider.Function of this file takes care
of the dom elements actions and render data according to that
Author: Naieem Mahmud Supto
Version: 1.1
*/
'use strict';

//----------- Importing dependencies ------------//
import IStudent from "./student";
import { DomActionHandler } from "./class.domActionHandler";
import { recycleDom } from "./class.recycleDom";
//----------- Declaring class ------------//
export class DomActionsControllerModule {
    //----------- variable declaration block ------------//

    private DomActionHandler:DomActionHandler;
    private recycleDom:recycleDom;
    // ======================================
    // Nucleus fo the class
    // ======================================
    constructor() {
        this.DomActionHandler=new DomActionHandler();
        this.recycleDom=new recycleDom();
    }

    //----------- call to hander to digest the dom and rearrange all ------------//
    callHandlerToDigest(){
        this.recycleDom.applyDigestLoop();
    }
    // ====================================
    // event listener for list items
    // ====================================
    listEventListener() {
        let elem = document.querySelectorAll("div#stList ul li");
        let domActionHandler=new DomActionHandler ();
        let recycleDom=this.recycleDom;
        for (let index = 0; index < elem.length; index++) {
            let eventData = JSON.parse(elem[index].getAttribute('st-data'));
            elem[index].addEventListener('click', function () {
                domActionHandler.renderData(eventData);
                recycleDom.applyDigestLoop();
            });
        }
    }

    // ====================================================
    // click event listener for elements having st-click
    // ====================================================
    clickEventsListener() {            
        let elem = document.querySelectorAll("[st-click]");
        let domActionHandler=new DomActionHandler ();
        for (let index = 0; index < elem.length; index++) {
            elem[index].setAttribute('has-event','true');
            let actionsFnc = elem[index].getAttribute('st-click');
            elem[index].addEventListener('click', function (e) {               
                domActionHandler.executeEvent(actionsFnc);
            });
        }
    }
    /**
     * Rendering student list in the DOM element
     * @param {}
     */
    renderStudentList(studentList:IStudent[]){
        this.DomActionHandler.renderStudentList(studentList);
    }

    /**
     * Getting value form DOM according to the st-model attribute
     * @param obj
     */
    getValueFromModel(models:any){
        return this.DomActionHandler.getValueFromModel(models);
    }
     /**
     * Clearing form data after any action execution
     * @param {}
     */
    clearFormData(){
        this.DomActionHandler.clearFormData();
    }
    //----------- Function declaration block ends ------------//

}