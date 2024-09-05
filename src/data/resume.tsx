import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Rishi Patel",
  initials: "RP",
  url: "https://rishi-portfolio-opal.vercel.app/",
  location: "Mumbai, India",
  locationLink: "https://www.google.com/maps/place/mumbai",
  description:
    "Full stack engineer. I love understanding and building complex things",
  summary:
    "I am a 3rd-year BCA student deeply interested in full stack web development. I enjoy building web applications that are both functional and visually appealing. I'm also exploring the world of Web3 and decentralized technologies, eager to contribute to the future of the internet. My goal is to blend traditional web development skills with the emerging Web3 landscape.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Postgres",
    "Docker",
    "Redis",
    "C++",

  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "rishipatel0826@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rishipatel9/",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rishi-patel-96366b299/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Rishi99876",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:rishipatel0826@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },
  education: [
    {
      school: "Tilak Vidhyapeet pune",
      href: "https://www.tmv.edu.in/",
      degree: "Bachelor's in Computer Application (BCA)",
      logoUrl: "/buildspace.jpg",
      start: "2022",
      end: "2025",
    }
  ],
  projects: [
    {
      title: "text",
      href: "https://text.whiteops.xyz",
      dates: "July 2023 - Present",
      active: true,
      description:
        "A scalable real-time chat app that leverages Redis and WebSockets for efficient message delivery and instant communication across multiple users. Designed to handle high traffic with minimal latency.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Redis",
        "aceternity UI"
      ],
      links: [
        {
          type: "Website",
          href: "https://text.whiteops.xyz",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/rishipatel9/text",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Status Page",
          href: "http://status.text.whiteops.xyz/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://imgtr.ee/images/2024/08/18/020a87298274ba89926e46e824573757.jpeg",
    },
    {
      title: "mines",
      href: "https://mines.whiteops.xyz",
      dates: "May 2024 - June 2024",
      active: true,
      description:
        "A Mines clone of Stake is a web-based game where players reveal tiles on a grid, avoiding hidden mines while uncovering rewards. The game offers customizable settings, sleek design, and a thrilling balance of risk and reward.",
      technologies: [
        "React",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Nodejs",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://mines.whiteops.xyz",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/rishipatel9/mines",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Status Page",
          href: "http://status.mines.whiteops.xyz/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://imgtr.ee/images/2024/08/18/73014a345029eef61eca29a6ea1bb0f6.jpeg",
    },
  ],

} as const;
