export const dialogWarning = function(dialog, title = '警告', content = '', positiveText = '确定', negativeText = '取消'){
  return new Promise((resolve, reject) => {
    dialog.warning({
      title,
      content,
      positiveText,
      negativeText,
      onPositiveClick: () => {
        resolve();
      },
      onNegativeClick: () => {
        reject();
      }
    })
  })
}