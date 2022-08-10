import Info from "./Info";
import About from "./About";
import Interests from "./Interests";
import { Footer } from "./Footer";

export default function Main() {
  return (
    <main className="main">
      <Info />
      <About />
      <Interests />
      <Footer />
    </main>
  )
}