// Définir la date d'aujourd'hui dans l'input de type date
document.addEventListener('DOMContentLoaded', function() {
    const inputDate = document.getElementById('Start');
    const today = new Date().toISOString().split('T')[0];
    inputDate.value = today;
});