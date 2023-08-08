export function awsModelPath(modelPath: string) {
  return `${import.meta.env.VITE_CF_PATH}${modelPath}`;
}
