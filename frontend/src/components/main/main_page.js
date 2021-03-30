import React from 'react';
import './main_page.css';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    this.props.closeModal();
  }

  render() {
    const { openModal } = this.props;

    return (
      <div className="main-page">
        <div className="main-page-div">
          <div className="main-page-logo">
            <div className="main-page-logo-pic">
            </div>
          </div>
          <div className="main-page-top-buttons-div">
            <div className="main-page-top-buttons">
              <button onClick={() => openModal("login")}>Already a member?</button>
              <button onClick={() => {}}>Business Login</button>
            </div>
          </div>
          <div className="main-page-bottom-buttons">
              <button onClick={() => {}}>Under 21</button>
              <button onClick={() => openModal("signup")}>21+ Older</button>
          </div>
        </div>
        <footer className="main-page-footer">
          <div>

          </div>
          <div className="main-page-copyright">
            <p>Privacy Policy</p>
            <p>Sitemap</p>
            <p>Copyright &copy; 2021 AE</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default MainPage;