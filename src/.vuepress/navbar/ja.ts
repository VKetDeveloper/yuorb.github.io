import { navbar } from "vuepress-theme-hope";

export const jaNavbar = navbar([
  { text: "ホーム", icon: "fas fa-house", link: "/en/" },
  { text: "公式ドキュメント", icon: "fas fa-book-open", link: "/en/docs/" },
  { text: "同人チュートリアル", icon: "fas fa-person-chalkboard", link: "/tutorial/" },
  {
    text: "ツール",
    icon: "fas fa-tools",
    children: [
      {
        text: "辞書 Enţrirç",
        icon: "fas fa-book",
        link: "/enthrirhc/",
      },
      {
        text: "単語作成 Hwirbuvie-Ekţgyil",
        icon: "fas fa-pen-to-square",
        link: "https://chromonym.github.io/ithkapp/",
      },
      {
        text: "イスクイルユーティリティキット",
        icon: "fas fa-pen",
        link: "https://v8.zsnout.com/ithkuil/kit",
      },
      {
        text: "イスクイル文字生成",
        icon: "fas fa-signature",
        link: "https://v8.zsnout.com/ithkuil/script",
      },
      {
        text: "数変換",
        icon: "fas fa-hashtag",
        link: "/ja/tool/num",
      },
      {
        text: "カラー選択",
        icon: "fas fa-palette",
        link: "https://ithkuil.place/4/colors/",
      }
    ]
  },

]);
