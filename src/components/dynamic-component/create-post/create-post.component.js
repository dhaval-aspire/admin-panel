export default {
  name: 'create-post',
  components: {}, 
  props: [],
  data () {
    return {
      form: {
        postTitle: '',
        postBody: ''
      }
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    onSubmit() {
      console.log('onSubmit');
    }
  }
}
