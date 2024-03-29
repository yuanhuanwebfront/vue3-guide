import { ref, onMounted } from 'vue';

const store_key = 'copy-board-list';

function useCopyBoard(){

  const copyList = ref([]);

  onMounted(() => {
    let storageList = localStorage.getItem(store_key);

    if(storageList){
      let list = JSON.parse(storageList);
      copyList.value = list;
    }

  })

  function addCopyItem(str){
    copyList.value.push(str);
    localStorage.setItem(store_key, JSON.stringify(copyList.value));
  }

  function removeCopyItem(idx){
    copyList.value = copyList.value.filter((item, index) => index != idx);
    localStorage.setItem(store_key, JSON.stringify(copyList.value));
  }

  return {
    copyList,
    addCopyItem,
    removeCopyItem
  }

}

export default useCopyBoard;