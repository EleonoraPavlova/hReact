import ReactDOM from 'react-dom'

const CrazyButton = (props: any) => {

  const style = {
    color: props.fontColor,
    backgroundColor: props.bgColor,
    title: props.title
  }
  return <button style={style}>
    {props.title}
  </button>
}

export const App = () => {
  return <div>
    <CrazyButton title={'delete'} fontColor={'white'} bgColor={'red'} />
    <CrazyButton title={'add'} fontColor={'white'} bgColor={'green'} />
  </div>
}

ReactDOM.render(<App />,
  document.getElementById('root')
)