
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Exercice API geo gouv</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

    <h1>Récupérer les infos d'une ville à partir de l'api :<br><a href="https://api.gouv.fr/api/api-geo.html">https://api.gouv.fr/api/api-geo.html</a></h1>
    <p class="base-url">URL de base :<br>https://geo.api.gouv.fr/communes/?nom=VILLE</p>

    <form action="https://geo.api.gouv.fr/communes/" method="GET">
        <input placeholder="Ville recherchée" type="text" name="nom" class="form-city">
        <input type="submit">
    </form>

    <!-- Div qui affichera les messages d'erreurs et les résultats de la recherche par ville -->
    <div id="view"></div>


    <script src="https://code.jquery.com/jquery-3.5.0.min.js"></script>
    <script src="js/script.js"></script>
</body>
</html>