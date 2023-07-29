

function calculateDiscount() {
    const original_price = document.getElementById('original-price').value
    const discount_percentage=document.getElementById('discount-percentage').value

    if (isNaN(original_price) || isNaN(discount_percentage)) {
        alert('Please enter valid numbers for the original price and discount percentage.');
        return;
    }

    const discountAmount = (original_price * discount_percentage) / 100;
    const discountedPrice = original_price - discountAmount;

    const resultElement = document.getElementById('result');
    resultElement.textContent = `You saved ${discountAmount.toFixed(2)} and the discounted price is ${discountedPrice.toFixed(2)}`;
}
