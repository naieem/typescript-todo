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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__domActions__ = __webpack_require__(6);

var nuCleus = /** @class */ (function () {
    // ======================================
    // main nucleus function of the class
    // ======================================
    function nuCleus() {
        new __WEBPACK_IMPORTED_MODULE_0__domActions__["a" /* default */]().renderStudentList();
    }
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
/**
 * some dummy student data for using while
 * initialization of the application
 * returns {Student list}
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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__domActions__ = __webpack_require__(6);


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
        this.clickEventsListener();
    }
    // ====================================
    // event listener for list items
    // ====================================
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
    // ===================================================
    // execute function click event listener
    // ===================================================
    Dom.prototype.executeClickEvent = function (eventData, model) {
        debugger;
        var formDom = document.getElementById("form");
        var txt = '';
        var storeModels = [];
        var dataObj = JSON.stringify(eventData);
        for (var index = 0; index < model.edit.length; index++) {
            if (model.edit[index].input.type == 'text') {
                txt += '<label for="' + model.edit[index].label + '">' + model.edit[index].label + '</label>';
                txt += '<input type="text" st-model=' + model.edit[index].input.modelName + ' name="' + model.edit[index].input.modelName + '">';
                storeModels.push(model.edit[index].input.modelName);
            }
            if (model.edit[index].input.type == 'button') {
                txt += '<button type="button"';
                if (model.edit[index].input.action) {
                    txt += 'st-click="' + model.edit[index].input.action + '"';
                }
                txt += " st-element st-data='" + dataObj + "'>" + model.edit[index].input.value + "</button>";
            }
        }
        debugger;
        formDom.innerHTML = txt;
        /**
         * initiated new class with eventdata and all DOM array element
         * return {}
         */
        new recycleDom(model, eventData);
    };
    // ====================================================
    // click event listener for elements having st-click
    // ====================================================
    Dom.prototype.clickEventsListener = function () {
        debugger;
        var elem = document.querySelectorAll("[st-click]");
        var model = this.model; // storing reference of input fields configuration
        var executeFunction = this.domModificationClickEventData; // taking reference of executing function
        var _loop_2 = function (index) {
            var actionsFnc = elem[index].getAttribute('st-click');
            elem[index].addEventListener('click', function () {
                executeFunction(actionsFnc);
            });
        };
        for (var index = 0; index < elem.length; index++) {
            _loop_2(index);
        }
    };
    Dom.prototype.domModificationClickEventData = function (actionName) {
        var action = new __WEBPACK_IMPORTED_MODULE_0__events__["a" /* default */]();
        var renderEvnt = new __WEBPACK_IMPORTED_MODULE_1__domActions__["a" /* default */]();
        action[actionName]();
        renderEvnt.renderStudentList();
    };
    return Dom;
}());
/* harmony default export */ __webpack_exports__["a"] = (Dom);
// ================================================================
// DOM digest class.query for DOM element.
// Modifies and bind data with dom element.
// ================================================================
var recycleDom = /** @class */ (function () {
    function recycleDom(identifier, eventData) {
        this.identifier = identifier;
        this.eventData = eventData;
        this.recycle(); // digest dom button element
    }
    // ====================================
    // DOM element recycling function
    // ====================================
    recycleDom.prototype.recycle = function () {
        var buttonElements = document.querySelectorAll('button[st-element]');
        debugger;
        var _loop_3 = function (index) {
            var execute = this_1.executeEvents;
            buttonElements[index].addEventListener('click', function () {
                var data = JSON.parse(buttonElements[index].getAttribute("st-data"));
                var actions = buttonElements[index].getAttribute("st-click");
                execute(); // execute button click event
            });
        };
        var this_1 = this;
        for (var index = 0; index < buttonElements.length; index++) {
            _loop_3(index);
        }
        this.bindValue(); // bind value of the st-model elements
    };
    // =====================================
    // excutes submit button click event
    // =====================================
    recycleDom.prototype.executeEvents = function () {
        var y = new __WEBPACK_IMPORTED_MODULE_0__events__["a" /* default */]();
        eval('y.sayHello()');
    };
    // =========================================================
    // binds value with input type with having model attribute
    // =========================================================
    recycleDom.prototype.bindValue = function () {
        for (var index = 0; index < this.identifier.edit.length; index++) {
            if (this.identifier.edit[index].input.type == 'text') {
                var bindElem = document.querySelector('[st-model="' + this.identifier.edit[index].input.modelName + '"]');
                var val = this.eventData[this.identifier.edit[index].input.modelName];
                bindElem.value = val;
            }
        }
    };
    return recycleDom;
}());


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__student__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__studentService__ = __webpack_require__(2);
 // student enum
 // list of initial students
var Actions = /** @class */ (function () {
    function Actions() {
        this.studentService = new __WEBPACK_IMPORTED_MODULE_1__studentService__["a" /* default */]();
    }
    Actions.prototype.updateData = function (data) {
        debugger;
        console.log(data);
    };
    Actions.prototype.addNew = function () {
        var newst = new __WEBPACK_IMPORTED_MODULE_0__student__["a" /* default */](10, 'supto', 16);
        debugger;
        this.studentService.students.push(newst);
        console.log(this.studentService.students);
    };
    return Actions;
}());
/* harmony default export */ __webpack_exports__["a"] = (Actions);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__studentService__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__script__ = __webpack_require__(4);


var DomRender = /** @class */ (function () {
    function DomRender() {
        this.studentService = new __WEBPACK_IMPORTED_MODULE_0__studentService__["a" /* default */]();
        debugger;
    }
    // ======================================
    // rendering studentlist in dom element
    // ======================================
    DomRender.prototype.renderStudentList = function () {
        debugger;
        var listDom = document.getElementById('stList');
        var allStudent = this.getStudentList();
        debugger;
        this.stListDom = "<ul>";
        for (var index = 0; index < allStudent.length; index++) {
            var dataObj = this.cloneObject(allStudent[index]);
            dataObj.index = index;
            dataObj = JSON.stringify(dataObj);
            this.stListDom += "<li st-data='" + dataObj + "'>id: " + allStudent[index].id + " name: " + allStudent[index].name + " roll:" + allStudent[index].roll + "</li>";
        }
        this.stListDom += "</ul>";
        listDom.innerHTML = this.stListDom;
        new __WEBPACK_IMPORTED_MODULE_1__script__["a" /* default */]();
    };
    // ===========================================
    // deep cloning object
    // ===========================================
    DomRender.prototype.cloneObject = function (obj) {
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
    DomRender.prototype.getStudentList = function () {
        return this.studentService.getAllStudents();
    };
    return DomRender;
}());
/* harmony default export */ __webpack_exports__["a"] = (DomRender);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2U3OTkyZjIxMWRjYjZmMGVkM2QiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdC9zdHVkZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHQvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0L3N0dWRlbnRTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHQvc3R1ZGVudExpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdC9zY3JpcHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdC9ldmVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdC9kb21BY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REEsbUNBQW1DO0FBQ25DLDBCQUEwQjtBQUMxQixrQ0FBa0M7QUFDbEM7SUFJSSxpQkFBWSxFQUFTLEVBQUMsSUFBVyxFQUFDLElBQVc7UUFDekMsSUFBSSxDQUFDLEVBQUUsR0FBQyxFQUFFLENBQUM7UUFDWCxJQUFJLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFDTCxjQUFDO0FBQUQs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ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGNlNzk5MmYyMTFkY2I2ZjBlZDNkIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gZGVjbGFyaW5nIHN0dWRlbnQgc2t1bGxcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5jbGFzcyBTdHVkZW50IHtcclxuICAgIGlkOm51bWJlcjtcclxuICAgIG5hbWU6c3RyaW5nO1xyXG4gICAgcm9sbDpudW1iZXI7XHJcbiAgICBjb25zdHJ1Y3RvcihpZDpudW1iZXIsbmFtZTpzdHJpbmcscm9sbDpudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmlkPWlkO1xyXG4gICAgICAgIHRoaXMubmFtZT1uYW1lO1xyXG4gICAgICAgIHRoaXMucm9sbD1yb2xsO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFN0dWRlbnQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdC9zdHVkZW50LnRzIiwiaW1wb3J0IGFjdGlvbnMgZnJvbSBcIi4vZG9tQWN0aW9uc1wiO1xyXG5jbGFzcyBudUNsZXVzIHtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gbWFpbiBudWNsZXVzIGZ1bmN0aW9uIG9mIHRoZSBjbGFzc1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIG5ldyBhY3Rpb25zKCkucmVuZGVyU3R1ZGVudExpc3QoKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbm5ldyBudUNsZXVzKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdC9tYWluLnRzIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBzdHVkZW50IHNlcnZpY2UgdG8gaW50ZXJhY3Qgd2l0aCBkYXRhIFxyXG4vLyBhbmQgYXBpIGNhbGwgYmVoYXZpb3JcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuaW1wb3J0IHN0dWRlbnQgZnJvbSBcIi4vc3R1ZGVudFwiOyAvLyBzdHVkZW50cyBiYWNrYm9uZVxyXG5pbXBvcnQgc3R1ZGVudExpc3QgZnJvbSAnLi9zdHVkZW50TGlzdCc7IC8vIGxpc3Qgb2YgaW5pdGlhbCBzdHVkZW50c1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHVkZW50U2VydmljZXtcclxuICAgIHN0dWRlbnRzOmFueVtdO1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIG1haW4gbnVjbGV1cyBmdW5jdGlvbiBvZiB0aGUgY2xhc3NcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnN0dWRlbnRzPXN0dWRlbnRMaXN0O1xyXG4gICAgfVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyByZXR1cm4gYWxsIHN0dWRlbnRzIGxpc3RcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgZ2V0QWxsU3R1ZGVudHMoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdHVkZW50cztcclxuICAgIH1cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gYWRkaW5nIG5ldyBzdHVkZW50c1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBhZGROZXdTdHVkZW50KCl7XHJcbiAgICAgICAgdGhpcy5zdHVkZW50cy5wdXNoKG5ldyBzdHVkZW50KDUsJ25ldycsMTAxMCkpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgZWRpdFN0dWRlbnQoZGF0YTphbnkpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdC9zdHVkZW50U2VydmljZS50cyIsIi8qKlxyXG4gKiBzb21lIGR1bW15IHN0dWRlbnQgZGF0YSBmb3IgdXNpbmcgd2hpbGVcclxuICogaW5pdGlhbGl6YXRpb24gb2YgdGhlIGFwcGxpY2F0aW9uXHJcbiAqIHJldHVybnMge1N0dWRlbnQgbGlzdH1cclxuICovXHJcbmltcG9ydCBzdHVkZW50IGZyb20gXCIuL3N0dWRlbnRcIjtcclxubGV0IHN0dWRlbnRzPVtcclxuICAgIG5ldyBzdHVkZW50KDEsJ25haWVlbTEnLDEwMSksXHJcbiAgICBuZXcgc3R1ZGVudCgyLCduYWllZW0yJywxMDIpLFxyXG4gICAgbmV3IHN0dWRlbnQoMywnbmFpZWVtMycsMTAzKSxcclxuICAgIG5ldyBzdHVkZW50KDQsJ25haWVlbTQnLDEwNCksXHJcbiAgICBuZXcgc3R1ZGVudCg1LCduYWllZW01JywxMDUpXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdHVkZW50cztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0L3N0dWRlbnRMaXN0LnRzIiwiaW1wb3J0IGFjdGlvbnMgZnJvbSBcIi4vZXZlbnRzXCI7XG5pbXBvcnQgc3R1ZGVudCBmcm9tIFwiLi9zdHVkZW50XCI7XG5pbXBvcnQgcmVuZGVyRXZlbnRzIGZyb20gXCIuL2RvbUFjdGlvbnNcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvbSB7XG4gICAgbW9kZWw6IGFueSA9IHt9O1xuICAgIHJlbmRlckV2bnQ6YW55O1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1vZGVsID0ge1xuICAgICAgICAgICAgZWRpdDogW3tcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiSURcIixcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsTmFtZTogJ2lkJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIk5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsTmFtZTogJ25hbWUnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdzYXZlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogJ3VwZGF0ZURhdGEnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubGlzdEV2ZW50TGlzdGVuZXIoKTtcbiAgICAgICAgdGhpcy5jbGlja0V2ZW50c0xpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gZXZlbnQgbGlzdGVuZXIgZm9yIGxpc3QgaXRlbXNcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBsaXN0RXZlbnRMaXN0ZW5lcigpIHtcbiAgICAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2I3N0TGlzdCB1bCBsaVwiKTtcbiAgICAgICAgbGV0IG1vZGVsID0gdGhpcy5tb2RlbDsgLy8gc3RvcmluZyByZWZlcmVuY2Ugb2YgaW5wdXQgZmllbGRzIGNvbmZpZ3VyYXRpb25cbiAgICAgICAgbGV0IGV4ZWN1dGVGdW5jdGlvbiA9IHRoaXMuZXhlY3V0ZUNsaWNrRXZlbnQ7IC8vIHRha2luZyByZWZlcmVuY2Ugb2YgZXhlY3V0aW5nIGZ1bmN0aW9uXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBlbGVtLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgbGV0IGV2ZW50RGF0YSA9IEpTT04ucGFyc2UoZWxlbVtpbmRleF0uZ2V0QXR0cmlidXRlKCdzdC1kYXRhJykpO1xuICAgICAgICAgICAgZWxlbVtpbmRleF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZXhlY3V0ZUZ1bmN0aW9uKGV2ZW50RGF0YSwgbW9kZWwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyBleGVjdXRlIGZ1bmN0aW9uIGNsaWNrIGV2ZW50IGxpc3RlbmVyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgZXhlY3V0ZUNsaWNrRXZlbnQoZXZlbnREYXRhOiBzdHVkZW50LCBtb2RlbDogYW55KSB7XG4gICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICBsZXQgZm9ybURvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybVwiKTtcbiAgICAgICAgbGV0IHR4dCA9ICcnO1xuICAgICAgICBsZXQgc3RvcmVNb2RlbHM6IGFueSA9IFtdO1xuICAgICAgICBsZXQgZGF0YU9iaiA9IEpTT04uc3RyaW5naWZ5KGV2ZW50RGF0YSk7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBtb2RlbC5lZGl0Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgaWYgKG1vZGVsLmVkaXRbaW5kZXhdLmlucHV0LnR5cGUgPT0gJ3RleHQnKSB7XG4gICAgICAgICAgICAgICAgdHh0ICs9ICc8bGFiZWwgZm9yPVwiJyArIG1vZGVsLmVkaXRbaW5kZXhdLmxhYmVsICsgJ1wiPicgKyBtb2RlbC5lZGl0W2luZGV4XS5sYWJlbCArICc8L2xhYmVsPic7XG4gICAgICAgICAgICAgICAgdHh0ICs9ICc8aW5wdXQgdHlwZT1cInRleHRcIiBzdC1tb2RlbD0nICsgbW9kZWwuZWRpdFtpbmRleF0uaW5wdXQubW9kZWxOYW1lICsgJyBuYW1lPVwiJyArIG1vZGVsLmVkaXRbaW5kZXhdLmlucHV0Lm1vZGVsTmFtZSArICdcIj4nO1xuICAgICAgICAgICAgICAgIHN0b3JlTW9kZWxzLnB1c2gobW9kZWwuZWRpdFtpbmRleF0uaW5wdXQubW9kZWxOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtb2RlbC5lZGl0W2luZGV4XS5pbnB1dC50eXBlID09ICdidXR0b24nKSB7XG4gICAgICAgICAgICAgICAgdHh0ICs9ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIic7XG4gICAgICAgICAgICAgICAgaWYgKG1vZGVsLmVkaXRbaW5kZXhdLmlucHV0LmFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB0eHQgKz0gJ3N0LWNsaWNrPVwiJyArIG1vZGVsLmVkaXRbaW5kZXhdLmlucHV0LmFjdGlvbiArICdcIic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHR4dCArPSBcIiBzdC1lbGVtZW50IHN0LWRhdGE9J1wiICsgZGF0YU9iaiArIFwiJz5cIiArIG1vZGVsLmVkaXRbaW5kZXhdLmlucHV0LnZhbHVlICsgXCI8L2J1dHRvbj5cIlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICBmb3JtRG9tLmlubmVySFRNTCA9IHR4dDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGluaXRpYXRlZCBuZXcgY2xhc3Mgd2l0aCBldmVudGRhdGEgYW5kIGFsbCBET00gYXJyYXkgZWxlbWVudFxuICAgICAgICAgKiByZXR1cm4ge31cbiAgICAgICAgICovXG4gICAgICAgIG5ldyByZWN5Y2xlRG9tKG1vZGVsLCBldmVudERhdGEpO1xuICAgIH1cblxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyBjbGljayBldmVudCBsaXN0ZW5lciBmb3IgZWxlbWVudHMgaGF2aW5nIHN0LWNsaWNrXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGNsaWNrRXZlbnRzTGlzdGVuZXIoKSB7XG4gICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbc3QtY2xpY2tdXCIpO1xuICAgICAgICBsZXQgbW9kZWwgPSB0aGlzLm1vZGVsOyAvLyBzdG9yaW5nIHJlZmVyZW5jZSBvZiBpbnB1dCBmaWVsZHMgY29uZmlndXJhdGlvblxuICAgICAgICBsZXQgZXhlY3V0ZUZ1bmN0aW9uID0gdGhpcy5kb21Nb2RpZmljYXRpb25DbGlja0V2ZW50RGF0YTsgLy8gdGFraW5nIHJlZmVyZW5jZSBvZiBleGVjdXRpbmcgZnVuY3Rpb25cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGVsZW0ubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBsZXQgYWN0aW9uc0ZuYyA9IGVsZW1baW5kZXhdLmdldEF0dHJpYnV0ZSgnc3QtY2xpY2snKTtcbiAgICAgICAgICAgIGVsZW1baW5kZXhdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGV4ZWN1dGVGdW5jdGlvbihhY3Rpb25zRm5jKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZG9tTW9kaWZpY2F0aW9uQ2xpY2tFdmVudERhdGEoYWN0aW9uTmFtZTogYW55KSB7XG4gICAgICAgIGxldCBhY3Rpb24gPSBuZXcgYWN0aW9ucygpO1xuICAgICAgICBsZXQgcmVuZGVyRXZudD1uZXcgcmVuZGVyRXZlbnRzKCk7XG4gICAgICAgIGFjdGlvblthY3Rpb25OYW1lXSgpO1xuICAgICAgICByZW5kZXJFdm50LnJlbmRlclN0dWRlbnRMaXN0KCk7XG4gICAgfVxuXG59XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBET00gZGlnZXN0IGNsYXNzLnF1ZXJ5IGZvciBET00gZWxlbWVudC5cbi8vIE1vZGlmaWVzIGFuZCBiaW5kIGRhdGEgd2l0aCBkb20gZWxlbWVudC5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmNsYXNzIHJlY3ljbGVEb20ge1xuICAgIGFjdGlvbnM6IGFueTtcbiAgICBpZGVudGlmaWVyOiBhbnk7XG4gICAgZXZlbnREYXRhOiBhbnk7XG4gICAgY29uc3RydWN0b3IoaWRlbnRpZmllcjogYW55LCBldmVudERhdGE6IGFueSkge1xuICAgICAgICB0aGlzLmlkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xuICAgICAgICB0aGlzLmV2ZW50RGF0YSA9IGV2ZW50RGF0YTtcbiAgICAgICAgdGhpcy5yZWN5Y2xlKCk7IC8vIGRpZ2VzdCBkb20gYnV0dG9uIGVsZW1lbnRcbiAgICB9XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gRE9NIGVsZW1lbnQgcmVjeWNsaW5nIGZ1bmN0aW9uXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgcmVjeWNsZSgpIHtcbiAgICAgICAgbGV0IGJ1dHRvbkVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uW3N0LWVsZW1lbnRdJyk7XG4gICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYnV0dG9uRWxlbWVudHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBsZXQgZXhlY3V0ZSA9IHRoaXMuZXhlY3V0ZUV2ZW50cztcbiAgICAgICAgICAgIGJ1dHRvbkVsZW1lbnRzW2luZGV4XS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UoYnV0dG9uRWxlbWVudHNbaW5kZXhdLmdldEF0dHJpYnV0ZShcInN0LWRhdGFcIikpO1xuICAgICAgICAgICAgICAgIHZhciBhY3Rpb25zID0gYnV0dG9uRWxlbWVudHNbaW5kZXhdLmdldEF0dHJpYnV0ZShcInN0LWNsaWNrXCIpO1xuICAgICAgICAgICAgICAgIGV4ZWN1dGUoKTsgLy8gZXhlY3V0ZSBidXR0b24gY2xpY2sgZXZlbnRcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5iaW5kVmFsdWUoKTsgLy8gYmluZCB2YWx1ZSBvZiB0aGUgc3QtbW9kZWwgZWxlbWVudHNcbiAgICB9XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIGV4Y3V0ZXMgc3VibWl0IGJ1dHRvbiBjbGljayBldmVudFxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBleGVjdXRlRXZlbnRzKCkge1xuICAgICAgICBsZXQgeSA9IG5ldyBhY3Rpb25zKCk7XG4gICAgICAgIGV2YWwoJ3kuc2F5SGVsbG8oKScpO1xuICAgIH1cblxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIGJpbmRzIHZhbHVlIHdpdGggaW5wdXQgdHlwZSB3aXRoIGhhdmluZyBtb2RlbCBhdHRyaWJ1dGVcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBiaW5kVmFsdWUoKSB7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmlkZW50aWZpZXIuZWRpdC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlkZW50aWZpZXIuZWRpdFtpbmRleF0uaW5wdXQudHlwZSA9PSAndGV4dCcpIHtcbiAgICAgICAgICAgICAgICBsZXQgYmluZEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbc3QtbW9kZWw9XCInICsgdGhpcy5pZGVudGlmaWVyLmVkaXRbaW5kZXhdLmlucHV0Lm1vZGVsTmFtZSArICdcIl0nKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICAgICAgICAgIGxldCB2YWwgPSB0aGlzLmV2ZW50RGF0YVt0aGlzLmlkZW50aWZpZXIuZWRpdFtpbmRleF0uaW5wdXQubW9kZWxOYW1lXTtcbiAgICAgICAgICAgICAgICBiaW5kRWxlbS52YWx1ZSA9IHZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0L3NjcmlwdC50cyIsImltcG9ydCBJc3R1ZGVudCBmcm9tICcuL3N0dWRlbnQnOyAvLyBzdHVkZW50IGVudW1cclxuaW1wb3J0IFN0dWRlbnRTZXJ2aWNlIGZyb20gJy4vc3R1ZGVudFNlcnZpY2UnOyAvLyBsaXN0IG9mIGluaXRpYWwgc3R1ZGVudHNcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9ucyB7XHJcbiAgICBwcml2YXRlIHN0dWRlbnRTZXJ2aWNlOlN0dWRlbnRTZXJ2aWNlO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5zdHVkZW50U2VydmljZT1uZXcgU3R1ZGVudFNlcnZpY2UoKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZURhdGEoZGF0YTphbnkpOnZvaWR7XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICB9XHJcbiAgICBhZGROZXcoKXtcclxuICAgICAgICBsZXQgbmV3c3Q6SXN0dWRlbnQ9bmV3IElzdHVkZW50KDEwLCdzdXB0bycsMTYpO1xyXG4gICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIHRoaXMuc3R1ZGVudFNlcnZpY2Uuc3R1ZGVudHMucHVzaChuZXdzdCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdHVkZW50U2VydmljZS5zdHVkZW50cyk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0L2V2ZW50cy50cyIsImltcG9ydCBJc3R1ZGVudCBmcm9tIFwiLi9zdHVkZW50XCI7XHJcbmltcG9ydCBTdHVkZW50U2VydmljZSBmcm9tIFwiLi9zdHVkZW50U2VydmljZVwiO1xyXG5pbXBvcnQgbG9hZGVycyBmcm9tICcuL3NjcmlwdCc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvbVJlbmRlciB7XHJcbiAgICBwcml2YXRlIHN0TGlzdERvbTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBzdHVkZW50TGlzdDpJc3R1ZGVudFtdO1xyXG4gICAgcHVibGljIHN0dWRlbnRTZXJ2aWNlOlN0dWRlbnRTZXJ2aWNlO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5zdHVkZW50U2VydmljZT1uZXcgU3R1ZGVudFNlcnZpY2UoKTtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgIH1cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyByZW5kZXJpbmcgc3R1ZGVudGxpc3QgaW4gZG9tIGVsZW1lbnRcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICByZW5kZXJTdHVkZW50TGlzdCgpIHtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICBsZXQgbGlzdERvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdExpc3QnKTtcclxuICAgICAgICBsZXQgYWxsU3R1ZGVudD10aGlzLmdldFN0dWRlbnRMaXN0KCk7XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgdGhpcy5zdExpc3REb20gPSBcIjx1bD5cIjtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYWxsU3R1ZGVudC5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0IGRhdGFPYmogPSB0aGlzLmNsb25lT2JqZWN0KGFsbFN0dWRlbnRbaW5kZXhdKTtcclxuICAgICAgICAgICAgZGF0YU9iai5pbmRleCA9IGluZGV4O1xyXG4gICAgICAgICAgICBkYXRhT2JqID0gSlNPTi5zdHJpbmdpZnkoZGF0YU9iaik7XHJcbiAgICAgICAgICAgIHRoaXMuc3RMaXN0RG9tICs9IFwiPGxpIHN0LWRhdGE9J1wiICsgZGF0YU9iaiArIFwiJz5pZDogXCIgK2FsbFN0dWRlbnRbaW5kZXhdLmlkICsgXCIgbmFtZTogXCIgKyBhbGxTdHVkZW50W2luZGV4XS5uYW1lICsgXCIgcm9sbDpcIiArIGFsbFN0dWRlbnRbaW5kZXhdLnJvbGwgKyBcIjwvbGk+XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3RMaXN0RG9tICs9IFwiPC91bD5cIjtcclxuICAgICAgICBsaXN0RG9tLmlubmVySFRNTCA9IHRoaXMuc3RMaXN0RG9tO1xyXG4gICAgICAgIFxyXG4gICAgICAgIG5ldyBsb2FkZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gZGVlcCBjbG9uaW5nIG9iamVjdFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY2xvbmVPYmplY3Qob2JqOiBhbnkpIHtcclxuICAgICAgICBcclxuICAgICAgICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogIT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9iajtcclxuICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xyXG4gICAgICAgICAgICBsZXQgY2xvbmVkQXJyOmFueVtdO1xyXG4gICAgICAgICAgICBvYmouZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgY2xvbmVkQXJyLnB1c2godGhpcy5jbG9uZU9iamVjdChlbGVtZW50KSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBjbG9uZWRBcnI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGNsb25lZE9iajphbnk9e307XHJcbiAgICAgICAgICAgIGZvciAodmFyIHByb3AgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KHByb3ApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvbmVkT2JqW3Byb3BdID0gdGhpcy5jbG9uZU9iamVjdChvYmpbcHJvcF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjbG9uZWRPYmo7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFN0dWRlbnRMaXN0KCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3R1ZGVudFNlcnZpY2UuZ2V0QWxsU3R1ZGVudHMoKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHQvZG9tQWN0aW9ucy50cyJdLCJzb3VyY2VSb290IjoiIn0=