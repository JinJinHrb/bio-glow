'use client'
import { Button } from 'antd'

const Error = ({ error, reset }: { error: Error, reset: () => void }) => (
  <div>
    <h1>有错误！</h1>
    <Button onClick={reset}>重试一下</Button>
  </div>
)

export default Error