export default {
  name: 'company',
  components: {}, 
  props: {
    company: {
      default: {
        name: ''
      }
    }
  },
  data () {
    return {

    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    validateForm(scope) {
      this.$validator.validateAll(scope).then((result) => {
        if (result) {
          // eslint-disable-next-line
          this.$emit('companyIsValid')
        }
      });
    }
  }
}
