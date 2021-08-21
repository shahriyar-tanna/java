function grade() {
    var input = document.getElementById('input').value;
    var output = document.getElementById('output');
    if (input >= 90 && <= 100) {
        document.getElementById("output").innerHTML = "A+";
    }
    else if (grade >= 80 && <90) {
        document.getElementById("output").innerHTML = "A";
    }
    else {
        document.getElementById("output").innerHTML = "Fail";
    }
}