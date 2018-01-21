/**
 * Project Name: Typescript todo
 * Description: This file returns inpu type models
 * Author: Naieem Mahmud Supto
 * Author URI: http://naieem.me/
 * Repository: http://github.com/naieem/
 * Version: 1.2.4
 * License: GPL2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 */

 export default class Model {
     private model:any;
     constructor() {
        this.model = {
            edit: [{
                    label: "ROLL",
                    input: {
                        type: 'text',
                        modelName: 'roll'
                    }
                },
                {
                    label: "NAME",
                    input: {
                        type: 'text',
                        modelName: 'name'
                    }
                },
                {
                    input: {
                        type: 'button',
                        value: 'save',
                        action: "updateData('roll','name')"
                    }
                }
            ]
        };
     }
     getAllModel(){
         return this.model;
     }
 }