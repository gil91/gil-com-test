import Button, { ButtonType, ButtonSize } from './components/Button/button'
function App() {
  return (
    <div className="App">
      <header className="App-header">
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
