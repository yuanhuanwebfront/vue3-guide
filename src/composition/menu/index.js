import { ref, computed, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import menuOptions from './config';

function useMenu(){
  const menus = ref(menuOptions);
  const route = useRoute();
  
  const cptPathMenus = computed(() => {
    let menuItem = menus.value.find(item => item.path == route.path);

    return menuItem && menuItem.list ? menuItem.list : [];
  })

  return { menus, cptPathMenus };
}

export default useMenu;