"use client";

import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const analyze = async () => {
    const res = await fetch("/api/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: input })
    });

    const data = await res.json();
    setResult(data.result);
  };

  return (
    <div>
      <textarea
        rows={8}
        style={{ width: "100%" }}
        placeholder="Paste error log / DNS / email header..."
        onChange={(e) => setInput(e.target.value)}
      />

      <br /><br />

      <button onClick={analyze}>
        Analyze
      </button>

      <hr />

      <pre>{result}</pre>
    </div>
  );
}
