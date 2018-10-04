function comment() {
    var message = document.getElementById('comment').value;
    var userName = document.getElementById('input').value;
    var newP = document.createElement('p');
    newP.innerText = "From: " + userName;
    var newP2 = document.createElement('p');
    newP2.innerText = "Message: " + message;
    var newDiv = document.createElement("div");
    newDiv.className = "my-3 mx-auto col-lg-4 col-md-6 col-xs-12"
    newDiv.id = "sticky";
    newDiv.style.backgroundClip = "padding-box";
    newDiv.style.border = "10px solid transparent";
    newDiv.style.boxSizing = "border-box";
    newDiv.style.height = '300px';
    newDiv.style.width = '300px';
    newDiv.style.padding = "30px";
    newDiv.style.backgroundColor = "#FEFE9C";
    newDiv.style.overflowWrap = "break-word"

    var newButton = document.createElement('button');
    newButton.innerText = "Delete Message";
    newButton.className = "btn btn-light mx-auto"
    newButton.setAttribute('onclick', 'deleteBtn(this.parentNode)');

    if (userName && message !== "") {
        document.getElementById('box').appendChild(newDiv);
        newDiv.appendChild(newP);
        newDiv.appendChild(newP2);
        newDiv.appendChild(newButton);
    }

}


function deleteBtn(someArgument) {
    console.log(someArgument.parentNode);
    var parent = someArgument.parentNode;
    parent.removeChild(someArgument);
}
