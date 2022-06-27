const vImg = document.querySelector('.videoThumbnail')
const vTitle = document.querySelector('.videoTitle')
const vLength = document.querySelector('.videoLength')
const input = document.querySelector('.userInput')
const search = document.querySelector('.search')
const form = document.querySelector('.ytlink')

let idB = input.value.substring(input.value.indexOf('=') + 1)
let id = idB.substring(idB.indexOf('&'), 0)

function handleForm(event) {
    event.preventDefault();

    if (input.value.includes('youtube.com')) {
        vImg.src = `http://img.youtube.com/vi/${id}/maxresdefault.jpg`;
    } else {
        input.value = 'Invalid Link'
    }
}

form.addEventListener('submit', handleForm);