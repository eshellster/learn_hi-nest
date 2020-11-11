import { IsNumber, IsString } from 'class-validator'
// 타입을 변환시켜 사용할 수 있게 하는 패키지
import {PartialType} from '@nestjs/mapped-types'
import { CreateMovieDto } from './create-movie.dto';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {
    
}