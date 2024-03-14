class ViewsHistory {

    public getHistory() {
        if (localStorage.getItem('viewsHistory')) {
            //@ts-ignore
            return JSON.parse(localStorage.getItem('viewsHistory'))
        } else {
            return undefined
        }

    }

    public init() {
        if (!this.getHistory()) {

            localStorage.setItem('viewsHistory', JSON.stringify([]))

        }

    }

    public exist(id: number) {
        return this.getHistory().indexOf(id) > -1
    }

    public add(id: number) {

        if (!this.exist(id)) {
            //@ts-ignore

            localStorage.setItem('viewsHistory', JSON.stringify([...this.getHistory(), id]))
        }

    }
}

const viewsHistory = new ViewsHistory()
export default viewsHistory