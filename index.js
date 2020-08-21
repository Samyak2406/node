var square = {
    border: (l) => (2*l),
    area: (l) => (l*l)
}

function getArea(l){
    if(l<=0){
        console.log("Invalid number");
    }
    else{
        console.log(square.border(l));
        console.log(square.area(l));
    }
}

getArea(5);
getArea(7);
getArea(-1);