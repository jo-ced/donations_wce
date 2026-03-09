export const languages = {
  de: 'Deutsch',
  en: 'English',
};

export const defaultLang = 'de';
export const showDefaultLang = false;

export const ui = {
  de: {
    // Nav
    'nav.siteName': 'WCE Spenden',
    'nav.toOrg': 'Zum Verein',

    // Section labels
    'section.campaign': 'Kampagne',
    'section.story': 'Geschichte',
    'section.organizer': 'Organisator',
    'section.trust': 'Vertrauen',
    'section.progress': 'Spendenfortschritt',
    'section.donations': 'Spenden',
    'section.funding': 'Was gefördert wird',

    // Progress
    'progress.of': 'von',
    'progress.thousands': 'T',

    // Story
    'story.readMore': 'Mehr lesen',
    'story.readLess': 'Weniger lesen',

    // Donations list
    'donations.tab.latest': 'Neuste',
    'donations.tab.top': 'Top',
    'donations.empty': 'Noch keine Spenden — sei der/die Erste!',
    'donations.showMore': 'Mehr anzeigen',
    'donations.showLess': 'Weniger anzeigen',
    'donations.anonymous': 'Anonym',
    'donations.timeAgo.justNow': 'gerade eben',
    'donations.timeAgo.daysSingular': 'Tag',
    'donations.timeAgo.daysPlural': 'Tagen',
    'donations.timeAgo.hoursSingular': 'Stunde',
    'donations.timeAgo.hoursPlural': 'Stunden',
    'donations.timeAgo.minutesSingular': 'Minute',
    'donations.timeAgo.minutesPlural': 'Minuten',
    'donations.timeAgo.before': 'vor',

    // Stripe sheet
    'stripe.donateTo': 'Spende an',
    'stripe.amount': 'Betrag',
    'stripe.customAmount': 'Eigener Betrag',
    'stripe.paymentMethod': 'Zahlungsmethode',
    'stripe.creditCard': 'Kreditkarte',
    'stripe.directDebit': 'Lastschrift',
    'stripe.paypal': 'PayPal',
    'stripe.cheapest': 'Günstigste',
    'stripe.donorList': 'Spendenliste',
    'stripe.yourName': 'Ihr Name',
    'stripe.showOnList': 'Meinen Namen in der Spendenliste anzeigen',
    'stripe.namePublic': 'Ihr Name wird öffentlich auf dieser Seite angezeigt',
    'stripe.displayNamePlaceholder': 'Anzeigename (z.B. Sarah L.)',
    'stripe.leaveEmpty': 'Leer lassen, um',
    'stripe.toUse': 'zu verwenden',
    'stripe.yourNameFallback': 'Ihren Namen',
    'stripe.coverFees': 'Transaktionsgebühren übernehmen',
    'stripe.showLess': 'Weniger anzeigen',
    'stripe.learnMore': 'Mehr erfahren',
    'stripe.whyFees': 'Warum fallen Gebühren an?',
    'stripe.feesExplainShort': 'Bei jeder Online-Zahlung fallen Gebühren des Zahlungsdienstleisters an – diese werden direkt vom überwiesenen Betrag abgezogen. Wir haben bereits alles getan, um diese so weit wie möglich zu reduzieren. Wenn Sie die verbleibenden Kosten nicht übernehmen, kommt entsprechend weniger an.',
    'stripe.feesExplain': 'Bei jeder Online-Zahlung fallen Gebühren des Zahlungsdienstleisters an – diese werden direkt vom überwiesenen Betrag abgezogen. Wir haben bereits alles getan, um diese so weit wie möglich zu reduzieren. Wir wollen an dieser Stelle Transparenz herstellen und die Möglichkeit bieten, die Kosten direkt zu übernehmen, damit alles ankommt.Bei jeder Online-Zahlung fallen Gebühren an – das ist unvermeidbar. Ob beim Einkaufen, Abonnieren oder Spenden: Zahlungsdienstleister behalten einen Teil des überwiesenen Betrags ein, oft zwischen 2 und 4 Prozent. Auch Spendenplattformen bilden hier keine Ausnahme. Wir haben diese Seite deshalb eigens entwickelt, um so viele Zwischenstellen wie möglich zu umgehen und die Gebühren auf ein Minimum zu reduzieren. Dennoch lassen sich nicht alle vermeiden – und wir möchten dabei vollständig transparent sein. Deshalb geben wir einen Überblick und Ihnen die Möglichkeit, die verbleibenden Kosten freiwillig zu übernehmen, damit der volle Betrag ankommt.',
    'stripe.feesByMethod': 'Gebühren nach Zahlungsmethode',
    'stripe.sepa': 'SEPA-Lastschrift',
    'stripe.feeExample': 'Beispiel: Bei <strong class="text-[#2c2a26]">25 €</strong> per SEPA-Lastschrift kommen ohne Gebührenübernahme nur <strong class="text-[#2c2a26]">24,65 €</strong> an – mit Übernahme die vollen <strong class="text-[#2c2a26]">25,00 €</strong>.',
    'stripe.donateButton': '€ spenden',
    'stripe.redirecting': 'Weiterleitung zu Stripe…',
    'stripe.securePayment': 'Sichere Zahlung über',
    'stripe.errorGeneric': 'Ein Fehler ist aufgetreten.',
    'stripe.errorConnection': 'Verbindungsfehler. Bitte erneut versuchen.',

    // Share dialog
    'share.title': 'Kampagne teilen',
    'share.close': 'Schließen',
    'share.copyLink': 'Link kopieren',
    'share.copied': 'Link kopiert!',

    // CTA buttons
    'cta.donate': 'Spenden',
    'cta.share': 'Teilen',

    // Donor list disclaimer
    'donations.disclaimer': 'Es werden nur Spender angezeigt, die der Namensveröffentlichung zugestimmt haben',

    // Footer
    'footer.articles': 'Satzung des Vereins',
    'footer.imprint': 'Impressum',
    'footer.privacy': 'Datenschutzerklärung',
  },
  en: {
    // Nav
    'nav.siteName': 'WCE Donate',
    'nav.toOrg': 'Back to WCE',

    // Section labels
    'section.campaign': 'Campaign',
    'section.story': 'Story',
    'section.organizer': 'Organizer',
    'section.trust': 'Trust',
    'section.progress': 'Donation Progress',
    'section.donations': 'Donations',
    'section.funding': 'What is funded',

    // Progress
    'progress.of': 'of',
    'progress.thousands': 'K',

    // Story
    'story.readMore': 'Read more',
    'story.readLess': 'Read less',

    // Donations list
    'donations.tab.latest': 'Latest',
    'donations.tab.top': 'Top',
    'donations.empty': 'No donations yet — be the first!',
    'donations.showMore': 'Show more',
    'donations.showLess': 'Show less',
    'donations.anonymous': 'Anonymous',
    'donations.timeAgo.justNow': 'just now',
    'donations.timeAgo.daysSingular': 'day',
    'donations.timeAgo.daysPlural': 'days',
    'donations.timeAgo.hoursSingular': 'hour',
    'donations.timeAgo.hoursPlural': 'hours',
    'donations.timeAgo.minutesSingular': 'minute',
    'donations.timeAgo.minutesPlural': 'minutes',
    'donations.timeAgo.before': '',

    // Stripe sheet
    'stripe.donateTo': 'Donate to',
    'stripe.amount': 'Amount',
    'stripe.customAmount': 'Custom amount',
    'stripe.paymentMethod': 'Payment method',
    'stripe.creditCard': 'Credit card',
    'stripe.directDebit': 'Direct debit',
    'stripe.paypal': 'PayPal',
    'stripe.cheapest': 'Cheapest',
    'stripe.donorList': 'Donor list',
    'stripe.yourName': 'Your name',
    'stripe.showOnList': 'Show my name in the donor list',
    'stripe.namePublic': 'Your name will be publicly displayed on this page',
    'stripe.displayNamePlaceholder': 'Display name (e.g. Sarah L.)',
    'stripe.leaveEmpty': 'Leave empty to use',
    'stripe.toUse': '',
    'stripe.yourNameFallback': 'your name',
    'stripe.coverFees': 'Cover transaction fees',
    'stripe.showLess': 'Show less',
    'stripe.learnMore': 'Learn more',
    'stripe.whyFees': 'Why are there fees?',
    'stripe.feesExplain': 'Every online payment is processed through a payment service provider, which charges a fee. This fee is deducted directly from the transferred amount – if you don\'t cover it, less money reaches the recipient.',
    'stripe.feesByMethod': 'Fees by payment method',
    'stripe.sepa': 'SEPA Direct Debit',
    'stripe.feeExample': 'Example: With <strong class="text-[#2c2a26]">€25</strong> via SEPA Direct Debit, only <strong class="text-[#2c2a26]">€24.65</strong> arrives without fee coverage – with coverage, the full <strong class="text-[#2c2a26]">€25.00</strong>.',
    'stripe.donateButton': '€ donate',
    'stripe.redirecting': 'Redirecting to Stripe…',
    'stripe.securePayment': 'Secure payment via',
    'stripe.errorGeneric': 'An error occurred.',
    'stripe.errorConnection': 'Connection error. Please try again.',

    // Share dialog
    'share.title': 'Share campaign',
    'share.close': 'Close',
    'share.copyLink': 'Copy link',
    'share.copied': 'Link copied!',

    // CTA buttons
    'cta.donate': 'Donate',
    'cta.share': 'Share',

    // Donor list disclaimer
    'donations.disclaimer': 'Only donors who have consented to public display of their name are shown',

    // Footer
    'footer.articles': 'Articles of Association',
    'footer.imprint': 'Imprint',
    'footer.privacy': 'Privacy Policy',
  },
} as const;
