import { useRef } from "react"

const Reference = () => {
    const inputElement = useRef(null);

    const focusAndWrite = () => {
        inputElement.current.focus();
        inputElement.current.value = "imran";
    }

  return (
    <div>
        <input type="text" ref={inputElement}/>
        <button onClick={focusAndWrite}>focus and write imran</button>
    </div>
  )
}

export default Reference