"use strict";


const account1 = {
    owner: `Jason Johnson`,
    pin: 1234
};

const account2 = {
    owner: `Sandra White`,
    pin: 4321
};

let currentAccount;
const accounts = [account1, account2];

const buttonlogin = document.querySelector(`.login-button`);
const inputUsername = document.querySelector(`.username`);
const inputPassword = document.querySelector(`.password`);

const divLogin = document.querySelector(`.login`);
const divChat = document.querySelector(`.chat`);

divLogin.classList.remove(`login--hidden`);

const createUsernames = function(accs){
    accs.forEach(acc => {
        acc.username = acc.owner.toLowerCase().split(` `).shift();
    });
};
createUsernames(accounts);

buttonlogin.addEventListener(`click`, () =>{
    currentAccount = accounts.find(acc => acc.username === inputUsername.value);

    if(currentAccount?.pin === Number(inputPassword.value)){
        divLogin.classList.add(`login--hidden`);
        divChat.classList.remove(`chat--hidden`);

        
    }
});