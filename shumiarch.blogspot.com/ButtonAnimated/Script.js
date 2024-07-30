
function applyWrapperStyles() {
    const wrapper = document.querySelector('.wrapper');

    if (window.matchMedia("(max-width: 540px)").matches) {
        // Jika lebar layar kurang dari atau sama dengan 411px
        wrapper.style.display = 'flex';
        wrapper.style.flexDirection = 'column';
        wrapper.style.alignItems = 'center';
        wrapper.style.gap = '15px';
    } else {
        // Mengembalikan ke style default jika tidak memenuhi kondisi
        wrapper.style.display = '';
        wrapper.style.flexDirection = '';
        wrapper.style.alignItems = '';
        wrapper.style.gap = '';
    }
}

// Memanggil fungsi saat halaman dimuat
window.addEventListener('load', applyWrapperStyles);

// Memanggil fungsi saat ukuran jendela diubah
window.addEventListener('resize', applyWrapperStyles);
