import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="United Training Facility home"
      className="flex items-center"
    >
      <Image
        src="/images/logo-united-only.png"
        alt="United Training Facility"
        width={220}
        height={80}
        priority
        className="h-10 w-auto sm:h-12"
      />
    </Link>
  );
}