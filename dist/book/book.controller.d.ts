import { BookService } from "./book.service";
import { Book } from "./entities/book.entity";
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    getBooks(uid: string): Promise<Book[]>;
}
