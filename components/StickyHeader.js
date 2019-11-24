const StickyHeader = () => (
  <div className="sticky_header_area sticky-header">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-3">
          <div className="logo">
            <a href="index.js"><img src="/static/assets/img/logo/logo_eba.png" alt="" /></a>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="sticky_header_right menu_position">
            <div className="main_menu"> 
              <nav>  
                <ul>
                  <li><a className="active"  href="index.js">home<i className="fa fa-angle-down"></i></a>
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
  </div>
)

export default StickyHeader