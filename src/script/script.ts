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
        let storeModels: string[];
        for (let index = 0; index < model.edit.length; index++) {
            txt += '<label for="' + model.edit[index].label + '">' + model.edit[index].label + '</label>';
            if (model.edit[index].input.type == 'text') {
                txt += '<input type="text" name="' + model.edit[index].input.modelName + '">';
                storeModels.push(model.edit[index].input.modelName);
            }
        }
        txt += "<button type='button'>Save</button>";
        debugger;
        formDom.innerHTML = txt;
    }

}