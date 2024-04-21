// a) Find all movies released in a specific year.
db.movies.find({ "release_year": 2010 });

// b) Find all movies in a specific genre.
db.movies.find({ "genre": "Sci-Fi" });

// c) Find all movies directed by a specific director.
db.movies.find({ "director.name": "Christopher Nolan" });

// d) Find all movies that a specific actor acted in.
db.movies.find({ "actors.name": "Leonardo DiCaprio" });

// e) Find all directors from a specific nationality.
db.directors.find({ "nationality": "British" });

// f) Find all actors from a specific nationality.
db.actors.find({ "nationality": "American" });