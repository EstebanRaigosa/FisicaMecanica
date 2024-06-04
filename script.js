document.getElementById('jumpForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const speed = parseFloat(document.getElementById('speed').value);
    const mass = parseFloat(document.getElementById('mass').value);
    const g = 9.8; // Aceleración debida a la gravedad

    // Cálculo de la altura máxima
    const height = (speed ** 2 / (2 * g)) + 1;

    document.getElementById('result').innerHTML = `La altura máxima alcanzada es: ${height.toFixed(2)} metros`;
});
