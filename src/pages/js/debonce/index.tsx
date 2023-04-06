import { Button } from "@arco-design/web-react"

const DebonceButton = () => {
  function debonce(fn: { (): void; (): void }, delay = 1000) {
    let timer: number | undefined
    return function (): void {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        fn()
      }, delay)
    }
  }
  function consoleNumber() {
    console.log(1)
  }

  const handleClick = debonce(consoleNumber, 1000)
  return <>
    <Button onClick={handleClick}>
      点击
    </Button>
  </>
}

export default DebonceButton