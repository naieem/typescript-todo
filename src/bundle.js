/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ================================
// declaring student skull
// ===============================
var Student = /** @class */ (function () {
    function Student(id, name, roll) {
        this.id = id;
        this.name = name;
        this.roll = roll;
    }
    return Student;
}());
/* harmony default export */ __webpack_exports__["a"] = (Student);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__studentService__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__script__ = __webpack_require__(4);


var nuCleus = /** @class */ (function () {
    // ======================================
    // main nucleus function of the class
    // ======================================
    function nuCleus() {
        this.service = new __WEBPACK_IMPORTED_MODULE_0__studentService__["a" /* default */]();
        this.allStudent = this
            .service
            .getAllStudents(); //storing all students data at initial stage
        this.renderStudentList(); // rendering list at initial stage
    }
    // ======================================
    // rendering studentlist in dom element
    // ======================================
    nuCleus.prototype.renderStudentList = function () {
        var listDom = document.getElementById('stList');
        this.stListDom = "<ul>";
        for (var index = 0; index < this.allStudent.length; index++) {
            var dataObj = this.cloneObject(this.allStudent[index]);
            dataObj.index = index;
            dataObj = JSON.stringify(dataObj);
            this.stListDom += "<li st-data='" + dataObj + "'>id: " + this.allStudent[index].id + " name: " + this.allStudent[index].name + " roll:" + this.allStudent[index].roll + "</li>";
        }
        this.stListDom += "</ul>";
        listDom.innerHTML = this.stListDom;
        new __WEBPACK_IMPORTED_MODULE_1__script__["a" /* default */]();
    };
    // ===========================================
    // deep cloning object
    // ===========================================
    nuCleus.prototype.cloneObject = function (obj) {
        if (obj === null || typeof obj !== "object") {
            return obj;
        }
        else if (Array.isArray(obj)) {
            var clonedArr_1;
            obj.forEach(function (element) {
                clonedArr_1.push(this.cloneObject(element));
            });
            return clonedArr_1;
        }
        else {
            var clonedObj = {};
            for (var prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                    clonedObj[prop] = this.cloneObject(obj[prop]);
                }
            }
            return clonedObj;
        }
    };
    return nuCleus;
}());
new nuCleus();


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__student__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__studentList__ = __webpack_require__(3);
// ====================================================
// student service to interact with data 
// and api call behavior
// ====================================================
 // students backbone
 // list of initial students
var StudentService = /** @class */ (function () {
    // ======================================
    // main nucleus function of the class
    // ======================================
    function StudentService() {
        this.students = __WEBPACK_IMPORTED_MODULE_1__studentList__["a" /* default */];
    }
    // =======================================
    // return all students list
    // =======================================
    StudentService.prototype.getAllStudents = function () {
        return this.students;
    };
    // =======================================
    // adding new students
    // =======================================
    StudentService.prototype.addNewStudent = function () {
        this.students.push(new __WEBPACK_IMPORTED_MODULE_0__student__["a" /* default */](5, 'new', 1010));
    };
    StudentService.prototype.editStudent = function (data) {
    };
    return StudentService;
}());
/* harmony default export */ __webpack_exports__["a"] = (StudentService);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__student__ = __webpack_require__(0);

var students = [
    new __WEBPACK_IMPORTED_MODULE_0__student__["a" /* default */](1, 'naieem', 101),
    new __WEBPACK_IMPORTED_MODULE_0__student__["a" /* default */](2, 'naieem', 102),
    new __WEBPACK_IMPORTED_MODULE_0__student__["a" /* default */](3, 'naieem', 103),
    new __WEBPACK_IMPORTED_MODULE_0__student__["a" /* default */](4, 'naieem', 104),
    new __WEBPACK_IMPORTED_MODULE_0__student__["a" /* default */](5, 'naieem', 105)
];
/* harmony default export */ __webpack_exports__["a"] = (students);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events__ = __webpack_require__(5);

var Dom = /** @class */ (function () {
    function Dom() {
        this.model = {};
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
    Dom.prototype.listEventListener = function () {
        var elem = document.querySelectorAll("div#stList ul li");
        var model = this.model; // storing reference of input fields configuration
        var executeFunction = this.executeClickEvent; // taking reference of executing function
        var _loop_1 = function (index) {
            var eventData = JSON.parse(elem[index].getAttribute('st-data'));
            elem[index].addEventListener('click', function () {
                executeFunction(eventData, model);
            });
        };
        for (var index = 0; index < elem.length; index++) {
            _loop_1(index);
        }
    };
    Dom.prototype.executeClickEvent = function (eventData, model) {
        var formDom = document.getElementById("form");
        var txt = '';
        var storeModels = [];
        var dataObj = JSON.stringify(eventData);
        for (var index = 0; index < model.edit.length; index++) {
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
    };
    Dom.prototype.updateData = function (data) {
        debugger;
    };
    return Dom;
}());
/* harmony default export */ __webpack_exports__["a"] = (Dom);
var recycleDom = /** @class */ (function () {
    function recycleDom() {
        this.actions = new __WEBPACK_IMPORTED_MODULE_0__events__["a" /* default */]();
    }
    recycleDom.prototype.recycle = function () {
        var test = document.querySelectorAll('button[st-element]');
        debugger;
        for (var index = 0; index < test.length; index++) {
            var element = test[index];
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
                var activity = elem.target.attributes[1].value;
                var data = elem.attributes[3].value;
                // eval('actions'+'.'+activity+'('+data+')');
            });
        }
    };
    recycleDom.prototype.executeEvents = function () {
    };
    return recycleDom;
}());


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Actions = /** @class */ (function () {
    function Actions() {
    }
    Actions.prototype.updateData = function (data) {
        debugger;
        console.log(data);
    };
    return Actions;
}());
/* harmony default export */ __webpack_exports__["a"] = (Actions);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTNlY2ZmNjU2M2U1NzY0NWU3MmUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdC9zdHVkZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHQvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0L3N0dWRlbnRTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHQvc3R1ZGVudExpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdC9zY3JpcHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdC9ldmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzdEQSxtQ0FBbUM7QUFDbkMsMEJBQTBCO0FBQzFCLGtDQUFrQztBQUNsQztJQUlJLGlCQUFZLEVBQVMsRUFBQyxJQUFXLEVBQUMsSUFBVztRQUN6QyxJQUFJLENBQUMsRUFBRSxHQUFDLEVBQUUsQ0FBQztRQUNYLElBQUksQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDO1FBQ2YsSUFBSSxDQUFDLElBQUksR0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUFDO0FBQ0QseURBQWUsT0FBTyxFQUFDOzs7Ozs7Ozs7OztBQ2J1QjtBQUNmO0FBQy9CO0lBSUkseUNBQXlDO0lBQ3pDLHFDQUFxQztJQUNyQyx5Q0FBeUM7SUFDekM7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksZ0VBQWMsRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSTthQUNqQixPQUFPO2FBQ1AsY0FBYyxFQUFFLENBQUMsQ0FBQyw0Q0FBNEM7UUFDbkUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxrQ0FBa0M7SUFDaEUsQ0FBQztJQUVELHlDQUF5QztJQUN6Qyx1Q0FBdUM7SUFDdkMseUNBQXlDO0lBQ3pDLG1DQUFpQixHQUFqQjtRQUNJLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFaEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDeEIsR0FBRyxDQUFDLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDO1lBQzFELElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxTQUFTLElBQUksZUFBZSxHQUFHLE9BQU8sR0FBRyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7UUFDcEwsQ0FBQztRQUNELElBQUksQ0FBQyxTQUFTLElBQUksT0FBTyxDQUFDO1FBQzFCLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUVuQyxJQUFJLHdEQUFPLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsOENBQThDO0lBQzlDLHNCQUFzQjtJQUN0Qiw4Q0FBOEM7SUFDOUMsNkJBQVcsR0FBWCxVQUFZLEdBQVE7UUFFaEIsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDZixDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksV0FBZSxDQUFDO1lBQ3BCLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxPQUFPO2dCQUN6QixXQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDN0MsQ0FBQyxDQUFDLENBQUM7WUFDSCxNQUFNLENBQUMsV0FBUyxDQUFDO1FBQ3JCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksU0FBUyxHQUFLLEVBQUUsQ0FBQztZQUNyQixHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDM0IsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2xELENBQUM7WUFDTCxDQUFDO1lBQ0QsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUNyQixDQUFDO0lBQ0wsQ0FBQztJQUVMLGNBQUM7QUFBRCxDQUFDO0FBRUQsSUFBSSxPQUFPLEVBQUUsQ0FBQzs7Ozs7Ozs7O0FDOURkO0FBQUEsdURBQXVEO0FBQ3ZELHlDQUF5QztBQUN6Qyx3QkFBd0I7QUFDeEIsdURBQXVEO0FBRXZCLENBQUMsb0JBQW9CO0FBQ2IsQ0FBQywyQkFBMkI7QUFDcEU7SUFFSSx5Q0FBeUM7SUFDekMscUNBQXFDO0lBQ3JDLHlDQUF5QztJQUN6QztRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUMsNkRBQVcsQ0FBQztJQUM5QixDQUFDO0lBQ0QsMENBQTBDO0lBQzFDLDJCQUEyQjtJQUMzQiwwQ0FBMEM7SUFDMUMsdUNBQWMsR0FBZDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFDRCwwQ0FBMEM7SUFDMUMsc0JBQXNCO0lBQ3RCLDBDQUEwQztJQUMxQyxzQ0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSx5REFBTyxDQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUVsRCxDQUFDO0lBQ0Qsb0NBQVcsR0FBWCxVQUFZLElBQVE7SUFFcEIsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7OztBQy9CK0I7QUFDaEMsSUFBSSxRQUFRLEdBQUM7SUFDVCxJQUFJLHlEQUFPLENBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxHQUFHLENBQUM7SUFDM0IsSUFBSSx5REFBTyxDQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsR0FBRyxDQUFDO0lBQzNCLElBQUkseURBQU8sQ0FBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLEdBQUcsQ0FBQztJQUMzQixJQUFJLHlEQUFPLENBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxHQUFHLENBQUM7SUFDM0IsSUFBSSx5REFBTyxDQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsR0FBRyxDQUFDO0NBQzlCLENBQUM7QUFFRix5REFBZSxRQUFRLEVBQUM7Ozs7Ozs7OztBQ1RPO0FBQy9CO0lBRUk7UUFEQSxVQUFLLEdBQVEsRUFBRSxDQUFDO1FBRVosSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULElBQUksRUFBRSxDQUFDO29CQUNDLEtBQUssRUFBRSxJQUFJO29CQUNYLEtBQUssRUFBRTt3QkFDSCxJQUFJLEVBQUUsTUFBTTt3QkFDWixTQUFTLEVBQUUsSUFBSTtxQkFDbEI7aUJBQ0o7Z0JBQ0Q7b0JBQ0ksS0FBSyxFQUFFLE1BQU07b0JBQ2IsS0FBSyxFQUFFO3dCQUNILElBQUksRUFBRSxNQUFNO3dCQUNaLFNBQVMsRUFBRSxNQUFNO3FCQUNwQjtpQkFDSjtnQkFDRDtvQkFDSSxLQUFLLEVBQUU7d0JBQ0gsSUFBSSxFQUFFLFFBQVE7d0JBQ2QsS0FBSyxFQUFFLE1BQU07d0JBQ2IsTUFBTSxFQUFFLFlBQVk7cUJBQ3ZCO2lCQUNKO2FBQ0o7U0FDSixDQUFDO1FBQ0YsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELCtCQUFpQixHQUFqQjtRQUNJLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3pELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxrREFBa0Q7UUFDMUUsSUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMseUNBQXlDO2dDQUM5RSxLQUFLO1lBQ1YsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDaEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtnQkFDbEMsZUFBZSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN0QyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFMRCxHQUFHLENBQUMsQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFO29CQUF2QyxLQUFLO1NBS2I7SUFDTCxDQUFDO0lBRUQsK0JBQWlCLEdBQWpCLFVBQWtCLFNBQWMsRUFBRSxLQUFVO1FBQ3hDLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxXQUFXLEdBQVEsRUFBRSxDQUFDO1FBQzFCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDeEMsR0FBRyxDQUFDLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDO1lBQ3JELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUN6QyxHQUFHLElBQUksY0FBYyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUM7Z0JBQzlGLEdBQUcsSUFBSSwyQkFBMkIsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUM5RSxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3hELENBQUM7WUFDRCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDM0MsR0FBRyxJQUFJLHVCQUF1QixDQUFDO2dCQUMvQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUNqQyxHQUFHLElBQUksWUFBWSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7Z0JBQy9ELENBQUM7Z0JBQ0QsR0FBRyxJQUFJLHVCQUF1QixHQUFHLE9BQU8sR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQztnQkFDOUYsc0RBQXNEO1lBQzFELENBQUM7UUFDTCxDQUFDO1FBQ0QsUUFBUSxDQUFDO1FBQ1QsT0FBTyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFDeEIsSUFBSSxVQUFVLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsd0JBQVUsR0FBVixVQUFXLElBQVM7UUFDaEIsUUFBUSxDQUFDO0lBQ2IsQ0FBQztJQUNMLFVBQUM7QUFBRCxDQUFDOztBQUVEO0lBRUk7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksd0RBQU8sRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFDRCw0QkFBTyxHQUFQO1FBQ0ksSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDM0QsUUFBUSxDQUFDO1FBQ1QsR0FBRyxDQUFDLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUM7WUFDL0MsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzVCLGlEQUFpRDtZQUNqRCw2Q0FBNkM7WUFDN0MseUVBQXlFO1lBQ3pFLFFBQVEsQ0FBQztZQUNULGtDQUFrQztZQUNsQywwQkFBMEI7WUFDMUIsOEJBQThCO1lBQzlCLGlCQUFpQjtZQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVUsSUFBSTtnQkFDaEQsUUFBUSxDQUFDO2dCQUNULElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDL0MsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQ3BDLDZDQUE2QztZQUNqRCxDQUFDLENBQUMsQ0FBQztRQUVQLENBQUM7SUFDTCxDQUFDO0lBRUQsa0NBQWEsR0FBYjtJQUVBLENBQUM7SUFDTCxpQkFBQztBQUFELENBQUM7Ozs7Ozs7O0FDeEdEO0lBQ0k7SUFDQSxDQUFDO0lBQ0QsNEJBQVUsR0FBVixVQUFXLElBQVE7UUFDZixRQUFRLENBQUM7UUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlM2VjZmY2NTYzZTU3NjQ1ZTcyZSIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIGRlY2xhcmluZyBzdHVkZW50IHNrdWxsXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuY2xhc3MgU3R1ZGVudCB7XHJcbiAgICBpZDpudW1iZXI7XHJcbiAgICBuYW1lOnN0cmluZztcclxuICAgIHJvbGw6bnVtYmVyO1xyXG4gICAgY29uc3RydWN0b3IoaWQ6bnVtYmVyLG5hbWU6c3RyaW5nLHJvbGw6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5pZD1pZDtcclxuICAgICAgICB0aGlzLm5hbWU9bmFtZTtcclxuICAgICAgICB0aGlzLnJvbGw9cm9sbDtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTdHVkZW50O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHQvc3R1ZGVudC50cyIsImltcG9ydCBTdHVkZW50U2VydmljZSBmcm9tICcuL3N0dWRlbnRTZXJ2aWNlJztcclxuaW1wb3J0IGxvYWRlcnMgZnJvbSAnLi9zY3JpcHQnO1xyXG5jbGFzcyBudUNsZXVzIHtcclxuICAgIGFsbFN0dWRlbnQ6IGFueVtdO1xyXG4gICAgc2VydmljZTogYW55O1xyXG4gICAgc3RMaXN0RG9tOiBzdHJpbmc7XHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gbWFpbiBudWNsZXVzIGZ1bmN0aW9uIG9mIHRoZSBjbGFzc1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc2VydmljZSA9IG5ldyBTdHVkZW50U2VydmljZSgpO1xyXG4gICAgICAgIHRoaXMuYWxsU3R1ZGVudCA9IHRoaXNcclxuICAgICAgICAgICAgLnNlcnZpY2VcclxuICAgICAgICAgICAgLmdldEFsbFN0dWRlbnRzKCk7IC8vc3RvcmluZyBhbGwgc3R1ZGVudHMgZGF0YSBhdCBpbml0aWFsIHN0YWdlXHJcbiAgICAgICAgdGhpcy5yZW5kZXJTdHVkZW50TGlzdCgpOyAvLyByZW5kZXJpbmcgbGlzdCBhdCBpbml0aWFsIHN0YWdlXHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIHJlbmRlcmluZyBzdHVkZW50bGlzdCBpbiBkb20gZWxlbWVudFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHJlbmRlclN0dWRlbnRMaXN0KCkge1xyXG4gICAgICAgIGxldCBsaXN0RG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0TGlzdCcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc3RMaXN0RG9tID0gXCI8dWw+XCI7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuYWxsU3R1ZGVudC5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0IGRhdGFPYmogPSB0aGlzLmNsb25lT2JqZWN0KHRoaXMuYWxsU3R1ZGVudFtpbmRleF0pO1xyXG4gICAgICAgICAgICBkYXRhT2JqLmluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgICAgIGRhdGFPYmogPSBKU09OLnN0cmluZ2lmeShkYXRhT2JqKTtcclxuICAgICAgICAgICAgdGhpcy5zdExpc3REb20gKz0gXCI8bGkgc3QtZGF0YT0nXCIgKyBkYXRhT2JqICsgXCInPmlkOiBcIiArIHRoaXMuYWxsU3R1ZGVudFtpbmRleF0uaWQgKyBcIiBuYW1lOiBcIiArIHRoaXMuYWxsU3R1ZGVudFtpbmRleF0ubmFtZSArIFwiIHJvbGw6XCIgKyB0aGlzLmFsbFN0dWRlbnRbaW5kZXhdLnJvbGwgKyBcIjwvbGk+XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3RMaXN0RG9tICs9IFwiPC91bD5cIjtcclxuICAgICAgICBsaXN0RG9tLmlubmVySFRNTCA9IHRoaXMuc3RMaXN0RG9tO1xyXG4gICAgICAgIFxyXG4gICAgICAgIG5ldyBsb2FkZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gZGVlcCBjbG9uaW5nIG9iamVjdFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY2xvbmVPYmplY3Qob2JqOiBhbnkpIHtcclxuICAgICAgICBcclxuICAgICAgICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogIT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9iajtcclxuICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xyXG4gICAgICAgICAgICBsZXQgY2xvbmVkQXJyOmFueVtdO1xyXG4gICAgICAgICAgICBvYmouZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgY2xvbmVkQXJyLnB1c2godGhpcy5jbG9uZU9iamVjdChlbGVtZW50KSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBjbG9uZWRBcnI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGNsb25lZE9iajphbnk9e307XHJcbiAgICAgICAgICAgIGZvciAodmFyIHByb3AgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KHByb3ApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvbmVkT2JqW3Byb3BdID0gdGhpcy5jbG9uZU9iamVjdChvYmpbcHJvcF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjbG9uZWRPYmo7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxubmV3IG51Q2xldXMoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0L21haW4udHMiLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIHN0dWRlbnQgc2VydmljZSB0byBpbnRlcmFjdCB3aXRoIGRhdGEgXHJcbi8vIGFuZCBhcGkgY2FsbCBiZWhhdmlvclxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5pbXBvcnQgc3R1ZGVudCBmcm9tIFwiLi9zdHVkZW50XCI7IC8vIHN0dWRlbnRzIGJhY2tib25lXHJcbmltcG9ydCBzdHVkZW50TGlzdCBmcm9tICcuL3N0dWRlbnRMaXN0JzsgLy8gbGlzdCBvZiBpbml0aWFsIHN0dWRlbnRzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0dWRlbnRTZXJ2aWNle1xyXG4gICAgc3R1ZGVudHM6YW55W107XHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gbWFpbiBudWNsZXVzIGZ1bmN0aW9uIG9mIHRoZSBjbGFzc1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc3R1ZGVudHM9c3R1ZGVudExpc3Q7XHJcbiAgICB9XHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIHJldHVybiBhbGwgc3R1ZGVudHMgbGlzdFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBnZXRBbGxTdHVkZW50cygpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0dWRlbnRzO1xyXG4gICAgfVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBhZGRpbmcgbmV3IHN0dWRlbnRzXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGFkZE5ld1N0dWRlbnQoKXtcclxuICAgICAgICB0aGlzLnN0dWRlbnRzLnB1c2gobmV3IHN0dWRlbnQoNSwnbmV3JywxMDEwKSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBlZGl0U3R1ZGVudChkYXRhOmFueSl7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0L3N0dWRlbnRTZXJ2aWNlLnRzIiwiaW1wb3J0IHN0dWRlbnQgZnJvbSBcIi4vc3R1ZGVudFwiO1xyXG5sZXQgc3R1ZGVudHM9W1xyXG4gICAgbmV3IHN0dWRlbnQoMSwnbmFpZWVtJywxMDEpLFxyXG4gICAgbmV3IHN0dWRlbnQoMiwnbmFpZWVtJywxMDIpLFxyXG4gICAgbmV3IHN0dWRlbnQoMywnbmFpZWVtJywxMDMpLFxyXG4gICAgbmV3IHN0dWRlbnQoNCwnbmFpZWVtJywxMDQpLFxyXG4gICAgbmV3IHN0dWRlbnQoNSwnbmFpZWVtJywxMDUpXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdHVkZW50cztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0L3N0dWRlbnRMaXN0LnRzIiwiaW1wb3J0IGFjdGlvbnMgZnJvbSBcIi4vZXZlbnRzXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvbSB7XHJcbiAgICBtb2RlbDogYW55ID0ge307XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm1vZGVsID0ge1xyXG4gICAgICAgICAgICBlZGl0OiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIklEXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbE5hbWU6ICdpZCdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIk5hbWVcIixcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsTmFtZTogJ25hbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYnV0dG9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdzYXZlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiAndXBkYXRlRGF0YSdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMubGlzdEV2ZW50TGlzdGVuZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBsaXN0RXZlbnRMaXN0ZW5lcigpIHtcclxuICAgICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXYjc3RMaXN0IHVsIGxpXCIpO1xyXG4gICAgICAgIGxldCBtb2RlbCA9IHRoaXMubW9kZWw7IC8vIHN0b3JpbmcgcmVmZXJlbmNlIG9mIGlucHV0IGZpZWxkcyBjb25maWd1cmF0aW9uXHJcbiAgICAgICAgbGV0IGV4ZWN1dGVGdW5jdGlvbiA9IHRoaXMuZXhlY3V0ZUNsaWNrRXZlbnQ7IC8vIHRha2luZyByZWZlcmVuY2Ugb2YgZXhlY3V0aW5nIGZ1bmN0aW9uXHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGVsZW0ubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBldmVudERhdGEgPSBKU09OLnBhcnNlKGVsZW1baW5kZXhdLmdldEF0dHJpYnV0ZSgnc3QtZGF0YScpKTtcclxuICAgICAgICAgICAgZWxlbVtpbmRleF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBleGVjdXRlRnVuY3Rpb24oZXZlbnREYXRhLCBtb2RlbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleGVjdXRlQ2xpY2tFdmVudChldmVudERhdGE6IGFueSwgbW9kZWw6IGFueSkge1xyXG4gICAgICAgIGxldCBmb3JtRG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtXCIpO1xyXG4gICAgICAgIGxldCB0eHQgPSAnJztcclxuICAgICAgICBsZXQgc3RvcmVNb2RlbHM6IGFueSA9IFtdO1xyXG4gICAgICAgIGxldCBkYXRhT2JqID0gSlNPTi5zdHJpbmdpZnkoZXZlbnREYXRhKTtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbW9kZWwuZWRpdC5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgaWYgKG1vZGVsLmVkaXRbaW5kZXhdLmlucHV0LnR5cGUgPT0gJ3RleHQnKSB7XHJcbiAgICAgICAgICAgICAgICB0eHQgKz0gJzxsYWJlbCBmb3I9XCInICsgbW9kZWwuZWRpdFtpbmRleF0ubGFiZWwgKyAnXCI+JyArIG1vZGVsLmVkaXRbaW5kZXhdLmxhYmVsICsgJzwvbGFiZWw+JztcclxuICAgICAgICAgICAgICAgIHR4dCArPSAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIicgKyBtb2RlbC5lZGl0W2luZGV4XS5pbnB1dC5tb2RlbE5hbWUgKyAnXCI+JztcclxuICAgICAgICAgICAgICAgIHN0b3JlTW9kZWxzLnB1c2gobW9kZWwuZWRpdFtpbmRleF0uaW5wdXQubW9kZWxOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobW9kZWwuZWRpdFtpbmRleF0uaW5wdXQudHlwZSA9PSAnYnV0dG9uJykge1xyXG4gICAgICAgICAgICAgICAgdHh0ICs9ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIic7XHJcbiAgICAgICAgICAgICAgICBpZiAobW9kZWwuZWRpdFtpbmRleF0uaW5wdXQuYWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHh0ICs9ICdzdC1jbGljaz1cIicgKyBtb2RlbC5lZGl0W2luZGV4XS5pbnB1dC5hY3Rpb24gKyAnXCInO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdHh0ICs9IFwiIHN0LWVsZW1lbnQgc3QtZGF0YT0nXCIgKyBkYXRhT2JqICsgXCInPlwiICsgbW9kZWwuZWRpdFtpbmRleF0uaW5wdXQudmFsdWUgKyBcIjwvYnV0dG9uPlwiO1xyXG4gICAgICAgICAgICAgICAgLy9zdG9yZU1vZGVscy5wdXNoKG1vZGVsLmVkaXRbaW5kZXhdLmlucHV0Lm1vZGVsTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgZm9ybURvbS5pbm5lckhUTUwgPSB0eHQ7XHJcbiAgICAgICAgbmV3IHJlY3ljbGVEb20oKS5yZWN5Y2xlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlRGF0YShkYXRhOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgcmVjeWNsZURvbSB7XHJcbiAgICBhY3Rpb25zOiBhbnk7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmFjdGlvbnMgPSBuZXcgYWN0aW9ucygpO1xyXG4gICAgfVxyXG4gICAgcmVjeWNsZSgpIHtcclxuICAgICAgICB2YXIgdGVzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbltzdC1lbGVtZW50XScpO1xyXG4gICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0ZXN0Lmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGVzdFtpbmRleF07XHJcbiAgICAgICAgICAgIC8vbGV0IGFjdGl2aXR5ID0gdGVzdFtpbmRleF0uYXR0cmlidXRlc1sxXS52YWx1ZTtcclxuICAgICAgICAgICAgLy9sZXQgZGF0YSA9IHRlc3RbaW5kZXhdLmF0dHJpYnV0ZXNbM10udmFsdWU7XHJcbiAgICAgICAgICAgIC8vbGV0IGFjdGlvbj10aGlzLmFjdGlvbnM7IC8vIHN0b3JlZCBmb3IgcmVmZXJlbmNlIHVzZSBpbiB0aGUgY2xpY2sgZXZlbnRcclxuICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgICAgIC8vIGV2YWwoXCJ0aGlzLmFjdGlvbnMuXCIrYWN0aXZpdHkpO1xyXG4gICAgICAgICAgICAvLyBldmFsKCd0aGlzLmFjdGlvbnMoKScpO1xyXG4gICAgICAgICAgICAvLyBuZXcgYWN0aW9ucygpLnVwZGF0ZURhdGEoKTtcclxuICAgICAgICAgICAgLy8gbmV3IGFjdGlvbnMoKS5cclxuICAgICAgICAgICAgdGVzdFtpbmRleF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZWxlbSkge1xyXG4gICAgICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgICAgICAgICBsZXQgYWN0aXZpdHkgPSBlbGVtLnRhcmdldC5hdHRyaWJ1dGVzWzFdLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBlbGVtLmF0dHJpYnV0ZXNbM10udmFsdWU7XHJcbiAgICAgICAgICAgICAgICAvLyBldmFsKCdhY3Rpb25zJysnLicrYWN0aXZpdHkrJygnK2RhdGErJyknKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleGVjdXRlRXZlbnRzKCkge1xyXG5cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHQvc2NyaXB0LnRzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9ucyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuICAgIHVwZGF0ZURhdGEoZGF0YTphbnkpOnZvaWR7XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0L2V2ZW50cy50cyJdLCJzb3VyY2VSb290IjoiIn0=