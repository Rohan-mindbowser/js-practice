const debounceInput = document.querySelector('#input')
const debounceValue = document.querySelector('#debounceValue')

/** Debounce */
function debounce(cb, delay = 1000) {
    let time
    clearTimeout(time)
    time = setTimeout(() => {
        cb()
    }, delay);
}

debounceInput.addEventListener('keyup', (e) => {
    debounce(() => {
        debounceValue.textContent = e.target.value
    })
})
/** Debounce */
