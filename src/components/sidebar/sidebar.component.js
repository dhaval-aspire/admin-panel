import { mapMutations, mapGetters } from 'vuex'
import * as types from '../../store/mutation-types'
import { MENU_STATUS } from '../../store/constant'
export default {
  name: 'sidebar',
  components: {},
  props: [],
  data() {
    return {
      MENU_STATUS: MENU_STATUS
    }
  },
  computed: {
    ...mapGetters([
      'menuEvent'
    ])
  },
  mounted() {

  },
  methods: {
    ...mapMutations({
      closeLeftMenu: types.CLOSE_MENU_EVENT
    })
  }
}
