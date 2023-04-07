import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="w-screen h-screen bg-gray-300 flex flex-col items-center justify-center gap-8 text-black">
      <h1 className="text-6xl font-bold">Cross chain swap!</h1></div>
  )
}
