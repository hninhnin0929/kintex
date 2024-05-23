console.log("Hello, World!");
document.addEventListener('DOMContentLoaded', function() {
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownItems = document.querySelectorAll('.dropdown-content a');

    dropdownItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            const selectedLang = this.getAttribute('data-lang');
            dropdownBtn.textContent = selectedLang;
        });
    });
});
