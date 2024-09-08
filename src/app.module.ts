import { Module } from "@nestjs/common";
import { MoviesController } from "./user/user.controller";
import { UserService } from "./user/user.service";

@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [UserService],
})
export class AppModule {}
