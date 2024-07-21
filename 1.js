// script.js
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    const display = document.getElementById('display');
    let displayValue = '';

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            const value = this.getAttribute('data-value');
            
            if (value === 'C') {
                displayValue = '';
            } else if (value === '=') {
                try {
                    displayValue = eval(displayValue).toString();
                } catch (e) {
                    displayValue = 'Error';
                }
            } else {
                displayValue += value;
            }

            display.innerText = displayValue;
        });
    });
});
