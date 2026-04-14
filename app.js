import { Client, GatewayIntentBits, Events, PermissionsBitField } from 'discord.js';
import 'dotenv/config';

const TOKEN_BOT231 = process.env.TOKEN_BOT231;

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// 2. Utilisez Events.ClientReady au lieu de 'ready'
client.once(Events.ClientReady, (c) => {
    console.log(`bot Prêt ! Connecté en tant que ${c.user.tag}`);
});

// 3. Il est aussi recommandé d'utiliser Events.MessageCreate
client.on(Events.MessageCreate, (message) => {
    if (message.author.bot) return;

    if (message.content === '!config') {
        // On vérifie si le membre a la permission "Administrateur"
        if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
            return message.reply("Stop ! Cette commande est réservée aux admins.");
        }

        message.reply("⚙️ Ouverture du menu de configuration...");
    }

    if (message.content.toLowerCase().includes('!ping')) {
        message.reply('Pong (via ES Modules) !');
        message.channel.send("📢 @everyone, ceci est un message important !");
    }
});

client.login(TOKEN_BOT231);
