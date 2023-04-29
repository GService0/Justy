import { ButtonBuilder, ButtonStyle } from "discord.js";

export default {
  data: new ButtonBuilder()
    .setLabel("초대")
    .setEmoji("✉️")
    .setStyle(ButtonStyle.Link)
    .setURL("https://discord.com/api/oauth2/authorize?client_id=1088861583653998642&permissions=1085824953584&scope=bot%20applications.commands")
};
