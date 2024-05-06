const calculatorContainer = document.getElementById('calculator-container');
const displyArea = document.getElementById('display-area');
const displyArea1 = document.getElementById('display-area1');
calculatorContainer.addEventListener('click', e => {
    if (e.target.nodeName == "BUTTON") {
        switch (e.target.textContent) {
            case "C":
                clear();
                break;
            case "DEL":
                deleteOneValue();
                break;
            case "=":
                evalute();
                break;
            default:
                addToDisplayArea(e.target.textContent);
                deleteAfterequal();


        }
    }
})

function clear() {
    displyArea.textContent = "";
    displyArea1.textContent = '';
}

function addToDisplayArea(value) {
    displyArea.textContent = displyArea.textContent + value;
}

function deleteOneValue() {
    let currentContent = displyArea.textContent;
    displyArea.textContent = currentContent.substring(0, currentContent.length - 1);
}

function evalute() {
    try {
        let cal = displyArea.textContent;
        let calculation = math.evaluate(displyArea.textContent);
        displyArea1.textContent = cal;
        displyArea.textContent = calculation;
    } catch (error) {
        displyArea.textContent = 'invalid Operation';
        console.error(error);
    }
}

function deleteAfterequal() {
    if (displyArea1.textContent != '') {

        displyArea1.textContent = '';
        displyArea.textContent = '';
    }
}