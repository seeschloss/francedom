francedom.js
=========

Projection D3js pour afficher France + DOM + COM sur une seule carte compacte.

Une démonstration est visible à cette adresse : https://ssz.fr/francedom

Tous les départements et collectivités d'outre-mer sont inclus, à l'exception de Saint-Martin et Saint-Barthélémy qui sont vraiment trop petites :

* Guadeloupe
* Martinique
* Guyane
* Réunion
* Mayotte
* Nouvelle-Calédonie
* Wallis-et-Futuna
* Polynésie française
* Terres Australes et Antarctiques Françaises
  * Crozet (uniquement l'île de la Possession)
  * Kerguelen
  * Saint-Paul
  * Amsterdam
  * Les Îles Éparses ne sont pas inclues.
* Clipperton


Pour que tous les territoires soient raisonnablement visibles, l'échelle varie de :
* x 0,5
  * Guyane
  * Nouvelle-Calédonie
  * Polynésie (lorsque toutes les îles sont affichées)
* x 1
  * Réunion
  * Îles Kerguelen
  * Polynésie (lorsque Tahiti et Moorea uniquement sont affichées)
* x 1,5
  * Guadeloupe
  * Martinique
  * Mayotte
  * Tahiti et Moorea
  * Saint Pierre et Miquelon
  * Crozet
  * Amsterdam et Saint-Paul
* x 2
  * Wallis et Futuna
  * Clipperton

De plus, les distances entre Wallis et Futuna, Saint-Paul et Amsterdam, et les groupes d'îles de Polynésie (îles de la Société, Tuamotu, Marquises, et Australes) ne sont pas à l'échelle.


Utilisation
--------
La projection s'utilise comme n'importe quelle autre projection de d3.geo :
```javascript
var projection = d3.geo.franceDom()
```

Par défaut, seules Tahiti et Moorea sont incluses pour représenter la Polynésie (entre Wallis-et-Futuna et la Corse), l'option <code>showPolynesie(true)</code> permet d'afficher la Polynésie française au complet (à l'est de la métropole).
```javascript
var projection = d3.geo.franceDom()
  .showPolynesie(true);
```
 

Données géographiques
=========
En plus de la projection adaptée à la France, j'ai essayé de réunir des données utiles sur les communes de France :

territoires-communes.topojson
--------
Territoires des communes de métropole, DOM (y compris Mayotte), Nouvelle-Calédonie et de Polynésie française (pour cette dernière, les communes comprenant plusieurs îles sont représentées par des boîtes englobant le territoire complet de la commune).
Les TAAF et Clipperton ne comportent pas de communes, les deux communes de Saint-Pierre-et-Miquelon sont chacune sur leur île respective, Wallis et Futuna ne comportent pas de communes mais des districts dont je n'ai pas pu trouver les limites précises.

L'identifiant de chaque *feature* est le code INSEE de la commune représentée.

communes.tsv
--------
Liste des toutes les communes ou autres entités dotées d'un code INSEE. En pratique, ce sont toutes les communes de métropole, DOM, collectivités d'outre-mer, ainsi que les districts de Wallis-et-Futuna, les bases des TAAF, l'île Europa (un seul code est attribué pour les Îles Éparses, Europa en est la plus grande île) et Clipperton.
Ce fichier comporte les noms (adaptés à l'affichage, avec accents, etc) des entités, leur code INSEE, leurs coordonnées géographiques, leur statut de chef-lieu de département, de région (ou statuts comparables) et éventuellement le nom du point utilisé comme référence géographique (pour les TAAF, le nom associé au code INSEE est le nom de l'île ou archipel, et le point correspond à la base principale).

france-dom-tom.topojson
--------
Polygones de tous les territoires français.
