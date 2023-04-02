const textArea = document.querySelector('.text_area'),
      total = document.querySelector('.total'),
      character = document.querySelector('.character');

textArea.addEventListener('blur',()=>{
    const arr  = textArea.value.split(' ')
    let totalWords = 0;
    let totalCharacter = 0;
    for(const word of arr ){
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