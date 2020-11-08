let movies = [
    {
        id: 0,
        name: "Star-wars, The new age",
        score: 1
    },
    {
        id: 1,
        name: "Avengers- fuck blackwidow",
        score: 7
    },
    {
        id: 2,
        name: "slut",
        score: 10
    },
    {
        id: 3,
        name: "pussy",
        score: 9
    }
];

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === String(id));
    return filteredMovies[0];
};

export const deleteMovies = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== String(id));
    if(movies.length > cleanedMovies.length){
        movies = cleanedMovies;
        return true;
    } else{
        return false;
    }
};

export const addMovie = (name, score) => {
    const newMovie={
        id: `${movies.length + 1}`,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
};