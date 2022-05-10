// External modules:
const inquirer = require("inquirer");
const chalk = require("chalk");
const cowsay = require("cowsay");

// Core modules:
const fs = require("fs");

// Own modules:
const operation = require("../app");
const createAccount = require("./createAccount");
const deposit = require("./deposit");
const checkAccount = require("checkAccount");
const getAccountBalance = require("getAccountBalance");

// Show Muuh account balance:
function getAccountBalance() {
    inquirer.prompt([
        {
            name: "accountName",
            message: "\nQual o nome da sua conta?\n"
        },
    ])
    .then((answer) => {
        const accountName = answer["accountName"]

        // Verify if account exists:
        if (!checkAccount(accountName)) {
            return getAccountBalance();
        };

        const accountData = getAccount(accountName);
        console.log(
            cowsay.say({text: chalk.bgBlue.white`Muuh, o saldo da sua conta é de R$${accountData.balance}`, e: "oO"})
        );
    })
    .catch((err) => console.log(err))
};