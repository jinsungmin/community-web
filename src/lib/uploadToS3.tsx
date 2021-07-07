import axios from "axios"
import imageCompression from "browser-image-compression";

const getPreSignedUrl = async (mimeType:any) => {
  try {
    const {
      data: { url, path },
    } = await axios.get(process.env.REACT_APP_URL + `/files/upload`, {
      params: { mimeType, type: "image" },
    })

    return { url, path }
  } catch (error) {
    console.log('error', error)
    throw new Error(error)
  }
}

const actionImgCompress = async (fileSrc: any) => {
  console.log("압축 시작");
  const options = {
    maxSizeMB: 2,
    maxWidthOrHeight: 600,
    useWebWorker: true,
  };
  try {
    // 압축 결과
    const compressedFile = await imageCompression(fileSrc, options);

    return compressedFile
  } catch (error) {
    console.log(error);
  }
};

const convertFileToBinary = (imageFile:any) => {
  return new Promise((resolve) => {
    const fileReader = new FileReader()
    fileReader.readAsArrayBuffer(imageFile)
    fileReader.onload = (e: any) => {
      resolve(new Uint8Array(e.target.result))
    }
  })
}

export const uploadToS3 = async (imageFile:any) => {
  try {
    imageFile = await actionImgCompress(imageFile)

    const { type } = imageFile
    const { url, path } = await getPreSignedUrl(type)
    const uInt8Array = await convertFileToBinary(imageFile)

    await axios.put(url, uInt8Array, {
      headers: {
        "Content-Type": type
      },
      withCredentials: false
    })
    
    return path
  } catch (error) {
    throw new error()
  }
}
