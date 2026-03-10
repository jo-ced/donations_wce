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
    'stripe.cheapest': 'Am meisten kommt an',
    'stripe.donorList': 'Spenderliste',
    'stripe.yourName': 'Ihr Name',
    'stripe.showOnList': 'Meinen Namen in der Spendenliste anzeigen',
    'stripe.namePublic': 'Ihr Name wird öffentlich auf dieser Seite angezeigt',
    'stripe.displayNamePlaceholder': 'Anzeigename (z.B. Sarah L.)',
    'stripe.leaveEmpty': 'Leer lassen, um <strong>Ihren Namen</strong> zu verwenden',
    'stripe.coverFees': 'Transaktionsgebühren übernehmen',
    'stripe.showLess': 'Weniger anzeigen',
    'stripe.learnMore': 'Mehr erfahren',
    'stripe.whyFees': 'Warum fallen Gebühren an?',
    'stripe.feesExplainShort': 'Bei jeder Online-Zahlung fallen Gebühren des Zahlungsdienstleisters an – diese werden direkt vom überwiesenen Betrag abgezogen. Wir haben bereits alles getan, um diese so weit wie möglich zu reduzieren.',
    'stripe.feesExplain': 'Bei jeder Online-Zahlung fallen Gebühren an – das ist unvermeidbar. Ob beim Einkaufen, Abonnieren oder Spenden: Zahlungsdienstleister behalten einen Teil des überwiesenen Betrags ein, oft zwischen 2 und 4 Prozent.\n\nAuch bekannte Spendenplattformen bilden hier keine Ausnahme und verdienen oft noch zusätzlich an den Spenden. Wir haben diese Seite deshalb eigens entwickelt, um so viele Zwischenstellen wie möglich zu umgehen und die Gebühren auf ein Minimum zu reduzieren. Dennoch lassen sich nicht alle vermeiden – und wir möchten darüber vollständig transparent sein. Deshalb geben wir einen Überblick und Ihnen die Möglichkeit, die verbleibenden Kosten freiwillig zu übernehmen, damit der volle Betrag ankommt.\n\nWenn Sie alle Gebühren vermeiden wollen, bleibt immer die Möglichkeit das Geld direkt zu überweisen (siehe oben).',
    'stripe.feesByMethod': 'Gebühren nach Zahlungsmethode',
    'stripe.sepa': 'SEPA-Lastschrift',
    'stripe.feeExample': 'Beispiel: Bei <strong class="text-[#2c2a26]">25 €</strong> per PayPal kommen ohne Gebührenübernahme nur <strong class="text-[#2c2a26]">24,03 €</strong> an – mit Übernahme die vollen <strong class="text-[#2c2a26]">25,00 €</strong>.',
    'stripe.bankTransfer': 'Überweisung',
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

    // Bank transfer
    'bank.title': 'Oder per Banküberweisung',
    'bank.noFees': '0 % Gebühren – 100 % kommt an',
    'bank.noFeesBadge': 'Keine Gebühren',
    'bank.iban': 'IBAN',
    'bank.bic': 'BIC',
    'bank.reference': 'Verwendungszweck',
    'bank.copy': 'Kopieren',
    'bank.copied': 'Kopiert!',
    'bank.qrScan': 'Mit Banking-App scannen',
    'bank.qrNoAmount': 'Betrag manuell eingeben',
    'bank.donorListHint': 'Um in der Spendenliste zu erscheinen, füge „in Spendenliste aufführen" sowie deinen Namen zum Verwendungszweck hinzu. Das kann einige Tage dauern.',

    // Thank you page
    'danke.pageTitle': 'Danke!',
    'danke.heading': 'Vielen Dank!',
    'danke.donationPrefix': 'Ihre Spende von',
    'danke.donationSuffix': 'ist auf dem Weg zu Velid.',
    'danke.appearsIn': 'erscheint in der Spenderliste.',
    'danke.back': 'Zurück',

    // Footer
    'footer.articles': 'Satzung des Vereins',
    'footer.imprint': 'Impressum',
    'footer.privacy': 'Datenschutzerklärung',
  },
  en: {
    // Nav
    'nav.siteName': 'WCE Donations',
    'nav.toOrg': 'To the Organization',

    // Section labels
    'section.campaign': 'Campaign',
    'section.story': 'Story',
    'section.organizer': 'Organizer',
    'section.trust': 'Trust',
    'section.progress': 'Donation Progress',
    'section.donations': 'Donations',
    'section.funding': 'What is Being Funded',

    // Progress
    'progress.of': 'of',
    'progress.thousands': 'K',

    // Story
    'story.readMore': 'Read More',
    'story.readLess': 'Read Less',

    // Donations list
    'donations.tab.latest': 'Latest',
    'donations.tab.top': 'Top',
    'donations.empty': 'No donations yet — be the first!',
    'donations.showMore': 'Show More',
    'donations.showLess': 'Show Less',
    'donations.anonymous': 'Anonymous',
    'donations.timeAgo.justNow': 'just now',
    'donations.timeAgo.daysSingular': 'day',
    'donations.timeAgo.daysPlural': 'days',
    'donations.timeAgo.hoursSingular': 'hour',
    'donations.timeAgo.hoursPlural': 'hours',
    'donations.timeAgo.minutesSingular': 'minute',
    'donations.timeAgo.minutesPlural': 'minutes',
    'donations.timeAgo.before': 'ago',

    // Stripe sheet
    'stripe.donateTo': 'Donate to',
    'stripe.amount': 'Amount',
    'stripe.customAmount': 'Custom Amount',
    'stripe.paymentMethod': 'Payment Method',
    'stripe.creditCard': 'Credit Card',
    'stripe.directDebit': 'Direct Debit',
    'stripe.paypal': 'PayPal',
    'stripe.cheapest': 'Most reaches recipient',
    'stripe.donorList': 'Donor List',
    'stripe.yourName': 'Your Name',
    'stripe.showOnList': 'Show my name on the donor list',
    'stripe.namePublic': 'Your name will be displayed publicly on this page',
    'stripe.displayNamePlaceholder': 'Display name (e.g. Sarah L.)',
    'stripe.leaveEmpty': 'Leave empty to use <strong>your name</strong>',
    'stripe.coverFees': 'Cover transaction fees',
    'stripe.showLess': 'Show Less',
    'stripe.learnMore': 'Learn More',
    'stripe.whyFees': 'Why are there fees?',
    'stripe.feesExplainShort': 'Every online payment incurs payment processor fees – these are deducted directly from the amount transferred. We have already done everything to reduce these as much as possible.',
    'stripe.feesExplain': 'Every online payment incurs fees – this is unavoidable. Whether shopping, subscribing, or donating: payment processors retain a portion of the transferred amount, often between 2 and 4 percent.\n\nEven well-known donation platforms are no exception and often profit additionally from donations. We therefore developed this page specifically to bypass as many intermediaries as possible and reduce fees to a minimum. However, not all can be avoided – and we want to be completely transparent about this. That\'s why we provide an overview and give you the option to voluntarily cover the remaining costs so the full amount reaches the recipient.\n\nIf you want to avoid all fees, there is always the option to transfer the money directly (see above).',
    'stripe.feesByMethod': 'Fees by Payment Method',
    'stripe.sepa': 'SEPA Direct Debit',
    'stripe.feeExample': 'Example: With <strong class="text-[#2c2a26]">€25</strong> via PayPal, only <strong class="text-[#2c2a26]">€24.03</strong> arrives without fee coverage – with coverage the full <strong class="text-[#2c2a26]">€25.00</strong>.',
    'stripe.bankTransfer': 'Bank Transfer',
    'stripe.donateButton': '€ Donation',
    'stripe.redirecting': 'Redirecting to Stripe…',
    'stripe.securePayment': 'Secure payment via',
    'stripe.errorGeneric': 'An error occurred.',
    'stripe.errorConnection': 'Connection error. Please try again.',

    // Share dialog
    'share.title': 'Share Campaign',
    'share.close': 'Close',
    'share.copyLink': 'Copy Link',
    'share.copied': 'Link copied!',

    // CTA buttons
    'cta.donate': 'Donate',
    'cta.share': 'Share',

    // Donor list disclaimer
    'donations.disclaimer': 'Only donors who have consented to name publication are displayed',

    // Bank transfer
    'bank.title': 'Or by Bank Transfer',
    'bank.noFees': '0% Fees – 100% Reaches Recipient',
    'bank.noFeesBadge': 'No Fees',
    'bank.iban': 'IBAN',
    'bank.bic': 'BIC',
    'bank.reference': 'Reference',
    'bank.copy': 'Copy',
    'bank.copied': 'Copied!',
    'bank.qrScan': 'Scan with Banking App',
    'bank.qrNoAmount': 'Enter amount manually',
    'bank.donorListHint': 'To appear in the donor list, add "list me as donor" and your name to the reference. This may take a few days to appear.',

    // Thank you page
    'danke.pageTitle': 'Thank You!',
    'danke.heading': 'Thank You!',
    'danke.donationPrefix': 'Your donation of',
    'danke.donationSuffix': 'is on its way to Velid.',
    'danke.appearsIn': 'appears in the donor list.',
    'danke.back': 'Back',

    // Footer
    'footer.articles': 'Organization Bylaws',
    'footer.imprint': 'Imprint',
    'footer.privacy': 'Privacy Policy',
  },
} as const;
