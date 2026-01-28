# Kasa — Application Web de Location Immobilière (React)

Projet réalisé dans le cadre de la formation **Développeur Web** chez **OpenClassrooms**.

---

## Contexte du projet

Vous êtes développeur front-end freelance pour **Kasa**, une entreprise de location d’appartements entre particuliers, leader du marché français avec plus de **500 nouvelles annonces par jour**.

Le site historique de Kasa, développé il y a plus de 10 ans en **ASP.NET**, fait l’objet d’une **refonte complète** afin de :

* moderniser la stack technique
* améliorer la maintenabilité du code
* offrir une expérience utilisateur fluide et responsive

La nouvelle version du front-end est développée avec **React**, en suivant des **maquettes Figma** fournies par le designer et des **contraintes techniques strictes** définies par la CTO.

---

## Objectifs

Votre mission principale est de :

| Objectif                   | Description                                |
| -------------------------- | ------------------------------------------ |
| Initialiser le projet      | Création d’une application React avec Vite |
| Développer le front-end    | Composants React réutilisables             |
| Mettre en place le routing | Navigation avec React Router               |
| Respecter les maquettes    | Intégration fidèle et responsive           |
| Gérer les données          | Utilisation d’un fichier JSON local        |
| Assurer la qualité         | Code propre, lisible et maintenable        |

---

## Fonctionnalités développées

* Affichage dynamique des logements à partir d’un fichier JSON
* Navigation entre les pages avec **React Router**
* Galerie d’images avec navigation circulaire (précédent / suivant)
* Gestion des cas limites (une seule image, boucle infinie)
* Composant **Collapse** interactif avec animation CSS
* Pages dynamiques pour chaque logement
* Page d’erreur 404 personnalisée
* Design responsive (desktop / tablette / mobile)

---

## Contraintes fonctionnelles respectées

### Galerie (Carousel)

* Si l’utilisateur est sur la première image et clique sur **Précédent**, la dernière image s’affiche
* Si l’utilisateur est sur la dernière image et clique sur **Suivant**, la première image s’affiche
* Si une seule image est disponible :

  * les boutons de navigation disparaissent
  * la numérotation n’est pas affichée
* La galerie conserve une **hauteur fixe**, les images sont centrées et rognées

### Collapse

* Les Collapses sont **fermés par défaut**
* Un clic permet d’ouvrir ou de fermer le contenu
* Animation fluide réalisée en **CSS (Sass)**

---

## Stack technique

| Technologie     | Utilisation                               |
| --------------- | ----------------------------------------- |
| React           | Développement de l’interface              |
| Vite            | Bundler et environnement de développement |
| React Router    | Gestion des routes                        |
| JavaScript ES6+ | Logique applicative                       |
| Sass (SCSS)     | Styles et animations CSS                  |
| JSON            | Simulation des données back-end           |
| Git / GitHub    | Versioning et dépôt du projet             |

---

## Démarrage du projet

### Prérequis

* Node.js (version recommandée ≥ 18)
* npm ou yarn

### Installation

```bash
git clone https://github.com/ton-utilisateur/kasa.git
cd kasa
npm install
```

### Lancer le projet en local

```bash
npm run dev
```

L’application est accessible à l’adresse :
👉 `http://localhost:5173`

---

## Structure du projet

```
├──📁 src
│	├──📄 App.tsx
│	├──📄 main.tsx
│	├──📁 styles
│	│	├──📄 _breackpoints.scss
│	│	├──📄 _reset.scss
│	│	├──📄 _variables.scss
│	│	├──📄 main.scss
│	├──📁 services
│	│	├──📄 LogementsApi.ts
│	├──📁 pages
│	│	├──📁 NotFound
│	│	│	├──📄 NotFound.tsx
│	│	│	├──📄 notFound.module.scss
│	│	├──📁 Logements
│	│	│	├──📄 Logements.tsx
│	│	│	├──📄 logements.module.scss
│	│	├──📁 Home
│	│	│	├──📄 Home.tsx
│	│	├──📁 About
│	│	│	├──📄 About.tsx
│	│	│	├──📄 about.module.scss
│	├──📁 layouts
│	│	├──📄 MainLayouts.tsx
│	├──📁 context
│	│	├──📄 LogementContext.tsx
│	│	├──📄 LogementsProvider.tsx
│	│	├──📄 useLogements.ts
│	├──📁 components
│	│	├──📁 Logements
│	│	│	├──📁 Tags
│	│	│	│	├──📄 Tags.tsx
│	│	│	│	├──📄 tags.module.scss
│	│	│	├──📁 Rating
│	│	│	│	├──📄 Rating.tsx
│	│	│	│	├──📄 rating.module.scss
│	│	│	├──📁 Profil
│	│	│	│	├──📄 Profils.tsx
│	│	│	│	├──📄 profil.module.scss
│	│	│	├──📁 Carrousel
│	│	│	│	├──📄 Carrousel.tsx
│	│	│	│	├──📄 carrousel.module.scss
│	│	├──📁 Home
│	│	│	├──📁 Gallery
│	│	│	│	├──📄 Gallery.tsx
│	│	│	│	├──📄 gallery.module.scss
│	│	│	├──📁 Cards
│	│	│	│	├──📄 Cards.tsx
│	│	│	│	├──📄 cards.module.scss
│	│	├──📁 Global
│	│	│	├──📁 Navbar
│	│	│	│	├──📄 Navbar.tsx
│	│	│	│	├──📄 navbar.module.scss
│	│	│	├──📁 HeroBanner
│	│	│	│	├──📄 HeroBanner.tsx
│	│	│	│	├──📄 heroBanner.module.scss
│	│	│	├──📁 Footer
│	│	│	│	├──📄 Footer.tsx
│	│	│	│	├──📄 footer.module.scss
│	│	│	├──📁 Accordion
│	│	│	│	├──📄 Accordion.tsx
│	│	│	│	├──📄 accordion.module.scss
│	├──📁 assets

```

---

## Gestion des données

En l’absence de back-end, les données sont fournies via un fichier JSON local :

```
src/assets/data/logements.json
```

Chaque logement contient :

* un identifiant unique
* un titre et une localisation
* des images
* une description
* des équipements
* des informations sur l’hôte
* une note (rating)

---

## Routing de l’application

| Route          | Description             |
| -------------- | ----------------------- |
| `/`            | Page d’accueil          |
| `/about`       | Page À propos           |
| `/housing/:id` | Page logement dynamique |
| `*`            | Page 404                |

---

## Qualité & bonnes pratiques

* Composants découpés et réutilisables
* Props typées et structurées
* Logique métier séparée de l’affichage
* Respect strict des maquettes Figma
* Animations CSS sans librairie externe
* Code lisible et maintenable

---

## Auteur

Projet réalisé par **Donovan Chartrain**
Formation **Développeur Web — OpenClassrooms**

Ce projet est réalisé dans un cadre pédagogique et peut être librement consulté.

---

---

## 🧩 Changelog — Historique des actions

| ID | Titre du Commit | Description               | Lien |
| -: | --------------- | ------------------------- | ---- |
| 01 | Création du repository | Initialisation de Github|[`153cc80`](https://github.com/donovan-dev-web/Projet-Kasa/commit/153cc80)|
| 02 | Création du projet React | Création du projet React et préconfig |[`9de30c2`](https://github.com/donovan-dev-web/Projet-Kasa/commit/9de30c2)|
| 03 | Structure du projet | Mise en place de la structure des fichiers |[`88a61f2`](https://github.com/donovan-dev-web/Projet-Kasa/commit/88a61f2)|
| 04 | Mise en place du routing | Mise en place et configuration des routes |[`f788fef`](https://github.com/donovan-dev-web/Projet-Kasa/commit/f788fef)|
| 05 | Création du Layout | Création du Layout et composent de navbar et footer |[`7805273`](https://github.com/donovan-dev-web/Projet-Kasa/commit/7805273)|
| 06 | Création de la banniere | Création de la baniere de la page d'accueile et A propos |[`5de77a0`](https://github.com/donovan-dev-web/Projet-Kasa/commit/5de77a0)|
| 07 | Création de la page 404 | Création de la page 404 |[`040ed3b`](https://github.com/donovan-dev-web/Projet-Kasa/commit/040ed3b)|
| 08 | Ajout du dropdonw | Création du dropdown et ajout dans la page A propos |[`c483f30`](https://github.com/donovan-dev-web/Projet-Kasa/commit/c483f30)|
| 09 | ajout du contexte Logements et galerie dynamique | mise en place du traiement des donnée via le json + Gallery/Cards et page dynamique via parametre :id |[`5ff2bd2`](https://github.com/donovan-dev-web/Projet-Kasa/commit/5ff2bd2)|
| 10 | Création page Logements | Création et mise en page du contenue de la page Logements |[`9557157`](https://github.com/donovan-dev-web/Projet-Kasa/commit/9557157)|
| 11 | Ajout du carrousel | Creation et ajout du composant de Carrousel present dans la page logements |[`981ada2`](https://github.com/donovan-dev-web/Projet-Kasa/commit/981ada2)|

---