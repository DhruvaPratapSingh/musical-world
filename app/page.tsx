"use client"
import { CardMovement } from "@/components/CardMovement";
import FeaturedSection from "@/components/FeaturedSection";
import Herosection from "@/components/Herosection";
import WhyChooseus from "@/components/WhyChooseus";


export default function Home() {
  return(
    <>
   <main className="min-h-screen bg-zinc-900/[0.96] antialiased dark:bg-dot-white/[0.2] bg-dot-black/[0.2]
   ">
    <Herosection/>
    <FeaturedSection/>
    <WhyChooseus/>
    <CardMovement/>
   </main>
    </>
  )
}
