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
        var storeModels;
        for (var index = 0; index < model.edit.length; index++) {
            txt += '<label for="' + model.edit[index].label + '">' + model.edit[index].label + '</label>';
            if (model.edit[index].input.type == 'text') {
                txt += '<input type="text" name="' + model.edit[index].input.modelName + '">';
                storeModels.push(model.edit[index].input.modelName);
            }
        }
        txt += "<button type='button'>Save</button>";
        debugger;
        formDom.innerHTML = txt;
    };
    return Dom;
}());
/* harmony default export */ __webpack_exports__["a"] = (Dom);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2I2YzRmYWMyNGE3Nzk0MDdlMmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdC9zdHVkZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHQvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0L3N0dWRlbnRTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHQvc3R1ZGVudExpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdC9zY3JpcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzdEQSxtQ0FBbUM7QUFDbkMsMEJBQTBCO0FBQzFCLGtDQUFrQztBQUNsQztJQUlJLGlCQUFZLEVBQVMsRUFBQyxJQUFXLEVBQUMsSUFBVztRQUN6QyxJQUFJLENBQUMsRUFBRSxHQUFDLEVBQUUsQ0FBQztRQUNYLElBQUksQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDO1FBQ2YsSUFBSSxDQUFDLElBQUksR0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUFDO0FBQ0QseURBQWUsT0FBTyxFQUFDOzs7Ozs7Ozs7OztBQ2J1QjtBQUNmO0FBQy9CO0lBSUkseUNBQXlDO0lBQ3pDLHFDQUFxQztJQUNyQyx5Q0FBeUM7SUFDekM7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksZ0VBQWMsRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSTthQUNqQixPQUFPO2FBQ1AsY0FBYyxFQUFFLENBQUMsQ0FBQyw0Q0FBNEM7UUFDbkUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxrQ0FBa0M7SUFDaEUsQ0FBQztJQUVELHlDQUF5QztJQUN6Qyx1Q0FBdUM7SUFDdkMseUNBQXlDO0lBQ3pDLG1DQUFpQixHQUFqQjtRQUNJLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFaEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDeEIsR0FBRyxDQUFDLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDO1lBQzFELElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxTQUFTLElBQUksZUFBZSxHQUFHLE9BQU8sR0FBRyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7UUFDcEwsQ0FBQztRQUNELElBQUksQ0FBQyxTQUFTLElBQUksT0FBTyxDQUFDO1FBQzFCLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUVuQyxJQUFJLHdEQUFPLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBQ0QsNkJBQVcsR0FBWCxVQUFZLEdBQVE7UUFFaEIsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDZixDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksV0FBZSxDQUFDO1lBQ3BCLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxPQUFPO2dCQUN6QixXQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDN0MsQ0FBQyxDQUFDLENBQUM7WUFDSCxNQUFNLENBQUMsV0FBUyxDQUFDO1FBQ3JCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksU0FBUyxHQUFLLEVBQUUsQ0FBQztZQUNyQixHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDM0IsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2xELENBQUM7WUFDTCxDQUFDO1lBQ0QsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUNyQixDQUFDO0lBQ0wsQ0FBQztJQUVMLGNBQUM7QUFBRCxDQUFDO0FBRUQsSUFBSSxPQUFPLEVBQUUsQ0FBQzs7Ozs7Ozs7O0FDMURkO0FBQUEsdURBQXVEO0FBQ3ZELHlDQUF5QztBQUN6Qyx3QkFBd0I7QUFDeEIsdURBQXVEO0FBRXZCLENBQUMsb0JBQW9CO0FBQ2IsQ0FBQywyQkFBMkI7QUFDcEU7SUFFSSx5Q0FBeUM7SUFDekMscUNBQXFDO0lBQ3JDLHlDQUF5QztJQUN6QztRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUMsNkRBQVcsQ0FBQztJQUM5QixDQUFDO0lBQ0QsMENBQTBDO0lBQzFDLDJCQUEyQjtJQUMzQiwwQ0FBMEM7SUFDMUMsdUNBQWMsR0FBZDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFDRCwwQ0FBMEM7SUFDMUMsc0JBQXNCO0lBQ3RCLDBDQUEwQztJQUMxQyxzQ0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSx5REFBTyxDQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUVsRCxDQUFDO0lBQ0Qsb0NBQVcsR0FBWCxVQUFZLElBQVE7SUFFcEIsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7OztBQy9CK0I7QUFDaEMsSUFBSSxRQUFRLEdBQUM7SUFDVCxJQUFJLHlEQUFPLENBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxHQUFHLENBQUM7SUFDM0IsSUFBSSx5REFBTyxDQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsR0FBRyxDQUFDO0lBQzNCLElBQUkseURBQU8sQ0FBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLEdBQUcsQ0FBQztJQUMzQixJQUFJLHlEQUFPLENBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxHQUFHLENBQUM7SUFDM0IsSUFBSSx5REFBTyxDQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsR0FBRyxDQUFDO0NBQzlCLENBQUM7QUFFRix5REFBZSxRQUFRLEVBQUM7Ozs7Ozs7O0FDVHhCO0lBRUk7UUFEQSxVQUFLLEdBQVEsRUFBRSxDQUFDO1FBRVosSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULElBQUksRUFBRSxDQUFDO29CQUNDLEtBQUssRUFBRSxJQUFJO29CQUNYLEtBQUssRUFBRTt3QkFDSCxJQUFJLEVBQUUsTUFBTTt3QkFDWixTQUFTLEVBQUUsSUFBSTtxQkFDbEI7aUJBQ0o7Z0JBQ0Q7b0JBQ0ksS0FBSyxFQUFFLE1BQU07b0JBQ2IsS0FBSyxFQUFFO3dCQUNILElBQUksRUFBRSxNQUFNO3dCQUNaLFNBQVMsRUFBRSxNQUFNO3FCQUNwQjtpQkFDSjthQUNKO1NBQ0osQ0FBQztRQUNGLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCwrQkFBaUIsR0FBakI7UUFDSSxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUN6RCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsa0RBQWtEO1FBQzFFLElBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLHlDQUF5QztnQ0FDOUUsS0FBSztZQUNWLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2hFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7Z0JBQ2xDLGVBQWUsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDdEMsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBTEQsR0FBRyxDQUFDLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRTtvQkFBdkMsS0FBSztTQUtiO0lBQ0wsQ0FBQztJQUVELCtCQUFpQixHQUFqQixVQUFrQixTQUFjLEVBQUUsS0FBVTtRQUN4QyxJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlDLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksV0FBcUIsQ0FBQztRQUMxQixHQUFHLENBQUMsQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUM7WUFDckQsR0FBRyxJQUFJLGNBQWMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDO1lBQzlGLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUN6QyxHQUFHLElBQUksMkJBQTJCLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDOUUsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN4RCxDQUFDO1FBQ0wsQ0FBQztRQUNELEdBQUcsSUFBSSxxQ0FBcUMsQ0FBQztRQUM3QyxRQUFRLENBQUM7UUFDVCxPQUFPLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztJQUM1QixDQUFDO0lBRUwsVUFBQztBQUFELENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgY2I2YzRmYWMyNGE3Nzk0MDdlMmYiLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBkZWNsYXJpbmcgc3R1ZGVudCBza3VsbFxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmNsYXNzIFN0dWRlbnQge1xyXG4gICAgaWQ6bnVtYmVyO1xyXG4gICAgbmFtZTpzdHJpbmc7XHJcbiAgICByb2xsOm51bWJlcjtcclxuICAgIGNvbnN0cnVjdG9yKGlkOm51bWJlcixuYW1lOnN0cmluZyxyb2xsOm51bWJlcikge1xyXG4gICAgICAgIHRoaXMuaWQ9aWQ7XHJcbiAgICAgICAgdGhpcy5uYW1lPW5hbWU7XHJcbiAgICAgICAgdGhpcy5yb2xsPXJvbGw7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU3R1ZGVudDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0L3N0dWRlbnQudHMiLCJpbXBvcnQgU3R1ZGVudFNlcnZpY2UgZnJvbSAnLi9zdHVkZW50U2VydmljZSc7XHJcbmltcG9ydCBsb2FkZXJzIGZyb20gJy4vc2NyaXB0JztcclxuY2xhc3MgbnVDbGV1cyB7XHJcbiAgICBhbGxTdHVkZW50OiBhbnlbXTtcclxuICAgIHNlcnZpY2U6IGFueTtcclxuICAgIHN0TGlzdERvbTogc3RyaW5nO1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIG1haW4gbnVjbGV1cyBmdW5jdGlvbiBvZiB0aGUgY2xhc3NcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnNlcnZpY2UgPSBuZXcgU3R1ZGVudFNlcnZpY2UoKTtcclxuICAgICAgICB0aGlzLmFsbFN0dWRlbnQgPSB0aGlzXHJcbiAgICAgICAgICAgIC5zZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXRBbGxTdHVkZW50cygpOyAvL3N0b3JpbmcgYWxsIHN0dWRlbnRzIGRhdGEgYXQgaW5pdGlhbCBzdGFnZVxyXG4gICAgICAgIHRoaXMucmVuZGVyU3R1ZGVudExpc3QoKTsgLy8gcmVuZGVyaW5nIGxpc3QgYXQgaW5pdGlhbCBzdGFnZVxyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyByZW5kZXJpbmcgc3R1ZGVudGxpc3QgaW4gZG9tIGVsZW1lbnRcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICByZW5kZXJTdHVkZW50TGlzdCgpIHtcclxuICAgICAgICBsZXQgbGlzdERvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdExpc3QnKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnN0TGlzdERvbSA9IFwiPHVsPlwiO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmFsbFN0dWRlbnQubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhT2JqID0gdGhpcy5jbG9uZU9iamVjdCh0aGlzLmFsbFN0dWRlbnRbaW5kZXhdKTtcclxuICAgICAgICAgICAgZGF0YU9iai5pbmRleCA9IGluZGV4O1xyXG4gICAgICAgICAgICBkYXRhT2JqID0gSlNPTi5zdHJpbmdpZnkoZGF0YU9iaik7XHJcbiAgICAgICAgICAgIHRoaXMuc3RMaXN0RG9tICs9IFwiPGxpIHN0LWRhdGE9J1wiICsgZGF0YU9iaiArIFwiJz5pZDogXCIgKyB0aGlzLmFsbFN0dWRlbnRbaW5kZXhdLmlkICsgXCIgbmFtZTogXCIgKyB0aGlzLmFsbFN0dWRlbnRbaW5kZXhdLm5hbWUgKyBcIiByb2xsOlwiICsgdGhpcy5hbGxTdHVkZW50W2luZGV4XS5yb2xsICsgXCI8L2xpPlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0TGlzdERvbSArPSBcIjwvdWw+XCI7XHJcbiAgICAgICAgbGlzdERvbS5pbm5lckhUTUwgPSB0aGlzLnN0TGlzdERvbTtcclxuICAgICAgICBcclxuICAgICAgICBuZXcgbG9hZGVycygpO1xyXG4gICAgfVxyXG4gICAgY2xvbmVPYmplY3Qob2JqOiBhbnkpIHtcclxuICAgICAgICBcclxuICAgICAgICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogIT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9iajtcclxuICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xyXG4gICAgICAgICAgICBsZXQgY2xvbmVkQXJyOmFueVtdO1xyXG4gICAgICAgICAgICBvYmouZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgY2xvbmVkQXJyLnB1c2godGhpcy5jbG9uZU9iamVjdChlbGVtZW50KSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBjbG9uZWRBcnI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGNsb25lZE9iajphbnk9e307XHJcbiAgICAgICAgICAgIGZvciAodmFyIHByb3AgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KHByb3ApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvbmVkT2JqW3Byb3BdID0gdGhpcy5jbG9uZU9iamVjdChvYmpbcHJvcF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjbG9uZWRPYmo7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxubmV3IG51Q2xldXMoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0L21haW4udHMiLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIHN0dWRlbnQgc2VydmljZSB0byBpbnRlcmFjdCB3aXRoIGRhdGEgXHJcbi8vIGFuZCBhcGkgY2FsbCBiZWhhdmlvclxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5pbXBvcnQgc3R1ZGVudCBmcm9tIFwiLi9zdHVkZW50XCI7IC8vIHN0dWRlbnRzIGJhY2tib25lXHJcbmltcG9ydCBzdHVkZW50TGlzdCBmcm9tICcuL3N0dWRlbnRMaXN0JzsgLy8gbGlzdCBvZiBpbml0aWFsIHN0dWRlbnRzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0dWRlbnRTZXJ2aWNle1xyXG4gICAgc3R1ZGVudHM6YW55W107XHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gbWFpbiBudWNsZXVzIGZ1bmN0aW9uIG9mIHRoZSBjbGFzc1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc3R1ZGVudHM9c3R1ZGVudExpc3Q7XHJcbiAgICB9XHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIHJldHVybiBhbGwgc3R1ZGVudHMgbGlzdFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBnZXRBbGxTdHVkZW50cygpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0dWRlbnRzO1xyXG4gICAgfVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBhZGRpbmcgbmV3IHN0dWRlbnRzXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGFkZE5ld1N0dWRlbnQoKXtcclxuICAgICAgICB0aGlzLnN0dWRlbnRzLnB1c2gobmV3IHN0dWRlbnQoNSwnbmV3JywxMDEwKSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBlZGl0U3R1ZGVudChkYXRhOmFueSl7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0L3N0dWRlbnRTZXJ2aWNlLnRzIiwiaW1wb3J0IHN0dWRlbnQgZnJvbSBcIi4vc3R1ZGVudFwiO1xyXG5sZXQgc3R1ZGVudHM9W1xyXG4gICAgbmV3IHN0dWRlbnQoMSwnbmFpZWVtJywxMDEpLFxyXG4gICAgbmV3IHN0dWRlbnQoMiwnbmFpZWVtJywxMDIpLFxyXG4gICAgbmV3IHN0dWRlbnQoMywnbmFpZWVtJywxMDMpLFxyXG4gICAgbmV3IHN0dWRlbnQoNCwnbmFpZWVtJywxMDQpLFxyXG4gICAgbmV3IHN0dWRlbnQoNSwnbmFpZWVtJywxMDUpXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdHVkZW50cztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0L3N0dWRlbnRMaXN0LnRzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9tIHtcclxuICAgIG1vZGVsOiBhbnkgPSB7fTtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubW9kZWwgPSB7XHJcbiAgICAgICAgICAgIGVkaXQ6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiSURcIixcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsTmFtZTogJ2lkJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiTmFtZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWxOYW1lOiAnbmFtZSdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMubGlzdEV2ZW50TGlzdGVuZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBsaXN0RXZlbnRMaXN0ZW5lcigpIHtcclxuICAgICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXYjc3RMaXN0IHVsIGxpXCIpO1xyXG4gICAgICAgIGxldCBtb2RlbCA9IHRoaXMubW9kZWw7IC8vIHN0b3JpbmcgcmVmZXJlbmNlIG9mIGlucHV0IGZpZWxkcyBjb25maWd1cmF0aW9uXHJcbiAgICAgICAgbGV0IGV4ZWN1dGVGdW5jdGlvbiA9IHRoaXMuZXhlY3V0ZUNsaWNrRXZlbnQ7IC8vIHRha2luZyByZWZlcmVuY2Ugb2YgZXhlY3V0aW5nIGZ1bmN0aW9uXHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGVsZW0ubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBldmVudERhdGEgPSBKU09OLnBhcnNlKGVsZW1baW5kZXhdLmdldEF0dHJpYnV0ZSgnc3QtZGF0YScpKTtcclxuICAgICAgICAgICAgZWxlbVtpbmRleF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBleGVjdXRlRnVuY3Rpb24oZXZlbnREYXRhLCBtb2RlbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleGVjdXRlQ2xpY2tFdmVudChldmVudERhdGE6IGFueSwgbW9kZWw6IGFueSkge1xyXG4gICAgICAgIGxldCBmb3JtRG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtXCIpO1xyXG4gICAgICAgIGxldCB0eHQgPSAnJztcclxuICAgICAgICBsZXQgc3RvcmVNb2RlbHM6IHN0cmluZ1tdO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBtb2RlbC5lZGl0Lmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICB0eHQgKz0gJzxsYWJlbCBmb3I9XCInICsgbW9kZWwuZWRpdFtpbmRleF0ubGFiZWwgKyAnXCI+JyArIG1vZGVsLmVkaXRbaW5kZXhdLmxhYmVsICsgJzwvbGFiZWw+JztcclxuICAgICAgICAgICAgaWYgKG1vZGVsLmVkaXRbaW5kZXhdLmlucHV0LnR5cGUgPT0gJ3RleHQnKSB7XHJcbiAgICAgICAgICAgICAgICB0eHQgKz0gJzxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCInICsgbW9kZWwuZWRpdFtpbmRleF0uaW5wdXQubW9kZWxOYW1lICsgJ1wiPic7XHJcbiAgICAgICAgICAgICAgICBzdG9yZU1vZGVscy5wdXNoKG1vZGVsLmVkaXRbaW5kZXhdLmlucHV0Lm1vZGVsTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdHh0ICs9IFwiPGJ1dHRvbiB0eXBlPSdidXR0b24nPlNhdmU8L2J1dHRvbj5cIjtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICBmb3JtRG9tLmlubmVySFRNTCA9IHR4dDtcclxuICAgIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0L3NjcmlwdC50cyJdLCJzb3VyY2VSb290IjoiIn0=