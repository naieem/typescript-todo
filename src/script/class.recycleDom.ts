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

// ================================================================
// Query for DOM element.Modifies and bind data with dom element.
// ================================================================
export class recycleDom {
    actions: any;
    identifier: any;
    eventData: any;
    constructor(model: any) {
        this.identifier = model;
    }
    // ====================================
    // DOM element recycling function
    // ====================================
    execute() {

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
}