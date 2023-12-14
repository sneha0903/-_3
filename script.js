function convertTemp(){
    const inp=parseFloat(document.getElementById("num").value);
    const convert=document.getElementById("convert").value;
    let out;
    if(convert === 'Celsius'){
        out=(inp*9/5)+32;
        document.getElementById("Result").textContent= `${inp} °Celsius=${out} °Fahrenheit`
    }
    else if(convert === 'Fahrenheit'){
        out=(inp-32)*5/9;
        document.getElementById("Result").textContent=`${inp} °Fahrenheit=${out} °Celsius`

    }else{
       document.getElementById("Result").textContent='Enter valid Input';
       
    }
}
