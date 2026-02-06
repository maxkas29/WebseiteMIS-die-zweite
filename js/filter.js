// Warte, bis das DOM vollständig geladen ist
document.addEventListener('DOMContentLoaded', function () {
    // Alle Filter-Buttons auswählen
    const filterButtons = document.querySelectorAll('.filter-btn');
    // Alle Filter-Items (die Kacheln) auswählen
    const filterItems = document.querySelectorAll('.filter-item');

    // Funktion zum Filtern der Items
    function filterItemsByCategory(category) {
        filterItems.forEach(item => {
            // Die Kategorie des aktuellen Items abrufen
            const itemCategory = item.getAttribute('data-category');

            // Wenn die Kategorie übereinstimmt oder "all" gewählt ist, das Item anzeigen
            if (category === 'all' || itemCategory === category) {
                item.style.display = ''; // Zurücksetzen auf CSS-Wert (wichtig für Bootstrap)
                // Animation hinzufügen für sanftes Einblenden (optional)
                item.style.opacity = '0';
                setTimeout(() => {
                    item.style.opacity = '1';
                }, 50);
            } else {
                // Andernfalls das Item ausblenden
                item.style.display = 'none';
            }
        });
    }

    // Event-Listener für jeden Button hinzufügen
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Die ausgewählte Kategorie aus dem data-filter Attribut des Buttons holen
            const category = this.getAttribute('data-filter');

            // Aktiven Status der Buttons aktualisieren (optional, für visuelles Feedback)
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Filter-Funktion aufrufen
            filterItemsByCategory(category);
        });
    });
});
