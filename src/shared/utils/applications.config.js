import { URLS } from '../../common/constants';

export const APPLICATIONS = [
  // React
  {
    name: 'navbar',
    loader: () => import('../../apps/navbar/loader'),
    url: false
  },
  // Vue
  {
    name: 'home',
    loader: () => import('../../apps/home/loader'),
    url: URLS.home
  },
  // Angular @TODO: change it to angular app, for time being use React
  {
    name: 'agenda',
    label: 'Agenda',
    loader: () => import('../../apps/agenda/loader'),
    url: URLS.agenda
  },
  // React
  {
    name: 'questions',
    label: 'Questions',
    loader: () => import('../../apps/questions/loader'),
    url: URLS.questions
  },
  // React
  {
    name: 'feedback',
    label: 'Feedback',
    loader: () => import('../../apps/feedback/loader'),
    url: URLS.feedback
  },
  // React
  {
    name: 'footer',
    loader: () => import('../../apps/footer/loader'),
    url: false
  },
  // React
  {
    name: 'admin',
    loader: () => import('../../apps/admin/loader'),
    url: URLS.admin
  },
];
