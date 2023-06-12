// create a function that returns the path to the model, given the model name
export const awsModelPath = (modelName: string) => {
  // path to CDN: https://d1fh87eo8s3j79.cloudfront.net/models/${modelName}.gltf
  // path to local: /models/${modelName}.gltf
  return `https://d1fh87eo8s3j79.cloudfront.net/models/${modelName}.gltf`;
};
