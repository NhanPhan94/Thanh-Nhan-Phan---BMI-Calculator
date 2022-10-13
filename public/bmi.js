//access HTML elements in an HTML bmi page
const getAgeValue = document.getElementById("age");
const getWeightValue = document.getElementById("weight");
const getHeightValue = document.getElementById("height");
const getBtnCheck = document.getElementById("calc");
const getForm = document.getElementById("form");
const getResult = document.getElementById("result");

async function loadValueForm(event) {

    //Set the default action that belongs to the event will not occur.
    event.preventDefault();
    

    //Uploading Json data wiht POST 3000

    const response = await fetch(`http://localhost:3000`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            weight: getWeightValue.value, 
            height: getHeightValue.value/100
        }),
    });
    const data = await response.json();

    return getResult.innerHTML = `Your BMI result is: ${parseFloat(data.getResult).toFixed(2)}`;

    //parseFloat to convert value in double (floar) with rouding on 2 digit
}

getBtnCheck.addEventListener('submit', loadValueForm);
getForm.addEventListener('submit', loadValueForm);


