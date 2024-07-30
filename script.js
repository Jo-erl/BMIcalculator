document.addEventListener("DOMContentLoaded", () => {
  const heightInput = document.getElementById("height");
  const weightInput = document.getElementById("weight");
  const calculateButton = document.getElementById("calculate");
  const result = document.getElementById("result");
  const bmiValue = document.getElementById("bmi-value");
  const bmiCategory = document.getElementById("bmi-category");

  calculateButton.addEventListener("click", () => {
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
      alert("Please enter valid height and weight values.");
      return;
    }

    const bmi = calculateBMI(height, weight);
    const category = getBMICategory(bmi);

    bmiValue.textContent = bmi.toFixed(1);
    bmiCategory.textContent = `Category: ${category}`;
    result.classList.remove("hidden");
  });

  function calculateBMI(height, weight) {
    const heightInMeters = height / 100;
    return weight / (heightInMeters * heightInMeters);
  }

  function getBMICategory(bmi) {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Normal weight";
    if (bmi < 30) return "Overweight";
    return "Obese";
  }
});
