import StudentService from './studentService';
import loaders from './script';
class nuCleus {
    allStudent: any[];
    service: any;
    stListDom: string;
    // ======================================
    // main nucleus function of the class
    // ======================================
    constructor() {
        this.service = new StudentService();
        this.allStudent = this
            .service
            .getAllStudents(); //storing all students data at initial stage
        this.renderStudentList(); // rendering list at initial stage
    }

    // ======================================
    // rendering studentlist in dom element
    // ======================================
    renderStudentList() {
        let listDom = document.getElementById('stList');
        
        this.stListDom = "<ul>";
        for (let index = 0; index < this.allStudent.length; index++) {
            let dataObj = this.cloneObject(this.allStudent[index]);
            dataObj.index = index;
            dataObj = JSON.stringify(dataObj);
            this.stListDom += "<li st-data='" + dataObj + "'>id: " + this.allStudent[index].id + " name: " + this.allStudent[index].name + " roll:" + this.allStudent[index].roll + "</li>";
        }
        this.stListDom += "</ul>";
        listDom.innerHTML = this.stListDom;
        
        new loaders();
    }
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

}

new nuCleus();