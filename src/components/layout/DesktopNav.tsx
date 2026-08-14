import NavLink from "@/components/layout/NavLink";
import { navigation } from "@/data/navigation";

export default function DesktopNav() {
  return (
    <nav className="hidden items-center gap-8 md:flex">
      {navigation.map((item) => (
        <NavLink key={item.href} href={item.href}>
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
