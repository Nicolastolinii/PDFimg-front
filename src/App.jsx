import {DragAndDrop} from "./components/DragAndDrop"
import { Navbar } from "./components/Navbar"
function App() {
  return (
    <main className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <Navbar/>
      <div className="w-full flex flex-col items-center justify-around h-3/5">
        <div className="flex flex-col  items-center text-slate-400">
        <h1 className="text-slate-200 pt-24 text-4xl tracking-wider uppercase font-bold">Convierte tu PDF</h1>
        <p className="w-[70%] text-center pt-2">Convierte fácilmente a y desde PDF en segundos.</p>
        </div>
      <DragAndDrop/>
      </div>
    </main>
  )
}
export default App
