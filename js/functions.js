function createSquare100(){

    let squaresContainer =  document.getElementById("squares-container");

    for(let x=1; x<=100; x++){

        let square = document.createElement('div');
        square.classList.add('square');
        square.classList.add('border-on');
        square.innerHTML = x;
        squaresContainer.append(square);
    }
}


function removeSquare100(){

    let squares = document.getElementsByClassName('square');
    
    while(squares[0] != null) {
        squares[0].remove();
    }
}
