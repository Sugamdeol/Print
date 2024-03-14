function printFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(event) {
            const fileContent = event.target.result;
            const fileContentElement = document.getElementById('fileContent');
            fileContentElement.textContent = fileContent;
            
            // Open print dialog
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                window.print();
            } else {
                alert('Please use a mobile device to test print preview.');
            }
        };

        reader.readAsText(file);
    } else {
        alert('Please select a file.');
    }
}
