const header = document.createElement("header")
const form = document.createElement("form")
const h1 = document.createElement("h1")
h1.textContent = "Weather App"
header.append(form)
form.append(h1)
const body = document.querySelector("body")
body.append(header)
const input = document.createElement("input")
input.setAttribute("type", "text")
input.setAttribute("id", "text")
input.setAttribute("name", "text")
const label = document.createElement("label")
label.setAttribute("for", "text")
label.textContent = "Pick a Location "
const button = document.createElement("button")
button.setAttribute("type", "submit")
button.textContent = "Get Weather"
form.append(label, input, button)
