
//creazione dei riferimenti al DOM
            // il bottone che una volta cliccato da il via all'iterazione
            const btnLogin = document.getElementById('btn-login');
            // il div contenente la form
            const loginBox = document.getElementById('login-box');
            // il campo input di tipo email da cui prelevare il valore
            const inputEmail = document.getElementById('mail');
            // il div contenente il gioco vero e proprio
            const gameBoard = document.getElementById('game');
            // la schermata di errore al login
            const denied = document.getElementById('denied');
            // i pulsanti di chiusura
            const closeButton1 = document.getElementById('close1');
            const closeButton2 = document.getElementById('close2');
            // il pulsante di generazione dei numeri
            const genButton = document.getElementById('generate');
            // il dado dell'utente
            const dado1 = document.getElementById('n1');
            // il dado del pc
            const dado2 = document.getElementById('n2');
            // il display con il risultato finale
            const display = document.getElementById('result');


        const lista = ['info@boolean.com', 'paolo.duzioni@gmail.com', 'lbnfnc90@gmail.com', 'w.churchill@uk.gov.com', 'jesuswasahippie@hotmail.it'];


        btnLogin.addEventListener('click', function() {
            //viene creata una nuova variabile contenente la mail inserita nell input del form, con le dovute modifiche al formato
            const nowMail = inputEmail.value.trim().toLowerCase();

            //parte la ricerca all'interno dell'array per verificare se sia autoriizzata o meno all'accesso
            //se nessuna mail è stata inserita, allora verrà stampato un alert
            if (nowMail === '') {
                alert('non è stata inserita nessuna mail');
            } else {
                // controllo presenza mail nella lista mailList
                //altrimenti creiamo una flag
                // let foundMail = false;
                for (i = 0; i < lista.length ; i++) {
                    //se la mail inserita è uguale ad una delle mail contenute nell'array
                    if ( nowMail === lista[i]) {
                        gameBoard.classList.remove('d-none');
                        loginBox.classList.add('d-none');
                        denied.classList.add('d-none');
                        break;
                    } else {
                        denied.classList.remove('d-none');
                        loginBox.classList.add('d-none');
                    }
                }
            }
        });

        genButton.addEventListener('click', function() {
            const n1 = Math.floor(Math.random() * 6) + 1;
            const n2 = Math.floor(Math.random() * 6) + 1;
            dado1.innerText = `${n1}`;
            dado2.innerText = `${n2}`;

        if (n1 === n2) {
            display.innerText = `questo è un pareggio!`;
        } else if (n1 > n2) {
            display.innerText = `hai vinto!`;
        } else {
            display.innerText = `:( hai perso! :(`;
        }
        });

        closeButton1.addEventListener('click', function() {
            window.location.reload();
        });
        closeButton2.addEventListener('click', function() {
            window.location.reload();
        });