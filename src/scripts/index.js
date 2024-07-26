import locI18next from "loc-i18next";
import i18next from "i18next";
import en_US from "./en_US.json";
import pl_PL from "./pl_PL.json";

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
localizeText();

const select = document.querySelector("select");
select.addEventListener("change", (event) => {
	const selectedValue = event.target.value;
	i18next
		.changeLanguage(selectedValue)
		.then(() => {
			localizeText();
		})
		.catch((err) => {
			console.error(err);
		});
});

function localizeText() {
	localize(".nav");
	localize(".jumbo");
}
