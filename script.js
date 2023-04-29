let container = document.createElement('div')
let inputTag = document.createElement('textarea')
let keyboard = document.createElement('div')
document.body.append(container)
container.append(inputTag)
container.append(keyboard)
container.className = 'content'
inputTag.className = 'content__input'
keyboard.className = 'content__keyboard'
const first = '`0123456789-='
const second = `qwertyuiop[]\\`
const third = "asdfghjkl;'"
const fourth = 'zxcvbnm,./'

for (let i = 0; i < 5; i++) {
    let temp = document.createElement('div')
    keyboard.append(temp)
    for (let j = 0; j < 13; j++) {
    let butt = document.createElement('button')
    temp.append(butt)
 }
}

let backSpace = document.createElement('button')
backSpace.id = 'backspace'
keyboard.children[0].append(backSpace)

keyboard.children[1].firstChild.id = 'tab'
keyboard.children[1].append(document.createElement('button'))
keyboard.children[1].append(document.createElement('button'))

keyboard.children[2].firstChild.id = 'caps-lock'
keyboard.children[2].lastChild.id = 'enter'

keyboard.children[3].firstChild.id = 'shift'
keyboard.children[3].lastChild.id = 'shift'

for (let i = 0; i < 9; i++) {
    keyboard.children[4].lastChild.remove()
}

keyboard.children[4].lastChild.id = 'space'

for (let i = 0; i < 5; i++) {
    keyboard.children[4].append(document.createElement('button'))
}

document.getElementById('backspace').innerHTML = 'Backspace'
document.getElementById('tab').innerHTML = 'Tab'
keyboard.children[1].lastChild.innerHTML = 'Del'
document.getElementById('caps-lock').innerHTML = 'CapsLock'
document.getElementById('enter').innerHTML = 'Enter'
document.getElementById('shift').innerHTML = 'Shift'
keyboard.children[3].lastChild.innerHTML = 'Shift'
keyboard.children[4].lastChild.innerHTML = 'Ctrl'
keyboard.children[4].firstChild.innerHTML = 'Ctrl'

let temp = keyboard.children[0].firstChild
for (let l of first) {
    temp.innerHTML = l
    temp = temp.nextSibling
}
temp = keyboard.children[1].firstChild.nextSibling
for (let l of second) {
    temp.innerHTML = l
    temp = temp.nextSibling
}
temp = keyboard.children[2].firstChild.nextSibling
for (let l of third) {
    temp.innerHTML = l
    temp = temp.nextSibling
}
temp = keyboard.children[3].firstChild.nextSibling
for (let l of fourth) {
    temp.innerHTML = l
    temp = temp.nextSibling
}
keyboard.children[4].firstChild.nextSibling.innerHTML = 'Win'
keyboard.children[4].firstChild.nextSibling.id = 'win'
document.getElementById('space').previousSibling.innerHTML = 'Alt'
document.getElementById('space').previousSibling.id = 'alt'
document.getElementById('space').nextSibling.innerHTML = 'Alt'
document.getElementById('space').nextSibling.id = 'alt'

let buttons = Array.from(document.querySelectorAll('button'))

function print(event) {
    if (event.key == 'Backspace') {
        inputTag.value = inputTag.value.slice(0, inputTag.value.length - 1)
    }
    else {
        inputTag.value += event.key
    }
    buttons.forEach((b) => {
        if (b.innerHTML == event.key) {
            b.classList.add('elem-hover')
        }
    })
  }

document.addEventListener('keydown', print)
document.addEventListener('keyup', function(event) {
    buttons.forEach((b) => {
        if (b.innerHTML == event.key) {
            b.classList.remove('elem-hover')
        }
    })
  })

  buttons.forEach((b) => {
   b.addEventListener('click', (event) => {
   inputTag.value += event.target.innerHTML
   event.target.classList.add('elem-hover')
})
b.addEventListener('mouseleave', (event) => {
    event.target.classList.remove('elem-hover')
 })
  })