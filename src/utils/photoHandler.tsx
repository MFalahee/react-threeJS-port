// create a function that returns the path to the model, given the model name
export function photoHandler(local: boolean) {
  // path to CDN: https://d1fh87eo8s3j79.cloudfront.net/modelPath
  // path to local: modelPath
  let path = "/photos/";
  if (!local) path = "https://d1fh87eo8s3j79.cloudfront.net/photos/";
  return;
}
