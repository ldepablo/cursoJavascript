const cardDiv = document.querySelector('.card')

cardDiv.addEventListener('click', e => {
    if (e.target.classList.contains('titulo')) {
        console.log('titulo')        
    } else if (e.target.classList.contains('card')) {
        console.log('card')        
    } else {
        console.log('otro')
    }
})
