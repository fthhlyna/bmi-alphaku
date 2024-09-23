function calculateBMI() {
    const heightInput = document.getElementById("height").value;
    const weightInput = document.getElementById("weight").value;

    // Check if height and weight inputs are valid
    if (heightInput === "" || weightInput === "" || heightInput <= 0 || weightInput <= 0) {
        document.getElementById("result").innerText = "Please enter valid height and weight values.";
        return;
    }

    const height = parseFloat(heightInput) / 100;
    const weight = parseFloat(weightInput);

    // Calculate BMI
    const bmi = (weight / (height * height)).toFixed(2);

    let category = "";

    // Determine BMI category
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Overweight";
    } else {
        category = "Obesity";
    }

    // Display the result
    document.getElementById("result").innerText = `Your BMI is ${bmi} - (${category})`;
}

