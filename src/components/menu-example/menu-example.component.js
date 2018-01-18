import { mapGetters, mapMutations } from 'vuex'
import * as types from '../../store/mutation-types'
export default {
  name: 'menu-example',
  components: {},
  props: [],
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters({
      menuEvent: 'menuEvent'
    })
  },
  mounted() {

  },
  methods: {
    ...mapMutations({
      'openLeftMenu': types.OPEN_MENU_EVENT,
      'closeLeftMenu': types.CLOSE_MENU_EVENT
    })
  }
}