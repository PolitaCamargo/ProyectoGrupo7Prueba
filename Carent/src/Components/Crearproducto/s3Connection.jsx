import AWS from "aws-sdk/client-s3";

// Función para subir imagen a S3
const uploadImageToS3 = (imagen) => {
  return new Promise((resolve, reject) => {
    const s3 = new AWS.S3({
      accessKeyId: "TAKIASDYGBXDRVPVFHO6P",
      secretAccessKey: "o3e2UziVdVk4mQ3qwuI0oS5keV7sZyBHVwtprq/x",
      region: "us-east-2",
    });

    const params = {
      Bucket: "bucketgamadagrupo7",
      Key: imagen.name,
      Body: imagen,
      ACL: "public-read",
    };

    s3.upload(params, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data.Location);
      }
    });
  });
};

export { uploadImageToS3 };
