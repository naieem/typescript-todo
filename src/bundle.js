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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DomActionHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__class_recycleDom__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_actions__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_model__ = __webpack_require__(5);
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
    function DomActionHandler() {
        this.model = new __WEBPACK_IMPORTED_MODULE_2__class_model__["a" /* default */]().getAllModel(); // array of dom element object to apply actions
    }
    /**
     * Rendering form field for updating and inserting data
     * @param {}
     */
    DomActionHandler.prototype.renderData = function (eventData) {
        var formDom = document.getElementById("form");
        var txt = '';
        var storeModels = [];
        //----------- data to be passed in the dom ------------//
        var dataObj = JSON.stringify(eventData);
        for (var index = 0; index < this.model.edit.length; index++) {
            if (this.model.edit[index].input.type == 'text') {
                txt += '<label for="' + this.model.edit[index].label + '">' + this.model.edit[index].label + '</label>';
                if (!eventData) {
                    txt += '<input type="text" st-model=' + this.model.edit[index].input.modelName + ' name="' + this.model.edit[index].input.modelName + '">';
                }
                else {
                    txt += '<input type="text" st-index="' + eventData.index + '" st-model=' + this.model.edit[index].input.modelName + ' name="' + this.model.edit[index].input.modelName + '">';
                }
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
        if (eventData)
            new __WEBPACK_IMPORTED_MODULE_0__class_recycleDom__["a" /* recycleDom */]().bindValue(eventData);
    };
    /**
     * Rendering student list in the DOM element
     * @param {}
     */
    DomActionHandler.prototype.renderStudentList = function (studentList) {
        var listDom = document.getElementById('stList');
        var stListDom = "<ul>";
        for (var index = 0; index < studentList.length; index++) {
            var dataObj = this.cloneObject(studentList[index]);
            dataObj.index = index;
            dataObj = JSON.stringify(dataObj);
            stListDom += "<li st-data='" + dataObj + "'>index: " + index + " name: " + studentList[index].name + " roll:" + studentList[index].roll + "</li>";
        }
        stListDom += "</ul>";
        listDom.innerHTML = stListDom;
    };
    /**
     * Main function to execute all actions
     * that will be transferred to class.actions.ts module
     * @param {}
     */
    DomActionHandler.prototype.executeEvent = function (actionName) {
        var actions = new __WEBPACK_IMPORTED_MODULE_1__class_actions__["a" /* Actions */]();
        eval("actions." + actionName);
        // actions[actionName]();
    };
    /**
     * Getting value form DOM according to the st-model attribute
     * @param obj
     */
    DomActionHandler.prototype.getValueFromModel = function (models) {
        var result = [];
        for (var index = 0; index < models.length; index++) {
            var model_1 = models[index];
            var obj = {};
            var element = document.querySelector("[st-model='" + model_1 + "']");
            var modelName = element.getAttribute('st-model');
            var arrayIndex = void 0;
            if (element.hasAttribute('st-index')) {
                arrayIndex = element.getAttribute('st-index');
            }
            else {
                arrayIndex = "-1";
            }
            obj = {
                index: arrayIndex,
                name: modelName,
                value: element.value
            };
            result.push(obj);
        }
        return result;
    };
    // ===========================================
    // deep cloning object
    // ===========================================
    DomActionHandler.prototype.cloneObject = function (obj) {
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
    /**
     * Clearing form data after any action execution
     * @param {}
     */
    DomActionHandler.prototype.clearFormData = function () {
        var formDom = document.getElementById("form");
        formDom.innerHTML = "";
    };
    return DomActionHandler;
}());



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__class_studentService__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_domActionController__ = __webpack_require__(3);
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
    }
    //----------- Function declaration block ------------//
    // ======================================
    // rendering studentlist in dom element
    // ======================================
    Bootstrap.prototype.renderStudentList = function () {
        this.actionController.renderStudentList(this.getStudentList());
        //----------- defining clickevent for list elements ------------//
        this.actionController.listEventListener();
        //----------- clickevents for add new button ------------//
        this.actionController.clickEventsListener();
    };
    // ==============================
    // fetching studentlist
    // ==============================
    Bootstrap.prototype.getStudentList = function () {
        return this.studentService.getAllStudents();
    };
    /**
     * Clearing form data after any action execution
     * @param {}
     */
    Bootstrap.prototype.clearFormData = function () {
        this.actionController.clearFormData();
    };
    return Bootstrap;
}());
/* harmony default export */ __webpack_exports__["a"] = (Bootstrap);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__class_studentList__ = __webpack_require__(7);
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
        this.students = __WEBPACK_IMPORTED_MODULE_0__class_studentList__["a" /* default */];
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
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DomActionsControllerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__class_domActionHandler__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_recycleDom__ = __webpack_require__(4);
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
        this.DomActionHandler = new __WEBPACK_IMPORTED_MODULE_0__class_domActionHandler__["a" /* DomActionHandler */]();
        this.recycleDom = new __WEBPACK_IMPORTED_MODULE_1__class_recycleDom__["a" /* recycleDom */]();
    }
    //----------- call to hander to digest the dom and rearrange all ------------//
    DomActionsControllerModule.prototype.callHandlerToDigest = function () {
        this.recycleDom.applyDigestLoop();
    };
    // ====================================
    // event listener for list items
    // ====================================
    DomActionsControllerModule.prototype.listEventListener = function () {
        var elem = document.querySelectorAll("div#stList ul li");
        var domActionHandler = new __WEBPACK_IMPORTED_MODULE_0__class_domActionHandler__["a" /* DomActionHandler */]();
        var recycleDom = this.recycleDom;
        var _loop_1 = function (index) {
            var eventData = JSON.parse(elem[index].getAttribute('st-data'));
            elem[index].addEventListener('click', function () {
                domActionHandler.renderData(eventData);
                recycleDom.applyDigestLoop();
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
        var domActionHandler = new __WEBPACK_IMPORTED_MODULE_0__class_domActionHandler__["a" /* DomActionHandler */]();
        var _loop_2 = function (index) {
            elem[index].setAttribute('has-event', 'true');
            var actionsFnc = elem[index].getAttribute('st-click');
            elem[index].addEventListener('click', function (e) {
                domActionHandler.executeEvent(actionsFnc);
            });
        };
        for (var index = 0; index < elem.length; index++) {
            _loop_2(index);
        }
    };
    /**
     * Rendering student list in the DOM element
     * @param {}
     */
    DomActionsControllerModule.prototype.renderStudentList = function (studentList) {
        this.DomActionHandler.renderStudentList(studentList);
    };
    /**
     * Getting value form DOM according to the st-model attribute
     * @param obj
     */
    DomActionsControllerModule.prototype.getValueFromModel = function (models) {
        return this.DomActionHandler.getValueFromModel(models);
    };
    /**
    * Clearing form data after any action execution
    * @param {}
    */
    DomActionsControllerModule.prototype.clearFormData = function () {
        this.DomActionHandler.clearFormData();
    };
    return DomActionsControllerModule;
}());



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return recycleDom; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__class_model__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_domActionHandler__ = __webpack_require__(0);
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
    function recycleDom() {
        this.identifier = new __WEBPACK_IMPORTED_MODULE_0__class_model__["a" /* default */]().getAllModel(); // array of dom element object to apply actions
    }
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
    /**
     * Executing digest action to lopp through the whole DOM and apply changes
     * @param {}
     */
    recycleDom.prototype.applyDigestLoop = function () {
        var element = document.querySelectorAll("[st-click]");
        var domActionHandler = new __WEBPACK_IMPORTED_MODULE_1__class_domActionHandler__["a" /* DomActionHandler */]();
        var _loop_1 = function (index) {
            element[index].removeEventListener('click', function () { });
            var actionsFnc = element[index].getAttribute('st-click');
            var hasEventListener = element[index].getAttribute('has-event');
            if (!hasEventListener) {
                element[index].setAttribute('has-event', 'true');
                element[index].addEventListener('click', function (e) {
                    domActionHandler.executeEvent(actionsFnc);
                });
            }
        };
        for (var index = 0; index < element.length; index++) {
            _loop_1(index);
        }
        var elem = document.querySelectorAll("input[type=text]");
        for (var index = 0; index < elem.length; index++) {
            var element_1 = elem[index];
            element_1.addEventListener('change', function (e) {
                var el = e.target;
            });
        }
    };
    return recycleDom;
}());



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Project Name: Typescript todo
 * Description: This file returns inpu type models
 * Author: Naieem Mahmud Supto
 * Author URI: http://naieem.me/
 * Repository: http://github.com/naieem/
 * Version: 1.2.4
 * License: GPL2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 */
var Model = /** @class */ (function () {
    function Model() {
        this.model = {
            edit: [{
                    label: "ROLL",
                    input: {
                        type: 'text',
                        modelName: 'roll'
                    }
                },
                {
                    label: "NAME",
                    input: {
                        type: 'text',
                        modelName: 'name'
                    }
                },
                {
                    input: {
                        type: 'button',
                        value: 'save',
                        action: "updateData('roll','name')"
                    }
                }
            ]
        };
    }
    Model.prototype.getAllModel = function () {
        return this.model;
    };
    return Model;
}());
/* harmony default export */ __webpack_exports__["a"] = (Model);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__class_class_appController__ = __webpack_require__(1);
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
        new __WEBPACK_IMPORTED_MODULE_0__class_class_appController__["a" /* default */]();
    }
    return nuCleus;
}());
new nuCleus();


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__class_student__ = __webpack_require__(8);
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
    new __WEBPACK_IMPORTED_MODULE_0__class_student__["a" /* default */]('naieem1', 101),
    new __WEBPACK_IMPORTED_MODULE_0__class_student__["a" /* default */]('naieem2', 102),
    new __WEBPACK_IMPORTED_MODULE_0__class_student__["a" /* default */]('naieem3', 103),
    new __WEBPACK_IMPORTED_MODULE_0__class_student__["a" /* default */]('naieem4', 104),
    new __WEBPACK_IMPORTED_MODULE_0__class_student__["a" /* default */]('naieem5', 105)
];
/* harmony default export */ __webpack_exports__["a"] = (students);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ================================
// declaring student skull
// ===============================
var Student = /** @class */ (function () {
    function Student(name, roll) {
        this.name = name;
        this.roll = roll;
    }
    return Student;
}());
/* harmony default export */ __webpack_exports__["a"] = (Student);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Actions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__class_studentService__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_domActionController__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_domActionHandler__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__class_appController__ = __webpack_require__(1);
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
 // list of initial students



//----------- declaring class ------------//
var Actions = /** @class */ (function () {
    //----------- functions of the class ------------//
    function Actions() {
        this.appController = new __WEBPACK_IMPORTED_MODULE_3__class_appController__["a" /* default */]();
        this.studentService = new __WEBPACK_IMPORTED_MODULE_0__class_studentService__["a" /* default */]();
        this.domActionController = new __WEBPACK_IMPORTED_MODULE_1__class_domActionController__["a" /* DomActionsControllerModule */]();
        this.domactionActionhandler = new __WEBPACK_IMPORTED_MODULE_2__class_domActionHandler__["a" /* DomActionHandler */]();
    }
    /**
     * This function is used for multiple purpose
     * 1.If it is a update call then update will be executed
     * 2.If it is an insert call then an insert will be executed
     */
    Actions.prototype.updateData = function () {
        var upsertData = this.domActionController.getValueFromModel(arguments);
        var obj = {};
        for (var i = 0; i < upsertData.length; i++) {
            //----------- checking if it is an insert call ------------//
            if (upsertData[i].index == '-1') {
                obj = this.constructObject(upsertData);
                this.studentService.students.push(obj);
                break;
            }
            else if (this.studentService.students[upsertData[i].index][upsertData[i].name] != upsertData[i].value) {
                this.studentService.students[upsertData[i].index][upsertData[i].name] = upsertData[i].value;
            }
        }
        //----------- rendering list once again ------------//
        this.appController.renderStudentList();
        //----------- clearing the form after function is finished execution ------------//
        this.appController.clearFormData();
    };
    /**
     * function is called when add new button is called
     * @param {}
     */
    Actions.prototype.addNew = function () {
        this.domactionActionhandler.renderData();
        //----------- digesting the dom ------------//
        this.domActionController.callHandlerToDigest();
    };
    // ===================================================
    // Constructing dom object to insert new student data
    // ===================================================
    Actions.prototype.constructObject = function (arr) {
        var result = {};
        for (var index = 0; index < arr.length; index++) {
            result[arr[index].name] = arr[index].value;
        }
        return result;
    };
    return Actions;
}());



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTFlMzcwYjRkZjRmZTcyYzhiMTYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdC9jbGFzcy9jbGFzcy5kb21BY3Rpb25IYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHQvY2xhc3MvY2xhc3MuYXBwQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0L2NsYXNzL2NsYXNzLnN0dWRlbnRTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHQvY2xhc3MvY2xhc3MuZG9tQWN0aW9uQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0L2NsYXNzL2NsYXNzLnJlY3ljbGVEb20udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdC9jbGFzcy9jbGFzcy5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0L21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdC9jbGFzcy9jbGFzcy5zdHVkZW50TGlzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0L2NsYXNzL2NsYXNzLnN0dWRlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdC9jbGFzcy9jbGFzcy5hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFB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QW1CLEVBQUUsQ0FBQztJQUNuRCxDQUFDO0lBRUQsc0RBQXNEO0lBQ3RELHFEQUFxRDtJQUNyRCxzREFBc0Q7SUFDdEQsaUNBQWUsR0FBZixVQUFnQixHQUFTO1FBQ3JCLElBQUksTUFBTSxHQUFLLEVBQUUsQ0FBQztRQUNsQixHQUFHLENBQUMsQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQztZQUM5QyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDN0MsQ0FBQztRQUNELE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGUxZTM3MGI0ZGY0ZmU3MmM4YjE2IiwiLyoqXHJcbiAqIFByb2plY3QgTmFtZTogVHlwZXNjcmlwdCB0b2RvXHJcbiAqIERlc2NyaXB0aW9uOiBUaGlzIG1vZHVsZSByZW5kZXJzIGRvbWUgZWxlbWVudCBvbiByZXF1ZXN0IGZyb20gYWN0aW9uIGNvbnRyb2xlclxyXG4gKiBBdXRob3I6IE5haWVlbSBNYWhtdWQgU3VwdG9cclxuICogQXV0aG9yIFVSSTogaHR0cDovL25haWVlbS5tZS9cclxuICogUmVwb3NpdG9yeTogaHR0cDovL2dpdGh1Yi5jb20vbmFpZWVtL1xyXG4gKiBWZXJzaW9uOiAxLjIuNFxyXG4gKiBMaWNlbnNlOiBHUEwyIG9yIGxhdGVyXHJcbiAqIExpY2Vuc2UgVVJJOiBodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2dwbC0yLjAuaHRtbFxyXG4gKi9cclxuXHJcbiAvLy0tLS0tLS0tLS0tIGltcG9ydG5nIGRlcGVuZGVuY2llcyAtLS0tLS0tLS0tLS0vL1xyXG5pbXBvcnQgeyByZWN5Y2xlRG9tIH0gZnJvbSBcIi4vY2xhc3MucmVjeWNsZURvbVwiO1xyXG5pbXBvcnQge0FjdGlvbnN9IGZyb20gXCIuL2NsYXNzLmFjdGlvbnNcIjtcclxuaW1wb3J0IElTdHVkZW50IGZyb20gXCIuL2NsYXNzLnN0dWRlbnRcIjtcclxuaW1wb3J0IG1vZGVsIGZyb20gXCIuL2NsYXNzLm1vZGVsXCI7XHJcblxyXG5cclxuLy8tLS0tLS0tLS0tLSBkZWNsYXJpbmcgY2xhc3MgZnVuY3Rpb25zIC0tLS0tLS0tLS0tLS8vXHJcbmV4cG9ydCBjbGFzcyBEb21BY3Rpb25IYW5kbGVyIHtcclxuICAgIHByaXZhdGUgbW9kZWw6YW55O1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlbD1uZXcgbW9kZWwoKS5nZXRBbGxNb2RlbCgpOyAvLyBhcnJheSBvZiBkb20gZWxlbWVudCBvYmplY3QgdG8gYXBwbHkgYWN0aW9uc1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVuZGVyaW5nIGZvcm0gZmllbGQgZm9yIHVwZGF0aW5nIGFuZCBpbnNlcnRpbmcgZGF0YVxyXG4gICAgICogQHBhcmFtIHt9XHJcbiAgICAgKi9cclxuICAgIHJlbmRlckRhdGEoZXZlbnREYXRhPzphbnkpe1xyXG4gICAgICAgIGxldCBmb3JtRG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtXCIpO1xyXG4gICAgICAgIGxldCB0eHQgPSAnJztcclxuICAgICAgICBsZXQgc3RvcmVNb2RlbHM6IGFueSA9IFtdO1xyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0gZGF0YSB0byBiZSBwYXNzZWQgaW4gdGhlIGRvbSAtLS0tLS0tLS0tLS0vL1xyXG4gICAgICAgIGxldCBkYXRhT2JqID0gSlNPTi5zdHJpbmdpZnkoZXZlbnREYXRhKTtcclxuICAgICAgICBcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5tb2RlbC5lZGl0Lmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tb2RlbC5lZGl0W2luZGV4XS5pbnB1dC50eXBlID09ICd0ZXh0Jykge1xyXG4gICAgICAgICAgICAgICAgdHh0ICs9ICc8bGFiZWwgZm9yPVwiJyArIHRoaXMubW9kZWwuZWRpdFtpbmRleF0ubGFiZWwgKyAnXCI+JyArIHRoaXMubW9kZWwuZWRpdFtpbmRleF0ubGFiZWwgKyAnPC9sYWJlbD4nO1xyXG4gICAgICAgICAgICAgICAgaWYoIWV2ZW50RGF0YSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdHh0ICs9ICc8aW5wdXQgdHlwZT1cInRleHRcIiBzdC1tb2RlbD0nICsgdGhpcy5tb2RlbC5lZGl0W2luZGV4XS5pbnB1dC5tb2RlbE5hbWUgKyAnIG5hbWU9XCInICsgdGhpcy5tb2RlbC5lZGl0W2luZGV4XS5pbnB1dC5tb2RlbE5hbWUgKyAnXCI+JztcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHR4dCArPSAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgc3QtaW5kZXg9XCInK2V2ZW50RGF0YS5pbmRleCsnXCIgc3QtbW9kZWw9JyArIHRoaXMubW9kZWwuZWRpdFtpbmRleF0uaW5wdXQubW9kZWxOYW1lICsgJyBuYW1lPVwiJyArIHRoaXMubW9kZWwuZWRpdFtpbmRleF0uaW5wdXQubW9kZWxOYW1lICsgJ1wiPic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzdG9yZU1vZGVscy5wdXNoKHRoaXMubW9kZWwuZWRpdFtpbmRleF0uaW5wdXQubW9kZWxOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5tb2RlbC5lZGl0W2luZGV4XS5pbnB1dC50eXBlID09ICdidXR0b24nKSB7XHJcbiAgICAgICAgICAgICAgICB0eHQgKz0gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiJztcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1vZGVsLmVkaXRbaW5kZXhdLmlucHV0LmFjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHR4dCArPSAnc3QtY2xpY2s9XCInICsgdGhpcy5tb2RlbC5lZGl0W2luZGV4XS5pbnB1dC5hY3Rpb24gKyAnXCInO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdHh0ICs9IFwiIHN0LWVsZW1lbnQgc3QtZGF0YT0nXCIgKyBkYXRhT2JqICsgXCInPlwiICsgdGhpcy5tb2RlbC5lZGl0W2luZGV4XS5pbnB1dC52YWx1ZSArIFwiPC9idXR0b24+XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBmb3JtRG9tLmlubmVySFRNTCA9IHR4dDtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBpbml0aWF0ZWQgbmV3IGNsYXNzIHdpdGggZXZlbnRkYXRhIGFuZCBhbGwgRE9NIGFycmF5IGVsZW1lbnRcclxuICAgICAgICAgKiByZXR1cm4ge31cclxuICAgICAgICAgKi9cclxuICAgICAgICBpZihldmVudERhdGEpXHJcbiAgICAgICAgbmV3IHJlY3ljbGVEb20oKS5iaW5kVmFsdWUoZXZlbnREYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbmRlcmluZyBzdHVkZW50IGxpc3QgaW4gdGhlIERPTSBlbGVtZW50XHJcbiAgICAgKiBAcGFyYW0ge31cclxuICAgICAqL1xyXG4gICAgcmVuZGVyU3R1ZGVudExpc3Qoc3R1ZGVudExpc3Q6SVN0dWRlbnRbXSl7XHJcbiAgICAgICAgbGV0IGxpc3REb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RMaXN0Jyk7XHJcbiAgICAgICAgbGV0IHN0TGlzdERvbSA9IFwiPHVsPlwiO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzdHVkZW50TGlzdC5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0IGRhdGFPYmogPSB0aGlzLmNsb25lT2JqZWN0KHN0dWRlbnRMaXN0W2luZGV4XSk7XHJcbiAgICAgICAgICAgIGRhdGFPYmouaW5kZXggPSBpbmRleDtcclxuICAgICAgICAgICAgZGF0YU9iaiA9IEpTT04uc3RyaW5naWZ5KGRhdGFPYmopO1xyXG4gICAgICAgICAgICBzdExpc3REb20gKz0gXCI8bGkgc3QtZGF0YT0nXCIgKyBkYXRhT2JqICsgXCInPmluZGV4OiBcIiAraW5kZXggKyBcIiBuYW1lOiBcIiArIHN0dWRlbnRMaXN0W2luZGV4XS5uYW1lICsgXCIgcm9sbDpcIiArIHN0dWRlbnRMaXN0W2luZGV4XS5yb2xsICsgXCI8L2xpPlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdExpc3REb20gKz0gXCI8L3VsPlwiO1xyXG4gICAgICAgIGxpc3REb20uaW5uZXJIVE1MID0gc3RMaXN0RG9tO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWFpbiBmdW5jdGlvbiB0byBleGVjdXRlIGFsbCBhY3Rpb25zIFxyXG4gICAgICogdGhhdCB3aWxsIGJlIHRyYW5zZmVycmVkIHRvIGNsYXNzLmFjdGlvbnMudHMgbW9kdWxlXHJcbiAgICAgKiBAcGFyYW0ge31cclxuICAgICAqL1xyXG4gICAgZXhlY3V0ZUV2ZW50KGFjdGlvbk5hbWU6c3RyaW5nKXtcclxuICAgICAgICBsZXQgYWN0aW9ucz1uZXcgQWN0aW9ucygpO1xyXG4gICAgICAgIGV2YWwoXCJhY3Rpb25zLlwiK2FjdGlvbk5hbWUpO1xyXG4gICAgICAgIC8vIGFjdGlvbnNbYWN0aW9uTmFtZV0oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHRpbmcgdmFsdWUgZm9ybSBET00gYWNjb3JkaW5nIHRvIHRoZSBzdC1tb2RlbCBhdHRyaWJ1dGVcclxuICAgICAqIEBwYXJhbSBvYmpcclxuICAgICAqL1xyXG4gICAgZ2V0VmFsdWVGcm9tTW9kZWwobW9kZWxzOmFueSl7XHJcbiAgICAgICAgbGV0IHJlc3VsdDphbnk9W107XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG1vZGVscy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0IG1vZGVsID0gbW9kZWxzW2luZGV4XTtcclxuICAgICAgICAgICAgbGV0IG9iajphbnk9e307XHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbc3QtbW9kZWw9J1wiK21vZGVsK1wiJ11cIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgICAgbGV0IG1vZGVsTmFtZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdzdC1tb2RlbCcpO1xyXG4gICAgICAgICAgICBsZXQgYXJyYXlJbmRleDpzdHJpbmc7XHJcbiAgICAgICAgICAgIGlmKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdzdC1pbmRleCcpKXtcclxuICAgICAgICAgICAgICAgIGFycmF5SW5kZXggPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnc3QtaW5kZXgnKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBhcnJheUluZGV4PVwiLTFcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvYmo9e1xyXG4gICAgICAgICAgICAgICAgaW5kZXg6YXJyYXlJbmRleCxcclxuICAgICAgICAgICAgICAgIG5hbWU6bW9kZWxOYW1lLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6ZWxlbWVudC52YWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXN1bHQucHVzaChvYmopO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIGRlZXAgY2xvbmluZyBvYmplY3RcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIFxyXG4gICAgY2xvbmVPYmplY3Qob2JqOiBhbnkpIHtcclxuICAgICAgICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogIT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9iajtcclxuICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xyXG4gICAgICAgICAgICBsZXQgY2xvbmVkQXJyOmFueVtdO1xyXG4gICAgICAgICAgICBvYmouZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgY2xvbmVkQXJyLnB1c2godGhpcy5jbG9uZU9iamVjdChlbGVtZW50KSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBjbG9uZWRBcnI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGNsb25lZE9iajphbnk9e307XHJcbiAgICAgICAgICAgIGZvciAodmFyIHByb3AgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KHByb3ApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvbmVkT2JqW3Byb3BdID0gdGhpcy5jbG9uZU9iamVjdChvYmpbcHJvcF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjbG9uZWRPYmo7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDbGVhcmluZyBmb3JtIGRhdGEgYWZ0ZXIgYW55IGFjdGlvbiBleGVjdXRpb25cclxuICAgICAqIEBwYXJhbSB7fVxyXG4gICAgICovXHJcbiAgICBjbGVhckZvcm1EYXRhKCl7XHJcbiAgICAgICAgbGV0IGZvcm1Eb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1cIik7XHJcbiAgICAgICAgZm9ybURvbS5pbm5lckhUTUw9XCJcIjtcclxuICAgIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0L2NsYXNzL2NsYXNzLmRvbUFjdGlvbkhhbmRsZXIudHMiLCIvKipcclxuICogUHJvamVjdCBOYW1lOiBUeXBlc2NyaXB0IHRvZG9cclxuICogRGVzY3JpcHRpb246IEZpbGUgZm9yIERPTSBtYW51cHVsYXRpb25zLlxyXG4gKiBBdXRob3I6IE5haWVlbSBNYWhtdWQgU3VwdG9cclxuICogQXV0aG9yIFVSSTogaHR0cDovL25haWVlbS5tZS9cclxuICogUmVwb3NpdG9yeTogaHR0cDovL2dpdGh1Yi5jb20vbmFpZWVtL1xyXG4gKiBWZXJzaW9uOiAxLjIuNFxyXG4gKiBMaWNlbnNlOiBHUEwyIG9yIGxhdGVyXHJcbiAqIExpY2Vuc2UgVVJJOiBodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2dwbC0yLjAuaHRtbFxyXG4gKi9cclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuLy8tLS0tLS0tLS0tLSBJbXBvcnRpbmcgZGVwZW5kZW5jaWVzIC0tLS0tLS0tLS0tLS8vXHJcbmltcG9ydCBJc3R1ZGVudCBmcm9tIFwiLi9jbGFzcy5zdHVkZW50XCI7XHJcbmltcG9ydCBTdHVkZW50U2VydmljZSBmcm9tIFwiLi9jbGFzcy5zdHVkZW50U2VydmljZVwiO1xyXG5pbXBvcnQge0RvbUFjdGlvbnNDb250cm9sbGVyTW9kdWxlfSBmcm9tICcuL2NsYXNzLmRvbUFjdGlvbkNvbnRyb2xsZXInO1xyXG5cclxuLy8tLS0tLS0tLS0tLSBEZWNsYXJpbmcgY2xhc3MgLS0tLS0tLS0tLS0tLy9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9vdHN0cmFwIHtcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBtYWluIHZhcmlhYmxlIGRlY2xhcmF0aW9uIGJsb2NrXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgcHJpdmF0ZSBzdHVkZW50U2VydmljZTpTdHVkZW50U2VydmljZTtcclxuICAgIHByaXZhdGUgYWN0aW9uQ29udHJvbGxlcjpEb21BY3Rpb25zQ29udHJvbGxlck1vZHVsZTtcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBuZXVjbGV1cyBvZiB0aGUgY2xhc3NcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc3R1ZGVudFNlcnZpY2U9bmV3IFN0dWRlbnRTZXJ2aWNlKCk7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25Db250cm9sbGVyPW5ldyBEb21BY3Rpb25zQ29udHJvbGxlck1vZHVsZSgpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyU3R1ZGVudExpc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tIEZ1bmN0aW9uIGRlY2xhcmF0aW9uIGJsb2NrIC0tLS0tLS0tLS0tLS8vXHJcblxyXG4gICAgXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gcmVuZGVyaW5nIHN0dWRlbnRsaXN0IGluIGRvbSBlbGVtZW50XHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgXHJcbiAgICByZW5kZXJTdHVkZW50TGlzdCgpIHtcclxuICAgICAgICB0aGlzLmFjdGlvbkNvbnRyb2xsZXIucmVuZGVyU3R1ZGVudExpc3QodGhpcy5nZXRTdHVkZW50TGlzdCgpKTtcclxuICAgICAgICAvLy0tLS0tLS0tLS0tIGRlZmluaW5nIGNsaWNrZXZlbnQgZm9yIGxpc3QgZWxlbWVudHMgLS0tLS0tLS0tLS0tLy9cclxuICAgICAgICB0aGlzLmFjdGlvbkNvbnRyb2xsZXIubGlzdEV2ZW50TGlzdGVuZXIoKTtcclxuICAgICAgICAvLy0tLS0tLS0tLS0tIGNsaWNrZXZlbnRzIGZvciBhZGQgbmV3IGJ1dHRvbiAtLS0tLS0tLS0tLS0vL1xyXG4gICAgICAgIHRoaXMuYWN0aW9uQ29udHJvbGxlci5jbGlja0V2ZW50c0xpc3RlbmVyKCk7XHJcbiAgICB9ICAgIFxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gZmV0Y2hpbmcgc3R1ZGVudGxpc3RcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgXHJcbiAgICBnZXRTdHVkZW50TGlzdCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0dWRlbnRTZXJ2aWNlLmdldEFsbFN0dWRlbnRzKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENsZWFyaW5nIGZvcm0gZGF0YSBhZnRlciBhbnkgYWN0aW9uIGV4ZWN1dGlvblxyXG4gICAgICogQHBhcmFtIHt9XHJcbiAgICAgKi9cclxuICAgIGNsZWFyRm9ybURhdGEoKXtcclxuICAgICAgICB0aGlzLmFjdGlvbkNvbnRyb2xsZXIuY2xlYXJGb3JtRGF0YSgpO1xyXG4gICAgfVxyXG4gICAgLy8tLS0tLS0tLS0tLSBFbmQgb2YgZnVuY3Rpb24gZGVjbGFyYXRpb24gYmxvY2sgLS0tLS0tLS0tLS0tLy9cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHQvY2xhc3MvY2xhc3MuYXBwQ29udHJvbGxlci50cyIsIi8qKlxyXG4gKiBQcm9qZWN0IE5hbWU6IFR5cGVzY3JpcHQgdG9kb1xyXG4gKiBEZXNjcmlwdGlvbjogU3R1ZGVudCBzZXJ2aWNlIHRvIGludGVyYWN0IHdpdGggZGF0YVxyXG4gKiBBdXRob3I6IE5haWVlbSBNYWhtdWQgU3VwdG9cclxuICogQXV0aG9yIFVSSTogaHR0cDovL25haWVlbS5tZS9cclxuICogUmVwb3NpdG9yeTogaHR0cDovL2dpdGh1Yi5jb20vbmFpZWVtL1xyXG4gKiBWZXJzaW9uOiAxLjIuNFxyXG4gKiBMaWNlbnNlOiBHUEwyIG9yIGxhdGVyXHJcbiAqIExpY2Vuc2UgVVJJOiBodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2dwbC0yLjAuaHRtbFxyXG4gKi9cclxuXHJcbiAvLy0tLS0tLS0tLS0tIEltcG9ydGluZyBkZXBlbmRlbmNpZXMgLS0tLS0tLS0tLS0tLy9cclxuaW1wb3J0IElTdHVkZW50IGZyb20gXCIuL2NsYXNzLnN0dWRlbnRcIjsgLy8gc3R1ZGVudHMgYmFja2JvbmVcclxuaW1wb3J0IHN0dWRlbnRMaXN0IGZyb20gJy4vY2xhc3Muc3R1ZGVudExpc3QnOyAvLyBsaXN0IG9mIGluaXRpYWwgc3R1ZGVudHNcclxuXHJcbi8vLS0tLS0tLS0tLS0gRGVjbGFyaW5nIGNsYXNzIC0tLS0tLS0tLS0tLS8vXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0dWRlbnRTZXJ2aWNle1xyXG4gICAgc3R1ZGVudHM6YW55W107XHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gbWFpbiBudWNsZXVzIGZ1bmN0aW9uIG9mIHRoZSBjbGFzc1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc3R1ZGVudHM9c3R1ZGVudExpc3Q7XHJcbiAgICB9XHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIHJldHVybiBhbGwgc3R1ZGVudHMgbGlzdFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBnZXRBbGxTdHVkZW50cygpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0dWRlbnRzO1xyXG4gICAgfVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBhZGRpbmcgbmV3IHN0dWRlbnRzXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGFkZE5ld1N0dWRlbnQoc3Q6SVN0dWRlbnQpe1xyXG4gICAgICAgIHRoaXMuc3R1ZGVudHMucHVzaChzdCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBlZGl0U3R1ZGVudChkYXRhOmFueSl7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0L2NsYXNzL2NsYXNzLnN0dWRlbnRTZXJ2aWNlLnRzIiwiLypcbkZpbGUgTmFtZTogU2NyaXB0LnRzXG5EZXNjcmlwdGlvbjogVGhpcyBpcyB0aGUgZmlsZSBmb3IgRE9NIGFjdGlvbiBwcm92aWRlci5GdW5jdGlvbiBvZiB0aGlzIGZpbGUgdGFrZXMgY2FyZVxub2YgdGhlIGRvbSBlbGVtZW50cyBhY3Rpb25zIGFuZCByZW5kZXIgZGF0YSBhY2NvcmRpbmcgdG8gdGhhdFxuQXV0aG9yOiBOYWllZW0gTWFobXVkIFN1cHRvXG5WZXJzaW9uOiAxLjFcbiovXG4ndXNlIHN0cmljdCc7XG5cbi8vLS0tLS0tLS0tLS0gSW1wb3J0aW5nIGRlcGVuZGVuY2llcyAtLS0tLS0tLS0tLS0vL1xuaW1wb3J0IElTdHVkZW50IGZyb20gXCIuL2NsYXNzLnN0dWRlbnRcIjtcbmltcG9ydCB7IERvbUFjdGlvbkhhbmRsZXIgfSBmcm9tIFwiLi9jbGFzcy5kb21BY3Rpb25IYW5kbGVyXCI7XG5pbXBvcnQgeyByZWN5Y2xlRG9tIH0gZnJvbSBcIi4vY2xhc3MucmVjeWNsZURvbVwiO1xuLy8tLS0tLS0tLS0tLSBEZWNsYXJpbmcgY2xhc3MgLS0tLS0tLS0tLS0tLy9cbmV4cG9ydCBjbGFzcyBEb21BY3Rpb25zQ29udHJvbGxlck1vZHVsZSB7XG4gICAgLy8tLS0tLS0tLS0tLSB2YXJpYWJsZSBkZWNsYXJhdGlvbiBibG9jayAtLS0tLS0tLS0tLS0vL1xuXG4gICAgcHJpdmF0ZSBEb21BY3Rpb25IYW5kbGVyOkRvbUFjdGlvbkhhbmRsZXI7XG4gICAgcHJpdmF0ZSByZWN5Y2xlRG9tOnJlY3ljbGVEb207XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyBOdWNsZXVzIGZvIHRoZSBjbGFzc1xuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuRG9tQWN0aW9uSGFuZGxlcj1uZXcgRG9tQWN0aW9uSGFuZGxlcigpO1xuICAgICAgICB0aGlzLnJlY3ljbGVEb209bmV3IHJlY3ljbGVEb20oKTtcbiAgICB9XG5cbiAgICAvLy0tLS0tLS0tLS0tIGNhbGwgdG8gaGFuZGVyIHRvIGRpZ2VzdCB0aGUgZG9tIGFuZCByZWFycmFuZ2UgYWxsIC0tLS0tLS0tLS0tLS8vXG4gICAgY2FsbEhhbmRsZXJUb0RpZ2VzdCgpe1xuICAgICAgICB0aGlzLnJlY3ljbGVEb20uYXBwbHlEaWdlc3RMb29wKCk7XG4gICAgfVxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIGV2ZW50IGxpc3RlbmVyIGZvciBsaXN0IGl0ZW1zXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgbGlzdEV2ZW50TGlzdGVuZXIoKSB7XG4gICAgICAgIGxldCBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImRpdiNzdExpc3QgdWwgbGlcIik7XG4gICAgICAgIGxldCBkb21BY3Rpb25IYW5kbGVyPW5ldyBEb21BY3Rpb25IYW5kbGVyICgpO1xuICAgICAgICBsZXQgcmVjeWNsZURvbT10aGlzLnJlY3ljbGVEb207XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBlbGVtLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgbGV0IGV2ZW50RGF0YSA9IEpTT04ucGFyc2UoZWxlbVtpbmRleF0uZ2V0QXR0cmlidXRlKCdzdC1kYXRhJykpO1xuICAgICAgICAgICAgZWxlbVtpbmRleF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZG9tQWN0aW9uSGFuZGxlci5yZW5kZXJEYXRhKGV2ZW50RGF0YSk7XG4gICAgICAgICAgICAgICAgcmVjeWNsZURvbS5hcHBseURpZ2VzdExvb3AoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIGNsaWNrIGV2ZW50IGxpc3RlbmVyIGZvciBlbGVtZW50cyBoYXZpbmcgc3QtY2xpY2tcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgY2xpY2tFdmVudHNMaXN0ZW5lcigpIHsgICAgICAgICAgICBcbiAgICAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW3N0LWNsaWNrXVwiKTtcbiAgICAgICAgbGV0IGRvbUFjdGlvbkhhbmRsZXI9bmV3IERvbUFjdGlvbkhhbmRsZXIgKCk7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBlbGVtLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgZWxlbVtpbmRleF0uc2V0QXR0cmlidXRlKCdoYXMtZXZlbnQnLCd0cnVlJyk7XG4gICAgICAgICAgICBsZXQgYWN0aW9uc0ZuYyA9IGVsZW1baW5kZXhdLmdldEF0dHJpYnV0ZSgnc3QtY2xpY2snKTtcbiAgICAgICAgICAgIGVsZW1baW5kZXhdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHsgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBkb21BY3Rpb25IYW5kbGVyLmV4ZWN1dGVFdmVudChhY3Rpb25zRm5jKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbmRlcmluZyBzdHVkZW50IGxpc3QgaW4gdGhlIERPTSBlbGVtZW50XG4gICAgICogQHBhcmFtIHt9XG4gICAgICovXG4gICAgcmVuZGVyU3R1ZGVudExpc3Qoc3R1ZGVudExpc3Q6SVN0dWRlbnRbXSl7XG4gICAgICAgIHRoaXMuRG9tQWN0aW9uSGFuZGxlci5yZW5kZXJTdHVkZW50TGlzdChzdHVkZW50TGlzdCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0dGluZyB2YWx1ZSBmb3JtIERPTSBhY2NvcmRpbmcgdG8gdGhlIHN0LW1vZGVsIGF0dHJpYnV0ZVxuICAgICAqIEBwYXJhbSBvYmpcbiAgICAgKi9cbiAgICBnZXRWYWx1ZUZyb21Nb2RlbChtb2RlbHM6YW55KXtcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9tQWN0aW9uSGFuZGxlci5nZXRWYWx1ZUZyb21Nb2RlbChtb2RlbHMpO1xuICAgIH1cbiAgICAgLyoqXG4gICAgICogQ2xlYXJpbmcgZm9ybSBkYXRhIGFmdGVyIGFueSBhY3Rpb24gZXhlY3V0aW9uXG4gICAgICogQHBhcmFtIHt9XG4gICAgICovXG4gICAgY2xlYXJGb3JtRGF0YSgpe1xuICAgICAgICB0aGlzLkRvbUFjdGlvbkhhbmRsZXIuY2xlYXJGb3JtRGF0YSgpO1xuICAgIH1cbiAgICAvLy0tLS0tLS0tLS0tIEZ1bmN0aW9uIGRlY2xhcmF0aW9uIGJsb2NrIGVuZHMgLS0tLS0tLS0tLS0tLy9cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHQvY2xhc3MvY2xhc3MuZG9tQWN0aW9uQ29udHJvbGxlci50cyIsIi8qKlxyXG4gKiBQcm9qZWN0IE5hbWU6IFR5cGVzY3JpcHQgdG9kb1xyXG4gKiBEZXNjcmlwdGlvbjogRE9NIGRpZ2VzdCBjbGFzcy5cclxuICogQXV0aG9yOiBOYWllZW0gTWFobXVkIFN1cHRvXHJcbiAqIEF1dGhvciBVUkk6IGh0dHA6Ly9uYWllZW0ubWUvXHJcbiAqIFJlcG9zaXRvcnk6IGh0dHA6Ly9naXRodWIuY29tL25haWVlbS9cclxuICogVmVyc2lvbjogMS4yLjRcclxuICogTGljZW5zZTogR1BMMiBvciBsYXRlclxyXG4gKiBMaWNlbnNlIFVSSTogaHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9ncGwtMi4wLmh0bWxcclxuICovXHJcblxyXG4gJ3VzZSBzdHJpY3QnO1xyXG5cclxuIGltcG9ydCBtb2RlbCBmcm9tIFwiLi9jbGFzcy5tb2RlbFwiO1xyXG4gaW1wb3J0IHsgRG9tQWN0aW9uSGFuZGxlciB9IGZyb20gXCIuL2NsYXNzLmRvbUFjdGlvbkhhbmRsZXJcIjtcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBRdWVyeSBmb3IgRE9NIGVsZW1lbnQuTW9kaWZpZXMgYW5kIGJpbmQgZGF0YSB3aXRoIGRvbSBlbGVtZW50LlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBjbGFzcyByZWN5Y2xlRG9tIHtcclxuICAgIGlkZW50aWZpZXI6IGFueTtcclxuICAgIERvbUFjdGlvbkhhbmRsZXI6RG9tQWN0aW9uSGFuZGxlcjtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaWRlbnRpZmllcj1uZXcgbW9kZWwoKS5nZXRBbGxNb2RlbCgpOyAvLyBhcnJheSBvZiBkb20gZWxlbWVudCBvYmplY3QgdG8gYXBwbHkgYWN0aW9uc1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gYmluZHMgdmFsdWUgd2l0aCBpbnB1dCB0eXBlIHdpdGggaGF2aW5nIG1vZGVsIGF0dHJpYnV0ZVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBiaW5kVmFsdWUoZXZlbnREYXRhOmFueSkge1xyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0gYmluZ2RpbmcgdmFsdWUgZm9yIGVkaXRlZCBkYXRhIC0tLS0tLS0tLS0tLS8vXHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuaWRlbnRpZmllci5lZGl0Lmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pZGVudGlmaWVyLmVkaXRbaW5kZXhdLmlucHV0LnR5cGUgPT0gJ3RleHQnKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYmluZEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbc3QtbW9kZWw9XCInICsgdGhpcy5pZGVudGlmaWVyLmVkaXRbaW5kZXhdLmlucHV0Lm1vZGVsTmFtZSArICdcIl0nKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbCA9IGV2ZW50RGF0YVt0aGlzLmlkZW50aWZpZXIuZWRpdFtpbmRleF0uaW5wdXQubW9kZWxOYW1lXTtcclxuICAgICAgICAgICAgICAgIGJpbmRFbGVtLnZhbHVlID0gdmFsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXhlY3V0aW5nIGRpZ2VzdCBhY3Rpb24gdG8gbG9wcCB0aHJvdWdoIHRoZSB3aG9sZSBET00gYW5kIGFwcGx5IGNoYW5nZXNcclxuICAgICAqIEBwYXJhbSB7fVxyXG4gICAgICovXHJcbiAgICBhcHBseURpZ2VzdExvb3AoKXtcclxuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbc3QtY2xpY2tdXCIpO1xyXG4gICAgICAgIGxldCBkb21BY3Rpb25IYW5kbGVyPW5ldyBEb21BY3Rpb25IYW5kbGVyICgpO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBlbGVtZW50Lmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBlbGVtZW50W2luZGV4XS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXt9KTtcclxuICAgICAgICAgICAgbGV0IGFjdGlvbnNGbmMgPSBlbGVtZW50W2luZGV4XS5nZXRBdHRyaWJ1dGUoJ3N0LWNsaWNrJyk7XHJcbiAgICAgICAgICAgIGxldCBoYXNFdmVudExpc3RlbmVyID0gZWxlbWVudFtpbmRleF0uZ2V0QXR0cmlidXRlKCdoYXMtZXZlbnQnKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKCFoYXNFdmVudExpc3RlbmVyKXtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRbaW5kZXhdLnNldEF0dHJpYnV0ZSgnaGFzLWV2ZW50JywndHJ1ZScpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudFtpbmRleF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbUFjdGlvbkhhbmRsZXIuZXhlY3V0ZUV2ZW50KGFjdGlvbnNGbmMpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0W3R5cGU9dGV4dF1cIik7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGVsZW0ubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID0gZWxlbVtpbmRleF0gYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWw9ZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pOyAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHQvY2xhc3MvY2xhc3MucmVjeWNsZURvbS50cyIsIi8qKlxyXG4gKiBQcm9qZWN0IE5hbWU6IFR5cGVzY3JpcHQgdG9kb1xyXG4gKiBEZXNjcmlwdGlvbjogVGhpcyBmaWxlIHJldHVybnMgaW5wdSB0eXBlIG1vZGVsc1xyXG4gKiBBdXRob3I6IE5haWVlbSBNYWhtdWQgU3VwdG9cclxuICogQXV0aG9yIFVSSTogaHR0cDovL25haWVlbS5tZS9cclxuICogUmVwb3NpdG9yeTogaHR0cDovL2dpdGh1Yi5jb20vbmFpZWVtL1xyXG4gKiBWZXJzaW9uOiAxLjIuNFxyXG4gKiBMaWNlbnNlOiBHUEwyIG9yIGxhdGVyXHJcbiAqIExpY2Vuc2UgVVJJOiBodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2dwbC0yLjAuaHRtbFxyXG4gKi9cclxuXHJcbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RlbCB7XHJcbiAgICAgcHJpdmF0ZSBtb2RlbDphbnk7XHJcbiAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlbCA9IHtcclxuICAgICAgICAgICAgZWRpdDogW3tcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJST0xMXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbE5hbWU6ICdyb2xsJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiTkFNRVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWxOYW1lOiAnbmFtZSdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdidXR0b24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ3NhdmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwidXBkYXRlRGF0YSgncm9sbCcsJ25hbWUnKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfTtcclxuICAgICB9XHJcbiAgICAgZ2V0QWxsTW9kZWwoKXtcclxuICAgICAgICAgcmV0dXJuIHRoaXMubW9kZWw7XHJcbiAgICAgfVxyXG4gfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHQvY2xhc3MvY2xhc3MubW9kZWwudHMiLCIgLyoqXHJcbiAqIFByb2plY3QgTmFtZTogVHlwZXNjcmlwdCB0b2RvXHJcbiAqIERlc2NyaXB0aW9uOiBUaGlzIGlzIGEgdHlwZXNjcmlwdCB0b2RvIGFwcGxpY2F0aW9ucyBtYWluIGZpbGVcclxuICogQXV0aG9yOiBOYWllZW0gTWFobXVkIFN1cHRvXHJcbiAqIEF1dGhvciBVUkk6IGh0dHA6Ly9uYWllZW0ubWUvXHJcbiAqIFJlcG9zaXRvcnk6IGh0dHA6Ly9naXRodWIuY29tL25haWVlbS9cclxuICogVmVyc2lvbjogMS4yLjRcclxuICogTGljZW5zZTogR1BMMiBvciBsYXRlclxyXG4gKiBMaWNlbnNlIFVSSTogaHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9ncGwtMi4wLmh0bWxcclxuICovXHJcblxyXG5pbXBvcnQgYm9vdHN0cmFwIGZyb20gXCIuL2NsYXNzL2NsYXNzLmFwcENvbnRyb2xsZXJcIjtcclxuY2xhc3MgbnVDbGV1cyB7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIG1haW4gbnVjbGV1cyBmdW5jdGlvbiBvZiB0aGUgY2xhc3NcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBuZXcgYm9vdHN0cmFwKCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5uZXcgbnVDbGV1cygpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0L21haW4udHMiLCIvKipcclxuICogUHJvamVjdCBOYW1lOiBUeXBlc2NyaXB0IHRvZG9cclxuICogRGVzY3JpcHRpb246IER1bW15IGRhdGEgdG8gdXNlIHdoaWxlIGluaXRpYWwgc3RhZ2VcclxuICogQXV0aG9yOiBOYWllZW0gTWFobXVkIFN1cHRvXHJcbiAqIEF1dGhvciBVUkk6IGh0dHA6Ly9uYWllZW0ubWUvXHJcbiAqIFJlcG9zaXRvcnk6IGh0dHA6Ly9naXRodWIuY29tL25haWVlbS9cclxuICogVmVyc2lvbjogMS4yLjRcclxuICogTGljZW5zZTogR1BMMiBvciBsYXRlclxyXG4gKiBMaWNlbnNlIFVSSTogaHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9ncGwtMi4wLmh0bWxcclxuICovXHJcblxyXG5pbXBvcnQgc3R1ZGVudCBmcm9tIFwiLi9jbGFzcy5zdHVkZW50XCI7XHJcbmxldCBzdHVkZW50cz1bXHJcbiAgICBuZXcgc3R1ZGVudCgnbmFpZWVtMScsMTAxKSxcclxuICAgIG5ldyBzdHVkZW50KCduYWllZW0yJywxMDIpLFxyXG4gICAgbmV3IHN0dWRlbnQoJ25haWVlbTMnLDEwMyksXHJcbiAgICBuZXcgc3R1ZGVudCgnbmFpZWVtNCcsMTA0KSxcclxuICAgIG5ldyBzdHVkZW50KCduYWllZW01JywxMDUpXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdHVkZW50cztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0L2NsYXNzL2NsYXNzLnN0dWRlbnRMaXN0LnRzIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gZGVjbGFyaW5nIHN0dWRlbnQgc2t1bGxcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5jbGFzcyBTdHVkZW50IHtcclxuICAgIG5hbWU6c3RyaW5nO1xyXG4gICAgcm9sbDpudW1iZXI7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOnN0cmluZyxyb2xsOm51bWJlcikge1xyXG4gICAgICAgIHRoaXMubmFtZT1uYW1lO1xyXG4gICAgICAgIHRoaXMucm9sbD1yb2xsO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFN0dWRlbnQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdC9jbGFzcy9jbGFzcy5zdHVkZW50LnRzIiwiLyoqXHJcbiAqIFByb2plY3QgTmFtZTogVHlwZXNjcmlwdCB0b2RvXHJcbiAqIERlc2NyaXB0aW9uOiBGaWxlIHRvIGFkZCBldmVudGxpc3RlbmVyIHRvIGRvbSBlbGVtZW50c1xyXG4gKiBBdXRob3I6IE5haWVlbSBNYWhtdWQgU3VwdG9cclxuICogQXV0aG9yIFVSSTogaHR0cDovL25haWVlbS5tZS9cclxuICogUmVwb3NpdG9yeTogaHR0cDovL2dpdGh1Yi5jb20vbmFpZWVtL1xyXG4gKiBWZXJzaW9uOiAxLjIuNFxyXG4gKiBMaWNlbnNlOiBHUEwyIG9yIGxhdGVyXHJcbiAqIExpY2Vuc2UgVVJJOiBodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2dwbC0yLjAuaHRtbFxyXG4gKi9cclxuXHJcbi8vLS0tLS0tLS0tLS0gSW1wb3J0aW5nIGRlcGVuZGVuY2llcyAtLS0tLS0tLS0tLS0vL1xyXG5pbXBvcnQgSXN0dWRlbnQgZnJvbSAnLi9jbGFzcy5zdHVkZW50JzsgLy8gc3R1ZGVudCBlbnVtXHJcbmltcG9ydCBTdHVkZW50U2VydmljZSBmcm9tICcuL2NsYXNzLnN0dWRlbnRTZXJ2aWNlJzsgLy8gbGlzdCBvZiBpbml0aWFsIHN0dWRlbnRzXHJcbmltcG9ydCB7RG9tQWN0aW9uc0NvbnRyb2xsZXJNb2R1bGV9IGZyb20gJy4vY2xhc3MuZG9tQWN0aW9uQ29udHJvbGxlcic7XHJcbmltcG9ydCB7IERvbUFjdGlvbkhhbmRsZXIgfSBmcm9tICcuL2NsYXNzLmRvbUFjdGlvbkhhbmRsZXInO1xyXG5cclxuaW1wb3J0IGFwcENvbnRyb2xsZXIgZnJvbSBcIi4vY2xhc3MuYXBwQ29udHJvbGxlclwiO1xyXG5cclxuLy8tLS0tLS0tLS0tLSBkZWNsYXJpbmcgY2xhc3MgLS0tLS0tLS0tLS0tLy9cclxuZXhwb3J0ICBjbGFzcyBBY3Rpb25zIHtcclxuICAgIC8vLS0tLS0tLS0tLS0gdmFyaWFibGUgZGVjbGFyYXRpb24gYmxvY2sgLS0tLS0tLS0tLS0tLy9cclxuICAgIHByaXZhdGUgc3R1ZGVudFNlcnZpY2U6U3R1ZGVudFNlcnZpY2U7XHJcbiAgICBwcml2YXRlIHN0dWRlbnRMaXN0OklzdHVkZW50W107XHJcbiAgICBwcml2YXRlIGRvbUFjdGlvbkNvbnRyb2xsZXI6RG9tQWN0aW9uc0NvbnRyb2xsZXJNb2R1bGU7XHJcbiAgICBwcml2YXRlIGRvbWFjdGlvbkFjdGlvbmhhbmRsZXI6RG9tQWN0aW9uSGFuZGxlcjtcclxuICAgIHByaXZhdGUgYXBwQ29udHJvbGxlcjphcHBDb250cm9sbGVyO1xyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0gZnVuY3Rpb25zIG9mIHRoZSBjbGFzcyAtLS0tLS0tLS0tLS0vL1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5hcHBDb250cm9sbGVyPW5ldyBhcHBDb250cm9sbGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdHVkZW50U2VydmljZT1uZXcgU3R1ZGVudFNlcnZpY2UoKTtcclxuICAgICAgICB0aGlzLmRvbUFjdGlvbkNvbnRyb2xsZXI9bmV3IERvbUFjdGlvbnNDb250cm9sbGVyTW9kdWxlKCk7XHJcbiAgICAgICAgdGhpcy5kb21hY3Rpb25BY3Rpb25oYW5kbGVyPW5ldyBEb21BY3Rpb25IYW5kbGVyKClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCBmb3IgbXVsdGlwbGUgcHVycG9zZVxyXG4gICAgICogMS5JZiBpdCBpcyBhIHVwZGF0ZSBjYWxsIHRoZW4gdXBkYXRlIHdpbGwgYmUgZXhlY3V0ZWRcclxuICAgICAqIDIuSWYgaXQgaXMgYW4gaW5zZXJ0IGNhbGwgdGhlbiBhbiBpbnNlcnQgd2lsbCBiZSBleGVjdXRlZFxyXG4gICAgICovXHJcbiAgICB1cGRhdGVEYXRhKCl7XHJcbiAgICAgICAgbGV0IHVwc2VydERhdGE9dGhpcy5kb21BY3Rpb25Db250cm9sbGVyLmdldFZhbHVlRnJvbU1vZGVsKGFyZ3VtZW50cyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IG9iajphbnk9e307XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1cHNlcnREYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0gY2hlY2tpbmcgaWYgaXQgaXMgYW4gaW5zZXJ0IGNhbGwgLS0tLS0tLS0tLS0tLy9cclxuICAgICAgICAgICAgaWYodXBzZXJ0RGF0YVtpXS5pbmRleCA9PSctMScpe1xyXG4gICAgICAgICAgICAgICAgb2JqPXRoaXMuY29uc3RydWN0T2JqZWN0KHVwc2VydERhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdHVkZW50U2VydmljZS5zdHVkZW50cy5wdXNoKG9iaik7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYodGhpcy5zdHVkZW50U2VydmljZS5zdHVkZW50c1t1cHNlcnREYXRhW2ldLmluZGV4XVt1cHNlcnREYXRhW2ldLm5hbWVdIT11cHNlcnREYXRhW2ldLnZhbHVlKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3R1ZGVudFNlcnZpY2Uuc3R1ZGVudHNbdXBzZXJ0RGF0YVtpXS5pbmRleF1bdXBzZXJ0RGF0YVtpXS5uYW1lXT11cHNlcnREYXRhW2ldLnZhbHVlO1xyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAvLy0tLS0tLS0tLS0tIHJlbmRlcmluZyBsaXN0IG9uY2UgYWdhaW4gLS0tLS0tLS0tLS0tLy9cclxuICAgICAgICB0aGlzLmFwcENvbnRyb2xsZXIucmVuZGVyU3R1ZGVudExpc3QoKTtcclxuICAgICAgICAvLy0tLS0tLS0tLS0tIGNsZWFyaW5nIHRoZSBmb3JtIGFmdGVyIGZ1bmN0aW9uIGlzIGZpbmlzaGVkIGV4ZWN1dGlvbiAtLS0tLS0tLS0tLS0vL1xyXG4gICAgICAgIHRoaXMuYXBwQ29udHJvbGxlci5jbGVhckZvcm1EYXRhKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBmdW5jdGlvbiBpcyBjYWxsZWQgd2hlbiBhZGQgbmV3IGJ1dHRvbiBpcyBjYWxsZWRcclxuICAgICAqIEBwYXJhbSB7fVxyXG4gICAgICovXHJcbiAgICBhZGROZXcoKXtcclxuICAgICAgICB0aGlzLmRvbWFjdGlvbkFjdGlvbmhhbmRsZXIucmVuZGVyRGF0YSgpO1xyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0gZGlnZXN0aW5nIHRoZSBkb20gLS0tLS0tLS0tLS0tLy9cclxuICAgICAgICB0aGlzLmRvbUFjdGlvbkNvbnRyb2xsZXIuY2FsbEhhbmRsZXJUb0RpZ2VzdCgpOyAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBDb25zdHJ1Y3RpbmcgZG9tIG9iamVjdCB0byBpbnNlcnQgbmV3IHN0dWRlbnQgZGF0YVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdHJ1Y3RPYmplY3QoYXJyOmFueVtdKXtcclxuICAgICAgICBsZXQgcmVzdWx0OmFueT17fTtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICByZXN1bHRbYXJyW2luZGV4XS5uYW1lXT1hcnJbaW5kZXhdLnZhbHVlOyAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdC9jbGFzcy9jbGFzcy5hY3Rpb25zLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==