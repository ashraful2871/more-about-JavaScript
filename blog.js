function checkAge() {
  const ageField = document.getElementById("age");
  const ageText = ageField.value;
  const errorTag = document.getElementById("error");

  try {
    const age = parseInt(ageText);
    if (isNaN(age)) {
      throw "please enter a number";
    } else if (age < 18) {
      throw "baccha kaccha not allowed";
    } else if (age > 30) {
      throw "মুরুব্বি মুরুব্বি উহু উহু উহু...। ";
    }
    errorTag.innerHTML = "";
  } catch (err) {
    console.log("ERROR:", err);
    errorTag.innerHTML = "ERROR " + err;
  } finally {
    console.log("all done inside try catch");
  }
  console.log(111);
}
