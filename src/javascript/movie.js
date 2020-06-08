import { elements } from "./elements.js";

let url = `https://www.omdbapi.com/?apikey=aa4ef6f8&`;

export let searchMovie = function (searchTerm) {
	fetch(`${url}s=${searchTerm}`)
		.then((response) => response.json())
		.then((data) => {
			showResults(data.Search);
		})
		.catch((error) => console.log(error));
};

let showResults = function (results) {
	resetSearchResults();

	results.forEach((result) => {
		elements.searchResults.innerHTML += `
			<div class="result">
				<div class="result-image-container" title = "${result.Title}">
					<img
						src="${result.Poster}"
						alt=""
						class="movie-poster"
					/>
					<button class = "button view-more-button">view more</button>
				</div>

				<div class="movie-info">
					<p class="movie-title capitalize">${result.Title}</p>
					<p class="movie-release-year">${result.Year}</p>
				</div>
			</div>
		`;
	});
};

export let searchMovieDetails = function (movie) {
	fetch(`${url}t=${movie}`)
		.then((response) => response.json())
		.then((data) => {
			showMovieDetails(data);
		})
		.catch((error) => console.log(error));
};

let showMovieDetails = function (data) {
	resetMovieDetails();

	elements.movieDetails.innerHTML = `
		<div class="movie-poster-details-main mb-5">
			<div class="poster">
				<img
					src="${data.Poster}"
					alt=""
				/>
			</div>

			<div class="movie-details-main">
				<h1 class="movie-title capitalize text-large">
					${data.Title}
				</h1>
				<h3 class="movie-release-year text-medium">1994</h3>
				<h4 class="movie-genre capitalize text-small mb-2">
					${data.Genre}
				</h4>
				<p class="actors text-small mb-1">
					${data.Actors}
				</p>

				<p class="director text-small capitalize mb-1">
					directed by ${data.Director}
				</p>

				<div class="rating">
					<img
						src="assets/images/imdb.svg"
						class="imdb-image"
						alt=""
					/>
					<span class="text-small">${data.Ratings[0].Value}</span>
				</div>
			</div>
		</div>

		<div class="plot">
			<h1 class="uppercase text-medium mb-1">plot</h1>
			<p class="plot text-small">
				${data.Plot}
			</p>
		</div>
	`;
};

let resetSearchResults = function () {
	elements.searchResults.style.display = "grid";
	elements.searchResults.innerHTML = "";
	elements.movieDetails.innerHTML = "";
	elements.movieDetails.style.display = "none";
};

let resetMovieDetails = function () {
	elements.searchResults.innerHTML = "";
	elements.searchResults.style.display = "none";
	elements.movieDetails.style.display = "block";
	elements.movieDetails.innerHTML = "";
};
