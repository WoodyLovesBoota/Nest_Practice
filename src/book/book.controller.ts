import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from "@nestjs/common";
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

  // @Get("/:uid")
  // getOne(@Param("uid") uid: number): Promise<User> {
  //   return this.userService.getOne(uid);
  // }

  // @Post()
  // create(@Body() userData: CreateUserDto) {
  //   return this.userService.create(userData);
  // }

  // @Delete("/:uid")
  // remove(@Param("uid") uid: string) {
  //   return this.userService.deleteOne(uid);
  // }

  // @Put("/:uid")
  // update(@Param("uid") uid: string, @Body() userData: CreateUserDto) {
  //   return this.userService.update(uid, userData);
  // }
}
