import Link from "next/link";
const navItems = [
  { name: "Home", href: "/" },
  { name: "Calendar", href: "/calendar" },
  { name: "Settings", href: "/settings" },
]
export default function Header() {
  return (
    <header className="border-b border-gray-300 bg-background text-foreground">
      <div className="px-4 py-3 flex items-center justify-between" style={{ backgroundColor: "#f2f2f2" }}>
        <h1 className="text-2xl font-bold">Just 4</h1>
        <nav className="border rounded-full px-3 py-1 absolute left-1/2 -translate-x-1/2 flex items-center gap-4 text-sm text-muted-foreground" style={{ backgroundColor: "#f7f9fb" }}>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-foreground">
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}