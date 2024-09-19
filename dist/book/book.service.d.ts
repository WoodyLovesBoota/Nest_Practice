import { Book } from "./entities/book.entity";
export declare class BookService {
    getBooks(uid: string): Promise<Book[]>;
}
