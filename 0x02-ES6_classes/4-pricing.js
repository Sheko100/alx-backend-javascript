import Currency from './3-currency';

export default class Price {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof conversionRate !== 'number') {
      throw TypeError('Conversion Rate  must be a number');
    }
    return amount * conversionRate;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw TypeError('Amount must be a number');
    }
    this._amount = value;
  }

  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('CUrrency must be an instance of Currency class');
    }
    this._currency = value;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }
}
