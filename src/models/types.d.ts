export interface Project {
    name: string;
    image: string;
    repository: string;
    demo: string;
    smallDescription: {
        [key: string]: string;
    };
    description: {
        en: string;
        es: string;
    };
}

export interface DescriptionLanguage {
    [key: string]: string;
}

export interface Menu {
    url: {
        [key: string]: string;
    }
    es: {
        name: string;
    }
    en: {
        name: string;
    }
    target: string;
}

export type Language = 'es' | 'en';