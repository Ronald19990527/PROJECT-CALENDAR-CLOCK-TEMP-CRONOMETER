const d = document;

export function localStorageAvailable(type) {
    try {
      var localStorage = window[type],
      x = "__storage_test__";
  
      localStorage.setItem(x, x);
  
      localStorage.removeItem(x);
  
      return true;
    } catch (error) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === "QuotaExceededError" ||
          // Firefox
          e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage.length !== 0
      );
    }
}

// General Functions
function getRegister(register) {
    return JSON.parse(localStorage.getItem(register));
}

// MenuAside
export function setRegisterAsideMenuUtilitie(setClassActive) {
    localStorage.setItem("setClassActive", JSON.stringify(setClassActive));
}

export function asideMenuLocalStorage() {
    if (localStorage.length > 0) {
        switch (getRegister("setClassActive")) {
            case "utilitie-1":
                d.getElementById("utilitie-1").classList.add("active");

                removeClassActive(["utilitie-2", "utilitie-3", "utilitie-4"]);

                break;

            case "utilitie-2":
                d.getElementById("utilitie-2").classList.add("active");

                removeClassActive(["utilitie-1", "utilitie-3", "utilitie-4"]);

                break;

            case "utilitie-3":
                d.getElementById("utilitie-3").classList.add("active");

                removeClassActive(["utilitie-1", "utilitie-2", "utilitie-4"]);

                break;

            case "utilitie-4":
                d.getElementById("utilitie-4").classList.add("active");

                removeClassActive(["utilitie-1", "utilitie-2", "utilitie-3"]);

                break;

            default:
                break;
        }

        function removeClassActive(utilities) {
            utilities.forEach(element => {
                if(d.getElementById(element).classList.contains("active")) d.getElementById(element).classList.remove("active");
            });
        }
    }
}

// BtnDarkLight
export function setRegisterBtnDarkLight(setClassDarkLightTranslate) {
    localStorage.setItem("setClassDarkLightTranslate", JSON.stringify(setClassDarkLightTranslate));
}

export function btnDarkLightLocalStorage() {
    if (localStorage.length > 0)
        if (getRegister("setClassDarkLightTranslate") != null) {
            const $slider = d.querySelectorAll(".slider");

            $slider[0].classList.add("dark-light-translate");

            $slider[1].classList.add("dark-light-translate");
        }
}