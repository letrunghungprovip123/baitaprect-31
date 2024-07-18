import { useState } from 'react'
import BaiTapGlass from './component/BaiTapGlass'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BaiTapGlass />
    </div>
  )
}

export default App
