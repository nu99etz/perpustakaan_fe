export default function Register({
    children
} : Readonly<{
    children: React.ReactNode
}> ) {
    return (
        <html lang="id" className="">
            <body className="bg-slate-100 dark:bg-slate-900 min-h-screen transition-colors duration-300">
                {children}
            </body>
        </html>
    );
}