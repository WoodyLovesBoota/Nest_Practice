import { Injectable, NotFoundException } from "@nestjs/common";
import { Book } from "./entities/book.entity";
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  setDoc,
  deleteDoc,
  updateDoc,
  getFirestore,
} from "firebase/firestore";
import { db } from "../firebase/firebase.config";

@Injectable()
export class BookService {
  async getBooks(uid: string): Promise<Book[]> {
    const docRef = await getDoc(doc(db, "Book", "BOOK"));

    return docRef.data()[uid]["book"];
  }

  async addBook(data: { bookInfo: CreateBookDto; uid: string }): Promise<void> {
    const { uid, bookInfo } = data;
    const docRef = doc(db, "Book", "BOOK");
    const currentDoc = await getDoc(docRef);
    const current = currentDoc.data()[uid]["book"];
    const rest = currentDoc.data();

    const movie = currentDoc.data()[uid]["movie"];
    await updateDoc(docRef, {
      ...rest,
      [uid]: { book: [{ ...bookInfo }, ...current], movie: movie },
    });
  }

  async deleteBook(data: { isbn: string; uid: string }): Promise<void> {
    const { isbn, uid } = data;

    const docRef = doc(db, "Book", "BOOK");
    const currentDoc = await getDoc(docRef);
    const current = currentDoc.data()[uid]["book"];
    const rest = currentDoc.data();
    const movie = currentDoc.data()[uid]["movie"];

    const targetIndex = current.findIndex((book) => book.isbn === isbn);
    if (targetIndex === -1) {
      throw new NotFoundException(`Movie with Id ${isbn} is not exist`);
    }
    const newBookList = [
      ...current.slice(0, targetIndex),
      ...current.slice(targetIndex + 1),
    ];
    await updateDoc(docRef, {
      ...rest,
      [uid]: { book: [...newBookList], movie: movie },
    });
  }

  async updateBook(data: {
    isbn: string;
    uid: string;
    bookInfo: CreateBookDto;
  }): Promise<void> {
    const { isbn, uid, bookInfo } = data;

    const docRef = doc(db, "Book", "BOOK");
    const currentDoc = await getDoc(docRef);
    const current = currentDoc.data()[uid]["book"];
    const rest = currentDoc.data();
    const movie = currentDoc.data()[uid]["movie"];

    const targetIndex = current.findIndex((book) => book.isbn === isbn);
    if (targetIndex === -1) {
      throw new NotFoundException(`Movie with Id ${isbn} is not exist`);
    }
    const newBookList = [
      ...current.slice(0, targetIndex),
      bookInfo,
      ...current.slice(targetIndex + 1),
    ];
    await updateDoc(docRef, {
      ...rest,
      [uid]: { book: [...newBookList], movie: movie },
    });
  }
}
