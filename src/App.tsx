import { defineComponent } from 'vue';
import Im from './components/im';

export default defineComponent({
  name: 'App',
  components: { Im },
  setup() {
    return () => (
      <Im />
    );
  }
});