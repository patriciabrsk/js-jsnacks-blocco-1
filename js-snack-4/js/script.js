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

const message = document.getElementById('message');

// Click event for check button
document.getElementById('check').addEventListener('click',
    function() {

         // Get a name input from user 
        const userName = document.querySelector('.user-name').value;

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

// Click event for reset button
document.getElementById('reset').addEventListener('click', 
    function() {
        document.querySelector('.user-name').value = '';
        message.innerHTML = '';
    }
);

