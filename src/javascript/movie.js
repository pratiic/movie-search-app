import { elements } from "./elements.js";

let url = `http://www.omdbapi.com/?apikey=aa4ef6f8&`;

export let searchMovie = function (searchTerm) {
	fetch(`${url}s=${searchTerm}`)
		.then((response) => response.json())
		.then((data) => {
			showResults(data.Search);
		})
		.catch((error) => console.log(error));
};

let showResults = function (results) {
	console.log(results);
	elements.searchResults.innerHTML = "";
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
	console.log(data);
};
