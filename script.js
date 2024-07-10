document.getElementById('encryptButton').addEventListener('click', function () {
    let inputText = document.getElementById('inputText').value;
    if (inputText) {
        document.getElementById('outputText').value = encryptText(inputText);
        toggleVisibility(true);
    }
});

document.getElementById('decryptButton').addEventListener('click', function () {
    let inputText = document.getElementById('inputText').value;
    if (inputText) {
        document.getElementById('outputText').value = decryptText(inputText);
        toggleVisibility(true);
    }
});

function encryptText(text) {
    let encryptedText = text.replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    return encryptedText;
}

function decryptText(text) {
    let decryptedText = text.replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    return decryptedText;
}

function toggleVisibility(showOutput) {
    document.getElementById('messageContainer').style.display = showOutput ? 'none' : 'block';
    document.getElementById('outputText').style.display = showOutput ? 'block' : 'none';
}
