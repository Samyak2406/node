var square = require('./square');

function getArea(l){
    square(l, (err, sq) => {
        if(err){
            console.log(err.message);
        }
        else{
            console.log(
                sq.perimeter() + "   "+ sq.area()
            );
        }
    });
    console.log("End Of Function");
}

getArea(5);
getArea(7);
getArea(-1);