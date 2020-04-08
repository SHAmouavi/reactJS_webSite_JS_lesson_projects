var pTag, text, divTag, New;
pTag = document.createElement("p");
text = document.createTextNode("This is a Paragraph");
pTag.appendChild(text);
divTag = document.getElementById("show");
divTag.appendChild(pTag);
// divTag.removeChild(pTag);
New = document.createTextNode("New p");
divTag.replaceChild(New,pTag)