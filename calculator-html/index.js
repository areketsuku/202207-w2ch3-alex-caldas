let ans = "";
let number = "";
let operand = "";
let result = "";

$(":button").click(function () {
  if (isNaN(this.value)) {
    operation(this.value);
  } else if (number.length < 9) {
    number += this.value;

    $("#number").html(number);
  } else {
    alert("Numero demasiado largo!");
  }
});

function refresh() {
  $("#calculation").html(ans + " " + operand);
  $("#number").html(number);
  //$('#number').html(Intl.NumberFormat(undefined, {notation: "scientific"}).format(number));
  result = "";
}

function operation(i) {
  switch (i) {
    case "A":
      ans = "";
      number = "";
      operand = "";
      refresh();
      break;
    case "B":
      if (!number) {
      } else {
        number = number.slice(0, number.length - 1);
      }
      if (number === "0") {
        number = "";
      }
      refresh();
      break;
    case "/":
      if (ans || ans == 0) {
        if (operand) {
          if (number) {
            calculation();
            ans = result;
            number = "";
            operand = "/";
            refresh();
          } else {
            operand = "/";
            refresh();
          }
        } else {
          operand = "/";
          refresh();
        }
      } else {
        if (operand) {
          alert("OJU!! NO HI POT HAVER OPERAND SENSE ANS!");
        } else {
          if (number) {
            ans = Number(number);
            number = "";
            operand = "/";
            refresh();
          } else {
          }
        }
      }
      break;
    case "*":
      if (ans || ans == 0) {
        if (operand) {
          if (number) {
            calculation();
            ans = result;
            number = "";
            operand = "*";
            refresh();
          } else {
            operand = "*";
            refresh();
          }
        } else {
          operand = "*";
          refresh();
        }
      } else {
        if (operand) {
          alert("OJU!! NO HI POT HAVER OPERAND SENSE ANS!");
        } else {
          if (number) {
            ans = Number(number);
            number = "";
            operand = "*";
            refresh();
          } else {
          }
        }
      }
      break;
    case "-":
      if (ans || ans === 0) {
        if (operand) {
          if (number) {
            calculation();
            ans = result;
            number = "";
            operand = "-";
            refresh();
          } else {
            operand = "-";
            refresh();
          }
        } else {
          operand = "-";
          refresh();
        }
      } else {
        if (operand) {
          alert("OJU!! NO HI POT HAVER OPERAND SENSE ANS!");
        } else {
          if (number) {
            ans = Number(number);
            number = "";
            operand = "-";
            refresh();
          } else {
          }
        }
      }
      break;
    case "+":
      if (ans || ans === 0) {
        if (operand) {
          if (number) {
            calculation();
            ans = result;
            number = "";
            operand = "+";
            refresh();
          } else {
            operand = "+";
            refresh();
          }
        } else {
          operand = "+";
          refresh();
        }
      } else {
        if (operand) {
          alert("OJU!! NO HI POT HAVER OPERAND SENSE ANS!");
        } else {
          if (number) {
            ans = Number(number);
            number = "";
            operand = "+";
            refresh();
          } else {
          }
        }
      }
      break;
    case ".":
      number.includes(".") ? null : number ? (number += ".") : (number = "0.");
      refresh();
      break;
    case "=":
      if (ans || ans === 0) {
        if (operand) {
          if (number) {
            calculation();
            $("#calculation").html(ans + " " + operand + " " + number + " =");
            $("#number").html(result);
          } else {
          }
        } else {
        }
      } else {
        if (operand) {
          alert("OJU!! NO HI POT HAVER OPERAND SENSE ANS!");
        } else {
          if (number) {
            ans = number;
            number = "";
            refresh();
          } else {
          }
        }
      }
      break;
    default:
  }
}

function calculation() {
  switch (operand) {
    case "+":
      result = Number(ans) + Number(number);
      break;
    case "-":
      result = Number(ans) - Number(number);
      break;
    case "*":
      result = Number(ans) * Number(number);
      break;
    case "/":
      result = Number(ans) / Number(number);
      break;
  }
}
