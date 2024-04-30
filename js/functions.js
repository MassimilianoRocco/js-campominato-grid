function createSquare(){

    const squaresContainer =  document.getElementById("squares-container");
    const  userNumber = document.getElementById("number-input").value;

    let square;
    for(let x=1; x<=userNumber; x++){

        square = document.createElement('div');
        square.classList.add('square');
        square.classList.add('border-on');
        square.innerHTML = x;
        squaresContainer.append(square);

        square.addEventListener("click", creaColore);
    }
}


function removeSquare(){

    let squares = document.getElementsByClassName('square');
    
    while(squares[0] != null) {
        squares[0].remove();
    }
}

function creaColore(){
    this.classList.toggle("bg_linear_blue");
}