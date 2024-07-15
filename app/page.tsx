"use client"
import { CardMovement } from "@/components/CardMovement";
import FeaturedSection from "@/components/FeaturedSection";
import Herosection from "@/components/Herosection";
import Footer from "@/components/Footer";
import Instructor from "@/components/Instructor";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import WhyChooseus from "@/components/WhyChooseus";
import { Meteors } from "@/components/ui/meteors";


export default function Home() {
  return(
    <>
   <main className="min-h-screen bg-zinc-900/[0.96] antialiased dark:bg-dot-white/[0.2] bg-dot-black/[0.2]
   ">
     {/* <Meteors number={200} /> */}
    <Herosection/>
    <FeaturedSection/>
    <WhyChooseus/>
    <CardMovement/>
    <UpcomingWebinar/>
    <Instructor/>
    <Footer/>
   </main>
    </>
  )
}
