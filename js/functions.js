function createSquare100(){

    let squaresContainer =  document.getElementById("squares-container");

    for(let x=1; x<=100; x++){

        let square = document.createElement('div');
        square.classList.add('square');
        square.classList.add('border-on');
        squaresContainer.append(square);
    }
}