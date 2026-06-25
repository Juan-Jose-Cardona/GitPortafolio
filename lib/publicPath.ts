// prepara rutas publicas del proyecto
export function publicPath(path: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  if (
    path.startsWith("http") ||
    path.startsWith("mailto:") ||
    path.startsWith("tel:") ||
    path.startsWith("#")
  ) {
    return path;
  }

  const cleanPath = path.startsWith("./") ? path.slice(1) : path;

  if (cleanPath.startsWith("/")) {
    return `${basePath}${cleanPath}`;
  }

  return `${basePath}/${cleanPath}`;
}