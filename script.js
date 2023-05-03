window.addEventListener("load", function () {
  let selectedTip;
  let tipAmount;
  let totalPerPerson;

  const tipText = document.getElementById("tip-text");
  const totalText = document.getElementById("total-text");
  const btn5 = document.getElementById("btn-5");
  const btn10 = document.getElementById("btn-10");
  const btn15 = document.getElementById("btn-15");
  const btn25 = document.getElementById("btn-25");
  const btn50 = document.getElementById("btn-50");
  const btnReset = document.getElementById("btn-reset");
  const btnCalculate = document.getElementById("btn-calculate");
  const inputBill = document.getElementById("input-bill");
  const inputCustom = document.getElementById("input-custom");
  const inputPeople = document.getElementById("input-people");
  const errorMessageBill = document.getElementById("error-bill");
  const errorMessageCustom = document.getElementById("error-custom");
  const errorMessagePeople = document.getElementById("error-people");

  inputBill.addEventListener("change", (e) => {
    const isValid = validValueFromInput(e.target.value);
    if (isValid) {
      e.target.removeAttribute("invalid");
      inputNotVisibility();
    } else {
      e.target.setAttribute("invalid", !isValid);
      inputVisibilityBill();
    }
  });

  inputCustom.addEventListener("change", (e) => {
    const isValid = validValueFromInput(e.target.value);
    removeAttributeFromButtons();
    if (isValid) {
      e.target.removeAttribute("invalid");
      inputNotVisibility();
    } else {
      e.target.setAttribute("invalid", !isValid);
      inputVisibilityCustom();
    }
  });

  inputPeople.addEventListener("change", (e) => {
    const isValid = validValueFromInput(e.target.value);
    if (isValid) {
      e.target.removeAttribute("invalid");
      inputNotVisibility();
    } else {
      e.target.setAttribute("invalid", !isValid);
      inputVisibilityPeople();
    }
  });

  btn5.addEventListener("click", (e) => {
    afterOnClickTipButtons(5, e);
  });
  btn10.addEventListener("click", (e) => {
    afterOnClickTipButtons(10, e);
  });
  btn15.addEventListener("click", (e) => {
    afterOnClickTipButtons(15, e);
  });
  btn25.addEventListener("click", (e) => {
    afterOnClickTipButtons(25, e);
  });
  btn50.addEventListener("click", (e) => {
    afterOnClickTipButtons(50, e);
  });

  btnReset.addEventListener("click", (e) => {
    removeAttributeFromButtons();
    clearFields();
  });

  btnCalculate.addEventListener("click", (e) => {
    calculate();
  });

  function afterOnClickTipButtons(tipValue, event) {
    removeAttributeFromButtons();
    selectedTip = tipValue;
    event.target.setAttribute("choosen-discount", true);
    inputCustom.value = "";
    errorMessageCustom.style.display = "none"; 
    inputCustom.removeAttribute("invalid");
  }

  function validValueFromInput(value) {
    return value > 0;
  }

  function clearFields() {
    inputBill.value = "";
    inputCustom.value = "";
    inputPeople.value = "";
    inputNotVisibility();
    inputBill.removeAttribute("invalid");
    inputCustom.removeAttribute("invalid");
    inputPeople.removeAttribute("invalid");
    tipText.textContent = "$ 0.00";
    totalText.textContent = "$ 0.00";
  }

  function removeAttributeFromButtons() {
    btn5.removeAttribute("choosen-discount");
    btn10.removeAttribute("choosen-discount");
    btn15.removeAttribute("choosen-discount");
    btn25.removeAttribute("choosen-discount");
    btn50.removeAttribute("choosen-discount");
  }

  function inputVisibilityBill() {
    errorMessageBill.style.display = "block";
  }

  function inputVisibilityCustom() {
    errorMessageCustom.style.display = "block";
  }

  function inputVisibilityPeople() {
    errorMessagePeople.style.display = "block";
  }

  function inputNotVisibility() {
    errorMessageBill.style.display = "none";
    errorMessageCustom.style.display = "none";
    errorMessagePeople.style.display = "none";
  }

  function calculate() {
    let billValue = Number(inputBill.value);
    let peopleValue = Number(inputPeople.value);
    let customTipValue = Number(inputCustom.value);

    if (billValue && peopleValue && (customTipValue || selectedTip)) {
      if (selectedTip) {
        tipAmount = billValue * (selectedTip / 100);
        totalPerPerson = (tipAmount + billValue) / peopleValue;
      } else {
        tipAmount = billValue * (customTipValue / 100);
        totalPerPerson = (tipAmount + billValue) / peopleValue;
      }

      tipText.textContent = "$ " + tipAmount.toFixed(2);
      totalText.textContent = "$ " + totalPerPerson.toFixed(2);
    }

    if (billValue < 0) {
      errorMessageBill.style.display = "block";
      tipText.textContent = "$ 0.00";
      totalText.textContent = "$ 0.00";
    }

    if (peopleValue < 0) {
      errorMessagePeople.style.display = "block";
      tipText.textContent = "$ 0.00";
      totalText.textContent = "$ 0.00";
    }

    if (customTipValue < 0) {
      errorMessageCustom.style.display = "block";
      tipText.textContent = "$ 0.00";
      totalText.textContent = "$ 0.00";
    }

    else {
      tipText.textContent = "$ 0.00";
      totalText.textContent = "$ 0.00";
    }
  } 
});
