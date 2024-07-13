document.getElementById('qrForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = document.getElementById('data').value;
    const qrcodeContainer = document.getElementById('qrcode');
    qrcodeContainer.innerHTML = '';
    const qrcode = new QRCode(qrcodeContainer, {
        text: data,
        width: 128,
        height: 128
    });

    setTimeout(() => {
        const qrCanvas = qrcodeContainer.querySelector('canvas');
        const qrImage = qrCanvas.toDataURL("image/png");
        const downloadLink = document.getElementById('downloadLink');
        downloadLink.href = qrImage;
        downloadLink.style.display = 'inline-block';
    }, 500);
});

document.getElementById('toggleDarkMode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
