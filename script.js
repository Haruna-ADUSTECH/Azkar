// Toggle between Morning and Evening Azkar
document.getElementById('morning-btn').addEventListener('click', function() {
    document.getElementById('morning-azkar').style.display = 'block';
    document.getElementById('evening-azkar').style.display = 'none';
});

document.getElementById('evening-btn').addEventListener('click', function() {
    document.getElementById('morning-azkar').style.display = 'none';
    document.getElementById('evening-azkar').style.display = 'block';
});

// Counter functionality for each Azkar
document.querySelectorAll('.counter').forEach(function(counterBtn) {
    counterBtn.addEventListener('click', function() {
        let count = parseInt(this.getAttribute('data-count'), 10);
        count++;
        this.setAttribute('data-count', count);
        this.textContent = count;
    });
});

// Reset button functionality
document.querySelectorAll('.reset-btn').forEach(function(resetBtn) {
    resetBtn.addEventListener('click', function() {
        let counter = this.previousElementSibling;
        counter.setAttribute('data-count', '0');
        counter.textContent = '0';
    });
});

// Smooth toggle between sections with animations (optional)
document.getElementById('morning-btn').addEventListener('click', function() {
    let azkarList = document.getElementById('morning-azkar');
    azkarList.style.opacity = 0;
    setTimeout(() => {
        azkarList.style.display = 'block';
        azkarList.style.opacity = 1;
    }, 200);
});

document.getElementById('evening-btn').addEventListener('click', function() {
    let azkarList = document.getElementById('evening-azkar');
    azkarList.style.opacity = 0;
    setTimeout(() => {
        azkarList.style.display = 'block';
        azkarList.style.opacity = 1;
    }, 200);
});
