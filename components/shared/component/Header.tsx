import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="flex h-16 items-center justify-between px-4">
        <Button variant="ghost" size="icon" className="lg:hidden">
          <span className="sr-only">Open sidebar</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </Button>
        {/* <div className="text-2xl font-semibold text-gray-900">Dashboard</div> */}
        {/* Add user menu or other topbar content here */}
      </div>
    </header>
  );
}
