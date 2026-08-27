document.addEventListener("DOMContentLoaded", function () {

    //    SMOOTH SCROLL


    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {

        anchor.addEventListener("click", function (event) {

            const href = this.getAttribute("href");

            if (!href || href === "#") {
                return;
            }

            const target = document.querySelector(href);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });

    //    ACTIVE NAVIGATION

    const navLinks =
        document.querySelectorAll("header nav ul li a");

    const sections =
        document.querySelectorAll("main section");

    function setActiveLink() {

        let currentSection = "";

        const scrollPosition =
            window.scrollY + 180;

        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop;

            const sectionBottom =
                sectionTop + section.offsetHeight;

            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionBottom
            ) {
                currentSection =
                    section.getAttribute("id");
            }

        });

        navLinks.forEach(function (link) {

            link.classList.remove("active");

        });

        if (currentSection) {

            const activeLink =
                document.querySelector(
                    'header nav a[href="#' +
                    currentSection +
                    '"]'
                );

            if (activeLink) {

                activeLink.classList.add("active");

            }

        }

    }

    window.addEventListener(
        "scroll",
        setActiveLink
    );

    window.addEventListener(
        "load",
        setActiveLink
    );

    setActiveLink();

    //    GET CURRENT YEAR

    const yearElement =
        document.getElementById("year");

    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }

    //    PRELOADER

    const preloader =
        document.getElementById("preloader");

    if (preloader) {

        window.addEventListener("load", function () {

            setTimeout(function () {

                preloader.classList.add("hidden");

                setTimeout(function () {

                    preloader.style.display = "none";

                }, 500);

            }, 900);

        });

    }

// SERVICE → PACKAGE → GUIDE PRICE

const serviceSelect = document.getElementById("service");
const packageSelect = document.getElementById("package");
const guidePriceInput = document.getElementById("guidePrice");

const servicePricing = {

    "IT & Networking": {
        package: "Business Support",
        price: "UGX 70,000 - UGX 1,500,000"
    },

    "CCTV Installation & Maintenance": {
        package: "Security & Access",
        price: "Request Quote"
    },

    "Access Control & Biometric Systems": {
        package: "Security & Access",
        price: "Request Quote"
    },

    "Time & Attendance Systems": {
        package: "Security & Access",
        price: "Request Quote"
    },

    "Digital Business Services": {
        package: "Website & App Packages",
        price: "UGX 550,000 - UGX 2,700,000"
    },

    "Custom Software": {
        package: "Website & App Packages",
        price: "UGX 550,000 - UGX 2,700,000"
    },

    "Freelance Technical Support": {
        package: "Business Support",
        price: "UGX 70,000 - UGX 1,500,000"
    },

    "Computer & Software Support": {
        package: "Computer & Software",
        price: "UGX 20,000 - UGX 100,000"
    },

    "Other": {
        package: "Custom Requirement",
        price: "Request Quote"
    }

};

// UPDATE PACKAGE + GUIDE PRICE

if (serviceSelect) {

    serviceSelect.addEventListener("change", function () {

        const selectedService = this.value;

        // Reset
        if (!selectedService || !servicePricing[selectedService]) {

            if (packageSelect) {
                packageSelect.innerHTML =
                    '<option value="">Select a service first</option>';

                packageSelect.disabled = true;
            }

            if (guidePriceInput) {
                guidePriceInput.value = "";
                guidePriceInput.placeholder =
                    "Select a service first";
            }

            return;
        }

        const serviceData =
            servicePricing[selectedService];

        // PACKAGE
        if (packageSelect) {

            packageSelect.innerHTML = "";

            const option =
                document.createElement("option");

            option.value = serviceData.package;
            option.textContent = serviceData.package;
            option.selected = true;

            packageSelect.appendChild(option);

            packageSelect.disabled = false;
        }

        // GUIDE PRICE

        if (guidePriceInput) {

            guidePriceInput.value =
                serviceData.price;

            guidePriceInput.placeholder =
                serviceData.price;
        }

    });

}

    //    WHATSAPP SERVICE BUTTONS

    document.querySelectorAll(
        ".open-wa[data-service]"
    ).forEach(function (element) {

        element.addEventListener(
            "click",
            function () {

                const service =
                    this.dataset.service ||
                    "service inquiry";

                const message =
                    "Hello AviTech Solutions, I am interested in " +
                    service +
                    ". I would like to request a quotation and discuss next steps.";

                const waUrl =
                    "https://wa.me/256708992203?text=" +
                    encodeURIComponent(message);

                window.open(
                    waUrl,
                    "_blank",
                    "noopener,noreferrer"
                );

            }
        );

    });

    // //    DONATION FUNCTIONALITY

    // const donationButtons =
    //     document.querySelectorAll(
    //         ".donation-amount"
    //     );

    // const donationCustomInput =
    //     document.getElementById(
    //         "donationCustomAmount"
    //     );

    // const donateMobileMoneyButton =
    //     document.getElementById(
    //         "donateMobileMoney"
    //     );


    // function getDonationAmount() {

    //     const customAmount =
    //         Number(
    //             donationCustomInput?.value || 0
    //         );

    //     if (customAmount > 0) {
    //         return customAmount;
    //     }

    //     const activeDonation =
    //         document.querySelector(
    //             ".donation-amount.active"
    //         );

    //     return Number(
    //         activeDonation?.dataset.amount ||
    //         20000
    //     );

    // }


    // function openDonationMobileMoney() {

    //     const amount =
    //         getDonationAmount();

    //     const formattedAmount =
    //         amount.toLocaleString();

    //     const message =
    //         "Hello AviTech Solutions, I would like to donate UGX " +
    //         formattedAmount +
    //         " through Mobile Money.";

    //     const whatsappUrl =
    //         "https://wa.me/256708992203?text=" +
    //         encodeURIComponent(message);

    //     window.open(
    //         whatsappUrl,
    //         "_blank",
    //         "noopener,noreferrer"
    //     );

    // }


    // donationButtons.forEach(
    //     function (button) {

    //         button.addEventListener(
    //             "click",
    //             function () {

    //                 donationButtons.forEach(
    //                     function (item) {

    //                         item.classList.remove(
    //                             "active"
    //                         );

    //                     }
    //                 );

    //                 this.classList.add(
    //                     "active"
    //                 );

    //                 if (donationCustomInput) {

    //                     donationCustomInput.value =
    //                         "";

    //                 }

    //             }
    //         );

    //     }
    // );


    // if (
    //     donationCustomInput &&
    //     donateMobileMoneyButton
    // ) {

    //     donationCustomInput.addEventListener(
    //         "input",
    //         function () {

    //             donationButtons.forEach(
    //                 function (item) {

    //                     item.classList.remove(
    //                         "active"
    //                     );

    //                 }
    //             );

    //         }
    //     );


    //     donateMobileMoneyButton.addEventListener(
    //         "click",
    //         openDonationMobileMoney
    //     );

    // }


    // /* =========================================================
    //    COPY MERCHANT CODE
    //    ========================================================= */

    // window.copyMerchantCode =
    //     function () {

    //         const codeElement =
    //             document.getElementById(
    //                 "merchantCode"
    //             );

    //         const code =
    //             codeElement?.textContent?.trim();

    //         if (!code) {
    //             return;
    //         }


    //         if (
    //             navigator.clipboard &&
    //             navigator.clipboard.writeText
    //         ) {

    //             navigator.clipboard
    //                 .writeText(code)

    //                 .then(function () {

    //                     const button =
    //                         document.querySelector(
    //                             ".copy-code"
    //                         );

    //                     if (!button) {
    //                         return;
    //                     }

    //                     const original =
    //                         button.innerHTML;

    //                     button.innerHTML =
    //                         '<i class="bi bi-check2"></i> Copied';

    //                     setTimeout(
    //                         function () {

    //                             button.innerHTML =
    //                                 original;

    //                         },
    //                         1800
    //                     );

    //                 })

    //                 .catch(function () {

    //                     alert(
    //                         "Merchant code: " +
    //                         code
    //                     );

    //                 });

    //         } else {

    //             alert(
    //                 "Merchant code: " +
    //                 code
    //             );

    //         }

    //     };

});

/* =========================================
   COOKIE CONSENT
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const cookieConsent = document.getElementById("cookieConsent");
    const cookiePreferences = document.getElementById("cookiePreferences");

    const acceptCookies = document.getElementById("acceptCookies");
    const rejectCookies = document.getElementById("rejectCookies");
    const manageCookies = document.getElementById("manageCookies");

    const closeCookiePreferences = document.getElementById("closeCookiePreferences");
    const saveCookiePreferences = document.getElementById("saveCookiePreferences");

    const analyticsCookies = document.getElementById("analyticsCookies");


    /*
    -----------------------------------------
    CHECK EXISTING CONSENT
    -----------------------------------------
    */

    const savedConsent = localStorage.getItem("avitechCookieConsent");

    if (!savedConsent) {
        cookieConsent.hidden = false;
    } else {

        const preferences = JSON.parse(savedConsent);

        if (preferences.analytics === true) {
            enableGoogleAnalytics();
        }

    }


    /*
    -----------------------------------------
    ACCEPT ALL
    -----------------------------------------
    */

    acceptCookies.addEventListener("click", function () {

        const preferences = {
            essential: true,
            analytics: true,
            date: new Date().toISOString()
        };

        localStorage.setItem(
            "avitechCookieConsent",
            JSON.stringify(preferences)
        );

        enableGoogleAnalytics();

        cookieConsent.hidden = true;

    });


    /*
    -----------------------------------------
    REJECT OPTIONAL
    -----------------------------------------
    */

    rejectCookies.addEventListener("click", function () {

        const preferences = {
            essential: true,
            analytics: false,
            date: new Date().toISOString()
        };

        localStorage.setItem(
            "avitechCookieConsent",
            JSON.stringify(preferences)
        );

        disableGoogleAnalytics();

        cookieConsent.hidden = true;

    });


    /*
    -----------------------------------------
    MANAGE PREFERENCES
    -----------------------------------------
    */

    manageCookies.addEventListener("click", function () {

        cookieConsent.hidden = true;

        cookiePreferences.hidden = false;

        const savedConsent =
            localStorage.getItem("avitechCookieConsent");

        if (savedConsent) {

            const preferences = JSON.parse(savedConsent);

            analyticsCookies.checked =
                preferences.analytics === true;

        }

    });


    /*
    -----------------------------------------
    CLOSE PREFERENCES
    -----------------------------------------
    */

    closeCookiePreferences.addEventListener("click", function () {

        cookiePreferences.hidden = true;

        if (!localStorage.getItem("avitechCookieConsent")) {
            cookieConsent.hidden = false;
        }

    });


    /*
    -----------------------------------------
    SAVE PREFERENCES
    -----------------------------------------
    */

    saveCookiePreferences.addEventListener("click", function () {

        const preferences = {
            essential: true,
            analytics: analyticsCookies.checked,
            date: new Date().toISOString()
        };

        localStorage.setItem(
            "avitechCookieConsent",
            JSON.stringify(preferences)
        );

        if (preferences.analytics) {
            enableGoogleAnalytics();
        } else {
            disableGoogleAnalytics();
        }

        cookiePreferences.hidden = true;
        cookieConsent.hidden = true;

    });


});

//GOOGLE ANALYTICS CONTROL 
function enableGoogleAnalytics() {

    window["ga-disable-G-JLYGF22PJ3"] = false;

    if (typeof gtag === "function") {

        gtag("consent", "update", {
            analytics_storage: "granted"
        });

    }

}


function disableGoogleAnalytics() {

    window["ga-disable-G-JLYGF22PJ3"] = true;

    if (typeof gtag === "function") {

        gtag("consent", "update", {
            analytics_storage: "denied"
        });

    }

}