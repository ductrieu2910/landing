

const items = document.querySelectorAll(".container a");

    function toggleContainer(){
        const isActive = this.classList.contains('active');
    items.forEach(item => {
        item.classList.remove('active');
        item.nextElementSibling.classList.remove('active');
    });
    if (!isActive) {
        this.classList.add('active');
        this.nextElementSibling.classList.add('active');
    }
    }
    items.forEach(item => item.addEventListener('click',toggleContainer));

