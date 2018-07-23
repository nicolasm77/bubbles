# BUBBLES

<a href="https://nicolasm77.github.io/bubbles/">Démo</a>

## HTML

### classique
```
<div class="bubble bubble--bg-blue bubble--transparent bubble--rounded">
    <div class="bubble__container">
        Lorem ipsum dolor. Deserunt reprehenderit temporibus quas illo quasi?
    </div>
</div>
```

### Avec picto
```
<div class="bubble bubble--bg-orange bubble--picto">
    <div class="bubble__container">
        <svg class="picto-03" viewBox="-10112 8122.236 84.864 81.864" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(-10112 8122.2)">
            <g transform="translate(3)">
            <path fill="#fff" transform="translate(0 -.012)" d="M78.994,19.828a2.741,2.741,0,0,0-2.733,2.733V69.986c-7.107-3.007-22-6.97-35.4,5.467-13.393-12.3-28.29-8.473-35.4-5.467V9.168C9.84,6.845,25.42-.125,38.95,14.225l.137.137a2.859,2.859,0,0,0,.82.547h0A4.225,4.225,0,0,0,41,15.182h0a2.575,2.575,0,0,0,1.093-.273,2.859,2.859,0,0,0,.82-.547l.137-.137c6.287-6.56,13.667-9.567,22-8.61A2.747,2.747,0,1,0,65.6.148,30.679,30.679,0,0,0,41,8.485C23.917-7.1,4.51,3.428,1.64,5.068A2.752,2.752,0,0,0,0,7.665V74.359a2.7,2.7,0,0,0,.82,1.913c.137.137.41.273.547.41a1.942,1.942,0,0,0,.82.273,2.815,2.815,0,0,0,2.05-.41C5.057,76,23.37,64.519,38.814,80.919l.137.137a2.859,2.859,0,0,0,.82.547,3.991,3.991,0,0,0,1.23.273,3.99,3.99,0,0,0,1.23-.273,1.364,1.364,0,0,0,.683-.547l.137-.137c15.444-16.4,33.894-4.92,34.577-4.373a2.834,2.834,0,0,0,3.827-.82,2.755,2.755,0,0,0,.41-1.5V22.562a2.959,2.959,0,0,0-2.87-2.733"/>
            </g>
            <path fill="#fff" transform="translate(7.281 .928)" d="M24.836,32.692a2.749,2.749,0,0,0-4.51,3.143L31.806,52.1a2.656,2.656,0,0,0,2.187,1.093h.137a2.671,2.671,0,0,0,2.05-.957l37.857-45.1a2.947,2.947,0,0,0-.41-3.963,2.773,2.773,0,0,0-3.827.273l-35.534,42.5Z"/>
            <path fill="#fff" transform="translate(6.197 6.784)" d="M19.5,18.5a2.6,2.6,0,1,0,2.6,2.6,2.511,2.511,0,0,0-2.6-2.6"/>
            </g>
        </svg>
        <p>
            <strong>Configuration<br>&amp; formation</strong><br>
            à domicile*
        </p>
    </div>
</div>
```

## Class

### Background
#### bubble--bg-orange
    Donne à la bulle un background orange (et force le coin supérieur gauche à être carré)

#### bubble--bg-white
    Donne à la bulle un background blanc et le texte en orange

#### bubble--bg-blue
    Donne à la bulle un background bleu (et force le coin supérieur droit à être carré)

#### bubble--transparent
    Permet à la bulle d'êter semi-transparente (dans le cas où il y a une image de fond dérrieère celle-ci)



### Modificateurs
#### bubble--less-rounded
    Radius moins important

#### bubble--elevated
    Ajoute une légère ombre

#### bubble--corner-left
    Force le coin supérieur gauche à être carré

#### bubble--corner-right
    Force le coin supérieur droit à être carré

#### bubble--color-orange
    Met le texte de la bulle en orange



### Border
#### bubble--border-orange
    Ajoute une border orange

#### bubble--border-white
    Ajoute une border blanche



### Cas spécifiques
#### bubble--picto
    Pour les bulles qui contiennent un picto svg + un petit texte centrer

#### bubble--bbloc et bubble--bbloc-orange
    Affiche le "b bloc" dans le coin supérieur gauche de la bulle
    
    
# HUB Starter kit

## Présentation
Ce starter kit à pour but de simplifier le développement de portail "événement" en automatisant certaines tâches et en fournissant un environement de développement local.
Il est entièrement basé sur [webpack](https://webpack.js.org/).

Liste des fonctionnalités :
* Compréssion du HTML
* Inclusion de morceaux d'HTML
* Transformation des URLs local en URLs prod
* Transformation des caractères spéciaux en entités HTML
* Concaténation de tous les fichiers JS utilisés
* Compréssion du JS
* Compilation des fichiers SASS en CSS
* Concaténation de tous les fichiers CSS utilisés
* Suppression de tout le CSS non utilisé
* Optimisation des images (jpg, png et svg)
* Lazyloading des images
* Intégration du framework CSS boulanger et des bulles
* Intégration des scripts utiles (swiper, data-xiti, ...)
* ~~Envoi sur le FTP des fichiers générés~~
* ~~Application des CHMOD en 775 recursive sur les fichiers déposés en FTP~~

Il possède 2 environnements local:
* desktop
* ~~sim~~
Chacun contenant le header, le footer et les fichers css présents sur ces 2 versions du site boulanger.com. Un *hot realoding* (rechargement de la page à chaque modifications de fichier inclus) est lancé automatiquement.


## Installation

1. Récupération du repo
```
git clone git://github.com/***/HUB.git
```
2. Setup Bubbles
```
cd bubbles
npm install
npm run build
```
3. Setup Framework
```
cd ../framework
npm install
npm run build
```
4. Setup Starter
```
cd ../starter
npm install
```

Les étapes `npm install` sont assez longue à s'exécuter

## Utilisation

### Commandes
Le starter dispose de 3 commandes d'initialisation:

1. Lancement du local *desktop*
```
npm run desk
```
Initialise un serveur local à l'adresse http://localhost:8080 avec hot reloading et l'apparence du site _desktop_ de boulanger. Dans ce cas, le traitement est minimal : les ressources (images, script, css, ...) ne sont pas optimisés.

2. Lancement du local *sim*
```
npm run sim
```
Initialise un serveur local à l'adresse http://localhost:8080 avec hot reloading et l'apparence du site _sim_ de boulanger. Dans ce cas, le traitement est minimal : les ressources (images, script, css, ...) ne sont pas optimisés.

3. Génération des fichiers pour la prod
```
npm run mep
```
Génère un dossier `dist` contenant tous les fichiers traités, concaténés et optimisés : ce sont les fichiers à mettre directement sur le FTP.

### Inclure des fichiers JS et CSS
Pour ajouter du CSS ou JS qui doit être concaténé, il faut importer le fichier dans `starter/src/index.js` de la manière suivante:

```js
import bubbleCSS from "../../bubbles/dist/main.css";
import bubbleAnim from "../../bubbles/dist/anims.js";
```

Le nom de l'import (*bubbleAnim*) n'est important que dans le cas d'un plugin JS, par exemple :
```js
import Swiper from "swiper/dist/js/swiper.min.js";
[...]
new Swiper('.swiper-container', {})
```

### HTML
Le fichier de base est `starter/src/index.html`.

Les includes sont à placer dans le dossier `starter/src/includes` et insérés de cette façon :

```js
${require('./includes/conv1.html')}
```

### CSS
Le fichier de base est `starter/src/styles/style.scss`.


### URLs en prod
Pour que les fichiers aient la bonne URL en prod, il faut remplir la variable `stagingPath` tout en haut du fichier `starter/webpack.prod.js`. Par exemple :

```js
const stagingPath = "/content/static/bcom/evenements/2018/07_braderie";
```

### Images (jpg/png)
Les images sont à placer dans le dossier `starter/src/images` puis à utilisé avec l'URL `./images/***.jpg`. Pour que l'image soit "lazyloadé" il faut ajouté la *class* `lazyload`.
Exemple:

```html
<img src="./images/entree_gam.jpg" alt="Illustration gamme produits gros éléctroménager" class="prods__illu lazyload">
```

### SVGs
Les SVG sont à placer dans le dossier `starter/src/images` puis à utilisé avec l'URL `./images/***.svg`. Ils peuvent être injectés en tant que HTML (inline); utile par exemple dans le cas où une animation au survol doit être effectuée.
Pour utilisé le SVG en inline:

```js
${require('./images/essentielb.svg?inline')}
```

### PurgeCSS
PurgeCSS permet de retiré tout le CSS non utilisé du fichier final. Il se base sur le fichier HTML principal. 

Malheureusement si une *class* est ajoutée en javascript, elle sera retiré par PurgeCSS car elle n'est pas présente dans le HTML de base.
Pour palier à ce problème, 
