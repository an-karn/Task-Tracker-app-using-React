

const buttons = ({color, text, onClick}) => {
    
    return (
        <button onClick = {onClick} style = {{backgroundColor: color}} className = 'btn'>{text}</button>
    )
}

buttons.defaultProps = {
    text: 'Add',
    color: 'grey'
}

export default buttons
