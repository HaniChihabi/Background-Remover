function triggerFileInput() {
    document.getElementById('fileInput').click();
}
window.handleDrop = (dotNetReference) => {
    const dropZone = document.getElementById('drop-zone'); // Your drop zone element
    dropZone.addEventListener('dragover', event => {
        event.preventDefault(); // Necessary to allow for the drop
    });

    dropZone.addEventListener('drop', event => {
        event.preventDefault();
        const files = event.dataTransfer.files;
        if (files.length > 0) {
            const file = files[0]; // Example: handling the first file
            
            // Example: Read the file as text and pass the content to Blazor
            const reader = new FileReader();
            reader.onload = async (loadEvent) => {
                const fileContent = loadEvent.target.result;
                await dotNetReference.invokeMethodAsync('HandleDroppedFile', fileContent);
            };
            reader.readAsText(file);
        }
    });
};

