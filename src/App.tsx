import { Allotment } from "allotment";
import "allotment/dist/style.css";
import '@/App.css'
import Materials from "@/materials/index"
import Editor from "@/editor/index";
import Property from "@/property/index";

function App() {
  return (
    <>
      <Allotment>
        <Allotment.Pane minSize={200}>
          <Materials />
        </Allotment.Pane>
        <Allotment.Pane >
          <Editor />
        </Allotment.Pane>
        <Allotment.Pane >
          <Property />
        </Allotment.Pane>
      </Allotment>
    </>
  )
}

export default App
