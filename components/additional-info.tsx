import Link from "next/link";

const additionalInfoData = [
  {
    label: "Returns policy",
    href: "#",
  },
  {
    label: "Track your order",
    href: "#",
  },
  {
    label: "Shipping & delivery",
    href: "#",
  },
];

export const AdditionalInfo = () => {
  return (
    <ul className="max-w-max mx-auto mb-9 flex items-center gap-x-6 text-xs md:text-base text-white/60 capitalize">
      {additionalInfoData.map(({ label, href }) => (
        <li key={label}>
          <Link href={href} className="hover:text-white transition-colors">
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
