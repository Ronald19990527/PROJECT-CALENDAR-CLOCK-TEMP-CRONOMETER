import { asideMenuLocalStorage, localStorageAvailable, setRegisterAsideMenuUtilitie } from "./to-apply-last-changes.js";

const d = document;

export default function menuAside(navMenuAside, showAndCloseMenu, chevronDoubleRightLeft) {
    const $navMenuAside = d.getElementById(navMenuAside),
    $chevronDoubleRightLeft = d.getElementById(chevronDoubleRightLeft);
    let responsive1 = window.matchMedia("(min-width: 36rem)"),
    responsive2 = window.matchMedia("(min-width: 64rem)"),
    responsive3 = window.matchMedia("(max-width: 35rem)"),
    responsive4 = window.matchMedia("(max-width: 63rem)");

    responsiveForAsideMenu(responsive1, responsive2, responsive3, responsive4);

    if (localStorageAvailable("localStorage")) asideMenuLocalStorage();

    d.addEventListener("click", e => {
        if (e.target.matches(`#${showAndCloseMenu}`) || e.target.matches(`#${chevronDoubleRightLeft}`)) {
            if ($chevronDoubleRightLeft.classList.contains("bi-chevron-double-right")) {
                $chevronDoubleRightLeft.classList.replace("bi-chevron-double-right", "bi-chevron-double-left");

                $navMenuAside.classList.add("open-close-menu");

                $navMenuAside.classList.remove("z-index-negative");
            }
            else if ($chevronDoubleRightLeft.classList.contains("bi-chevron-double-left")) closeMenu();
        }
        else if (e.target.matches("html")) closeMenu();
        else {
            const arrayUtilities = [1, 2, 3, 4];

            arrayUtilities.forEach(element => {
                if (d.getElementById(`utilitie-${element}`).classList.contains("active")) d.getElementById(`utilitie-${element}`).classList.remove("active");
            });

            arrayUtilities.forEach(element => {
                if (e.target.matches(`#utilitie-${element}`) || e.target.matches(`#utilitie-${element} *`) ) {
                    d.getElementById(`utilitie-${element}`).classList.add("active");

                    setRegisterAsideMenuUtilitie(`utilitie-${element}`);

                    closeMenu();
                }
            });
        }
    });

    responsive1.addEventListener("change", e => responsiveForAsideMenu(responsive1, responsive2, responsive3, responsive4));

    responsive2.addEventListener("change", e => responsiveForAsideMenu(responsive1, responsive2, responsive3, responsive4));

    function closeMenu() {
        $chevronDoubleRightLeft.classList.replace("bi-chevron-double-left", "bi-chevron-double-right");

        $navMenuAside.classList.remove("open-close-menu");

        $navMenuAside.classList.add("z-index-negative");
    }

    function responsiveForAsideMenu(responsive1, responsive2, responsive3, responsive4) {
        if (responsive1.matches) closeMenu();
        else if (responsive2.matches) closeMenu();
        else if (responsive3.matches) closeMenu();
        else if (responsive4.matches) closeMenu();
    }
}