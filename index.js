function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces
  // chaleeng 1
  height = height / 100;
  let bmi = weight / (height * height);
  alert("  BMI is " + bmi);
  // challeng 2
  if (bmi >= 30) {
    alert(" Above Obesity");
  } else if (bmi >= 25) {
    alert(" Overweight");
  } else if (bmi >= 18.5) {
    alert(" Healthy weight");
  } else {
    alert(" Under weight");
  }

  //challeng 3
  function inRange(x, min, max) {
    return (x - min) * (x - max) <= 0;
  }

  if (age > 65) {
    if (inRange(bmi, 24, 29)) {
      alert(" healthy");
    } else {
      alert("not healthy");
    }
  } else if (age >= 55 || age == 65) {
    if (inRange(bmi, 23, 28)) {
      alert(" healthy");
    } else {
      alert("not healthy");
    }
  } else if (age >= 45) {
    if (inRange(bmi, 22, 27)) {
      alert(" healthy");
    } else {
      alert("not healthy");
    }
  } else if (age >= 35) {
    if (inRange(bmi, 21, 26)) {
      alert(" healthy");
    } else {
      alert("not healthy");
    }
  } else if (age >= 25) {
    if (inRange(bmi, 20, 25)) {
      alert(" healthy");
    } else {
      alert("not healthy");
    }
  } else if (age >= 19) {
    if (inRange(bmi, 19, 24)) {
      alert(" healthy");
    } else {
      alert("not healthy");
    }
  } else {
    alert("under age");
  }
}
