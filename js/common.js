// Slider

let currentIndex = 0;
let intervalId;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function startAutoplay() {
    intervalId = setInterval(nextSlide, 3000); // Change 3000 to the desired interval in milliseconds
}

function stopAutoplay() {
    clearInterval(intervalId);
}

// Start autoplay when the page loads
document.addEventListener('DOMContentLoaded', startAutoplay);

// Stop autoplay when user interacts with the controls
document.querySelector('.carousel-control.prev').addEventListener('click', function () {
    stopAutoplay();
    prevSlide();
    startAutoplay(); // Restart autoplay after interaction
});

document.querySelector('.carousel-control.next').addEventListener('click', function () {
    stopAutoplay();
    nextSlide();
    startAutoplay(); // Restart autoplay after interaction
});


// Countdown timer

function startCountdown() {
    const countdownElement = document.getElementById('countdown');

    function getCurrentTime() {
        return new Date();
    }

    function calculateInitialTime() {
        const now = getCurrentTime();
        const minutes = now.getMinutes();
        const hours = now.getHours();

        let countdownMinutes;

        if (hours % 2 === 0) {
            countdownMinutes = 90 - minutes;
        } else {
            countdownMinutes = 90 - 60 - minutes;
        }

        return countdownMinutes * 60; // Convert to seconds
    }

    function formatTime(seconds) {
        const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
        const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        return `${h}:${m}:${s}`;
    }

    let remainingSeconds = calculateInitialTime();

    function updateCountdown() {
        if (remainingSeconds <= 0) {
            countdownElement.innerHTML = "00:00:00";

            const now = getCurrentTime();
            const nextEvenHour = (Math.ceil(now.getHours() / 2) * 2) % 24;
            const millisecondsUntilNextEvenHour = new Date(now.getFullYear(), now.getMonth(), now.getDate(), nextEvenHour, 0, 0) - now;

            setTimeout(startCountdown, millisecondsUntilNextEvenHour);
        } else {
            countdownElement.innerHTML = formatTime(remainingSeconds);
            remainingSeconds--;
            setTimeout(updateCountdown, 1000);
        }
    }

    updateCountdown();
}

startCountdown();


function scrollToForm() {
    const header = document.getElementById('orderWrapper');
    header.scrollIntoView({ behavior: 'smooth' });
    setTimeout(function() {
        document.getElementById('name').focus();
    }, 1000); // Adjust the timeout value as needed
}

document.addEventListener('DOMContentLoaded', function() {
    var phoneInput = document.getElementById('phone');
    var phoneError = document.getElementById('phoneError');

    phoneInput.addEventListener('input', function() {
        var phonePattern = /^(\+\d{1,3}\s?)?((\(\d{1,4}\))|\d{1,4})[\s.-]?\d{1,4}[\s.-]?\d{1,4}[\s.-]?\d{1,4}$/;
        if (phonePattern.test(phoneInput.value)) {
            phoneError.style.display = 'none'; // Ẩn thông báo lỗi khi số điện thoại hợp lệ
        } else {
            phoneError.style.display = 'block';
        }
    });
});

