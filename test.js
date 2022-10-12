const RunTest = {
    test1() {
        setTimeout(() => {
            try {
                if (
                    [...document.querySelectorAll(".check")].findIndex(it =>
                        it.getAttribute('hidden') === 'hidden') > -1
                ) {
                    document.getElementsByClassName("error")[0].textContent = `please build a prototype chain like described`
                    return
                }
                document.getElementById("displayOnSuccess").hidden = false
            } catch (e) {
                document.getElementsByClassName("error")[0].textContent = e.message + "\n\n" + e.stack
                throw e
            }
        }, 1000)
    }
}