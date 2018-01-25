export default {
  name: 'account',
  components: {}, 
  props: {
    account : {
      default: {
        aadharNumber: ''
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
          this.$emit('submit')
        }
      });
    }
  }
}
