const buttonSabiranje = document.getElementById("sabiranje")
const buttonOduzimanje = document.getElementById("oduzimanje")
const buttonMnozenje= document.getElementById("mnozenje")
const buttonDeljenje = document.getElementById("deljenje")

function sabiranjeEvent ()
{
    const inputX = document.getElementById ("x")
    const inputY = document.getElementById ("y")
    const spanResult = document.getElementById("rezultat")

    const result = Number(inputX.value)  + Number (inputY.value)
    spanResult.innerText = result
}

function oduzimanjeEvent ()
{
    const inputX = document.getElementById ("x")
    const inputY = document.getElementById ("y")
    const spanResult = document.getElementById("rezultat")

    const result = Number(inputX.value)  - Number (inputY.value)
    spanResult.innerText = result
}

function mnozenjeEvent ()
{
    const inputX = document.getElementById ("x")
    const inputY = document.getElementById ("y")
    const spanResult = document.getElementById("rezultat")

    const result = Number(inputX.value)  * Number (inputY.value)
    spanResult.innerText = result
}

function deljenjeEvent ()
{
    const inputX = document.getElementById ("x")
    const inputY = document.getElementById ("y")
    const spanResult = document.getElementById("rezultat")

    const result = Number(inputX.value)  / Number (inputY.value)
    spanResult.innerText = result
}

buttonSabiranje.onclick = sabiranjeEvent 
buttonOduzimanje.onclick = oduzimanjeEvent
buttonMnozenje.onclick =mnozenjeEvent
buttonDeljenje.onclick = deljenjeEvent




