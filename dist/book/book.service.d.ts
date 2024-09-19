import { Book } from "./entities/book.entity";
import { CreateBookDto } from "./dto/create-book.dto";
export declare class BookService {
    getBooks(uid: string): Promise<Book[]>;
    addBook(data: {
        bookInfo: CreateBookDto;
        uid: string;
    }): Promise<void>;
    deleteBook(data: {
        isbn: string;
        uid: string;
    }): Promise<void>;
    updateBook(data: {
        isbn: string;
        uid: string;
        bookInfo: CreateBookDto;
    }): Promise<void>;
}
