let currentStep = 0;
const steps = document.querySelectorAll('.step');

function showStep(step) {
    steps.forEach((s, index) => {
        if (index === step) {
            s.classList.add('active');
        } else {
            s.classList.remove('active');
        }
    });
    document.getElementById('prevBtn').style.display = step === 0 ? 'none' : 'inline';
    document.getElementById('nextBtn').innerHTML = step === steps.length - 1 ? 'Finish' : 'Next';
}

function moveStep(n) {
    if (currentStep + n < 0 || currentStep + n >= steps.length) return;
    currentStep += n;
    showStep(currentStep);
}

document.addEventListener('DOMContentLoaded', () => {
    showStep(currentStep);
});
