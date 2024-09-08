"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const firestore_1 = require("firebase/firestore");
const firebase_config_1 = require("../firebase/firebase.config");
let UserService = class UserService {
    async getAll() {
        const docRef = await (0, firestore_1.getDoc)((0, firestore_1.doc)(firebase_config_1.db, "User", "USER_DOCS_ID"));
        return docRef.data()["user"];
    }
    async getOne(uid) {
        const docRef = await (0, firestore_1.getDoc)((0, firestore_1.doc)(firebase_config_1.db, "User", "USER_DOCS_ID"));
        const total = docRef.data()["user"];
        const target = total.find((user) => user.uid === uid);
        if (!target) {
            throw new common_1.NotFoundException(`Movie with Id ${uid} is not exist`);
        }
        return target;
    }
    async deleteOne(uid) {
        const docRef = (0, firestore_1.doc)(firebase_config_1.db, "User", "USER_DOCS_ID");
        const currentDoc = await (0, firestore_1.getDoc)(docRef);
        const current = currentDoc.data()["user"];
        const targetIndex = current.findIndex((user) => user.uid === Number(uid));
        if (targetIndex === -1) {
            throw new common_1.NotFoundException(`Movie with Id ${uid} is not exist`);
        }
        const newUser = [...current.slice(0, targetIndex), ...current.slice(targetIndex + 1)];
        await (0, firestore_1.updateDoc)(docRef, { user: newUser });
    }
    async create(userData) {
        const docRef = (0, firestore_1.doc)(firebase_config_1.db, "User", "USER_DOCS_ID");
        const currentDoc = await (0, firestore_1.getDoc)(docRef);
        const current = currentDoc.data()["user"];
        await (0, firestore_1.updateDoc)(docRef, { user: [{ uid: 10003, ...userData }, ...current] });
    }
    async update(uid, updateData) {
        const docRef = (0, firestore_1.doc)(firebase_config_1.db, "User", "USER_DOCS_ID");
        const currentDoc = await (0, firestore_1.getDoc)(docRef);
        const current = currentDoc.data()["user"];
        const targetIndex = current.findIndex((user) => user.uid === Number(uid));
        if (targetIndex === -1) {
            throw new common_1.NotFoundException(`Movie with Id ${uid} is not exist`);
        }
        const newUser = [
            ...current.slice(0, targetIndex),
            { uid: Number(uid), ...updateData },
            ...current.slice(targetIndex + 1),
        ];
        await (0, firestore_1.updateDoc)(docRef, { user: newUser });
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
//# sourceMappingURL=user.service.js.map