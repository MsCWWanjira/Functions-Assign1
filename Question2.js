function Numbers() 
{console.log(Numbers("1,2,3,a,4"));
   
    if (input === "") {
        return 0;
    }

    const numbersArray = input.split(',');

    let sum = 0;

    for (let i = 0; i < numbersArray.length; i++) {
       
        const num = parseFloat(numbersArray[i]) || 0;
        
        sum += num;
    }

    return sum;
}