Mise à jour en date du 21/08/2018 avec les versions des browsers
# Installer le bandeau sur votre site : 

## 1 - Essayer le dispositif sur une page de test : 

###   a - Editer le fichier HTML :

-	Identifier une page de test en dehors du serveur de production.
-	Trouver la balise **body** dans le fichier HTML de la page en question et copier le code JavaScript suivant après la balise :   
```javaScript 
	<script>   var _umb = {   require: {    chrome : "68",    firefox : "61",
		opera : "53",    ie : "11",    safari : "11",    edge : "17"},
				current: {    chrome : "68",    firefox : "61",
		opera : "53",    ie : "11",    safari : "11",    edge : "17"},
				esr: { firefox : "52"},
				build: { firefox : "20180621121600"},
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
		})('umb/umb2.js',"sha256-vpOTbt652r7UqB21i2OyT3ss7kwQQxPfj3dnFKTzvkE=");
</script> 
```      

### b - Télécharger [le fichier zip d'umb](release/umb.zip) et extraire le répertoire UMB avec les fichiers contenus (warning.png, umb.js,..) :

Le répertoire /umb et les fichiers qu'il contient doivent être copiés dans le même répertoire que la page à servir.

### c - Tester l'affichage sur le site:

-	Vérifier que le bandeau s'affiche correctement et qu'il n'y a pas de conflit avec d'autres éléments JavaScript.
-	ouvrir une console pour vérifier le cas échéant et relever les messages d'erreur (Ctrl+maj+i sous Firefox).
-	Ajuster les couleurs et le message que vous souhaitez afficher avec la variable message d'umb

Si le test est fonctionnel, passer à l'étape 2.

## 2 - Installer le bandeau sur la page définitive :
Réaliser les 3 premières opérations sur la page définitive ou vous souhaitez que le bandeau s'affiche.
-	Configurer les dates : modifier les variables dans _umb de l'html :
	**startdate:** "2018-10-08",
	**enddate**: "2018-10-15",
