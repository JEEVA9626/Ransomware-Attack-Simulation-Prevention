const simulateAttackBtn = document.getElementById('simulate-attack-btn');
const preventAttackBtn = document.getElementById('prevent-attack-btn');
const resultDiv = document.getElementById('result');
const fileList = document.getElementById('file-list');

let files = Array.from(fileList.children);

simulateAttackBtn.addEventListener('click', simulateAttack);
preventAttackBtn.addEventListener('click', preventAttack);

function simulateAttack() {
    files.forEach(file => {
        file.classList.add('encrypted');
        file.innerText += ' (ENCRYPTED)';
    });

    resultDiv.innerText = 'Ransomware attack simulated!';
}

function preventAttack() {
    // Simulate backup and restore
    files.forEach(file => {
        file.classList.remove('encrypted');
        file.innerText = file.innerText.replace(' (ENCRYPTED)', '');
    });

    resultDiv.innerText = 'Ransomware attack prevented!';
}
