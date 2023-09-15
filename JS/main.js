let visibleMenu = false

const showMenu = () => {
    if (visibleMenu) {
        document.getElementById('nav').classList = ''
        visibleMenu = false
    } else {
        document.getElementById('nav').classList = 'responsive'
        visibleMenu = true
    }
}