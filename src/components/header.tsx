import Link from "next/link";
const navItems = [
  { name: "Home", href: "/" },
  { name: "Calendar", href: "/calendar" },
  { name: "Settings", href: "/settings" },
]
export default function Header() {
  return (
    <header className="border-b border-gray-300 bg-background text-foreground">
      <div className="px-50 py-5 flex items-center justify-between" style={{ backgroundColor: "#f2f2f2" }}>
        <div className="flex items-center gap-3 ml-10">
          {/*Logo (TO BE CHANGED INTO ROUTING WHEN LOGO IS AVAILABLE DONT CHANGE IF NO LOGO)*/}
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 shadow-sm">
             <span className="text-sm font-bold text-white">J4</span>
          </div>
          {/* TEXT OF THE KUAN HAHAHHAH TITLE SHIT SHIT*/}
          <div className="flex flex-col">
              <h1 className="text-black font-bold">Just 4</h1>
              {/* Insert Tagline nalang guys */}
              <p className="text-gray-600 font-light">Fucking Tagline</p>
          </div>
        </div>
        <nav className="border border-gray-50 rounded-full drop-shadow-xl px-3 py-1 absolute left-1/2 -translate-x-1/2 flex items-center gap-4 text-sm text-muted-foreground" style={{ backgroundColor: "#f7f9fb" }}>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-blue-600 border border-transparent rounded-full px-2 py-1">
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}