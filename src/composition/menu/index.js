import { ref } from 'vue';
import menuOptions from './config';

function useMenu(){
  const menus = ref(menuOptions);

  return { menus };
}

export default useMenu;