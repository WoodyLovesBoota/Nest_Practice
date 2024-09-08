import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "./entities/user.entity";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller("user")
export class MoviesController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAll(): Promise<User[]> {
    return await this.userService.getAll();
  }

  @Get("/:uid")
  getOne(@Param("uid") uid: number): Promise<User> {
    return this.userService.getOne(uid);
  }

  @Post()
  create(@Body() userData: CreateUserDto) {
    return this.userService.create(userData);
  }

  @Delete("/:uid")
  remove(@Param("uid") uid: string) {
    return this.userService.deleteOne(uid);
  }

  @Put("/:uid")
  update(@Param("uid") uid: string, @Body() userData: CreateUserDto) {
    return this.userService.update(uid, userData);
  }
}
