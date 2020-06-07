import { elements } from "./elements.js";
import { searchMovie, searchMovieDetails } from "./movie.js";

elements.form.addEventListener("submit", (event) => {
	event.preventDefault();

	if (elements.searchBar.value !== "") {
		searchMovie(elements.searchBar.value);
	}
});

elements.searchResults.addEventListener("click", (event) => {
	if (event.target.classList.contains("view-more-button")) {
		searchMovieDetails(event.target.parentNode.getAttribute("title"));
	}
});
