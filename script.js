// Seleccionar elementos del DOM
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const encryptBtn = document.getElementById('encryptBtn');
const decryptBtn = document.getElementById('decryptBtn');
const copyBtn = document.getElementById('copyBtn');
const outputArea = document.getElementById('outputArea');
const placeholderImage = document.getElementById('placeholderImage');
const outputMessage = document.getElementById('outputMessage');

// Objeto de mapeo para encriptación
const encryptMap = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

// Función para encriptar
function encrypt(text) {
    return text.replace(/[eiaou]/g, letter => encryptMap[letter]);
}

// Función para desencriptar
function decrypt(text) {
    let decrypted = text;
    Object.entries(encryptMap).forEach(([key, value]) => {
        decrypted = decrypted.replaceAll(value, key);
    });
    return decrypted;
}

// Función para mostrar el resultado
function showResult(text) {
    outputText.value = text;
    outputText.style.display = 'block';
    copyBtn.style.display = 'block';
    placeholderImage.style.display = 'none';
    outputMessage.style.display = 'none';
}

// Función para validar entrada
function validateInput(text) {
    return /^[a-z\s]*$/.test(text);
}

// Event listeners
encryptBtn.addEventListener('click', () => {
    if (validateInput(inputText.value)) {
        showResult(encrypt(inputText.value));
    } else {
        alert("Por favor, ingrese solo letras minúsculas sin acentos.");
    }
});

decryptBtn.addEventListener('click', () => {
    if (validateInput(inputText.value)) {
        showResult(decrypt(inputText.value));
    } else {
        alert("Por favor, ingrese solo letras minúsculas sin acentos.");
    }
});

copyBtn.addEventListener('click', () => {
    outputText.select();
    document.execCommand('copy');
    alert("Texto copiado al portapapeles!");
});

// Inicialización
inputText.value = '';
outputText.style.display = 'none';
copyBtn.style.display = 'none';
