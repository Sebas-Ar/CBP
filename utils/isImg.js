export const isImg = (name = '') => {

    const validExtensions = /\.png$|\.jpg$|\.jpeg$|\.$|\.jfif$|\.pjpeg$|\.pjp$|\.ico$|\.cur$|\.git$|\.apng$|\.png$|\.png$/
    return name.search(validExtensions) === -1 ? false : true
    
}

