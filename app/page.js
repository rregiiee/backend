import Navbar from "@/components/navbar";
import Home from "@/components/home";
import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Portfolio from "@/components/portfolio";
import Skills from "@/components/skills";
import CommentForm from "@/components/CommentForm";
import RatingForm from "@/components/RatingForm";
import Chatbot from "@/components/Chatbot";
export default function Page(){
  return(
    <>
    <Navbar />
    <main>
    <Home />
    <About />
    <Experience />
    <Skills />
    <Portfolio />
    <Contact />
    <CommentForm />
    <RatingForm />
    <Chatbot />
    </main>
    </>
  )
}