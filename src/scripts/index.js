import locI18next from "loc-i18next";
import i18next from "i18next";
import en_US from "./en_US.json";
import pl_PL from "./pl_PL.json";
import "../styles/input.css";

i18next.init({
	lng: "en",
	debug: true,
	resources: {
		en: {
			translation: en_US,
		},
		pl: {
			translation: pl_PL,
		},
	},
});

const localize = locI18next.init(i18next, {
	selectorAttr: "data-i18n", // selector for translating elements
	targetAttr: "i18n-target",
	optionsAttr: "i18n-options",
	useOptionsAttr: false,
	parseDefaultValueFromContent: true,
	document: window.document,
});

function localizeText() {
	localize("nav");
	localize(".jumbo");
	localize("#about");
	localize("#professional");
	localize("#personal");
}

const button = document.querySelector("#lang");
const dropMenu = document.querySelector("#dropdown-menu");
const langPl = document.querySelector("#lang-pl");
const langEn = document.querySelector("#lang-en");
const langSelected = document.querySelector("#lang-selected");

let selectedValue = "en";

button.addEventListener("click", () => {
	dropMenu.classList.toggle("hidden");
});

langPl.addEventListener("click", () => {
	if (selectedValue === "pl") {
		return;
	}
	changeButtonLanguage("pl");
	changeLanguage("pl");
	selectedValue = "pl";
});

langEn.addEventListener("click", () => {
	if (selectedValue === "en") {
		return;
	}
	changeButtonLanguage("en");
	changeLanguage("en");
	selectedValue = "en";
});

document.addEventListener("click", (e) => {
	if (!dropMenu.contains(e.target) && !button.contains(e.target)) {
		!dropMenu.classList.contains("hidden") &&
			dropMenu.classList.add("hidden");
	}
});

function changeLanguage(language) {
	i18next
		.changeLanguage(language)
		.then(() => {
			localizeText();
		})
		.catch((err) => {
			console.error(err);
		});
}

function changeButtonLanguage(language) {
	const image = language === "pl" ? "pol" : "eng";
	langSelected.innerHTML = `<div class="flex justify-between items-center">
									<div class="bg-country-${image} bg-contain h-4 w-4"></div>
									<span class="ml-2 text-center flex-1" data-i18n="lang.${language}"></span>
								</div>`;
}
changeButtonLanguage(selectedValue);
localizeText();
