import Header from "../Components/header"

function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Header />
            <main className="mt-20 flex flex-col gap-10 justify-center items-center p-2 flex-wrap antialiased
            sm:flex-row">
                {children}
            </main>
        </>
    )
}

export default Layout