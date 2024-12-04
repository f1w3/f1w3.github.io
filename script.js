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

document.addEventListener("DOMContentLoaded", () => {
    const sideButtons = document.querySelectorAll(".sidebuttons div");
    for (const sideButton of sideButtons) {
        sideButton.addEventListener("click", e => {
            const isActive = e.currentTarget.classList.contains("side__active");
            if (!isActive) {
                const actives = document.querySelectorAll(".side__active");
                for (const active of actives) {
                    active.classList.remove("side__active");
                }
                e.currentTarget.classList.add("side__active");
            }
        })
    }

    const siteurls = document.querySelectorAll("#__siteurl__");
    for (const siteurl of siteurls) {
        siteurl.textContent = location.hostname;
    }

    const ages = document.querySelectorAll("#__age__");
    for (const age of ages) {
        age.textContent = getAge(birthday);
    }
});
