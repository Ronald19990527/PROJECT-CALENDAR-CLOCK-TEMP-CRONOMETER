const d = document;

export default function showMenuChevronDown(chevronDownActive) {
    const $chevronDownActive = d.querySelector(chevronDownActive);
    let responsive1 = window.matchMedia("(min-width: 36rem)"),
    responsive2 = window.matchMedia("(min-width: 64rem)"),
    responsive3 = window.matchMedia("(max-width: 35rem)"),
    responsive4 = window.matchMedia("(max-width: 63rem)");

    responsiveMenuChevron(responsive1, responsive2, responsive3, responsive4);

    d.addEventListener("click", (e) => {
        if (e.target.matches(chevronDownActive) || e.target.matches(`${chevronDownActive} *`)) {
            const $nextSibling = $chevronDownActive.nextElementSibling;

            if ($nextSibling.style.maxHeight) {
                if (chevronDownActive === ".chevron-down-active-1") {
                    d.querySelector(".utilities-arrow").style.maxHeight = null;

                    if (d.querySelector(".chevron-down-active-2 > i").classList.contains("bi-chevron-double-up")) d.querySelector(".chevron-down-active-2 > i").classList.replace("bi-chevron-double-up", "bi-chevron-double-down");
                }

                $nextSibling.style.maxHeight = null;

                $chevronDownActive.firstElementChild.classList.replace("bi-chevron-double-up", "bi-chevron-double-down");
            }
            else {
                if (chevronDownActive === ".chevron-down-active-1") $nextSibling.style.maxHeight = "48.625rem";
                else $nextSibling.style.maxHeight = $nextSibling.scrollHeight + "px";

                $chevronDownActive.firstElementChild.classList.replace("bi-chevron-double-down", "bi-chevron-double-up");
            }
        }
        else if (e.target.matches("body")) {
            const $nextSibling = $chevronDownActive.nextElementSibling;

            $nextSibling.style.maxHeight = null;

            $chevronDownActive.firstElementChild.classList.replace("bi-chevron-double-up", "bi-chevron-double-down");
        }
    });

    responsive1.addEventListener("change", e => responsiveMenuChevron(responsive1, responsive2, responsive3, responsive4));

    responsive2.addEventListener("change", e => responsiveMenuChevron(responsive1, responsive2, responsive3, responsive4));

    function closeMenuChevron() {
        if (d.querySelector(".chevron-down-active-1 > i").classList.contains("bi-chevron-double-up")) {
            if (d.querySelector(".chevron-down-active-2 > i").classList.contains("bi-chevron-double-up")) {
                d.querySelector(".chevron-down-active-2 > i").classList.replace("bi-chevron-double-up", "bi-chevron-double-down");

                d.querySelector(".utilities-arrow").style.maxHeight = null;
            }

            d.querySelector(".chevron-down-active-1 > i").classList.replace("bi-chevron-double-up", "bi-chevron-double-down");

            d.querySelector(".utilities-dark-light-them-arrow").style.maxHeight = null;
        }
    }

    function responsiveMenuChevron(responsive1, responsive2, responsive3, responsive4) {
        if (responsive1.matches) closeMenuChevron();
        else if (responsive2.matches) closeMenuChevron();
        else if (responsive3.matches) closeMenuChevron();
        else if (responsive4.matches) closeMenuChevron();
    }
}