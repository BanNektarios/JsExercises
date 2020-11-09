class BankAccount {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;

        this.aDeposit = function (num) {
            this.num = num;
            return `${name} had ${balance}€ but he deposited ${num}€ and now has ${balance += num}€`
        }

        this.aWithdraw = function (num) {
            this.num = num;
            return `${name} had ${balance}€ but he withdrew ${num}€ and now has ${balance -= num}€`;
        }
    }
}

const Person = new BankAccount("Nektarios", 12000);

console.log(Person.aWithdraw(1000));
console.log(Person.aDeposit(5000));
