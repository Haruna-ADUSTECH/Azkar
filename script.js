document.getElementById('morning-btn').addEventListener('click', function() {
    document.getElementById('morning-azkar').style.display = 'block';
    document.getElementById('evening-azkar').style.display = 'none';
});

document.getElementById('evening-btn').addEventListener('click', function() {
    document.getElementById('morning-azkar').style.display = 'none';
    document.getElementById('evening-azkar').style.display = 'block';
});

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.addEventListener('click', function() {
        let count = parseInt(this.getAttribute('data-count'));
        count += 1;
        this.setAttribute('data-count', count);
        this.textContent = count;
    });
});
