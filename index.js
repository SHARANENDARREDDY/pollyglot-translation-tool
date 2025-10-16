   
document.getElementById("form").addEventListener("submit",formHandle)
  function formHandle(e){
    e.preventDefault()
    const input=document.getElementById("input").value.trim()
  let selected = document.querySelector('input[name="country"]:checked')?.value;

if(!input||!selected){
    alert("Please enter text and select a language.")
    return
}
  api(input,selected)
}


async function api(text,country){
    try{
 const res=await fetch(`https://abhi-api.vercel.app/api/tool/translate?text=${text}&lang=${country}`)
 const data=await res.json()
  document.getElementById("translate").innerHTML=
`
  <p class="blue">Your translation 👇</p>
  <div class="translation-display">${data.result.translatedText}</div>
  <button id="start-over">Start Over</button>`
  
  document.getElementById('start-over').addEventListener("click",startOver)
}
catch (error){
    console.log(error)
}
}

function startOver(){
     document.getElementById("translate").innerHTML=`
     <p class="blue">Select language 👇</p>
            <form id="form">
               
                <label>
                     <input type="radio" name="country" value="French">French 
                     <img src="./assets/fr-flag.png" alt="French flag">
                </label><br>
                <label>
                     <input type="radio" name="country" value="Spanish">Spanish
                     <img src="./assets/sp-flag.png" alt="spain flag"/>
                </label><br>
               <label>
                     <input type="radio" name="country" value="Japanese">Japanese
                     <img src="./assets/jpn-flag.png" alt="Japen flag"/>
                </label><br>
               <button>Translate</button>
</form>` 
document.getElementById("form").addEventListener("submit", formHandle)
}




