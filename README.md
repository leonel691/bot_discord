# Discord Bot

Un bot Discord simple écrit en Node.js utilisant la bibliothèque discord.js. Ce bot répond aux commandes de base et inclut des fonctionnalités d'administration.

## Auteur

<img src="https://github.com/leonel691.png" alt="Photo de profil" width="100" height="100" style="border-radius: 50%;">

**[leonel691](https://github.com/leonel691)** - Créateur du projet

## Fonctionnalités

- Réponse automatique aux commandes `!ping`
- Commande `!config` réservée aux administrateurs
- Utilisation des modules ES (ES Modules)
- Configuration via variables d'environnement

## Prérequis

- Node.js (version 16.9.0 ou supérieure)
- Un token de bot Discord

## Installation

1. Clonez ce repository :
   ```bash
   git clone <url-du-repo>
   cd discordbot
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

3. Créez un fichier `.env` à la racine du projet :
   ```
   TOKEN_BOT231=votre_token_discord_bot
   ```

## Configuration

### Obtenir un token Discord Bot

1. Allez sur le [Portail des Développeurs Discord](https://discord.com/developers/applications)
2. Créez une nouvelle application
3. Dans l'onglet "Bot", créez un bot
4. Copiez le token et ajoutez-le à votre fichier `.env`

### Permissions du Bot

Assurez-vous que votre bot a les permissions suivantes sur votre serveur :
- Lire les messages
- Envoyer des messages
- Mentionner @everyone (pour la commande !ping)

## Utilisation

Lancez le bot avec :
```bash
node app.js
```

Le bot se connectera automatiquement et sera prêt à recevoir des commandes.

## Commandes

- `!ping` : Le bot répond "Pong (via ES Modules) !" et envoie un message @everyone
- `!config` : Commande réservée aux administrateurs (nécessite la permission Administrateur)

## Structure du projet

```
discordbot/
├── app.js          # Fichier principal du bot
├── package.json    # Dépendances et configuration du projet
└── .env           # Variables d'environnement (à créer)
```

## Technologies utilisées

- [Node.js](https://nodejs.org/)
- [discord.js](https://discord.js.org/) - Bibliothèque Discord pour Node.js
- [dotenv](https://www.npmjs.com/package/dotenv) - Gestion des variables d'environnement

## Licence

ISC