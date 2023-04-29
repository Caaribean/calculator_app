


window.addEventListener("load", function () {

    console.log("Strona zaladowala sie")
    let selectedTip;

    const btn5 = document.getElementById("btn-5");
    const btn10 = document.getElementById("btn-10");
    const btn15 = document.getElementById("btn-15");
    const btn25 = document.getElementById("btn-25");
    const btn50 = document.getElementById("btn-50");
    const btnReset = document.getElementById("btn-reset");
    const inputBill = document.getElementById("input-bill");
    const inputCustom = document.getElementById("input-custom");
    const inputPeople = document.getElementById("input-people");
    const errorMessageBill = document.getElementById("error-bill"); 
    const errorMessageCustom = document.getElementById("error-custom"); 
    const errorMessagePeople = document.getElementById("error-people"); 
 

    inputBill.addEventListener('change', (e) => {
        console.log(e)
        const isValid = validValueFromInput(e.target.value);
        console.log(isValid)
        if (isValid) {
            e.target.removeAttribute('invalid');
        } else {
            e.target.setAttribute('invalid', !isValid);
            inputVisibilityBill();
        }
    });


    inputCustom.addEventListener('change', (e) => {
        console.log(e)
        const isValid = validValueFromInput(e.target.value);
        console.log(isValid)
        if (isValid) {
            e.target.removeAttribute('invalid');
            removeAttributeFromButtons();
        } else {
            e.target.setAttribute('invalid', !isValid);
            removeAttributeFromButtons();
            inputVisibilityCustom();
        } 
    });

    inputPeople.addEventListener('change', (e) => {
        console.log(e)
        const isValid = validValueFromInput(e.target.value);
        console.log(isValid)
        if (isValid) {
            e.target.removeAttribute('invalid');
        } else {
            e.target.setAttribute('invalid', !isValid);
            inputVisibilityPeople();
        } 
    });

    btn5.addEventListener('click', (e) => {
        removeAttributeFromButtons();
        selectedTip = 5;
        e.target.setAttribute('choosen-discount', true);
        inputCustom.value = "";  
    });
    btn10.addEventListener('click', (e) => {
        removeAttributeFromButtons();
        selectedTip = 10;
        e.target.setAttribute('choosen-discount', true);
        inputCustom.value = ""; 
    });
    btn15.addEventListener('click', (e) => {
        removeAttributeFromButtons();
        selectedTip = 15;
        e.target.setAttribute('choosen-discount', true);
        inputCustom.value = ""; 
    });
    btn25.addEventListener('click', (e) => {
        removeAttributeFromButtons();
        selectedTip = 25;
        e.target.setAttribute('choosen-discount', true);
        inputCustom.value = ""; 
    });
    btn50.addEventListener('click', (e) => {
        removeAttributeFromButtons();
        selectedTip = 50;
        e.target.setAttribute('choosen-discount', true);
        inputCustom.value = ""; 
    });

    btnReset.addEventListener('click', (e) => {
        removeAttributeFromButtons();
        clearFields(); 
    });       

    function validValueFromInput(value) {
        return value > 0;
    }
 
    function clearFields() {
        inputBill.value = ""; 
        inputCustom.value = ""; 
        inputPeople.value = ""; 
        inputNotVisibility();
        inputBill.removeAttribute('invalid'); 
        inputCustom.removeAttribute('invalid'); 
        inputPeople.removeAttribute('invalid'); 
   }  

    function removeAttributeFromButtons() {
        btn5.removeAttribute('choosen-discount');
        btn10.removeAttribute('choosen-discount');
        btn15.removeAttribute('choosen-discount');
        btn25.removeAttribute('choosen-discount');
        btn50.removeAttribute('choosen-discount');
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
 

 






 

})

console.log("przed załadowaniem strony")