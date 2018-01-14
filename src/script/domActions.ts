import Istudent from "./student";
import StudentService from "./studentService";
import loaders from './script';
export default class DomRender {
    private stListDom: string;
    private studentList:Istudent[];
    public studentService:StudentService;
    constructor() {
        this.studentService=new StudentService();
        debugger;
    }
    // ======================================
    // rendering studentlist in dom element
    // ======================================
    renderStudentList() {
        debugger;
        let listDom = document.getElementById('stList');
        let allStudent=this.getStudentList();
        debugger;
        this.stListDom = "<ul>";
        for (let index = 0; index < allStudent.length; index++) {
            let dataObj = this.cloneObject(allStudent[index]);
            dataObj.index = index;
            dataObj = JSON.stringify(dataObj);
            this.stListDom += "<li st-data='" + dataObj + "'>id: " +allStudent[index].id + " name: " + allStudent[index].name + " roll:" + allStudent[index].roll + "</li>";
        }
        this.stListDom += "</ul>";
        listDom.innerHTML = this.stListDom;
        
        new loaders();
    }

    // ===========================================
    // deep cloning object
    // ===========================================
    cloneObject(obj: any) {
        
        if (obj === null || typeof obj !== "object") {
            return obj;
        } else if (Array.isArray(obj)) {
            let clonedArr:any[];
            obj.forEach(function (element) {
                clonedArr.push(this.cloneObject(element))
            });
            return clonedArr;
        } else {
            let clonedObj:any={};
            for (var prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                    clonedObj[prop] = this.cloneObject(obj[prop]);
                }
            }
            return clonedObj;
        }
    }

    getStudentList(){
        return this.studentService.getAllStudents();
    }
}