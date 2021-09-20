type Book = {
    id: number;
    title: string;
    author: string;
    plot_take_place_years: string[], 
    publish_date: PublishDate[],
    book_covers: BookCover[];
};

type BookCover = {
    id: string;
    country: string;
    edition: string;
    artist: string;
    URL: string;
}

type PublishDate = {
    UK?: string,
    US?: string,
}

type Character = {
    id:1,
    name: string,
    birth: string,
    death: string,
    species: string,
    ancestry: string,
    gender: string,
    hair_color: string,
    eye_color: string,
    wand: string,
    patronus: string,
    house: string,
    associated_groups: string[],
    books_featured_in: number[]
}
