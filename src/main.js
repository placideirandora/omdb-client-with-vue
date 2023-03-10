import 'primeflex/primeflex.css';
import 'primevue/resources/themes/lara-light-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import './index.scss';

import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Dialog from 'primevue/dialog';
import DialogService from 'primevue/dialogservice';
import InputText from 'primevue/inputtext';
import Paginator from 'primevue/paginator';
import ProgressSpinner from 'primevue/progressspinner';
import Textarea from 'primevue/textarea';
import Divider from 'primevue/divider';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';

import App from './App';
import router from './router';

const app = createApp(App);

app.use(router);
app.use(PrimeVue, { ripple: true });
app.use(ToastService);
app.use(DialogService);

app.component('prime-button', Button);
app.component('prime-card', Card);
app.component('prime-dialog', Dialog);
app.component('prime-input-text', InputText);
app.component('prime-paginator', Paginator);
app.component('prime-progress-spinner', ProgressSpinner);
app.component('prime-textarea', Textarea);
app.component('prime-divider', Divider);
app.component('prime-toast', Toast);

app.mount('#app');
