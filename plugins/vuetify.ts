// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        components,
        directives,
        theme: {
            defaultTheme: 'light',
        },
    })
    app.vueApp.use(vuetify)
})
