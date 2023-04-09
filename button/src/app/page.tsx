import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button } from './components/button/pages'
import { CheckCircleIcon } from './components/icons/CheckCircleIcon'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center space-y-8 p-24 bg-slate-500">
      
    <Button >Entrar</Button>
    <Button icon={<CheckCircleIcon/>}>Entrar</Button>
    <Button size='small' variant='transparent' icon={<CheckCircleIcon/>}>Transparent</Button>
    <Button icon={<CheckCircleIcon/>}  variant='submit'>Entrar</Button>
    <Button icon={<CheckCircleIcon/>}  variant='cancel'>Cancelar</Button>

     
    </main>
  )
}
