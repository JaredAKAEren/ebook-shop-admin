import type {
  ButtonProps,
  DataTableProps,
  InputNumberProps,
  InputProps,
  MenuProps,
  PaginationProps,
  SwitchProps,
  UploadProps
} from 'naive-ui'

type InputThemeOverrides = NonNullable<InputProps['themeOverrides']>
const inputOverrides: InputThemeOverrides = {
  borderHover: '1px solid #4098fc',
  borderFocus: '1px solid #4098fc',
  boxShadowFocus: '0 0 0 2px #4098fc33',
  caretColor: '#2080f0',
  loadingColor: '#2080f0'
}

type InputNumberThemeOverride = NonNullable<InputNumberProps['themeOverrides']>
const inputNumberOverrides: InputNumberThemeOverride = {
  peers: {
    Button: {
      textColorTextHover: '#4098fc',
      textColorTextPressed: '#1060c9',
      textColorTextFocus: '#4098fc'
    },
    Input: {
      borderHover: '1px solid #4098fc',
      borderFocus: '1px solid #4098fc',
      boxShadowFocus: '0 0 0 2px #4098fc33',
      caretColor: '#2080f0',
      loadingColor: '#2080f0'
    }
  }
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

type UploadThemeOverrides = NonNullable<UploadProps['themeOverrides']>
const uploadOverrides: UploadThemeOverrides = {
  draggerBorderHover: '1px dashed #2080f0'
}

type SwitchThemeOverrides = NonNullable<SwitchProps['themeOverrides']>
const switchOverrides: SwitchThemeOverrides = {
  railColorActive: '#2080f0',
  loadingColor: '#2080f0',
  boxShadowFocus: '0 0 0 2px #2080f033'
}

type DataTableThemeOverrides = NonNullable<DataTableProps['themeOverrides']>
const dataTableOverriders: DataTableThemeOverrides = {
  thIconColorActive: '#2080f0',
  loadingColor: '#2080f0'
}

export {
  inputOverrides,
  inputNumberOverrides,
  pageOverrides,
  buttonOverrides,
  menuOverrides,
  uploadOverrides,
  switchOverrides,
  dataTableOverriders
}
