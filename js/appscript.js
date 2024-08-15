document.getElementById('orderForm').onsubmit = function(e) {
    e.preventDefault();
    if (!validatePhone()) {
        phoneError.style.display = 'block';
        document.getElementById('phone').focus();
        return;
    } else {
        phoneError.style.display = 'none';
        var timestampInput = document.getElementById('Timestamp');
        var now = new Date();
        var formattedDate = now.toLocaleString('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        }).replace(',', '');
        timestampInput.value = formattedDate;
    }
    showLoading();
    var formData = new FormData(document.getElementById('orderForm'));
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://script.google.com/macros/s/AKfycbxZZAzMbPY5hjYnPUZN2DEf-gxI-umSk_qjS4cv8jwW9-aIq9u-gdfxR_yesGUVwYM2hQ/exec');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            hideLoading();
                if (xhr.status == 200) {
                    window.location.href = 'camon.html';
                } else {
                    alert('Đã xảy ra lỗi. Vui lòng thử lại.');
                }
        }
    };
    xhr.send(new URLSearchParams(formData).toString());
};

function validatePhone() {
    var phone = document.getElementById('phone').value;
    var phoneRegex = /^(\+\d{1,3}\s?)?((\(\d{1,4}\))|\d{1,4})[\s.-]?\d{1,4}[\s.-]?\d{1,4}[\s.-]?\d{1,4}$/;  // Adjust this regex according to your phone number format requirements
    return phoneRegex.test(phone);
}

function showLoading() {
    document.getElementById('loading').style.display = 'block';
}

function hideLoading() {
    document.getElementById('loading').style.display = 'none';
}

// function showPopup() {
//     document.getElementById('overlay').style.display = 'block';
//     document.getElementById('successPopup').style.display = 'block';
// }

// function closePopup() {
//     document.getElementById('overlay').style.display = 'none';
//     document.getElementById('successPopup').style.display = 'none';
//     window.scrollTo(0, 0);
//     location.reload();
// }

