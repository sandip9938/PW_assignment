function check() {
    // const number = document.getElementById('number').value
    // const output = document .getElementById('output').value
    // if(isNaN(number)/3===0){
    //     output='Number is divisable by 3'
    // }
    // if(isNaN(number)/2===0){
    //     output+='\n Number is even and also divisible by 2.'
    // }if(isNaN(number)/2===0 || number/3===0){
    //     alert(`Output: ${output}`)
    // }


   
        const numberInput = document.getElementById('number');
        const number = parseInt(numberInput.value);
    
        if (isNaN(number)) {
            alert('Please enter a valid number.');
            return;
        }
    
        let result = `Number ${number} is not divisible by 2 or 3.`;
    
        if (number % 2 === 0) {
            result = `Number ${number} is divisible by 2.`;
        }
    
        if (number % 3 === 0) {
            result = `Number ${number} is divisible by 3.`;
        }
    
        document.getElementById('output').textContent = result;
    }
    
