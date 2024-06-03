import { SlashCommandBuilder } from "discord.js";

export const config = new SlashCommandBuilder()
  .setName("ping")
  .setDescription("Replies with ping!")
  .addStringOption((option) =>
    option
      .setName("input")
      .setDescription("The input to echo back")
      .setRequired(true)
  );

export const execute: CommandExecute = async (interaction) => {
  await interaction.reply("Pong!");
};
