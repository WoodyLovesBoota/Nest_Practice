"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.firebaseApp = void 0;
const app_1 = require("firebase/app");
const firestore_1 = require("firebase/firestore");
const firebaseConfig = {
    apiKey: "AIzaSyBl91Pp_1j2fwyqh84Eak9-_cW2A7QJa38",
    authDomain: "biblios-d5e81.firebaseapp.com",
    projectId: "biblios-d5e81",
    storageBucket: "biblios-d5e81.appspot.com",
    messagingSenderId: "116805568166",
    appId: "1:116805568166:web:d56b8461ad4a33c24cd667",
    measurementId: "G-ZNE0H36EXF",
};
exports.firebaseApp = (0, app_1.initializeApp)(firebaseConfig);
exports.db = (0, firestore_1.getFirestore)(exports.firebaseApp);
//# sourceMappingURL=firebase.config.js.map