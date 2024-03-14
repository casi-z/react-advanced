abstract class URLUtil {
    public static path(level?: number) {

        const pathName = window.location.pathname.slice(1)

        if (pathName) {
            const pathArray = pathName.split('/')

            if (level) {
                return pathArray[level]
            } else {
                return pathArray
            }
        }
        return undefined

    }

    public static hash(level?: number) {

        const pathName = window.location.hash.slice(2)

        if (pathName) {
            const pathArray = pathName.split('/')

            if (level) {
                return pathArray[level]
            } else {
                return pathArray
            }
        }
        return undefined

    }

    public static search(searchURL: string) {

        const search = window.location.search

        if (
            search.slice(
                1,
                search.indexOf('=')
            ) === searchURL
        ) {
            return search.slice(
                search.indexOf('=') + 1
            )

        } else {
            return undefined
        }
    }
}

export default URLUtil