import { useState } from 'react' 
// useState is how you store values or data, and you use this instead of let color="white".
// How? You import it like above and then do: const[color, setColor] = useState('white');
// you can also keep the initial empty to map new data from rest API.
// You use useState because when you setColor, it renders the whole page again without having to refresh. 


function Header() {
    return (
        <header>
            <p>Hello World!</p>
        </header>
    )
}

export default Header