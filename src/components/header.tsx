import Link from "next/link";
export default function Header() {
  return (
    <header className="border-b border-gray-300 bg-background text-foreground">
      <div className="px-4 py-3 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Just 4</h1>
        <nav className="absolute left-1/2 -translate-x-1/2 flex items-center gap-4 text-sm text-muted-foregroundflex items-center gap-4 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <Link href="/calendar" className="hover:text-foreground">Calendar</Link>
          <Link href="/settings" className="hover:text-foreground">Settings</Link>
        </nav>
      </div>
    </header>
  );
}