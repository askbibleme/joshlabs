const APP_BASE_META = 'app-base';

export function getAppBasePath() {
  const meta = document.querySelector(`meta[name="${APP_BASE_META}"]`)?.content;
  if (meta !== undefined && meta !== null) {
    const value = String(meta).trim();
    if (!value || value === '/') return '';
    return value.replace(/\/$/, '');
  }

  const path = window.location.pathname;
  if (path === '/my-class' || path.startsWith('/my-class/')) return '/my-class';
  return '';
}

export function appAssetPath(relativePath) {
  const base = getAppBasePath();
  const path = relativePath.startsWith('/') ? relativePath : `/${relativePath}`;
  return `${base}${path}`;
}
