const fibonacci = function(num) {
    num = Number(num)
    const sequence = [1,1]; 
    if(num < 0){
        return "OOPS";
    }
    for (let i = 2; i <num; i++){
        sequence.push(sequence[i - 2] + sequence[i -1]);
    }
    return sequence[num-1];
}

module.exports = fibonacci
