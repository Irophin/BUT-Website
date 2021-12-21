<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="refresh" content="3; url=index.html">
	<title>Acknowledge PHP</title>
	<link rel="stylesheet" href="ack.css">
</head>
<body>
	<div id="values">
		<?php
			if (isset($_POST['Type'])) {
				echo <<<HTML
					<div>Type du formulaire : {$_POST['Type']}</div>
				HTML;
				unset($_POST['Type']);
				foreach ($_POST as $key => $val) {
					if ($val != NULL) {
						echo <<<HTML
							<div>$key : $val</div>
						HTML;
					}
				}
			}
			else {
				echo <<<HTML
					<h1>Looks like you're not allowed to be here</h1>
					<h2>Putting you back in the right place</h2>
				HTML;
			}
		?>
	</div>
	<div id="redirect">
		Vous allez être automatiquement redirigé (si ce n'est pas le cas cliquez <a href="index.html">ici</a>)
	</div>
</body>
</html>