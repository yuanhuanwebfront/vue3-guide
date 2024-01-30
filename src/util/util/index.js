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