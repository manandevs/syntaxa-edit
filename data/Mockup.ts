import { SiReact, SiTailwindcss, SiExpress, SiGraphql, SiPrisma } from "react-icons/si";
import { FaNode, FaNodeJs } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { RiNextjsFill } from "react-icons/ri";

export const mockupLanguages = [
  { icon: FaNodeJs, label: "JS", color: "text-yellow-400" },
  { icon: TbBrandTypescript, label: "TS", color: "text-blue-500" },
  { icon: SiReact, label: "React", color: "text-blue-400" },
  { icon: RiNextjsFill, label: "Next.js", color: "text-gray-800" },
  { icon: SiTailwindcss, label: "Tailwind", color: "text-teal-400" },
  { icon: FaNode, label: "Node.js", color: "text-green-600" },
  { icon: SiExpress, label: "Express", color: "text-gray-700" },
  { icon: SiGraphql, label: "GraphQL", color: "text-pink-500" },
  { icon: SiPrisma, label: "Prisma", color: "text-blue-500" },
];

export const codeLines = [
  'const Welcome = () => {',
  '  return <h1 className="title">Hello, World!</h1>;',
  '};'
];

export const codeWithError = '  return <h1 class="title">Hello, World!</h1>;';
export const correctCode = '  return <h1 className="title">Hello, World!</h1>;';