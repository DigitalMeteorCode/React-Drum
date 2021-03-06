MUSICS CREDITS :

Music: Sentimental Drop [FREE DOWNLOAD] by CYBERPUNKERS
Source: http://soundcloud.com/cyberpunkers/sentimental-drop-mp3
License: http://creativecommons.org/licenses/by/3.0/
Get music free for a link from https://starfrosch.com

Music: The Lonely Journey [FREE DOWNLOAD] by CYBERPUNKERS
Source: https://soundcloud.com/cyberpunkers/the-lonely-journey-mp3
License: http://creativecommons.org/licenses/by/3.0/
Get music free for a link from https://starfrosch.com

Music: Sick Track [FREE DOWNLOAD] by CYBERPUNKERS
Source: http://soundcloud.com/cyberpunkers/sick-track-mp3
License: http://creativecommons.org/licenses/by/3.0/
Get music free for a link from https://starfrosch.com

***

CONSIGNES SUIVIES (cours Digital Campus Live sur STUDI) :

INITIALISATION DU PROJET

Nous allons dans cette première vidéo initialiser notre projet create-react-app, paramétrer notre fichier « jsconfig.json » et remettre à 0 le style CSS.

MISE EN PLACE STYLE GENERAL

Pour fournir un style global à notre application, nous allons créer au plus haut niveau un composant « Layout.js » qui, grâce à la prop « children », va pouvoir englober toutes les pages.

Pour mettre un style global, au lieu d'utiliser une feuille CSS, nous allons utiliser la fonction « createGlobalStyle » exportée par « styled-components ».

Finalement, nous verrons comment passer un thème à notre application, encore une fois grâce à « styled-components », et son composant « ThemeProvider ».

CONSTRUCTION DU HEADER ET DU FOOOTER

Nous allons devoir, dans notre dossier « composants », placer nos dossiers qui pourront héberger nos composants « Header.js » et « Footer.js ». Ces deux composants seront stylisés.

Pour couvrir l'intégralité de la fenêtre, nous allons devoir donner une taille à l'élément central. Or, on ne sait pas encore ce qu'il va contenir (cela varie selon les pages). Ainsi, plutôt que de donner une hauteur fixe, nous allons donner une hauteur minimale avec la propriété « min-height ».

Pour avoir (au minimum) exactement la taille de la fenêtre du navigateur, il va falloir faire du calcul dans CSS, en soustrayant la hauteur de la fenêtre (100 vh) aux dimensions du Header + du Footer.

MISE EN PLACE DE LA NAVIGATION

Pour mettre en place une navigation sur notre site web, nous allons utiliser la populaire librairies react-router-dom, et ses composants « BrowserRouter », « Switch », « Route », et « Link ».

CREER LA GRILLE DE BOUTONS

Pour réaliser notre grille de boutons, nous allons définir un composant conteneur en « display : grid ». Il faudra créer un template de colonnes pour avoir deux colonnes de largeur égale. Nous verrons également comment insérer des espaces entre les grilles et colonnes de notre template.

STYLISER LES BOUTONS

Pour le style de nos boutons, nous allons simuler le style de boutons physiques. Il existe beaucoup d'instruments de musique électronique avec ces boutons semi transparents éclairés de couleur.

Pour réaliser cet effet, nous allons utiliser un gradient circulaire pour imiter la couleur de la diode au centre.

MISE EN PLACE DE TONE.JS

Installer la librairie Tone.js

Dans un premier temps, nous allons créer un hook dédié à la gestion de l'audio. Cela permettra de sortir toute la logique des composants visuels afin de mieux nous concentrer sur Tone.js.

Il va falloir importer la librairie dans ce hook et initialiser notre premier instrument : le Sampler. Pour n'initialiser qu'une seule fois cet instrument, nous allons appeler le constructeur à l'intérieur d'un hook useEffect.

Afin de pouvoir accéder à cet instrument que l'on aura créé, il va falloir le stocker à l'extérieur du useEffect. Pour cela, nous allons utiliser un autre hook de React : useRef. Une fois notre sampler chargé, nous allons le passer à notre référence créée avec use Ref.

MAPPER LES SONS

Tout d'abord, nous allons vouloir créer un tableau qui correspondra à nos quatre boutons. Dans chacun des objets de ce tableau, nous allons associer la fonction qui permet de déclencher la lecture d'un son (cf. documentation Tone.js). Ensuite, il suffira de passer la fonction soundPlay() à nos éléments visuels « GridButton » créés plus tôt.

JOUER LES SONS AVEC LE CLAVIER

Pour détecter qu'un utilisateur est en train d'écrire, nous allons devoir écouter un événement de type « keydown ». Cet événement fournit des informations sur la touche du clavier sur laquelle on appuie.

Pour mettre en place un event listener en React, il ne faut le faire qu'une fois, et donc pour cela, utiliser un hook useEffect(). Il est également très important de le supprimer une fois que le hook ou le composant n'est plus actif. Pour cela, enlever l'« event listener » au niveau du retour du hook useEffect().

Il suffit par la suite de créer une fonction qui répartiera les notes à jouer selon la touche utilisée. Pour cela, au lieu d'utiliser des conditions « if - else », nous allons utiliser une switch.

DECLENCHER LUMIERES A LA LECTURE DES SONS

Nous allons commencer par déclarer des états pour chacun des boutons. Ces états seront de type booléen. Puis, il suffira de passer dans chaque élément du tableau de boutons, l'état associé.

Nous avions déjà dans une partie précédente inséré la prop « isPlayed » au niveau des composants « GridButton ». Il convient donc de leur passer en prop l'état déclaré plus tôt.

IMPORT DE NOUVEAUX SONS - UI

Tout d'abord, commençons par créer notre input de type « file ». Seulement, on n'est pas très satisfait de l'apparence.

Pour créer un style personnalisé, il va falloir associer à chacun de nos inputs un élément HTML « label ». Pour le lier à l'input en question, il faut que l'input ait un identifiant unique qu'on passera au niveau du tableau. Ensuite, il suffit de passer au label la clé htmlFor avec l'ID que l'on aura fourni à l'input.

À partir de ce moment, cliquer sur le label revient à cliquer sur l'input. Nous n'avons plus qu'à cacher l'input et styliser le label.

Il faudra en plus être bien vigilant et veiller à ne pas déclencher l’événement onClick du parent grâce à la méthode stopPropagation().

IMPORT NOUVEAUX SONS - LOGIQUE

Comme nous l'avions fait pour passer la fonction de jouer un son à nos boutons, nous allons passer une fonction permettant de gérer l'import de fichiers. Cette fonction sera à attacher à l’événement onChange sur nos inputs.

Nous allons devoir faire un petit peu de formatage à ce niveau-là pour pouvoir récupérer une URL exploitable par Tone.js afin de lire notre fichier stocké localement. Nous détaillons tout cela dans la vidéo.

Une fois cette opération faite, passons notre URL de fichier local à un Buffer de Tone.js qui permettra de charger le son en question. Nous pouvons maintenant donner ce buffer à la méthode « .add() » de notre instrument pour remplacer les sons par défaut.