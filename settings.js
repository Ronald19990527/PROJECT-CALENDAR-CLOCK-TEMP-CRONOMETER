const d = document;

export default function settings(main, settingsOptions) {
    const $main = d.getElementsByClassName(main),
    $settingsOptions = d.getElementsByClassName(settingsOptions);

    d.addEventListener("click", e => {
        if (e.target.matches(`.${main} .header > .items-header > div:last-child`) || e.target.matches(`.${main} .header > .items-header > div:last-child *`)) {
            console.log("yes");

            $main[0].classList.toggle("translate-15rem-negative");

            $settingsOptions[0].classList.toggle("translate-15rem-negative");
        }
    });
}