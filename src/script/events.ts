import Istudent from './student'; // student enum
import StudentService from './studentService'; // list of initial students
export default class Actions {
    private studentService:StudentService;
    constructor() {
        this.studentService=new StudentService();
    }
    updateData(data:any):void{
        
        console.log(data);
    }
    addNew(){
        let newst:Istudent=new Istudent(10,'supto',16);
        
        this.studentService.students.push(newst);
        debugger;
        console.log(this.studentService.students);
    }
}