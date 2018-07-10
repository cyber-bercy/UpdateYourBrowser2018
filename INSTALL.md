# installer le bandeau sur votre site :
## 1 essayer le dispositif sur une page de test :
###   a - editer le fichier html :
Identifier une page de test en dehors du serveur de production.
Trouver la balise <body> dans le fichier html de la page en question et copier le code javascript suivant après la balise :
  ```javascript
<script>
		var _umb = {
		require: {
			chrome : "66",
			firefox : "60",
			opera : "52",
			ie : "11",
			safari : "11",
			edge : "14"},
		current: {
			chrome : "66",
			firefox : "60",
			opera : "52",
			ie : "11",
			safari : "11",
			edge : "14"},
		display : true,
		nonCritical: true,
		startdate: "2017-12",
		enddate: "2019-12",
		message:{
		  backgroundColor : "red",
		  backgroundUpdateColor : "#00ff80",
		  textUpdateColor : "white",
		  textColor: "white",
		  linkColor: "grey",
		  linkURL: "economie.gouv.fr"
		  }
		};
		(function(u,v) { var s = document.createElement('script'); s.async = true; s.src = u;s.integrity = v;
						 var b = document.getElementsByTagName('script')[0]; b.parentNode.insertBefore(s, b);
		})('./umb/umb2.js',"sha256-ERhvXU4yG6P1ddMUpskWfoNlUdJ8yhXQxNS/Qi5+N0E=");
		</script>
```      
  
### 2 - copier le répertoire UMB et les fichiers contenu (warning.png, umb.js,..) :

Le répertoire /umb et les fichiers qu'il contient doivent être copiés dans le même répertoire que la page à servir.

### 3 - Tester l'affichage sur le site:
Vérifier que le bandeau s'affiche correctement et qu'il n'y a pas de conflit avec d'autres éléments javascript.
ouvrir une console pour vérifier le cas échéant et relever les messages d'erreur (Ctrl+maj+i sous firefox).
Ajuster les couleurs et le message que vous souahitez afficher.
Si le test est fonctionnel, passer à l'étape 4.

### 4 - Configurer les dates.
Réaliser les 3 premières opérations sur la page ou vous souhaitez que le bandeau s'affiche en changeau les dates

	**startdate: "2018-10-08"**,
		**enddate: "2019-10-15"**,

