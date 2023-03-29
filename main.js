const apiKey = "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";
function create(){ 
    fetch("https://api.openai.com/v1/images/generations", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${apiKey}`
  },
  body: JSON.stringify({
    prompt: document.getElementById("prompt").value,
    n: 2,
    size: "512x512"
  })
})
.then(response => response.json())
.then(data => {
    console.log(data);
    document.getElementById("img1").src = data.data[0].url;
    document.getElementById("img2").src = data.data[1].url;

})
.catch(error => console.error(error));
}
