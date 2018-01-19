import createPost from '../dynamic-component/create-post'
import managePost from '../dynamic-component/manage-post'

export default {
  name: 'home',
  components: {}, 
  props: [],
  data () {
    return {
      curentComponent: 'createPost'
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {

  },
  components: {
    createPost: createPost,
    managePost: managePost
  }
}
