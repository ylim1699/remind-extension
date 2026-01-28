import { useState, useEffect } from 'react';
import './task.css'
// useState is how you store values or data, and you use this instead of let color="white".
// How? You import it like above and then do: const[color, setColor] = useState('white');
// you can also keep the initial empty to map new data from rest API.
// You use useState because when you setColor, it renders the whole page again without having to refresh.

interface Task {
  id: number;
  text: string;
}

function Task() {
  const [tasks, setTasks] = useState<Task[]>([]); // <[]> means it's an array, and ([]) means it's initially empty
  const [input, setInput] = useState('');
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (typeof chrome !=='undefined' && chrome.storage)
    {
      chrome.storage.local.get(["savedTasks"], (result) => {
        if (result.savedTasks) {
          setTasks(result.savedTasks as Task[]);
        }
        setIsInitialized(true);
      });
    } else {
      console.log('Running in broswer mode');
    }
  }, []);

  useEffect(() => {
    if (typeof chrome !=='undefined' && chrome.storage)
    {
      if (isInitialized) {
        chrome.storage.local.set({ savedTasks: tasks });
      } 
    } else {
      console.log('browser mode, nothing will be saved.');
    }
    }, [tasks, isInitialized]);

  const addTask = () => {
    if (!input.trim()) return;
    const newTask = { id: Date.now(), text: input };
    setTasks([...tasks, newTask]); // this is how you tell typescript to put the newTask at the end of the array. 
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="task-wrapper">
      <div className="extension-container">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)} //sets the input useState as the clicked value
          placeholder="New task..."
          className="task-input"
        />
        <button onClick={addTask} className="add-button">
          Add
        </button>
      </div>

        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id} className="task-item">
              {task.text}
              <button onClick={() => deleteTask(task.id)} className="delete-btn">
                x
              </button>
            </li>
          ))}
        </ul>
    </div>
  );
}

export default Task;
