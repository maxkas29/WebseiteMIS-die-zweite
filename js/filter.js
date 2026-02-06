
document.addEventListener('DOMContentLoaded', function () {

    const filterButtons = document.querySelectorAll('.filter-btn');

    const filterItems = document.querySelectorAll('.filter-item');

    // Funktion zum Filtern der Items
    function filterItemsByCategory(category) {
        filterItems.forEach(item => {

            const itemCategory = item.getAttribute('data-category');


            if (category === 'all' || itemCategory === category) {
                item.style.display = '';

                item.style.opacity = '0';
                setTimeout(() => {
                    item.style.opacity = '1';
                }, 50);
            } else {

                item.style.display = 'none';
            }
        });
    }

    // Event-Listener für jeden Button hinzufügen
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {

            const category = this.getAttribute('data-filter');

            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterItemsByCategory(category);
        });
    });
});
