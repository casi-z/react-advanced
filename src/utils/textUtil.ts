class TextUtil {

    public static max(text: string, maxLength: number) {

        if (text.length > maxLength) {
            return `${text.slice(0, maxLength)}...`
        } else {
            return text
        }

    }

    public static createArticle(text: string | undefined) {
        //@ts-ignore
        return text.replaceAll('\n', '<br/>')

    }

}

export default TextUtil