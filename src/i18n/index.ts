import english from './en.json';
import spanish from './es.json';

interface I18N {
    currentLocale?: string;
}

export const LANGUAGES = {
    ENGLISH: 'en',
    SPANISH: 'es'
} as const;

export const getI18N =  (parameters: I18N) => {
    const { currentLocale } = parameters;

    if (currentLocale === LANGUAGES.ENGLISH) return english;
    if (currentLocale === LANGUAGES.SPANISH) return spanish;

    return english;
}