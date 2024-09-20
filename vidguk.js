function addReview() {
    var userName = document.getElementById('userName').value;
    var reviewText = document.getElementById('reviewText').value;

    if (userName.trim() === '' || reviewText.trim() === '') {
        alert('Будь ласка, заповніть всі поля!');
        return;
    }

    var reviewsList = document.getElementById('reviewsList');
    var li = document.createElement('li');
    li.textContent = `${userName}: ${reviewText}`;
    reviewsList.appendChild(li);

    document.getElementById('form').reset();
}