"use strict";


const account1 = {
    owner: `Jason Johnson`,
    pin: 1234,
    image: `images/a1.jpg`
};

const account2 = {
    owner: `Sandra White`,
    pin: 4321,
    image: `images/a2.jpg`
};

let currentAccount;
const accounts = [account1, account2];


const buttonLogin = document.querySelector(`.login-button`);
const buttonLogout = document.querySelector(`.logout-button`);
const buttonSendMessage = document.querySelector(`.send-message`);

const inputMessage = document.querySelector(`.message`);
const inputUsername = document.querySelector(`.username`);
const inputPassword = document.querySelector(`.password`);

const contact = document.querySelector(`.contact`);
const nameText = document.querySelector(`.name`);
const profileImage = document.querySelector(`.profile-img`);
const chatImage = document.querySelector(`.chat-img`);

const divLogin = document.querySelector(`.login`);
const divChat = document.querySelector(`.chat`);


divLogin.classList.remove(`login--hidden`);
// divChat.classList.remove(`chat--hidden`);

const createUsernames = function(accs){
    accs.forEach(acc => {
        acc.username = acc.owner.toLowerCase().split(` `).shift();
    });
};
createUsernames(accounts);

buttonLogin.addEventListener(`click`, () =>{
    currentAccount = accounts.find(acc => acc.username === inputUsername.value);

    if(currentAccount?.pin === Number(inputPassword.value)){
        inputUsername.value = ``;
        inputPassword.value = ``;

        divLogin.classList.add(`login--hidden`);
        divChat.classList.remove(`chat--hidden`);

        nameText.textContent = `${currentAccount.owner}`;
        profileImage.src = `${currentAccount.image}`;

        if(currentAccount.owner === `Jason Johnson`){
            contact.textContent = `${account2.owner}`;
            chatImage.src = `${account2.image}`;
        }
        else{
            contact.textContent = `${account1.owner}`;
            chatImage.src = `${account1.image}`
        }
    }
});

buttonLogout.addEventListener(`click`, () =>{
    divLogin.classList.remove(`login--hidden`);
    divChat.classList.add(`chat--hidden`);
    inputMessage.value = ``;
});