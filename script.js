function reveal() {
            var reveals = document.querySelectorAll(".reveal");
            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                if (elementTop < windowHeight - 50) { reveals[i].classList.add("active"); }
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
        reveal();

        // Script buat Live Clock
        function updateClock() {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            
            document.getElementById('live-clock').textContent = `${hours}:${minutes}:${seconds}`;
        }
        
        // Update jam setiap 1 detik
        setInterval(updateClock, 1000);
        updateClock(); // Panggil sekali di awal biar gak nunggu 1 detik dulu

        //Fungsi Untuk Switch Tabs Experience
        function openTab(tabName) {
            // Sembunyikan semua isi tab
            const tabContents = document.querySelectorAll('.tab-content');
            tabContents.forEach(tab => {
                tab.classList.remove('active');
            });

            // Hapus status 'active' dari semua tombol
            const tabBtns = document.querySelectorAll('.tab-btn');
            tabBtns.forEach(btn => {
                btn.classList.remove('active');
            });

            // Tampilkan konten tab yang diklik dan kasih efek aktif di tombolnya
            document.getElementById(tabName).classList.add('active');
            document.querySelector(`.tab-btn[data-target="${tabName}"]`).classList.add('active');
            
            // Ubah warna scrollbar tergantung tab yang aktif (Cyan buat Work, Pink buat Org)
            const scrollArea = document.querySelector(`#${tabName} .exp-scroll-area`);
            if(scrollArea) {
                if(tabName === 'work') {
                    scrollArea.style.setProperty('scrollbar-color', 'var(--accent-cyan) rgba(255, 255, 255, 0.05)');
                } else {
                    scrollArea.style.setProperty('scrollbar-color', 'var(--accent-pink) rgba(255, 255, 255, 0.05)');
                }
            }
        }
        // --- SCRIPT UNTUK MODAL PROJECTS ---
            function openModal(modalId) {
                document.getElementById(modalId).classList.add('active');
                document.body.style.overflow = 'hidden'; // Mengunci background agar tidak bisa di-scroll
            }

            function closeModalBtn(modalId) {
                document.getElementById(modalId).classList.remove('active');
                document.body.style.overflow = 'auto'; // Membuka kunci scroll background
            }

            function closeModal(event, element) {
                // Menutup pop-up secara otomatis jika user mengklik area gelap di luar kotak modal
                if (event.target === element) {
                    element.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
            }

            // --- SCRIPT UNTUK SLIDER FOTO IoT ---
            function changeSlide(direction, sliderId) {
            const slides = document.querySelectorAll(`#${sliderId} .slide`);
            
            // Cari index foto mana yang sedang aktif saat ini
            let currentIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));
            
            // Matikan foto yang sedang aktif
            slides[currentIndex].classList.remove('active');
            
            // Hitung index foto selanjutnya
            let nextIndex = (currentIndex + direction + slides.length) % slides.length;
            
            // Nyalakan foto selanjutnya
            slides[nextIndex].classList.add('active');
        }


            // --- SCRIPT UNTUK FULLSCREEN POSTER ---
            function openPoster() {
                document.getElementById('poster-fullscreen').classList.add('active');
            }

            function closePosterBtn() {
                document.getElementById('poster-fullscreen').classList.remove('active');
            }

            function closePoster(event, element) {
                // Kalau user klik di luar gambar (area hitam), poster otomatis ketutup
                if (event.target === element) {
                    element.classList.remove('active');
                }
            }
            