import Paper from './Paper'
import Typography from './Typography'
import Button from './Button'
import CssBaseline from './CssBaseline'

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme) {
  return Object.assign(
    Paper(theme),
    Typography(theme),
    Button(theme),
    CssBaseline(theme)
  )
}
