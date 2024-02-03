const birthday = {
    year: 2006,
    month: 5,
    date: 31
}

const getAge = (birthday) => {
    const today = new Date()
    const year = today.getFullYear() - birthday.year
    const passed = today < new Date(today.getFullYear(), birthday.month - 1, birthday.date)
    return year - (passed ? 1 : 0)
}

document.addEventListener("DOMContentLoaded", async () => {
    const repolist = document.getElementsByClassName("repo-list")[0]
    const data = await fetch("https://api.github.com/users/javascriptjp/repos")
    const body = await data.json()
    for await (const repository of body) {
        const element = document.createElement("a")
        element.href = repository.html_url
        element.innerText = repository.name
        element.target = "_blank"
        element.classList.add("repo-child")
        element.classList.add("fadein")
        repolist.appendChild(element)
        repolist.appendChild(document.createElement("br"))
    }
    const age = document.getElementsByClassName("agein")[0]
    age.innerText = getAge(birthday)
    const targets = document.querySelectorAll(".fadein")
    for (const [key, element] of targets.entries()) {
        setTimeout(() => element.classList.add("active"), 100 * key)
    }
    kofiWidgetOverlay.draw("f1w3_", {
        "type": "floating-chat",
        "floating-chat.donateButton.position": "absolute",
        "floating-chat.donateButton.right": "0",
        "floating-chat.donateButton.text": "Donate Me!",
        "floating-chat.donateButton.background-color": "#dadada",
        "floating-chat.donateButton.text-color": "#070707"
    })
})
