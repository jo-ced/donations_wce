import { defineMiddleware } from 'astro:middleware';

const SUPPORTED = ['de', 'en'];
const DEFAULT = 'de';

export const onRequest = defineMiddleware((context, next) => {
  const { pathname } = context.url;

  const isAsset = pathname.startsWith('/dream-of-hearing/') ||
    pathname.startsWith('/api/') ||
    pathname.startsWith('/favicon') ||
    pathname.startsWith('/apple-touch') ||
    pathname.startsWith('/images/');

  if (isAsset) return next();

  const [, first] = pathname.split('/');
  const hasLangPrefix = SUPPORTED.includes(first);

  if (!hasLangPrefix) {
    const acceptLang = context.request.headers.get('accept-language') ?? '';
    const detected = acceptLang
      .split(',')
      .map(s => s.split(';')[0].trim().slice(0, 2).toLowerCase())
      .find(l => SUPPORTED.includes(l));

    const lang = detected ?? DEFAULT;

    if (lang !== DEFAULT) {
      return context.redirect(`/${lang}${pathname}`);
    }
  }

  return next();
});
