document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Zde by měla být implementována logika pro ověření uživatelského jména a hesla na serverové straně.
    // Pro ilustrační účely pouze vypíšeme údaje v konzoli.
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    console.log('Username:', username);
    console.log('Password:', password);
    
    // Simulujeme úspěšné přihlášení, přesměrování na chráněnou stránku.
    // Ve skutečném prostředí by zde probíhala logika pro ověření a přesměrování na základě odpovědi z serveru.
    if (username === 'demo' && password === 'demo') {
        window.location.href = 'index1.html'; // Přesměrování na chráněnou stránku
    } else {
        alert('Chybné uživatelské jméno nebo heslo. Prosím zkuste znovu.');
    }
});
