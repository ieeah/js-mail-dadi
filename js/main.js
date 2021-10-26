// al click dell'utente sul bottone login
// verificare che la mail inserita sia presente all'interno di un array contenente le mail registrate
        // se no, inviare messaggio di errore
        // se sì, rendere visibile il div con il gioco dei dadi



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
        const closeButton = document.querySelectorAll('.close');
        // il pulsante di generazione dei numeri
        const genButton = document.getElementById('generate');


        // creazione dell'array contenente gli indirizzi mail autorizzati all'accesso
        const mailList = ['info@boolean.com', 'paolo.duzioni@gmail.com', 'lbnfnc90@gmail.com', 'w.churchill@uk.gov.com', 'jesuswasahippie@hotmail.it'];


        //l'utente clicca sul pulsante di login
        btnLogin.addEventListener('click', function() {
            //viene creata una nuova variabile contenente la mail inserita nell input del form, con le dovute modifiche al formato
            let nowMail = inputEmail.value.trim().toLowerCase();

            //parte la ricerca all'interno dell'array per verificare se sia autoriizzata o meno all'accesso
            //se nessuna mail è stata inserita, allora verrà stampato un alert
            if (nowMail === '') {
                alert('non è stata inserita nessuna mail');
            } else {
                // controllo presenza mail nella lista mailList
                //altrimenti creiamo una flag
                // let foundMail = false;
                for (i = 0; i <= 4 ; i++) {
                    //se la mail inserita è uguale ad una delle mail contenute nell'array
                    if (nowMail === mailList[i]) {
                        loginBox.classList.add('d-none');
                        denied.classList.remove('d-none');
                        break;
                        
                    } else {
                        // foundMail = false;
                        loginBox.classList.add('d-none');
                        gameBoard.classList.remove('d-none');
                        break;

                    }
                }
            }
        });




        // al click del bottone si dovrà generare un numero, compreso tra 1 e 6
        // generare un secondo numero, compreso tra 1 e 6
        // stampare, all'interno di .dado #n1 e #n2 i due numeri generati
        // determinare quale dei due sia maggiore
        // stampare chi ha vinto
        genButton.addEventListener('click', function() {
        });


        // al click del div .close tutti i div != da loginBox prendono la classe d-none
        closeButton.addEventListener('click', function() {
            gameBoard.classList.add('d-none');
            denied.classList.add('d-none');
            loginBox.classList.remove('d-none');
        });