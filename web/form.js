import { server } from "./server.js"
const form = document.querySelector("#form")
const input = document.querySelector("#url")
const content = document.querySelector("#content")

form.addEventListener("submit", async (event) => {
  event.preventDefault()

  const videoURL = input.value

  if (!videoURL.includes("shorts")) {
    return (content.textContent = "Esse vídeo não parece ser um short.")
  }

  const [_, params] = videoURL.split("/shorts/")
  const [videoId] = params.split("?si")
  console.log(params)

  content.textContent = "Obtendo o texto do áudio..."
  
  await server.get("/summary/" + videoId)

  content.textContent = trasncription.data.result
})
