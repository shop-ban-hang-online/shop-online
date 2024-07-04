document.getElementById('orderForm').onsubmit = function(e) {
    e.preventDefault();
    var formData = new FormData(document.getElementById('orderForm'));
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://script.google.com/macros/s/AKfycbzzrJ8uAZkeijO1HlCQrS6QVa5bQmLHcTvlAwrnqLd5rwXDMg2LNfCnRvOH5bcfgh_rjQ/exec');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        alert('Data saved successfully');
    }
    };
    xhr.send(new URLSearchParams(formData).toString());
};
