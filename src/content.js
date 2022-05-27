import { useEffect , useState } from "react";

// 1. Callback luôn được gọi sau khi component Mounted 

function content() {

    const [title,setTitle] = useState['']
    useEffect(() => {
        console.log('Mounted')
    })

    return (
        <div>
            <input
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
        </div>
    )
}

export default Content;