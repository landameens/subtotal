function apiCaller(
    method,
    path,
    data = {},
) {
    const headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    }

    return fetch(path, {
        method,
        headers,
        body: data ? JSON.stringify(data) : null,
    })
        .then((response) => response.json())
        .catch((reason) => reason)
}

export default apiCaller