export default {
  name: 'profile',
  components: {}, 
  props: {
    profile:{
      default: {
        firstName: '',
        lastName: ''
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
          this.$emit('profileIsValid')
        }
      });
    }
  }
}
