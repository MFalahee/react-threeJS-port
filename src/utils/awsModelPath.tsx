// create a function that returns the path to the model, given the model name
export function awsModelPath(modelPath: string) {
  // path to CDN: https://d1fh87eo8s3j79.cloudfront.net/modelPath
  // path to local: modelPath
  return(`https://d1fh87eo8s3j79.cloudfront.net${modelPath}`)
};
