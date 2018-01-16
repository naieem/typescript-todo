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
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__studentService__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__script__ = __webpack_require__(5);
/*
File Name: Dom Actions.
Description: File for DOM manupulations.
Author: Naieem Mahmud Supto.
Version: 1.1
*/


var DomRender = /** @class */ (function () {
    // ======================================
    // neucleus of the class
    // ======================================
    function DomRender() {
        this.studentService = new __WEBPACK_IMPORTED_MODULE_0__studentService__["a" /* default */]();
    }
    /*==================================================
    =            function declaration block            =
    ==================================================*/
    // ======================================
    // rendering studentlist in dom element
    // ======================================
    DomRender.prototype.renderStudentList = function () {
        var listDom = document.getElementById('stList');
        var allStudent = this.getStudentList();
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
    // ==============================
    // fetching studentlist
    // ==============================
    DomRender.prototype.getStudentList = function () {
        return this.studentService.getAllStudents();
    };
    return DomRender;
}());
/* harmony default export */ __webpack_exports__["a"] = (DomRender);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__student__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__studentList__ = __webpack_require__(4);
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
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__domActions__ = __webpack_require__(1);

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
/* 4 */
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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__domActions__ = __webpack_require__(1);


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
            elem[index].addEventListener('click', function (e) {
                e.preventDefault();
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
        var _loop_3 = function (index) {
            var execute = this_1.executeEvents;
            buttonElements[index].addEventListener('click', function (e) {
                e.preventDefault();
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
/* 6 */
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
        console.log(data);
    };
    Actions.prototype.addNew = function () {
        var newst = new __WEBPACK_IMPORTED_MODULE_0__student__["a" /* default */](10, 'supto', 16);
        this.studentService.students.push(newst);
        debugger;
        console.log(this.studentService.students);
    };
    return Actions;
}());
/* harmony default export */ __webpack_exports__["a"] = (Actions);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmRhMDhmM2NiODIyZTY4MDViZTkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdC9zdHVkZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHQvZG9tQWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0L3N0dWRlbnRTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHQvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0L3N0dWRlbnRMaXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHQvc2NyaXB0LnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHQvZXZlbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REEsbUNBQW1DO0FBQ25DLDBCQUEwQjtBQUMxQixrQ0FBa0M7QUFDbEM7SUFJSSxpQkFBWSxFQUFTLEVBQUMsSUFBVyxFQUFDLElBQVc7UUFDekMsSUFBSSxDQUFDLEVBQUUsR0FBQyxFQUFFLENBQUM7UUFDWCxJQUFJLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFDTCxjQUFDO0FBQUQs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QUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBQ0wsY0FBQztBQUFELENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYmRhMDhmM2NiODIyZTY4MDViZTkiLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBkZWNsYXJpbmcgc3R1ZGVudCBza3VsbFxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmNsYXNzIFN0dWRlbnQge1xyXG4gICAgaWQ6bnVtYmVyO1xyXG4gICAgbmFtZTpzdHJpbmc7XHJcbiAgICByb2xsOm51bWJlcjtcclxuICAgIGNvbnN0cnVjdG9yKGlkOm51bWJlcixuYW1lOnN0cmluZyxyb2xsOm51bWJlcikge1xyXG4gICAgICAgIHRoaXMuaWQ9aWQ7XHJcbiAgICAgICAgdGhpcy5uYW1lPW5hbWU7XHJcbiAgICAgICAgdGhpcy5yb2xsPXJvbGw7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU3R1ZGVudDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0L3N0dWRlbnQudHMiLCIvKlxyXG5GaWxlIE5hbWU6IERvbSBBY3Rpb25zLlxyXG5EZXNjcmlwdGlvbjogRmlsZSBmb3IgRE9NIG1hbnVwdWxhdGlvbnMuXHJcbkF1dGhvcjogTmFpZWVtIE1haG11ZCBTdXB0by5cclxuVmVyc2lvbjogMS4xXHJcbiovXHJcblxyXG5pbXBvcnQgSXN0dWRlbnQgZnJvbSBcIi4vc3R1ZGVudFwiO1xyXG5pbXBvcnQgU3R1ZGVudFNlcnZpY2UgZnJvbSBcIi4vc3R1ZGVudFNlcnZpY2VcIjtcclxuaW1wb3J0IGxvYWRlcnMgZnJvbSAnLi9zY3JpcHQnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb21SZW5kZXIge1xyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBtYWluIHZhcmlhYmxlIGRlY2xhcmF0aW9uIGJsb2NrXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgcHJpdmF0ZSBzdExpc3REb206IHN0cmluZztcclxuICAgIHByaXZhdGUgc3R1ZGVudExpc3Q6SXN0dWRlbnRbXTtcclxuICAgIHB1YmxpYyBzdHVkZW50U2VydmljZTpTdHVkZW50U2VydmljZTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gbmV1Y2xldXMgb2YgdGhlIGNsYXNzXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnN0dWRlbnRTZXJ2aWNlPW5ldyBTdHVkZW50U2VydmljZSgpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgID0gICAgICAgICAgICBmdW5jdGlvbiBkZWNsYXJhdGlvbiBibG9jayAgICAgICAgICAgID1cclxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbiAgICBcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyByZW5kZXJpbmcgc3R1ZGVudGxpc3QgaW4gZG9tIGVsZW1lbnRcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBcclxuICAgIHJlbmRlclN0dWRlbnRMaXN0KCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBsaXN0RG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0TGlzdCcpO1xyXG4gICAgICAgIGxldCBhbGxTdHVkZW50PXRoaXMuZ2V0U3R1ZGVudExpc3QoKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnN0TGlzdERvbSA9IFwiPHVsPlwiO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhbGxTdHVkZW50Lmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBsZXQgZGF0YU9iaiA9IHRoaXMuY2xvbmVPYmplY3QoYWxsU3R1ZGVudFtpbmRleF0pO1xyXG4gICAgICAgICAgICBkYXRhT2JqLmluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgICAgIGRhdGFPYmogPSBKU09OLnN0cmluZ2lmeShkYXRhT2JqKTtcclxuICAgICAgICAgICAgdGhpcy5zdExpc3REb20gKz0gXCI8bGkgc3QtZGF0YT0nXCIgKyBkYXRhT2JqICsgXCInPmlkOiBcIiArYWxsU3R1ZGVudFtpbmRleF0uaWQgKyBcIiBuYW1lOiBcIiArIGFsbFN0dWRlbnRbaW5kZXhdLm5hbWUgKyBcIiByb2xsOlwiICsgYWxsU3R1ZGVudFtpbmRleF0ucm9sbCArIFwiPC9saT5cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdExpc3REb20gKz0gXCI8L3VsPlwiO1xyXG4gICAgICAgIGxpc3REb20uaW5uZXJIVE1MID0gdGhpcy5zdExpc3REb207XHJcbiAgICAgICAgXHJcbiAgICAgICAgbmV3IGxvYWRlcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBkZWVwIGNsb25pbmcgb2JqZWN0XHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBcclxuICAgIGNsb25lT2JqZWN0KG9iajogYW55KSB7XHJcbiAgICAgICAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqICE9PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvYmo7XHJcbiAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcclxuICAgICAgICAgICAgbGV0IGNsb25lZEFycjphbnlbXTtcclxuICAgICAgICAgICAgb2JqLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGNsb25lZEFyci5wdXNoKHRoaXMuY2xvbmVPYmplY3QoZWxlbWVudCkpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gY2xvbmVkQXJyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBjbG9uZWRPYmo6YW55PXt9O1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwcm9wIGluIG9iaikge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsb25lZE9ialtwcm9wXSA9IHRoaXMuY2xvbmVPYmplY3Qob2JqW3Byb3BdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY2xvbmVkT2JqO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIGZldGNoaW5nIHN0dWRlbnRsaXN0XHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIFxyXG4gICAgZ2V0U3R1ZGVudExpc3QoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdHVkZW50U2VydmljZS5nZXRBbGxTdHVkZW50cygpO1xyXG4gICAgfVxyXG4gICAgLyo9PT09PSAgRW5kIG9mIGZ1bmN0aW9uIGRlY2xhcmF0aW9uIGJsb2NrICA9PT09PT0qL1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdC9kb21BY3Rpb25zLnRzIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBzdHVkZW50IHNlcnZpY2UgdG8gaW50ZXJhY3Qgd2l0aCBkYXRhIFxyXG4vLyBhbmQgYXBpIGNhbGwgYmVoYXZpb3JcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuaW1wb3J0IHN0dWRlbnQgZnJvbSBcIi4vc3R1ZGVudFwiOyAvLyBzdHVkZW50cyBiYWNrYm9uZVxyXG5pbXBvcnQgc3R1ZGVudExpc3QgZnJvbSAnLi9zdHVkZW50TGlzdCc7IC8vIGxpc3Qgb2YgaW5pdGlhbCBzdHVkZW50c1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHVkZW50U2VydmljZXtcclxuICAgIHN0dWRlbnRzOmFueVtdO1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIG1haW4gbnVjbGV1cyBmdW5jdGlvbiBvZiB0aGUgY2xhc3NcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnN0dWRlbnRzPXN0dWRlbnRMaXN0O1xyXG4gICAgfVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyByZXR1cm4gYWxsIHN0dWRlbnRzIGxpc3RcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgZ2V0QWxsU3R1ZGVudHMoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdHVkZW50cztcclxuICAgIH1cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gYWRkaW5nIG5ldyBzdHVkZW50c1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBhZGROZXdTdHVkZW50KCl7XHJcbiAgICAgICAgdGhpcy5zdHVkZW50cy5wdXNoKG5ldyBzdHVkZW50KDUsJ25ldycsMTAxMCkpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgZWRpdFN0dWRlbnQoZGF0YTphbnkpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdC9zdHVkZW50U2VydmljZS50cyIsImltcG9ydCBhY3Rpb25zIGZyb20gXCIuL2RvbUFjdGlvbnNcIjtcclxuY2xhc3MgbnVDbGV1cyB7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIG1haW4gbnVjbGV1cyBmdW5jdGlvbiBvZiB0aGUgY2xhc3NcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBuZXcgYWN0aW9ucygpLnJlbmRlclN0dWRlbnRMaXN0KCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5uZXcgbnVDbGV1cygpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0L21haW4udHMiLCIvKipcclxuICogc29tZSBkdW1teSBzdHVkZW50IGRhdGEgZm9yIHVzaW5nIHdoaWxlXHJcbiAqIGluaXRpYWxpemF0aW9uIG9mIHRoZSBhcHBsaWNhdGlvblxyXG4gKiByZXR1cm5zIHtTdHVkZW50IGxpc3R9XHJcbiAqL1xyXG5pbXBvcnQgc3R1ZGVudCBmcm9tIFwiLi9zdHVkZW50XCI7XHJcbmxldCBzdHVkZW50cz1bXHJcbiAgICBuZXcgc3R1ZGVudCgxLCduYWllZW0xJywxMDEpLFxyXG4gICAgbmV3IHN0dWRlbnQoMiwnbmFpZWVtMicsMTAyKSxcclxuICAgIG5ldyBzdHVkZW50KDMsJ25haWVlbTMnLDEwMyksXHJcbiAgICBuZXcgc3R1ZGVudCg0LCduYWllZW00JywxMDQpLFxyXG4gICAgbmV3IHN0dWRlbnQoNSwnbmFpZWVtNScsMTA1KVxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3R1ZGVudHM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdC9zdHVkZW50TGlzdC50cyIsImltcG9ydCBhY3Rpb25zIGZyb20gXCIuL2V2ZW50c1wiO1xuaW1wb3J0IHN0dWRlbnQgZnJvbSBcIi4vc3R1ZGVudFwiO1xuaW1wb3J0IHJlbmRlckV2ZW50cyBmcm9tIFwiLi9kb21BY3Rpb25zXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb20ge1xuICAgIG1vZGVsOiBhbnkgPSB7fTtcbiAgICByZW5kZXJFdm50OmFueTtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5tb2RlbCA9IHtcbiAgICAgICAgICAgIGVkaXQ6IFt7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIklEXCIsXG4gICAgICAgICAgICAgICAgICAgIGlucHV0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbE5hbWU6ICdpZCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJOYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgIGlucHV0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbE5hbWU6ICduYW1lJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnc2F2ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICd1cGRhdGVEYXRhJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmxpc3RFdmVudExpc3RlbmVyKCk7XG4gICAgICAgIHRoaXMuY2xpY2tFdmVudHNMaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIGV2ZW50IGxpc3RlbmVyIGZvciBsaXN0IGl0ZW1zXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgbGlzdEV2ZW50TGlzdGVuZXIoKSB7XG4gICAgICAgIGxldCBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImRpdiNzdExpc3QgdWwgbGlcIik7XG4gICAgICAgIGxldCBtb2RlbCA9IHRoaXMubW9kZWw7IC8vIHN0b3JpbmcgcmVmZXJlbmNlIG9mIGlucHV0IGZpZWxkcyBjb25maWd1cmF0aW9uXG4gICAgICAgIGxldCBleGVjdXRlRnVuY3Rpb24gPSB0aGlzLmV4ZWN1dGVDbGlja0V2ZW50OyAvLyB0YWtpbmcgcmVmZXJlbmNlIG9mIGV4ZWN1dGluZyBmdW5jdGlvblxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZWxlbS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGxldCBldmVudERhdGEgPSBKU09OLnBhcnNlKGVsZW1baW5kZXhdLmdldEF0dHJpYnV0ZSgnc3QtZGF0YScpKTtcbiAgICAgICAgICAgIGVsZW1baW5kZXhdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGV4ZWN1dGVGdW5jdGlvbihldmVudERhdGEsIG1vZGVsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gZXhlY3V0ZSBmdW5jdGlvbiBjbGljayBldmVudCBsaXN0ZW5lclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGV4ZWN1dGVDbGlja0V2ZW50KGV2ZW50RGF0YTogc3R1ZGVudCwgbW9kZWw6IGFueSkge1xuICAgICAgICBcbiAgICAgICAgbGV0IGZvcm1Eb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1cIik7XG4gICAgICAgIGxldCB0eHQgPSAnJztcbiAgICAgICAgbGV0IHN0b3JlTW9kZWxzOiBhbnkgPSBbXTtcbiAgICAgICAgbGV0IGRhdGFPYmogPSBKU09OLnN0cmluZ2lmeShldmVudERhdGEpO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbW9kZWwuZWRpdC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGlmIChtb2RlbC5lZGl0W2luZGV4XS5pbnB1dC50eXBlID09ICd0ZXh0Jykge1xuICAgICAgICAgICAgICAgIHR4dCArPSAnPGxhYmVsIGZvcj1cIicgKyBtb2RlbC5lZGl0W2luZGV4XS5sYWJlbCArICdcIj4nICsgbW9kZWwuZWRpdFtpbmRleF0ubGFiZWwgKyAnPC9sYWJlbD4nO1xuICAgICAgICAgICAgICAgIHR4dCArPSAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgc3QtbW9kZWw9JyArIG1vZGVsLmVkaXRbaW5kZXhdLmlucHV0Lm1vZGVsTmFtZSArICcgbmFtZT1cIicgKyBtb2RlbC5lZGl0W2luZGV4XS5pbnB1dC5tb2RlbE5hbWUgKyAnXCI+JztcbiAgICAgICAgICAgICAgICBzdG9yZU1vZGVscy5wdXNoKG1vZGVsLmVkaXRbaW5kZXhdLmlucHV0Lm1vZGVsTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobW9kZWwuZWRpdFtpbmRleF0uaW5wdXQudHlwZSA9PSAnYnV0dG9uJykge1xuICAgICAgICAgICAgICAgIHR4dCArPSAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCInO1xuICAgICAgICAgICAgICAgIGlmIChtb2RlbC5lZGl0W2luZGV4XS5pbnB1dC5hY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdHh0ICs9ICdzdC1jbGljaz1cIicgKyBtb2RlbC5lZGl0W2luZGV4XS5pbnB1dC5hY3Rpb24gKyAnXCInO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0eHQgKz0gXCIgc3QtZWxlbWVudCBzdC1kYXRhPSdcIiArIGRhdGFPYmogKyBcIic+XCIgKyBtb2RlbC5lZGl0W2luZGV4XS5pbnB1dC52YWx1ZSArIFwiPC9idXR0b24+XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZm9ybURvbS5pbm5lckhUTUwgPSB0eHQ7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBpbml0aWF0ZWQgbmV3IGNsYXNzIHdpdGggZXZlbnRkYXRhIGFuZCBhbGwgRE9NIGFycmF5IGVsZW1lbnRcbiAgICAgICAgICogcmV0dXJuIHt9XG4gICAgICAgICAqL1xuICAgICAgICBuZXcgcmVjeWNsZURvbShtb2RlbCwgZXZlbnREYXRhKTtcbiAgICB9XG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gY2xpY2sgZXZlbnQgbGlzdGVuZXIgZm9yIGVsZW1lbnRzIGhhdmluZyBzdC1jbGlja1xuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBjbGlja0V2ZW50c0xpc3RlbmVyKCkge1xuICAgICAgICBkZWJ1Z2dlcjsgICAgXG4gICAgICAgIGxldCBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltzdC1jbGlja11cIik7XG4gICAgICAgIGxldCBtb2RlbCA9IHRoaXMubW9kZWw7IC8vIHN0b3JpbmcgcmVmZXJlbmNlIG9mIGlucHV0IGZpZWxkcyBjb25maWd1cmF0aW9uXG4gICAgICAgIGxldCBleGVjdXRlRnVuY3Rpb24gPSB0aGlzLmRvbU1vZGlmaWNhdGlvbkNsaWNrRXZlbnREYXRhOyAvLyB0YWtpbmcgcmVmZXJlbmNlIG9mIGV4ZWN1dGluZyBmdW5jdGlvblxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZWxlbS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGxldCBhY3Rpb25zRm5jID0gZWxlbVtpbmRleF0uZ2V0QXR0cmlidXRlKCdzdC1jbGljaycpO1xuICAgICAgICAgICAgZWxlbVtpbmRleF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBleGVjdXRlRnVuY3Rpb24oYWN0aW9uc0ZuYyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRvbU1vZGlmaWNhdGlvbkNsaWNrRXZlbnREYXRhKGFjdGlvbk5hbWU6IHN0cmluZykge1xuICAgICAgICBsZXQgYWN0aW9uID0gbmV3IGFjdGlvbnMoKTtcbiAgICAgICAgbGV0IHJlbmRlckV2bnQ9bmV3IHJlbmRlckV2ZW50cygpO1xuICAgICAgICBhY3Rpb25bYWN0aW9uTmFtZV0oKTtcbiAgICAgICAgcmVuZGVyRXZudC5yZW5kZXJTdHVkZW50TGlzdCgpO1xuICAgIH1cblxufVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRE9NIGRpZ2VzdCBjbGFzcy5xdWVyeSBmb3IgRE9NIGVsZW1lbnQuXG4vLyBNb2RpZmllcyBhbmQgYmluZCBkYXRhIHdpdGggZG9tIGVsZW1lbnQuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5jbGFzcyByZWN5Y2xlRG9tIHtcbiAgICBhY3Rpb25zOiBhbnk7XG4gICAgaWRlbnRpZmllcjogYW55O1xuICAgIGV2ZW50RGF0YTogYW55O1xuICAgIGNvbnN0cnVjdG9yKGlkZW50aWZpZXI6IGFueSwgZXZlbnREYXRhOiBhbnkpIHtcbiAgICAgICAgdGhpcy5pZGVudGlmaWVyID0gaWRlbnRpZmllcjtcbiAgICAgICAgdGhpcy5ldmVudERhdGEgPSBldmVudERhdGE7XG4gICAgICAgIHRoaXMucmVjeWNsZSgpOyAvLyBkaWdlc3QgZG9tIGJ1dHRvbiBlbGVtZW50XG4gICAgfVxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIERPTSBlbGVtZW50IHJlY3ljbGluZyBmdW5jdGlvblxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIHJlY3ljbGUoKSB7XG4gICAgICAgIGxldCBidXR0b25FbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbltzdC1lbGVtZW50XScpO1xuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGJ1dHRvbkVsZW1lbnRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgbGV0IGV4ZWN1dGUgPSB0aGlzLmV4ZWN1dGVFdmVudHM7XG4gICAgICAgICAgICBidXR0b25FbGVtZW50c1tpbmRleF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UoYnV0dG9uRWxlbWVudHNbaW5kZXhdLmdldEF0dHJpYnV0ZShcInN0LWRhdGFcIikpO1xuICAgICAgICAgICAgICAgIHZhciBhY3Rpb25zID0gYnV0dG9uRWxlbWVudHNbaW5kZXhdLmdldEF0dHJpYnV0ZShcInN0LWNsaWNrXCIpO1xuICAgICAgICAgICAgICAgIGV4ZWN1dGUoKTsgLy8gZXhlY3V0ZSBidXR0b24gY2xpY2sgZXZlbnRcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5iaW5kVmFsdWUoKTsgLy8gYmluZCB2YWx1ZSBvZiB0aGUgc3QtbW9kZWwgZWxlbWVudHNcbiAgICB9XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIGV4Y3V0ZXMgc3VibWl0IGJ1dHRvbiBjbGljayBldmVudFxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBleGVjdXRlRXZlbnRzKCkge1xuICAgICAgICBsZXQgeSA9IG5ldyBhY3Rpb25zKCk7XG4gICAgICAgIGV2YWwoJ3kuc2F5SGVsbG8oKScpO1xuICAgIH1cblxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIGJpbmRzIHZhbHVlIHdpdGggaW5wdXQgdHlwZSB3aXRoIGhhdmluZyBtb2RlbCBhdHRyaWJ1dGVcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBiaW5kVmFsdWUoKSB7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmlkZW50aWZpZXIuZWRpdC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlkZW50aWZpZXIuZWRpdFtpbmRleF0uaW5wdXQudHlwZSA9PSAndGV4dCcpIHtcbiAgICAgICAgICAgICAgICBsZXQgYmluZEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbc3QtbW9kZWw9XCInICsgdGhpcy5pZGVudGlmaWVyLmVkaXRbaW5kZXhdLmlucHV0Lm1vZGVsTmFtZSArICdcIl0nKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICAgICAgICAgIGxldCB2YWwgPSB0aGlzLmV2ZW50RGF0YVt0aGlzLmlkZW50aWZpZXIuZWRpdFtpbmRleF0uaW5wdXQubW9kZWxOYW1lXTtcbiAgICAgICAgICAgICAgICBiaW5kRWxlbS52YWx1ZSA9IHZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0L3NjcmlwdC50cyIsImltcG9ydCBJc3R1ZGVudCBmcm9tICcuL3N0dWRlbnQnOyAvLyBzdHVkZW50IGVudW1cclxuaW1wb3J0IFN0dWRlbnRTZXJ2aWNlIGZyb20gJy4vc3R1ZGVudFNlcnZpY2UnOyAvLyBsaXN0IG9mIGluaXRpYWwgc3R1ZGVudHNcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9ucyB7XHJcbiAgICBwcml2YXRlIHN0dWRlbnRTZXJ2aWNlOlN0dWRlbnRTZXJ2aWNlO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5zdHVkZW50U2VydmljZT1uZXcgU3R1ZGVudFNlcnZpY2UoKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZURhdGEoZGF0YTphbnkpOnZvaWR7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICB9XHJcbiAgICBhZGROZXcoKXtcclxuICAgICAgICBsZXQgbmV3c3Q6SXN0dWRlbnQ9bmV3IElzdHVkZW50KDEwLCdzdXB0bycsMTYpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc3R1ZGVudFNlcnZpY2Uuc3R1ZGVudHMucHVzaChuZXdzdCk7XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdHVkZW50U2VydmljZS5zdHVkZW50cyk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0L2V2ZW50cy50cyJdLCJzb3VyY2VSb290IjoiIn0=