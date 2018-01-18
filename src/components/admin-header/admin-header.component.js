import { mapMutations } from 'vuex';
import * as types from '../../store/mutation-types'

export default {
  name: 'admin-header',
  components: {}, 
  props: [],
  data () {
    return {

    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    ...mapMutations({
      openLeftMenu: types.OPEN_MENU_EVENT
    })
  }
}
