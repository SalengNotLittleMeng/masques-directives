/** 让元素固定在页面的某个位置
 * @param {number} bind.value ：元素距离某个位置（默认是顶部）的距离
 * @param {string} bind.arg ：设置元素的定位，默认是顶部；
 */
// 使用方式：
// 基本用法：<div class="test" v-fixed>hello</div>
// 修改位置距离：<div class="test" v-fixed="1000">hello</div>
// 修改位置参数：<div class="test" v-fixed:left="1000">hello</div>
import type { Directive, DirectiveBinding } from "vue"
interface ElType extends HTMLElement {
     style:StyleType
}
interface StyleType extends CSSStyleDeclaration{
    [key:string]:any
}
export default {
  mounted(el:ElType, binding:DirectiveBinding) {
    el.style.position = 'fixed';
    // binding.arg 是我们传递给指令的参数
    const s:string = binding.arg || 'top';
    el.style[s] = binding.value + 'px';
  },
  updated(el:ElType, binding:DirectiveBinding) {
    const s = binding.arg || 'top';
    el.style[s] = binding.value + 'px';
  },
}as Directive
