import { useState } from "react";

function TodoPage() {
  const onclick = async () => {
    const [tabs] = await chrome.tabs.query({ active: true });
    chrome.scripting.executeScript({
      target: { tabId: tabs.id! },
      func: () => {
        alert("Hello from your Chrome extension!");
      },
    });
  };

  return (
    <main>
      <button onClick={() => onclick()}>Click me</button>
    </main>
  );
}

export default TodoPage();
