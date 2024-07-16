
// NAVIGATION BAR FUNTION
document.querySelector('.menu_btn').onclick = () => {
    document.querySelector('.navbar').classList.toggle('active');
    document.getElementById('html').classList.toggle('no-scroll');
       
}

// CLOSE NAVBAR WHEN CLICKING ON LIST_LINK
window.addEventListener('click', function(e){
    if (e.target.classList.contains('list_link')) {
        document.querySelector('.navbar').classList.remove('active');
        document.getElementById('html').classList.remove('no-scroll');
    }
});


// ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING
const header = document.querySelector('.header');
window.addEventListener('scroll', function () {

    header.classList.toggle('on', window.scrollY > 0);

});