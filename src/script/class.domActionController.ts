/*
File Name: Script.ts
Description: This is the file for DOM action provider.Function of this file takes care
of the dom elements actions and render data according to that
Author: Naieem Mahmud Supto
Version: 1.1
*/
'use strict';

//----------- Importing dependencies ------------//
import {Actions} from "./class.actions";
import IStudent from "./student";
import { DomActionHandler } from "./class.domActionHandler";

//----------- Declaring class ------------//
export class DomActionsControllerModule {
    //----------- variable declaration block ------------//
    model: any = {};
    renderEvnt:any;
    // ======================================
    // Nucleus fo the class
    // ======================================
    constructor() {
        
        this.model = {
            edit: [{
                    label: "ID",
                    input: {
                        type: 'text',
                        modelName: 'id'
                    }
                },
                {
                    label: "Name",
                    input: {
                        type: 'text',
                        modelName: 'name'
                    }
                },
                {
                    input: {
                        type: 'button',
                        value: 'save',
                        action: 'updateData'
                    }
                }
            ]
        };
    }

    //----------- Funciton declaration block ------------//

    // ====================================
    // event listener for list items
    // ====================================
    listEventListener() {
        let elem = document.querySelectorAll("div#stList ul li");
        let domActionHandler=new DomActionHandler (this.model);
        for (let index = 0; index < elem.length; index++) {
            let eventData = JSON.parse(elem[index].getAttribute('st-data'));
            elem[index].addEventListener('click', function () {
                domActionHandler.renderData(eventData);
            });
        }
    }

    // ====================================================
    // click event listener for elements having st-click
    // ====================================================
    clickEventsListener() {            
        let elem = document.querySelectorAll("[st-click]");
        let model = this.model; // storing reference of input fields configuration
        let domActionHandler=new DomActionHandler (this.model);
        for (let index = 0; index < elem.length; index++) {
            let actionsFnc = elem[index].getAttribute('st-click');
            elem[index].addEventListener('click', function (e) {
                domActionHandler.executeEvent(actionsFnc);
            });
        }
    }

    renderStudentList(studentList:IStudent[]){
        let listDom = document.getElementById('stList');
        let stListDom = "<ul>";
        for (let index = 0; index < studentList.length; index++) {
            let dataObj = this.cloneObject(studentList[index]);
            dataObj.index = index;
            dataObj = JSON.stringify(dataObj);
            stListDom += "<li st-data='" + dataObj + "'>id: " +studentList[index].id + " name: " + studentList[index].name + " roll:" + studentList[index].roll + "</li>";
        }
        stListDom += "</ul>";
        listDom.innerHTML = stListDom;
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
    //----------- Function declaration block ends ------------//

}