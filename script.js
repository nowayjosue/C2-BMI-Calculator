function calculateBMI() {
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        document.getElementById('result').innerHTML = 'Please enter valid height and weight.';
        return;
    }

    var bmi = (weight / Math.pow(height / 100, 2)).toFixed(2);

    document.getElementById('result').innerHTML = 'Your BMI is: ' + bmi;

    if (bmi < 18.5) {
        document.getElementById('result').style.color = '#3498db';
    } else if (bmi < 24.9) {
        document.getElementById('result').style.color = '#2ecc71';
    } else if (bmi < 29.9) {
        document.getElementById('result').style.color = '#f39c12';
    } else {
        document.getElementById('result').style.color = '#e74c3c';
    }
}