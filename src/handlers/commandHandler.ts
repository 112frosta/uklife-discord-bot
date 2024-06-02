import {
  Client,
  SlashCommandBuilder,
  CommandInteraction,
  REST,
  Routes,
} from "discord.js";
import { readdirSync } from "fs";

interface Command {
  config: SlashCommandBuilder;
  execute: (interaction: CommandInteraction) => Promise<void>;
}

let commands: Map<string, Command> = new Map();

export const initializeCommands = async (client: Client) => {
  const files = readdirSync("./src/commands").filter((file) =>
    file.endsWith(".ts")
  );

  //Dev Only
  console.log(`(/) Found ${files.length} commands`);

  for (const file of files) {
    const command: Command = await import(`../commands/${file}`);
    commands.set(command.config.name, command);
  }

  await registerCommands();

  client.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand()) return;
    if (!commands.get(interaction.commandName)) return;

    try {
      await commands.get(interaction.commandName)?.execute(interaction);
    } catch (err) {
      console.error(err);
    }
  });
};

const registerCommands = async () => {
  const rest = new REST().setToken(process.env.TOKEN!);

  console.log("(/) Started refreshing application commands");

  await rest
    .put(
      Routes.applicationGuildCommands(
        process.env.CLIENTID!,
        process.env.GUILDID!
      ),
      {
        body: Array.from(commands.values()).map((command) =>
          command.config.toJSON()
        ),
      }
    )
    .catch((err) => console.error(err))
    .then(() => console.log(`(/) Registered ${commands.size} commands`));
};
