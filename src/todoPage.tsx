import { useState } from "react";

function TodoPage() {
  const [btnText, setBtnText] = useState("click me")
  
  const clicked = async () => {
    setBtnText("You clicked the button!")
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
      <button onClick={() => clicked()}>{btnText}</button>
    </main>
  );
}

export default TodoPage;
