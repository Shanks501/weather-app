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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n    --main-font-weight: 700;\n    --secondary-font-weight: 500;\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    /* outline: 1px solid red; */\n    font-family: \"Inter\", Helvetica, sans-serif;\n    color: white;\n}\n\n#container {\n    height: 100vh;\n    padding: 2rem;\n}\n\n.hotWeather {\n    background: rgb(248, 81, 57);\n    background: linear-gradient(\n        0deg,\n        rgba(248, 81, 57, 1) 0%,\n        rgba(194, 52, 78, 1) 20%,\n        rgba(165, 36, 89, 1) 61%,\n        rgba(136, 20, 100, 1) 93%\n    );\n}\n\n.cloudyWeather {\n    background: rgb(88, 148, 180);\n    background: linear-gradient(\n        0deg,\n        rgba(88, 148, 180, 1) 0%,\n        rgba(112, 164, 188, 1) 20%,\n        rgba(140, 172, 200, 1) 61%,\n        rgba(168, 188, 204, 1) 93%\n    );\n}\n\nheader {\n    display: flex;\n    gap: 2rem;\n    margin: 0 0 25vh 0;\n}\n\nheader input[type=\"text\"] {\n    border-radius: 1rem;\n    padding: 0.5rem 1rem;\n    border: none;\n    outline: none;\n    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n    font-weight: var(--main-font-weight);\n    font-size: 1rem;\n    width: 20vw;\n    color: black;\n}\n\nheader input[type=\"text\"]:focus {\n    outline: 3px solid rgba(255, 255, 255, 0.5);\n}\n\nheader p {\n    display: flex;\n    gap: 0.5rem;\n    align-items: center;\n}\n\nheader p,\ninput[type=\"button\"] {\n    font-weight: var(--main-font-weight);\n    font-size: 1.2rem;\n}\n\nheader input[type=\"button\"] {\n    background: none;\n    border: none;\n}\n\n/* weather today start*/\n#weatherToday {\n    display: flex;\n    gap: 1rem;\n    justify-content: space-evenly;\n    padding: 1rem 0;\n    /* height: 30vh; */\n}\n\n#currentConditions {\n    display: grid;\n    grid-template-columns: 0.7fr 2fr;\n    gap: 0.5rem 1rem;\n    padding: 0 1rem;\n}\n#currentConditions img {\n    width: 6rem;\n}\n\n#currentConditions p {\n    font-weight: var(--secondary-font-weight);\n}\n\n#currentConditions span {\n    font-weight: var(--main-font-weight);\n}\n\n#currentConditions div {\n    font-size: 5rem;\n    font-weight: 700;\n}\n\n#detailsWeather {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    gap: 1rem;\n}\n\n#detailsWeather span {\n    font-weight: var(--main-font-weight);\n}\n\n#hourlyWeather {\n    display: grid;\n    grid-template-columns: repeat(8, 1fr);\n    grid-template-rows: repeat(3, 1fr);\n    gap: 0.5rem 2rem;\n    align-items: center;\n    padding: 0 1rem;\n}\n\n#hourlyWeather p {\n    font-weight: var(--main-font-weight);\n    font-size: 1.5rem;\n}\n\n.timeOfDay {\n    grid-column: span 2;\n}\n/* weather today end*/\n\nhr {\n    border: 2px solid rgba(255, 255, 255, 0.5);\n}\n\n/* weather by day start*/\n#weatherDays {\n    display: flex;\n    justify-content: space-evenly;\n    margin-top: 2rem;\n    border-top: 3px solid rgba(255, 255, 255, 0.5);\n}\n\n.day {\n    display: flex;\n    flex-direction: column;\n    font-size: 1.2rem;\n    padding: 1.5rem 2rem;\n    align-items: start;\n}\n\n.day:nth-child(1) {\n    border-top: 5px solid rgb(250, 250, 250, 0.5);\n}\n\n.day h5 {\n    font-weight: var(--main-font-weight);\n    font-size: 1.2rem;\n}\n\n.day span {\n    margin-bottom: 1rem;\n}\n\n.day div {\n    margin-top: 1rem;\n}\n\n.day img {\n    width: 5rem;\n}\n\n/* weather by day end*/\n\n#weatherForecast {\n    padding: 2rem;\n    background: rgba(255, 255, 255, 0.1);\n    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n    border-radius: 1rem;\n    backdrop-filter: blur(14.3px);\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/domHandler.js":
/*!***************************!*\
  !*** ./src/domHandler.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index_js__WEBPACK_IMPORTED_MODULE_0__]);\n_index_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst locationInput = document.querySelector(\"#location\");\n\nlocationInput.addEventListener(\"keydown\", async (e) => {\n    if (e.key === \"Enter\") {\n        const weatherData = await (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentWeather)(locationInput.value);\n        // changeBackgroundGradient();\n        createCurrentConditionsElements(weatherData);\n        createMoreDetailsElements(weatherData);\n        createHourlyWeatherElements(weatherData);\n        createWeatherDaysElements(weatherData);\n    }\n});\n\nconst weatherData = await (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentWeather)(\"Rome\");\ncreateCurrentConditionsElements(weatherData);\ncreateMoreDetailsElements(weatherData);\ncreateHourlyWeatherElements(weatherData);\ncreateWeatherDaysElements(weatherData);\n\nfunction createCurrentConditionsElements(weatherData) {\n    const currentConditions = document.querySelector(\"#currentConditions\");\n    currentConditions.textContent = \"\";\n\n    const divEmpty = document.createElement(\"div\");\n    const spanDate = document.createElement(\"span\");\n    const img = document.createElement(\"img\");\n    const divTemp = document.createElement(\"div\");\n    const pSunrise = document.createElement(\"p\");\n    const spanFeel = document.createElement(\"span\");\n    const pSunset = document.createElement(\"p\");\n    const pDescription = document.createElement(\"p\");\n\n    divEmpty.textContent = \"\";\n    spanDate.textContent = \"Friday 27 July 15:00\";\n    divTemp.textContent = weatherData.currentTemp + \"°C\";\n    pSunrise.textContent = `Sunrise: ${weatherData.sunrise.slice(0, 5)}`;\n    spanFeel.textContent = `Feels like ${weatherData.feelsLikeTemp}`;\n    pSunset.textContent = `Sunset: ${weatherData.sunset.slice(0, 5)}`;\n    pDescription.textContent = weatherData.todayDescription;\n\n    const weatherIcons = __webpack_require__(\"./src/images/WeatherIcons sync \\\\.svg$\");\n    const weatherIconPath = weatherIcons(`./${weatherData.icon}.svg`);\n\n    img.setAttribute(\"src\", weatherIconPath);\n    currentConditions.append(\n        divEmpty,\n        spanDate,\n        img,\n        divTemp,\n        pSunrise,\n        spanFeel,\n        pSunset,\n        pDescription\n    );\n    console.log(locationInput.value);\n    console.dir(weatherData);\n\n    locationInput.value = \"\";\n}\n\nfunction createMoreDetailsElements(weatherData) {\n    const detailsWeather = document.querySelector(\"#detailsWeather\");\n    detailsWeather.textContent = \"\";\n\n    const spanMoreDetails = document.createElement(\"span\");\n\n    const arrDetails = [\"Wind speed\", \"Air humidity\", \"UV index\", \"Preciptation probability\"];\n    const arrDetailsData = [\n        weatherData.windSpeed,\n        weatherData.humidity,\n        weatherData.uvindex,\n        weatherData.precipProb,\n    ];\n    const arrDetailsUnit = [\"km/h\", \"%\", \"\", \"%\"];\n\n    spanMoreDetails.textContent = \"More details\";\n    detailsWeather.append(spanMoreDetails);\n\n    arrDetails.forEach((element, index) => {\n        const divDetailName = document.createElement(\"div\");\n        const spanDetailsData = document.createElement(\"span\");\n\n        divDetailName.setAttribute(\"class\", \"moreDetails\");\n\n        divDetailName.textContent = element;\n        spanDetailsData.textContent = ` ${arrDetailsData[index]} ${arrDetailsUnit[index]} `;\n        divDetailName.append(spanDetailsData);\n        detailsWeather.append(divDetailName);\n    });\n}\n\nfunction createHourlyWeatherElements(weatherData) {\n    const hourlyWeather = document.querySelector(\"#hourlyWeather\");\n    hourlyWeather.textContent = \"\";\n\n    const arrTimeOfDayName = [\"Night\", \"Morning\", \"Day\", \"Evening\"];\n\n    arrTimeOfDayName.forEach((e) => {\n        const spanTimeOfDay = document.createElement(\"span\");\n        spanTimeOfDay.setAttribute(\"class\", \"timeOfDay\");\n        spanTimeOfDay.textContent = e;\n\n        hourlyWeather.append(spanTimeOfDay);\n    });\n\n    weatherData.hourlyTemp.forEach((element) => {\n        const pHourlyTemp = document.createElement(\"p\");\n        pHourlyTemp.textContent = `${Math.floor(parseInt(element))} °C`;\n\n        hourlyWeather.append(pHourlyTemp);\n    });\n\n    weatherData.hourlyTempHour.forEach((element) => {\n        const spanHourOfDay = document.createElement(\"span\");\n        spanHourOfDay.textContent = `${element.slice(0, 5)}`;\n\n        hourlyWeather.append(spanHourOfDay);\n    });\n}\n\nfunction createWeatherDaysElements(weatherData) {\n    const weatherDays = document.querySelector(\"#weatherDays\");\n    weatherDays.textContent = \"\";\n\n    weatherData.forecastDate.forEach((dateElement, index) => {\n        const divDay = document.createElement(\"div\");\n        const h5DayOfTheWeek = document.createElement(\"h5\");\n        const spanDateDay = document.createElement(\"span\");\n        const divMaxTemp = document.createElement(\"p\");\n        const divMinTemp = document.createElement(\"p\");\n        const imgIconDay = document.createElement(\"img\");\n\n        const date = new Date(dateElement);\n        const dayName = date.toLocaleString(\"en-US\", { weekday: \"long\" });\n\n        const weatherIcons = __webpack_require__(\"./src/images/WeatherIcons sync \\\\.svg$\");\n        const weatherIconPathDay = weatherIcons(`./${weatherData.forecastTempIcon[index]}.svg`);\n\n        divDay.setAttribute(\"class\", \"day\");\n        weatherDays.append(divDay);\n\n        h5DayOfTheWeek.textContent = dayName;\n        spanDateDay.textContent = \"24 july\";\n        divMaxTemp.textContent = `Max: ${weatherData.forecastTempMax[index]} °C`;\n        divMinTemp.textContent = `Min: ${weatherData.forecastTempMin[index]} °C`;\n        imgIconDay.setAttribute(\"src\", weatherIconPathDay);\n\n        divDay.append(h5DayOfTheWeek, spanDateDay, divMaxTemp, divMinTemp, imgIconDay);\n    });\n}\n\n// function changeBackgroundGradient() {\n//     const container = document.querySelector(\"#container\");\n//     console.log(container);\n//     container.removeAttribute(\"class\");\n//     container.setAttribute(\"class\", \"cloudyWeather\");\n// }\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack:///./src/domHandler.js?");

/***/ }),

/***/ "./src/images/WeatherIcons sync \\.svg$":
/*!***********************************************************!*\
  !*** ./src/images/WeatherIcons/ sync nonrecursive \.svg$ ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./clear-day.svg\": \"./src/images/WeatherIcons/clear-day.svg\",\n\t\"./clear-night.svg\": \"./src/images/WeatherIcons/clear-night.svg\",\n\t\"./cloudy.svg\": \"./src/images/WeatherIcons/cloudy.svg\",\n\t\"./fog.svg\": \"./src/images/WeatherIcons/fog.svg\",\n\t\"./partly-cloudy-day.svg\": \"./src/images/WeatherIcons/partly-cloudy-day.svg\",\n\t\"./partly-cloudy-night.svg\": \"./src/images/WeatherIcons/partly-cloudy-night.svg\",\n\t\"./rain.svg\": \"./src/images/WeatherIcons/rain.svg\",\n\t\"./showers-day.svg\": \"./src/images/WeatherIcons/showers-day.svg\",\n\t\"./showers-night.svg\": \"./src/images/WeatherIcons/showers-night.svg\",\n\t\"./snow-showers-day.svg\": \"./src/images/WeatherIcons/snow-showers-day.svg\",\n\t\"./snow-showers-night.svg\": \"./src/images/WeatherIcons/snow-showers-night.svg\",\n\t\"./snow.svg\": \"./src/images/WeatherIcons/snow.svg\",\n\t\"./thunder-showers-day.svg\": \"./src/images/WeatherIcons/thunder-showers-day.svg\",\n\t\"./thunder-showers-night.svg\": \"./src/images/WeatherIcons/thunder-showers-night.svg\",\n\t\"./thunder.svg\": \"./src/images/WeatherIcons/thunder.svg\",\n\t\"./wind.svg\": \"./src/images/WeatherIcons/wind.svg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/images/WeatherIcons sync \\\\.svg$\";\n\n//# sourceURL=webpack:///./src/images/WeatherIcons/_sync_nonrecursive_\\.svg$?");

/***/ }),

/***/ "./src/images/WeatherIcons/clear-day.svg":
/*!***********************************************!*\
  !*** ./src/images/WeatherIcons/clear-day.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"5488288fde0fadad1058.svg\";\n\n//# sourceURL=webpack:///./src/images/WeatherIcons/clear-day.svg?");

/***/ }),

/***/ "./src/images/WeatherIcons/clear-night.svg":
/*!*************************************************!*\
  !*** ./src/images/WeatherIcons/clear-night.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"67e026c44536ab42adf8.svg\";\n\n//# sourceURL=webpack:///./src/images/WeatherIcons/clear-night.svg?");

/***/ }),

/***/ "./src/images/WeatherIcons/cloudy.svg":
/*!********************************************!*\
  !*** ./src/images/WeatherIcons/cloudy.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"2b846c26f17dcdb5a569.svg\";\n\n//# sourceURL=webpack:///./src/images/WeatherIcons/cloudy.svg?");

/***/ }),

/***/ "./src/images/WeatherIcons/fog.svg":
/*!*****************************************!*\
  !*** ./src/images/WeatherIcons/fog.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"62cdf6342e59510f855e.svg\";\n\n//# sourceURL=webpack:///./src/images/WeatherIcons/fog.svg?");

/***/ }),

/***/ "./src/images/WeatherIcons/partly-cloudy-day.svg":
/*!*******************************************************!*\
  !*** ./src/images/WeatherIcons/partly-cloudy-day.svg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"df46d5f3e7a224e02049.svg\";\n\n//# sourceURL=webpack:///./src/images/WeatherIcons/partly-cloudy-day.svg?");

/***/ }),

/***/ "./src/images/WeatherIcons/partly-cloudy-night.svg":
/*!*********************************************************!*\
  !*** ./src/images/WeatherIcons/partly-cloudy-night.svg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"c1326b5fe7512def8407.svg\";\n\n//# sourceURL=webpack:///./src/images/WeatherIcons/partly-cloudy-night.svg?");

/***/ }),

/***/ "./src/images/WeatherIcons/rain.svg":
/*!******************************************!*\
  !*** ./src/images/WeatherIcons/rain.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"a5cd7c7c6630adffe1fb.svg\";\n\n//# sourceURL=webpack:///./src/images/WeatherIcons/rain.svg?");

/***/ }),

/***/ "./src/images/WeatherIcons/showers-day.svg":
/*!*************************************************!*\
  !*** ./src/images/WeatherIcons/showers-day.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"44fb82231e1f5a7515c3.svg\";\n\n//# sourceURL=webpack:///./src/images/WeatherIcons/showers-day.svg?");

/***/ }),

/***/ "./src/images/WeatherIcons/showers-night.svg":
/*!***************************************************!*\
  !*** ./src/images/WeatherIcons/showers-night.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"9570818e65a034bcdfdc.svg\";\n\n//# sourceURL=webpack:///./src/images/WeatherIcons/showers-night.svg?");

/***/ }),

/***/ "./src/images/WeatherIcons/snow-showers-day.svg":
/*!******************************************************!*\
  !*** ./src/images/WeatherIcons/snow-showers-day.svg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"3be1e2a1569fa9b0bbc6.svg\";\n\n//# sourceURL=webpack:///./src/images/WeatherIcons/snow-showers-day.svg?");

/***/ }),

/***/ "./src/images/WeatherIcons/snow-showers-night.svg":
/*!********************************************************!*\
  !*** ./src/images/WeatherIcons/snow-showers-night.svg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"37766ef22ceaca76db6b.svg\";\n\n//# sourceURL=webpack:///./src/images/WeatherIcons/snow-showers-night.svg?");

/***/ }),

/***/ "./src/images/WeatherIcons/snow.svg":
/*!******************************************!*\
  !*** ./src/images/WeatherIcons/snow.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"04feed1bc2e764733588.svg\";\n\n//# sourceURL=webpack:///./src/images/WeatherIcons/snow.svg?");

/***/ }),

/***/ "./src/images/WeatherIcons/thunder-showers-day.svg":
/*!*********************************************************!*\
  !*** ./src/images/WeatherIcons/thunder-showers-day.svg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"6d270d4f40bc2d61c733.svg\";\n\n//# sourceURL=webpack:///./src/images/WeatherIcons/thunder-showers-day.svg?");

/***/ }),

/***/ "./src/images/WeatherIcons/thunder-showers-night.svg":
/*!***********************************************************!*\
  !*** ./src/images/WeatherIcons/thunder-showers-night.svg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"19ff3c30164844769f3c.svg\";\n\n//# sourceURL=webpack:///./src/images/WeatherIcons/thunder-showers-night.svg?");

/***/ }),

/***/ "./src/images/WeatherIcons/thunder.svg":
/*!*********************************************!*\
  !*** ./src/images/WeatherIcons/thunder.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"19ff3c30164844769f3c.svg\";\n\n//# sourceURL=webpack:///./src/images/WeatherIcons/thunder.svg?");

/***/ }),

/***/ "./src/images/WeatherIcons/wind.svg":
/*!******************************************!*\
  !*** ./src/images/WeatherIcons/wind.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"66101a64ae0d7c7e9d2d.svg\";\n\n//# sourceURL=webpack:///./src/images/WeatherIcons/wind.svg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getCurrentWeather: () => (/* binding */ getCurrentWeather)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _domHandler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domHandler.js */ \"./src/domHandler.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_domHandler_js__WEBPACK_IMPORTED_MODULE_1__]);\n_domHandler_js__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nasync function getWeatherData(location) {\n    const response = fetch(\n        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/\n        ${location}?unitGroup=metric&key=BTBQSXWTRQGC28YHE78448Z76`\n    );\n    const weatherData = (await response).json();\n    return weatherData;\n}\n\nasync function getCurrentWeather(location) {\n    try {\n        const data = await getWeatherData(location);\n        console.log(data);\n        const weatherData = {\n            currentTemp: data.currentConditions.temp,\n            feelsLikeTemp: data.currentConditions.feelslike,\n            conditions: data.currentConditions.conditions,\n            sunrise: data.currentConditions.sunrise,\n            sunset: data.currentConditions.sunset,\n            todayDescription: data.days[0].description,\n            windSpeed: data.currentConditions.windspeed,\n            humidity: data.currentConditions.humidity,\n            uvindex: data.currentConditions.uvindex,\n            precipProb: data.currentConditions.precipprob,\n            icon: data.currentConditions.icon,\n            hourlyTemp: [\n                data.days[0].hours[0].temp,\n                data.days[0].hours[3].temp,\n                data.days[0].hours[6].temp,\n                data.days[0].hours[9].temp,\n                data.days[0].hours[12].temp,\n                data.days[0].hours[15].temp,\n                data.days[0].hours[18].temp,\n                data.days[0].hours[21].temp,\n            ],\n            hourlyTempHour: [\n                data.days[0].hours[0].datetime,\n                data.days[0].hours[3].datetime,\n                data.days[0].hours[6].datetime,\n                data.days[0].hours[9].datetime,\n                data.days[0].hours[12].datetime,\n                data.days[0].hours[15].datetime,\n                data.days[0].hours[18].datetime,\n                data.days[0].hours[21].datetime,\n            ],\n            forecastDate: [\n                data.days[1].datetime,\n                data.days[2].datetime,\n                data.days[3].datetime,\n                data.days[4].datetime,\n                data.days[5].datetime,\n                data.days[6].datetime,\n                data.days[7].datetime,\n            ],\n            forecastTempMax: [\n                data.days[1].tempmax,\n                data.days[2].tempmax,\n                data.days[3].tempmax,\n                data.days[4].tempmax,\n                data.days[4].tempmax,\n                data.days[6].tempmax,\n                data.days[7].tempmax,\n            ],\n            forecastTempMin: [\n                data.days[1].tempmin,\n                data.days[2].tempmin,\n                data.days[3].tempmin,\n                data.days[4].tempmin,\n                data.days[5].tempmin,\n                data.days[6].tempmin,\n                data.days[7].tempmin,\n            ],\n            forecastTempIcon: [\n                data.days[1].icon,\n                data.days[2].icon,\n                data.days[3].icon,\n                data.days[4].icon,\n                data.days[5].icon,\n                data.days[6].icon,\n                data.days[7].icon,\n            ],\n        };\n        return weatherData;\n    } catch (error) {\n        console.error(\"Error fetching weather data:\", error);\n        return \"Unavailable\";\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/styles.css?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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