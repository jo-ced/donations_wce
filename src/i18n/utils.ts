import { ui, defaultLang, showDefaultLang } from './ui';

export type Lang = keyof typeof ui;

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  if (first in ui) return first as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui[typeof defaultLang]): string {
    return String(
      (ui[lang] as Record<string, string>)[key] ??
      (ui[defaultLang] as Record<string, string>)[key] ??
      key
    );
  };
}

export function useTranslatedPath(lang: Lang) {
  return function translatePath(path: string, l: Lang = lang): string {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`;
  };
}

export function getAlternatePaths(currentPath: string, currentLang: Lang): Record<Lang, string> {
  const result = {} as Record<Lang, string>;
  for (const lang of Object.keys(ui) as Lang[]) {
    if (lang === currentLang) {
      result[lang] = currentPath;
    } else if (currentLang === defaultLang && !showDefaultLang) {
      // current is /some/path, other lang is /en/some/path
      result[lang] = `/${lang}${currentPath}`;
    } else {
      // current is /en/some/path, strip lang prefix
      const withoutPrefix = currentPath.replace(new RegExp(`^/${currentLang}`), '') || '/';
      result[lang] = lang === defaultLang && !showDefaultLang ? withoutPrefix : `/${lang}${withoutPrefix}`;
    }
  }
  return result;
}
