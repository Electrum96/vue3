import { createApp } from 'vue'
import App from './App' /*импорт корневого компонента*/
import components from '@/components/UI'   /*импортирую компоненты из собственной библиотеки*/

const app = createApp(App) /*записываю экземпляр приложения в константу*/

/*итерируюсь по массиву компонентов*/
components.forEach(component => {
    app.component(component.name, component) /*вызываю встроенную ф-ию component для глобальной регистрации компонентов, аргументы: имя компонента и сам компонент*/
})

app.mount('#app');  /*вызываю функцию mount  у app*/

