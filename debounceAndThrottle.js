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

function throttle(cb, delay = 2000) {
    let time = null;

    return () => {
        if (!time) {
            cb()
            time = setTimeout(() => {
                time = null
                console.log("inside", time)
            }, 3000);
        }
    }
}

debounceInput.addEventListener('keyup', (e) => {
    // debounce(() => {
    //     debounceValue.textContent = e.target.value
    // })

    throttle(() => {
        // debounceValue.textContent = e.target.value
        console.log("Triggered")
    })()

    // throttledFunc()
})
/** Debounce */
