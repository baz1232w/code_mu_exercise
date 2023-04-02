const textArea = document.querySelector('.text_area'),
      total = document.querySelector('.total');

textArea.addEventListener('blur',()=>{
    const arr  = textArea.value.split(' ')
    let result = 0;

    for(const word of arr ){
        if(word.length > 0){
            result++
        }else{
            false
        }
    }

    total.textContent = result
})