KM-Detailing/
│
├── index.html
├── styles.css
├── script.js
│
└── PICTURE/
    ├── Exterior Detailing.WEBP
    ├── Interior Detailing.WEBP
    ├── PAINT.WEBP
    └── ...
	// Get gallery elements
const galleryImages = document.querySelectorAll(".gallery-image");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");

const closeLightbox = document.getElementById("closeLightbox");

// Open lightbox when an image is clicked
galleryImages.forEach(function (image) {

    image.addEventListener("click", function () {

        lightbox.style.display = "flex";

        lightboxImage.src = image.src;

        lightboxImage.alt = image.alt;

        lightboxCaption.textContent = image.alt;

    });

});

// Close lightbox using the X button
closeLightbox.addEventListener("click", function () {

    lightbox.style.display = "none";

});

// Close lightbox when clicking outside the image
lightbox.addEventListener("click", function (event) {

    if (event.target === lightbox) {

        lightbox.style.display = "none";

    }

});

// Close lightbox using the Escape key
document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        lightbox.style.display = "none";

    }

});
// =====================================
// INTERACTIVE SERVICES ACCORDION
// =====================================

const accordionButtons = document.querySelectorAll(
    ".accordion-button"
);

accordionButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const accordionItem = button.parentElement;

        const accordionContent = accordionItem.querySelector(
            ".accordion-content"
        );

        const accordionIcon = button.querySelector(
            ".accordion-icon"
        );

        const isOpen = accordionItem.classList.contains("active");

        // Close all accordion items
        document.querySelectorAll(".accordion-item").forEach(
            function (item) {

                item.classList.remove("active");

                item.querySelector(
                    ".accordion-button"
                ).setAttribute("aria-expanded", "false");

                item.querySelector(
                    ".accordion-content"
                ).style.maxHeight = null;

                item.querySelector(
                    ".accordion-icon"
                ).textContent = "+";

            }
        );

        // Open selected item
        if (!isOpen) {

            accordionItem.classList.add("active");

            button.setAttribute("aria-expanded", "true");

            accordionContent.style.maxHeight =
                accordionContent.scrollHeight + "px";

            accordionIcon.textContent = "−";

        }

    });

});
// =====================================
// PART 3 - SCROLL REVEAL ANIMATION
// =====================================

const revealElements = document.querySelectorAll(
    ".reveal"
);

const revealObserver = new IntersectionObserver(
    function (entries, observer) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);

// Observe each reveal element
revealElements.forEach(function (element) {

    revealObserver.observe(element);

});
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("serviceSearch");
    const serviceCards = document.querySelectorAll(".services-row > .col");

    if (!searchInput || serviceCards.length === 0) {
        return;
    }

    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase().trim();

        serviceCards.forEach(function (card) {
            const serviceText = card.textContent.toLowerCase();

            if (serviceText.includes(searchTerm)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const bookingForm = document.getElementById("bookingForm");

    if (!bookingForm) {
        return;
    }

    bookingForm.addEventListener("submit", function (event) {
        const fullName = document.getElementById("full_name");
        const email = document.getElementById("email");
        const phone = document.getElementById("phone_number");
        const registration = document.getElementById("car_registration");

        if (
            !fullName.value.trim() ||
            !email.value.trim() ||
            !phone.value.trim() ||
            !registration.value.trim()
        ) {
            event.preventDefault();
            alert("Please complete all required fields.");
            return;
        }

        if (!email.checkValidity()) {
            event.preventDefault();
            alert("Please enter a valid email address.");
            email.focus();
            return;
        }

        if (!/^[0-9+\s()-]{7,20}$/.test(phone.value.trim())) {
            event.preventDefault();
            alert("Please enter a valid phone number.");
            phone.focus();
            return;
        }

        alert("Your booking form is ready to be submitted.");
    });
});