

export const getApiResource = async (url) => {
    try {
        const res = await fetch(url);
        if(!res.ok) {
            console.log('could not fetch: ERROR:',res.status)
            return false
        }
        return await res.json()
    } catch (error) {
        console.error(error.message)
        return false
    }
}