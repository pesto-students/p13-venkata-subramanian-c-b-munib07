db.movies.insertMany([
  {
    "title": "Inception",
    "release_year": 2010,
    "genre": "Sci-Fi",
    "director": { "name": "Christopher Nolan", "nationality": "British" },
    "actors": [
      { "name": "Leonardo DiCaprio", "nationality": "American" },
      { "name": "Joseph Gordon-Levitt", "nationality": "American" },
    ]
  },
  {
    "title": "movie_1",
    "release_year": 2011,
    "genre": "Sci-Fi",
    "director": { "name": "Director_1", "nationality": "Indian" },
    "actors": [
      { "name": "Actor_1", "nationality": "Indian" },
    ]
  },
  {
    "title": "movie_2",
    "release_year": 2023,
    "genre": "Drama",
    "director": { "name": "Director_2", "nationality": "Nepali" },
    "actors": [
      { "name": "Joseph Gordon-Levitt", "nationality": "American" },
    ]
  }
]);

db.directors.insertMany([
  {
    "name": "Christopher Nolan",
    "nationality": "British",
    "movies_directed": [
      { "title": "Inception", "release_year": 2010 },
    ]
  },
  {
    "name": "Director_2",
    "nationality": "Nepali",
    "movies_directed": [
      { "title": "Inception", "release_year": 2023 },
    ]
  },{
    "name": "Director_1",
    "nationality": "Indian",
    "movies_directed": [
      { "title": "Movie_1", "release_year": 2011 },
    ]
  },
]);

db.actors.insertMany([
  {
    "name": "Leonardo DiCaprio",
    "nationality": "American",
    "movies_acted_in": [
      { "title": "Inception", "release_year": 2010 },
    ]
  },
  {
    "name": "Joseph Gordon-Levitt",
    "nationality": "American",
    "movies_acted_in": [
      { "title": "Inception", "release_year": 2010 },
      { "title": "Inception", "release_year": 2010 },
    ]
  },
  {
    "name": "Leonardo DiCaprio",
    "nationality": "American",
    "movies_acted_in": [
      { "title": "Inception", "release_year": 2010 },
    ]
  }
]);
