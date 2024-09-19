import { Module } from "@nestjs/common";
import { MoviesController } from "./user/user.controller";
import { UserService } from "./user/user.service";
import { BookService } from "./book/book.service";
import { BookController } from "./book/book.controller";

@Module({
  imports: [],
  controllers: [MoviesController, BookController],
  providers: [UserService, BookService],
})
export class AppModule {}
