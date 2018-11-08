import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';

import Spinner from '../../components/spinner/index.vue';
import DataItems from '../../components/data-items/index.vue';

export default Vue.extend({
  components: {
    Spinner,
    DataItems
  },
  computed: {
    ...mapGetters('app', ['responseData', 'isLoading'])
  },
  methods: {
    ...mapActions('app', ['getData'])
  }
});
