// create a function that returns the path to the model, given the model name
export function photoHandler(local: boolean) {
  let path = "/imgs/";
  if (!local) path = import.meta.env.IMG_PATH;
  // get list of files in path - if production we only needs imgs folder from returned array
  // if local we just need to return all the images in /imgs/
  // return array of files
  try {
  } catch (e) {
    console.log(e);
  }
}
