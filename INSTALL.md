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
				startDate: "2017-12",   
				endDate: "2019-12",   
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
		})('umb/umb2.js',"sha256-5Y0zzt9SCMyo7hi7zXEs3ZOnS4AGeiXH/Kp3r1r83JI=");
</script> 
```      
Des options avancées sont disponibles :
On peut redéfinir les différents messages et leurs liens :
```javaScript
		message{
			textUpdate :{
                                    textA : "Une mise à jour de ",
                                    textB : "est disponible. ",
                                    textC : "Veuillez mettre à jour votre navigateur",
                                    browserName : "1"
                                },
                        textLatest :{
                                    textA : "Vous avez installé la dernière version disponible de ",
                                    textB : " . ",
                                    textC : "Plus d'informations sur votre navigateur",
                                    browserName : "1"   
                                },
                        textWarning :{
                                    textA : "Une mise à jour importante de sécurité de ",
                                    textB : "  est disponible. ",
                                    textC : "Veuillez mettre à jour votre navigateur",
                                    browserName : "1"
                                },
                         textUpdateOS :{
                                    textA : "Votre système d'exploitation ne dispose plus de mise à jour de sécurité, vos informations sont en dangers. ",
                                    textB : "",
                                    textC : "Plus d'informations",
                                    browserName : "0"                                  
                                },
                         textAndroidDeprecated :{
                                    textA : "Votre système d'exploitation Android ne dispose plus de mise à jour de sécurité. ",
                                    textB : "",
                                    textC : "Plus d'informations",
                                    browserName : "1"
                                },
                         textInfo :{
                                    link : "https://www.economie.gouv.fr/hfds/cybersecurite-et-politique-ministerielle-ssi",
                                    textA : "Ce message s'affiche dans le cadre de l'opération du Mois européen de la cybersécurité dont notre site est partenaire"
```      
le message affiché est, en fonction du cas, textA , nom du navigateur (si browserName est à 1), textB, puis le liens avec le textC.
Retour à la ligne, puis affichage du message de textInfo avec son textA associé au lien (link).

on peut aussi définir un paramètre d'offset du bandeau en cas de superposition  (0 par défaut):
```javaScript
	offset : 0px
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
