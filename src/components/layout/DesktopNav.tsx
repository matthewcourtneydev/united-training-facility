import NavLink from "@/components/layout/NavLink";

const navItems = [
  { label: "About", href: "/about" },
  { label: "United Way", href: "/united-way" },
  { label: "Coaches", href: "/coaches" },
  { label: "Schedule", href: "/schedule" },
  { label: "Contact", href: "/contact" },
];

export default function DesktopNav() {
  return (
    <nav className="hidden items-center gap-8 md:flex">
      {navItems.map((item) => (
        <NavLink key={item.href} href={item.href}>
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}