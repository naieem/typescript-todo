import actions from "./events";
export default class Dom {
    model: any = {};
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
    }

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

    executeClickEvent(eventData: any, model: any) {
        let formDom = document.getElementById("form");
        let txt = '';
        let storeModels: any = [];
        let dataObj = JSON.stringify(eventData);
        for (let index = 0; index < model.edit.length; index++) {
            if (model.edit[index].input.type == 'text') {
                txt += '<label for="' + model.edit[index].label + '">' + model.edit[index].label + '</label>';
                txt += '<input type="text" name="' + model.edit[index].input.modelName + '">';
                storeModels.push(model.edit[index].input.modelName);
            }
            if (model.edit[index].input.type == 'button') {
                txt += '<button type="button"';
                if (model.edit[index].input.action) {
                    txt += 'st-click="' + model.edit[index].input.action + '"';
                }
                txt += " st-element st-data='" + dataObj + "'>" + model.edit[index].input.value + "</button>";
                //storeModels.push(model.edit[index].input.modelName);
            }
        }
        debugger;
        formDom.innerHTML = txt;
        new recycleDom().recycle();
    }

    updateData(data: any): void {
        debugger;
    }
}

class recycleDom {
    actions: any;
    constructor() {
        this.actions = new actions();
    }
    recycle() {
        var test = document.querySelectorAll('button[st-element]');
        debugger;
        for (let index = 0; index < test.length; index++) {
            const element = test[index];
            //let activity = test[index].attributes[1].value;
            //let data = test[index].attributes[3].value;
            //let action=this.actions; // stored for reference use in the click event
            debugger;
            // eval("this.actions."+activity);
            // eval('this.actions()');
            // new actions().updateData();
            // new actions().
            test[index].addEventListener('click', function (elem) {
                debugger;
                let activity = elem.target.attributes[1].value;
                let data = elem.attributes[3].value;
                // eval('actions'+'.'+activity+'('+data+')');
            });

        }
    }

    executeEvents() {

    }
}