import Image from 'next/image'
import Reservas from './components/reservas'
import NovaReservaButton from './components/novaReservaButton'

export default async function Home() {
  const data = await fetch(
    `http://127.0.0.1:8000/api/reservas`,
  )
  const response = await data.json()
  console.log(response)
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-evenly p-12 md:flex-row md:items-start lg:flex-row lg:items-start">
      <Reservas reservas={response} />
      <NovaReservaButton />
    </main>
  )
}
