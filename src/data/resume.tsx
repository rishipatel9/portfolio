import { Icons } from "@/components/icons";
import { HomeIcon, NotepadText } from "lucide-react";

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
    "PostgresSQL",
    "Docker",
    "Redis",
    "C++",

  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://drive.google.com/file/d/1AkNUfSMQJDUrNTuwxGDVGZUtfn0b4hvO/view?usp=sharing", icon: NotepadText , label: "Resume" },
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
      title: "Elytra",
      href: "https://rishii.dev",
      dates: "Nov 2024 - Dec 2024",
      active: true,
      description:
        "Elytra is a web-based platform that allows users to create, share, and discover interactive stories. Users can create branching narratives, add images, and embed media to create engaging and immersive experiences.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "Heygen",
        "PineCone",
        "NextAuth",
      ],
      links: [
        {
          type: "Website",
          href: "https://rishii.dev",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/rishipatel9/elytra",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://i.postimg.cc/V6Z0Nw4b/Screenshot-2024-12-14-at-4-26-50-PM.png",
    },
    {
      title: "text",
      href: "https://text.whiteops.xyz",
      dates: "July 2023 - Aug 2023",
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
      image: "https://i.postimg.cc/13smfTkJ/Screenshot-2024-08-18-at-12-09-51-PM.jpg",
    },
    {
      title: "Wallet",
      href: "https://wallet.whiteops.xyz",
      dates: "Aug 2023 - Present",
      active: true,
      description:
        "A Web3 wallet is a decentralized tool that allows users to securely store, send, and receive cryptocurrencies, while interacting seamlessly with blockchain applications. ",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "@solana/web3.js"
      ],
      links: [
        {
          type: "Website",
          href: "https://wallet.whiteops.xyz",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/rishipatel9/sol-wallet",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://i.postimg.cc/k49TbNKf/Screenshot-2024-09-17-at-5-39-11-PM.jpg",
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
      image: "https://i.postimg.cc/XJmFW3D2/Screenshot-2024-06-25-at-5-17-35-PM.jpg",
    },
  ],

} as const;
