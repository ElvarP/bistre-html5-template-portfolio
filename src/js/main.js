const navigation = document.getElementById("navigation");
const toggleNavigation = document.getElementById("toggleNavigation");

toggleNavigation.addEventListener("change", function () {
	navigation.classList.toggle("!max-h-96");
});
