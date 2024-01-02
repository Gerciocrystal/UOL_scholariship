//variables
const nameText = document.querySelector("#nome");
const btn = document.querySelector("#btn");
const number = document.querySelector("#number");
const result = document.querySelector(".result");

const enterName = window.prompt("Entre com seu nome");
nameText.textContent = enterName;

//logics
const addResult = (message, status) => {
  result.classList.remove("near");
  result.classList.remove("right");
  result.classList.remove("error");

  result.classList.add(status);
  result.textContent = message;
};
const messages = [
  {
    status: "near",
    message: "esta se distanciando",
  },
  {
    status: "near",
    message: "que tal tentar um numero bem maior",
  },
  {
    status: "near",
    message: "tente um numero um pouco maior",
  },
  {
    status: "right",
    message: "Parabens estas proximo, teste o  numero",
  },
  {
    status: "near",
    message: "tente um numero um pouco Menor",
  },
  {
    status: "near",
    message: "tente um numero um muito maior Menor",
  },
  {
    status: "error",
    message: "muito longe, tente denovo",
  },
  {
    status: "error",
    message: "Por favor, digite um numero valido",
  },
];

// evensHandlers
const giveHints = (guestNumber) => {
  try {
    const isNumber = Number.parseInt(guestNumber);
    let temp = isNumber + 38;
    const numberLength = guestNumber.length;
    result.classList.remove("hidden");
    // if (Number.isNumber(isNumber)) {
    //   result.classList.add("error");
    //   result.textContent = "Por favor, digite um numero valido";
    //   return;
    // }

    switch (numberLength) {
      case 1:
        addResult(messages[0].message, messages[0].status);
        break;
      case 2:
        addResult(messages[1].message, messages[1].status);
        break;
      case 3:
        addResult(messages[2].message, messages[2].status);
        break;
      case 4:
        addResult(messages[3].message, messages[3].status);
        break;
      case 5:
        addResult(messages[4].message, messages[4].status);
        break;
      case 6:
        addResult(messages[5].message, messages[6].status);
        break;
      default:
        addResult(messages[7].message, messages[7].status);
    }
  } catch (error) {
    addResult(messages[8].message, messages[8].status);
  }
};

const isTheNumber = () => {
  try {
    let temp = number.value;

    if (temp.length === 4)
      window.alert(`Parabens ${nameText.textContent}, Vocé Ganhou`);
    else {
      window.alert(
        `lamento ${nameText.textContent} mas voce errou, se as dicas para se sair melhor da proxima vez`
      );
      giveHints(temp);
    }
  } catch (error) {
    console.log(error.message);
    addResult(messages[7].message, messages[7].status);
  }
};
//events
number.addEventListener("input", (e) => giveHints(e.target.value));
btn.addEventListener("click", isTheNumber);
