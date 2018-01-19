/******/
(function(modules) { // webpackBootstrap
    /******/ // The module cache
    /******/
    var installedModules = {};
    /******/
    /******/ // The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/
        if (installedModules[moduleId]) {
            /******/
            return installedModules[moduleId].exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
            /******/
            i: moduleId,
            /******/
            l: false,
            /******/
            exports: {}
            /******/
        };
        /******/
        /******/ // Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/
        module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/
    __webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/
    __webpack_require__.d = function(exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
            /******/
            Object.defineProperty(exports, name, {
                /******/
                configurable: false,
                /******/
                enumerable: true,
                /******/
                get: getter
                    /******/
            });
            /******/
        }
        /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/
    __webpack_require__.n = function(module) {
        /******/
        var getter = module && module.__esModule ?
            /******/
            function getDefault() { return module['default']; } :
            /******/
            function getModuleExports() { return module; };
        /******/
        __webpack_require__.d(getter, 'a', getter);
        /******/
        return getter;
        /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/
    __webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
    /******/
    /******/ // __webpack_public_path__
    /******/
    __webpack_require__.p = "";
    /******/
    /******/ // Load entry module and return exports
    /******/
    return __webpack_require__(__webpack_require__.s = 3);
    /******/
})
/************************************************************************/
/******/
([
    /* 0 */
    /***/
    (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__studentList__ = __webpack_require__(5);
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
        var StudentService = /** @class */ (function() {
            // ======================================
            // main nucleus function of the class
            // ======================================
            function StudentService() {
                this.students = __WEBPACK_IMPORTED_MODULE_0__studentList__["a" /* default */ ];
            }
            // =======================================
            // return all students list
            // =======================================
            StudentService.prototype.getAllStudents = function() {
                return this.students;
            };
            // =======================================
            // adding new students
            // =======================================
            StudentService.prototype.addNewStudent = function(st) {
                this.students.push(st);
            };
            StudentService.prototype.editStudent = function(data) {};
            return StudentService;
        }());
        /* harmony default export */
        __webpack_exports__["a"] = (StudentService);


        /***/
    }),
    /* 1 */
    /***/
    (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        // ================================
        // declaring student skull
        // ===============================
        var Student = /** @class */ (function() {
            function Student(name, roll) {
                this.name = name;
                this.roll = roll;
            }
            return Student;
        }());
        /* harmony default export */
        __webpack_exports__["a"] = (Student);


        /***/
    }),
    /* 2 */
    /***/
    (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function() { return DomActionsControllerModule; });
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__class_domActionHandler__ = __webpack_require__(6);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__class_recycleDom__ = __webpack_require__(7);
        /*
        File Name: Script.ts
        Description: This is the file for DOM action provider.Function of this file takes care
        of the dom elements actions and render data according to that
        Author: Naieem Mahmud Supto
        Version: 1.1
        */



        //----------- Declaring class ------------//
        var DomActionsControllerModule = /** @class */ (function() {
            // ======================================
            // Nucleus fo the class
            // ======================================
            function DomActionsControllerModule() {
                this.DomActionHandler = new __WEBPACK_IMPORTED_MODULE_0__class_domActionHandler__["a" /* DomActionHandler */ ]();
                this.recycleDom = new __WEBPACK_IMPORTED_MODULE_1__class_recycleDom__["a" /* recycleDom */ ]();
            }
            //----------- call to hander to digest the dom and rearrange all ------------//
            DomActionsControllerModule.prototype.callHandlerToDigest = function() {
                this.recycleDom.applyDigestLoop();
            };
            // ====================================
            // event listener for list items
            // ====================================
            DomActionsControllerModule.prototype.listEventListener = function() {
                var elem = document.querySelectorAll("div#stList ul li");
                var domActionHandler = new __WEBPACK_IMPORTED_MODULE_0__class_domActionHandler__["a" /* DomActionHandler */ ]();
                var recycleDom = this.recycleDom;
                var _loop_1 = function(index) {
                    var eventData = JSON.parse(elem[index].getAttribute('st-data'));
                    elem[index].addEventListener('click', function() {
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
            DomActionsControllerModule.prototype.clickEventsListener = function() {
                var elem = document.querySelectorAll("[st-click]");
                var domActionHandler = new __WEBPACK_IMPORTED_MODULE_0__class_domActionHandler__["a" /* DomActionHandler */ ]();
                var _loop_2 = function(index) {
                    elem[index].setAttribute('has-event', 'true');
                    var actionsFnc = elem[index].getAttribute('st-click');
                    elem[index].addEventListener('click', function(e) {
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
            DomActionsControllerModule.prototype.renderStudentList = function(studentList) {
                this.DomActionHandler.renderStudentList(studentList);
            };
            /**
             * Getting value form DOM according to the st-model attribute
             * @param obj
             */
            DomActionsControllerModule.prototype.getValueFromModel = function(models) {
                return this.DomActionHandler.getValueFromModel(models);
            };
            /**
             * Clearing form data after any action execution
             * @param {}
             */
            DomActionsControllerModule.prototype.clearFormData = function() {
                this.DomActionHandler.clearFormData();
            };
            return DomActionsControllerModule;
        }());



        /***/
    }),
    /* 3 */
    /***/
    (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__class_appController__ = __webpack_require__(4);
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

        var nuCleus = /** @class */ (function() {
            // ======================================
            // main nucleus function of the class
            // ======================================
            function nuCleus() {
                // new actions().renderStudentList();
                new __WEBPACK_IMPORTED_MODULE_0__class_appController__["a" /* default */ ]();
            }
            return nuCleus;
        }());
        new nuCleus();


        /***/
    }),
    /* 4 */
    /***/
    (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__class_studentService__ = __webpack_require__(0);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__class_domActionController__ = __webpack_require__(2);
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
        var Bootstrap = /** @class */ (function() {
            // ======================================
            // neucleus of the class
            // ======================================
            function Bootstrap() {
                this.studentService = new __WEBPACK_IMPORTED_MODULE_0__class_studentService__["a" /* default */ ]();
                this.actionController = new __WEBPACK_IMPORTED_MODULE_1__class_domActionController__["a" /* DomActionsControllerModule */ ]();
                this.renderStudentList();
            }
            //----------- Function declaration block ------------//
            // ======================================
            // rendering studentlist in dom element
            // ======================================
            Bootstrap.prototype.renderStudentList = function() {
                this.actionController.renderStudentList(this.getStudentList());
                //----------- defining clickevent for list elements ------------//
                this.actionController.listEventListener();
                //----------- clickevents for add new button ------------//
                this.actionController.clickEventsListener();
            };
            // ==============================
            // fetching studentlist
            // ==============================
            Bootstrap.prototype.getStudentList = function() {
                return this.studentService.getAllStudents();
            };
            /**
             * Clearing form data after any action execution
             * @param {}
             */
            Bootstrap.prototype.clearFormData = function() {
                this.actionController.clearFormData();
            };
            return Bootstrap;
        }());
        /* harmony default export */
        __webpack_exports__["a"] = (Bootstrap);


        /***/
    }),
    /* 5 */
    /***/
    (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__student__ = __webpack_require__(1);
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
            new __WEBPACK_IMPORTED_MODULE_0__student__["a" /* default */ ]('naieem1', 101),
            new __WEBPACK_IMPORTED_MODULE_0__student__["a" /* default */ ]('naieem2', 102),
            new __WEBPACK_IMPORTED_MODULE_0__student__["a" /* default */ ]('naieem3', 103),
            new __WEBPACK_IMPORTED_MODULE_0__student__["a" /* default */ ]('naieem4', 104),
            new __WEBPACK_IMPORTED_MODULE_0__student__["a" /* default */ ]('naieem5', 105)
        ];
        /* harmony default export */
        __webpack_exports__["a"] = (students);


        /***/
    }),
    /* 6 */
    /***/
    (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function() { return DomActionHandler; });
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__class_recycleDom__ = __webpack_require__(7);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__class_actions__ = __webpack_require__(8);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2__class_model__ = __webpack_require__(9);
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
        var DomActionHandler = /** @class */ (function() {
            function DomActionHandler() {
                this.model = new __WEBPACK_IMPORTED_MODULE_2__class_model__["a" /* default */ ]().getAllModel(); // array of dom element object to apply actions
            }
            /**
             * Rendering form field for updating and inserting data
             * @param {}
             */
            DomActionHandler.prototype.renderData = function(eventData) {
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
                        } else {
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
                    new __WEBPACK_IMPORTED_MODULE_0__class_recycleDom__["a" /* recycleDom */ ]().bindValue(eventData);
            };
            /**
             * Rendering student list in the DOM element
             * @param {}
             */
            DomActionHandler.prototype.renderStudentList = function(studentList) {
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
            DomActionHandler.prototype.executeEvent = function(actionName) {
                var actions = new __WEBPACK_IMPORTED_MODULE_1__class_actions__["a" /* Actions */ ]();
                eval("actions." + actionName);
                // actions[actionName]();
            };
            /**
             * Getting value form DOM according to the st-model attribute
             * @param obj
             */
            DomActionHandler.prototype.getValueFromModel = function(models) {
                var result = [];
                for (var index = 0; index < models.length; index++) {
                    var model_1 = models[index];
                    var obj = {};
                    var element = document.querySelector("[st-model='" + model_1 + "']");
                    var modelName = element.getAttribute('st-model');
                    var arrayIndex = void 0;
                    if (element.hasAttribute('st-index')) {
                        arrayIndex = element.getAttribute('st-index');
                    } else {
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
            DomActionHandler.prototype.cloneObject = function(obj) {
                if (obj === null || typeof obj !== "object") {
                    return obj;
                } else if (Array.isArray(obj)) {
                    var clonedArr_1;
                    obj.forEach(function(element) {
                        clonedArr_1.push(this.cloneObject(element));
                    });
                    return clonedArr_1;
                } else {
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
            DomActionHandler.prototype.clearFormData = function() {
                var formDom = document.getElementById("form");
                formDom.innerHTML = "";
            };
            return DomActionHandler;
        }());



        /***/
    }),
    /* 7 */
    /***/
    (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function() { return recycleDom; });
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__class_model__ = __webpack_require__(9);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__class_domActionHandler__ = __webpack_require__(6);
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
        var recycleDom = /** @class */ (function() {
            function recycleDom() {
                this.identifier = new __WEBPACK_IMPORTED_MODULE_0__class_model__["a" /* default */ ]().getAllModel(); // array of dom element object to apply actions
            }
            // =========================================================
            // binds value with input type with having model attribute
            // =========================================================
            recycleDom.prototype.bindValue = function(eventData) {
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
            recycleDom.prototype.applyDigestLoop = function() {
                var element = document.querySelectorAll("[st-click]");
                var domActionHandler = new __WEBPACK_IMPORTED_MODULE_1__class_domActionHandler__["a" /* DomActionHandler */ ]();
                var _loop_1 = function(index) {
                    element[index].removeEventListener('click', function() {});
                    var actionsFnc = element[index].getAttribute('st-click');
                    var hasEventListener = element[index].getAttribute('has-event');
                    if (!hasEventListener) {
                        element[index].setAttribute('has-event', 'true');
                        element[index].addEventListener('click', function(e) {
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
                    element_1.addEventListener('change', function(e) {
                        var el = e.target;
                    });
                }
            };
            return recycleDom;
        }());



        /***/
    }),
    /* 8 */
    /***/
    (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function() { return Actions; });
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__class_studentService__ = __webpack_require__(0);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__class_domActionController__ = __webpack_require__(2);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2__class_domActionHandler__ = __webpack_require__(6);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_3__class_appController__ = __webpack_require__(4);
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
        var Actions = /** @class */ (function() {
            //----------- functions of the class ------------//
            function Actions() {
                this.appController = new __WEBPACK_IMPORTED_MODULE_3__class_appController__["a" /* default */ ]();
                this.studentService = new __WEBPACK_IMPORTED_MODULE_0__class_studentService__["a" /* default */ ]();
                this.domActionController = new __WEBPACK_IMPORTED_MODULE_1__class_domActionController__["a" /* DomActionsControllerModule */ ]();
                this.domactionActionhandler = new __WEBPACK_IMPORTED_MODULE_2__class_domActionHandler__["a" /* DomActionHandler */ ]();
            }
            /**
             * This function is used for multiple purpose
             * 1.If it is a update call then update will be executed
             * 2.If it is an insert call then an insert will be executed
             */
            Actions.prototype.updateData = function() {
                var upsertData = this.domActionController.getValueFromModel(arguments);

                var obj = {};
                for (var i = 0; i < upsertData.length; i++) {
                    //----------- checking if it is an insert call ------------//
                    if (upsertData[i].index == '-1') {
                        obj = this.constructObject(upsertData);
                        this.studentService.students.push(obj);

                        break;
                    } else if (this.studentService.students[upsertData[i].index][upsertData[i].name] != upsertData[i].value) {
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
            Actions.prototype.addNew = function() {
                this.domactionActionhandler.renderData();
                //----------- digesting the dom ------------//
                this.domActionController.callHandlerToDigest();
            };
            // ===================================================
            // Constructing dom object to insert new student data
            // ===================================================
            Actions.prototype.constructObject = function(arr) {
                var result = {};
                for (var index = 0; index < arr.length; index++) {
                    result[arr[index].name] = arr[index].value;
                }
                return result;
            };
            return Actions;
        }());



        /***/
    }),
    /* 9 */
    /***/
    (function(module, __webpack_exports__, __webpack_require__) {

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
        var Model = /** @class */ (function() {
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
            Model.prototype.getAllModel = function() {
                return this.model;
            };
            return Model;
        }());
        /* harmony default export */
        __webpack_exports__["a"] = (Model);


        /***/
    })
    /******/
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjY1MGQ2YWJlYjUzY2Y3NjAyOTUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdC9jbGFzcy5zdHVkZW50U2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0L3N0dWRlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdC9jbGFzcy5kb21BY3Rpb25Db250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHQvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0L2NsYXNzLmFwcENvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdC9zdHVkZW50TGlzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0L2NsYXNzLmRvbUFjdGlvbkhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdC9jbGFzcy5yZWN5Y2xlRG9tLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHQvY2xhc3MuYWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0L2NsYXNzLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REE7QUFBQTs7Ozs7Ozs7O0dBU0c7QUFJcUMsQ0FBQywyQkFBMkI7QUFFcEUsNENBQTRDO0FBQzVDO0lBRUkseUNBQXlDO0lBQ3pDLHFDQUFxQztJQUNyQyx5Q0FBeUM7SUFDekM7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFDLDZEQUFXLENBQUM7SUFDOUIsQ0FBQztJQUNELDBDQUEwQztJQUMxQywyQkFBMkI7SUFDM0IsMENBQTBDO0lBQzFDLHVDQUFjLEdBQWQ7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBQ0QsMENBQTBDO0lBQzFDLHNCQUFzQjtJQUN0QiwwQ0FBMEM7SUFDMUMsc0NBQWEsR0FBYixVQUFjLEVBQVc7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFM0IsQ0FBQztJQUNELG9DQUFXLEdBQVgsVUFBWSxJQUFRO0lBRXBCLENBQUM7SUFDTCxxQkFBQztBQUFELENBQUM7Ozs7Ozs7OztBQ3hDRCxtQ0FBbUM7QUFDbkMsMEJBQTBCO0FBQzFCLGtDQUFrQztBQUNsQztJQUdJLGlCQUFZLElBQVcsRUFBQyxJQUFXO1FBQy9CLElBQUksQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDO1FBQ2YsSUFBSSxDQUFDLElBQUksR0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUFDO0FBQ0QseURBQWUsT0FBTyxFQUFDOzs7Ozs7Ozs7O0FDWHZCO0FBQUE7Ozs7OztFQU1FO0FBQ1c7QUFJK0M7QUFDWjtBQUNoRCw0Q0FBNEM7QUFDNUM7SUFLSSx5Q0FBeUM7SUFDekMsdUJBQXVCO0lBQ3ZCLHlDQUF5QztJQUN6QztRQUNJLElBQUksQ0FBQyxnQkFBZ0IsR0FBQyxJQUFJLGlGQUFnQixFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLFVBQVUsR0FBQyxJQUFJLHFFQUFVLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQsK0VBQStFO0lBQy9FLHdEQUFtQixHQUFuQjtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUNELHVDQUF1QztJQUN2QyxnQ0FBZ0M7SUFDaEMsdUNBQXVDO0lBQ3ZDLHNEQUFpQixHQUFqQjtRQUNJLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3pELElBQUksZ0JBQWdCLEdBQUMsSUFBSSxpRkFBZ0IsRUFBRyxDQUFDO1FBQzdDLElBQUksVUFBVSxHQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7Z0NBQ3RCLEtBQUs7WUFDVixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNoRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO2dCQUNsQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3ZDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUNqQyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFORCxHQUFHLENBQUMsQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFO29CQUF2QyxLQUFLO1NBTWI7SUFDTCxDQUFDO0lBRUQsdURBQXVEO0lBQ3ZELG9EQUFvRDtJQUNwRCx1REFBdUQ7SUFDdkQsd0RBQW1CLEdBQW5CO1FBQ0ksSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ25ELElBQUksZ0JBQWdCLEdBQUMsSUFBSSxpRkFBZ0IsRUFBRyxDQUFDO2dDQUNwQyxLQUFLO1lBQ1YsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUMsTUFBTSxDQUFDLENBQUM7WUFDN0MsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQztnQkFDN0MsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzlDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQU5ELEdBQUcsQ0FBQyxDQUFDLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUU7b0JBQXZDLEtBQUs7U0FNYjtJQUNMLENBQUM7SUFDRDs7O09BR0c7SUFDSCxzREFBaUIsR0FBakIsVUFBa0IsV0FBc0I7UUFDcEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRDs7O09BR0c7SUFDSCxzREFBaUIsR0FBakIsVUFBa0IsTUFBVTtRQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFDQTs7O01BR0U7SUFDSCxrREFBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFHTCxpQ0FBQztBQUFELENBQUM7Ozs7Ozs7Ozs7QUNyRkE7QUFBQTs7Ozs7Ozs7O0VBU0U7QUFFMkM7QUFDOUM7SUFFSSx5Q0FBeUM7SUFDekMscUNBQXFDO0lBQ3JDLHlDQUF5QztJQUN6QztRQUNJLHFDQUFxQztRQUNyQyxJQUFJLHFFQUFTLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUwsY0FBQztBQUFELENBQUM7QUFFRCxJQUFJLE9BQU8sRUFBRSxDQUFDOzs7Ozs7Ozs7QUN4QmQ7QUFBQTs7Ozs7Ozs7O0dBU0c7QUFDVTtBQUl1QztBQUNtQjtBQUV2RSw0Q0FBNEM7QUFDNUM7SUFNSSx5Q0FBeUM7SUFDekMsd0JBQXdCO0lBQ3hCLHlDQUF5QztJQUV6QztRQUNJLElBQUksQ0FBQyxjQUFjLEdBQUMsSUFBSSxzRUFBYyxFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLGdCQUFnQixHQUFDLElBQUksOEZBQTBCLEVBQUUsQ0FBQztRQUN2RCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsdURBQXVEO0lBR3ZELHlDQUF5QztJQUN6Qyx1Q0FBdUM7SUFDdkMseUNBQXlDO0lBRXpDLHFDQUFpQixHQUFqQjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztRQUMvRCxrRUFBa0U7UUFDbEUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDMUMsMkRBQTJEO1FBQzNELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFFRCxpQ0FBaUM7SUFDakMsdUJBQXVCO0lBQ3ZCLGlDQUFpQztJQUVqQyxrQ0FBYyxHQUFkO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUNEOzs7T0FHRztJQUNILGlDQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVMLGdCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7O0FDaEVEO0FBQUE7Ozs7Ozs7OztHQVNHO0FBRTZCO0FBQ2hDLElBQUksUUFBUSxHQUFDO0lBQ1QsSUFBSSx5REFBTyxDQUFDLFNBQVMsRUFBQyxHQUFHLENBQUM7SUFDMUIsSUFBSSx5REFBTyxDQUFDLFNBQVMsRUFBQyxHQUFHLENBQUM7SUFDMUIsSUFBSSx5REFBTyxDQUFDLFNBQVMsRUFBQyxHQUFHLENBQUM7SUFDMUIsSUFBSSx5REFBTyxDQUFDLFNBQVMsRUFBQyxHQUFHLENBQUM7SUFDMUIsSUFBSSx5REFBTyxDQUFDLFNBQVMsRUFBQyxHQUFHLENBQUM7Q0FDN0IsQ0FBQztBQUVGLHlEQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7QUNwQnhCO0FBQUE7Ozs7Ozs7OztHQVNHO0FBRUYsa0RBQWtEO0FBQ0g7QUFDUjtBQUVOO0FBR2xDLHNEQUFzRDtBQUN0RDtJQUVJO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBQyxJQUFJLDZEQUFLLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLCtDQUErQztJQUN6RixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gscUNBQVUsR0FBVixVQUFXLFNBQWM7UUFDckIsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLFdBQVcsR0FBUSxFQUFFLENBQUM7UUFDMUIseURBQXlEO1FBQ3pELElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFeEMsR0FBRyxDQUFDLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQztZQUMxRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQzlDLEdBQUcsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDO2dCQUN4RyxFQUFFLEVBQUMsQ0FBQyxTQUFTLENBQUMsRUFBQztvQkFDWCxHQUFHLElBQUksOEJBQThCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQy9JLENBQUM7Z0JBQUEsSUFBSSxFQUFDO29CQUNGLEdBQUcsSUFBSSwrQkFBK0IsR0FBQyxTQUFTLENBQUMsS0FBSyxHQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDOUssQ0FBQztnQkFDRCxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM3RCxDQUFDO1lBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNoRCxHQUFHLElBQUksdUJBQXVCLENBQUM7Z0JBQy9CLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUN0QyxHQUFHLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO2dCQUNwRSxDQUFDO2dCQUNELEdBQUcsSUFBSSx1QkFBdUIsR0FBRyxPQUFPLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsV0FBVztZQUN0RyxDQUFDO1FBQ0wsQ0FBQztRQUVELE9BQU8sQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ3hCOzs7V0FHRztRQUNILEVBQUUsRUFBQyxTQUFTLENBQUM7WUFDYixJQUFJLHFFQUFVLEVBQUUsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVEOzs7T0FHRztJQUNILDRDQUFpQixHQUFqQixVQUFrQixXQUFzQjtRQUNwQyxJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hELElBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUN2QixHQUFHLENBQUMsQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQztZQUN0RCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ25ELE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2xDLFNBQVMsSUFBSSxlQUFlLEdBQUcsT0FBTyxHQUFHLFdBQVcsR0FBRSxLQUFLLEdBQUcsU0FBUyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsUUFBUSxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1FBQ3JKLENBQUM7UUFDRCxTQUFTLElBQUksT0FBTyxDQUFDO1FBQ3JCLE9BQU8sQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsdUNBQVksR0FBWixVQUFhLFVBQWlCO1FBQzFCLElBQUksT0FBTyxHQUFDLElBQUksK0RBQU8sRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUIseUJBQXlCO0lBQzdCLENBQUM7SUFFRDs7O09BR0c7SUFDSCw0Q0FBaUIsR0FBakIsVUFBa0IsTUFBVTtRQUN4QixJQUFJLE1BQU0sR0FBSyxFQUFFLENBQUM7UUFDbEIsR0FBRyxDQUFDLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUM7WUFDakQsSUFBSSxPQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFCLElBQUksR0FBRyxHQUFLLEVBQUUsQ0FBQztZQUNmLElBQUksT0FBTyxHQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxHQUFDLE9BQUssR0FBQyxJQUFJLENBQXFCLENBQUM7WUFDakYsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNqRCxJQUFJLFVBQVUsU0FBTyxDQUFDO1lBQ3RCLEVBQUUsRUFBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUM7Z0JBQ2pDLFVBQVUsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2xELENBQUM7WUFBQSxJQUFJLEVBQUM7Z0JBQ0YsVUFBVSxHQUFDLElBQUksQ0FBQztZQUNwQixDQUFDO1lBQ0QsR0FBRyxHQUFDO2dCQUNBLEtBQUssRUFBQyxVQUFVO2dCQUNoQixJQUFJLEVBQUMsU0FBUztnQkFDZCxLQUFLLEVBQUMsT0FBTyxDQUFDLEtBQUs7YUFDdEI7WUFDRCxRQUFRLENBQUM7WUFDVCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLENBQUM7UUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRCw4Q0FBOEM7SUFDOUMsc0JBQXNCO0lBQ3RCLDhDQUE4QztJQUU5QyxzQ0FBVyxHQUFYLFVBQVksR0FBUTtRQUNoQixFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDMUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUNmLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsSUFBSSxXQUFlLENBQUM7WUFDcEIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLE9BQU87Z0JBQ3pCLFdBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM3QyxDQUFDLENBQUMsQ0FBQztZQUNILE1BQU0sQ0FBQyxXQUFTLENBQUM7UUFDckIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxTQUFTLEdBQUssRUFBRSxDQUFDO1lBQ3JCLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMzQixTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDbEQsQ0FBQztZQUNMLENBQUM7WUFDRCxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ3JCLENBQUM7SUFDTCxDQUFDO0lBQ0Q7OztPQUdHO0lBQ0gsd0NBQWEsR0FBYjtRQUNJLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUMsT0FBTyxDQUFDLFNBQVMsR0FBQyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVMLHVCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7QUN4SkQ7QUFBQTs7Ozs7Ozs7O0dBU0c7QUFFVztBQUVxQjtBQUMwQjtBQUM3RCxtRUFBbUU7QUFDbkUsaUVBQWlFO0FBQ2pFLG1FQUFtRTtBQUNuRTtJQUdJO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBQyxJQUFJLDZEQUFLLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLCtDQUErQztJQUM5RixDQUFDO0lBRUQsNERBQTREO0lBQzVELDBEQUEwRDtJQUMxRCw0REFBNEQ7SUFDNUQsOEJBQVMsR0FBVCxVQUFVLFNBQWE7UUFDbkIsMkRBQTJEO1FBQzNELEdBQUcsQ0FBQyxDQUFDLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUM7WUFDL0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNuRCxJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBcUIsQ0FBQztnQkFDOUgsSUFBSSxHQUFHLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDakUsUUFBUSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7WUFDekIsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsb0NBQWUsR0FBZjtRQUNJLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN0RCxJQUFJLGdCQUFnQixHQUFDLElBQUksaUZBQWdCLEVBQUcsQ0FBQztnQ0FDcEMsS0FBSztZQUNWLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUMsY0FBVyxDQUFDLENBQUMsQ0FBQztZQUN6RCxJQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3pELElBQUksZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUVoRSxFQUFFLEVBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFDO2dCQUNsQixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBQyxNQUFNLENBQUMsQ0FBQztnQkFDaEQsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUM7b0JBQ2hELGdCQUFnQixDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDOUMsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDO1FBQ0wsQ0FBQztRQVhELEdBQUcsQ0FBQyxDQUFDLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUU7b0JBQTFDLEtBQUs7U0FXYjtRQUVELElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3pELEdBQUcsQ0FBQyxDQUFDLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDO1lBQy9DLElBQUksU0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQXFCLENBQUM7WUFDOUMsU0FBTyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBQyxVQUFVLENBQUM7Z0JBQ3pDLElBQUksRUFBRSxHQUFDLENBQUMsQ0FBQyxNQUEwQixDQUFDO1lBQ3hDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztJQUNMLENBQUM7SUFDTCxpQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7QUNuRUQ7QUFBQTs7Ozs7Ozs7O0dBU0c7QUFJaUQsQ0FBQywyQkFBMkI7QUFDVDtBQUNYO0FBRVY7QUFFbEQsNENBQTRDO0FBQzVDO0lBUUksbURBQW1EO0lBQ25EO1FBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBQyxJQUFJLHFFQUFhLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsY0FBYyxHQUFDLElBQUksc0VBQWMsRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxtQkFBbUIsR0FBQyxJQUFJLDhGQUEwQixFQUFFLENBQUM7UUFDMUQsSUFBSSxDQUFDLHNCQUFzQixHQUFDLElBQUksaUZBQWdCLEVBQUU7SUFDdEQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCw0QkFBVSxHQUFWO1FBQ0ksSUFBSSxVQUFVLEdBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3JFLFFBQVEsQ0FBQztRQUNULElBQUksR0FBRyxHQUFLLEVBQUUsQ0FBQztRQUNmLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3pDLDZEQUE2RDtZQUM3RCxFQUFFLEVBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBRyxJQUFJLENBQUMsRUFBQztnQkFDM0IsR0FBRyxHQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdkMsUUFBUSxDQUFDO2dCQUNULEtBQUssQ0FBQztZQUNWLENBQUM7WUFDRCxJQUFJLENBQUMsRUFBRSxFQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFDO2dCQUNoRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDOUYsQ0FBQztRQUNMLENBQUM7UUFDRCxzREFBc0Q7UUFDdEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3ZDLG1GQUFtRjtRQUNuRixJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFFRDs7O09BR0c7SUFDSCx3QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLHNCQUFzQixDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3pDLDhDQUE4QztRQUM5QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUNuRCxDQUFDO0lBRUQsc0RBQXNEO0lBQ3RELHFEQUFxRDtJQUNyRCxzREFBc0Q7SUFDdEQsaUNBQWUsR0FBZixVQUFnQixHQUFTO1FBQ3JCLElBQUksTUFBTSxHQUFLLEVBQUUsQ0FBQztRQUNsQixHQUFHLENBQUMsQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQztZQUM5QyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDN0MsQ0FBQztRQUNELE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7QUNuRkQ7Ozs7Ozs7OztHQVNHO0FBRUY7SUFFSTtRQUNHLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxJQUFJLEVBQUUsQ0FBQztvQkFDQyxLQUFLLEVBQUUsTUFBTTtvQkFDYixLQUFLLEVBQUU7d0JBQ0gsSUFBSSxFQUFFLE1BQU07d0JBQ1osU0FBUyxFQUFFLE1BQU07cUJBQ3BCO2lCQUNKO2dCQUNEO29CQUNJLEtBQUssRUFBRSxNQUFNO29CQUNiLEtBQUssRUFBRTt3QkFDSCxJQUFJLEVBQUUsTUFBTTt3QkFDWixTQUFTLEVBQUUsTUFBTTtxQkFDcEI7aUJBQ0o7Z0JBQ0Q7b0JBQ0ksS0FBSyxFQUFFO3dCQUNILElBQUksRUFBRSxRQUFRO3dCQUNkLEtBQUssRUFBRSxNQUFNO3dCQUNiLE1BQU0sRUFBRSwyQkFBMkI7cUJBQ3RDO2lCQUNKO2FBQ0o7U0FDSixDQUFDO0lBQ0wsQ0FBQztJQUNELDJCQUFXLEdBQVg7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBQ0wsWUFBQztBQUFELENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYjY1MGQ2YWJlYjUzY2Y3NjAyOTUiLCIvKipcclxuICogUHJvamVjdCBOYW1lOiBUeXBlc2NyaXB0IHRvZG9cclxuICogRGVzY3JpcHRpb246IFN0dWRlbnQgc2VydmljZSB0byBpbnRlcmFjdCB3aXRoIGRhdGFcclxuICogQXV0aG9yOiBOYWllZW0gTWFobXVkIFN1cHRvXHJcbiAqIEF1dGhvciBVUkk6IGh0dHA6Ly9uYWllZW0ubWUvXHJcbiAqIFJlcG9zaXRvcnk6IGh0dHA6Ly9naXRodWIuY29tL25haWVlbS9cclxuICogVmVyc2lvbjogMS4yLjRcclxuICogTGljZW5zZTogR1BMMiBvciBsYXRlclxyXG4gKiBMaWNlbnNlIFVSSTogaHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9ncGwtMi4wLmh0bWxcclxuICovXHJcblxyXG4gLy8tLS0tLS0tLS0tLSBJbXBvcnRpbmcgZGVwZW5kZW5jaWVzIC0tLS0tLS0tLS0tLS8vXHJcbmltcG9ydCBJU3R1ZGVudCBmcm9tIFwiLi9zdHVkZW50XCI7IC8vIHN0dWRlbnRzIGJhY2tib25lXHJcbmltcG9ydCBzdHVkZW50TGlzdCBmcm9tICcuL3N0dWRlbnRMaXN0JzsgLy8gbGlzdCBvZiBpbml0aWFsIHN0dWRlbnRzXHJcblxyXG4vLy0tLS0tLS0tLS0tIERlY2xhcmluZyBjbGFzcyAtLS0tLS0tLS0tLS0vL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHVkZW50U2VydmljZXtcclxuICAgIHN0dWRlbnRzOmFueVtdO1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIG1haW4gbnVjbGV1cyBmdW5jdGlvbiBvZiB0aGUgY2xhc3NcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnN0dWRlbnRzPXN0dWRlbnRMaXN0O1xyXG4gICAgfVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyByZXR1cm4gYWxsIHN0dWRlbnRzIGxpc3RcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgZ2V0QWxsU3R1ZGVudHMoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdHVkZW50cztcclxuICAgIH1cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gYWRkaW5nIG5ldyBzdHVkZW50c1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBhZGROZXdTdHVkZW50KHN0OklTdHVkZW50KXtcclxuICAgICAgICB0aGlzLnN0dWRlbnRzLnB1c2goc3QpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgZWRpdFN0dWRlbnQoZGF0YTphbnkpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdC9jbGFzcy5zdHVkZW50U2VydmljZS50cyIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIGRlY2xhcmluZyBzdHVkZW50IHNrdWxsXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuY2xhc3MgU3R1ZGVudCB7XHJcbiAgICBuYW1lOnN0cmluZztcclxuICAgIHJvbGw6bnVtYmVyO1xyXG4gICAgY29uc3RydWN0b3IobmFtZTpzdHJpbmcscm9sbDpudW1iZXIpIHtcclxuICAgICAgICB0aGlzLm5hbWU9bmFtZTtcclxuICAgICAgICB0aGlzLnJvbGw9cm9sbDtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTdHVkZW50O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHQvc3R1ZGVudC50cyIsIi8qXG5GaWxlIE5hbWU6IFNjcmlwdC50c1xuRGVzY3JpcHRpb246IFRoaXMgaXMgdGhlIGZpbGUgZm9yIERPTSBhY3Rpb24gcHJvdmlkZXIuRnVuY3Rpb24gb2YgdGhpcyBmaWxlIHRha2VzIGNhcmVcbm9mIHRoZSBkb20gZWxlbWVudHMgYWN0aW9ucyBhbmQgcmVuZGVyIGRhdGEgYWNjb3JkaW5nIHRvIHRoYXRcbkF1dGhvcjogTmFpZWVtIE1haG11ZCBTdXB0b1xuVmVyc2lvbjogMS4xXG4qL1xuJ3VzZSBzdHJpY3QnO1xuXG4vLy0tLS0tLS0tLS0tIEltcG9ydGluZyBkZXBlbmRlbmNpZXMgLS0tLS0tLS0tLS0tLy9cbmltcG9ydCBJU3R1ZGVudCBmcm9tIFwiLi9zdHVkZW50XCI7XG5pbXBvcnQgeyBEb21BY3Rpb25IYW5kbGVyIH0gZnJvbSBcIi4vY2xhc3MuZG9tQWN0aW9uSGFuZGxlclwiO1xuaW1wb3J0IHsgcmVjeWNsZURvbSB9IGZyb20gXCIuL2NsYXNzLnJlY3ljbGVEb21cIjtcbi8vLS0tLS0tLS0tLS0gRGVjbGFyaW5nIGNsYXNzIC0tLS0tLS0tLS0tLS8vXG5leHBvcnQgY2xhc3MgRG9tQWN0aW9uc0NvbnRyb2xsZXJNb2R1bGUge1xuICAgIC8vLS0tLS0tLS0tLS0gdmFyaWFibGUgZGVjbGFyYXRpb24gYmxvY2sgLS0tLS0tLS0tLS0tLy9cblxuICAgIHByaXZhdGUgRG9tQWN0aW9uSGFuZGxlcjpEb21BY3Rpb25IYW5kbGVyO1xuICAgIHByaXZhdGUgcmVjeWNsZURvbTpyZWN5Y2xlRG9tO1xuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gTnVjbGV1cyBmbyB0aGUgY2xhc3NcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLkRvbUFjdGlvbkhhbmRsZXI9bmV3IERvbUFjdGlvbkhhbmRsZXIoKTtcbiAgICAgICAgdGhpcy5yZWN5Y2xlRG9tPW5ldyByZWN5Y2xlRG9tKCk7XG4gICAgfVxuXG4gICAgLy8tLS0tLS0tLS0tLSBjYWxsIHRvIGhhbmRlciB0byBkaWdlc3QgdGhlIGRvbSBhbmQgcmVhcnJhbmdlIGFsbCAtLS0tLS0tLS0tLS0vL1xuICAgIGNhbGxIYW5kbGVyVG9EaWdlc3QoKXtcbiAgICAgICAgdGhpcy5yZWN5Y2xlRG9tLmFwcGx5RGlnZXN0TG9vcCgpO1xuICAgIH1cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyBldmVudCBsaXN0ZW5lciBmb3IgbGlzdCBpdGVtc1xuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGxpc3RFdmVudExpc3RlbmVyKCkge1xuICAgICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXYjc3RMaXN0IHVsIGxpXCIpO1xuICAgICAgICBsZXQgZG9tQWN0aW9uSGFuZGxlcj1uZXcgRG9tQWN0aW9uSGFuZGxlciAoKTtcbiAgICAgICAgbGV0IHJlY3ljbGVEb209dGhpcy5yZWN5Y2xlRG9tO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZWxlbS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGxldCBldmVudERhdGEgPSBKU09OLnBhcnNlKGVsZW1baW5kZXhdLmdldEF0dHJpYnV0ZSgnc3QtZGF0YScpKTtcbiAgICAgICAgICAgIGVsZW1baW5kZXhdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGRvbUFjdGlvbkhhbmRsZXIucmVuZGVyRGF0YShldmVudERhdGEpO1xuICAgICAgICAgICAgICAgIHJlY3ljbGVEb20uYXBwbHlEaWdlc3RMb29wKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyBjbGljayBldmVudCBsaXN0ZW5lciBmb3IgZWxlbWVudHMgaGF2aW5nIHN0LWNsaWNrXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGNsaWNrRXZlbnRzTGlzdGVuZXIoKSB7ICAgICAgICAgICAgXG4gICAgICAgIGxldCBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltzdC1jbGlja11cIik7XG4gICAgICAgIGxldCBkb21BY3Rpb25IYW5kbGVyPW5ldyBEb21BY3Rpb25IYW5kbGVyICgpO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZWxlbS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGVsZW1baW5kZXhdLnNldEF0dHJpYnV0ZSgnaGFzLWV2ZW50JywndHJ1ZScpO1xuICAgICAgICAgICAgbGV0IGFjdGlvbnNGbmMgPSBlbGVtW2luZGV4XS5nZXRBdHRyaWJ1dGUoJ3N0LWNsaWNrJyk7XG4gICAgICAgICAgICBlbGVtW2luZGV4XS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7ICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZG9tQWN0aW9uSGFuZGxlci5leGVjdXRlRXZlbnQoYWN0aW9uc0ZuYyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW5kZXJpbmcgc3R1ZGVudCBsaXN0IGluIHRoZSBET00gZWxlbWVudFxuICAgICAqIEBwYXJhbSB7fVxuICAgICAqL1xuICAgIHJlbmRlclN0dWRlbnRMaXN0KHN0dWRlbnRMaXN0OklTdHVkZW50W10pe1xuICAgICAgICB0aGlzLkRvbUFjdGlvbkhhbmRsZXIucmVuZGVyU3R1ZGVudExpc3Qoc3R1ZGVudExpc3QpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHRpbmcgdmFsdWUgZm9ybSBET00gYWNjb3JkaW5nIHRvIHRoZSBzdC1tb2RlbCBhdHRyaWJ1dGVcbiAgICAgKiBAcGFyYW0gb2JqXG4gICAgICovXG4gICAgZ2V0VmFsdWVGcm9tTW9kZWwobW9kZWxzOmFueSl7XG4gICAgICAgIHJldHVybiB0aGlzLkRvbUFjdGlvbkhhbmRsZXIuZ2V0VmFsdWVGcm9tTW9kZWwobW9kZWxzKTtcbiAgICB9XG4gICAgIC8qKlxuICAgICAqIENsZWFyaW5nIGZvcm0gZGF0YSBhZnRlciBhbnkgYWN0aW9uIGV4ZWN1dGlvblxuICAgICAqIEBwYXJhbSB7fVxuICAgICAqL1xuICAgIGNsZWFyRm9ybURhdGEoKXtcbiAgICAgICAgdGhpcy5Eb21BY3Rpb25IYW5kbGVyLmNsZWFyRm9ybURhdGEoKTtcbiAgICB9XG4gICAgLy8tLS0tLS0tLS0tLSBGdW5jdGlvbiBkZWNsYXJhdGlvbiBibG9jayBlbmRzIC0tLS0tLS0tLS0tLS8vXG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0L2NsYXNzLmRvbUFjdGlvbkNvbnRyb2xsZXIudHMiLCIgLyoqXHJcbiAqIFByb2plY3QgTmFtZTogVHlwZXNjcmlwdCB0b2RvXHJcbiAqIERlc2NyaXB0aW9uOiBUaGlzIGlzIGEgdHlwZXNjcmlwdCB0b2RvIGFwcGxpY2F0aW9ucyBtYWluIGZpbGVcclxuICogQXV0aG9yOiBOYWllZW0gTWFobXVkIFN1cHRvXHJcbiAqIEF1dGhvciBVUkk6IGh0dHA6Ly9uYWllZW0ubWUvXHJcbiAqIFJlcG9zaXRvcnk6IGh0dHA6Ly9naXRodWIuY29tL25haWVlbS9cclxuICogVmVyc2lvbjogMS4yLjRcclxuICogTGljZW5zZTogR1BMMiBvciBsYXRlclxyXG4gKiBMaWNlbnNlIFVSSTogaHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9ncGwtMi4wLmh0bWxcclxuICovXHJcblxyXG5pbXBvcnQgYm9vdHN0cmFwIGZyb20gXCIuL2NsYXNzLmFwcENvbnRyb2xsZXJcIjtcclxuY2xhc3MgbnVDbGV1cyB7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIG1haW4gbnVjbGV1cyBmdW5jdGlvbiBvZiB0aGUgY2xhc3NcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLyBuZXcgYWN0aW9ucygpLnJlbmRlclN0dWRlbnRMaXN0KCk7XHJcbiAgICAgICAgbmV3IGJvb3RzdHJhcCgpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxubmV3IG51Q2xldXMoKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdC9tYWluLnRzIiwiLyoqXHJcbiAqIFByb2plY3QgTmFtZTogVHlwZXNjcmlwdCB0b2RvXHJcbiAqIERlc2NyaXB0aW9uOiBGaWxlIGZvciBET00gbWFudXB1bGF0aW9ucy5cclxuICogQXV0aG9yOiBOYWllZW0gTWFobXVkIFN1cHRvXHJcbiAqIEF1dGhvciBVUkk6IGh0dHA6Ly9uYWllZW0ubWUvXHJcbiAqIFJlcG9zaXRvcnk6IGh0dHA6Ly9naXRodWIuY29tL25haWVlbS9cclxuICogVmVyc2lvbjogMS4yLjRcclxuICogTGljZW5zZTogR1BMMiBvciBsYXRlclxyXG4gKiBMaWNlbnNlIFVSSTogaHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9ncGwtMi4wLmh0bWxcclxuICovXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbi8vLS0tLS0tLS0tLS0gSW1wb3J0aW5nIGRlcGVuZGVuY2llcyAtLS0tLS0tLS0tLS0vL1xyXG5pbXBvcnQgSXN0dWRlbnQgZnJvbSBcIi4vc3R1ZGVudFwiO1xyXG5pbXBvcnQgU3R1ZGVudFNlcnZpY2UgZnJvbSBcIi4vY2xhc3Muc3R1ZGVudFNlcnZpY2VcIjtcclxuaW1wb3J0IHtEb21BY3Rpb25zQ29udHJvbGxlck1vZHVsZX0gZnJvbSAnLi9jbGFzcy5kb21BY3Rpb25Db250cm9sbGVyJztcclxuXHJcbi8vLS0tLS0tLS0tLS0gRGVjbGFyaW5nIGNsYXNzIC0tLS0tLS0tLS0tLS8vXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb3RzdHJhcCB7XHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gbWFpbiB2YXJpYWJsZSBkZWNsYXJhdGlvbiBibG9ja1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHByaXZhdGUgc3R1ZGVudFNlcnZpY2U6U3R1ZGVudFNlcnZpY2U7XHJcbiAgICBwcml2YXRlIGFjdGlvbkNvbnRyb2xsZXI6RG9tQWN0aW9uc0NvbnRyb2xsZXJNb2R1bGU7XHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gbmV1Y2xldXMgb2YgdGhlIGNsYXNzXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnN0dWRlbnRTZXJ2aWNlPW5ldyBTdHVkZW50U2VydmljZSgpO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uQ29udHJvbGxlcj1uZXcgRG9tQWN0aW9uc0NvbnRyb2xsZXJNb2R1bGUoKTtcclxuICAgICAgICB0aGlzLnJlbmRlclN0dWRlbnRMaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLSBGdW5jdGlvbiBkZWNsYXJhdGlvbiBibG9jayAtLS0tLS0tLS0tLS0vL1xyXG5cclxuICAgIFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIHJlbmRlcmluZyBzdHVkZW50bGlzdCBpbiBkb20gZWxlbWVudFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIFxyXG4gICAgcmVuZGVyU3R1ZGVudExpc3QoKSB7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25Db250cm9sbGVyLnJlbmRlclN0dWRlbnRMaXN0KHRoaXMuZ2V0U3R1ZGVudExpc3QoKSk7XHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLSBkZWZpbmluZyBjbGlja2V2ZW50IGZvciBsaXN0IGVsZW1lbnRzIC0tLS0tLS0tLS0tLS8vXHJcbiAgICAgICAgdGhpcy5hY3Rpb25Db250cm9sbGVyLmxpc3RFdmVudExpc3RlbmVyKCk7XHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLSBjbGlja2V2ZW50cyBmb3IgYWRkIG5ldyBidXR0b24gLS0tLS0tLS0tLS0tLy9cclxuICAgICAgICB0aGlzLmFjdGlvbkNvbnRyb2xsZXIuY2xpY2tFdmVudHNMaXN0ZW5lcigpO1xyXG4gICAgfSAgICBcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIGZldGNoaW5nIHN0dWRlbnRsaXN0XHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIFxyXG4gICAgZ2V0U3R1ZGVudExpc3QoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdHVkZW50U2VydmljZS5nZXRBbGxTdHVkZW50cygpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDbGVhcmluZyBmb3JtIGRhdGEgYWZ0ZXIgYW55IGFjdGlvbiBleGVjdXRpb25cclxuICAgICAqIEBwYXJhbSB7fVxyXG4gICAgICovXHJcbiAgICBjbGVhckZvcm1EYXRhKCl7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25Db250cm9sbGVyLmNsZWFyRm9ybURhdGEoKTtcclxuICAgIH1cclxuICAgIC8vLS0tLS0tLS0tLS0gRW5kIG9mIGZ1bmN0aW9uIGRlY2xhcmF0aW9uIGJsb2NrIC0tLS0tLS0tLS0tLS8vXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0L2NsYXNzLmFwcENvbnRyb2xsZXIudHMiLCIvKipcclxuICogUHJvamVjdCBOYW1lOiBUeXBlc2NyaXB0IHRvZG9cclxuICogRGVzY3JpcHRpb246IER1bW15IGRhdGEgdG8gdXNlIHdoaWxlIGluaXRpYWwgc3RhZ2VcclxuICogQXV0aG9yOiBOYWllZW0gTWFobXVkIFN1cHRvXHJcbiAqIEF1dGhvciBVUkk6IGh0dHA6Ly9uYWllZW0ubWUvXHJcbiAqIFJlcG9zaXRvcnk6IGh0dHA6Ly9naXRodWIuY29tL25haWVlbS9cclxuICogVmVyc2lvbjogMS4yLjRcclxuICogTGljZW5zZTogR1BMMiBvciBsYXRlclxyXG4gKiBMaWNlbnNlIFVSSTogaHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9ncGwtMi4wLmh0bWxcclxuICovXHJcblxyXG5pbXBvcnQgc3R1ZGVudCBmcm9tIFwiLi9zdHVkZW50XCI7XHJcbmxldCBzdHVkZW50cz1bXHJcbiAgICBuZXcgc3R1ZGVudCgnbmFpZWVtMScsMTAxKSxcclxuICAgIG5ldyBzdHVkZW50KCduYWllZW0yJywxMDIpLFxyXG4gICAgbmV3IHN0dWRlbnQoJ25haWVlbTMnLDEwMyksXHJcbiAgICBuZXcgc3R1ZGVudCgnbmFpZWVtNCcsMTA0KSxcclxuICAgIG5ldyBzdHVkZW50KCduYWllZW01JywxMDUpXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdHVkZW50cztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0L3N0dWRlbnRMaXN0LnRzIiwiLyoqXHJcbiAqIFByb2plY3QgTmFtZTogVHlwZXNjcmlwdCB0b2RvXHJcbiAqIERlc2NyaXB0aW9uOiBUaGlzIG1vZHVsZSByZW5kZXJzIGRvbWUgZWxlbWVudCBvbiByZXF1ZXN0IGZyb20gYWN0aW9uIGNvbnRyb2xlclxyXG4gKiBBdXRob3I6IE5haWVlbSBNYWhtdWQgU3VwdG9cclxuICogQXV0aG9yIFVSSTogaHR0cDovL25haWVlbS5tZS9cclxuICogUmVwb3NpdG9yeTogaHR0cDovL2dpdGh1Yi5jb20vbmFpZWVtL1xyXG4gKiBWZXJzaW9uOiAxLjIuNFxyXG4gKiBMaWNlbnNlOiBHUEwyIG9yIGxhdGVyXHJcbiAqIExpY2Vuc2UgVVJJOiBodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2dwbC0yLjAuaHRtbFxyXG4gKi9cclxuXHJcbiAvLy0tLS0tLS0tLS0tIGltcG9ydG5nIGRlcGVuZGVuY2llcyAtLS0tLS0tLS0tLS0vL1xyXG5pbXBvcnQgeyByZWN5Y2xlRG9tIH0gZnJvbSBcIi4vY2xhc3MucmVjeWNsZURvbVwiO1xyXG5pbXBvcnQge0FjdGlvbnN9IGZyb20gXCIuL2NsYXNzLmFjdGlvbnNcIjtcclxuaW1wb3J0IElTdHVkZW50IGZyb20gXCIuL3N0dWRlbnRcIjtcclxuaW1wb3J0IG1vZGVsIGZyb20gXCIuL2NsYXNzLm1vZGVsXCI7XHJcblxyXG5cclxuLy8tLS0tLS0tLS0tLSBkZWNsYXJpbmcgY2xhc3MgZnVuY3Rpb25zIC0tLS0tLS0tLS0tLS8vXHJcbmV4cG9ydCBjbGFzcyBEb21BY3Rpb25IYW5kbGVyIHtcclxuICAgIHByaXZhdGUgbW9kZWw6YW55O1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlbD1uZXcgbW9kZWwoKS5nZXRBbGxNb2RlbCgpOyAvLyBhcnJheSBvZiBkb20gZWxlbWVudCBvYmplY3QgdG8gYXBwbHkgYWN0aW9uc1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVuZGVyaW5nIGZvcm0gZmllbGQgZm9yIHVwZGF0aW5nIGFuZCBpbnNlcnRpbmcgZGF0YVxyXG4gICAgICogQHBhcmFtIHt9XHJcbiAgICAgKi9cclxuICAgIHJlbmRlckRhdGEoZXZlbnREYXRhPzphbnkpe1xyXG4gICAgICAgIGxldCBmb3JtRG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtXCIpO1xyXG4gICAgICAgIGxldCB0eHQgPSAnJztcclxuICAgICAgICBsZXQgc3RvcmVNb2RlbHM6IGFueSA9IFtdO1xyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0gZGF0YSB0byBiZSBwYXNzZWQgaW4gdGhlIGRvbSAtLS0tLS0tLS0tLS0vL1xyXG4gICAgICAgIGxldCBkYXRhT2JqID0gSlNPTi5zdHJpbmdpZnkoZXZlbnREYXRhKTtcclxuICAgICAgICBcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5tb2RlbC5lZGl0Lmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tb2RlbC5lZGl0W2luZGV4XS5pbnB1dC50eXBlID09ICd0ZXh0Jykge1xyXG4gICAgICAgICAgICAgICAgdHh0ICs9ICc8bGFiZWwgZm9yPVwiJyArIHRoaXMubW9kZWwuZWRpdFtpbmRleF0ubGFiZWwgKyAnXCI+JyArIHRoaXMubW9kZWwuZWRpdFtpbmRleF0ubGFiZWwgKyAnPC9sYWJlbD4nO1xyXG4gICAgICAgICAgICAgICAgaWYoIWV2ZW50RGF0YSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdHh0ICs9ICc8aW5wdXQgdHlwZT1cInRleHRcIiBzdC1tb2RlbD0nICsgdGhpcy5tb2RlbC5lZGl0W2luZGV4XS5pbnB1dC5tb2RlbE5hbWUgKyAnIG5hbWU9XCInICsgdGhpcy5tb2RlbC5lZGl0W2luZGV4XS5pbnB1dC5tb2RlbE5hbWUgKyAnXCI+JztcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHR4dCArPSAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgc3QtaW5kZXg9XCInK2V2ZW50RGF0YS5pbmRleCsnXCIgc3QtbW9kZWw9JyArIHRoaXMubW9kZWwuZWRpdFtpbmRleF0uaW5wdXQubW9kZWxOYW1lICsgJyBuYW1lPVwiJyArIHRoaXMubW9kZWwuZWRpdFtpbmRleF0uaW5wdXQubW9kZWxOYW1lICsgJ1wiPic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzdG9yZU1vZGVscy5wdXNoKHRoaXMubW9kZWwuZWRpdFtpbmRleF0uaW5wdXQubW9kZWxOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5tb2RlbC5lZGl0W2luZGV4XS5pbnB1dC50eXBlID09ICdidXR0b24nKSB7XHJcbiAgICAgICAgICAgICAgICB0eHQgKz0gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiJztcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1vZGVsLmVkaXRbaW5kZXhdLmlucHV0LmFjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHR4dCArPSAnc3QtY2xpY2s9XCInICsgdGhpcy5tb2RlbC5lZGl0W2luZGV4XS5pbnB1dC5hY3Rpb24gKyAnXCInO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdHh0ICs9IFwiIHN0LWVsZW1lbnQgc3QtZGF0YT0nXCIgKyBkYXRhT2JqICsgXCInPlwiICsgdGhpcy5tb2RlbC5lZGl0W2luZGV4XS5pbnB1dC52YWx1ZSArIFwiPC9idXR0b24+XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBmb3JtRG9tLmlubmVySFRNTCA9IHR4dDtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBpbml0aWF0ZWQgbmV3IGNsYXNzIHdpdGggZXZlbnRkYXRhIGFuZCBhbGwgRE9NIGFycmF5IGVsZW1lbnRcclxuICAgICAgICAgKiByZXR1cm4ge31cclxuICAgICAgICAgKi9cclxuICAgICAgICBpZihldmVudERhdGEpXHJcbiAgICAgICAgbmV3IHJlY3ljbGVEb20oKS5iaW5kVmFsdWUoZXZlbnREYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbmRlcmluZyBzdHVkZW50IGxpc3QgaW4gdGhlIERPTSBlbGVtZW50XHJcbiAgICAgKiBAcGFyYW0ge31cclxuICAgICAqL1xyXG4gICAgcmVuZGVyU3R1ZGVudExpc3Qoc3R1ZGVudExpc3Q6SVN0dWRlbnRbXSl7XHJcbiAgICAgICAgbGV0IGxpc3REb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RMaXN0Jyk7XHJcbiAgICAgICAgbGV0IHN0TGlzdERvbSA9IFwiPHVsPlwiO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzdHVkZW50TGlzdC5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0IGRhdGFPYmogPSB0aGlzLmNsb25lT2JqZWN0KHN0dWRlbnRMaXN0W2luZGV4XSk7XHJcbiAgICAgICAgICAgIGRhdGFPYmouaW5kZXggPSBpbmRleDtcclxuICAgICAgICAgICAgZGF0YU9iaiA9IEpTT04uc3RyaW5naWZ5KGRhdGFPYmopO1xyXG4gICAgICAgICAgICBzdExpc3REb20gKz0gXCI8bGkgc3QtZGF0YT0nXCIgKyBkYXRhT2JqICsgXCInPmluZGV4OiBcIiAraW5kZXggKyBcIiBuYW1lOiBcIiArIHN0dWRlbnRMaXN0W2luZGV4XS5uYW1lICsgXCIgcm9sbDpcIiArIHN0dWRlbnRMaXN0W2luZGV4XS5yb2xsICsgXCI8L2xpPlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdExpc3REb20gKz0gXCI8L3VsPlwiO1xyXG4gICAgICAgIGxpc3REb20uaW5uZXJIVE1MID0gc3RMaXN0RG9tO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWFpbiBmdW5jdGlvbiB0byBleGVjdXRlIGFsbCBhY3Rpb25zIFxyXG4gICAgICogdGhhdCB3aWxsIGJlIHRyYW5zZmVycmVkIHRvIGNsYXNzLmFjdGlvbnMudHMgbW9kdWxlXHJcbiAgICAgKiBAcGFyYW0ge31cclxuICAgICAqL1xyXG4gICAgZXhlY3V0ZUV2ZW50KGFjdGlvbk5hbWU6c3RyaW5nKXtcclxuICAgICAgICBsZXQgYWN0aW9ucz1uZXcgQWN0aW9ucygpO1xyXG4gICAgICAgIGV2YWwoXCJhY3Rpb25zLlwiK2FjdGlvbk5hbWUpO1xyXG4gICAgICAgIC8vIGFjdGlvbnNbYWN0aW9uTmFtZV0oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHRpbmcgdmFsdWUgZm9ybSBET00gYWNjb3JkaW5nIHRvIHRoZSBzdC1tb2RlbCBhdHRyaWJ1dGVcclxuICAgICAqIEBwYXJhbSBvYmpcclxuICAgICAqL1xyXG4gICAgZ2V0VmFsdWVGcm9tTW9kZWwobW9kZWxzOmFueSl7XHJcbiAgICAgICAgbGV0IHJlc3VsdDphbnk9W107XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG1vZGVscy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0IG1vZGVsID0gbW9kZWxzW2luZGV4XTtcclxuICAgICAgICAgICAgbGV0IG9iajphbnk9e307XHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbc3QtbW9kZWw9J1wiK21vZGVsK1wiJ11cIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgICAgbGV0IG1vZGVsTmFtZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdzdC1tb2RlbCcpO1xyXG4gICAgICAgICAgICBsZXQgYXJyYXlJbmRleDpzdHJpbmc7XHJcbiAgICAgICAgICAgIGlmKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdzdC1pbmRleCcpKXtcclxuICAgICAgICAgICAgICAgIGFycmF5SW5kZXggPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnc3QtaW5kZXgnKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBhcnJheUluZGV4PVwiLTFcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvYmo9e1xyXG4gICAgICAgICAgICAgICAgaW5kZXg6YXJyYXlJbmRleCxcclxuICAgICAgICAgICAgICAgIG5hbWU6bW9kZWxOYW1lLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6ZWxlbWVudC52YWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChvYmopO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIGRlZXAgY2xvbmluZyBvYmplY3RcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIFxyXG4gICAgY2xvbmVPYmplY3Qob2JqOiBhbnkpIHtcclxuICAgICAgICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogIT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9iajtcclxuICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xyXG4gICAgICAgICAgICBsZXQgY2xvbmVkQXJyOmFueVtdO1xyXG4gICAgICAgICAgICBvYmouZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgY2xvbmVkQXJyLnB1c2godGhpcy5jbG9uZU9iamVjdChlbGVtZW50KSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBjbG9uZWRBcnI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGNsb25lZE9iajphbnk9e307XHJcbiAgICAgICAgICAgIGZvciAodmFyIHByb3AgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KHByb3ApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvbmVkT2JqW3Byb3BdID0gdGhpcy5jbG9uZU9iamVjdChvYmpbcHJvcF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjbG9uZWRPYmo7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDbGVhcmluZyBmb3JtIGRhdGEgYWZ0ZXIgYW55IGFjdGlvbiBleGVjdXRpb25cclxuICAgICAqIEBwYXJhbSB7fVxyXG4gICAgICovXHJcbiAgICBjbGVhckZvcm1EYXRhKCl7XHJcbiAgICAgICAgbGV0IGZvcm1Eb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1cIik7XHJcbiAgICAgICAgZm9ybURvbS5pbm5lckhUTUw9XCJcIjtcclxuICAgIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0L2NsYXNzLmRvbUFjdGlvbkhhbmRsZXIudHMiLCIvKipcclxuICogUHJvamVjdCBOYW1lOiBUeXBlc2NyaXB0IHRvZG9cclxuICogRGVzY3JpcHRpb246IERPTSBkaWdlc3QgY2xhc3MuXHJcbiAqIEF1dGhvcjogTmFpZWVtIE1haG11ZCBTdXB0b1xyXG4gKiBBdXRob3IgVVJJOiBodHRwOi8vbmFpZWVtLm1lL1xyXG4gKiBSZXBvc2l0b3J5OiBodHRwOi8vZ2l0aHViLmNvbS9uYWllZW0vXHJcbiAqIFZlcnNpb246IDEuMi40XHJcbiAqIExpY2Vuc2U6IEdQTDIgb3IgbGF0ZXJcclxuICogTGljZW5zZSBVUkk6IGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvZ3BsLTIuMC5odG1sXHJcbiAqL1xyXG5cclxuICd1c2Ugc3RyaWN0JztcclxuXHJcbiBpbXBvcnQgbW9kZWwgZnJvbSBcIi4vY2xhc3MubW9kZWxcIjtcclxuIGltcG9ydCB7IERvbUFjdGlvbkhhbmRsZXIgfSBmcm9tIFwiLi9jbGFzcy5kb21BY3Rpb25IYW5kbGVyXCI7XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUXVlcnkgZm9yIERPTSBlbGVtZW50Lk1vZGlmaWVzIGFuZCBiaW5kIGRhdGEgd2l0aCBkb20gZWxlbWVudC5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgY2xhc3MgcmVjeWNsZURvbSB7XHJcbiAgICBpZGVudGlmaWVyOiBhbnk7XHJcbiAgICBEb21BY3Rpb25IYW5kbGVyOkRvbUFjdGlvbkhhbmRsZXI7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmlkZW50aWZpZXI9bmV3IG1vZGVsKCkuZ2V0QWxsTW9kZWwoKTsgLy8gYXJyYXkgb2YgZG9tIGVsZW1lbnQgb2JqZWN0IHRvIGFwcGx5IGFjdGlvbnNcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIGJpbmRzIHZhbHVlIHdpdGggaW5wdXQgdHlwZSB3aXRoIGhhdmluZyBtb2RlbCBhdHRyaWJ1dGVcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgYmluZFZhbHVlKGV2ZW50RGF0YTphbnkpIHtcclxuICAgICAgICAvLy0tLS0tLS0tLS0tIGJpbmdkaW5nIHZhbHVlIGZvciBlZGl0ZWQgZGF0YSAtLS0tLS0tLS0tLS0vL1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmlkZW50aWZpZXIuZWRpdC5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaWRlbnRpZmllci5lZGl0W2luZGV4XS5pbnB1dC50eXBlID09ICd0ZXh0Jykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJpbmRFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW3N0LW1vZGVsPVwiJyArIHRoaXMuaWRlbnRpZmllci5lZGl0W2luZGV4XS5pbnB1dC5tb2RlbE5hbWUgKyAnXCJdJykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgICAgICAgIGxldCB2YWwgPSBldmVudERhdGFbdGhpcy5pZGVudGlmaWVyLmVkaXRbaW5kZXhdLmlucHV0Lm1vZGVsTmFtZV07XHJcbiAgICAgICAgICAgICAgICBiaW5kRWxlbS52YWx1ZSA9IHZhbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEV4ZWN1dGluZyBkaWdlc3QgYWN0aW9uIHRvIGxvcHAgdGhyb3VnaCB0aGUgd2hvbGUgRE9NIGFuZCBhcHBseSBjaGFuZ2VzXHJcbiAgICAgKiBAcGFyYW0ge31cclxuICAgICAqL1xyXG4gICAgYXBwbHlEaWdlc3RMb29wKCl7XHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW3N0LWNsaWNrXVwiKTtcclxuICAgICAgICBsZXQgZG9tQWN0aW9uSGFuZGxlcj1uZXcgRG9tQWN0aW9uSGFuZGxlciAoKTtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZWxlbWVudC5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgZWxlbWVudFtpbmRleF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7fSk7XHJcbiAgICAgICAgICAgIGxldCBhY3Rpb25zRm5jID0gZWxlbWVudFtpbmRleF0uZ2V0QXR0cmlidXRlKCdzdC1jbGljaycpO1xyXG4gICAgICAgICAgICBsZXQgaGFzRXZlbnRMaXN0ZW5lciA9IGVsZW1lbnRbaW5kZXhdLmdldEF0dHJpYnV0ZSgnaGFzLWV2ZW50Jyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZighaGFzRXZlbnRMaXN0ZW5lcil7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50W2luZGV4XS5zZXRBdHRyaWJ1dGUoJ2hhcy1ldmVudCcsJ3RydWUnKTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRbaW5kZXhdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb21BY3Rpb25IYW5kbGVyLmV4ZWN1dGVFdmVudChhY3Rpb25zRm5jKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFt0eXBlPXRleHRdXCIpO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBlbGVtLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IGVsZW1baW5kZXhdIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJyxmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGVsPWUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTsgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0L2NsYXNzLnJlY3ljbGVEb20udHMiLCIvKipcclxuICogUHJvamVjdCBOYW1lOiBUeXBlc2NyaXB0IHRvZG9cclxuICogRGVzY3JpcHRpb246IEZpbGUgdG8gYWRkIGV2ZW50bGlzdGVuZXIgdG8gZG9tIGVsZW1lbnRzXHJcbiAqIEF1dGhvcjogTmFpZWVtIE1haG11ZCBTdXB0b1xyXG4gKiBBdXRob3IgVVJJOiBodHRwOi8vbmFpZWVtLm1lL1xyXG4gKiBSZXBvc2l0b3J5OiBodHRwOi8vZ2l0aHViLmNvbS9uYWllZW0vXHJcbiAqIFZlcnNpb246IDEuMi40XHJcbiAqIExpY2Vuc2U6IEdQTDIgb3IgbGF0ZXJcclxuICogTGljZW5zZSBVUkk6IGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvZ3BsLTIuMC5odG1sXHJcbiAqL1xyXG5cclxuLy8tLS0tLS0tLS0tLSBJbXBvcnRpbmcgZGVwZW5kZW5jaWVzIC0tLS0tLS0tLS0tLS8vXHJcbmltcG9ydCBJc3R1ZGVudCBmcm9tICcuL3N0dWRlbnQnOyAvLyBzdHVkZW50IGVudW1cclxuaW1wb3J0IFN0dWRlbnRTZXJ2aWNlIGZyb20gJy4vY2xhc3Muc3R1ZGVudFNlcnZpY2UnOyAvLyBsaXN0IG9mIGluaXRpYWwgc3R1ZGVudHNcclxuaW1wb3J0IHtEb21BY3Rpb25zQ29udHJvbGxlck1vZHVsZX0gZnJvbSAnLi9jbGFzcy5kb21BY3Rpb25Db250cm9sbGVyJztcclxuaW1wb3J0IHsgRG9tQWN0aW9uSGFuZGxlciB9IGZyb20gJy4vY2xhc3MuZG9tQWN0aW9uSGFuZGxlcic7XHJcblxyXG5pbXBvcnQgYXBwQ29udHJvbGxlciBmcm9tIFwiLi9jbGFzcy5hcHBDb250cm9sbGVyXCI7XHJcblxyXG4vLy0tLS0tLS0tLS0tIGRlY2xhcmluZyBjbGFzcyAtLS0tLS0tLS0tLS0vL1xyXG5leHBvcnQgIGNsYXNzIEFjdGlvbnMge1xyXG4gICAgLy8tLS0tLS0tLS0tLSB2YXJpYWJsZSBkZWNsYXJhdGlvbiBibG9jayAtLS0tLS0tLS0tLS0vL1xyXG4gICAgcHJpdmF0ZSBzdHVkZW50U2VydmljZTpTdHVkZW50U2VydmljZTtcclxuICAgIHByaXZhdGUgc3R1ZGVudExpc3Q6SXN0dWRlbnRbXTtcclxuICAgIHByaXZhdGUgZG9tQWN0aW9uQ29udHJvbGxlcjpEb21BY3Rpb25zQ29udHJvbGxlck1vZHVsZTtcclxuICAgIHByaXZhdGUgZG9tYWN0aW9uQWN0aW9uaGFuZGxlcjpEb21BY3Rpb25IYW5kbGVyO1xyXG4gICAgcHJpdmF0ZSBhcHBDb250cm9sbGVyOmFwcENvbnRyb2xsZXI7XHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLSBmdW5jdGlvbnMgb2YgdGhlIGNsYXNzIC0tLS0tLS0tLS0tLS8vXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmFwcENvbnRyb2xsZXI9bmV3IGFwcENvbnRyb2xsZXIoKTtcclxuICAgICAgICB0aGlzLnN0dWRlbnRTZXJ2aWNlPW5ldyBTdHVkZW50U2VydmljZSgpO1xyXG4gICAgICAgIHRoaXMuZG9tQWN0aW9uQ29udHJvbGxlcj1uZXcgRG9tQWN0aW9uc0NvbnRyb2xsZXJNb2R1bGUoKTtcclxuICAgICAgICB0aGlzLmRvbWFjdGlvbkFjdGlvbmhhbmRsZXI9bmV3IERvbUFjdGlvbkhhbmRsZXIoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIGZvciBtdWx0aXBsZSBwdXJwb3NlXHJcbiAgICAgKiAxLklmIGl0IGlzIGEgdXBkYXRlIGNhbGwgdGhlbiB1cGRhdGUgd2lsbCBiZSBleGVjdXRlZFxyXG4gICAgICogMi5JZiBpdCBpcyBhbiBpbnNlcnQgY2FsbCB0aGVuIGFuIGluc2VydCB3aWxsIGJlIGV4ZWN1dGVkXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZURhdGEoKXtcclxuICAgICAgICBsZXQgdXBzZXJ0RGF0YT10aGlzLmRvbUFjdGlvbkNvbnRyb2xsZXIuZ2V0VmFsdWVGcm9tTW9kZWwoYXJndW1lbnRzKTtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICBsZXQgb2JqOmFueT17fTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVwc2VydERhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLSBjaGVja2luZyBpZiBpdCBpcyBhbiBpbnNlcnQgY2FsbCAtLS0tLS0tLS0tLS0vL1xyXG4gICAgICAgICAgICBpZih1cHNlcnREYXRhW2ldLmluZGV4ID09Jy0xJyl7XHJcbiAgICAgICAgICAgICAgICBvYmo9dGhpcy5jb25zdHJ1Y3RPYmplY3QodXBzZXJ0RGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0dWRlbnRTZXJ2aWNlLnN0dWRlbnRzLnB1c2gob2JqKTtcclxuICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZih0aGlzLnN0dWRlbnRTZXJ2aWNlLnN0dWRlbnRzW3Vwc2VydERhdGFbaV0uaW5kZXhdW3Vwc2VydERhdGFbaV0ubmFtZV0hPXVwc2VydERhdGFbaV0udmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdHVkZW50U2VydmljZS5zdHVkZW50c1t1cHNlcnREYXRhW2ldLmluZGV4XVt1cHNlcnREYXRhW2ldLm5hbWVdPXVwc2VydERhdGFbaV0udmFsdWU7XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0gcmVuZGVyaW5nIGxpc3Qgb25jZSBhZ2FpbiAtLS0tLS0tLS0tLS0vL1xyXG4gICAgICAgIHRoaXMuYXBwQ29udHJvbGxlci5yZW5kZXJTdHVkZW50TGlzdCgpO1xyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0gY2xlYXJpbmcgdGhlIGZvcm0gYWZ0ZXIgZnVuY3Rpb24gaXMgZmluaXNoZWQgZXhlY3V0aW9uIC0tLS0tLS0tLS0tLS8vXHJcbiAgICAgICAgdGhpcy5hcHBDb250cm9sbGVyLmNsZWFyRm9ybURhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aGVuIGFkZCBuZXcgYnV0dG9uIGlzIGNhbGxlZFxyXG4gICAgICogQHBhcmFtIHt9XHJcbiAgICAgKi9cclxuICAgIGFkZE5ldygpe1xyXG4gICAgICAgIHRoaXMuZG9tYWN0aW9uQWN0aW9uaGFuZGxlci5yZW5kZXJEYXRhKCk7XHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLSBkaWdlc3RpbmcgdGhlIGRvbSAtLS0tLS0tLS0tLS0vL1xyXG4gICAgICAgIHRoaXMuZG9tQWN0aW9uQ29udHJvbGxlci5jYWxsSGFuZGxlclRvRGlnZXN0KCk7ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIENvbnN0cnVjdGluZyBkb20gb2JqZWN0IHRvIGluc2VydCBuZXcgc3R1ZGVudCBkYXRhXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0cnVjdE9iamVjdChhcnI6YW55W10pe1xyXG4gICAgICAgIGxldCByZXN1bHQ6YW55PXt9O1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnIubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdFthcnJbaW5kZXhdLm5hbWVdPWFycltpbmRleF0udmFsdWU7ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0L2NsYXNzLmFjdGlvbnMudHMiLCIvKipcclxuICogUHJvamVjdCBOYW1lOiBUeXBlc2NyaXB0IHRvZG9cclxuICogRGVzY3JpcHRpb246IFRoaXMgZmlsZSByZXR1cm5zIGlucHUgdHlwZSBtb2RlbHNcclxuICogQXV0aG9yOiBOYWllZW0gTWFobXVkIFN1cHRvXHJcbiAqIEF1dGhvciBVUkk6IGh0dHA6Ly9uYWllZW0ubWUvXHJcbiAqIFJlcG9zaXRvcnk6IGh0dHA6Ly9naXRodWIuY29tL25haWVlbS9cclxuICogVmVyc2lvbjogMS4yLjRcclxuICogTGljZW5zZTogR1BMMiBvciBsYXRlclxyXG4gKiBMaWNlbnNlIFVSSTogaHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9ncGwtMi4wLmh0bWxcclxuICovXHJcblxyXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kZWwge1xyXG4gICAgIHByaXZhdGUgbW9kZWw6YW55O1xyXG4gICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubW9kZWwgPSB7XHJcbiAgICAgICAgICAgIGVkaXQ6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiUk9MTFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWxOYW1lOiAncm9sbCdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIk5BTUVcIixcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsTmFtZTogJ25hbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYnV0dG9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdzYXZlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcInVwZGF0ZURhdGEoJ3JvbGwnLCduYW1lJylcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH07XHJcbiAgICAgfVxyXG4gICAgIGdldEFsbE1vZGVsKCl7XHJcbiAgICAgICAgIHJldHVybiB0aGlzLm1vZGVsO1xyXG4gICAgIH1cclxuIH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0L2NsYXNzLm1vZGVsLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==