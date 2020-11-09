// A class object
class BankAccount {
    // A constructor for our properties
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
        // Our function to deposit money
        this.aDeposit = function (num) {
            this.num = num;
            return `${name} had ${balance}€ but he deposited ${num}€ and now has ${balance += num}€`
        }
        // Our function to withdraw money
        this.aWithdraw = function (num) {
            this.num = num;
            return `${name} had ${balance}€ but he withdrew ${num}€ and now has ${balance -= num}€`;
        }
    }
}

// The instance of the object we created
const Person = new BankAccount("Nektarios", 12000);

console.log(Person.aWithdraw(1000));
console.log(Person.aDeposit(5000));
