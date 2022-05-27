import { useState } from 'react'
const gifts = [
     'Một năm sử dụng miễn phí',
    'Giảm 50% tất cả các mặt hàng',
    'Mua 1 tặng 1',
 ]

function App() {

    const [gift, setGift] = useState()
    

    const handleGift = () => {
        const index = Math.floor(Math.random() * gifts.length)
        setGift(gifts[index])
    }

    return (
        <div className="App" style={ {padding: 20} }>
            {
            <h1>{ gift || 'Chưa có phần thưởng'}</h1> 
            }

            
            <button onClick={handleGift}>Nhận thưởng</button>
        </div>
    )
}

export default App;