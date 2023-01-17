/** 将添加了自定义指令的元素变得可拖拽
 * @param {Function} bind.value ：每次拖动调用的方法，其中有一个默认事件参数e
 * @param {string} bind.arg ：限制容器的ID，如果设置这个参数则元素只能在限制容器内部进行拖拽；
 */
// 使用方法：
// 让元素变得可拖拽：
// <div class="test" v-draggable>hello</div>
// 添加限制容器
// <div id="outer">
//       <div class="test" v-draggable:outer>hello</div>
// </div>
// 添加拖动的事件函数
//    <div class="test" v-draggable:outer="fun">hello</div>
import type { Directive, DirectiveBinding } from "vue"
interface ElType extends HTMLElement {
     currentStyle?:StyleType
}
interface StyleType extends CSSStyleDeclaration{
    [key:string]:any
}
export default {
  mounted(el:HTMLElement, binding:DirectiveBinding) {
    // 设置目标元素基础属性
    el.style.cursor = 'move';
    el.style.position = 'fixed';
    // 获取容器宽高
    const containerId:string | null = binding.arg || null;
    let containerWidth:number = window.innerWidth - getScrollWidth();
    let containerHeight:number = window.innerHeight;
    // 存在父级容器
    if (containerId) {
      const containerEle :HTMLElement = document.getElementById(containerId) as HTMLElement;
        if(containerEle===null){return}
      const { width, height } = containerEle.getBoundingClientRect();
      containerWidth = width;
      containerHeight = height;
      if (!['fixed', 'absolute', 'relative'].includes(getStyle(containerEle, 'position'))) {
        containerEle.style.position = 'relative';
      }
      el.style.position = 'absolute';
    }
    // 鼠标在目标元素上按下
    el.addEventListener('mousedown', (e:MouseEvent) => {
      const { width, height } = el.getBoundingClientRect();
      // 当前目标元素的left与top
      const left:number = el.offsetLeft;
      const top:number = el.offsetTop;
      // 保存按下的鼠标的X与Y
      const mouseX:number = e.clientX;
      const mouseY:number = e.clientY;
      // 计算边界值
      const leftLimit:number = left;
      const rightLimit:number = containerWidth - left - width;
      const topLimit:number = top;
      const bottomLimit:number = containerHeight - top - height;

      // 监听鼠标移动
      document.onmousemove = (e:MouseEvent) => {
        // 鼠标移动的距离
        const disX :number= e.clientX - mouseX;
        const disY:number = e.clientY - mouseY;
        // 左右边界
        if (disX < 0 && disX <= -leftLimit) {
          el.style.left = left - leftLimit + 'px';
        } else if (disX > 0 && disX >= rightLimit) {
          el.style.left = left + rightLimit + 'px';
        } else {
          el.style.left = left + disX + 'px';
        }
        // 上下边界
        if (disY < 0 && disY <= -topLimit) {
          el.style.top = top - topLimit + 'px';
        } else if (disY > 0 && disY >= bottomLimit) {
          el.style.top = top + bottomLimit + 'px';
        } else {
          el.style.top = top + disY + 'px';
        }
        binding?.value(e);
        return false;
      };

      // 监听鼠标抬起
      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    });
  },
} as Directive
function getStyle(el:ElType, attr:string):string{
  return el.currentStyle ? el.currentStyle[attr] : (window.getComputedStyle(el, null)as StyleType) [attr] ;
}
function getScrollWidth() :number{
  const oDiv :HTMLElement = document.createElement('DIV');
  oDiv.style.cssText =
    'position:absolute; top:-1000px; width:100px; height:100px; overflow:hidden;';
  const noScroll:number = document.body.appendChild(oDiv).clientWidth;
  oDiv.style.overflowY = 'scroll';
  const scroll:number = oDiv.clientWidth;
  document.body.removeChild(oDiv);
  const isExsit:boolean =
    document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight);
  return isExsit ? noScroll - scroll : 0;
}
