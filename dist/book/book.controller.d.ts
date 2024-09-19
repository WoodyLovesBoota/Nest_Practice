import { BookService } from "./book.service";
import { Book } from "./entities/book.entity";
import { CreateBookDto } from "./dto/create-book.dto";
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    getBooks(uid: string): Promise<Book[]>;
    addBook(data: {
        bookInfo: CreateBookDto;
        uid: string;
    }): Promise<void>;
    remove(data: {
        isbn: string;
        uid: string;
    }): Promise<void>;
    update(data: {
        bookInfo: CreateBookDto;
        uid: string;
        isbn: string;
    }): Promise<void>;
}
