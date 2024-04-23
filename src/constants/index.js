import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitIcon5,
  benefitIcon6,
  benefit1,
  // chromecast,
  // disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  // recording01,
  // recording03,
  cool,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  // sliders04,
  telegram,
  twitter,
  yourlogo,
  benefit3,
  benefit2,
  benefit4,
  benefit5,
  benefit6,
  coool,
  col,
  cl,
  c,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Superpowers",
    url: "#features",
  },
  {
    id: "1",
    title: "Investment",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Mastery",
    url: "#how-to-use",
  },
 
  {
    id: "4",
    title: "Community",
    url: "#community",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "AI-driven image generation",
  "Advanced photo enhancement",
  "Seamless integration capabilities",
];

export const brainwaveServicesIcons = [cool, coool, cl, col, c];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Essential",
    description: "AI for essential tasks",
    price: "Free",
    features: [
      "AI Chatbot & Recommendations",
      "High-quality Photo & Video Generation",
      "Text-to-Speech for Audio Clones",
    ],
    specifications: [],
  },
  {
    id: "1",
    title: "Business",
    description: "AI for advanced analytics",
    price: "₹99/month",
    features: [
      "Advanced Chatbot & Analytics",
      "Professional Photo & Video Editing",
      "Automated Video Creation",
    ],
    specifications: [],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI Solutions & Support",
    features: [
      "Tailored AI Solutions & Support",
      "AI-driven Video Editing",
      "Predictive Analytics",
    ],
    specifications: [],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Unlock Infinite Possibilities",
    text: "Empower users to explore limitless opportunities and discover new horizons effortlessly.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefit1,
  },

  {
    id: "1",
    title: "Unlock Your Potential",
    text: "Unleash the power of our app's cutting-edge natural language processing. Elevate your skills with precise and tailored responses to your queries.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefit2,
    light: true,
  },

  {
    id: "2",
    title: "Seamless Connectivity, Infinite Possibilities",
    text: "Embark on an extraordinary journey with our AI chatbot. Seamlessly connect from anywhere, on any device, unlocking a world of limitless possibilities.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefit3,
  },

  {
    id: "3",
    title: "Instant Responses",
    text: "Get quick answers without the hassle. Our AI chatbot delivers instant responses, saving you time and effort.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefit4,
    light: true,
  },

  {
    id: "4",
    title: "Unlimited Knowledge",
    text: "Unlock a world of information. Our AI chatbot empowers users to ask anything, providing accurate answers without the need to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon5,
    imageUrl: benefit5,
  },

  {
    id: "5",
    title: "Elevate Daily",
    text: "Harnessing cutting-edge natural language processing, our app comprehends user queries with precision, delivering pertinent and reliable responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon6,
    imageUrl: benefit6,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
