// Fonction pour calculer le numéro de semaine ISO
function getWeekNumber(date) {
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
}

// Définir la date d'aujourd'hui dans l'input de type date
document.addEventListener('DOMContentLoaded', function() {
    const inputDate = document.getElementById('Start');
    const weekNumberSpan = document.getElementById('WeekNumber');
    const today = new Date().toISOString().split('T')[0];
    inputDate.value = today;
    
    // Afficher le numéro de la semaine initiale
    const todayDate = new Date(today);
    const weekNum = getWeekNumber(todayDate);
    weekNumberSpan.textContent = `Semaine ${weekNum}`;
    
    // Mettre à jour le numéro de semaine quand la date change
    inputDate.addEventListener('change', function() {
        const selectedDate = new Date(this.value);
        const weekNum = getWeekNumber(selectedDate);
        weekNumberSpan.textContent = `Semaine : ${weekNum}`;
    });
});