let submit = document.getElementById("submit");
submit.addEventListener("click", function addItem (){
    var inputData = document.getElementById("input").value;
    if(inputData == ""){
        alert("Please enter the task")
    }else {
        document.getElementById("input").value = "";
        var pTag = document.createElement("p");
        var taskTag = document.createElement("span");
        var task = document.createTextNode(inputData);
        taskTag.appendChild(task);
        pTag.appendChild(taskTag);
        var result = document.getElementById("result");
        result.appendChild(pTag);
        var remTag = document.createElement("spam");
        var remText = document.createTextNode("   ×");
        remTag.appendChild(remText);
        pTag.appendChild(remTag);
        remTag.style.color = "red";
        remTag.style.fontWeight = "bold" ;
        taskTag.addEventListener("click", changeColor)
        function changeColor(){
            taskTag.style.textDecoration = "line-through";
        }

        var remo = document.createAttribute("onclick")
    remo.value = "this.parentNode.remove();";
    remTag.setAttributeNode(remo);
    }
})
