/** 让元素在进入页面是就进入聚焦状态（主要用于input元素）
 */
import type { Directive} from "vue"
export default {
  mounted(el:HTMLElement) {
    el.focus();
  },
}as Directive
