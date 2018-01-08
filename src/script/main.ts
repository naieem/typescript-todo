import StudentService from './studentService';
import loaders from './script';
class nuCleus {
    allStudent : any[];
    service : any;
    stListDom : string;
    // ======================================
    // main nucleus function of the class
    // ======================================
    constructor() {
        this.service = new StudentService();
        this.allStudent = this
            .service
            .getAllStudents();
        this.renderStudentList(); // rendering list at initial stage
    }

    // ======================================
    // rendering studentlist in dom element
    // ======================================
    renderStudentList() {
        let listDom = document.getElementById('stList');
        this.stListDom = "<ul>";
        this
            .allStudent
            .forEach(element => {
                this.stListDom += "<li st-data="+element+">id: " + element.id + " name: " + element.name + " roll:" + element.roll + "</li>";
            });
        this.stListDom += "</ul>";
        listDom.innerHTML = this.stListDom;
        debugger;
        new loaders();
    }
}

new nuCleus();