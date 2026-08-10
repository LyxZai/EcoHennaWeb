// ==========================
// HEENA - SCRIPT
// ==========================

// Lista de imágenes del carrusel
const galleryImages = [
    "work1.png",
    "work2.png",
    "work3.png",
    "work4.png",
    "work5.png",
    "work6.png",
    "work7.png",
    "work8.png",
    "work9.png",
    "work10.png"
];

// Espera a que cargue toda la página
window.onload = function () {

    const gallery = document.getElementById("gallery");

    if (gallery) {

        galleryImages.forEach(image => {

            const img = document.createElement("img");

            img.src = `assets/gallery/${image}`;
            img.alt = image;
            img.onclick = () => openImage(img.src);

            gallery.appendChild(img);

        });

    }

};

// ==========================
// Carrusel
// ==========================

let currentIndex = 0;

function nextImage() {

    const images = document.querySelectorAll("#gallery img");

    if (images.length === 0) return;

    currentIndex += 2;

    if (currentIndex >= images.length)
        currentIndex = 0;

    images[currentIndex].scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest"
    });

}

function previousImage() {

    const images = document.querySelectorAll("#gallery img");

    if (images.length === 0) return;

    currentIndex -= 2;

    if (currentIndex < 0)
        currentIndex = Math.max(images.length - 2, 0);

    images[currentIndex].scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest"
    });

}

// ==========================
// Visor
// ==========================

function openImage(src) {

    const viewer = document.getElementById("viewer");
    const viewerImg = document.getElementById("viewerImg");

    if (!viewer || !viewerImg) return;

    viewer.style.display = "flex";
    viewerImg.src = src;

}

function closeImage() {

    const viewer = document.getElementById("viewer");

    if (viewer)
        viewer.style.display = "none";

}
const workImages = [

    "work1.png",
    "work2.png",
    "work3.png",
    "work4.png",
    "work5.png",
    "work6.png"

];

const designImages = [

    "design1.png",
    "design2.png",
    "design3.png",
    "design4.png",
    "design5.png",
    "design6.png"

];

function showGallery(type, button){

    const grid = document.getElementById("galleryGrid");

    if(!grid) return;

    grid.innerHTML="";

    const images = type==="work"
        ? workImages
        : designImages;

    images.forEach(image=>{

        grid.innerHTML += `
            <img
                src="assets/gallery/${image}"
                onclick="openImage(this.src)">
        `;

    });

    document.querySelectorAll(".tab")
        .forEach(tab=>tab.classList.remove("active"));

    button.classList.add("active");

}

window.addEventListener("load",()=>{

    const firstButton=document.querySelector(".tab");

    if(firstButton){

        showGallery("work",firstButton);

    }

});


const EMAIL = "estefannyocampomolina@gmail.com";

const WHATSAPP = "573167934249";

function sendEmail(){

    const message =
        document.getElementById("emailMessage").value;

    window.location.href =
`mailto:${EMAIL}?subject=Appointment&body=${encodeURIComponent(message)}`;

}

function openWhatsApp(){

    const message =
        encodeURIComponent(
            "Hello! I'd like to book an appointment."
        );

    window.open(

        `https://wa.me/${WHATSAPP}?text=${message}`,

        "_blank"

    );

}

// =====================================
// REVIEWS
// =====================================

const defaultReviews = [

    {

        name:"Emily",

        stars:"★★★★★",

        review:"Absolutely loved my nails! Amazing service."

    },

    {

        name:"Sarah",

        stars:"★★★★★",

        review:"Very professional and friendly."

    }

];

function loadReviews(){

    const container =
        document.getElementById("reviewsContainer");

    if(!container) return;

    let reviews =
        JSON.parse(localStorage.getItem("heenaReviews"));

    if(!reviews){

        reviews = defaultReviews;

        localStorage.setItem(

            "heenaReviews",

            JSON.stringify(reviews)

        );

    }

    container.innerHTML="";

    reviews.forEach(review=>{

        container.innerHTML += `

        <div class="reviewCard">

            <div class="stars">

                ${review.stars}

            </div>

            <p class="reviewText">

                "${review.review}"

            </p>

            <h3>

                - ${review.name}

            </h3>

        </div>

        `;

    });

}

function addReview(){

    const name =
        document.getElementById("reviewName").value.trim();

    const stars =
        document.getElementById("reviewStars").value;

    const review =
        document.getElementById("reviewMessage").value.trim();

    if(name==="" || review===""){

        alert("Please complete all fields.");

        return;

    }

    const reviews =
        JSON.parse(localStorage.getItem("heenaReviews")) || [];

    reviews.unshift({

        name,

        stars,

        review

    });

    localStorage.setItem(

        "heenaReviews",

        JSON.stringify(reviews)

    );

    document.getElementById("reviewName").value="";

    document.getElementById("reviewMessage").value="";

    document.getElementById("reviewStars").selectedIndex=0;

    loadReviews();

}

window.addEventListener(

    "load",

    loadReviews

);