const Questions = [{
    q: "Em qual o truque o yo-yo é disparado para frente e retorna para a mão logo em seguida?",
    a: [{ text: "Bind", isCorrect: false },
    { text: "Volta ao mundo", isCorrect: false },
    { text: "Lançamento", isCorrect: true },
    { text: "Brain Twister", isCorrect: false }
    ]
 
},
{
    q: "Qual a ultima etapa do truque Trapézio?",
    a: [{ text:"Dar outra volta no yo-yo com a corda", isCorrect: false },
    { text: "Encostar os indicadores de ambas as mãos", isCorrect: false },
    { text: "Jogar o yo-yo pela janela", isCorrect: false },
    { text: "Mover a corda para perto do yo-yo e solta-la", isCorrect: true }
    ]
 
},
{
    q: "Como se chama o truque de yo-yo onde se faz o mesmo movimento duas vezes?",
    a: [{ text: "Bind", isCorrect: false },
    { text: "Trapézio", isCorrect: false },
    { text: "Lind Loop", isCorrect: true },
    { text: "Elevador", isCorrect: false }
    ]
 
},
{
    q: "Em qual parte da corda o indicador deve ser colocado no truque Elevador?",
    a: [{ text: "Na parte de traz", isCorrect: true },
    { text: "Na parte da frente", isCorrect: false },
    { text: "Na parte esquerda", isCorrect: false },
    { text: "Na parte direita", isCorrect: false }
    ]
 
},
{
    q: "Como se lança um yo-yo",
    a: [{ text: "O jogando para frente com a palma para baixo", isCorrect: false },
    { text: "O jogando para traz com a palma para cima", isCorrect: false },
    { text: "O jogando para frente com a palma para cima", isCorrect: true },
    { text: "O jogando para traz com a palma para baixo", isCorrect: false }
    ]
 
}
]
 
let currQuestion = 0
let score = 0
 
function loadQues() {
    const question = document.getElementById("ques")
    const opt = document.getElementById("opt")
 
    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = ""
 
    for (let i = 0; i < Questions[currQuestion].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");
 
        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
 
        choiceLabel.textContent = Questions[currQuestion].a[i].text;
 
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}
 
loadQues();
 
function loadScore() {
    const totalScore = document.getElementById("score")
    totalScore.textContent = `Você acertou ${score} de ${Questions.length} perguntas`
}
 
 
function nextQuestion() {
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove()
        document.getElementById("ques").remove()
        document.getElementById("btn").remove()
        loadScore();
    }
}
 
function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
 
    if (Questions[currQuestion].a[selectedAns].isCorrect) {
        score++;
        console.log("Correct")
        nextQuestion();
    } else {
        nextQuestion();
    }
}