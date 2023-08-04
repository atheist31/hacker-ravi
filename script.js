let text = [
    "Welcome in to the  Hackerman hacking system..",
    "Client : You",
    "Connecting to the client Social media account...",
    "Connecting to server 1...",
    "Connection failed due to some error",
    "Connecting to server 2...",
    "Connection Successfully",
    "Inserting virus",
    "Trying Brute Force...",
    "Trying to match all the password...",
    "Sorry pasword not matched",
    "trying to connect again",
    "Pasword crack",
    "Hack successfully",
    "Collecting all the data of the client",
    "Mobile Number : XXXXXXXXXX",
    "gmail : XXXXXXXXXXXXXXXX.com",
    "Name : XXXX...",
    "Current Place : XXXXXX",
    "Now i have access to your all the data",
    // <img src="https://c4.wallpaperflare.com/wallpaper/74/462/487/anarchy-computer-hacker-hacking-wallpaper-preview.jpg" alt="Another Image"></img>

]
const sleep = async(sec)=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(true)},sec)
        })
}

const showData = async(messages)=>{
    await sleep(2000)
    console.log(messages)
    data2.innerHTML = data2.innerHTML + messages + "</br>"
   
}
(async()=>{
    for(let i=0;i<text.length;i++){
        await showData(text[i])
       
    }
})()
