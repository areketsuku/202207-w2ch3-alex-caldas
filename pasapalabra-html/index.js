//letiables

const questions = [
  [
    {
      letter: "a",
      answer: "abducir",
      status: 0,
      question:
        "Dicho de una supuesta criatura extraterrestre. Apoderarse de alguien:",
    },
    {
      letter: "a",
      answer: "abrazar",
      status: 0,
      question: "Embolver a una persona con ambos brazos:",
    },
    {
      letter: "a",
      answer: "alzar",
      status: 0,
      question: "Se dice de levatar:",
    },
  ],
  [
    {
      letter: "b",
      answer: "bingo",
      status: 0,
      question:
        "Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso:",
    },
    {
      letter: "b",
      answer: "bengala",
      status: 0,
      question: "Lo usan los hooligans en los campos de futbol:",
    },
    {
      letter: "b",
      answer: "balon",
      status: 0,
      question: "Esfera, pelota, bola,... :",
    },
  ],
];

let user;
let numPreguntas = 3;
let faltanPreguntas = false;
let points = 0;
let toRanking = true;

//Loaders

$(window).ready(() => {
  calculCercle();
});
$(window).resize(() => {
  calculCercle();
});

const calculCercle = function () {
  for (let i = 0; i < 28; i++) {
    let x =
      window.innerWidth / 2 +
      (window.innerHeight / 2.5) * Math.sin((i * (2 * Math.PI)) / 27);
    let y =
      window.innerHeight / 2 -
      (window.innerHeight / 2.5) * Math.cos((i * (2 * Math.PI)) / 27);

    $(".esfera")
      .eq(i)
      .css({ left: x, top: y, transform: "translate(-50%,-50%)" });
  }
};

const nuevoNumPreguntas = function () {
  numPreguntas++;
  if (numPreguntas === 4) {
    numPreguntas = 0;
  }
};

//Triggers

$("#intro").click(function () {
  user = $("#resposta").val();
  $("#intro").css("visibility", "hidden");
  partida();
});

const ronda = function () {
  for (let i = 0; i < questions.length; i++) {
    if (questions[i][numPreguntas].status === 0) {
      faltanPreguntas = true;
      $("#pregunta").html(questions[i][numPreguntas].question);
      $("#resposta").on("keypress", function (e) {
        if (e.wich == 13) {
          switch ($("#resposta").val()) {
            case questions[i][numPreguntas].answer:
              respuestaCorrecta();
              break;
            case "pasapalabra":
              alert("pasapalabra!");
              break;
            case "end":
              respuestaEnd();
              return;
            default:
              questions[i][numPreguntas].status = 2;
              alert(
                "Respuesta erronea! La respuesta correcta es '" +
                  questions[i][numPreguntas].answer +
                  "'"
              );
          }
        }
      });
    }
    revisaSiFaltanPreguntas();
  }
};
const revisaSiFaltanPreguntas = function () {
  if (faltanPreguntas) {
    faltanPreguntas = false;
  } else {
    alert(
      "Fin del juego! Pulsa aceptar para ver tus resultados en la consola."
    );
    checkRanking();
    return;
  }
};
const partida = function () {
  faltanPreguntas = false;
  points = 0;
  toRanking = true;
  nuevoNumPreguntas();
  ronda();
};
const respuestaCorrecta = function () {
  questions[i][numPreguntas].status = 1;
  points++;
  alert("Correcto!");
};
const respuestaEnd = function () {
  toRanking = false;
  alert("Juego cerrado.\n\n Puntuación: " + points + "\n\n");
  checkRanking();
  if (confirm("Quieres jugar de nuevo?")) {
    partida();
  }
};
const checkRanking = function () {
  console.log("\n Puntuación: " + points + "\n\n");
  if (toRanking) {
    for (i = 0; i < ranking.length; i++) {
      if (ranking[i].points <= points) {
        ranking.splice(i, 0, { name: user, points: points });
        console.table(ranking);
        if (confirm("Quieres jugar de nuevo?")) {
          partida();
        }
        return;
      }
    }
  }
  console.table(ranking);
  if (confirm("Quieres jugar de nuevo?")) {
    partida();
  }
};
