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