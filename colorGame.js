var sNum = 6;
var colors = randomColorGenerator(sNum);
var h1 = document.querySelector('h1');

var square = document.querySelectorAll('.square');
var pickedColor = picked_Color();
var colorDisplay = document.querySelector('.colorDisplay');
colorDisplay.textContent =  pickedColor;
var message = document.getElementById('message');
var resetButton = document.getElementById('reset');
var mode = document.querySelectorAll('.mode');

for(var i=0; i< mode.length; i++){
    mode[i].addEventListener('click',function(){
        mode[0].classList.remove('selected');
        mode[1].classList.remove('selected');
        this.classList.add('selected'); 
    
        this.textContent === "Easy" ? sNum = 3 : sNum = 6;
        console.log("sNum: " +sNum);
        reset();
    });
}

function reset(){
    message.textContent = "";
    colors = randomColorGenerator(sNum);
    pickedColor = picked_Color();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Choice";
    for(var i=0; i<square.length; i++){
        if(colors[i]){
            square[i].style.backgroundColor = colors[i];
            square[i].style.display = "block";
        }else{
            square[i].style.display = "none";
        }
    }

    h1.style.backgroundColor = "steelblue";
}
for(var i=0; i< square.length; i++){
    square[i].style.backgroundColor = colors[i];

    square[i].addEventListener('click',function(){
        var clickedColor = this.style.backgroundColor;
        clickedColor = String(clickedColor);
        pickedColor = String(pickedColor);
        //  alert("click: "+clickedColor);  alert("picked:"+pickedColor);
        if((clickedColor) === (pickedColor))    {
            message.textContent = "correct!";
            
            resetButton.textContent = "Try again?";
            h1.style.backgroundColor = clickedColor;
            changeColor(clickedColor);
        }else{
            this.style.backgroundColor = "#232323";
            message.textContent = "try again";
        }
    });
}

function picked_Color(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function changeColor(color){
    // for(i in square){
    for(var i=0; i<square.length; i++){
        square[i].style.backgroundColor = color;
    }
    return true;
}
function randomColorGenerator(num){
    var arr = [];
    for(var i=1; i<=num; i++){
        arr.push(colorgenerate());
    }
    return arr;
}
function colorgenerate(){
    var r = Math.floor(Math.random() *256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    var rgb = "rgb("+r+", "+g+", "+b+")";
    return rgb;
}

resetButton.addEventListener('click',function(){
    console.log('reset button clicked');
    reset();
});