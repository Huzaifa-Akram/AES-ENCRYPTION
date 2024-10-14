function encryptAES() {
    const msg = "PHELE PARTY Do.........."
    const resultsDiv = document.getElementById('results');
    const resultDiv = document.createElement('div');
    resultDiv.className = 'result';
    resultDiv.innerHTML = `<h3>${msg}</h3>`;
    resultsDiv.appendChild(resultDiv);
}