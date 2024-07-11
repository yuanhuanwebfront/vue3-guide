// 复制文案
export function copyTextByClipboard(text){
  return new Promise((resolve, reject) => {
    var textarea = document.createElement('textarea');
    textarea.style.position = 'fixed';
    textarea.style.opacity = 0;
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    resolve();
  })
}

// 递归转换路由数组
export function transformConfigToRoutes(configs = []){

  let newArr = [];

  configs.forEach(item => {

    let pushItem = {
      path: item.path,
      meta: item.meta,
      component: item.component,
    }

    if(item.children && item.children.length > 0){
      pushItem.children = transformConfigToRoutes(item.children);
    }

    newArr.push(pushItem);
  })

  return newArr;

}