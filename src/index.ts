import "dotenv/config";

import { Client } from "discord.js";
import { initializeCommands } from "./handlers/commandHandler";

const client = new Client({
  intents: ["GuildMembers", "GuildMessages"],
});

client.on("ready", async () => {
  await initializeCommands(client);
  console.log(`Logged in as ${client.user?.tag}`);
});

client.login(process.env.TOKEN);
