import { useState } from "react";
// useState is how you store values or data, and you use this instead of let color="white".
// How? You import it like above and then do: const[color, setColor] = useState('white');
// you can also keep the initial empty to map new data from rest API.
// You use useState because when you setColor, it renders the whole page again without having to refresh. 

function TodoPage() {
  const [btnText, setBtnText] = useState("click me");
  
  const clicked = async () => {
    setBtnText("You clicked the button!");
    const [tabs] = await chrome.tabs.query({ active: true });
    chrome.scripting.executeScript({
      target: { tabId: tabs.id! },
      func: () => {
        alert("Hello from your Chrome extension!");
      },
    });
  }

  return (
    <main>
      <button onClick={() => clicked()}>{btnText}</button>
    </main>
  );
}

export default TodoPage;
