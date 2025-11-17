import { BsFillMagnetFill } from "react-icons/bs";
import { FaCode, FaMarkdown, FaDraftingCompass, FaGoogle, FaMicrosoft, FaAmazon, FaSpotify } from "react-icons/fa";

export const services = [
  {
    title: "Online Code Editor",
    description: "Write and test code in the browser with syntax highlighting.",
    icon: FaCode,
    href: "/services/online-code-editor",
  },
  {
    title: "Markdown Editor",
    description: "Edit, preview, and export Markdown files instantly.",
    icon: FaMarkdown,
    href: "/services/markdown-editor",
  },
  {
    title: "WYSIWYG Page Builder",
    description: "Drag-and-drop visual page builder for websites.",
    icon: FaDraftingCompass,
    href: "/services/page-builder",
  },
];


export const testimonials = [
   {
      quote: "Switching to EchoCode cut my debugging time in half. The AI suggestions actually understand modern React patterns, which is a game-changer.",
      author: "Sarah Chen",
      title: "Senior Frontend Developer, TechCorp",
   },
   {
      quote: "Finally, an editor that does not crash with large Unity projects. The performance is incredible. It has become my daily driver.",
      author: "Marcus Rodriguez",
      title: "Indie Game Developer",
   },
   {
      quote: "The collaboration features are seamless. My team can now pair program effectively without screen sharing lag or configuration nightmares.",
      author: "Emily Sato",
      title: "Engineering Manager, Innovate Inc.",
   },
   {
      quote: "The plugin ecosystem is curated perfectly. I get all the power I need without the bloat or dependency issues of other editors.",
      author: "David Lee",
      title: "Full-Stack Developer, StartupX",
   }
];

export const companyLogos = [
   { name: 'Google', Icon: FaGoogle },
   { name: 'Microsoft', Icon: FaMicrosoft },
   { name: 'Amazon', Icon: FaAmazon },
   { name: 'Netflix', Icon: BsFillMagnetFill },
   { name: 'Spotify', Icon: FaSpotify },
];