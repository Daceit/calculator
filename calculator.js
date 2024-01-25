function calculator() {
    let calc1 = document.getElementsByName(`num1`)[0].value;
    let calc2 = document.getElementsByName(`num2`)[0].value;
    let type = document.getElementsByName(`type`)[0].value;
    if (type === `+`) {
        document.open
        document.write(`<h1>Calculator</h1>
        <form>
        <button onclick= "reset()">reset</button>
    </form>`)
        document.write(`${(parseFloat(calc1)) + (parseFloat(calc2))}`)
        document.close
    } else if (type === `-`) {
        document.open
        document.write(`<h1>Calculator</h1>
        <form>
        <button onclick= "reset()">reset</button>
    </form>`)
        document.write(`${(parseFloat(calc1)) - (parseFloat(calc2))}`)
        document.close
    } else if (type === `*`) {
        document.open
        document.write(`<h1>Calculator</h1>
        <form>
        <button onclick= "reset()">reset</button>
    </form>`)
        document.write(`${(parseFloat(calc1)) * (parseFloat(calc2))}`)
        document.close
    } else if (type === `/`) {
        document.open
        document.write(`<h1>Calculator</h1>
        <form>
        <button onclick= "reset()">reset</button>
    </form>`)
        document.write(`${(parseFloat(calc1)) / (parseFloat(calc2))}`)
        document.close
    } else {
        document.open
        document.write(`<h1>Calculator</h1>
        <form>
        <button onclick= "reset()">reset</button>
    </form>`)
        document.write(`please enter valid equation`)
        document.close
    }
}

calculator();
function reset() {
    document.open
    document.write(`
    <h1>Calculator</h1>
    <form>
    <input type="text" id="num1" name="num1" class="num1">
    <input type="text" id="type" name="type" class="type">
    <input type="text" id="num2" name="num2" class="num2">
        <button id="calc1 calc2" onclick= "calculator()">calculate</button>
    <p id="result"></p>
</form>`
    )
    document.close
}

reset();