function calculator() {
    let calc1 = document.getElementsByName(`num1`)[0].value;
   let result = eval(calc1);
   console.log(result);
}
calculator();