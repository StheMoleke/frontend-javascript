/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/***/ (() => {

eval("{\n// Interfaces for Director and Teacher\n// Director class\nclass Director {\n    workFromHome() {\n        return \"Working from home\";\n    }\n    getCoffeeBreak() {\n        return \"Getting a coffee break\";\n    }\n    workDirectorTasks() {\n        return \"Getting to director tasks\";\n    }\n}\n// Teacher class\nclass Teacher {\n    workFromHome() {\n        return \"Cannot work from home\";\n    }\n    getCoffeeBreak() {\n        return \"Cannot have a break\";\n    }\n    workTeacherTasks() {\n        return \"Getting to work\";\n    }\n}\n// Function to create an employee based on salary\nfunction createEmployee(salary) {\n    if (typeof salary === \"number\" && salary < 500) {\n        return new Teacher();\n    }\n    else {\n        return new Director();\n    }\n}\n// Type predicate to check if employee is Director\nfunction isDirector(employee) {\n    return employee.workDirectorTasks !== undefined;\n}\n// Function to execute work depending on employee type\nfunction executeWork(employee) {\n    if (isDirector(employee)) {\n        return employee.workDirectorTasks();\n    }\n    else {\n        return employee.workTeacherTasks();\n    }\n}\n// Function to teach a class based on Subjects\nfunction teachClass(todayClass) {\n    if (todayClass === \"Math\") {\n        return \"Teaching Math\";\n    }\n    else if (todayClass === \"History\") {\n        return \"Teaching History\";\n    }\n    // Optional fallback (should never be hit because of the type)\n    return \"Unknown class\";\n}\n// Test logs to verify everything works\nconsole.log(createEmployee(200)); // Should create Teacher\nconsole.log(createEmployee(1000)); // Should create Director\nconsole.log(executeWork(createEmployee(200))); // Getting to work\nconsole.log(executeWork(createEmployee(1000))); // Getting to director tasks\nconsole.log(teachClass(\"Math\")); // Teaching Math\nconsole.log(teachClass(\"History\")); // Teaching History\n\n\n//# sourceURL=webpack://task_0/./js/main.ts?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/main.ts"]();
/******/ 	
/******/ })()
;