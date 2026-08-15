export function assetPath(path: string) {
    const basePath =
      process.env.NODE_ENV === "production"
        ? "/united-training-facility"
        : "";
  
    return `${basePath}${path}`;
  }