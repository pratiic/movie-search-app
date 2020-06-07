import { elements } from "./elements.js";
import { searchMovie } from "./movie.js";

elements.form.addEventListener("submit", (event) => {
	event.preventDefault();

	if (elements.searchBar.value !== "") {
		searchMovie(elements.searchBar.value);
	}
});
