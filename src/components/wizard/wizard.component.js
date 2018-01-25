import profile from './profile'
import location from './location'
import company from './company'
import account from './account'
import { getWizardModel } from './wizard.model'
export default {
  name: 'wizard',
  components: {}, 
  props: [],
  data () {
    return {
      form: {
        first: {
          title: 'Profile',
          valid: false
        },
        second: {
          title: 'Location',
          valid: false
        },
        third: {
          title: 'Company',
          valid: false
        },
        fourth: {
          title: 'Accounts',
          valid: false
        }
      },
      model: getWizardModel(),
      tabIndex: 0,
      submit: false,
      successTemplate:`
      <b-badge variant="success">
        <i class="fa fa-check" aria-hidden="true"></i>
      </b-badge>`
    }
  },
  computed: {
  },
  components: {
    profile: profile,
    location: location,
    company: company,
    account: account
  },
  mounted () {
  },
  methods: {
    getHeaderTemplate (formObject) {
      if(formObject.valid) {
        return formObject.title + this.successTemplate
      }
      return formObject.title
    },
    setValiditiy (formObject) {
      formObject.valid = true;
      setTimeout(() => {
        this.gotoNextTab();
      }, 10);
    },
    gotoPrevTab() {
      this.tabIndex--;
    },
    gotoNextTab() {
      this.tabIndex++;
    }
  }
}
