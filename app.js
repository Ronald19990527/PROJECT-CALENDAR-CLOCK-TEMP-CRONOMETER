import btnDarkLight from "./btn-dark-light.js";
import menuAside from "./menu-aside.js";
import settings from "./settings.js";
import { showMenuChevron1, showMenuChevron2 } from "./show-menu-chevron-down-1-2.js";
import showUtilitiesDropDown from "./utilities-drop-down.js";

const d = document;

d.addEventListener("DOMContentLoaded", e => {
    menuAside("nav-menu-aside", "show-and-close-menu", "chevron-double-right-left");
    showMenuChevron1(".chevron-down-active-1");
    showMenuChevron2(".chevron-down-active-2");
    btnDarkLight(".slider");
    showUtilitiesDropDown(".arrow-utilities", ".utilities-drop-down");
    settings("main", "settings-options");
});