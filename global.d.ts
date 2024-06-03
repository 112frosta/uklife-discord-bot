import { CommandInteraction } from "discord.js";

declare global {
  type CommandExecute = (interaction: CommandInteraction) => void;
  type CacheCommandInteraction = CommandInteraction<"cached">;
}
