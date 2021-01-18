import Logo from './logo.svg';
import './OtherPage.css';

function OtherPage() {
  return (
    <div className="OtherApp">
      <header className="OtherApp-header">
        <Logo className="OtherApp-logo" alt="logo" />
        <p>
          Edit <code>src/OtherPage.js</code> and save to reload.
        </p>
        <a
          className="OtherApp-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React?
        </a>
      </header>
    </div>
  );
}

export default OtherPage;
