const RunTest = {
    test1() {
        setTimeout(() => {
            try {
                let guests = [...document.getElementsByClassName("guest")]
                let textContent = guests.map(it => it.textContent).join(" ");
                if (textContent.includes("undefined")) {
                    document.getElementsByClassName("error")[0].textContent = `test failed, 'anonymous' should be the default name`
                    return
                }
                if (!textContent.includes("Name: anonymous")) {
                    document.getElementsByClassName("error")[0].textContent = `test failed, expected at least one 'Name: anonymous'`
                    return
                }
                if (textContent.includes("Name: fish,")) {
                    document.getElementsByClassName("error")[0].textContent = `unexpected 'Name: fish', please pass a name`
                    return
                }
                document.getElementById("displayOnSuccess").hidden = false
            } catch (e) {
                document.getElementsByClassName("error")[0].textContent = e.message + "\n\n" + e.stack
                throw e
            }
        }, 1000)
    },
    test2() {
        setTimeout(() => {
            try {
                let showsOrganisationFid = document.getElementsByClassName("organisation-NOD");
                if (showsOrganisationFid.length === 0) {
                    document.getElementsByClassName("error")[0].textContent = `test failed, expected "thunder" to be member of "NOD"`
                    return
                }
                let textContent = showsOrganisationFid[0].textContent;

                if (!textContent.includes("thunder")) {
                    document.getElementsByClassName("error")[0].textContent = `test failed, expected "thunder" to be member of "NOD"`
                    return
                }
                document.getElementById("displayOnSuccess").hidden = false
            } catch (e) {
                document.getElementsByClassName("error")[0].textContent = e.message + "\n\n" + e.stack
                throw e
            }
        }, 1000)
    },
    test3() {
        setTimeout(() => {
            try {
                let features = [...document.querySelectorAll(".features li").values()]
                    .map(element => element.textContent)
                    .join(", ");
                if (!features.includes("notifyAuthorities")) {
                    document.getElementsByClassName("error")[0].textContent = `missing feature. define a function that can be called by "notifyAuthorities()"`
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