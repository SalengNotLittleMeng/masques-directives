# @masques/directives

## 简介

Handly-Vue 中的内置自定义指令插件，可以快速实现诸如懒加载，预备图，水印，拖动等效果

Vue3 脚手架的整体功能集成模板：：https://github.com/SalengNotLittleMeng/masques

项目 GitHub 地址：https://github.com/SalengNotLittleMeng/masques-directives

## 使用：

npm 安装:

```shell
    npm i @masques/directives
```

yarn 安装:

```shell
   yarn add @masques/directives
```

在 Vue 中使用

```js
import MasquesDirectives from '@masques/directives'
...
Vue.use(new MasquesDirectives());
```

## 具体功能实例：

### 点击旁边的元素触发：

```js
    /**点击添加自定义指令元素以外的地方之后触发事件
 * @param {function} binding.value ：要触发的函数名,如果不填默认是使添加指令的元素消失
 * @param {string} binding.arg ：相关联的类名，在关联类名的元素内点击不会触发消失事件,防止开启事件无法触发
 */
// 调用示例：
  <div class="add-item dir-user-defined" @click="addItem">自义 ↓</div>
    <div class="to-select" v-show="showSelect"  v-clickoutside:dir-user-defined = "confirm"></div>
```

### 复制文字：

```js
/** 点击添加自定义指令的元素后复制参数中的值到剪贴板
 * @param {Function | string } bind.value ：要复制到剪贴板的内容，可以是一段文字，也可以是methods或computed；
 * @param {Function} bind.arg ：复制成功后调用的方法
 */
<div class="test" v-copy="'12345'">hello</div>
利用computed
 <div class="test" v-copy="getString">hello</div>
  computed:{
    getString(){
        return `hello ${this.direct}`
    }
  }
复制成功后的回调函数（可选）
<div class="test" v-copy:[fun]="getString">hello</div>
fun(text){
 复制成功后的回调函数有一个参数text，这个参数表示复制的文本内容
    console.log(text)
}
```

### 防抖：

```js
/** 将添加了自定义指令的元素进行防抖
 * @param {Function | string } bind.value ：点击这个元素后调用的方法（进行了防抖处理）
 * @param {number} bind.arg ：防抖的时间参数，默认为1s；
 */
// 使用方法：
  <div class="test" v-debounce="fun">hello</div>
如果要配置防抖时间：
  <div class="test" v-debounce:3000="fun">hello</div>
```

### 可拖拽：

```js
/** 将添加了自定义指令的元素变得可拖拽
 * @param {Function} bind.value ：每次拖动调用的方法，其中有一个默认事件参数e
 * @param {string} bind.arg ：限制容器的ID，如果设置这个参数则元素只能在限制容器内部进行拖拽；
 */
// 使用方法：
// 让元素变得可拖拽：
<div class="test" v-draggable>hello</div>
// 添加限制容器
<div id="outer">
      <div class="test" v-draggable:outer>hello</div>
</div>
// 添加拖动的事件函数
   <div class="test" v-draggable:outer="fun">hello</div>
```

### 让元素固定在页面的某个位置：

```js
/** 让元素固定在页面的某个位置
 * @param {number} bind.value ：元素距离某个位置（默认是顶部）的距离
 * @param {string} bind.arg ：设置元素的定位，默认是顶部；
 */
// 使用方式：
// 基本用法：<div class="test" v-fixed>hello</div>
// 修改位置距离：<div class="test" v-fixed="1000">hello</div>
// 修改位置参数：<div class="test" v-fixed:left="1000">hello</div>
```

### 聚焦：

```js
//  让元素在进入页面是就进入聚焦状态（主要用于input元素）
<input v-focus>
```

### 无限滚动列表：

```js
/** 无限滚动列表（滚动到底部触发事件）
 * @param {Function} bind.value ：滚动到底部触发的事件；
 */
// 使用方法：
  <div id="outer" v-infinite-scroll="fun">
     <div v-for="(item,index) in arr">{{index}}</div>
  </div>
    fun() {
      this.arr.push('1')
    },
```

### 懒加载：

```js
/** 图片懒加载
 * @param {string} bind.value ：图片的url；
 */
// 使用方法：
<img v-lazy-img="'https://www.keaidian.com/uploads/allimg/190424/24110307_23.jpg'" alt=""></img>
```

### 长按压：

```js
/** 长按压触发事件
 * @param {Function} bind.value ：长按压触发的函数
 * @param {string} bind.arg ：长按压的时间参数；
 */
使用方法：  <div class="test" v-longpress="fun"> hello</div>
设置按压触发的时间：  <div class="test" v-longpress:100="fun">hello</div>
```

### 备用图：

```js
/** 当图片加载失败时使用备用图片作为替代
 * @param {string} bind.value ：备用图片的url
 */
// 使用方法：
 <img :src="img" v-real-img="'https://www.keaidian.com/uploads/allimg/190424/24110307_23.jpg'" alt=""></img>
```

### 水印：

```js
/** 给元素加上水印
 ** 这个指令需要元素具有足够的宽高，否则看起来没有效果
 * @param {object} bind.value ：p配置参数，可以配置字体，字体颜色，水印文字
 */
// 使用方式：
<div
  class="test-block"
  v-waterMarker="{font:'18px',text:'版权所有',textColor:'rgba(180, 180, 180, 0.9)'}"
></div>
```
