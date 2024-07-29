import PromptSync from "prompt-sync";
const prompt = PromptSync();
interface ExchangeRates {
  [currency: string]: number;
}
const exchangeRates: ExchangeRates = {
  USD: 1,
  EUR: 0.9,
  GBP: 0.8,
  PKR: 0.0028 
}
function convertCurrency(amount: number, fromCurrency: string, toCurrency: string): number {

  const usdAmount = amount / exchangeRates[fromCurrency];
  const convertedAmount = usdAmount * exchangeRates[toCurrency];
  return convertedAmount;
}
function main() {
  const amount = parseFloat(prompt("Enter the amount:"));
  const fromCurrency = prompt("Enter the source currency (USD, EUR, GBP, PKR):").toUpperCase();
  const toCurrency = prompt("Enter the target currency (USD, EUR, GBP, PKR):").toUpperCase();

  const result = convertCurrency(amount, fromCurrency, toCurrency);
  console.log(`${amount} ${fromCurrency} is equal to ${result} ${toCurrency}`);
}
main();


