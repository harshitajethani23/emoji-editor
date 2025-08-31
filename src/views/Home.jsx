import "./Home.css"
import {useState} from "react"

function Home() {
    const [emoji,setEmoji] = useState("🌸")
  return (
    <div>
        <h1 class="header">Playing with emojis with useState
            </h1>
            <div class="emoji-container">{emoji}</div>
            <div class="emoji-picker">
                <div class="emoji-option" 
                onClick={()=>{
                    setEmoji("🌸")
                }}>🌸</div>
             
                <div class="emoji-option" onClick={()=>{
                    setEmoji("🌹")
                }}>🌹</div>
                <div class="emoji-option" onClick={()=>{
                    setEmoji("🌺")
                }}>🌺</div>
                 <div class="emoji-option" onClick={()=>{
                    setEmoji("🌻")
                }}>🌻</div>
                <div class="emoji-option" onClick={()=>{
                    setEmoji("🌼")
                }}>🌼</div>
                <div class="emoji-option" onClick={()=>{
                    setEmoji("🌷")
                }}> 🌷</div>
                <div class="emoji-option" onClick={()=>{
                    setEmoji("🪻")
                }}>🪻</div>
            </div>
        </div>
  )
}

export default Home