import "dotenv/config";
import { Client } from "discord.js";

const client = new Client({
  intents: ["GuildMembers", "GuildMessages"],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user?.tag}`);
});

client.login(process.env.TOKEN);
