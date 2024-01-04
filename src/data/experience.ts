import { STACK, type Stack } from "../const";

export interface Job {
    id: number;
    period: string;
    company: string;
    work: string;
    position: string;
    description: {
        [key: string]: string[];
    },
    stack: Stack[];
}

export const EXPERIENCE = [
    {
        id: 1,
        period: '2022 - Present',
        company: 'ByteSW',
        work: 'Fronted',
        position: 'Frontend Developer Junior',
        description: {
            es: [
                'Desarrollo y mantenimiento de nuevos módulos dentro de la aplicación, incluyendo la creación y gestión de pruebas unitarias.',
                'Documentación exhaustiva de los módulos desarrollados, y mantenimiento de la biblioteca de componentes.',
                'mejora continua a través de la refactorización de módulos existentes y resolución de bugs reportados. Coordinación efectiva en reuniones con clientes para garantizar alineación constante con expectativas y requerimientos.'
            ],
            en: [
                'Development and maintenance of new modules within the application, including the creation and management of unit tests.',
                'Thorough documentation of developed modules, and maintenance of the component library.',
                'Continuous improvement through refactoring of existing modules and resolution of reported bugs. Effective coordination in meetings with clients to ensure constant alignment with expectations and requirements.'
            ]
        },
        stack: [
            STACK.JAVASCRIPT,
            STACK.STORYBOOK,
            STACK.TYPESCRIPT,
            STACK.ANGULAR,
        ]
    }
]