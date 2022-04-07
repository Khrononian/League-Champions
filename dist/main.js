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

/***/ "./src/displayData.js":
/*!****************************!*\
  !*** ./src/displayData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ sendToChampionPage),\n/* harmony export */   \"skinBtnScroll\": () => (/* binding */ skinBtnScroll)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nconst champBtn = document.querySelector('.champ-btn')\nconst header = document.querySelector('header');\nconst nav = document.querySelector('nav');\nconst cards = document.querySelector('.champion-cards');\nconst classHeader = document.querySelector('.header');\nconst championHeader = document.querySelector('.champion-header');\nconst championAbility = document.querySelector('.champion-abilities');\nconst championSkin = document.querySelector('.champion-skins')\nconst skinBtns = document.querySelectorAll('.skin-btn');\nconst abilityBtns = document.querySelectorAll('.ability-icon')\n\nconst sendToChampionPage = event => {\n    ;(0,_index__WEBPACK_IMPORTED_MODULE_0__.gatherData)(event)\n    header.style.display = 'none';\n    nav.style.display = 'none';\n    cards.style.display = 'none';\n\n    classHeader.style.display = '';\n    championHeader.style.display = ''\n    championAbility.style.display = ''\n    championSkin.style.display = ''\n}\n\nconst sendToChampionList = event => {\n    const skinIcons = document.querySelectorAll('.splash-icon');\n\n    header.style.display = '';\n    nav.style.display = '';\n    cards.style.display = '';\n\n    classHeader.style.display = 'none';\n    championHeader.style.display = 'none'\n    championAbility.style.display = 'none'\n    championSkin.style.display = 'none'\n\n    for (let i = 0; i < skinIcons.length; i++) skinIcons[i].parentElement.style.display = 'flex'\n    for (let i = 0; i < abilityBtns.length; i++) {\n        if (!abilityBtns[0].parentElement.classList.contains('ability-up-animation')\n        && abilityBtns[i].parentElement.classList.contains('ability-up-animation')) {\n            abilityBtns[0].parentElement.classList.toggle('ability-btn')\n            abilityBtns[0].parentElement.classList.toggle('ability-up-animation')\n            abilityBtns[i].parentElement.classList.toggle('ability-up-animation')\n            abilityBtns[i].parentElement.classList.toggle('ability-btn')\n        }\n        changeAbilitySection(document.querySelector('.champion-container').lastElementChild.innerText, event)\n    }\n}\n\nconst changeAbilitySection = (index, event) => {\n    fetch(`https://league-of-legends-champions.p.rapidapi.com/champions/en-us/${index.replace(/[ .']/g, '-').replace(/-{2,}/, '-')}`, {\n        \"method\": \"GET\",\n        \"headers\": {\n            \"x-rapidapi-host\": \"league-of-legends-champions.p.rapidapi.com\",\n            \"x-rapidapi-key\": \"d5c7b459b7msh3709ab41febef03p1d7c75jsn6c10d4ece44d\"\n        }\n    }).then(response => response.json())\n    .then(data => {\n        const champData = data.champion[0]\n        const abilityKey = document.querySelector('.ability-info').firstElementChild;\n        const abilityName = document.querySelector('.ability-info').querySelector('h4')\n        const abilityDesc = document.querySelector('.ability-info').lastElementChild\n        const abilityVideo = document.querySelector('video')\n\n        abilityKey.innerText = event.target.parentElement.id\n        if (!event.target.id) {\n            abilityKey.innerText = 'PASSIVE';\n            abilityName.innerText = champData['champion_passive']['champion_passive_name']\n            abilityDesc.innerText = champData['champion_passive']['champion_passive_description']\n            return\n        }\n        if (champData.hasOwnProperty(event.target.id)) {\n            abilityName.innerText = champData[event.target.id][`${event.target.id}_name`];\n            abilityDesc.innerText = champData[event.target.id][`${event.target.id}_description`];\n            abilityVideo.firstElementChild.src = champData[event.target.id][`${event.target.id}_video_mp4`]\n            abilityVideo.lastElementChild.src = champData[event.target.id][`${event.target.id}_video_webm`]\n            abilityVideo.load()\n        }\n    })\n}\n\nconst skinBtnScroll = event => {\n    event.target.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'})\n\n    if (event.target.className == 'skin-btn') document.querySelector('.champion-splash').src = event.target.firstElementChild.src\n    else document.querySelector('.champion-splash').src = event.target.parentElement.querySelector('img').src \n}\n\nabilityBtns.forEach(btn => btn.addEventListener('click', event => {\n    const championName = document.querySelector('.champion-container').lastElementChild\n\n    for (let i = 0; i < abilityBtns.length; i++) {\n        if (abilityBtns[i].parentElement.classList.contains('ability-up-animation')) {\n            abilityBtns[i].parentElement.classList.toggle('ability-up-animation')\n            abilityBtns[i].parentElement.classList.toggle('ability-btn')\n        }\n    }\n    \n    event.target.parentElement.classList.toggle('ability-btn')\n    event.target.parentElement.classList.toggle('ability-up-animation')\n    event.target.parentElement.dataset.click = true\n\n    changeAbilitySection(championName.innerText, event)\n}))\n\ndocument.querySelector('.skin-contain').style.height = document.querySelector('.champion-splash').offsetHeight + 'px'\nwindow.addEventListener('resize', () => {\n    document.querySelector('.skin-contain').style.height = document.querySelector('.champion-splash').offsetHeight + 'px'\n})\n\nskinBtns.forEach(btn => btn.addEventListener('click', skinBtnScroll))\nchampBtn.addEventListener('click', sendToChampionList)\n\n\n\n\n//# sourceURL=webpack://apiproject/./src/displayData.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gatherData\": () => (/* binding */ gatherData)\n/* harmony export */ });\n/* harmony import */ var _displayData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayData */ \"./src/displayData.js\");\n\n\n\nconst loadGridDivs = () => {\n    const selectParent = document.querySelector('.contain');\n    const getChampionNames = fetch('https://league-of-legends-stats.p.rapidapi.com/champions', {\n        'method': 'GET',\n        'headers': {\n            \"x-rapidapi-host\": \"league-of-legends-stats.p.rapidapi.com\",\n\t\t    \"x-rapidapi-key\": \"d5c7b459b7msh3709ab41febef03p1d7c75jsn6c10d4ece44d\"\n        }\n    })\n    const responses = [\n        fetch(`https://league-of-legends-champions.p.rapidapi.com/champions/en-us?page=0&size=10`, {\n            'method': 'GET',\n            'headers': {\n                \"x-rapidapi-host\": \"league-of-legends-champions.p.rapidapi.com\",\n                \"x-rapidapi-key\": \"d5c7b459b7msh3709ab41febef03p1d7c75jsn6c10d4ece44d\"\n            }\n        }),\n        fetch(`https://league-of-legends-champions.p.rapidapi.com/champions/en-us?page=1&size=10`, {\n            'method': 'GET',\n            'headers': {\n                \"x-rapidapi-host\": \"league-of-legends-champions.p.rapidapi.com\",\n                \"x-rapidapi-key\": \"d5c7b459b7msh3709ab41febef03p1d7c75jsn6c10d4ece44d\"\n            }\n        }),\n        fetch(`https://league-of-legends-champions.p.rapidapi.com/champions/en-us?page=2&size=10`, {\n            'method': 'GET',\n            'headers': {\n                \"x-rapidapi-host\": \"league-of-legends-champions.p.rapidapi.com\",\n                \"x-rapidapi-key\": \"d5c7b459b7msh3709ab41febef03p1d7c75jsn6c10d4ece44d\"\n            }\n        }),\n    ]\n    const requests = responses.map(response => response.then(getData => getData.json()))\n    const getChampionImages = Promise.all(requests);\n    \n    document.querySelector('.skin-contain').style.height = document.querySelector('.champion-splash').offsetHeight + 'px'\n    document.querySelector('.header').style.display = 'none';\n    document.querySelector('.champion-header').style.display = 'none'\n    document.querySelector('.champion-abilities').style.display = 'none'\n    document.querySelector('.champion-skins').style.display = 'none'\n\n    getChampionNames.then(response => response.json())\n    .then(data => {\n        for (let i = 0; i < data.champ_names.length; i++) {\n            const cardDiv = document.createElement('div');\n            const cardImg = document.createElement('div');\n            const divOverlay = document.createElement('div');\n            const img = document.createElement('img');\n            const p = document.createElement('p');\n            const a = document.createElement('a');\n\n            selectParent.appendChild(a)\n            a.appendChild(cardDiv);\n            cardDiv.appendChild(cardImg);\n            cardImg.appendChild(img);\n            cardImg.appendChild(divOverlay);\n            divOverlay.appendChild(p);\n\n            a.id = ''\n            p.classList.add('p')\n            cardDiv.classList.add('card');\n            cardImg.classList.add('card-img');\n            divOverlay.classList.add('img-overlay');\n            img.classList.add('imgs');\n\n            a.addEventListener('click', _displayData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n        }\n\n        const getPTags = document.querySelectorAll('.p');\n        const aTags = document.querySelectorAll('a')\n\n        for (let i = 0; i < data.champ_names.length; i++) {\n             if (data.champ_names[i] != 'Kled & Skaarl' && data.champ_names[i] != 'Mega Gnar') {\n                getPTags[i].innerText = data.champ_names[i] \n                aTags[i].id = getPTags[i].innerText\n            }\n            else getPTags[i].parentElement.parentElement.parentElement.parentElement.remove()\n        }\n\n        getChampionImages\n        .then(data => {\n            const getPTags = document.querySelectorAll('.p');\n            let index = 0;\n\n            const runFirstPromise = (getIndex) => {\n                for (let j = 0; j < getPTags.length; j++) {\n                    for (let i = 0; i < data[getIndex].champions.length; i++) {\n                        if (data[getIndex].champions[i].node.champion.profile_image === null && getPTags[j].innerText == data[getIndex].champions[i].node.champion_name.toUpperCase()) {\n                            getPTags[j].parentElement.parentElement.querySelector('.imgs').src = data[getIndex].champions[i].node.champion_splash\n                        } else if (getPTags[j].innerText == data[getIndex].champions[i].node.champion_name.toUpperCase()) {\n                            getPTags[j].parentElement.parentElement.querySelector('.imgs').src = data[getIndex].champions[i].node.champion.profile_image.url\n                        }\n                    }\n                }\n            }\n            while (index <= 2) {\n                runFirstPromise(index)\n                index++\n            }\n        }).catch(error => console.log(error))\n    }).catch(error => console.log(error))\n}\n\nconst gatherData = index => {\n    fetch(`https://league-of-legends-champions.p.rapidapi.com/champions/en-us/${index.path[0].id.replace(/[ .']/g, '-').replace(/-{2,}/, '-')}/`, {\n        \"method\": \"GET\",\n        \"headers\": {\n            \"x-rapidapi-host\": \"league-of-legends-champions.p.rapidapi.com\",\n            \"x-rapidapi-key\": \"d5c7b459b7msh3709ab41febef03p1d7c75jsn6c10d4ece44d\"\n        }\n    }).then(response => response.json())\n    .then(data => {\n        const champData = data.champion[0]\n        const links = document.querySelectorAll('.link');\n        const linkArray = []\n        const skinIcons = document.querySelectorAll('.splash-icon');\n        const backgrounds = document.querySelector('.champion-abilities');\n        \n        champData['links'].sort((a, b) => a.title.length - b.title.length)\n        linkArray.push(champData['links'])\n        \n        for (let i = 0; i < links.length; i++) {\n            links[i].href = linkArray[0][i].href\n        }\n        for (let i = 0; i <= champData['skins'].length; i++) {\n            if (document.querySelector('.skin-btns').children.length < champData['skins'].length) {\n                const div = document.createElement('div');\n                const img = document.createElement('img');\n                const h5 = document.createElement('h5');\n                \n                div.classList.add('skin-btn');\n                img.classList.add('splash-icon');\n                \n                document.querySelector('.skin-btns').append(div);\n                div.append(img);\n                div.append(h5);\n                div.addEventListener('click', _displayData__WEBPACK_IMPORTED_MODULE_0__.skinBtnScroll)\n            }\n        }\n\n        document.querySelector('.blur-splash').src = champData['champion_splash']\n        document.querySelector('.champ-splash').src = champData['champion_splash']\n        document.querySelector('.champion-container').firstElementChild.innerText = champData['champion_title'].toUpperCase()\n        document.querySelector('.champion-container').lastElementChild.innerText = champData['champion_name'].toUpperCase()\n        document.querySelector('.champion-role').lastElementChild.innerText = champData['recommended_roles'][0]\n        document.querySelector('.champion-lore').firstElementChild.innerText = champData['lore']\n        \n        document.getElementById('champion_passive').src = champData['champion_passive'].champion_passive_icon\n        document.querySelector('.ability-info').querySelector('h4').innerText = champData['champion_passive'].champion_passive_name\n        document.querySelector('.description').innerText = champData['champion_passive'].champion_passive_description\n        document.querySelector('video').firstElementChild.src = champData['champion_passive'].champion_passive_video_mp4\n        document.querySelector('video').lastElementChild.src = champData['champion_passive'].champion_passive_video_webm\n        document.getElementById('champion_q').src = champData['champion_q'].champion_q_icon\n        document.getElementById('champion_w').src = champData['champion_w'].champion_w_icon\n        document.getElementById('champion_e').src = champData['champion_e'].champion_e_icon\n        document.getElementById('champion_r').src = champData['champion_r'].champion_r_icon\n        document.querySelector('video').load()\n        document.querySelector('video').play()\n        \n        switch (champData['recommended_roles'][0]) {\n            case 'Mage':\n                document.querySelector('.role-icon').src = `FontIcons/mage.svg`\n                backgrounds.style.backgroundImage = `url('../dist/FontIcons/magebackground.svg')`\n            break;\n            case 'Assassin':\n                document.querySelector('.role-icon').src = `FontIcons/assassin.svg`\n                backgrounds.style.backgroundImage = `url('../dist/FontIcons/assassinbackground.svg')`\n            break;\n            case 'Fighter':\n                document.querySelector('.role-icon').src = `FontIcons/fighter.svg`\n                backgrounds.style.backgroundImage = `url('../dist/FontIcons/fighterbackground.svg')`\n            break;\n            case 'Tank':\n                document.querySelector('.role-icon').src = `FontIcons/tank.svg`\n                backgrounds.style.backgroundImage = `url('../dist/FontIcons/tankbackground.svg')`\n            break;\n            case 'Marksman':\n                document.querySelector('.role-icon').src = `FontIcons/marksman.svg`\n                backgrounds.style.backgroundImage = `url('../dist/FontIcons/marksmanbackground.svg')`\n            break;\n            case 'Support':\n                document.querySelector('.role-icon').src = `FontIcons/support.svg`\n                backgrounds.style.backgroundImage = `url('../dist/FontIcons/supportbackground.svg')`\n            break;\n        }\n\n        document.querySelector('.champion-splash').src = champData['champion_splash']\n        \n        const btns = document.querySelector('.skin-btns')\n\n        for (let i = 0; i < skinIcons.length; i++) {\n            if (i < champData['skins'].length) {\n                if (champData['skins'][i]) skinIcons[i].src = champData['skins'][i].imageUrl\n                if (champData['skins'][i].name && champData['skins'][i].name == 'default') skinIcons[0].parentElement.lastElementChild.innerText = champData['champion_name'].toUpperCase()\n                else if (champData['skins'][i].name) skinIcons[i].parentElement.lastElementChild.innerText = champData['skins'][i].name\n            } else if (!skinIcons[i].parentElement.querySelector('h5').innerText.includes(`${champData['champion_name'].toUpperCase()}`)) {\n                skinIcons[i].parentElement.style.display = 'none'\n            }\n\n            if (champData['skins'].length > skinIcons.length && btns.lastElementChild.style.display == 'none' && btns.lastElementChild.previousElementSibling.style.display == 'none') {\n                btns.lastElementChild.style.display = ''\n                btns.lastElementChild.previousElementSibling.style.display = ''\n            }\n            if (champData['skins'].length > skinIcons.length && skinIcons[i].parentElement.style.display == 'none') {\n                skinIcons[i].parentElement.style.display = ''\n            }\n        }\n    }).catch(error => console.log(error))\n    return index.path[0].id\n}\n\nwindow.addEventListener('load', loadGridDivs)\n\n\n\n//# sourceURL=webpack://apiproject/./src/index.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;