import type { ButtonProps, InputProps, MenuProps, PaginationProps } from 'naive-ui'

type InputThemeOverrides = NonNullable<InputProps['themeOverrides']>
const inputOverrides: InputThemeOverrides = {
  borderHover: '1px solid #4098fc',
  borderFocus: '1px solid #4098fc',
  boxShadowFocus: '0 0 0 2px #4098fc33',
  caretColor: '#2080f0',
  loadingColor: '#2080f0'
}

type PageThemeOverrides = NonNullable<PaginationProps['themeOverrides']>
const pageOverrides: PageThemeOverrides = {
  itemTextColorHover: '#4098fc',
  itemTextColorActive: '#2080f0',
  itemTextColorPressed: '#1060c9',
  itemBorderActive: '1px solid #2080f0',
  peers: {
    Popselect: {
      peers: {
        InternalSelectMenu: {
          optionTextColorPressed: '#2080f0'
        }
      }
    }
  }
}

type ButtonThemeOverrides = NonNullable<ButtonProps['themeOverrides']>
const buttonOverrides: ButtonThemeOverrides = {
  textColorHover: '#4098fc',
  textColorPressed: '#1060c9',
  textColorFocus: '#4098fc',
  borderHover: '1px solid #4098fc',
  borderPressed: '1px solid #1060c9',
  borderFocus: '1px solid #4098fc',
  rippleColor: '#2080f0'
}

type MenuThemeOverrides = NonNullable<MenuProps['themeOverrides']>
const menuOverrides: MenuThemeOverrides = {
  itemTextColorActive: '#2080f0',
  itemTextColorActiveHover: '#2080f0',
  itemIconColorActive: '#2080f0',
  itemIconColorActiveHover: '#2080f0',
  itemColorActive: '#2080f020',
  itemColorActiveHover: '#2080f020',
  itemColorActiveCollapsed: '#2080f020'
}

export { inputOverrides, pageOverrides, buttonOverrides, menuOverrides }
