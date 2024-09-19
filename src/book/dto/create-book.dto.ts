import { IsNumber, IsString } from "class-validator";
/** TODO
 * 1. rating / review 등 타입 추가
 * 2. Optional String validator 추가
 */
export class CreateBookDto {
  @IsString()
  readonly title: string;
  @IsString()
  readonly description: string;
  @IsString()
  readonly author: string;
  @IsString()
  readonly pubdate: string;
  @IsString()
  readonly publisher: string;
  @IsString()
  readonly image: string;
  @IsString()
  readonly link: string;
  @IsString()
  readonly isbn: string;
  @IsString()
  readonly discount: string;

  // @IsNumber()
  // readonly year: number;
  // @IsString({ each: true })
  // readonly genres: string[];
}
