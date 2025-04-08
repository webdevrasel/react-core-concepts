import { useState } from "react"

export default function Batsman (){
    const [runs, setRuns] = useState(0)

    const handleSingle = () => {
        const updatesRuns = runs + 1;
        setRuns(updatesRuns)
    }

    const handleFour = () => {
        const updatesRuns = runs + 4;
        setRuns(updatesRuns)
    }


    return(
        <div>
            <h2>Player: Bangla Batsman</h2>
            {
                runs > 100 && <h3>You Score: 100 </h3>
            }
            <h1>Score: {runs}</h1>
            <button onClick={handleSingle}>Singles</button>
            <button onClick={handleFour}>Four</button>
            <button>Six</button>
        </div>
    )
}