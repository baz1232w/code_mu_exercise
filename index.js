const textArea = document.querySelector('.text_area'),
      total = document.querySelector('.total'),
      character = document.querySelector('.character'),
      list = document.querySelector('.list')

textArea.addEventListener('blur',()=>{
    const arr1  = textArea.value.split(' ')
    const arr2 = textArea.value.split('')
    let totalWords = 0;
    let totalCharacter = 0;
    let obj = {}
    let objTotal = 0;
    arr2.forEach(char => {
        if(char !== ' '){
            obj[char] = obj[char] + 1 || 1 
            objTotal++
        }
    })

    if(list.lastChild){
        list.querySelectorAll('li').forEach(el => list.removeChild(el))
    }

    for(let key in obj){
        const li = document.createElement('li')
        li.textContent = key + " " + ((obj[key] / objTotal) * 100).toFixed(2) + " %"

        list.appendChild(li)
    }


    for(const word of arr1 ){
        if(word.length > 0){
            totalWords++
            for(let char of word){
                totalCharacter++
            }
        }else{
            false
        }
    }

    character.textContent = totalCharacter
    total.textContent = totalWords
})