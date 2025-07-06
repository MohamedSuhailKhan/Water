document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Savings Calculator Logic
    const calculateSavingsBtn = document.getElementById('calculateSavings');
    const litersPerMonthInput = document.getElementById('litersPerMonth');
    const savingsResult = document.getElementById('savingsResult');

    // Assume average plastic bottle water price (e.g., R15 for 1.5L, so R10/liter)
    // And our standard refill price is R5/liter
    const avgPlasticBottlePricePerLiter = 10; // R10 per liter
    const pureDropRefillPricePerLiter = 5; // R5 per liter

    calculateSavingsBtn.addEventListener('click', function() {
        const liters = parseFloat(litersPerMonthInput.value);

        if (isNaN(liters) || liters <= 0) {
            savingsResult.textContent = "Please enter a valid number of liters.";
            savingsResult.style.color = '#e74c3c'; // Red for error
            return;
        }

        const costPlasticBottles = liters * avgPlasticBottlePricePerLiter;
        const costPureDrop = liters * pureDropRefillPricePerLiter;
        const savings = costPlasticBottles - costPureDrop;

        savingsResult.style.color = '#2c3e50'; // Reset color
        if (savings > 0) {
            savingsResult.innerHTML = `By refilling, you could save **R ${savings.toFixed(2)}** per month!`;
        } else {
            savingsResult.textContent = "Refilling is a great choice!";
        }
    });

    // Initial calculation when page loads (optional, based on default input value)
    calculateSavingsBtn.click();
});