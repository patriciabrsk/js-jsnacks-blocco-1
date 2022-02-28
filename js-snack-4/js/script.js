/**
 *
    In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
    chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.
 *
 */

// Create array of guests
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

document.getElementById('check').addEventListener('click',
    function() {
        const userName = document.querySelector('.user-name').value;
        const message = document.getElementById('message');

        let isInvited = false;

        for (i = 0; i < guestList.length; i++) {
            if (guestList[i] == userName) {
                isInvited = true;
            } 
        }

        if (isInvited) {
            message.innerHTML = `Hi ${userName}, your name is in the guest list.`;
        } else {
            message.innerHTML = `Hi ${userName}, your name is not in the guest list.`;
        }

        /*
        if (guestList.indexOf(userName) > -1) {
            console.log ('Your name is in the guest list.')
        } else {
            console.log ('Your name is not in the guest list.')
        }
        */
    }
);

