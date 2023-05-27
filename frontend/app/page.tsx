import Image from 'next/image'
import Reservas from './components/reservas'


export default async function Home() {
  const data = await fetch(
    `http://127.0.0.1:8000/api/reservas`,
  )
  const response = await data.json()
  console.log(response)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Reservas reservas={response} />
    </main>
  )
}
