import { UserService } from "./user.service";
import { User } from "./entities/user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
export declare class MoviesController {
    private readonly userService;
    constructor(userService: UserService);
    getAll(): Promise<User[]>;
    getOne(uid: number): Promise<User>;
    create(userData: CreateUserDto): Promise<void>;
    remove(uid: string): Promise<void>;
    update(uid: string, userData: CreateUserDto): Promise<void>;
}
