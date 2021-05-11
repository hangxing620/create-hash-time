import { Button } from 'antd'
import { useState } from 'react'
import yeast from '../utils/yeast'
export default function Home() {
  const [value, setValue] = useState('')
  const onclick = () => {
    setValue(yeast())
  } 
  return (
    <div className="box">
      <br/>
      <Button onClick={onclick}>生成哈希时间戳</Button>
      <br/><br/>
      <div>
        哈希时间戳：{value}
      </div>
      <style jsx>{`
        .box {
          max-width: 1200px;
          margin: 0 auto;
        } 
      `}</style>
    </div>
  )
}
