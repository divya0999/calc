function calc(){
var a = parseInt(document.querySelector("#value1").value);
var b = parseInt(document.querySelector("#value2").value);
var op = document.querySelector("#operator").value;
var calculator;

if (op == "add") {
calculator = a + b;
}
else if (op == "sub") {
calculator = a - b;
}
else if (op == "mul") {
calculator = a * b;
}
else if (op == "div") {
calculator = a / b;
}
document.querySelector("#result").innerHTML= calculator;

}




