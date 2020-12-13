import * as React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import withStyles from '@material-ui/styles/'
import grey from '../colors/grey'

// eslint-disable-next-line no-unused-vars
let theme

const styles = (theme) => ({
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
})

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

  const Component = component || 'span'

  return (
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
