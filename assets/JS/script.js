function writeToDisplay(string) {
    document.getElementById('display').value += string
}

function showResult() {
    let result = eval(document.getElementById('display').value)

    document.getElementById('display').value = result
}

