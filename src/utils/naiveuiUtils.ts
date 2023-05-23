import { NIcon } from 'naive-ui'
import { h, type Component } from 'vue'

const renderIcon = (icon: Component) => {
  return () => h(NIcon, null, { default: () => h(icon) })
}

export { renderIcon }
