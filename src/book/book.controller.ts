import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from "@nestjs/common";
import { BookService } from "./book.service";
import { Book } from "./entities/book.entity";
import { CreateBookDto } from "./dto/create-book.dto";

@Controller("book")
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get("/:uid")
  async getBooks(@Param("uid") uid: string): Promise<Book[]> {
    return await this.bookService.getBooks(uid);
  }

  @Post("/add")
  addBook(@Body() data: { bookInfo: CreateBookDto; uid: string }) {
    return this.bookService.addBook(data);
  }

  @Post("/delete")
  remove(@Body() data: { isbn: string; uid: string }) {
    return this.bookService.deleteBook(data);
  }

  // @Get("/:uid")
  // getOne(@Param("uid") uid: number): Promise<User> {
  //   return this.userService.getOne(uid);
  // }

  @Post("/update")
  update(@Body() data: { bookInfo: CreateBookDto; uid: string; isbn: string }) {
    return this.bookService.updateBook(data);
  }
}
