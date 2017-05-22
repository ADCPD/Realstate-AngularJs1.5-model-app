# Realstate-AngularJs1.5-model-app

Le projet **AngularJs** dans le repo : 
 
https://github.com/ADCPD/Realstate-AngularJs1.5-model-app/tree/master/Resources/public/js/realstate

Suivez les etapes à la mise en ligne à partir d'un serveur d'*entreprise* :  

#Comment installer npm, gulp, AngularJs et Symfony

Afin de faire fonctionner Angular Js dans un projet Symfony, il faut suivre les étapes suivante :

###Étapes

1. Installer Nodejs dans votre machine Installer Gulp Installer Bower Configurer le proxy de npn et git Etape à suivre :

2. Configurer le npm proxy : 

    npm config set http-proxy http://127.0.0.1:8080 

Configurer le Git proxy : 

    git config --global https.proxy https://127.0.0.1:8888

Afin de versifier le bon fonctionnement du proxy , exécuter cette commande :

     git config --global --get http.proxy 

Setup :

Maintenant, on crée un nouveau projet Angular js :

git clone https://github.com/angular/angular-seed.git et on exécute la commande : 

    npm init 

    bower init

Dans le fichier: .bowercc ( json format )

    { 
    "directory": "app/components/bower_components",
     "proxy": "http://127.0.0.1:8888", 
    "registry": "http://bower.herokuapp.com", 
    "strict-ssl": false 
    } 

En suite, on exécute les commandes :

    npm install
    bower install 

Afin d'assurer le bon fonctionnement de votre projet ** Angular js **

créer le fichier ***gulpfile.js** 

Ensuite : installer les deux composants : 

    gulp-concat 

    npm install gulp-concat --save-dev

**gulp-angular-templatecache **

    npm install gulp-angular-templatecache --save-dev 

Enfin, les configurer dans le fichier ***gulpfile.js**

C'est une partie d'un projet publié sur le site :  http://www.expansion-it.com 
