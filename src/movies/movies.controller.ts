import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateMovieDto } from './create-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesSeervice: MoviesService){}

    @Get()
    getAll() :Movie[]{
        return this.moviesSeervice.getAll()
    }


    @Get("/:id")
    getOne(@Param("id") movieId: string){
        return this.moviesSeervice.getOne(movieId)
        
    }

    @Post()
    cteate(@Body() movieData:CreateMovieDto) {
        return this.moviesSeervice.create(movieData)
    }

    @Delete("/:id")
    remove(@Param("id") movieId: string ){
        return this.moviesSeervice.deleteOne(movieId)
    }

    @Patch("/:id")
    pathc(@Param("id") movieId: string,@Body() updateData ){
        return {
            updataMovie: movieId,
            ...updateData,
        }
    }

    
}
