export interface ThemeType {
  body: string
  text: string
  primary: string
  secondary: string
}

export const lightTheme: ThemeType = {
  body: '#FFF',
  text: '#000',
  primary: '#3d3d3d',
  secondary: '#bfbfbf',
}
export const darkTheme: ThemeType = {
  body: '#161616',
  text: '#FAFAFA',
  primary: '#c2c2c2',
  secondary: '#ffffff',
}
