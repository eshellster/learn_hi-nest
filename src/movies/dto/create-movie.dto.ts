import { IsNumber, IsOptional, IsString } from 'class-validator'

export class CreateMovieDto{
    @IsString()
    readonly title: string;

    @IsNumber()
    readonly year: number;

    // 선택사항
    @IsOptional()
    // 배열에도 유효성 확인
    @IsString({each: true})
    readonly genres: string[];
}