import { API_URL } from '../config/envVariables';

export const booksEndpoint = `https://harry-potter-api-6e4rgg2vka-uc.a.run.app/api/1/books/all`;
export const bookDetailEndpoint = (id: number) => `https://harry-potter-api-6e4rgg2vka-uc.a.run.app/api/1/books/${id}`;

export const charactersEndpoint = `https://harry-potter-api-6e4rgg2vka-uc.a.run.app/api/1/characters/all`;
export const characterDetailEndpoint = (id: number) => `https://harry-potter-api-6e4rgg2vka-uc.a.run.app/api/1/characters/${id}`;
