const source = document.getElementById('shirts-template').innerHTML
const template = Handlebars.compile(source)
const switchBg = document.getElementById('switch-bg')
const siwtchBgAndroid = document.getElementById('switch-bg-android')

const context = {
    camisetasAndroid: [
        {
            name: 'Beige',
            img: 'resources/img/Camisetas/beige.webp',
            file: 'beige.html',
            mobile: true,
        },
        {
            name: 'Blanco',
            img: 'resources/img/Camisetas/blanco.webp',
            file: 'white.html',
            mobile: true
        },
        {
            name: 'Blanco Hueso',
            img: 'resources/img/Camisetas/blancohuesoh.webp',
            file: 'whiteBone.html',
            mobile: true
        },
        {
            name: 'Cocoa Oscura',
            img: 'resources/img/Camisetas/cocoa_2.webp',
            file: 'darkCocoa.html',
            mobile: true
        },
        {
            name: 'Cocoa Clara',
            img: 'resources/img/Camisetas/COCOAH.webp',
            file: 'lightCocoa.html',
            mobile: true
        },
        {
            name: 'Azul Marino',
            img: 'resources/img/Camisetas/DSC1765.webp',
            file: 'darkBlue.html',
            mobile: true
        },
        {
            name: 'Ploma Oscura',
            img: 'resources/img/Camisetas/DSC3331.webp',
            file: 'silver.html',
            mobile: true
        },
        {
            name: 'Negra',
            img: 'resources/img/Camisetas/negro.webp',
            file: 'black.html',
            mobile: true
        },
        {
            name: 'Ploma Clara',
            img: 'resources/img/Camisetas/PLOMO2.webp',
            file: 'lightSilver.html',
            mobile: true
        }
    ]
}

const compiledHTML = template(context)
const box = document.getElementById('mobile-shirts')
box.innerHTML = compiledHTML

const bodyDark = () => {
    document.body.classList.toggle('dark')
}

switchBg.addEventListener('click', bodyDark)
siwtchBgAndroid.addEventListener('click', bodyDark)