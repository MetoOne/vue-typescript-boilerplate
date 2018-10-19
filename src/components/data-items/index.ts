
import Vue from 'vue';

type PropTypes = {
  responseData: any[]
}

export default Vue.extend({
  name: 'dataItems',
  props: {
    props: {
      type: Object as () => PropTypes
    }
  },
  data() {
    return {
      responseData: this.props.responseData,
    }
  },
  methods: {
    //     increment() { this.responceData++; },
    //     decrement() {
    //         if (this.responceData > 1) {
    //             this.responceData--;
    //         }
    //     },
  },
  computed: {
    // exclamationMarks(): string {
    //     return Array(this.responceData + 1).join('!');
    // }
  }
});
