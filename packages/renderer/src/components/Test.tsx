// Test.tsx
import { defineComponent } from 'vue';
import styles from '../styles/test.module.scss';
const Test = defineComponent({
  render() {
    return <h1 class={styles.title}>hello, this is jsx featrues support!</h1>;
  },
});
export default Test;
