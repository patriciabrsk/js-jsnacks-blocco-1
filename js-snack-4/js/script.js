/**
 *
    In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
    chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.
 *
 */

const guestList = [
    'John',
    'Julia',
    'Matteo',
    'Patricia',
    'Ruby',
    'Peter',
    'Paul',
    'Jeff',
    'Robert',
    'Joe'
]

const userName = prompt("What's your name?").toLowerCase();
let isInvited = false;

for (i = 0; i < guestList.length; i++) {
    if (guestList[i] == userName) {
        isInvited = true;
    } 
}

if (isInvited) {
    console.log ('Your name is in the guest list.')
} else {
    console.log ('Your name is not in the guest list.')
}

/*
if (guestList.indexOf(userName) > -1) {
    console.log ('Your name is in the guest list.')
} else {
    console.log ('Your name is not in the guest list.')
}
*/