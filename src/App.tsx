
import "./styles/tailwind.css";

import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import { AppSidebar } from "@/components/app-sidebar";



function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke("greet", { name }));
  }

  return <AppSidebar />
}

export default App;
