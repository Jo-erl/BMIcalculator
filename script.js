window.onload = () => {
  let button = document.querySelector("#btn");

  // Function for calculating BMI
  button.addEventListener("click", calculateBMI);
};

function calculateBMI() {
  /* Getting input from user into height variable.
        Input is string so typecasting is necessary. */
  let height = parseInt(document.querySelector("#height").value);

  /* Getting input from user into weight variable.
        Input is string so typecasting is necessary.*/
  let weight = parseInt(document.querySelector("#weight").value);

  let result = document.querySelector("#result");

  // Checking if the user provided a proper value or not
  if (height === "" || isNaN(height))
    result.innerHTML = "Provide a valid Height!";
  else if (weight === "" || isNaN(weight))
    result.innerHTML = "Provide a valid Weight!";
  // If both inputs are valid, calculate the BMI
  else {
    // Fixing up to 2 decimal places
    let bmi = (weight / ((height * height) / 10000)).toFixed(1);

    let category;

    // Determine the BMI category
    if (bmi < 18.5) category = "severely underweight";
    else if (bmi >= 18.5 && bmi < 25) category = "normal";
    else if (bmi >= 25 && bmi < 30) category = "overweight";
    else category = "obese";

    // Display the BMI result with category
    result.innerHTML = `Your Body Mass Index is ${bmi}. This is considered ${category}.`;
  }
}
