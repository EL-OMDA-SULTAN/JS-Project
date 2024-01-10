/////////////////////////////////////////////////// Array of English Letters

var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q"
, "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 

 ///////////////////////////////////////////// 

var div = document.getElementById("div1");   // div to display letters buttons
var input=document.getElementById("i1");     // input to take number of letters to display
var button=document.getElementById("b1");    // button Generate to show buttons letters 

////////////////////////////////////////////////    Add Event To Generat Button

button.addEventListener("click",function(){
    div.innerHTML=" ";                      // remove any Letters if click Generate
    div2.innerHTML = " ";                   // remove any images if click Generate
    var chick = [];                         // empty array to store letters to chick it to avoid dublcated 
    if(input.value==""){
        alert("You Shoud Enter A Number Of Letters");
    }
    else if(isNaN(input.value)){
        alert("You Shoud Enter A Number Of Letters Not A String");
        input.value = "";
    }
    else if (input.value > 26 || input.value <1){ 
        alert("You Enter A Not Valid Number Of Letters "); // condation to avoid enter max than 26 letters
        input.value="";
    }
    else{
    for (var i = 0; i < input.value; i++) {       
        var letter = letters[Math.floor(Math.random() * letters.length)];   // random select letter from letters
        if(!chick.includes(letter)){ 
            chick.push(letter);
            var NewButton = document.createElement("button");            // create button
            var NewText = document.createTextNode(letter);                // create text
            NewButton.appendChild(NewText);                               // add text to button
            NewButton.setAttribute("class", "o");                        // add class name to button
            div.appendChild(NewButton);                                  // add button to div 
            div.innerHTML += "&nbsp;&nbsp;";                            
        }
        else{
            i--;
        }
    }
    var buttons = document.getElementsByTagName("button");           // call all buttons
    for (var i = 1; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function (e) {
            var div2=document.getElementById("div2");               // call div to display image
            div2.innerHTML = "<img src=" +"photo2/"+ this.textContent +".jpg"+">";

            /////////////////////////////////////   Letters Buttons Event 

            var x = localStorage.getItem("LettersEventsArray");
            var w = JSON.parse(x);
            LettersEventsArray = w;
            LettersEventsArray.push(new Event("Letter "+e.target.textContent+ " Click Event ", e.target));
            w = LettersEventsArray;
            localStorage.setItem("LettersEventsArray", JSON.stringify(w));
        });
    }
    }
});

///////////////////////////////////////////////////// Object of events

function Event(type,target){
    this.type=type;
    this.target=target;
    this.time=new Date().toLocaleTimeString()
}

////////////////////////////////////////////////

//localStorage.clear();
var LettersEventsArray = [];
var GeneratEventArray=[];
var LoadEventArray=[];
var UnLoadEventArray = [];
if (!localStorage.getItem("LoadEventArray")){
    localStorage.setItem("LoadEventArray", JSON.stringify(LoadEventArray = []));
}
if (!localStorage.getItem("UnLoadEventArray")){
    localStorage.setItem("UnLoadEventArray", JSON.stringify(UnLoadEventArray = []));
}
if (!localStorage.getItem("GeneratEventArray")){
    localStorage.setItem("GeneratEventArray", JSON.stringify(GeneratEventArray = []));
}
if (!localStorage.getItem("LettersEventsArray")){
    localStorage.setItem("LettersEventsArray", JSON.stringify(LettersEventsArray = []));
}

////////////////////////////////////////////////// load event

window.addEventListener("load", function (e) {
    var input = document.getElementById("i1");
    input.value="";
    var x = localStorage.getItem("LoadEventArray");
    var w = JSON.parse(x);
    LoadEventArray=w;
    LoadEventArray.push(new Event(e.type, e.target));
    w = LoadEventArray;
    localStorage.setItem("LoadEventArray", JSON.stringify(w));
});

/////////////////////////////////////////////////    unload Event

window.addEventListener("unload", function (e) {
    var x = localStorage.getItem("UnLoadEventArray");
    var w = JSON.parse(x);
    UnLoadEventArray = w;
    UnLoadEventArray.push(new Event(e.type, e.target));
    w = UnLoadEventArray;
    localStorage.setItem("UnLoadEventArray", JSON.stringify(w));
});

//////////////////////////////////////////////////  Generat Button Event

var buttons = document.getElementsByTagName("button"); 
buttons[0].addEventListener("click", function (e) {
    var x = localStorage.getItem("GeneratEventArray");
    var w = JSON.parse(x);
    GeneratEventArray = w;
    GeneratEventArray.push(new Event("Generat Click Event ", e.target));
    w = GeneratEventArray;
    localStorage.setItem("GeneratEventArray", JSON.stringify(w));
});

/////////////////////////////////////////////////    Show Arrays Of Events In Localstorage

var x = localStorage.getItem("LoadEventArray");
var y = localStorage.getItem("UnLoadEventArray");
var z = localStorage.getItem("GeneratEventArray");
var w = localStorage.getItem("LettersEventsArray");
console.log(JSON.parse(x));
console.log(JSON.parse(y));
console.log(JSON.parse(z));
console.log(JSON.parse(w));

////////////////////////////////////////////////////////