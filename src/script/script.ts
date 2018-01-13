import actions from "./events";
import student from "./student";
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
        //let clickAction=new Dom();
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
        new recycleDom(model,eventData);
    }
}

class recycleDom {
    actions: any;
    identifier: any;
    eventData:any;
    constructor(identifier: any,eventData:any) {
        this.identifier = identifier;
        this.eventData=eventData;
        this.recycle();
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
            let execute = this.executeEvents;
            // eval("this.actions."+activity);
            // eval('this.actions()');
            // new actions().updateData();
            // new actions().
            test[index].addEventListener('click', function () {
                let data = JSON.parse(test[index].getAttribute("st-data"));
                var actions = test[index].getAttribute("st-click");
                // eval("new Dom()."+actions+"(data)");
                //eval("new actions()");
                execute();
                debugger;
                // let activity = elem.target.attributes;
                // let data = elem.attributes[3].value;
                // eval('actions'+'.'+activity+'('+data+')');
            });

        }
        this.bindValue();
    }

    executeEvents() {
        //alert('from execute events');
        let y = new actions();
        eval('y.sayHello()');
    }
    bindValue() {
        for (let index = 0; index < this.identifier.edit.length; index++) {
            if (this.identifier.edit[index].input.type == 'text') {
                let bindElem = document.querySelector('[st-model="' + this.identifier.edit[index].input.modelName + '"]') as HTMLInputElement;
                let val=this.eventData[this.identifier.edit[index].input.modelName];
                bindElem.value = val;
            }
        }
    }
}