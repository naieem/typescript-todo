/**
 * Project Name: Typescript todo
 * Description: DOM digest class.
 * Author: Naieem Mahmud Supto
 * Author URI: http://naieem.me/
 * Repository: http://github.com/naieem/
 * Version: 1.2.4
 * License: GPL2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 */

 'use strict';

 import model from "./class.model";
 import { DomActionHandler } from "./class.domActionHandler";
// ================================================================
// Query for DOM element.Modifies and bind data with dom element.
// ================================================================
export class recycleDom {
    identifier: any;
    DomActionHandler:DomActionHandler;
    constructor() {
        this.identifier=new model().getAllModel(); // array of dom element object to apply actions
    }

    // =========================================================
    // binds value with input type with having model attribute
    // =========================================================
    bindValue(eventData:any) {
        //----------- bingding value for edited data ------------//
        for (let index = 0; index < this.identifier.edit.length; index++) {
            if (this.identifier.edit[index].input.type == 'text') {
                let bindElem = document.querySelector('[st-model="' + this.identifier.edit[index].input.modelName + '"]') as HTMLInputElement;
                let val = eventData[this.identifier.edit[index].input.modelName];
                bindElem.value = val;
            }
        }
    }

    /**
     * Executing digest action to lopp through the whole DOM and apply changes
     * @param {}
     */
    applyDigestLoop(){
        let element = document.querySelectorAll("[st-click]");
        let domActionHandler=new DomActionHandler ();
        for (let index = 0; index < element.length; index++) {
            element[index].removeEventListener('click',function(){});
            let actionsFnc = element[index].getAttribute('st-click');
            let hasEventListener = element[index].getAttribute('has-event');
            
            if(!hasEventListener){
                element[index].setAttribute('has-event','true');
                element[index].addEventListener('click', function (e) {
                    domActionHandler.executeEvent(actionsFnc);
                });
            }
        }

        let elem = document.querySelectorAll("input[type=text]");
        for (let index = 0; index < elem.length; index++) {
            let element = elem[index] as HTMLInputElement;
            element.addEventListener('change',function (e) {
                let el=e.target as HTMLInputElement;                
            });      
        }
    }
}