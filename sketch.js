let campoIdade;

function setup() {
  createCanvas(400, 400);
  campoIdade = createInput("15");
}
function setup() {
    createCanvas(800, 400);
    createSpan("Sua idade:");
    campoIdade = createInput("5");
    campoFantasia = createCheckbox(" Gosta de fantasia?");
}

function draw() {
    background("white");
    let idade = campoIdade.value();
    let gostaDeFantasia = campoFantasia.checked();
    let recomendacao = geraRecomendacao(idade, gostaDeFantasia);

    fill(color(76, 0, 115));
    textAlign(CENTER, CENTER);
    textSize(38);
    text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia) {
    if (idade >= 10) {
        if (idade >= 16) {
            return "Divertida Mente";
        } else {
            if (gostaDeFantasia) {
                return "Homem-Aranha: Através do Aranhaverso";
            } else {
                return "Harry Potter e as Relíquias da Morte:";
            }
        }
    } else {
        if (gostaDeFantasia) {
            return "O Serviço de Entregas da Kiki";
        } else {
            return "O Castelo Animado ";
        }
    }
}