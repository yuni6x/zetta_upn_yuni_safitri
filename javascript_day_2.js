function bookPurchasing(
  titleBook,
  authorBook,
  price,
  discountPercent,
  taxPercent,
  amountOfStock,
  amountOfPurchaseBook
  // isAvailable
) {
  for (let i = 0; i < amountOfPurchaseBook; i++) {
    if (amountOfStock <= 0) {
      console.log("Sorry, the book is out of stock.");
      break;
    }
    amountOfStock--;
  }

  // amount of the discount
  const discountAmount = price * (discountPercent / 100);

  // price after discount
  const priceAfterDiscount = price - discountAmount;

  // amount of tax
  const taxAmount = priceAfterDiscount * (taxPercent / 100);

  // price after tax
  const priceAfterTax = priceAfterDiscount + taxAmount;

  //total amount

  const totalAmount = amountOfPurchaseBook * priceAfterTax;

  console.log(`DETAILS BOOKS`);
  console.log(`Book Title: ${titleBook}`);
  console.log(`Author : ${authorBook}`);
  console.log(`Price per Book : ${price}`);

  console.log(`\nDETAILS DISCOUNT`);
  console.log(`Discount Percent: ${discountPercent}%`);
  console.log(`Discount Amount: Rp${discountAmount}`);
  console.log(`Price after Discount: Rp${priceAfterDiscount}\n`);

  console.log(`\nDETAILS TAX`);
  console.log(`Tax Percent: ${taxPercent}%`);
  console.log(`Tax Amount: Rp${taxAmount}`);
  console.log(`Price after Tax: Rp${priceAfterTax}`);

  console.log(`\nDETAILS PURCHASE`);
  console.log(`Total amount of purchase book: ${amountOfPurchaseBook}`);
  console.log(`Total price: Rp${totalAmount}`);
  console.log(`\nNew amount of stock: ${amountOfStock}`);
  if (amountOfStock > 0) {
    console.log("The book can still be purchased again.");
  } else {
    console.log("The book cannot be purchased again.");
  }
}

bookPurchasing("Atomic Habit", "James Clear", 100000, 20, 5, 5, 3);
