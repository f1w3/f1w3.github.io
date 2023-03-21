const age = document.getElementById("age")
const github = document.getElementById("github")
const twitter = document.getElementById("twitter")
const discord = document.getElementById("discord")
const birthday = {
    year: 2006,
    month: 5,
    date: 31
}

const getAge = (birthday) => {
    const today = new Date()
    return today < new Date(today.getFullYear(), birthday.month - 1, birthday.date) ? today.getFullYear() - birthday.year - 1 : today.getFullYear() - birthday.year
}

kofiWidgetOverlay.draw("f1w3_", {
    "type": "floating-chat",
    "floating-chat.donateButton.position": "absolute",
    "floating-chat.donateButton.right": "0",
    "floating-chat.donateButton.text": "Support Us",
    "floating-chat.donateButton.background-color": "#323842",
    "floating-chat.donateButton.text-color": "#fff"
})

age.innerText = getAge(birthday)
github.addEventListener("click", e => window.open("https://github.com/javascriptjp"))
