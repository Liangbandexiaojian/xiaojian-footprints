const rawBase = import.meta.env.BASE_URL || '/';
export const basePath = rawBase === '/' ? '' : rawBase.replace(/\/$/, '');

export function withBase(path: string) {
  if (!path || /^(https?:)?\/\//.test(path) || path.startsWith('mailto:') || path.startsWith('#')) return path;
  if (!path.startsWith('/')) return path;
  return `${basePath}${path}` || '/';
}

export function withBaseHtml(html: string) {
  if (!basePath) return html;
  return html.replace(/\b(src|href)="\/(?!\/)/g, `$1="${basePath}/`);
}
