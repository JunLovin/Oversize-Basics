const switchBg = document.getElementById('switch-bg')
const siwtchBgAndroid = document.getElementById('switch-bg-android')

const bodyDark = () => {
    document.body.classList.toggle('dark')
}

switchBg.addEventListener('click', bodyDark)
siwtchBgAndroid.addEventListener('click', bodyDark)