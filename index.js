const showData = true;

function bookPurchasing(titleBook, authorBook, discountPercent, taxPercent) {
  const price = 178000;

  // amount of the discount
  const discountAmount = price * (discountPercent / 100.0);

  // price after discount
  const priceAfterDiscount = price - discountAmount;

  // amount of tax
  const taxAmount = priceAfterDiscount * (taxPercent / 100.0);

  // price after tax
  const priceAfterTax = priceAfterDiscount + taxAmount;

  console.log(`Book Title: ${titleBook}`);
  console.log(`Author : ${authorBook}\n`);
  console.log(`Discount Percent: ${discountPercent}%`);
  console.log(`Discount Amount: Rp${discountAmount}`);
  console.log(`Price after Discount: Rp${priceAfterDiscount}\n`);
  console.log(`Tax Percent: ${taxPercent}%`);
  console.log(`Tax Amount: Rp${taxAmount}`);
  console.log(`Price after Tax: Rp${priceAfterTax}`);
}

const showingData = bookPurchasing("Atomic Habit", "James Clear", 25, 5);

if (showData) {
  return showData;
} else {
  `Change value of showData`;
}
