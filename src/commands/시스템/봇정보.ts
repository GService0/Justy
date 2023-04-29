import { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder } from "discord.js";

export default {
    data: new SlashCommandBuilder()
      .setName("봇정보")
      .setDescription("봇에 대한 정보를 출력합니다."),
  
    async execute(interaction: ChatInputCommandInteraction) {
      const embed = new EmbedBuilder()
        .setColor("Random")
        .setTitle("📘 봇 정보")
        .addFields(
          { name: "👑 이름", value: "Justy", inline: true },
          { name: "🏷 디스코드 태그", value: "<@1088861583653998642>", inline: true },
          { name: "🌐 참고사항", value: "본 봇은 그린Bot이라는 디스코드 봇의 오픈소스를 기반으로 제작 되고 있습니다.", inline: true },
        )
        .setTimestamp()
        .setFooter({ text: `Requested by ${interaction.user.tag}`, iconURL: `${interaction.user.displayAvatarURL()}` });
      interaction.followUp({ embeds: [embed] });
    },
  };