import actions from "./events";
import student from "./student";
import renderEvents from "./domActions";
export default class Dom {
    model: any = {};
    renderEvnt:any;
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
        this.listEventListener();
        this.clickEventsListener();
    }

    // ====================================
    // event listener for list items
    // ====================================
    listEventListener() {
        let elem = document.querySelectorAll("div#stList ul li");
        let model = this.model; // storing reference of input fields configuration
        let executeFunction = this.executeClickEvent; // taking reference of executing function
        for (let index = 0; index < elem.length; index++) {
            let eventData = JSON.parse(elem[index].getAttribute('st-data'));
            elem[index].addEventListener('click', function () {
                executeFunction(eventData, model);
            });
        }
    }

    // ===================================================
    // execute function click event listener
    // ===================================================
    executeClickEvent(eventData: student, model: any) {
        debugger;
        let formDom = document.getElementById("form");
        let txt = '';
        let storeModels: any = [];
        let dataObj = JSON.stringify(eventData);
        for (let index = 0; index < model.edit.length; index++) {
            if (model.edit[index].input.type == 'text') {
                txt += '<label for="' + model.edit[index].label + '">' + model.edit[index].label + '</label>';
                txt += '<input type="text" st-model=' + model.edit[index].input.modelName + ' name="' + model.edit[index].input.modelName + '">';
                storeModels.push(model.edit[index].input.modelName);
            }
            if (model.edit[index].input.type == 'button') {
                txt += '<button type="button"';
                if (model.edit[index].input.action) {
                    txt += 'st-click="' + model.edit[index].input.action + '"';
                }
                txt += " st-element st-data='" + dataObj + "'>" + model.edit[index].input.value + "</button>"
            }
        }
        debugger;
        formDom.innerHTML = txt;
        /**
         * initiated new class with eventdata and all DOM array element
         * return {}
         */
        new recycleDom(model, eventData);
    }

    // ====================================================
    // click event listener for elements having st-click
    // ====================================================
    clickEventsListener() {
        debugger;
        let elem = document.querySelectorAll("[st-click]");
        let model = this.model; // storing reference of input fields configuration
        let executeFunction = this.domModificationClickEventData; // taking reference of executing function
        for (let index = 0; index < elem.length; index++) {
            let actionsFnc = elem[index].getAttribute('st-click');
            elem[index].addEventListener('click', function () {
                executeFunction(actionsFnc);
            });
        }
    }

    domModificationClickEventData(actionName: any) {
        let action = new actions();
        let renderEvnt=new renderEvents();
        action[actionName]();
        renderEvnt.renderStudentList();
    }

}
// ================================================================
// DOM digest class.query for DOM element.
// Modifies and bind data with dom element.
// ================================================================
class recycleDom {
    actions: any;
    identifier: any;
    eventData: any;
    constructor(identifier: any, eventData: any) {
        this.identifier = identifier;
        this.eventData = eventData;
        this.recycle(); // digest dom button element
    }
    // ====================================
    // DOM element recycling function
    // ====================================
    recycle() {
        let buttonElements = document.querySelectorAll('button[st-element]');
        debugger;
        for (let index = 0; index < buttonElements.length; index++) {
            let execute = this.executeEvents;
            buttonElements[index].addEventListener('click', function () {
                let data = JSON.parse(buttonElements[index].getAttribute("st-data"));
                var actions = buttonElements[index].getAttribute("st-click");
                execute(); // execute button click event
            });

        }
        this.bindValue(); // bind value of the st-model elements
    }
    // =====================================
    // excutes submit button click event
    // =====================================
    executeEvents() {
        let y = new actions();
        eval('y.sayHello()');
    }

    // =========================================================
    // binds value with input type with having model attribute
    // =========================================================
    bindValue() {
        for (let index = 0; index < this.identifier.edit.length; index++) {
            if (this.identifier.edit[index].input.type == 'text') {
                let bindElem = document.querySelector('[st-model="' + this.identifier.edit[index].input.modelName + '"]') as HTMLInputElement;
                let val = this.eventData[this.identifier.edit[index].input.modelName];
                bindElem.value = val;
            }
        }
    }
}