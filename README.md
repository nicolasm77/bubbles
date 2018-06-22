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