function calculator() {
    let calc1 = document.getElementsByName(`num1`)[0].value;
   let result = eval(calc1);
   document.open()
   document.write(`
    <section>
        <input type="text" id="num1" name="num1" class="num1">
            <button id="calc1 calc2" onclick= "calculator()">calculate</button>
        <p id="result"></p>
    </section>`
   )
    document.write(result)
   document.close()
   console.log(result);
}
calculator();