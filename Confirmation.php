<!DOCTYPE html>
<html lang="fr">

<head>
	<meta charset="utf-8">
	<?php
		if (isset($_POST['Type'])) {
			echo <<<HTML
			<link href="CSS/Confirmation.css" rel="stylesheet" type="text/css">\n
			HTML;
			$delay = 10;
		}
		else {
			echo <<<HTML
			<link href="CSS/Confirmation-lock.css" rel="stylesheet" type="text/css">\n
			HTML;
			$delay = 3;
		}
		?>
	<link href="CSS/Header.css" rel="stylesheet" type="text/css">
	<link href="CSS/Footer.css" rel="stylesheet" type="text/css">
	<link href="CSS/Menu.css" rel="stylesheet" type="text/css">
	<link href="CSS/Common.css" rel="stylesheet" type="text/css">
	<link href="Images/favicon.svg" rel="icon">
	<title>IUT Lyon 5</title>
	<meta http-equiv="Refresh" content="<?php echo $delay?>; URL=index.html">
</head>

<body data-page="Confirmation">
	<header-custom role="banner"></header-custom>
	<main>
		<div class="values">
			<?php
				if (isset($_POST['Type'])) {
					echo <<<HTML
					<strong>Type</strong><span>{$_POST['Type']}</span>\n
					HTML;
					unset($_POST['Type']);
					foreach ($_POST as $key => $val) {
						if ($val != NULL) {
							echo <<<HTML
								<strong>$key</strong><span>$val</span>\n
					HTML;
						}
					}
				}
				else {
					echo <<<HTML
					<img src="Images/lock.png" alt="Cadenat">
								<h1>Looks like you're not allowed to be here</h1>
								<h2>Putting you back in the right place</h2>\n
					HTML;
				}
			?>
		</div>
		<div class="redirect">
			Vous allez être automatiquement redirigé (si ce n'est pas le cas cliquez <a aria-label="Aller sur la page d'accueil" href="index.html">ici</a>)
		</div>
	</main>
	<footer-custom role="contentinfo"></footer-custom>
	<menu-custom role="menu"></menu-custom>
	<script src="JS/WebComponents.js" type="module"></script>
	<script src="JS/Menu.js"></script>
</body>
</html>