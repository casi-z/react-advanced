function importAllImages(path: any) {

    // @ts-ignore
    const requireContext = require.context(path, false, /\.(png|jpe?g|svg|jfif)$/)

    return requireContext.keys().map(requireContext);
}

export default importAllImages