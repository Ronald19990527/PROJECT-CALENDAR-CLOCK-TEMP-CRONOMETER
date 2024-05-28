const d = document;

export default function showUtilitiesDropDown(arrowUtilities, utilitiesDropDown) {
    const $utilitiesDropDown = d.querySelector(utilitiesDropDown),
    $arrowUtilities = d.querySelector(arrowUtilities),
    $chevronDouble = d.querySelector(`${arrowUtilities} > i`);

    const showAndNoShowUtilitiesDropDown = function(displayNoneBlock, currentDoubleChevron, replaceDoubleChevron, backgroundColor) {
        $utilitiesDropDown.style.setProperty("display", displayNoneBlock);

        $chevronDouble.classList.replace(currentDoubleChevron, replaceDoubleChevron);

        $arrowUtilities.style.setProperty("background-color", backgroundColor);
    }

    d.addEventListener("click", e => {
        if (e.target.matches(arrowUtilities) || e.target.matches(`${arrowUtilities} > *`))
            if ($chevronDouble.classList.contains("bi-chevron-double-down")) showAndNoShowUtilitiesDropDown("block", "bi-chevron-double-down", "bi-chevron-double-up", "var(--green-dark-color)");
            else showAndNoShowUtilitiesDropDown("none", "bi-chevron-double-up", "bi-chevron-double-down", null);
        else
            showAndNoShowUtilitiesDropDown("none", "bi-chevron-double-up", "bi-chevron-double-down", null);
    });
}