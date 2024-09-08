import { User } from "./entities/user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateMovieDto } from "./dto/update-user.dto";
export declare class UserService {
    getAll(): Promise<User[]>;
    getOne(uid: number): Promise<User>;
    deleteOne(uid: string): Promise<void>;
    create(userData: CreateUserDto): Promise<void>;
    update(uid: string, updateData: UpdateMovieDto): Promise<void>;
}
