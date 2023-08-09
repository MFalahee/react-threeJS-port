// create a function that returns the path to the model, given the model name
export function photoHandler() {
  const imgNames = [
    "backyard.webp",
    "brosndad.webp",
    "catan.webp",
    "fam1.webp",
    "fam2.webp",
    "finn1.webp",
    "finn2.webp",
    "goof.webp",
    "mama.webp",
    "millie.webp",
    "redwood.webp",
    "smile.webp",
    "veccswalkingcute.webp",
    "wedding.webp",
    "young.webp",
  ];
  const imageSources: string[] = [];
  // iterate through the photo names and add them to the path
  // get the photos
  imgNames.forEach((name) => {
    import.meta.env.PROD
      ? imageSources.push(import.meta.env.VITE_CF_PATH + "/imgs/" + name)
      : imageSources.push("/imgs/" + name);
  });
  return imageSources;
}
