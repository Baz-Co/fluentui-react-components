import { Button as FluentButton } from '@fluentui/react-components';
// import { makeStyles, mergeClasses } from '@fluentui/react-components';

// const useStyles = makeStyles({
//   root: { color: 'red' },
//   rootPrimary: { color: 'blue' },
// });

export function Button(props) {
  // const classes = useStyles();

  return (
    // <FluentButton appearance={props.appearance} style={props.style} className={mergeClasses('ui-component', classes.root, props.className)} onClick={props.onClick}>{props.children}</FluentButton>

    // <FluentButton as={props.as} disabledFocus={props.disabledFocus} iconPosition={props.iconPosition} shape={props.shape} size={props.size} appearance={props.appearance} style={props.style} className={mergeClasses('ui-component', props.className)} icon={props.icon} onClick={props.onClick}>{props.children}</FluentButton>

    <FluentButton {...props} />
  )
}
