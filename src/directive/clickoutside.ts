import type { Directive, DirectiveBinding } from "vue"
/**点击添加自定义指令元素以外的地方之后触发事件
 * @param {function} binding.value ：要触发的函数名,如果不填默认是使添加指令的元素消失
 * @param {string} binding.arg ：相关联的类名，在关联类名的元素内点击不会触发消失事件,防止开启事件无法触发
 */
// 调用示例：
//    <div class="add-item dir-user-defined" @click="addItem">自定义 ↓</div>
//         <div class="to-select" v-show="showSelect"  v-clickoutside:dir-user-defined = "confirm"></div>
export default {
  mounted(el:HTMLElement, binding:DirectiveBinding ) {
    const activePointClass = `.${binding.arg}`;
    const activePoint:Element[] = Array.from(document.querySelectorAll(activePointClass));
    document.addEventListener(
      "click",
      (e:MouseEvent) => {
        if (
          activePoint.some((item:Element) => {
            return item.contains(e.target as Node);
          })
        ) {
          return;
        }
        if (!el.contains(e.target as Node)) {
          const func =
            binding.value ||
            function () {
              el.style.display = "none";
            };
          func();
        }
      },
      false
    );
  },
  unmounted() {
    document.removeEventListener("click", () => {});
  },
} as Directive
