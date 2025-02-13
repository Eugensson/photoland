import {
  RiYoutubeFill,
  RiInstagramLine,
  RiTwitterXLine,
  RiFacebookCircleFill,
} from "react-icons/ri";
import Link from "next/link";

const socialData = [
  {
    label: "Youtube",
    icon: RiYoutubeFill,
    href: "https://www.youtube.com",
  },
  {
    label: "Instagram",
    icon: RiInstagramLine,
    href: "https://www.instagram.com",
  },
  {
    label: "TwitterX",
    icon: RiTwitterXLine,
    href: "https://x.com",
  },
  {
    label: "Facebook",
    icon: RiFacebookCircleFill,
    href: "https://www.facebook.com",
  },
];

export const Socials = () => {
  return (
    <ul className="max-w-max mx-auto mb-16 flex items-center gap-x-6">
      {socialData.map(({ label, icon: Icon, href }) => (
        <li key={label}>
          <Link href={href} className="hover:text-accent transition-colors">
            <Icon size={30} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
