/** 无限滚动列表（滚动到底部触发事件）
 * @param {Function} bind.value ：滚动到底部触发的事件；
 */
// 使用方法：
//   <div id="outer" v-infinite-scroll="fun">
//      <div v-for="(item,index) in arr">{{index}}</div>
//   </div>
//     fun() {
//       this.arr.push('1')
//     },
import type { Directive, DirectiveBinding } from "vue"
export default {
  mounted(el:HTMLElement, binding:DirectiveBinding) {
    el.addEventListener('scroll', () => {
      const clientHeight:number = el.clientHeight;
      const scrollTop:number = Math.round(el.scrollTop);
      const scrollHeight:number = el.scrollHeight;
      if (approximate(clientHeight, scrollTop, scrollHeight)) {
        binding.value?.();
      }
    });
  },
  unmounted(el:HTMLElement) {
    // 停止监听工作
    el.removeEventListener('scroll', () => {});
  },
} as Directive
// 近似相等
function approximate(num1:number, num2:number, sum:number):boolean{
  const sumArray = [num1 + num2, num1 + num2 + 1, num1 + num2 - 1];
  if (sumArray.indexOf(sum) !== -1) {
    return true;
  }
  return false;
}
