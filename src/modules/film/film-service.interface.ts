import CreateFilmDto from './dto/create-film.dto.js';
import {DocumentType} from '@typegoose/typegoose/lib/types.js';
import {FilmEntity} from './film.entity.js';

export interface FilmServiceInterface {
  create(dto: CreateFilmDto): Promise<DocumentType<FilmEntity>>;
}
