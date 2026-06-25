// prepara rutas publicas relativas
export function publicPath(path: string) {
  const cleanPath = path.trim();

  if (
    cleanPath.startsWith("http") ||
    cleanPath.startsWith("mailto:") ||
    cleanPath.startsWith("tel:") ||
    cleanPath.startsWith("#") ||
    cleanPath.startsWith("data:") ||
    cleanPath.startsWith("blob:")
  ) {
    return cleanPath;
  }

  const withoutDot = cleanPath.startsWith("./")
    ? cleanPath.slice(2)
    : cleanPath;

  return withoutDot.startsWith("/")
    ? withoutDot.slice(1)
    : withoutDot;
}
