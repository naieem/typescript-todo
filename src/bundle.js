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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__class_appController__ = __webpack_require__(14);
/**
* Project Name: Typescript todo
* Description: This is a typescript todo applications main file
* Author: Naieem Mahmud Supto
* Author URI: http://naieem.me/
* Repository: http://github.com/naieem/
* Version: 1.2.4
* License: GPL2 or later
* License URI: https://www.gnu.org/licenses/gpl-2.0.html
*/

var nuCleus = /** @class */ (function () {
    // ======================================
    // main nucleus function of the class
    // ======================================
    function nuCleus() {
        // new actions().renderStudentList();
        new __WEBPACK_IMPORTED_MODULE_0__class_appController__["a" /* default */]();
    }
    return nuCleus;
}());
new nuCleus();


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__student__ = __webpack_require__(0);
/**
 * Project Name: Typescript todo
 * Description: Dummy data to use while initial stage
 * Author: Naieem Mahmud Supto
 * Author URI: http://naieem.me/
 * Repository: http://github.com/naieem/
 * Version: 1.2.4
 * License: GPL2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 */

var students = [
    new __WEBPACK_IMPORTED_MODULE_0__student__["a" /* default */](1, 'naieem1', 101),
    new __WEBPACK_IMPORTED_MODULE_0__student__["a" /* default */](2, 'naieem2', 102),
    new __WEBPACK_IMPORTED_MODULE_0__student__["a" /* default */](3, 'naieem3', 103),
    new __WEBPACK_IMPORTED_MODULE_0__student__["a" /* default */](4, 'naieem4', 104),
    new __WEBPACK_IMPORTED_MODULE_0__student__["a" /* default */](5, 'naieem5', 105)
];
/* harmony default export */ __webpack_exports__["a"] = (students);


/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return recycleDom; });
/**
 * Project Name: Typescript todo
 * Description: DOM digest class.
 * Author: Naieem Mahmud Supto
 * Author URI: http://naieem.me/
 * Repository: http://github.com/naieem/
 * Version: 1.2.4
 * License: GPL2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 */

// ================================================================
// Query for DOM element.Modifies and bind data with dom element.
// ================================================================
var recycleDom = /** @class */ (function () {
    function recycleDom(model) {
        this.identifier = model;
    }
    // ====================================
    // DOM element recycling function
    // ====================================
    recycleDom.prototype.execute = function () {
    };
    // =========================================================
    // binds value with input type with having model attribute
    // =========================================================
    recycleDom.prototype.bindValue = function (eventData) {
        //----------- bingding value for edited data ------------//
        for (var index = 0; index < this.identifier.edit.length; index++) {
            if (this.identifier.edit[index].input.type == 'text') {
                var bindElem = document.querySelector('[st-model="' + this.identifier.edit[index].input.modelName + '"]');
                var val = eventData[this.identifier.edit[index].input.modelName];
                bindElem.value = val;
            }
        }
    };
    return recycleDom;
}());



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Actions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__student__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_studentService__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_domActionController__ = __webpack_require__(12);
/**
 * Project Name: Typescript todo
 * Description: File to add eventlistener to dom elements
 * Author: Naieem Mahmud Supto
 * Author URI: http://naieem.me/
 * Repository: http://github.com/naieem/
 * Version: 1.2.4
 * License: GPL2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 */
//----------- Importing dependencies ------------//
 // student enum
 // list of initial students

//----------- declaring class ------------//
var Actions = /** @class */ (function () {
    function Actions() {
        this.studentService = new __WEBPACK_IMPORTED_MODULE_1__class_studentService__["a" /* default */]();
        this.domActionController = new __WEBPACK_IMPORTED_MODULE_2__class_domActionController__["a" /* DomActionsControllerModule */]();
    }
    Actions.prototype.updateData = function (data) {
        console.log(data);
    };
    Actions.prototype.addNew = function () {
        var newst = new __WEBPACK_IMPORTED_MODULE_0__student__["a" /* default */](10, 'supto', 16);
        this.studentService.addNewStudent(newst);
        console.log(this.studentService.students);
        debugger;
        this.domActionController.renderStudentList(this.studentService.students);
    };
    return Actions;
}());



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__studentList__ = __webpack_require__(4);
/**
 * Project Name: Typescript todo
 * Description: Student service to interact with data
 * Author: Naieem Mahmud Supto
 * Author URI: http://naieem.me/
 * Repository: http://github.com/naieem/
 * Version: 1.2.4
 * License: GPL2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 */
 // list of initial students
//----------- Declaring class ------------//
var StudentService = /** @class */ (function () {
    // ======================================
    // main nucleus function of the class
    // ======================================
    function StudentService() {
        this.students = __WEBPACK_IMPORTED_MODULE_0__studentList__["a" /* default */];
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
    StudentService.prototype.addNewStudent = function (st) {
        this.students.push(st);
    };
    StudentService.prototype.editStudent = function (data) {
    };
    return StudentService;
}());
/* harmony default export */ __webpack_exports__["a"] = (StudentService);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DomActionsControllerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__class_domActionHandler__ = __webpack_require__(13);
/*
File Name: Script.ts
Description: This is the file for DOM action provider.Function of this file takes care
of the dom elements actions and render data according to that
Author: Naieem Mahmud Supto
Version: 1.1
*/


//----------- Declaring class ------------//
var DomActionsControllerModule = /** @class */ (function () {
    // ======================================
    // Nucleus fo the class
    // ======================================
    function DomActionsControllerModule() {
        //----------- variable declaration block ------------//
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
    }
    //----------- Funciton declaration block ------------//
    // ====================================
    // event listener for list items
    // ====================================
    DomActionsControllerModule.prototype.listEventListener = function () {
        var elem = document.querySelectorAll("div#stList ul li");
        var domActionHandler = new __WEBPACK_IMPORTED_MODULE_0__class_domActionHandler__["a" /* DomActionHandler */](this.model);
        var _loop_1 = function (index) {
            var eventData = JSON.parse(elem[index].getAttribute('st-data'));
            elem[index].addEventListener('click', function () {
                domActionHandler.renderData(eventData);
            });
        };
        for (var index = 0; index < elem.length; index++) {
            _loop_1(index);
        }
    };
    // ====================================================
    // click event listener for elements having st-click
    // ====================================================
    DomActionsControllerModule.prototype.clickEventsListener = function () {
        var elem = document.querySelectorAll("[st-click]");
        var model = this.model; // storing reference of input fields configuration
        var domActionHandler = new __WEBPACK_IMPORTED_MODULE_0__class_domActionHandler__["a" /* DomActionHandler */](this.model);
        var _loop_2 = function (index) {
            var actionsFnc = elem[index].getAttribute('st-click');
            elem[index].addEventListener('click', function (e) {
                domActionHandler.executeEvent(actionsFnc);
            });
        };
        for (var index = 0; index < elem.length; index++) {
            _loop_2(index);
        }
    };
    DomActionsControllerModule.prototype.renderStudentList = function (studentList) {
        var listDom = document.getElementById('stList');
        var stListDom = "<ul>";
        for (var index = 0; index < studentList.length; index++) {
            var dataObj = this.cloneObject(studentList[index]);
            dataObj.index = index;
            dataObj = JSON.stringify(dataObj);
            stListDom += "<li st-data='" + dataObj + "'>id: " + studentList[index].id + " name: " + studentList[index].name + " roll:" + studentList[index].roll + "</li>";
        }
        stListDom += "</ul>";
        listDom.innerHTML = stListDom;
    };
    // ===========================================
    // deep cloning object
    // ===========================================
    DomActionsControllerModule.prototype.cloneObject = function (obj) {
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
    return DomActionsControllerModule;
}());



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DomActionHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__class_recycleDom__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_actions__ = __webpack_require__(10);
/**
 * Project Name: Typescript todo
 * Description: This module renders dome element on request from action controler
 * Author: Naieem Mahmud Supto
 * Author URI: http://naieem.me/
 * Repository: http://github.com/naieem/
 * Version: 1.2.4
 * License: GPL2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 */
//----------- importng dependencies ------------//


//----------- declaring class functions ------------//
var DomActionHandler = /** @class */ (function () {
    function DomActionHandler(model) {
        this.model = model; // array of dom element object to apply actions
    }
    DomActionHandler.prototype.renderData = function (eventData) {
        ;
        var formDom = document.getElementById("form");
        var txt = '';
        var storeModels = [];
        var dataObj = JSON.stringify(eventData);
        for (var index = 0; index < this.model.edit.length; index++) {
            if (this.model.edit[index].input.type == 'text') {
                txt += '<label for="' + this.model.edit[index].label + '">' + this.model.edit[index].label + '</label>';
                txt += '<input type="text" st-model=' + this.model.edit[index].input.modelName + ' name="' + this.model.edit[index].input.modelName + '">';
                storeModels.push(this.model.edit[index].input.modelName);
            }
            if (this.model.edit[index].input.type == 'button') {
                txt += '<button type="button"';
                if (this.model.edit[index].input.action) {
                    txt += 'st-click="' + this.model.edit[index].input.action + '"';
                }
                txt += " st-element st-data='" + dataObj + "'>" + this.model.edit[index].input.value + "</button>";
            }
        }
        formDom.innerHTML = txt;
        /**
         * initiated new class with eventdata and all DOM array element
         * return {}
         */
        new __WEBPACK_IMPORTED_MODULE_0__class_recycleDom__["a" /* recycleDom */](this.model).bindValue(eventData);
    };
    DomActionHandler.prototype.executeEvent = function (actionName) {
        var actions = new __WEBPACK_IMPORTED_MODULE_1__class_actions__["a" /* Actions */]();
        actions[actionName]();
    };
    return DomActionHandler;
}());



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__class_studentService__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_domActionController__ = __webpack_require__(12);
/**
 * Project Name: Typescript todo
 * Description: File for DOM manupulations.
 * Author: Naieem Mahmud Supto
 * Author URI: http://naieem.me/
 * Repository: http://github.com/naieem/
 * Version: 1.2.4
 * License: GPL2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 */



//----------- Declaring class ------------//
var Bootstrap = /** @class */ (function () {
    // ======================================
    // neucleus of the class
    // ======================================
    function Bootstrap() {
        this.studentService = new __WEBPACK_IMPORTED_MODULE_0__class_studentService__["a" /* default */]();
        this.actionController = new __WEBPACK_IMPORTED_MODULE_1__class_domActionController__["a" /* DomActionsControllerModule */]();
        this.renderStudentList();
        //----------- defining clickevent ------------//
        this.actionController.listEventListener();
        this.actionController.clickEventsListener();
    }
    //----------- Function declaration block ------------//
    // ======================================
    // rendering studentlist in dom element
    // ======================================
    Bootstrap.prototype.renderStudentList = function () {
        this.actionController.renderStudentList(this.getStudentList());
    };
    // ==============================
    // fetching studentlist
    // ==============================
    Bootstrap.prototype.getStudentList = function () {
        return this.studentService.getAllStudents();
    };
    return Bootstrap;
}());
/* harmony default export */ __webpack_exports__["a"] = (Bootstrap);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWZiYjY0YmU0ZWJhYjgyYzM5YmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdC9zdHVkZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHQvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0L3N0dWRlbnRMaXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHQvY2xhc3MucmVjeWNsZURvbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0L2NsYXNzLmFjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdC9jbGFzcy5zdHVkZW50U2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0L2NsYXNzLmRvbUFjdGlvbkNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdC9jbGFzcy5kb21BY3Rpb25IYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHQvY2xhc3MuYXBwQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDN0RBLG1DQUFtQztBQUNuQywwQkFBMEI7QUFDMUIsa0NBQWtDO0FBQ2xDO0lBSUksaUJBQVksRUFBUyxFQUFDLElBQVcsRUFB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Q0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsdUNBQVksR0FBWixVQUFhLFVBQWlCO1FBQzFCLElBQUksT0FBTyxHQUFDLElBQUksK0RBQU8sRUFBRSxDQUFDO1FBQzFCLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFDTCx1QkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7QUN0REQ7QUFBQTs7Ozs7Ozs7O0dBU0c7QUFDVTtBQUl1QztBQUNtQjtBQUV2RSw0Q0FBNEM7QUFDNUM7SUFNSSx5Q0FBeUM7SUFDekMsd0JBQXdCO0lBQ3hCLHlDQUF5QztJQUV6QztRQUNJLElBQUksQ0FBQyxjQUFjLEdBQUMsSUFBSSxzRUFBYyxFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLGdCQUFnQixHQUFDLElBQUksOEZBQTBCLEVBQUUsQ0FBQztRQUN2RCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QixnREFBZ0Q7UUFDaEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUVELHVEQUF1RDtJQUd2RCx5Q0FBeUM7SUFDekMsdUNBQXVDO0lBQ3ZDLHlDQUF5QztJQUV6QyxxQ0FBaUIsR0FBakI7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUlELGlDQUFpQztJQUNqQyx1QkFBdUI7SUFDdkIsaUNBQWlDO0lBRWpDLGtDQUFjLEdBQWQ7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0lBRUwsZ0JBQUM7QUFBRCxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGVmYmI2NGJlNGViYWI4MmMzOWJiIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gZGVjbGFyaW5nIHN0dWRlbnQgc2t1bGxcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5jbGFzcyBTdHVkZW50IHtcclxuICAgIGlkOm51bWJlcjtcclxuICAgIG5hbWU6c3RyaW5nO1xyXG4gICAgcm9sbDpudW1iZXI7XHJcbiAgICBjb25zdHJ1Y3RvcihpZDpudW1iZXIsbmFtZTpzdHJpbmcscm9sbDpudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmlkPWlkO1xyXG4gICAgICAgIHRoaXMubmFtZT1uYW1lO1xyXG4gICAgICAgIHRoaXMucm9sbD1yb2xsO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFN0dWRlbnQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdC9zdHVkZW50LnRzIiwiIC8qKlxyXG4gKiBQcm9qZWN0IE5hbWU6IFR5cGVzY3JpcHQgdG9kb1xyXG4gKiBEZXNjcmlwdGlvbjogVGhpcyBpcyBhIHR5cGVzY3JpcHQgdG9kbyBhcHBsaWNhdGlvbnMgbWFpbiBmaWxlXHJcbiAqIEF1dGhvcjogTmFpZWVtIE1haG11ZCBTdXB0b1xyXG4gKiBBdXRob3IgVVJJOiBodHRwOi8vbmFpZWVtLm1lL1xyXG4gKiBSZXBvc2l0b3J5OiBodHRwOi8vZ2l0aHViLmNvbS9uYWllZW0vXHJcbiAqIFZlcnNpb246IDEuMi40XHJcbiAqIExpY2Vuc2U6IEdQTDIgb3IgbGF0ZXJcclxuICogTGljZW5zZSBVUkk6IGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvZ3BsLTIuMC5odG1sXHJcbiAqL1xyXG5cclxuaW1wb3J0IGJvb3RzdHJhcCBmcm9tIFwiLi9jbGFzcy5hcHBDb250cm9sbGVyXCI7XHJcbmNsYXNzIG51Q2xldXMge1xyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBtYWluIG51Y2xldXMgZnVuY3Rpb24gb2YgdGhlIGNsYXNzXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy8gbmV3IGFjdGlvbnMoKS5yZW5kZXJTdHVkZW50TGlzdCgpO1xyXG4gICAgICAgIG5ldyBib290c3RyYXAoKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbm5ldyBudUNsZXVzKCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHQvbWFpbi50cyIsIi8qKlxyXG4gKiBQcm9qZWN0IE5hbWU6IFR5cGVzY3JpcHQgdG9kb1xyXG4gKiBEZXNjcmlwdGlvbjogRHVtbXkgZGF0YSB0byB1c2Ugd2hpbGUgaW5pdGlhbCBzdGFnZVxyXG4gKiBBdXRob3I6IE5haWVlbSBNYWhtdWQgU3VwdG9cclxuICogQXV0aG9yIFVSSTogaHR0cDovL25haWVlbS5tZS9cclxuICogUmVwb3NpdG9yeTogaHR0cDovL2dpdGh1Yi5jb20vbmFpZWVtL1xyXG4gKiBWZXJzaW9uOiAxLjIuNFxyXG4gKiBMaWNlbnNlOiBHUEwyIG9yIGxhdGVyXHJcbiAqIExpY2Vuc2UgVVJJOiBodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2dwbC0yLjAuaHRtbFxyXG4gKi9cclxuXHJcbmltcG9ydCBzdHVkZW50IGZyb20gXCIuL3N0dWRlbnRcIjtcclxubGV0IHN0dWRlbnRzPVtcclxuICAgIG5ldyBzdHVkZW50KDEsJ25haWVlbTEnLDEwMSksXHJcbiAgICBuZXcgc3R1ZGVudCgyLCduYWllZW0yJywxMDIpLFxyXG4gICAgbmV3IHN0dWRlbnQoMywnbmFpZWVtMycsMTAzKSxcclxuICAgIG5ldyBzdHVkZW50KDQsJ25haWVlbTQnLDEwNCksXHJcbiAgICBuZXcgc3R1ZGVudCg1LCduYWllZW01JywxMDUpXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdHVkZW50cztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0L3N0dWRlbnRMaXN0LnRzIiwiLyoqXHJcbiAqIFByb2plY3QgTmFtZTogVHlwZXNjcmlwdCB0b2RvXHJcbiAqIERlc2NyaXB0aW9uOiBET00gZGlnZXN0IGNsYXNzLlxyXG4gKiBBdXRob3I6IE5haWVlbSBNYWhtdWQgU3VwdG9cclxuICogQXV0aG9yIFVSSTogaHR0cDovL25haWVlbS5tZS9cclxuICogUmVwb3NpdG9yeTogaHR0cDovL2dpdGh1Yi5jb20vbmFpZWVtL1xyXG4gKiBWZXJzaW9uOiAxLjIuNFxyXG4gKiBMaWNlbnNlOiBHUEwyIG9yIGxhdGVyXHJcbiAqIExpY2Vuc2UgVVJJOiBodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2dwbC0yLjAuaHRtbFxyXG4gKi9cclxuXHJcbiAndXNlIHN0cmljdCc7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFF1ZXJ5IGZvciBET00gZWxlbWVudC5Nb2RpZmllcyBhbmQgYmluZCBkYXRhIHdpdGggZG9tIGVsZW1lbnQuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGNsYXNzIHJlY3ljbGVEb20ge1xyXG4gICAgYWN0aW9uczogYW55O1xyXG4gICAgaWRlbnRpZmllcjogYW55O1xyXG4gICAgZXZlbnREYXRhOiBhbnk7XHJcbiAgICBjb25zdHJ1Y3Rvcihtb2RlbDogYW55KSB7XHJcbiAgICAgICAgdGhpcy5pZGVudGlmaWVyID0gbW9kZWw7XHJcbiAgICB9XHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIERPTSBlbGVtZW50IHJlY3ljbGluZyBmdW5jdGlvblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBleGVjdXRlKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIGJpbmRzIHZhbHVlIHdpdGggaW5wdXQgdHlwZSB3aXRoIGhhdmluZyBtb2RlbCBhdHRyaWJ1dGVcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgYmluZFZhbHVlKGV2ZW50RGF0YTphbnkpIHtcclxuICAgICAgICAvLy0tLS0tLS0tLS0tIGJpbmdkaW5nIHZhbHVlIGZvciBlZGl0ZWQgZGF0YSAtLS0tLS0tLS0tLS0vL1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmlkZW50aWZpZXIuZWRpdC5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaWRlbnRpZmllci5lZGl0W2luZGV4XS5pbnB1dC50eXBlID09ICd0ZXh0Jykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJpbmRFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW3N0LW1vZGVsPVwiJyArIHRoaXMuaWRlbnRpZmllci5lZGl0W2luZGV4XS5pbnB1dC5tb2RlbE5hbWUgKyAnXCJdJykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgICAgICAgIGxldCB2YWwgPSBldmVudERhdGFbdGhpcy5pZGVudGlmaWVyLmVkaXRbaW5kZXhdLmlucHV0Lm1vZGVsTmFtZV07XHJcbiAgICAgICAgICAgICAgICBiaW5kRWxlbS52YWx1ZSA9IHZhbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHQvY2xhc3MucmVjeWNsZURvbS50cyIsIi8qKlxyXG4gKiBQcm9qZWN0IE5hbWU6IFR5cGVzY3JpcHQgdG9kb1xyXG4gKiBEZXNjcmlwdGlvbjogRmlsZSB0byBhZGQgZXZlbnRsaXN0ZW5lciB0byBkb20gZWxlbWVudHNcclxuICogQXV0aG9yOiBOYWllZW0gTWFobXVkIFN1cHRvXHJcbiAqIEF1dGhvciBVUkk6IGh0dHA6Ly9uYWllZW0ubWUvXHJcbiAqIFJlcG9zaXRvcnk6IGh0dHA6Ly9naXRodWIuY29tL25haWVlbS9cclxuICogVmVyc2lvbjogMS4yLjRcclxuICogTGljZW5zZTogR1BMMiBvciBsYXRlclxyXG4gKiBMaWNlbnNlIFVSSTogaHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9ncGwtMi4wLmh0bWxcclxuICovXHJcblxyXG4vLy0tLS0tLS0tLS0tIEltcG9ydGluZyBkZXBlbmRlbmNpZXMgLS0tLS0tLS0tLS0tLy9cclxuaW1wb3J0IElzdHVkZW50IGZyb20gJy4vc3R1ZGVudCc7IC8vIHN0dWRlbnQgZW51bVxyXG5pbXBvcnQgU3R1ZGVudFNlcnZpY2UgZnJvbSAnLi9jbGFzcy5zdHVkZW50U2VydmljZSc7IC8vIGxpc3Qgb2YgaW5pdGlhbCBzdHVkZW50c1xyXG5pbXBvcnQge0RvbUFjdGlvbnNDb250cm9sbGVyTW9kdWxlfSBmcm9tICcuL2NsYXNzLmRvbUFjdGlvbkNvbnRyb2xsZXInO1xyXG4vLy0tLS0tLS0tLS0tIGRlY2xhcmluZyBjbGFzcyAtLS0tLS0tLS0tLS0vL1xyXG5leHBvcnQgIGNsYXNzIEFjdGlvbnMge1xyXG4gICAgcHJpdmF0ZSBzdHVkZW50U2VydmljZTpTdHVkZW50U2VydmljZTtcclxuICAgIHByaXZhdGUgc3R1ZGVudExpc3Q6SXN0dWRlbnRbXTtcclxuICAgIHByaXZhdGUgZG9tQWN0aW9uQ29udHJvbGxlcjpEb21BY3Rpb25zQ29udHJvbGxlck1vZHVsZTtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc3R1ZGVudFNlcnZpY2U9bmV3IFN0dWRlbnRTZXJ2aWNlKCk7XHJcbiAgICAgICAgdGhpcy5kb21BY3Rpb25Db250cm9sbGVyPW5ldyBEb21BY3Rpb25zQ29udHJvbGxlck1vZHVsZSgpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlRGF0YShkYXRhOmFueSk6dm9pZHtcclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIH1cclxuICAgIGFkZE5ldygpe1xyXG4gICAgICAgIGxldCBuZXdzdDpJc3R1ZGVudD1uZXcgSXN0dWRlbnQoMTAsJ3N1cHRvJywxNik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zdHVkZW50U2VydmljZS5hZGROZXdTdHVkZW50KG5ld3N0KTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0dWRlbnRTZXJ2aWNlLnN0dWRlbnRzKTtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICB0aGlzLmRvbUFjdGlvbkNvbnRyb2xsZXIucmVuZGVyU3R1ZGVudExpc3QodGhpcy5zdHVkZW50U2VydmljZS5zdHVkZW50cyk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0L2NsYXNzLmFjdGlvbnMudHMiLCIvKipcclxuICogUHJvamVjdCBOYW1lOiBUeXBlc2NyaXB0IHRvZG9cclxuICogRGVzY3JpcHRpb246IFN0dWRlbnQgc2VydmljZSB0byBpbnRlcmFjdCB3aXRoIGRhdGFcclxuICogQXV0aG9yOiBOYWllZW0gTWFobXVkIFN1cHRvXHJcbiAqIEF1dGhvciBVUkk6IGh0dHA6Ly9uYWllZW0ubWUvXHJcbiAqIFJlcG9zaXRvcnk6IGh0dHA6Ly9naXRodWIuY29tL25haWVlbS9cclxuICogVmVyc2lvbjogMS4yLjRcclxuICogTGljZW5zZTogR1BMMiBvciBsYXRlclxyXG4gKiBMaWNlbnNlIFVSSTogaHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9ncGwtMi4wLmh0bWxcclxuICovXHJcblxyXG4gLy8tLS0tLS0tLS0tLSBJbXBvcnRpbmcgZGVwZW5kZW5jaWVzIC0tLS0tLS0tLS0tLS8vXHJcbmltcG9ydCBJU3R1ZGVudCBmcm9tIFwiLi9zdHVkZW50XCI7IC8vIHN0dWRlbnRzIGJhY2tib25lXHJcbmltcG9ydCBzdHVkZW50TGlzdCBmcm9tICcuL3N0dWRlbnRMaXN0JzsgLy8gbGlzdCBvZiBpbml0aWFsIHN0dWRlbnRzXHJcblxyXG4vLy0tLS0tLS0tLS0tIERlY2xhcmluZyBjbGFzcyAtLS0tLS0tLS0tLS0vL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHVkZW50U2VydmljZXtcclxuICAgIHN0dWRlbnRzOmFueVtdO1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIG1haW4gbnVjbGV1cyBmdW5jdGlvbiBvZiB0aGUgY2xhc3NcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnN0dWRlbnRzPXN0dWRlbnRMaXN0O1xyXG4gICAgfVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyByZXR1cm4gYWxsIHN0dWRlbnRzIGxpc3RcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgZ2V0QWxsU3R1ZGVudHMoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdHVkZW50cztcclxuICAgIH1cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gYWRkaW5nIG5ldyBzdHVkZW50c1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBhZGROZXdTdHVkZW50KHN0OklTdHVkZW50KXtcclxuICAgICAgICB0aGlzLnN0dWRlbnRzLnB1c2goc3QpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgZWRpdFN0dWRlbnQoZGF0YTphbnkpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdC9jbGFzcy5zdHVkZW50U2VydmljZS50cyIsIi8qXG5GaWxlIE5hbWU6IFNjcmlwdC50c1xuRGVzY3JpcHRpb246IFRoaXMgaXMgdGhlIGZpbGUgZm9yIERPTSBhY3Rpb24gcHJvdmlkZXIuRnVuY3Rpb24gb2YgdGhpcyBmaWxlIHRha2VzIGNhcmVcbm9mIHRoZSBkb20gZWxlbWVudHMgYWN0aW9ucyBhbmQgcmVuZGVyIGRhdGEgYWNjb3JkaW5nIHRvIHRoYXRcbkF1dGhvcjogTmFpZWVtIE1haG11ZCBTdXB0b1xuVmVyc2lvbjogMS4xXG4qL1xuJ3VzZSBzdHJpY3QnO1xuXG4vLy0tLS0tLS0tLS0tIEltcG9ydGluZyBkZXBlbmRlbmNpZXMgLS0tLS0tLS0tLS0tLy9cbmltcG9ydCB7QWN0aW9uc30gZnJvbSBcIi4vY2xhc3MuYWN0aW9uc1wiO1xuaW1wb3J0IElTdHVkZW50IGZyb20gXCIuL3N0dWRlbnRcIjtcbmltcG9ydCB7IERvbUFjdGlvbkhhbmRsZXIgfSBmcm9tIFwiLi9jbGFzcy5kb21BY3Rpb25IYW5kbGVyXCI7XG5cbi8vLS0tLS0tLS0tLS0gRGVjbGFyaW5nIGNsYXNzIC0tLS0tLS0tLS0tLS8vXG5leHBvcnQgY2xhc3MgRG9tQWN0aW9uc0NvbnRyb2xsZXJNb2R1bGUge1xuICAgIC8vLS0tLS0tLS0tLS0gdmFyaWFibGUgZGVjbGFyYXRpb24gYmxvY2sgLS0tLS0tLS0tLS0tLy9cbiAgICBtb2RlbDogYW55ID0ge307XG4gICAgcmVuZGVyRXZudDphbnk7XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyBOdWNsZXVzIGZvIHRoZSBjbGFzc1xuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLm1vZGVsID0ge1xuICAgICAgICAgICAgZWRpdDogW3tcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiSURcIixcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsTmFtZTogJ2lkJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIk5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsTmFtZTogJ25hbWUnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdzYXZlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogJ3VwZGF0ZURhdGEnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8tLS0tLS0tLS0tLSBGdW5jaXRvbiBkZWNsYXJhdGlvbiBibG9jayAtLS0tLS0tLS0tLS0vL1xuXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gZXZlbnQgbGlzdGVuZXIgZm9yIGxpc3QgaXRlbXNcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBsaXN0RXZlbnRMaXN0ZW5lcigpIHtcbiAgICAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2I3N0TGlzdCB1bCBsaVwiKTtcbiAgICAgICAgbGV0IGRvbUFjdGlvbkhhbmRsZXI9bmV3IERvbUFjdGlvbkhhbmRsZXIgKHRoaXMubW9kZWwpO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZWxlbS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGxldCBldmVudERhdGEgPSBKU09OLnBhcnNlKGVsZW1baW5kZXhdLmdldEF0dHJpYnV0ZSgnc3QtZGF0YScpKTtcbiAgICAgICAgICAgIGVsZW1baW5kZXhdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGRvbUFjdGlvbkhhbmRsZXIucmVuZGVyRGF0YShldmVudERhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gY2xpY2sgZXZlbnQgbGlzdGVuZXIgZm9yIGVsZW1lbnRzIGhhdmluZyBzdC1jbGlja1xuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBjbGlja0V2ZW50c0xpc3RlbmVyKCkgeyAgICAgICAgICAgIFxuICAgICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbc3QtY2xpY2tdXCIpO1xuICAgICAgICBsZXQgbW9kZWwgPSB0aGlzLm1vZGVsOyAvLyBzdG9yaW5nIHJlZmVyZW5jZSBvZiBpbnB1dCBmaWVsZHMgY29uZmlndXJhdGlvblxuICAgICAgICBsZXQgZG9tQWN0aW9uSGFuZGxlcj1uZXcgRG9tQWN0aW9uSGFuZGxlciAodGhpcy5tb2RlbCk7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBlbGVtLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgbGV0IGFjdGlvbnNGbmMgPSBlbGVtW2luZGV4XS5nZXRBdHRyaWJ1dGUoJ3N0LWNsaWNrJyk7XG4gICAgICAgICAgICBlbGVtW2luZGV4XS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgZG9tQWN0aW9uSGFuZGxlci5leGVjdXRlRXZlbnQoYWN0aW9uc0ZuYyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlclN0dWRlbnRMaXN0KHN0dWRlbnRMaXN0OklTdHVkZW50W10pe1xuICAgICAgICBsZXQgbGlzdERvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdExpc3QnKTtcbiAgICAgICAgbGV0IHN0TGlzdERvbSA9IFwiPHVsPlwiO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc3R1ZGVudExpc3QubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBsZXQgZGF0YU9iaiA9IHRoaXMuY2xvbmVPYmplY3Qoc3R1ZGVudExpc3RbaW5kZXhdKTtcbiAgICAgICAgICAgIGRhdGFPYmouaW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgIGRhdGFPYmogPSBKU09OLnN0cmluZ2lmeShkYXRhT2JqKTtcbiAgICAgICAgICAgIHN0TGlzdERvbSArPSBcIjxsaSBzdC1kYXRhPSdcIiArIGRhdGFPYmogKyBcIic+aWQ6IFwiICtzdHVkZW50TGlzdFtpbmRleF0uaWQgKyBcIiBuYW1lOiBcIiArIHN0dWRlbnRMaXN0W2luZGV4XS5uYW1lICsgXCIgcm9sbDpcIiArIHN0dWRlbnRMaXN0W2luZGV4XS5yb2xsICsgXCI8L2xpPlwiO1xuICAgICAgICB9XG4gICAgICAgIHN0TGlzdERvbSArPSBcIjwvdWw+XCI7XG4gICAgICAgIGxpc3REb20uaW5uZXJIVE1MID0gc3RMaXN0RG9tO1xuICAgIH1cblxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyBkZWVwIGNsb25pbmcgb2JqZWN0XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIFxuICAgIGNsb25lT2JqZWN0KG9iajogYW55KSB7XG4gICAgICAgIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgICAgICAgIGxldCBjbG9uZWRBcnI6YW55W107XG4gICAgICAgICAgICBvYmouZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGNsb25lZEFyci5wdXNoKHRoaXMuY2xvbmVPYmplY3QoZWxlbWVudCkpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBjbG9uZWRBcnI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgY2xvbmVkT2JqOmFueT17fTtcbiAgICAgICAgICAgIGZvciAodmFyIHByb3AgaW4gb2JqKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICAgICAgICAgICAgICBjbG9uZWRPYmpbcHJvcF0gPSB0aGlzLmNsb25lT2JqZWN0KG9ialtwcm9wXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNsb25lZE9iajtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLy0tLS0tLS0tLS0tIEZ1bmN0aW9uIGRlY2xhcmF0aW9uIGJsb2NrIGVuZHMgLS0tLS0tLS0tLS0tLy9cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHQvY2xhc3MuZG9tQWN0aW9uQ29udHJvbGxlci50cyIsIi8qKlxyXG4gKiBQcm9qZWN0IE5hbWU6IFR5cGVzY3JpcHQgdG9kb1xyXG4gKiBEZXNjcmlwdGlvbjogVGhpcyBtb2R1bGUgcmVuZGVycyBkb21lIGVsZW1lbnQgb24gcmVxdWVzdCBmcm9tIGFjdGlvbiBjb250cm9sZXJcclxuICogQXV0aG9yOiBOYWllZW0gTWFobXVkIFN1cHRvXHJcbiAqIEF1dGhvciBVUkk6IGh0dHA6Ly9uYWllZW0ubWUvXHJcbiAqIFJlcG9zaXRvcnk6IGh0dHA6Ly9naXRodWIuY29tL25haWVlbS9cclxuICogVmVyc2lvbjogMS4yLjRcclxuICogTGljZW5zZTogR1BMMiBvciBsYXRlclxyXG4gKiBMaWNlbnNlIFVSSTogaHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9ncGwtMi4wLmh0bWxcclxuICovXHJcblxyXG4gLy8tLS0tLS0tLS0tLSBpbXBvcnRuZyBkZXBlbmRlbmNpZXMgLS0tLS0tLS0tLS0tLy9cclxuaW1wb3J0IHsgcmVjeWNsZURvbSB9IGZyb20gXCIuL2NsYXNzLnJlY3ljbGVEb21cIjtcclxuaW1wb3J0IHtBY3Rpb25zfSBmcm9tIFwiLi9jbGFzcy5hY3Rpb25zXCI7XHJcblxyXG4vLy0tLS0tLS0tLS0tIGRlY2xhcmluZyBjbGFzcyBmdW5jdGlvbnMgLS0tLS0tLS0tLS0tLy9cclxuZXhwb3J0IGNsYXNzIERvbUFjdGlvbkhhbmRsZXIge1xyXG4gICAgcHJpdmF0ZSBtb2RlbDphbnk7XHJcbiAgICBjb25zdHJ1Y3Rvcihtb2RlbDphbnkpIHtcclxuICAgICAgICB0aGlzLm1vZGVsPW1vZGVsOyAvLyBhcnJheSBvZiBkb20gZWxlbWVudCBvYmplY3QgdG8gYXBwbHkgYWN0aW9uc1xyXG4gICAgfVxyXG4gICAgcmVuZGVyRGF0YShldmVudERhdGE6YW55KXs7XHJcbiAgICAgICAgbGV0IGZvcm1Eb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1cIik7XHJcbiAgICAgICAgbGV0IHR4dCA9ICcnO1xyXG4gICAgICAgIGxldCBzdG9yZU1vZGVsczogYW55ID0gW107XHJcbiAgICAgICAgbGV0IGRhdGFPYmogPSBKU09OLnN0cmluZ2lmeShldmVudERhdGEpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLm1vZGVsLmVkaXQubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1vZGVsLmVkaXRbaW5kZXhdLmlucHV0LnR5cGUgPT0gJ3RleHQnKSB7XHJcbiAgICAgICAgICAgICAgICB0eHQgKz0gJzxsYWJlbCBmb3I9XCInICsgdGhpcy5tb2RlbC5lZGl0W2luZGV4XS5sYWJlbCArICdcIj4nICsgdGhpcy5tb2RlbC5lZGl0W2luZGV4XS5sYWJlbCArICc8L2xhYmVsPic7XHJcbiAgICAgICAgICAgICAgICB0eHQgKz0gJzxpbnB1dCB0eXBlPVwidGV4dFwiIHN0LW1vZGVsPScgKyB0aGlzLm1vZGVsLmVkaXRbaW5kZXhdLmlucHV0Lm1vZGVsTmFtZSArICcgbmFtZT1cIicgKyB0aGlzLm1vZGVsLmVkaXRbaW5kZXhdLmlucHV0Lm1vZGVsTmFtZSArICdcIj4nO1xyXG4gICAgICAgICAgICAgICAgc3RvcmVNb2RlbHMucHVzaCh0aGlzLm1vZGVsLmVkaXRbaW5kZXhdLmlucHV0Lm1vZGVsTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMubW9kZWwuZWRpdFtpbmRleF0uaW5wdXQudHlwZSA9PSAnYnV0dG9uJykge1xyXG4gICAgICAgICAgICAgICAgdHh0ICs9ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIic7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tb2RlbC5lZGl0W2luZGV4XS5pbnB1dC5hY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICB0eHQgKz0gJ3N0LWNsaWNrPVwiJyArIHRoaXMubW9kZWwuZWRpdFtpbmRleF0uaW5wdXQuYWN0aW9uICsgJ1wiJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHR4dCArPSBcIiBzdC1lbGVtZW50IHN0LWRhdGE9J1wiICsgZGF0YU9iaiArIFwiJz5cIiArIHRoaXMubW9kZWwuZWRpdFtpbmRleF0uaW5wdXQudmFsdWUgKyBcIjwvYnV0dG9uPlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9ybURvbS5pbm5lckhUTUwgPSB0eHQ7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogaW5pdGlhdGVkIG5ldyBjbGFzcyB3aXRoIGV2ZW50ZGF0YSBhbmQgYWxsIERPTSBhcnJheSBlbGVtZW50XHJcbiAgICAgICAgICogcmV0dXJuIHt9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbmV3IHJlY3ljbGVEb20odGhpcy5tb2RlbCkuYmluZFZhbHVlKGV2ZW50RGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhlY3V0ZUV2ZW50KGFjdGlvbk5hbWU6c3RyaW5nKXtcclxuICAgICAgICBsZXQgYWN0aW9ucz1uZXcgQWN0aW9ucygpO1xyXG4gICAgICAgIGFjdGlvbnNbYWN0aW9uTmFtZV0oKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHQvY2xhc3MuZG9tQWN0aW9uSGFuZGxlci50cyIsIi8qKlxyXG4gKiBQcm9qZWN0IE5hbWU6IFR5cGVzY3JpcHQgdG9kb1xyXG4gKiBEZXNjcmlwdGlvbjogRmlsZSBmb3IgRE9NIG1hbnVwdWxhdGlvbnMuXHJcbiAqIEF1dGhvcjogTmFpZWVtIE1haG11ZCBTdXB0b1xyXG4gKiBBdXRob3IgVVJJOiBodHRwOi8vbmFpZWVtLm1lL1xyXG4gKiBSZXBvc2l0b3J5OiBodHRwOi8vZ2l0aHViLmNvbS9uYWllZW0vXHJcbiAqIFZlcnNpb246IDEuMi40XHJcbiAqIExpY2Vuc2U6IEdQTDIgb3IgbGF0ZXJcclxuICogTGljZW5zZSBVUkk6IGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvZ3BsLTIuMC5odG1sXHJcbiAqL1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG4vLy0tLS0tLS0tLS0tIEltcG9ydGluZyBkZXBlbmRlbmNpZXMgLS0tLS0tLS0tLS0tLy9cclxuaW1wb3J0IElzdHVkZW50IGZyb20gXCIuL3N0dWRlbnRcIjtcclxuaW1wb3J0IFN0dWRlbnRTZXJ2aWNlIGZyb20gXCIuL2NsYXNzLnN0dWRlbnRTZXJ2aWNlXCI7XHJcbmltcG9ydCB7RG9tQWN0aW9uc0NvbnRyb2xsZXJNb2R1bGV9IGZyb20gJy4vY2xhc3MuZG9tQWN0aW9uQ29udHJvbGxlcic7XHJcblxyXG4vLy0tLS0tLS0tLS0tIERlY2xhcmluZyBjbGFzcyAtLS0tLS0tLS0tLS0vL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb290c3RyYXAge1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIG1haW4gdmFyaWFibGUgZGVjbGFyYXRpb24gYmxvY2tcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBwcml2YXRlIHN0dWRlbnRTZXJ2aWNlOlN0dWRlbnRTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBhY3Rpb25Db250cm9sbGVyOkRvbUFjdGlvbnNDb250cm9sbGVyTW9kdWxlO1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIG5ldWNsZXVzIG9mIHRoZSBjbGFzc1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5zdHVkZW50U2VydmljZT1uZXcgU3R1ZGVudFNlcnZpY2UoKTtcclxuICAgICAgICB0aGlzLmFjdGlvbkNvbnRyb2xsZXI9bmV3IERvbUFjdGlvbnNDb250cm9sbGVyTW9kdWxlKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJTdHVkZW50TGlzdCgpO1xyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0gZGVmaW5pbmcgY2xpY2tldmVudCAtLS0tLS0tLS0tLS0vL1xyXG4gICAgICAgIHRoaXMuYWN0aW9uQ29udHJvbGxlci5saXN0RXZlbnRMaXN0ZW5lcigpO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uQ29udHJvbGxlci5jbGlja0V2ZW50c0xpc3RlbmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLSBGdW5jdGlvbiBkZWNsYXJhdGlvbiBibG9jayAtLS0tLS0tLS0tLS0vL1xyXG5cclxuICAgIFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIHJlbmRlcmluZyBzdHVkZW50bGlzdCBpbiBkb20gZWxlbWVudFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIFxyXG4gICAgcmVuZGVyU3R1ZGVudExpc3QoKSB7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25Db250cm9sbGVyLnJlbmRlclN0dWRlbnRMaXN0KHRoaXMuZ2V0U3R1ZGVudExpc3QoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBmZXRjaGluZyBzdHVkZW50bGlzdFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBcclxuICAgIGdldFN0dWRlbnRMaXN0KCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3R1ZGVudFNlcnZpY2UuZ2V0QWxsU3R1ZGVudHMoKTtcclxuICAgIH1cclxuICAgIC8vLS0tLS0tLS0tLS0gRW5kIG9mIGZ1bmN0aW9uIGRlY2xhcmF0aW9uIGJsb2NrIC0tLS0tLS0tLS0tLS8vXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0L2NsYXNzLmFwcENvbnRyb2xsZXIudHMiXSwic291cmNlUm9vdCI6IiJ9