import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: '#FFED26' }}
      >
        <div className="container">
          <Link
            to={'/roadmaps'}
            className="navbar-brand "
            style={{
              color: '#000000'
            }}
          >
            Roadmap
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mr-auto">　</ul>

            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/"
                  style={{
                    backgroundColor: '#6457A6',
                    color: '#D3D0CB',
                    margin: '0px 20px',
                    borderRadius: '10px'
                  }}
                >
                  アカウント登録
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" style={{ color: '#000000' }}>
                  ログイン
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
