<!DOCTYPE html>
<html lang="fr">

<head>
	<meta charset="utf-8">
	<!-- <meta http-equiv="refresh" content="3 index.html"> -->
	<?php
		if (isset($_POST['Type'])) {
			echo <<<HTML
				<link href="CSS/Confirmation.css" rel="stylesheet" type="text/css">
			HTML;
		}
		else {
			echo <<<HTML
				<link href="CSS/Confirmation-lock.css" rel="stylesheet" type="text/css">
			HTML;
		}
	?>
	<link href="CSS/Header.css" rel="stylesheet" type="text/css">
	<link href="CSS/Footer.css" rel="stylesheet" type="text/css">
	<link href="CSS/Menu.css" rel="stylesheet" type="text/css">
	<link href="CSS/Common.css" rel="stylesheet" type="text/css">
	<link href="Images/favicon.svg" rel="icon">
	<title>IUT Lyon 5</title>
</head>

<body data-page="Confirmation">
	<header-custom></header-custom>
	<main>
		<div class="values">
			<?php
				if (isset($_POST['Type'])) {
					echo <<<HTML
						<strong>Type :</strong><span>{$_POST['Type']}</span>
					HTML;
					unset($_POST['Type']);
					foreach ($_POST as $key => $val) {
						if ($val != NULL) {
							echo <<<HTML
								<strong>$key :</strong><span> $val</span>
							HTML;
						}
					}
				}
				else {
					echo <<<HTML
						<img src="Images/lock.png" alt="Cadenat">
						<h1>Looks like you're not allowed to be here</h1>
						<h2>Putting you back in the right place</h2>
					HTML;
				}
			?>
		</div>
		<div class="redirect">
			Vous allez être automatiquement redirigé (si ce n'est pas le cas cliquez <a href="index.html">ici</a>)
		</div>
	</main>
	<footer-custom></footer-custom>
	<menu-custom></menu-custom>
	<script src="JS/WebComponents.js" type="module"></script>
	<script src="JS/Menu.js"></script>
</body>
</html>