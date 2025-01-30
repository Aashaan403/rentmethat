// Select the navigation bar
const navbar = document.querySelector('.navigationbar');

// Add a scroll event listener
window.addEventListener('scroll', () => {
    if (window.scrollY > 70) { // Trigger the shrink when scrolled 50px
        navbar.classList.add('shrink'); // Add the shrink class
    } else {
        navbar.classList.remove('shrink'); // Remove the shrink class when at the top
    }
});

const handleOnMouseMove = e => {
    const { currentTarget: target } =e;

    const rect = target.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x",'${x}px');
    target.style.setProperty("--mouseyx",'${y}px');
}

for(const card of document.querySelectorAll(".feature")){
    card.onmousemove = e => handleOnMouseMove(e);
}
