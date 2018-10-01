function comment() {
    var message = document.getElementById('comment').value;
    var userName = document.getElementById('input').value;
    var newP = document.createElement('p');
    newP.innerText = "From: " + userName;
    var newP2 = document.createElement('p');
    newP2.innerText = "Message: " + message;
    var newDiv = document.createElement("div");
    newDiv.className = "my-3 mx-auto";
    newDiv.style.height = '300px';
    newDiv.style.width = "300px";
    newDiv.style.padding = "30px";
    newDiv.style.boxShadow = "0px 10px 10px lightgrey"
    newDiv.style.backgroundColor = "#FEFE9C";

    if (userName && message !== "") {
        document.getElementById('box').appendChild(newDiv);
        newDiv.appendChild(newP);
        newDiv.appendChild(newP2);
    }

}
