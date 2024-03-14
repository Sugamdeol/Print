function printFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(event) {
            const fileContent = event.target.result;
            const fileContentElement = document.getElementById('fileContent');
            fileContentElement.textContent = fileContent;
            window.print();
        };

        reader.readAsText(file);
    } else {
        alert('Please select a file.');
    }
}
