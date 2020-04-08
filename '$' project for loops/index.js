function some(){
    let inut, i, j;
inut = document.getElementById("num").value;
for(i = 0; i < inut; i++){
    document.write("<br>");
    for(j = 0 ; j < i; j++){
        var text = " * ";
        document.write(text);

    }

}
}