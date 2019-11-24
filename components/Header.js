const Header = () => (
  <div>
    {/* <!--header middel start--> */}
      <div className="header_middle middle_two">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <div className="logo">
                <a href="index.js"><img src="/static/assets/img/logo/logo_eba.png" alt="" /></a>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="main_menu menu_two menu_position text-right"> 
                <nav>  
                  <ul>
                    <li><a className="active"  href="index.html">home<i className="fa fa-angle-down"></i></a>
                      <ul className="sub_menu">
                        <li><a href="index.html">Jasa</a></li>
                        <li><a href="index-2.html">Info</a></li>
                      </ul>
                    </li>
                    <li><a href="shop.html">produk<i className="fa fa-angle-down"></i></a>
                      <ul className="sub_menu">
                        <li><a href="shop-fullwidth.html">Ruang Lingkup</a></li>
                        <li><a href="shop-fullwidth-list.html">List Alat</a></li>
                      </ul>
                    </li>
                    <li><a href="contact.html">profile</a></li>
                  </ul>   
                </nav> 
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--header middel end--> */}
    </div>
)

export default Header