/** 长按压触发事件
 * @param {Function} bind.value ：长按压触发的函数
 * @param {string} bind.arg ：长按压的时间参数；
 */
// 使用方法：  <div class="test" v-longpress="fun"> hello</div>
// 设置按压触发的时间：  <div class="test" v-longpress:100="fun">hello</div>
import type { Directive, DirectiveBinding } from "vue"
export default {
  mounted(el:HTMLElement, binding:DirectiveBinding ) {
    if (typeof binding.value !== 'function') {
      throw 'callback must be a function';
    }

    // 定义变量
    let pressTimer:ReturnType<typeof setTimeout> | null = null;
    // 创建计时器（ 1.5秒后执行函数 ）
    let time:number
    if(!binding.arg){time=1500}else{
        time=parseInt(binding.arg)
    }
    const start = (e:Event) => {
      if (e.type === 'click') {
        return;
      }
      if (pressTimer === null) {
        pressTimer = setTimeout((e:Event) => {
          handler(e);
        }, time);
      }
    };
    // 取消计时器
    const cancel = () => {
      if (pressTimer !== null) {
        clearTimeout(pressTimer);
        pressTimer = null;
      }
    };
    // 运行函数
    const handler = (e:Event) => {
      binding.value(e);
    };
    // 添加事件监听器
    el.addEventListener('mousedown', start);
    el.addEventListener('touchstart', start);
    // 取消计时器
    el.addEventListener('click', cancel);
    el.addEventListener('mouseout', cancel);
    el.addEventListener('touchend', cancel);
    el.addEventListener('touchcancel', cancel);
  },
} as Directive
