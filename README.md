CONSIGNES SUIVIES (cours Digital Campus Live sur STUDI) :

Nous allons dans cette première vidéo initialiser notre projet create-react-app, paramétrer notre fichier « jsconfig.json » et remettre à 0 le style CSS.

Pour fournir un style global à notre application, nous allons créer au plus haut niveau un composant « Layout.js » qui, grâce à la prop « children », va pouvoir englober toutes les pages.

Pour mettre un style global, au lieu d'utiliser une feuille CSS, nous allons utiliser la fonction « createGlobalStyle » exportée par « styled-components ».

Finalement, nous verrons comment passer un thème à notre application, encore une fois grâce à « styled-components », et son composant « ThemeProvider ».

Nous allons devoir, dans notre dossier « composants », placer nos dossiers qui pourront héberger nos composants « Header.js » et « Footer.js ». Ces deux composants seront stylisés.

Pour couvrir l'intégralité de la fenêtre, nous allons devoir donner une taille à l'élément central. Or, on ne sait pas encore ce qu'il va contenir (cela varie selon les pages). Ainsi, plutôt que de donner une hauteur fixe, nous allons donner une hauteur minimale avec la propriété « min-height ».

Pour avoir (au minimum) exactement la taille de la fenêtre du navigateur, il va falloir faire du calcul dans CSS, en soustrayant la hauteur de la fenêtre (100 vh) aux dimensions du Header + du Footer.