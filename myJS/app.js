let elSelect = document.querySelector('.select')
let elText = document.querySelector('.text')

let friendLitter = 'salom, bugun futbolga bormaymizmi?'
let momLitter = "Assalomu alaykum onajon"
let girlfriendLitter = '-------------------'
let officialLitter = "shu oy ohiriga mehnat tatili olmoqchiman"

elSelect.addEventListener('change', (evt) => {
    let selectValue = elSelect.value
    if(selectValue == 'friend'){
        elText.textContent = friendLitter 
    }else if(selectValue == 'mom') {
        elText.textContent = momLitter
    }else if(selectValue == 'girlfriend') {
        elText.textContent = girlfriendLitter
    }else if(selectValue == 'official') {
        elText.textContent = officialLitter
    }
})