export default class Dom {
    constructor() {
        let elem=document.querySelectorAll("div#stList ul li");
        for (let index = 0; index < elem.length; index++) {
           var t=elem[index].getAttribute('st-data');
           debugger;            
        }
    }

    listEventListener(){
        let elem=document.querySelector("div#stList ul li");
    }
    
}