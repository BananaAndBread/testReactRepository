import * as React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import withStyles from '@material-ui/styles/'
import grey from '../colors/grey'
import { ThemeProvider, useTheme } from '@material-ui/core/styles'

const styles = (theme) => ({
  title: theme.typography.title,
  subtitle: theme.typography.subtitle,
  common: theme.typography.common,
  detailed: theme.typography.detailed,
  normal: theme.typography.normal,
  disabled: theme.typography.disabled,
  white: theme.typography.white,
  root: theme.typography.root
})

const defaultTheme = {
  typography: {
  title: {
    fontWeight: 600,
    fontSize: '24px',
    lineHeight: '29px'
  },
  subtitle: {
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '17px'
  },
  common: {
    fontSize: '14px',
    lineHeight: '17px'
  },
  detailed: {
    fontSize: '12px',
    lineHeight: '15px'
  },
  normal: {
    color: grey['100']
  },
  disabled: {
    color: grey['25']
  },
  white: {
    color: 'white'
  },
  root: {
    fontFamily: 'Inter'
  }
}}

const Typography = React.forwardRef(function Typography(props, ref) {
  const {
    variant,
    style,
    classes,
    children,
    component,
    className,
    ...other
  } = props

  console.log('variant ', variant)
  const theme = useTheme() || defaultTheme;
  const Component = component || 'span'

  return (
    <ThemeProvider theme={theme}>
    <Component
      className={classNames(
        classes.root,
        classes[variant],
        classes[style],
        className
      )}
      ref={ref}
      {...other}
    >
      {children}
    </Component>
    </ThemeProvider>
  )
})

Typography.propTypes = {
  variant: PropTypes.oneOfType(['title', 'subtitle', 'common', 'detailed']),
  style: PropTypes.oneOfType(['normal', 'disabled', 'white']),
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  component: PropTypes.elementType
}

export default withStyles(styles)(Typography)
