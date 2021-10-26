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


        // creazione dell'array contenente gli indirizzi mail autorizzati all'accesso
        const mailList = ['info@boolean.com', 'paolo.duzioni@gmail.com', 'lbnfnc90@gmail.com', 'w.churchill@uk.gov.com', 'jesuswasahippie@hotmail.com'];


        //l'utente clicca sul pulsante di login
        btnLogin.addEventListener('click', function() {
            //viene creata una nuova costante contenente la mail inserita nell input del form
            const nowMail = inputEmail.value.trim().toLowerCase();

            //parte la ricerca all'interno dell'array per verificare se sia autoriizzata o meno all'accesso
            //se nessuna mail è stata inserita, allora verrà stampato un alert
            if (nowMail === '') {
                alert('non è stata inserita nessuna mail');
            } else {
                // controllo presenza mail nella lista mailList
                //altrimenti creiamo una flag
                let foundMail = false;
                for (i = 0; i < mailList.length ; i++) {
                    //se la mail inserita è uguale ad una delle mail contenute nell'array
                    if (nowMail === mailList[i]) {
                        //alla flag viene associato un valore true
                        foundMail = true;
                        //viene eseguito l'accesso
                        alert('accesso eseguito');
                        // il ciclo viene interrotto
                        break;
                    } else {
                        foundMail = false;
                        alert('accesso negato');
                        break;
                    }
                }
            }
        });