abstract class ViewsHistory {

    public static getHistory() {
        if (localStorage.getItem('viewsHistory')) {
            //@ts-ignore
            return JSON.parse(localStorage.getItem('viewsHistory'))
        } else {
            return undefined
        }

    }

    public static init() {
        if (!this.getHistory()) {

            localStorage.setItem('viewsHistory', JSON.stringify([]))

        }

    }

    public static exist(id: number) {
        return this.getHistory().indexOf(id) > -1
    }

    public static add(id: number) {

        if (!this.exist(id)) {
            //@ts-ignore

            localStorage.setItem('viewsHistory', JSON.stringify([...this.getHistory(), id]))
        }

    }
}

export default ViewsHistory