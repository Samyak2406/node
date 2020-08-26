module.exports = (l,callback)=>{
    if(l<=0){
        setTimeout(
            ()=>callback(
                new Error("Invalid number"),
                null,
            ),
            1000
        );
    }
    else{
        setTimeout(
            ()=>callback(
                null,
                {//js object
                    perimeter: () => (2*l),
                    area: () => (l*l)
                }
            ),
            1000
        );
    }
}




// exports.area = (l) => (l*l);
// exports.border = (l) => (2*l);