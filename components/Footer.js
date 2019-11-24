const Footer = () => (
  <div>
  <div className="footer_top">
      <div className="container">
        <div className="footer_top_inner">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="widgets_container contact_us">
                <div className="footer_contact">
                  <div className="logo" align="center">
                    <a href="index.html"><img src="/static/assets/img/logo/logo_eba.png" alt="" /></a>
                  </div>
                  <p>PT. Era Baru Akurasindo adalah laboratorium kalibrasi / jasa kalibrasi alat ukur yang telah diakreditasi oleh Komite Akreditasi Nasional (KAN)
                     dengan nomor akreditasi LK 106 IDN. Dalam penerapan Sistem Manajemen, laboratorium mengacu pada persyaratan ISO/IEC 17025.</p>
                  <p><span>Alamat</span></p>
                  <p> Jl. Muchtar Bintang Metropol Blok A 11 No. 35 Bekasi Jawa Barat 17122</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="widgets_container widget_menu">
                <div className="footer_contact">
                  <p><span>No. Telp</span></p>
                  <p> 
                    021 8897 3171 (Marketing 1) <br />
                    021 8888 1912 (Marketing 2)
                  </p>
                  <p><span>No. Handphone</span></p>
                  <p> 
                    0812 9581 1316 (Marketing 1) <br />
                    0812 1245 6167 (Marketing 2) <br />
                    0812 8869 1429 (Marketing 3)
                  </p>
                  <p><span>Email</span></p>
                  <p> 
                    marketing_eba@yahoo.co.id <br />
                    kalibrasi_eba@yahoo.co.id <br />
                    eba.pemasaran2@yahoo.com <br />
                    jeflesmoonra@yahoo.co.id <br />
                    naziyya@yahoo.co.id
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
               <div className="widgets_container newsletter">
                <h3>Ikuti Kami</h3>
                <div className="footer_social_link">
                  <ul>
                    <li><a className="facebook" href="#" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                    <li><a className="twitter" href="#" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                    <li><a className="instagram" href="#" title="instagram"><i className="fa fa-instagram"></i></a></li>
                    <li><a className="linkedin" href="#" title="linkedin"><i className="fa fa-linkedin"></i></a></li>
                    <li><a className="rss" href="#" title="rss"><i className="fa fa-rss"></i></a></li>
                  </ul>
                </div>
                <div className="subscribe_form">
                   <h3>Dapatkan Kabar</h3>
                  <form id="mc-form" className="mc-form footer-newsletter" >
                    <input id="mc-email" type="email" autoComplete="off" placeholder="Masukkan email anda" />
                    <button id="mc-submit">Langganan !</button>
                  </form>
                  {/* <!-- mailchimp-alerts Start --> */}
                  <div className="mailchimp-alerts text-centre">
                    <div className="mailchimp-submitting"></div>
                    {/* <!-- mailchimp-submitting end --> */}
                    <div className="mailchimp-success"></div>
                    {/* <!-- mailchimp-success end --> */}
                    <div className="mailchimp-error"></div>
                    {/* <!-- mailchimp-error end --> */}
                  </div>
                  {/* <!-- mailchimp-alerts end --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer_bottom">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6">
            <div className="copyright_area">
              <p>Copyright &copy; 2019 <a href="#">PT. Era Baru Akurasindo</a>  All Right Reserved.</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="footer_payment text-right">
              <a href="#"><img src="/static/assets/img/icon/payment.png" alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Footer