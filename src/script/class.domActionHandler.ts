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

//----------- declaring class functions ------------//
export class DomActionHandler {
    private model:any;
    constructor(model:any) {
        this.model=model; // array of dom element object to apply actions
    }
    renderData(eventData:any){;
        let formDom = document.getElementById("form");
        let txt = '';
        let storeModels: any = [];
        let dataObj = JSON.stringify(eventData);
        
        for (let index = 0; index < this.model.edit.length; index++) {
            if (this.model.edit[index].input.type == 'text') {
                txt += '<label for="' + this.model.edit[index].label + '">' + this.model.edit[index].label + '</label>';
                txt += '<input type="text" st-model=' + this.model.edit[index].input.modelName + ' name="' + this.model.edit[index].input.modelName + '">';
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
        new recycleDom(this.model).bindValue(eventData);
    }

    executeEvent(actionName:string){
        let actions=new Actions();
        actions[actionName]();
    }
}