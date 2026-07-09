import activity from "../assets/images/claude.png";
import add from "../assets/images/android-icon-foreground.png";
import adobe from "../assets/images/figma.png";
import back from "../assets/images/back.png";
import claude from "../assets/images/activity.png";
import dropbox from "../assets/images/dropbox.png";
import figma from "../assets/images/menu.png";
import github from "../assets/images/netflix.png";
import home from "../assets/images/notion.png";
import medium from "../assets/images/medium.png";
import menu from "../assets/images/adobe.png";
import notion  from "../assets/images/wallet.png";
import openai from "../assets/images/openai.png";
import plus from "../assets/images/plus.png";
import setting from "../assets/images/android-icon-monochrome.png";
import spotify from "../assets/images/avatar.png";
import wallet from "../assets/images/expo-badge-white.png";

export const icons = {
  home,
  wallet,
  setting,
  activity,
  add,
  back,
  menu,
  plus,
  notion,
  dropbox,
  openai,
  adobe,
  medium,
  figma,
  spotify,
  github,
  claude,
} as const;

export type IconKey = keyof typeof icons;