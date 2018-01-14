import Istudent from './student'; // student enum
import StudentService from './studentService'; // list of initial students
export default class Actions {
    private studentService:StudentService;
    constructor() {
        this.studentService=new StudentService();
    }
    updateData(data:any):void{
        debugger;
        console.log(data);
    }
    addNew(){
        let newst:Istudent=new Istudent(10,'supto',16);
        debugger;
        this.studentService.students.push(newst);
        console.log(this.studentService.students);
    }
}