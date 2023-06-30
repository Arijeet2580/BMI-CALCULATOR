let button = document.querySelector("#btn");
button.addEventListener("click", calculateBMI);
let Resetbtn = document.querySelector("#reset-btn");
//Reset function
Resetbtn.addEventListener("click", () => {
  document.querySelector("#h-error").innerHTML = "";
  document.querySelector("#w-error").innerHTML = "";
  document.querySelector("#result").innerHTML="";
  document.querySelector("#height").value="";
  document.querySelector("#weight").value="";
  document.querySelector("#range").value=0;
});
//BMI Calculation function
function calculateBMI() {
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");
  const wrongvalue = false;
  if (height === "" || isNaN(height) || height <= 0) {
    document.querySelector("#h-error").innerHTML = "Provide a valid Height!";
    wrongvalue = true;
  }
  if (weight === "" || isNaN(weight) || weight <= 0) {
    document.querySelector("#w-error").innerHTML = "Provide a valid Weight!";
    wrongvalue = true;
  }
  if (wrongvalue === false) {
    let bmi = (weight / (height ** 2 / 10000)).toFixed(2);
    document.querySelector("#range").value=bmi;
    if (bmi < 18.6) {
      result.innerHTML = `Under Weight : ${bmi}`;
    } else if (bmi >= 18.6 && bmi < 24.9) {
      result.innerHTML = `Normal : ${bmi}`;
    } else {
      result.innerHTML = `Over Weight : ${bmi}`;
    }
  }
}

