import { createVuetify } from 'vuetify';
import { VSkeletonLoader } from 'vuetify/labs/VSkeletonLoader';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';


export default defineNuxtPlugin(nuxt => {
    const vuetify = createVuetify({
        ssr: true,
        directives,
        //components,
        theme: {
            defaultTheme: 'dark',
        },
        components: {
            ...components,
            VSkeletonLoader,
        } 
    });

    nuxt.vueApp.use(vuetify);
})