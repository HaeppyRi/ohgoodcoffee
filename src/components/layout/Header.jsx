function Header() {
  return (
    <>
      <header className="header">
        <div className="l_wrapper">
          <ul className="header-nav">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Magazine</a>
            </li>
            <li>
              <a href="#">Market</a>
            </li>
            <li class="logo">
              <a href="#">
                <img src="/assets/Logo.svg" alt="로고" />
              </a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">My</a>
            </li>
            <li>
              <a href="#">Cart</a>
            </li>
            <li>
              <img className="search_icon" src="./assets/search_icon.svg" alt="돋보기 아이콘" />
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
