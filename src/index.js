import 'core-js/stable'; // polyfill only stable `core-js` features - ES and web standards:
import "regenerator-runtime/runtime";

/*   */
import './style.scss';  // styles

import initFunc from "./js/app.js"; 
import internalFunctions from "./js/app2.js"; 


initFunc();
internalFunctions();
