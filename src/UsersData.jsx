import image1 from "../src/assets/images/avatar-mark-webber.webp";
import image2 from "../src/assets/images/avatar-angela-gray.webp";
import image3 from "../src/assets/images/avatar-jacob-thompson.webp";
import image4 from "../src/assets/images/avatar-rizky-hasanuddin.webp";
import image5 from "../src/assets/images/avatar-kimberly-smith.webp";
import image6 from "../src/assets/images/avatar-nathan-peterson.webp";
import image7 from "../src/assets/images/avatar-anna-kim.webp";
import image8 from "../src/assets/images/image-chess.webp";

const usersData = [
  {
    name: "Mark Webber",
    action: "reacted to your recent post",
    post: "My first tournament today!",
    time: "1 m ago",
    read: false,
    img: image1,
  },
  {
    name: "Angela Gray",
    action: "followed you",

    time: "5 m ago",
    read: false,
    img: image2,
  },
  {
    name: "Jacob Thompson",
    action: "has joined your group",
    group: "Chess Club",
    time: "1 day ago",
    read: false,
    img: image3,
  },
  {
    name: "Rizky Hasanuddin",
    action: "sent you a private message",
    message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks naw and I'm already having lots of fun and improving my game.",
    time: "5 days ago",
    read: true,
    img: image4,
  },
  {
    name: "Kamberly Smith",
    action: "commented on your picture",

    time: "1 week ago",
    read: true,
    img: image5,
    chessImage: image8,
  },
  {
    name: "Nathan Peterson",
    action: "reacted to your recent post",
    post: "5 end-game strategies to increase your win rate",
    time: "2 weeks ago",
    read: true,
    img: image6,
  },
  {
    name: "Anna Kim",
    action: "left the group",
    group: "Chess Club",
    time: " 2 weeks ago",
    read: true,
    img: image7,
  },
];
export default usersData;
