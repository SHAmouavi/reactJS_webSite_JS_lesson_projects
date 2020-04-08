var p1 = document.getElementById("p1");

p1.addEventListener("click", ChangeColor);
p1.addEventListener("dblclick", displayDate);
function ChangeColor(){
    p1.style.color = "green";
};
function displayDate(){
    document.write(Date())
}