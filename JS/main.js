let visibleMenu = false

const  showMenu = () => {
    if (visibleMenu) {
        document.getElementById('nav').classList = ''
        visibleMenu = false
    } else {
        document.getElementById('nav').classList = 'responsive'
        visibleMenu = true
    }
}

const select = () => {
    document.getElementById('nav').classList = ''
    visibleMenu = false
}

const effectSkills = () => {
    const skills = document.getElementById('skills')
    const distanceSkills = window.innerHeight - skills.getBoundingClientRect().top
    if (distanceSkills >= 300) {
        const theSkills = document.getElementsByClassName('progress')
        theSkills[0].classList.add('javascript')
        theSkills[1].classList.add('htmlcss')
        theSkills[2].classList.add('react')
        theSkills[3].classList.add('tailwind')
        theSkills[4].classList.add('communication')
        theSkills[5].classList.add('teamwork')
        theSkills[6].classList.add('dedication')
        theSkills[7].classList.add('creativity')
    }
}

window.onscroll = () => {
    effectSkills()
}