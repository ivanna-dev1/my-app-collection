import Link from "next/link";
export default function ProjectsLayout({ children }) {
    return (
        <div className="relative min-h-screen">
            <Link
                href="/"
                className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md border border-zinc-200 rounded-full shadow-sm text-sm font-medium text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900 hover:shadow-md transition-all active:scale-95 no-underline"
            >
                <span>←</span>
                <span>На головну</span>
            </Link>
            {children}
        </div>
    );
}