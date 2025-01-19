document.getElementById('hitung').addEventListener('click', function() {
    const lambda = document.getElementById('lambda').value;
    const k = document.getElementById('k').value;

    fetch('/hitung', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `lambda=${lambda}&k=${k}`
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('nilai-lambda').textContent = lambda;
        document.getElementById('nilai-k').textContent = k;
        document.getElementById('nilai-k-1').textContent = k;
        document.getElementById('nilai-k-2').textContent = k;
        document.getElementById('nilai-k-3').textContent = k;
        document.getElementById('nilai-k-4').textContent = k;
        document.getElementById('nilai-k-5').textContent = k;
        document.getElementById('nilai-k-6').textContent = k;
        document.getElementById('nilai-k-7').textContent = k;
        document.getElementById('nilai-k-8').textContent = k;
        document.getElementById('nilai-k-9').textContent = k;
        document.getElementById('nilai-k-10').textContent = k;
        document.getElementById('probabilitas-tepat').textContent = data.tepat;
        document.getElementById('probabilitas-kurang').textContent = data.kurang_dari;
        document.getElementById('probabilitas-paling').textContent = data.paling_banyak;
        document.getElementById('probabilitas-lebih').textContent = data.lebih_dari;
        document.getElementById('probabilitas-setidaknya').textContent = data.setidaknya;
        document.getElementById('hasil').style.display = 'block'; // Tampilkan hasil tabel
    });
});

document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('lambda').value = '';
    document.getElementById('k').value = '';
    document.getElementById('nilai-lambda').textContent = '';
    document.getElementById('nilai-k').textContent = '';
    document.getElementById('nilai-k-1').textContent = '';
    document.getElementById('nilai-k-2').textContent = '';
    document.getElementById('nilai-k-3').textContent = '';
    document.getElementById('nilai-k-4').textContent = '';
    document.getElementById('nilai-k-5').textContent = '';
    document.getElementById('nilai-k-6').textContent = '';
    document.getElementById('nilai-k-7').textContent = '';
    document.getElementById('nilai-k-8').textContent = '';
    document.getElementById('nilai-k-9').textContent = '';
    document.getElementById('nilai-k-10').textContent = '';
    document.getElementById('probabilitas-tepat').textContent = '';
    document.getElementById('probabilitas-kurang').textContent = '';
    document.getElementById('probabilitas-paling').textContent = '';
    document.getElementById('probabilitas-lebih').textContent = '';
    document.getElementById('probabilitas-setidaknya').textContent = '';
    document.getElementById('hasil').style.display = 'none'; // Sembunyikan hasil tabel
});
