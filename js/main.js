

const items = document.querySelectorAll(".container a");

    function toggleContainer(){
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('active');
    }

    items.forEach(item => item.addEventListener('click',toggleContainer));