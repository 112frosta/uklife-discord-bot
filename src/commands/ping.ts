import { SlashCommandBuilder } from "discord.js";

export const config = new SlashCommandBuilder()
  .setName("ping")
  .setDescription("Replies with ping!");

export const execute: CommandExecute = async (interaction) => {
  await interaction.reply("Pong!");
};
