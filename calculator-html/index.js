let ans = "";
let number = "";
let operand = "";
let result = "";

$(":button").click(function () {
  if (isNaN(this.value)) {
    matematicOperations(this.value);
  } else if (number.length < 9) {
    number += this.value;

    $("#number").html(number);
  } else {
    alert("Numero demasiado largo!");
  }
});

const refresh = function () {
  $("#calculation").html(ans + " " + operand);
  $("#number").html(number);
  result = "";
};

const matematicOperations = function (i) {
  switch (i) {
    case "A":
      matematicAllClear();
      break;
    case "B":
      matematicBack();
      break;
    case "/":
      matematicDivide();
      break;
    case "*":
      matematicDivide();
      break;
    case "-":
      matematicSubstract();
      break;
    case "+":
      matematicAdd();
      break;
    case ".":
      matematicDot();
      break;
    case "=":
      matematicEqual();
      break;
    default:
  }
};
const matematicAllClear = function () {
  ans = "";
  number = "";
  operand = "";
  refresh();
};
const matematicBack = function () {
  if (number) {
    number = number.slice(0, number.length - 1);
  }
  if (number === "0") {
    number = "";
  }
  refresh();
};
const matematicDivide = function () {
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
};
const matematicMultiply = function () {
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
};
const matematicSubstract = function () {
  if (ans || ans == 0) {
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
};
const matematicAdd = function () {
  if (ans || ans == 0) {
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
};
const matematicDot = function () {
  if (number.includes(".")) {
  } else if (number) {
    number += ".";
  } else {
    number = "0.";
  }
  refresh();
};
const matematicEqual = function () {
  if (ans || ans == 0) {
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
};
const calculation = function () {
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
};
