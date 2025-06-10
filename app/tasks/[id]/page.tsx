import dynamic from "next/dynamic";

// const MonacoEditor = dynamic(() => import("@/components/Editor"), {
//   ssr: false,
// });
import MonacoEditor from "@/components/Editor";

export default function EditorPage() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Online Code Editor</h1>
      <MonacoEditor />
    </div>
  );
}
