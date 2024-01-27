const $ = document
const textToSearchElm = $.getElementById('text-to-search')
const searchBtnElm = $.querySelector('button')
const paragraphElm = $.getElementById('paragraph')

const searchInTextHandler = () =>{
    let patternRegex = new RegExp(textToSearchElm.value, 'gi')
    paragraphElm.innerHTML = paragraphElm.innerText.replace(patternRegex, result => `<mark>${result}</mark>`)
}

searchBtnElm.addEventListener('click', searchInTextHandler)
textToSearchElm.addEventListener('keyup', event =>{
    if(event.code === 'Enter' || event.target.value === '' || event.code === 'Backspace') searchInTextHandler()
})