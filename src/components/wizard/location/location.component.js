export default {
  name: 'location',
  components: {}, 
  props: {
    location: {
      default: {
        addressLine1: ''
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
          this.$emit('locationIsValid')
        }
      });
    }
  }
}
