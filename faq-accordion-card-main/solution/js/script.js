$('.faq-active .ans').slideToggle();

const titles = document.querySelectorAll('.faq-title');

titles.forEach((el) => {
    el.addEventListener('click', function(){

        const activeEl = document.querySelector('.faq-active');
        if (activeEl && this.parentElement !== activeEl){
            $('.faq-active .ans').slideUp();
            activeEl.classList.remove('faq-active');
        }
    
        $(this.parentElement).toggleClass('faq-active');
        $(this.parentElement.querySelector('.ans')).slideToggle();
    });
});