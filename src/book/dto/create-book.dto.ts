import { IsNumber, IsString } from "class-validator";

export class CreateBookDto {
  @IsString()
  readonly name: string;
  // @IsNumber()
  // readonly year: number;
  // @IsString({ each: true })
  // readonly genres: string[];
}
