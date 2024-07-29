"use strict";
// import PromptSync from "prompt-sync";
// const prompt = PromptSync();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// interface ExchangeRates {
//   [currency: string]: number;
// }
// const exchangeRates: ExchangeRates = {
//   USD: 1,
//   EUR: 0.9,
//   GBP: 0.8
// };
// function convertCurrency(amount: number, fromCurrency: string, toCurrency: string): number {
//   // Assuming USD as the base currency
//   const usdAmount = amount / exchangeRates[fromCurrency];
//   const convertedAmount = usdAmount * exchangeRates[toCurrency];
//   return convertedAmount;
// }
// function main() {
//   const amount = parseFloat(prompt("Enter the amount:"));
//   const fromCurrency = prompt("Enter the source currency (USD, EUR, GBP):").toUpperCase();
//   const toCurrency = prompt("Enter the target currency (USD, EUR, GBP):").toUpperCase();
//   const result = convertCurrency(amount, fromCurrency, toCurrency);
//   console.log(`${amount} ${fromCurrency} is equal to ${result} ${toCurrency}`);
// }
// main();
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const exchangeRates = {
    USD: 1,
    EUR: 0.9,
    GBP: 0.8,
    PKR: 0.0028 // Replace with the actual PKR exchange rate
};
function convertCurrency(amount, fromCurrency, toCurrency) {
    // Assuming USD as the base currency
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
