function previewImage(event) {
    const preview = document.getElementById('preview');
    const fileInput = document.getElementById('profileImage');
    
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();

        reader.onload = function(event) {
            preview.src = event.target.result;
            preview.style.display = 'block';
        }

        reader.readAsDataURL(file);
    }
}

document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault();
});