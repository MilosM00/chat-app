"use strict";


const account1 = {
    owner: `Jason Johnson`,
    password: 1234,
    image: `images/a1.jpg`
};

const account2 = {
    owner: `Sandra White`,
    password: 4321,
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
const divSpaceMessage = document.querySelector(`.space-message`);
const divHeader = document.querySelector(`.header`);


divLogin.classList.remove(`login--hidden`);

const createUsernames = function(accs){
    accs.forEach(acc => {
        acc.username = acc.owner.toLowerCase().split(` `).shift();
    });
};
createUsernames(accounts);

buttonLogin.addEventListener(`click`, () =>{
    passwordEvent();
});

inputPassword.addEventListener(`keyup`, (e) =>{
    if(e.keyCode === 13){
        e.preventDefault();
        passwordEvent();
    }
});

buttonLogout.addEventListener(`click`, () =>{
    divLogin.classList.remove(`login--hidden`);
    divChat.classList.add(`chat--hidden`);
    inputMessage.value = ``;
});

buttonSendMessage.addEventListener(`click`, () =>{
    messageEvent();
});

inputMessage.addEventListener(`keyup`, (e) =>{
    if(e.keyCode === 13){
        e.preventDefault();
        messageEvent();
    }
});

let x = 1;
const messageEvent = function(){
    if(inputMessage.value.length === 0) return inputMessage.focus();

    let htmlJ = `
    <div class="look" style="text-align:right;">
    <span class="text-message">${inputMessage.value}</span>
    </div>
    `;

    let htmlS = `
    <div class="look" style="text-align:left;">
    <span class="text-message">${inputMessage.value}</span>
    </div>
    `;

    if(x < 13){
        
        inputMessage.value = ``;
        inputMessage.focus();
        
        if(currentAccount.owner === `Jason Johnson`){
            divSpaceMessage.insertAdjacentHTML(`beforeend`, htmlJ);
        }
        else{
            divSpaceMessage.insertAdjacentHTML(`beforeend`, htmlS);
        }

        x++;
    }
    
    else{
        x = 1;
        x++;

        inputMessage.value = ``;
        inputMessage.focus();

        document.querySelector(`.look`).remove();
        document.querySelector(`.look`).remove();
        document.querySelector(`.look`).remove();
        document.querySelector(`.look`).remove();
        document.querySelector(`.look`).remove();
        document.querySelector(`.look`).remove();
        document.querySelector(`.look`).remove();
        document.querySelector(`.look`).remove();
        document.querySelector(`.look`).remove();
        document.querySelector(`.look`).remove();
        document.querySelector(`.look`).remove();
        document.querySelector(`.look`).remove();

        if(currentAccount.owner === `Jason Johnson`){
            divSpaceMessage.insertAdjacentHTML(`beforeend`, htmlJ);
        }
        else{
            divSpaceMessage.insertAdjacentHTML(`beforeend`, htmlS);
        }
    }
};

const passwordEvent = function(){
    currentAccount = accounts.find(acc => acc.username === inputUsername.value);

    if(currentAccount?.password === Number(inputPassword.value)){
        inputUsername.value = ``;
        inputPassword.value = ``;

        divLogin.classList.add(`login--hidden`);
        divChat.classList.remove(`chat--hidden`);

        nameText.textContent = `${currentAccount.owner}`;
        profileImage.src = `${currentAccount.image}`;

        if(currentAccount.owner === `Jason Johnson`){
            contact.textContent = `${account2.owner}`;
            chatImage.src = `${account2.image}`;
            divHeader.style.paddingLeft = `0`;
        }
        else{
            contact.textContent = `${account1.owner}`;
            chatImage.src = `${account1.image}`;
            divHeader.style.paddingLeft = `275px`;
        }
    }
};