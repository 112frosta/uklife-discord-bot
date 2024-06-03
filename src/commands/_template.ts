// Import Builders, Types, Dependencies and Utils
import { SlashCommandBuilder, CommandInteraction } from "discord.js";

/* 
    Create a new SlashCommandBuilder instance
    Where the name is the command name
*/

export const config = new SlashCommandBuilder()
  .setName("template")
  .setDescription("Template command");

export const execute = async (interaction: CommandInteraction) => {
  //  Do stuff
  await interaction.reply("Template command executed!");
};
