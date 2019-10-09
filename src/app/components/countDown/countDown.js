let seconds = document.getElementById('countdown').textContent

export const countDown = setInterval(() => {
    seconds--
    document.getElementById('countdown').textContent = seconds
    if (seconds <= 0) clearInterval(countdown)
}, 1000)
