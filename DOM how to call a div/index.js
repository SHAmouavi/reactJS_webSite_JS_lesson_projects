function change(){
    var main;
    main = document.getElementById("main");
    main.getElementsByTagName("p")[0].innerHTML = "New content";
    main.getElementsByTagName("a")[0].href = "https://vuejs.org";
    main.getElementsByTagName("a")[1].setAttribute("href","https://reactjs.org");
    main.getElementsByTagName("p")[1].style.color = "red";
}