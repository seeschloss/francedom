francedom.js
=========

Projection D3js pour afficher France + DOM + COM sur une seule carte compacte.

Une démonstration est visible à cette adresse : https://ssz.fr/francedom

Tous les départements et collectivités d'outre-mer sont inclus :

* Guadeloupe
* Martinique
* Guyane
* Réunion
* Mayotte
* Nouvelle-Calédonie
* Wallis-et-Futuna
* Polynésie française (uniquement Tahiti et Moorea)
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
* x 1
  * Réunion
  * Îles Kerguelen
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

De plus, les distances entre Wallis et Futuna, et Saint-Paul et Amsterdam ne sont pas à l'échelle.


Données géographiques
=========
En plus de la projection adaptée à la France, j'ai essayé de réunir des données utiles sur les communes de France :

territoires-communes.topojson
--------
Territoires des communes de métropole, DOM (y compris Mayotte) et de Nouvelle-Calédonie.
Les TAAF et Clipperton ne comportent pas de communes, les deux communes de Saint-Pierre-et-Miquelon sont chacune sur leur île respective, Wallis et Futuna ne comportent pas de communes mais des districts dont je n'ai pas pu trouver les limites précises, et je n'ai pas non plus pu réunir les limites des communes de Polynésie française.

communes.tsv
--------
Liste des toutes les communes ou autres entités dotées d'un code INSEE. En pratique, ce sont toutes les communes de métropole, DOM, collectivités d'outre-mer, ainsi que les districts de Wallis-et-Futuna, les bases des TAAF, l'île Europa (un seul code est attribué pour les Îles Éparses, Europa en est la plus grande île) et Clipperton.
Ce fichier comporte les noms (adaptés à l'affichage, avec accents, etc) des entités, leur code INSEE, leurs coordonnées géographiques, leur statut de chef-lieu de département, de région (ou statuts comparables) et éventuellement le nom du point utilisé comme référence géographique (pour les TAAF, le nom associé au code INSEE est le nom de l'île ou archipel, et le point correspond à la base principale).

france-dom-tom.topojson
--------
Polygones de tous les territoires français.
