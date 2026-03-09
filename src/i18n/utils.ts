import { ui, defaultLang, showDefaultLang } from './ui';

export type Lang = keyof typeof ui;

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  if (first in ui) return first as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui[typeof defaultLang]): string {
    const text =
      (ui[lang] as Record<string, string>)[key] ??
      (ui[defaultLang] as Record<string, string>)[key] ??
      key;

    // Ensure HTML line breaks are rendered: decode common encoded forms and convert newlines to <br>
    return String(text)
      .replace(/&lt;br\s*\/?&gt;/gi, '<br>')
      .replace(/\\n/g, '<br>')
      .replace(/\r\n|\r/g, '\n'); // normalize CRLF; callers can handle \n or we already converted \n above
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
