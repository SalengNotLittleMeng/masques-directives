/** 图片懒加载
 * @param {string} bind.value ：图片的url；
 */
// 使用方法：
//  <img v-lazy-img="'https://www.keaidian.com/uploads/allimg/190424/24110307_23.jpg'" alt=""></img>
import type { Directive, DirectiveBinding } from "vue"
interface ElType extends HTMLElement{
    "$data_src":string;
    "$io":IntersectionObserver
    "src":string
}
export default {
  beforeMount(el:ElType, binding:DirectiveBinding) {
    el.$data_src = binding.value;
  },
  mounted(el:ElType) {
    const io:IntersectionObserver = new IntersectionObserver((entries) => {
      const realSrc:string = el.$data_src;
      // 通过isIntersecting判断是否在可视区域内
      entries[0].isIntersecting && realSrc && (el.src = realSrc);
    });
    // 挂载实例, 提供给后续的unmounted钩子操作
    el.$io = io;
    // 监听目标对象
    io.observe(el);
  },
  updated(el:ElType, binding:DirectiveBinding) {
    // 实时更新最新的图片路径
    el.$data_src = binding.value;
  },
  unmounted(el:ElType) {
    // 停止监听工作
    el.$io.disconnect();
  },
} as Directive
