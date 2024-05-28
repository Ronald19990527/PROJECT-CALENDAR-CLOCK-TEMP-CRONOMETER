import { btnDarkLightLocalStorage, localStorageAvailable, setRegisterBtnDarkLight } from "./to-apply-last-changes.js";

const d = document;

export default function btnDarkLight(slider) {
    const $slider = d.querySelectorAll(slider);

    if (localStorageAvailable("localStorage")) btnDarkLightLocalStorage();

    const darkLightThemeToggle = function(slider, otherSlider) {
        $slider[slider].classList.toggle("dark-light-translate");

        if ($slider[slider].classList.contains("dark-light-translate")) setRegisterBtnDarkLight("dark-light-translate");
        else setRegisterBtnDarkLight(null);

        if ($slider[slider].classList.contains("dark-light-translate")) $slider[otherSlider].classList.add("dark-light-translate");
        else if (!$slider[slider].classList.contains("dark-light-translate")) $slider[otherSlider].classList.remove("dark-light-translate");
    }

    $slider[0].addEventListener("click", e => {
        darkLightThemeToggle(0, 1);
    });

    $slider[1].addEventListener("click", e => {
        darkLightThemeToggle(1, 0);
    });
}