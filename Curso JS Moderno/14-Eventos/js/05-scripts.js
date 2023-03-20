window.addEventListener('scroll', () => {
    // const scrollPX = window.scrollY
    // console.log(scrollPX)

    const premium = document.querySelector('.premium')
    const ubicacion = premium.getBoundingClientRect();
    ubicacion.bottom // CUántos píxeles nos quedan para llegar al elemento desde arriba
    if (ubicacion.top < 100) {
        console.log("elemento ya visible");
    } else {
        console.log('todavía no');
    }
})
