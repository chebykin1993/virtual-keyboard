let container = document.createElement('div')
let inputTag = document.createElement('textarea')
let keyboard = document.createElement('div')
document.body.append(container)
container.append(inputTag)
container.append(keyboard)
container.className = 'content'
inputTag.className = 'content__input'
keyboard.className = 'content__keyboard'

const symbols = ['`0123456789-=', `qwertyuiop[]\\`, "asdfghjkl;'", 'zxcvbnm,./']
const russian = ["йцукенгшщзхъ", "фывапролджэ", "ячсмитьбю."]

let letters = 'qwertyuiopasdfghjklzxcvbnm'
let lettersRu = "йцукенгшщзхъфывапролджэячсмитьбю"
let lettersUp = letters.toUpperCase()
let buttDown = new Set()

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

for (let i = 0; i < 4; i++) {
    let temp = keyboard.children[i].firstChild.nextSibling
    if (i === 0) {temp = keyboard.children[i].firstChild}
    for (let l of symbols[i]) {
      temp.innerHTML = l
      if (letters.includes(l)) {temp.className = l}
      temp = temp.nextSibling
 }
}

document.getElementById('backspace').innerHTML = 'Backspace'
document.getElementById('tab').innerHTML = 'Tab'
document.getElementById('caps-lock').innerHTML = 'CapsLock'
document.getElementById('enter').innerHTML = 'Enter'
document.getElementById('shift').innerHTML = 'Shift'
keyboard.children[1].lastChild.innerHTML = 'Del'
keyboard.children[3].lastChild.innerHTML = 'Shift'
keyboard.children[4].lastChild.innerHTML = 'Ctrl'
keyboard.children[4].firstChild.innerHTML = 'Ctrl'
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
    else if (event.key == 'Tab') {inputTag.value += '    '}
    else if (event.key == 'CapsLock') {
        buttons.forEach((b) => {
            if (letters.includes(b.innerHTML)) {
                b.innerHTML = b.innerHTML.toUpperCase()
            }
            else if (lettersUp.includes(b.innerHTML))  {
                b.innerHTML = b.innerHTML.toLowerCase()
            }
        })
    }
    else if (event.key == 'Enter') {inputTag.value += '\n'}
    else if (event.key == 'Shift') {
        buttons.forEach((b) => {
            if (letters.includes(b.innerHTML)) {b.innerHTML = b.innerHTML.toUpperCase()}
            else {let temp = '~!@#$%^&*()_+{}|:"<>?'[0]}
        })
    }
    else if (event.key == 'Control') {
        buttDown.add(event.key)
    }
    else if (event.key == 'Alt') {
            buttDown.add(event.key)
        }
    else if (keyboard.children[1].firstChild.nextSibling.innerHTML == 'й') {
        buttons.forEach((b) => {
            if (event.key == b.className) {inputTag.value += b.innerHTML}
        })
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

function lang() {
  if (buttDown.size == 2) {
    if (keyboard.children[1].firstChild.nextSibling.innerHTML == 'q') {
    for (let i = 1; i < 4; i++) {
        let temp = keyboard.children[i].firstChild.nextSibling
        for (let l of russian[i-1]) {
          temp.innerHTML = l
          temp = temp.nextSibling
     }
    }
    keyboard.children[0].firstChild.innerHTML = 'ё'
    buttDown.clear()
   }
   else {
    for (let i = 1; i < 4; i++) {
        let temp = keyboard.children[i].firstChild.nextSibling
        for (let l of symbols[i]) {
          temp.innerHTML = l
          temp = temp.nextSibling
     }
    }
    keyboard.children[0].firstChild.innerHTML = '`'
    buttDown.clear()
   }
  }
}

document.addEventListener('keydown', print)
document.addEventListener('keyup', (event) => {
    buttons.forEach((b) => {
        if (b.innerHTML == event.key) {
            b.classList.remove('elem-hover')
        }
    })
    if (event.key == 'Shift') {
        buttons.forEach((b) => {
            if (lettersUp.includes(b.innerHTML)) {b.innerHTML = b.innerHTML.toLowerCase()}
            else {let temp = '~!@#$%^&*()_+{}|:"<>?'[0]}
        })
    }
    lang()
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