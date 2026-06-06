import { Nav }       from "@/components/Nav";
import { Hero }      from "@/components/Hero";
import { Marquee }   from "@/components/Marquee";
import { Signature } from "@/components/Signature";
import { Services }  from "@/components/Services";
import { Lookbook }  from "@/components/Lookbook";
import { Process }   from "@/components/Process";
import { Voices }    from "@/components/Voices";
import { Footer }    from "@/components/Footer";
import BookingForm from "@/components/bookingform";
export default function Page() {
  return (
    <main className="relative bg-ink-950">
      <Nav />
      <Hero />
      <Marquee />
      <Signature />
      <Services />
      <Lookbook />
      <Process />
      <Voices />
      <BookingForm />
      <Footer />
    </main>
    
  );
}
