// --- SCROLL REVEAL ---
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        if (elementTop < windowHeight - 50) { 
            reveals[i].classList.add("active"); 
        }
    }
}

let isScrolling = false;
window.addEventListener("scroll", function() {
    if (!isScrolling) {
        window.requestAnimationFrame(function() {
            reveal();
            isScrolling = false;
        });
        isScrolling = true;
    }
});

// Trigger awal saat halaman selesai dimuat
document.addEventListener("DOMContentLoaded", function() {
    reveal();
});

// --- SWITCH TABS EXPERIENCE ---
function openTab(tabName) {
    const tabContents = document.querySelectorAll('#experience .tab-content');
    tabContents.forEach(tab => tab.classList.remove('active'));

    const tabBtns = document.querySelectorAll('#experience .tab-btn');
    tabBtns.forEach(btn => btn.classList.remove('active'));

    const targetContent = document.getElementById(tabName);
    const targetBtn = document.querySelector(`#experience .tab-btn[data-target="${tabName}"]`);
    
    if (targetContent) targetContent.classList.add('active');
    if (targetBtn) targetBtn.classList.add('active');
}

// --- SWITCH TABS GALLERY ---
function openGalleryTab(tabName) {
    const tabContents = document.querySelectorAll('.tab-content-gallery');
    const tabBtns = document.querySelectorAll('.tab-btn-gallery');

    tabContents.forEach(tab => tab.classList.remove('active'));
    tabBtns.forEach(btn => btn.classList.remove('active'));

    const targetTab = document.getElementById(tabName);
    const targetBtn = document.querySelector(`.tab-btn-gallery[data-target="${tabName}"]`);

    if (targetTab) {
        void targetTab.offsetWidth; // Reflow trigger untuk transisi smooth
        targetTab.classList.add('active');
    }
    if (targetBtn) targetBtn.classList.add('active');
}

// --- MODAL POPUP PROJECTS ---
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModalBtn(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function closeModal(event, element) {
    if (event.target === element) {
        element.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// --- SLIDER FOTO DALAM MODAL ---
function changeSlide(direction, sliderId) {
    const slides = document.querySelectorAll(`#${sliderId} .slide`);
    if (!slides.length) return;
    
    let currentIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));
    if (currentIndex === -1) currentIndex = 0;
    
    slides[currentIndex].classList.remove('active');
    let nextIndex = (currentIndex + direction + slides.length) % slides.length;
    slides[nextIndex].classList.add('active');
}

// --- LIGHTBOX POSTER FULLSCREEN ---
function openPoster() {
    const poster = document.getElementById('poster-fullscreen');
    if (poster) poster.classList.add('active');
}

function closePosterBtn() {
    const poster = document.getElementById('poster-fullscreen');
    if (poster) poster.classList.remove('active');
}

function closePoster(event, element) {
    if (event.target === element) {
        element.classList.remove('active');
    }
}