import { useTranslation } from 'react-i18next';
import type { CardProps } from '@/models/Card';

export const useCardsData = (): CardProps[] => {
  const { t } = useTranslation('mobilisCards');

  return [
    {
      name: 'Bonobús',
      primaryDescription: t('cards.bonobus.primaryDescription'),
      categories: [
        t('categories.General'),
        t('categories.Recargable'),
        t('categories.Limitada'),
        t('categories.Venta'),
      ],
      secondaryDescription: t('cards.bonobus.secondaryDescription'),
      hasButton: false,
      additionalInfo: [
        t('cards.bonobus.additionalInfo.0'),
        t('cards.bonobus.additionalInfo.1'),
        t('cards.bonobus.additionalInfo.2'),
      ],
      hasNorms: true,
      normsURL:
        'https://www.emtvalencia.es/ciudadano/images/stories/pdf/Tarifas_Titulos/2025/Normativas/E%2024%2002136_Bonobus.pdf',
      price: t('cards.bonobus.price'),
    },

    {
      name: 'EMT Jove',
      primaryDescription: t('cards.emtJove.primaryDescription'),
      categories: [
        t('categories.Personal'),
        t('categories.Renovable'),
        t('categories.solicitud'),
        t('categories.ilimitada'),
        t('categories.Mensual'),
      ],
      secondaryDescription: t('cards.emtJove.secondaryDescription'),
      hasButton: true,
      buttonText: t('cards.emtJove.buttonText'),
      additionalInfo: [t('cards.emtJove.additionalInfo.0'), t('cards.emtJove.additionalInfo.1')],
      hasNorms: false,
      normsURL:
        'https://www.emtvalencia.es/ciudadano/images/stories/pdf/Tarifas_Titulos/2025/Normativas/EMT%20Jove%202025.pdf',
      price: t('cards.emtJove.price'),
      requiredDocuments: [
        t('cards.emtJove.requiredDocuments.0'),
        t('cards.emtJove.requiredDocuments.1'),
        t('cards.emtJove.requiredDocuments.2'),
      ],
      hasForm: true,
      formURL:
        'https://www.emtvalencia.es/ciudadano/images/stories/pdf/Tarifas_Titulos/2019/Formularios/AF_Formulario_EMTjove.pdf',
      rules: [t('cards.emtJove.rules.0'), t('cards.emtJove.rules.1')],
    },

    {
      name: 'Bono Oro',
      primaryDescription: t('cards.bonoOro.primaryDescription'),
      categories: [
        t('categories.Personal'),
        t('categories.Renovable'),
        t('categories.ilimitada'),
        t('categories.Venta'),
        t('categories.Anual'),
      ],
      secondaryDescription: t('cards.bonoOro.secondaryDescription'),
      hasButton: false,
      additionalInfo: [
        t('cards.bonoOro.additionalInfo.0'),
        t('cards.bonoOro.additionalInfo.1'),
        t('cards.bonoOro.additionalInfo.2'),
      ],
      hasNorms: false,
      price: [t('cards.bonoOro.price.0'), t('cards.bonoOro.price.1')],
    },

    {
      name: t('cards.personalizado.name'),
      primaryDescription: t('cards.personalizado.primaryDescription'),
      categories: [
        t('categories.Personal'),
        t('categories.Recargable'),
        t('categories.Solicitud'),
        t('categories.Limitada'),
      ],
      secondaryDescription: t('cards.personalizado.secondaryDescription'),
      hasButton: true,
      buttonText: t('cards.personalizado.buttonText'),
      additionalInfo: [t('cards.personalizado.additionalInfo.0'), t('cards.personalizado.additionalInfo.1')],
      hasNorms: false,
      normsURL:
        'https://www.emtvalencia.es/ciudadano/images/stories/pdf/Tarifas_Titulos/2025/Normativas/E%2024%2002140_BonobusPersonalizado.pdf',
      price: [t('cards.personalizado.price.0'), t('cards.personalizado.price.1')],
      requiredDocuments: [
        t('cards.personalizado.requiredDocuments.0'),
        t('cards.personalizado.requiredDocuments.1'),
        t('cards.personalizado.requiredDocuments.2'),
        t('cards.personalizado.requiredDocuments.3'),
      ],
      hasForm: true,
      formURL:
        'https://www.emtvalencia.es/ciudadano/images/stories/pdf/Tarifas_Titulos/2019/Formularios/AF_Formulario_BONOBUSPersonalizat.pdf',
      rules: [
        t('cards.personalizado.rules.0'),
        t('cards.personalizado.rules.1'),
        t('cards.personalizado.rules.2'),
        t('cards.personalizado.rules.3'),
      ],
    },

    {
      name: 'EMT Infantil',
      primaryDescription: t('cards.emtInfantil.primaryDescription'),
      categories: [
        t('categories.Personal'),
        t('categories.Renovable'),
        t('categories.Solicitud'),
        t('categories.ilimitada'),
        t('categories.Bienal'),
      ],
      secondaryDescription: t('cards.emtInfantil.secondaryDescription'),
      hasButton: true,
      buttonText: t('cards.emtInfantil.buttonText'),
      additionalInfo: [t('cards.emtInfantil.additionalInfo.0'), t('cards.emtInfantil.additionalInfo.1')],
      hasNorms: false,
      normsURL:
        'https://www.emtvalencia.es/ciudadano/images/stories/pdf/Tarifas_Titulos/2025/Normativas/E%2024%2002137_BonoInfantil.pdf',
      price: t('cards.emtInfantil.price'),
      requiredDocuments: [
        t('cards.emtInfantil.requiredDocuments.0'),
        t('cards.emtInfantil.requiredDocuments.1'),
        t('cards.emtInfantil.requiredDocuments.2'),
        t('cards.emtInfantil.requiredDocuments.3'),
        t('cards.emtInfantil.requiredDocuments.4'),
      ],
      hasForm: true,
      formURL:
        'https://www.emtvalencia.es/ciudadano/images/stories/pdf/Tarifas_Titulos/2019/Formularios/AF_Formulario_EMTInfantil.pdf',
      rules: [t('cards.emtInfantil.rules.0')],
    },

    {
      name: 'EMT Mascota',
      primaryDescription: t('cards.emtMascota.primaryDescription'),
      categories: [
        t('categories.Personal'),
        t('categories.Renovable'),
        t('categories.Solicitud'),
        t('categories.ilimitada'),
        t('categories.Bienal'),
      ],
      secondaryDescription: t('cards.emtMascota.secondaryDescription'),
      hasButton: true,
      buttonText: t('cards.emtMascota.buttonText'),
      additionalInfo: [t('cards.emtMascota.additionalInfo.0'), t('cards.emtMascota.additionalInfo.1')],
      hasNorms: false,
      normsURL:
        'https://www.emtvalencia.es/ciudadano/images/stories/pdf/Tarifas_Titulos/2025/Normativas/E%2024%2002141_BonoMascota.pdf',
      price: t('cards.emtMascota.price'),
      requiredDocuments: [
        t('cards.emtMascota.requiredDocuments.0'),
        t('cards.emtMascota.requiredDocuments.1'),
        t('cards.emtMascota.requiredDocuments.2'),
        t('cards.emtMascota.requiredDocuments.3'),
        t('cards.emtMascota.requiredDocuments.4'),
      ],
      hasForm: true,
      formURL:
        'https://www.emtvalencia.es/ciudadano/images/stories/pdf/Tarifas_Titulos/2019/Formularios/AF_Formulario_EMTMascota.pdf',
      rules: [t('cards.emtMascota.rules.0'), t('cards.emtMascota.rules.1'), t('cards.emtMascota.rules.2')],
    },

    {
      name: 'EMT AmbTU',
      primaryDescription: t('cards.emtAmbTU.primaryDescription'),
      categories: [
        t('categories.Personal'),
        t('categories.Renovable'),
        t('categories.Solicitud'),
        t('categories.ilimitada'),
        t('categories.Anual'),
      ],
      secondaryDescription: t('cards.emtAmbTU.secondaryDescription'),
      hasButton: true,
      buttonText: t('cards.emtAmbTU.buttonText'),
      additionalInfo: [t('cards.emtAmbTU.additionalInfo.0'), t('cards.emtAmbTU.additionalInfo.1')],
      hasNorms: false,
      normsURL: 'https://www.emtvalencia.es/ciudadano/images/stories/pdf/Tarifas_Titulos/2025/Normativas/AmbTu2025.pdf',
      price: t('cards.emtAmbTU.price'),
      requiredDocuments: [
        t('cards.emtAmbTU.requiredDocuments.0'),
        t('cards.emtAmbTU.requiredDocuments.1'),
        t('cards.emtAmbTU.requiredDocuments.2'),
      ],
      hasForm: false,
      rules: [
        t('cards.emtAmbTU.rules.0'),
        t('cards.emtAmbTU.rules.1'),
        t('cards.emtAmbTU.rules.2'),
        t('cards.emtAmbTU.rules.3'),
      ],
      hasAppointmentButton: true,
      appointmentURL: 'https://www.valencia.es/QSIGE/apps/citaprevia/index.html?idioma=ES#!/home',
    },

    {
      name: 'EMT Refugi',
      primaryDescription: t('cards.emtRefugi.primaryDescription'),
      categories: [
        t('categories.Personal'),
        t('categories.Renovable'),
        t('categories.Solicitud'),
        t('categories.ilimitada'),
        t('categories.Anual'),
      ],
      secondaryDescription: t('cards.emtRefugi.secondaryDescription'),
      hasButton: true,
      buttonText: t('cards.emtRefugi.buttonText'),
      additionalInfo: [t('cards.emtRefugi.additionalInfo.0'), t('cards.emtRefugi.additionalInfo.1')],
      hasNorms: false,
      normsURL:
        'https://www.emtvalencia.es/ciudadano/images/stories/pdf/Tarifas_Titulos/2025/Normativas/E%2025%2000707%20EMTRefugi.pdf',
      price: t('cards.emtRefugi.price'),
      requiredDocuments: [t('cards.emtRefugi.requiredDocuments.0')],
      hasForm: false,
      rules: [
        t('cards.emtRefugi.rules.0'),
        t('cards.emtRefugi.rules.1'),
        t('cards.emtRefugi.rules.2'),
        t('cards.emtRefugi.rules.3'),
      ],
      hasAppointmentButton: true,
      appointmentURL:
        'https://www.emtvalencia.es/ciudadano/index.php?option=com_content&view=article&id=1909&Itemid=637&lang=es#services',
    },

    {
      name: t('cards.billeteSencillo.name'),
      primaryDescription: t('cards.billeteSencillo.primaryDescription'),
      categories: [t('categories.General'), t('categories.Venta'), t('categories.Viajes individuales')],
      secondaryDescription: t('cards.billeteSencillo.secondaryDescription'),
      hasButton: true,
      buttonText: t('cards.billeteSencillo.buttonText'),
      additionalInfo: [t('cards.billeteSencillo.additionalInfo.0'), t('cards.billeteSencillo.additionalInfo.1')],
      hasNorms: true,
      normsURL:
        'https://www.emtvalencia.es/ciudadano/images/stories/pdf/Tarifas_Titulos/2025/Normativas/E%2024%2002139_BilleteSencillo.pdf',
      price: t('cards.billeteSencillo.price'),
      altImage: true,
    },

    {
      name: 'MovimEMT',
      primaryDescription: t('cards.movimEMT.primaryDescription'),
      categories: [
        t('categories.Personal'),
        t('categories.Recargable'),
        t('categories.Limitada'),
        t('categories.Venta'),
      ],
      secondaryDescription: t('cards.movimEMT.secondaryDescription'),
      hasButton: true,
      buttonText: t('cards.movimEMT.buttonText'),
      additionalInfo: [t('cards.movimEMT.additionalInfo.0'), t('cards.movimEMT.additionalInfo.1')],
      hasNorms: true,
      normsURL:
        'https://www.emtvalencia.es/ciudadano/images/stories/pdf/Tarifas_Titulos/2025/Normativas/E%2024%2002138_Movimemt.pdf',
      price: t('cards.movimEMT.price'),
    },
  ];
};
