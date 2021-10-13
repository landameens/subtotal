async function httpCaller(
    method,
    path,
    data = null,
) {
    const headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    }

    try {
        const response =  await fetch(path, {
            method,
            headers,
            body: data ? JSON.stringify(data) : null,
        })

        return await response.json()
    } catch (e) {
        console.error(e)
        return null
    }

}

export default httpCaller