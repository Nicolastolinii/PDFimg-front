import {DragAndDrop} from "./components/DragAndDrop"
import { Navbar } from "./components/Navbar"
function App() {
  return (
    <main className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <Navbar/>
      <div className="w-full flex flex-col items-center justify-around h-3/5">
        <h1 className="text-slate-400 py-12 text-3xl font-bold">Converti Tus PDF´s</h1>
      <DragAndDrop/>
      </div>
    </main>
  )
}
export default App
