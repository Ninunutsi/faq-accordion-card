
let testArrow = document.querySelectorAll(".image")
let testquestion = document.querySelectorAll('.question')
let testAnswer = document.querySelectorAll('.answer')
let block = document.getElementById("block")
let clonedDivs = []

for(let i = 0; i < 5; i++){
    clonedDivs[i] = block.cloneNode(true)
}

let texts = [
    'How many team members can I invite?',
    'What is the maximum file upload size?',
    'how do I reset my password?',
    'Can I cancel my subscription?',
    'Do you provide additional support?'
]

for(let i = 0; i < clonedDivs.length; i++){
    testquestion[i].innerHTML = texts[i]
}

for(let i =0; i < testquestion.length; i++){
    testquestion[i].addEventListener('click', () => {
        if(testAnswer[i].style.display === 'block'){
            testAnswer[i].style.display = 'none'
            testquestion[i].style.fontWeight = '500'
            testArrow[i].style.transform = 'rotate(360deg)'
        }else{
            testAnswer[i].style.display = 'block'
            testquestion[i].style.fontWeight = '700'
            testArrow[i].style.transform = 'rotate(180deg)'

        }
        
    })
}



console.log(clonedDivs)
