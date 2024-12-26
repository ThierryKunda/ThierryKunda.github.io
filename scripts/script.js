let toCopy = document.querySelectorAll("code");
toCopy.forEach(el => el.addEventListener('click', (e) => {
    console.log(el.textContent)
    navigator.clipboard.writeText(el.textContent)
}))