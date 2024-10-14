import { FirstPage, StickyContainer } from "./pages/index.js";

function App() {
  return (
    <main className="relative">
      <FirstPage />
      <div className="h-[95vh] w-full bg-transparent z-20 relative"></div>
      <StickyContainer />
    </main>
  );
}

export default App;
