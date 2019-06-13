/* 封装icon组件用来简便描述 <svg> -> <use> 引用iconfont标签
实在是牛逼啊 */
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: 'icon'
    },
    size: Number,
    width: Number,
    height: Number
  },
  computed: {
    fullName() {
      const { name, className } = this
      const prefix = `${className}-`
      return name.indexOf(prefix) === 0 ? name : prefix + name
    },
    style() {
      const { size, width, height } = this
      return {
        width: width ? width + 'px' : (size ? size + 'px' : ''),
        height: height ? height + 'px' : (size ? size + 'px' : '')
      }
    }
  },
  render(h) {
    const { className, fullName, style } = this
    return (
      <svg class={`icon ${className}`} style={style}>
        <use href={`#${fullName}`} />
      </svg>
    )
  }
}
