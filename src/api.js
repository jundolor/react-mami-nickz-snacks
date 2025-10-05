// A function whose only purpose is to delay execution
// for the specified # of milliseconds when used w/ `await`
// e.g. inside an async function:
// await sleep(2000)  => pauses the function for 2 seconds before moving on
/*
function sleep(ms) {
    return new Promise(resolve => setTimeout(() => resolve(), ms))
}
*/
export async function getSnacks() {
    const res = await fetch("/api/snacks")
    console.log('res.ok check')
    console.log(res.ok) //this is still true even when server.js = return new Response(400, {}, {error: "Error fetching data"})

    console.log("Status:", res.status, "ok:", res.ok)
    if (!res.ok) {
        throw new Error(
            JSON.stringify({
                message: "Failed to fetch snacks",
                statusText: res.statusText,
                status: res.status
            })
        )
    }

    const data = await res.json()
    return data.snacks
}

export async function getHostSnacks(id) {
    const url = id ? `/api/host/snacks/${id}` : "/api/host/snacks"
    const res = await fetch(url)
    if (!res.ok) {
        throw (
            JSON.stringify({
            message: "Failed to fetch snacks",
            statusText: res.statusText,
            status: res.status
            })
        )
    }
    const data = await res.json()
    return data.snacks
}

/*
export async function getHostVans(id) {
    const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}
*/
export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        
        throw (
            JSON.stringify({
                message: data.message,
                statusText: res.statusText,
                status: res.status
            })
        )
        /*
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }*/
    }

    return data
}
