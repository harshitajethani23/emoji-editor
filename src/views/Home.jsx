import "./Home.css"
 import {useState} from "react"
 import ColorButton from "./../components/ColorButton/ColorButton.jsx"
 


function Home() {
   const [emoji,setEmoji] = useState("🌸");
   const [sliderValue,setSliderValue] = useState("50");
   const [bgColor,setBgColor] = useState("#ffffff")
  
  return (
    
       <div className="min-h-screen w-full bg-white relative">
  
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: `
        linear-gradient(to right, #f0f0f0 1px, transparent 1px),
        linear-gradient(to bottom, #f0f0f0 1px, transparent 1px),
        radial-gradient(circle 800px at 100% 200px, #d5c5ff, transparent)
      `,
      backgroundSize: "96px 64px, 96px 64px, 100% 100%",
    }}

  >
    <h1 class="header">playing with emojis with useState</h1>
      <div class="emoji-container" style={{fontSize:`${sliderValue}px`,backgroundColor:bgColor}}
      >{emoji}</div>
      <div className="slider-container">
        
      <input type="range" min="0" max="100" className="slider" onChange={(e)=>{setSliderValue(e.target.value)}} value={sliderValue}/>
      </div>
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
            <h2 class="header-1">Pick an emoji</h2>

            <div className="color-picker">
              <ColorButton bgColor={"#d9b3ff"} setBgColor={setBgColor}/>
               <ColorButton bgColor={"#99c2ff"} setBgColor={setBgColor}/>
                <ColorButton bgColor={"#ff99ff"} setBgColor={setBgColor}/>
                 <ColorButton bgColor={"#ff99c2"} setBgColor={setBgColor}/>
                  <ColorButton bgColor={"#ffe0b3"} setBgColor={setBgColor}/>
                   <ColorButton bgColor={"#ffff99"} setBgColor={setBgColor}/>
                    <ColorButton bgColor={"#b3ff99"} setBgColor={setBgColor}/>
                     <ColorButton bgColor={"#fff"} setBgColor={setBgColor}/>
           
            </div>
             <h2 class="header-2">Pick a color</h2>
                   
        </div>
    </div>
   
     

          
          
); 
}

          export default Home ;