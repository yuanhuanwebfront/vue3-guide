import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import menuOptions from './config';

function useMenu(){
  const menus = ref(menuOptions);
  const path = useRoute().path;

  const cptPathMenus = computed(() => {
    return menus.value.find(item => item.path == path)
  })

  return { menus, cptPathMenus };
}

export default useMenu;