function createDivs(size){
    for(let i = 0; i < size; i++){
        var divColumn = document.createElement("div");
        divColumn.id = "divColumn" + i;
        divColumn.className = "column";
        document.getElementById("containerDiv").appendChild(divColumn);
        for(let o = 0; o < size; o++){
            var divRow = document.createElement("div");
            divRow.id = "divColumn" + i + "divRow" + o;
            divRow.className = "row";
            divRow.addEventListener("mouseenter", colorChangeEnter, false);
            divRow.addEventListener("mouseleave", colorChangeLeave, false);
            document.getElementById("divColumn" + i).appendChild(divRow);
        }
    }
}

function clearDiv(){
    document.querySelectorAll(".row").forEach((element) => element.remove())
    document.querySelectorAll(".column").forEach((element) => element.remove())
}

var button = document.getElementById("button");
button.addEventListener("click", squareAmount, false);

function squareAmount(){
    promptVal = prompt("How many Squares should there be?");
    if(promptVal < 101){
        clearDiv();
        createDivs(promptVal);
    }
}

function colorChangeEnter(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    this.style.opacity = 0.8;
    this.style.backgroundColor = "#" + randomColor;
}

function colorChangeLeave(){
    this.style.opacity = 1;
}