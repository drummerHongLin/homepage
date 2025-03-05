
// 判断是否是横屏
export const isLandscapeMode =  ():boolean => {
    // 如果window对象存在orientation属性
    if ('orientation' in window) {
      // 根据orientation属性判断横屏或竖屏模式
      return Math.abs(window.orientation) === 90;
    }
    
    // 否则，使用屏幕宽度和高度比较来判断
    return window.innerWidth > window.innerHeight;
  }

// 监控屏幕尺寸变化
export const handleResize = ():boolean => {
    const screenWidth = window.innerWidth;
    
    if(screenWidth>1320){
      document.documentElement.style.fontSize ='';
        
    }
    else if(screenWidth>900){
      // 调小字体
      const fontSize = '16px'
      // 将新的字体大小应用到根元素
      document.documentElement.style.fontSize = fontSize;
  
    }
    else{
      // 调小字体
      const fontSize = '12px'
      // 将新的字体大小应用到根元素
      document.documentElement.style.fontSize = fontSize;
    }
    if(isLandscapeMode()){
      return false;
    }
    else{
      return true;
    }
  
    
}