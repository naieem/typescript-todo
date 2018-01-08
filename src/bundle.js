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
            .getAllStudents();
        this.renderStudentList(); // rendering list at initial stage
    }
    // ======================================
    // rendering studentlist in dom element
    // ======================================
    nuCleus.prototype.renderStudentList = function () {
        var _this = this;
        var listDom = document.getElementById('stList');
        this.stListDom = "<ul>";
        this
            .allStudent
            .forEach(function (element) {
            _this.stListDom += "<li st-data=" + element + ">id: " + element.id + " name: " + element.name + " roll:" + element.roll + "</li>";
        });
        this.stListDom += "</ul>";
        listDom.innerHTML = this.stListDom;
        debugger;
        new __WEBPACK_IMPORTED_MODULE_1__script__["a" /* default */]();
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
        debugger;
    };
    StudentService.prototype.editStudent = function (data) {
        debugger;
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
        var elem = document.querySelectorAll("div#stList ul li");
        for (var index = 0; index < elem.length; index++) {
            var t = elem[index].getAttribute('st-data');
            debugger;
        }
    }
    Dom.prototype.listEventListener = function () {
        var elem = document.querySelector("div#stList ul li");
    };
    return Dom;
}());
/* harmony default export */ __webpack_exports__["a"] = (Dom);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2FjN2JjMDUyYzYwMWY3N2RlNjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdC9zdHVkZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHQvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0L3N0dWRlbnRTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHQvc3R1ZGVudExpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdC9zY3JpcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzdEQSxtQ0FBbUM7QUFDbkMsMEJBQTBCO0FBQzFCLGtDQUFrQztBQUNsQztJQUlJLGlCQUFZLEVBQVMsRUFBQyxJQUFXLEVBQUMsSUFBVztRQUN6QyxJQUFJLENBQUMsRUFBRSxHQUFDLEVBQUUsQ0FBQztRQUNYLElBQUksQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDO1FBQ2YsSUFBSSxDQUFDLElBQUksR0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUFDO0FBQ0QseURBQWUsT0FBTyxFQUFDOzs7Ozs7Ozs7OztBQ2J1QjtBQUNmO0FBQy9CO0lBSUkseUNBQXlDO0lBQ3pDLHFDQUFxQztJQUNyQyx5Q0FBeUM7SUFDekM7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksZ0VBQWMsRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSTthQUNqQixPQUFPO2FBQ1AsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxrQ0FBa0M7SUFDaEUsQ0FBQztJQUVELHlDQUF5QztJQUN6Qyx1Q0FBdUM7SUFDdkMseUNBQXlDO0lBQ3pDLG1DQUFpQixHQUFqQjtRQUFBLGlCQVlDO1FBWEcsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUN4QixJQUFJO2FBQ0MsVUFBVTthQUNWLE9BQU8sQ0FBQyxpQkFBTztZQUNaLEtBQUksQ0FBQyxTQUFTLElBQUksY0FBYyxHQUFDLE9BQU8sR0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLEVBQUUsR0FBRyxTQUFTLEdBQUcsT0FBTyxDQUFDLElBQUksR0FBRyxRQUFRLEdBQUcsT0FBTyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7UUFDakksQ0FBQyxDQUFDLENBQUM7UUFDUCxJQUFJLENBQUMsU0FBUyxJQUFJLE9BQU8sQ0FBQztRQUMxQixPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDbkMsUUFBUSxDQUFDO1FBQ1QsSUFBSSx3REFBTyxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUFDO0FBRUQsSUFBSSxPQUFPLEVBQUUsQ0FBQzs7Ozs7Ozs7O0FDbkNkO0FBQUEsdURBQXVEO0FBQ3ZELHlDQUF5QztBQUN6Qyx3QkFBd0I7QUFDeEIsdURBQXVEO0FBRXZCLENBQUMsb0JBQW9CO0FBQ2IsQ0FBQywyQkFBMkI7QUFDcEU7SUFFSSx5Q0FBeUM7SUFDekMscUNBQXFDO0lBQ3JDLHlDQUF5QztJQUN6QztRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUMsNkRBQVcsQ0FBQztJQUM5QixDQUFDO0lBQ0QsMENBQTBDO0lBQzFDLDJCQUEyQjtJQUMzQiwwQ0FBMEM7SUFDMUMsdUNBQWMsR0FBZDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFDRCwwQ0FBMEM7SUFDMUMsc0JBQXNCO0lBQ3RCLDBDQUEwQztJQUMxQyxzQ0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSx5REFBTyxDQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM5QyxRQUFRLENBQUM7SUFDYixDQUFDO0lBQ0Qsb0NBQVcsR0FBWCxVQUFZLElBQVE7UUFDaEIsUUFBUSxDQUFDO0lBQ2IsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7OztBQy9CK0I7QUFDaEMsSUFBSSxRQUFRLEdBQUM7SUFDVCxJQUFJLHlEQUFPLENBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxHQUFHLENBQUM7SUFDM0IsSUFBSSx5REFBTyxDQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsR0FBRyxDQUFDO0lBQzNCLElBQUkseURBQU8sQ0FBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLEdBQUcsQ0FBQztJQUMzQixJQUFJLHlEQUFPLENBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxHQUFHLENBQUM7SUFDM0IsSUFBSSx5REFBTyxDQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsR0FBRyxDQUFDO0NBQzlCLENBQUM7QUFFRix5REFBZSxRQUFRLEVBQUM7Ozs7Ozs7O0FDVHhCO0lBQ0k7UUFDSSxJQUFJLElBQUksR0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUN2RCxHQUFHLENBQUMsQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQztZQUNoRCxJQUFJLENBQUMsR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzFDLFFBQVEsQ0FBQztRQUNaLENBQUM7SUFDTCxDQUFDO0lBRUQsK0JBQWlCLEdBQWpCO1FBQ0ksSUFBSSxJQUFJLEdBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFTCxVQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzYWM3YmMwNTJjNjAxZjc3ZGU2MSIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIGRlY2xhcmluZyBzdHVkZW50IHNrdWxsXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuY2xhc3MgU3R1ZGVudCB7XHJcbiAgICBpZDpudW1iZXI7XHJcbiAgICBuYW1lOnN0cmluZztcclxuICAgIHJvbGw6bnVtYmVyO1xyXG4gICAgY29uc3RydWN0b3IoaWQ6bnVtYmVyLG5hbWU6c3RyaW5nLHJvbGw6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5pZD1pZDtcclxuICAgICAgICB0aGlzLm5hbWU9bmFtZTtcclxuICAgICAgICB0aGlzLnJvbGw9cm9sbDtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTdHVkZW50O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHQvc3R1ZGVudC50cyIsImltcG9ydCBTdHVkZW50U2VydmljZSBmcm9tICcuL3N0dWRlbnRTZXJ2aWNlJztcclxuaW1wb3J0IGxvYWRlcnMgZnJvbSAnLi9zY3JpcHQnO1xyXG5jbGFzcyBudUNsZXVzIHtcclxuICAgIGFsbFN0dWRlbnQgOiBhbnlbXTtcclxuICAgIHNlcnZpY2UgOiBhbnk7XHJcbiAgICBzdExpc3REb20gOiBzdHJpbmc7XHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gbWFpbiBudWNsZXVzIGZ1bmN0aW9uIG9mIHRoZSBjbGFzc1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc2VydmljZSA9IG5ldyBTdHVkZW50U2VydmljZSgpO1xyXG4gICAgICAgIHRoaXMuYWxsU3R1ZGVudCA9IHRoaXNcclxuICAgICAgICAgICAgLnNlcnZpY2VcclxuICAgICAgICAgICAgLmdldEFsbFN0dWRlbnRzKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJTdHVkZW50TGlzdCgpOyAvLyByZW5kZXJpbmcgbGlzdCBhdCBpbml0aWFsIHN0YWdlXHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIHJlbmRlcmluZyBzdHVkZW50bGlzdCBpbiBkb20gZWxlbWVudFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHJlbmRlclN0dWRlbnRMaXN0KCkge1xyXG4gICAgICAgIGxldCBsaXN0RG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0TGlzdCcpO1xyXG4gICAgICAgIHRoaXMuc3RMaXN0RG9tID0gXCI8dWw+XCI7XHJcbiAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICAuYWxsU3R1ZGVudFxyXG4gICAgICAgICAgICAuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RMaXN0RG9tICs9IFwiPGxpIHN0LWRhdGE9XCIrZWxlbWVudCtcIj5pZDogXCIgKyBlbGVtZW50LmlkICsgXCIgbmFtZTogXCIgKyBlbGVtZW50Lm5hbWUgKyBcIiByb2xsOlwiICsgZWxlbWVudC5yb2xsICsgXCI8L2xpPlwiO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnN0TGlzdERvbSArPSBcIjwvdWw+XCI7XHJcbiAgICAgICAgbGlzdERvbS5pbm5lckhUTUwgPSB0aGlzLnN0TGlzdERvbTtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICBuZXcgbG9hZGVycygpO1xyXG4gICAgfVxyXG59XHJcblxyXG5uZXcgbnVDbGV1cygpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHQvbWFpbi50cyIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gc3R1ZGVudCBzZXJ2aWNlIHRvIGludGVyYWN0IHdpdGggZGF0YSBcclxuLy8gYW5kIGFwaSBjYWxsIGJlaGF2aW9yXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmltcG9ydCBzdHVkZW50IGZyb20gXCIuL3N0dWRlbnRcIjsgLy8gc3R1ZGVudHMgYmFja2JvbmVcclxuaW1wb3J0IHN0dWRlbnRMaXN0IGZyb20gJy4vc3R1ZGVudExpc3QnOyAvLyBsaXN0IG9mIGluaXRpYWwgc3R1ZGVudHNcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3R1ZGVudFNlcnZpY2V7XHJcbiAgICBzdHVkZW50czphbnlbXTtcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBtYWluIG51Y2xldXMgZnVuY3Rpb24gb2YgdGhlIGNsYXNzXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5zdHVkZW50cz1zdHVkZW50TGlzdDtcclxuICAgIH1cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gcmV0dXJuIGFsbCBzdHVkZW50cyBsaXN0XHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGdldEFsbFN0dWRlbnRzKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3R1ZGVudHM7XHJcbiAgICB9XHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIGFkZGluZyBuZXcgc3R1ZGVudHNcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgYWRkTmV3U3R1ZGVudCgpe1xyXG4gICAgICAgIHRoaXMuc3R1ZGVudHMucHVzaChuZXcgc3R1ZGVudCg1LCduZXcnLDEwMTApKTtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgIH1cclxuICAgIGVkaXRTdHVkZW50KGRhdGE6YW55KXtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHQvc3R1ZGVudFNlcnZpY2UudHMiLCJpbXBvcnQgc3R1ZGVudCBmcm9tIFwiLi9zdHVkZW50XCI7XHJcbmxldCBzdHVkZW50cz1bXHJcbiAgICBuZXcgc3R1ZGVudCgxLCduYWllZW0nLDEwMSksXHJcbiAgICBuZXcgc3R1ZGVudCgyLCduYWllZW0nLDEwMiksXHJcbiAgICBuZXcgc3R1ZGVudCgzLCduYWllZW0nLDEwMyksXHJcbiAgICBuZXcgc3R1ZGVudCg0LCduYWllZW0nLDEwNCksXHJcbiAgICBuZXcgc3R1ZGVudCg1LCduYWllZW0nLDEwNSlcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0dWRlbnRzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHQvc3R1ZGVudExpc3QudHMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEb20ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgbGV0IGVsZW09ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImRpdiNzdExpc3QgdWwgbGlcIik7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGVsZW0ubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgdmFyIHQ9ZWxlbVtpbmRleF0uZ2V0QXR0cmlidXRlKCdzdC1kYXRhJyk7XHJcbiAgICAgICAgICAgZGVidWdnZXI7ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxpc3RFdmVudExpc3RlbmVyKCl7XHJcbiAgICAgICAgbGV0IGVsZW09ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdiNzdExpc3QgdWwgbGlcIik7XHJcbiAgICB9XHJcbiAgICBcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHQvc2NyaXB0LnRzIl0sInNvdXJjZVJvb3QiOiIifQ==