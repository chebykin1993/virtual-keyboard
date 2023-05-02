let container = document.createElement('div')
let inputTag = document.createElement('textarea')
let keyboard = document.createElement('div')
let header = document.createElement('h1')
let p1 = document.createElement('p')
let p2 = document.createElement('p')
p1.innerHTML = "Клавиатура создана в операционной системе Windows"
p2.innerHTML = "Для переключения языка комбинация: левыe ctrl + alt"
header.className = "header"
header.innerHTML = "RSS Virtual keyboard"
document.body.append(container)
container.append(header)
container.append(inputTag)
container.append(keyboard)
container.append(p1)
container.append(p2)
container.className = 'content'
inputTag.className = 'content__input'
keyboard.className = 'content__keyboard'

const symbols = ['`1234567890-=', `qwertyuiop[]\\`, "asdfghjkl;'", 'zxcvbnm,./']
const russian = ["йцукенгшщзхъ", "фывапролджэ", "ячсмитьбю."]
navigator.lang
let letters = 'qwertyuiopasdfghjklzxcvbnm'
let lettersRu = "ёйцукенгшщзхъфывапролджэячсмитьбю"
let letRuUp = lettersRu.toUpperCase()
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
keyboard.children[1].lastChild.id = 'del'
keyboard.children[3].lastChild.innerHTML = 'Shift'
keyboard.children[4].lastChild.innerHTML = 'Ctrl'
keyboard.children[4].lastChild.id = 'ctrl'
keyboard.children[3].lastChild.previousSibling.innerHTML =  "▲"
keyboard.children[3].lastChild.previousSibling.id = 'arrow-up'
keyboard.children[4].lastChild.previousSibling.innerHTML =  "►"
keyboard.children[4].lastChild.previousSibling.id = 'arrow-right'
keyboard.children[4].lastChild.previousSibling.previousSibling.previousSibling.innerHTML = "◄"
keyboard.children[4].lastChild.previousSibling.previousSibling.previousSibling.id = 'arrow-left'
keyboard.children[4].lastChild.previousSibling.previousSibling.innerHTML = "▼"
keyboard.children[4].lastChild.previousSibling.previousSibling.id = 'arrow-down'
keyboard.children[4].firstChild.innerHTML = 'Ctrl'
keyboard.children[4].firstChild.id= 'ctrl'
keyboard.children[4].firstChild.nextSibling.innerHTML = 'Win'
keyboard.children[4].firstChild.nextSibling.id = 'win'
document.getElementById('space').previousSibling.innerHTML = 'Alt'
document.getElementById('space').previousSibling.id = 'alt'
document.getElementById('space').nextSibling.innerHTML = 'Alt'
document.getElementById('space').nextSibling.id = 'alt'

let buttons = Array.from(document.querySelectorAll('button'))
let ids = Array.from(document.querySelectorAll('[id]'))

function print(event) {
    if (event.type == 'click') {event.key = event.target.innerHTML}
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
        let temp = '~!@#$%^&*()_+{}|:"<>?'
        let count = 0
        if (keyboard.children[1].firstChild.nextSibling.innerHTML == 'й' || 
        keyboard.children[1].firstChild.nextSibling.innerHTML == 'Й') {
            buttons.forEach((b) => {
                if (!letRuUp.includes(b.innerHTML)) {
                if (lettersRu.includes(b.innerHTML)) {b.innerHTML = b.innerHTML.toUpperCase();}
                else if (!ids.includes(b)) {
                    b.innerHTML = temp[count]
                    count++;
                    }
                  }
                })
            }
        else {
        buttons.forEach((b) => {
            if (!lettersUp.includes(b.innerHTML)) {
            if (letters.includes(b.innerHTML)) {b.innerHTML = b.innerHTML.toUpperCase();}
            else if (!ids.includes(b)) {
                b.innerHTML = temp[count]
                count++;
                }
              }
            })
        }
    }
    else if (event.key == 'Control') {
        buttDown.add(event.key)
    }
    else if (event.key == 'Alt') {
            buttDown.add(event.key)
        }
    else if (lettersRu.includes(keyboard.children[1].firstChild.nextSibling.innerHTML)) {
        buttons.forEach((b) => {
            if (event.key == b.className) {
                inputTag.value += b.innerHTML
            }
            else if (event.key == b.innerHTML) {inputTag.value += b.innerHTML}
        })
        if (event.code == 'Space') {inputTag.value += " "}
    }
    else if (event.key == 'ArrowUp') {inputTag.value += "▲"}
    else if (event.key == 'ArrowDown') {inputTag.value += "▼"}
    else if (event.key == 'ArrowLeft') {inputTag.value += "◄"}
    else if (event.key == 'ArrowRight') {inputTag.value += "►"}
    else {
        if (letRuUp.includes(keyboard.children[1].firstChild.nextSibling.innerHTML)) {
            
        }
        else {inputTag.value += event.key} 
    }
    buttons.forEach((b) => {
        if (b.innerHTML == event.key) {
            b.classList.add('elem-hover')
        }
        if (event.key == b.className) {b.classList.add('elem-hover')}
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
  else {buttDown.clear()}
}

document.addEventListener('keydown', print)
document.addEventListener('keyup', (event) => {
    buttons.forEach((b) => {
        b.classList.remove('elem-hover')
    })
    if (event.key == 'Shift') {
        let temp = "`1234567890-=[]\\;',./"
        count = 0
        if (keyboard.children[1].firstChild.nextSibling.innerHTML == 'Й') {
            buttons.forEach((b) => {
                if (letRuUp.includes(b.innerHTML)) {
                  b.innerHTML = b.innerHTML.toLowerCase()
                }
                else if (!ids.includes(b)) {
                    b.innerHTML = temp[count]
                    count++;
                    }
                })
            }
        else {
        buttons.forEach((b) => {
            if (lettersUp.includes(b.innerHTML)) {b.innerHTML = b.innerHTML.toLowerCase()}
            else if (!ids.includes(b)) {
              b.innerHTML = temp[count]
              count++
            }
        })
      }
    }
    lang()
  })

  buttons.forEach((b) => {
   b.addEventListener('click', (event) => {
    if (ids.includes(event.target)) {print(event)}
    else {
      inputTag.value += event.target.innerHTML
    }
    event.target.classList.add('elem-hover')  
})
b.addEventListener('mouseleave', (event) => {
    event.target.classList.remove('elem-hover')
 })
  })