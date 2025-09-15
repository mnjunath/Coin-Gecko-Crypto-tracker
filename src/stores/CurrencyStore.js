import { makeAutoObservable } from "mobx";

export default class CurrencyStore {
  currency = "usd";

  constructor() {
    makeAutoObservable(this);
  }

  setCurrency(newCurrency) {
    this.currency = newCurrency;
  }
}
