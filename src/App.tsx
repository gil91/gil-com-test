import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu defaultIndex={0} onSelect={(index) => {alert(index)}}>
          <MenuItem index={0}>a</MenuItem>
          <MenuItem index={1} disabled>b</MenuItem>
          <MenuItem index={2}>c</MenuItem>
          <MenuItem index={3}>d</MenuItem>
        </Menu>


        <Button onClick={(e) => {e.preventDefault();alert('fxpeter')}}>Hello</Button>
        <Button disabled>Disabled</Button>

        <Button
          btnType={ButtonType.Primary}
          size={ButtonSize.Large}
        >
          Primary Large
        </Button>
        <Button
          btnType={ButtonType.Danger}
          size={ButtonSize.Small}
        >
          Danger Small
        </Button>
        <Button 
          btnType={ButtonType.Link} 
          href="https://www.baidu.com"
          target="_blank"
        >
          baidu
        </Button>
        <Button 
          btnType={ButtonType.Link} 
          href="https://www.baidu.com"
          disabled
        >
          baidu
        </Button>
      </header>
    </div>
  );
}

export default App;
