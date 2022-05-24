const buttons = Array.from(document.querySelectorAll('button'))
const resultBox = document.getElementById('result-box')

console.log(buttons)

buttons.map( button =>{
    button.addEventListener('click', (e)=>{
        switch(e.target.textContent){
            case 'DEL':
                console.log('delete button')
                resultBox.innerText = resultBox.innerText.slice(0, -1)
                break;
            
            case '=':
                try{
                resultBox.innerText = eval(resultBox.innerText)
                
                }catch{
                    resultBox.innerText = "Wrong Syntax!"
                }
                break;
            case 'C':
                resultBox.innerText = '';
                break;
         default: 
            resultBox.innerText += e.target.innerText
                break;
        }
    })
})

