import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Sleep Walker",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/08/113a9b73235cab31646ef0059864aec70e793dd2-1024x1024.jpg",
      artist: "J.Folk",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=43902",
      color: ["#9ecb9e", "#dda49b"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "A Reminder",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/05/4a42f136486d42e4d021c673540885c82a1934e6-1024x1024.jpg",
      artist: "Sleepy Fish, coa",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=36925",
      color: ["#e77418", "#fcca5c"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Break",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/07/e4292fd3128da3eb44c528641e120ab67be129a9-1024x1024.jpg",
      artist: "Idealism, SwuM",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=43683",
      color: ["#e1e0ab", "#5b3437"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Hold me Tight",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/06/bde03d4549afe8464c919b89dcb02c2cea1ba676-1024x1024.jpg",
      artist: "Philanthrope, mommy",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=42445",
      color: ["#c7bca7", "#005077"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Sundials",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/07/49bc1653b33bd42e570ecdeba7be86e8bd1b5c38-1024x1024.jpg",
      artist: "chief., Shrimpnose",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=41687",
      color: ["#e2a4cd", "#e7b5bb"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Passing Time",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/06/312458b974ab45c795d75ec3f0259caa3989103a-1024x1024.jpg",
      artist: "Knowmadic",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=41652",
      color: ["#fabd6b", "#f6ead3"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "End of Youth",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/05/5158b15bf8cb3b9d50588cfc31d36d28c816dc0c-1024x1024.jpg",
      artist: "When Mountains Move",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=35657",
      color: ["#7c3ad9", "#321fb7"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "No Problem",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/07/379d68b8db2ba38393c379a5cdf74ff8b255ae9a-1024x1024.jpg",
      artist: "Cocabona, Misha, J.Lamotta",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=42051",
      color: ["#c7bca7", "#20407b"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
