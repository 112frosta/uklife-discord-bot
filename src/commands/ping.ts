import { CommandInteraction, SlashCommandBuilder } from "discord.js";

export const config = new SlashCommandBuilder()
  .setName("ping")
  .setDescription("Replies with ping!");

export const execute = async (interaction: CommandInteraction) => {
  await interaction.reply("Pong!");
};
