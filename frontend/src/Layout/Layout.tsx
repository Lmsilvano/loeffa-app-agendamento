import Header from "../Components/header"

function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Header />
            <main className="flex min-h-screen min-w-screen flex-col items-center justify-evenly p-12 md:flex-row md:items-start lg:flex-row lg:items-start">
                {children}
            </main>
        </>
    )
}

export default Layout