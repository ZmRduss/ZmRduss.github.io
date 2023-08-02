<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Přijmout data z JavaScriptu
    $logData = file_get_contents("php://input");

    // Otevřít soubor pro zápis (pokud neexistuje, bude vytvořen)
    $file = fopen("iplogs.txt", "a");
    if ($file) {
        // Zápis dat do souboru
        fwrite($file, $logData);
        // Uzavření souboru
        fclose($file);
    } else {
        // Pokud se nepodařilo otevřít soubor, zobrazit chybu
        echo "Chyba při otevírání souboru.";
    }
}
?>
