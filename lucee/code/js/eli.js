import EliHeader from './components/EliHeader.js';
import EliNav from './components/EliNav.js';
import OpsPage from './components/Pages/OpsPage.js';
import InfoTable from './components/InfoTable.js';
import EliFooter from './components/EliFooter.js';

const Home = { template: '<div>Home</div>'}
const IT = { template: '<div>IT</div>'}
const HR = { template: '<div>HR</div>'}
const Forms = { template: '<div>Forms</div>'}
const Operations = { template: '<div>Operations</div>'}
const WhatsNew = { template: '<div>WhatsNew</div>'}
const CourtFamily = { template: '<div>CourtFamily</div>'}
const Chambers = { template: '<div>Chambers</div>'}
const Jury = { template: '<div>Jury</div>'}
const NextGen = { template: '<div>NextGen</div>'}

const routes = [
  { path: '/', component: Home, props: true},
  { path: '/resources_IT', component: IT},
  { path: '/personnel_corner', component: HR},
  { path: '/forms', component: Forms},
  { path: '/resources_ops', component: OpsPage},
  { path: '/whats_new', component: WhatsNew},
  { path: '/courtFamily', component: CourtFamily},
  { path: '/chambers', component: Chambers},
  { path: '/jury', component: Jury},
  { path: '/nextgen', component: NextGen}
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

const app = new Vue({
  router,
  components: {
    EliHeader,
    EliNav,
    OpsPage,
    InfoTable,
    EliFooter
  }
}).$mount('#app')