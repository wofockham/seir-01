// LOGIC

// Our accounts object is solely concerned with the rules of the bank.

// It is the single source of truth for current balances.

// It knows how to do overdraft protection.

// This code has NO IDEA about the DOM.


const accounts = {
  checkingBalance: 0,
  savingsBalance: 0,

  total: function () {
    return this.checkingBalance + this.savingsBalance;
  },

  checkingDeposit: function (amount) {
    this.checkingBalance += Number(amount);
  },

  checkingWithdraw: function (amount) {
    if (amount <= this.checkingBalance) {
      this.checkingBalance -= Number(amount);
    } else if (amount <= this.total()) {
      const difference = amount - this.checkingBalance;
      this.checkingBalance = 0;
      this.savingsBalance -= difference;
    }
  },

  savingsDeposit: function (amount) {
    this.savingsBalance += Number(amount);
  },

  savingsWithdraw: function (amount) {
    if (amount <= this.savingsBalance) {
      this.savingsBalance -= Number(amount);
    } else if (amount <= this.total()) {
      const difference = amount - this.savingsBalance;
      this.savingsBalance = 0;
      this.checkingBalance -= difference;
    }
  }
};
