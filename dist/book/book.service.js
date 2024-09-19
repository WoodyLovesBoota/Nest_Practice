"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const common_1 = require("@nestjs/common");
const firestore_1 = require("firebase/firestore");
const firebase_config_1 = require("../firebase/firebase.config");
let BookService = class BookService {
    async getBooks(uid) {
        const docRef = await (0, firestore_1.getDoc)((0, firestore_1.doc)(firebase_config_1.db, "Book", "BOOK"));
        return docRef.data()[uid]["book"];
    }
    async addBook(data) {
        const { uid, bookInfo } = data;
        const docRef = (0, firestore_1.doc)(firebase_config_1.db, "Book", "BOOK");
        const currentDoc = await (0, firestore_1.getDoc)(docRef);
        const current = currentDoc.data()[uid]["book"];
        const rest = currentDoc.data();
        const movie = currentDoc.data()[uid]["movie"];
        await (0, firestore_1.updateDoc)(docRef, {
            ...rest,
            [uid]: { book: [{ ...bookInfo }, ...current], movie: movie },
        });
    }
    async deleteBook(data) {
        const { isbn, uid } = data;
        const docRef = (0, firestore_1.doc)(firebase_config_1.db, "Book", "BOOK");
        const currentDoc = await (0, firestore_1.getDoc)(docRef);
        const current = currentDoc.data()[uid]["book"];
        const rest = currentDoc.data();
        const movie = currentDoc.data()[uid]["movie"];
        const targetIndex = current.findIndex((book) => book.isbn === isbn);
        if (targetIndex === -1) {
            throw new common_1.NotFoundException(`Movie with Id ${isbn} is not exist`);
        }
        const newBookList = [
            ...current.slice(0, targetIndex),
            ...current.slice(targetIndex + 1),
        ];
        await (0, firestore_1.updateDoc)(docRef, {
            ...rest,
            [uid]: { book: [...newBookList], movie: movie },
        });
    }
    async updateBook(data) {
        const { isbn, uid, bookInfo } = data;
        const docRef = (0, firestore_1.doc)(firebase_config_1.db, "Book", "BOOK");
        const currentDoc = await (0, firestore_1.getDoc)(docRef);
        const current = currentDoc.data()[uid]["book"];
        const rest = currentDoc.data();
        const movie = currentDoc.data()[uid]["movie"];
        const targetIndex = current.findIndex((book) => book.isbn === isbn);
        if (targetIndex === -1) {
            throw new common_1.NotFoundException(`Movie with Id ${isbn} is not exist`);
        }
        const newBookList = [
            ...current.slice(0, targetIndex),
            bookInfo,
            ...current.slice(targetIndex + 1),
        ];
        await (0, firestore_1.updateDoc)(docRef, {
            ...rest,
            [uid]: { book: [...newBookList], movie: movie },
        });
    }
};
exports.BookService = BookService;
exports.BookService = BookService = __decorate([
    (0, common_1.Injectable)()
], BookService);
//# sourceMappingURL=book.service.js.map