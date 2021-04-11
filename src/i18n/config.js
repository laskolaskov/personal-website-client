import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
    fallbackLng: 'bg',
    lng: 'bg',
    resources: {
        en: {
            translations: require('./locales/en/translations.json')
        },
        bg: {
            translations: require('./locales/bg/translations.json')
        }
    },
    ns: ['translations'],
    defaultNS: 'translations'
})

i18n.languages = ['bg', 'en']

export default i18n