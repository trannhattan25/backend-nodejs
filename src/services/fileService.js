const { count, error } = require("console");
const path = require("path"); // fs : file system
const uploadSingleFile = async (fileObject) => {



    let uploadPath = path.resolve(__dirname, "../public/images/upload")
    console.log(">>check file Object", uploadPath);

    // get image extension
    let extName = path.extname(fileObject.name);
    //get image's name (without extension)
    let baseName = path.basename(fileObject.name, extName);

    //create final path :eg: /upload/your-image.png
    let finalName = `${baseName}-${Date.now()}-${extName}`
    let finalPath = `${uploadPath}/${finalName}`
    console.log(">>> final Path: ", finalPath);

    try {
        await fileObject.mv(finalPath);

        return {
            status: 'success',
            path: finalName,
            error: null
        }
    } catch (err) {
        console.log(">>>check err", err);

        return {
            status: 'failed',
            path: null,
            error: JSON.stringify(err)
        }
    }

}
const uploadMultipleFiles = async (fileArr) => {
    try {
        let uploadPath = path.resolve(__dirname, "../public/images/upload")
        let resultArr = [];
        let countSuccess = 0
        for (let i = 0; i < fileArr.length; i++) {
            // get image extension
            let extName = path.extname(fileArr[i].name);
            //get image's name (without extension)
            let baseName = path.basename(fileArr[i].name, extName);

            //create final path :eg: /upload/your-image.png
            let finalName = `${baseName}-${Date.now()}-${extName}`
            let finalPath = `${uploadPath}/${finalName}`

            try {
                await fileArr[i].mv(finalPath);
                resultArr.push({
                    status: 'success',
                    path: finalPath,
                    fileName: fileArr[i].name,
                    error: null
                })
                countSuccess++;
            } catch (err) {
                resultArr.push({
                    status: 'faild',
                    path: null,
                    fileName: fileArr[i].name,
                    error: JSON.stringify(err)
                })
            }
        }

        return {
            countSuccess: countSuccess,
            path: null,
            detail: resultArr
        }
    } catch (error) {
        console.log(error);

    }

}
module.exports = {
    uploadSingleFile,
    uploadMultipleFiles
}