/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/displayData.js":
/*!****************************!*\
  !*** ./src/displayData.js ***!
  \****************************/
/***/ ((module) => {

eval("\n\nlet championId = 'KICK IT BACK'\n\nconst sendToChampionPage = event => {\n\n    \n    console.log('RICE', event)\n    championId = event.path[3].id\n    console.log(championId)\n    \n}\n\n// setTimeout(() => {\n//     document.body.style.background = 'red'\n//     console.log(championId)\n// }, 1000)\n\n// setInterval(() => console.log(championId), 1000)\n\n\nmodule.exports = championId\n\n\n//# sourceURL=webpack://apiproject/./src/displayData.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _displayData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayData */ \"./src/displayData.js\");\n/* harmony import */ var _displayData__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_displayData__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n\n// setInterval(() => console.log(championId), 1000)\n\nconst loadGridDivs = () => {\n    const selectParent = document.querySelector('.contain');\n    const getChampionNames = fetch('https://league-of-legends-stats.p.rapidapi.com/champions', {\n        'method': 'GET',\n        'headers': {\n            \"x-rapidapi-host\": \"league-of-legends-stats.p.rapidapi.com\",\n\t\t    \"x-rapidapi-key\": \"d5c7b459b7msh3709ab41febef03p1d7c75jsn6c10d4ece44d\"\n        }\n    })\n    // const responses = [\n    //     fetch(`https://league-of-legends-champions.p.rapidapi.com/champions/en-us?page=0&size=10`, {\n    //         'method': 'GET',\n    //         'headers': {\n    //             \"x-rapidapi-host\": \"league-of-legends-champions.p.rapidapi.com\",\n    //             \"x-rapidapi-key\": \"d5c7b459b7msh3709ab41febef03p1d7c75jsn6c10d4ece44d\"\n    //         }\n    //     }),\n    //     fetch(`https://league-of-legends-champions.p.rapidapi.com/champions/en-us?page=1&size=10`, {\n    //         'method': 'GET',\n    //         'headers': {\n    //             \"x-rapidapi-host\": \"league-of-legends-champions.p.rapidapi.com\",\n    //             \"x-rapidapi-key\": \"d5c7b459b7msh3709ab41febef03p1d7c75jsn6c10d4ece44d\"\n    //         }\n    //     }),\n    //     fetch(`https://league-of-legends-champions.p.rapidapi.com/champions/en-us?page=2&size=10`, {\n    //         'method': 'GET',\n    //         'headers': {\n    //             \"x-rapidapi-host\": \"league-of-legends-champions.p.rapidapi.com\",\n    //             \"x-rapidapi-key\": \"d5c7b459b7msh3709ab41febef03p1d7c75jsn6c10d4ece44d\"\n    //         }\n    //     }),\n    // ]\n    // const requests = responses.map(response => response.then(getData => getData.json()))\n    // const getChampionImages = Promise.all(requests)\n    \n    for (let i = 0; i < 159; i++) {\n        const cardDiv = document.createElement('div');\n        const cardImg = document.createElement('div');\n        const divOverlay = document.createElement('div');\n        const img = document.createElement('img');\n        const p = document.createElement('p');\n        const a = document.createElement('a');\n\n        selectParent.appendChild(a)\n        a.appendChild(cardDiv);\n        cardDiv.appendChild(cardImg);\n        cardImg.appendChild(img);\n        cardImg.appendChild(divOverlay);\n        divOverlay.appendChild(p);\n\n        a.href = './Champions/Champion.html'\n        a.id = 'CHICKEN'\n        cardDiv.classList.add('card');\n        cardImg.classList.add('card-img');\n        divOverlay.classList.add('img-overlay');\n        img.classList.add('imgs');\n\n        a.addEventListener('click', _displayData__WEBPACK_IMPORTED_MODULE_0__.sendToChampionPage)\n    }\n    \n    // getChampionNames.then(response => response.json())\n    // .then(data => {\n    //     const getPTags = document.querySelectorAll('p');\n    //     const aTags = document.querySelectorAll('a')\n\n    //     for (let i = 0; i < data.champ_names.length; i++) {\n    //          if (data.champ_names[i] != 'Kled & Skaarl' && data.champ_names[i] != 'Mega Gnar') {\n    //             getPTags[i].innerText = data.champ_names[i] \n    //             aTags[i].id = getPTags[i].innerText\n\n    //         }\n    //         else getPTags[i].parentElement.parentElement.parentElement.remove()\n    //     }\n    // })\n\n    // getChampionImages\n    // .then(data => {\n    //     console.log(data, data[0])\n    //     const getPTags = document.querySelectorAll('p');\n    //     let index = 0;\n\n    //     const runFirstPromise = (getIndex) => {\n    //         for (let j = 0; j < getPTags.length; j++) {\n    //             for (let i = 0; i < data[getIndex].champions.length; i++) {\n    //                 // getImgTags[i].src = data.champions[champion].node.champion.profile_image.url\n    //                 if (data[getIndex].champions[i].node.champion.profile_image === null) {\n    //                     continue\n    //                 } else if (getPTags[j].innerText == data[getIndex].champions[i].node.champion_name) {\n    //                     console.log('Check all', getPTags[j], data[getIndex].champions[i].node.champion_name)\n    //                     getPTags[j].parentElement.parentElement.querySelector('img').src = data[getIndex].champions[i].node.champion.profile_image.url\n    //                 }\n    //             }\n    //         }\n    //     }\n    //     while (index <= 2) {\n    //         runFirstPromise(index)\n    //         index++\n    //     }\n    // }).catch(error => console.log(error))\n\n}\nconst gatherData = (index) => {\n    // const getChampionData = fetch(`https://league-of-legends-champions.p.rapidapi.com/champions/%7Blang%7D/${index.path[3].id}`, {\n    //     \"method\": \"GET\",\n    //     \"headers\": {\n    //         \"x-rapidapi-host\": \"league-of-legends-champions.p.rapidapi.com\",\n    //         \"x-rapidapi-key\": \"d5c7b459b7msh3709ab41febef03p1d7c75jsn6c10d4ece44d\"\n    //     }\n    // }).then(response => response.json())\n\n    return index.path[3].id\n}\n\n// function sendToChampionPage (event) {\n//     championId = event.path[3].id\n    \n// }\n\n\nwindow.addEventListener('load', loadGridDivs)\n\n\n\n\n//# sourceURL=webpack://apiproject/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;