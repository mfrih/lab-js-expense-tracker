// Entry
class Entry {
  constructor(date, amount, description) {
    this.date = date
    this.amount = amount
    this.description = description
  }
  getFormattedAmount() {
    return `+${this.amount} €`
  }
}

// Income
class Income extends Entry {
  constructor(date, amount, description) {
    super(date, amount, description)
    this.type = "income"
  }
}

// Expense
class Expense extends Entry {
  constructor(date, amount, description, paid) {
    super(date, amount, description)
    this.paid = paid
    this.type = "expense"
  }
  getFormattedAmount() {
    return `-${this.amount} €`
  }
}

// Budget
class Budget {
  constructor() {
    this.entries = []
  }
  addEntry(entry) {
    this.entries.push(entry)
  }

  getTotalIncome() {
    let sumOfIncomes = 0
    this.entries.forEach((entry) => {
      if (entry.type === "income") {
        sumOfIncomes += entry.amount
      }
    })
    return sumOfIncomes
  }

  getTotalExpense() {
    let sumOfExpenses = 0
    this.entries.forEach((entry) => {
      if (entry.type === "expense") {
        sumOfExpenses += entry.amount
      }
    })
    return sumOfExpenses
  }
  getCurrentBalance() {
    if (!this.entries.length) {
      return 0
    }
    return this.getTotalIncome() - this.getTotalExpense()
  }

  getTotal(type) {
    let sum = 0
    this.entries.forEach((entry) => {
      if (entry.type === type) {
        sum += entry.amount
      }
    })
  }

  getFormattedEntries() {
    let formattedArray = []
    for (const entry of this.entries) {
      const formattedString = `${entry.date} | ${
        entry.description
      } | ${entry.getFormattedAmount()}`
      formattedArray.push(formattedString)
    }
    return formattedArray
  }
}

const myBudget = new Budget()
const lotteryTime = new Income("21-12-2023", 2_000_000, "Won the lottery", 15)
const vintedSales = new Income("24-12-2023", 50, "Sold my TV", 15)
const boughtACar = new Expense(
  "12-12-2023",
  13_000,
  "It's red, it goes fast",
  15,
  false
)

myBudget.addEntry(lotteryTime)
myBudget.addEntry(vintedSales)
myBudget.addEntry(boughtACar)

console.log(myBudget.getFormattedEntries())
console.log(myBudget.getCurrentBalance())
