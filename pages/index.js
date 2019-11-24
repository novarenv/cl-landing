import Head from 'next/head'
import Header from '../components/Header'
import StickyHeader from '../components/StickyHeader'
import SliderArea from '../components/SliderArea'
import RuangLingkup from '../components/RuangLingkup'
import Footer from '../components/Footer'

const Index = () => (
  <div>
    <Head>
      <meta charset="utf-8" />
      <meta http-equiv="x-ua-compatible" content="ie=edge" />
      <title>Era Baru Akurasindo</title>
      <meta name="description" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* <!-- Favicon --> */}
      <link rel="shortcut icon" type="image/x-icon" href="/static/assets/img/favicon.ico" />
      
      {/* <!-- CSS 
      ========================= --> */} 

      {/* <!-- Plugins CSS --> */}
      <link rel="stylesheet" href="/static/assets/css/plugins.css" />
      
      {/* <!-- Main Style CSS --> */}
      <link rel="stylesheet" href="/static/assets/css/style.css" />
    </Head>
    <div>
      <Header />
      <StickyHeader />
      <SliderArea />
      <RuangLingkup />
      <Footer />
    </div>
    
    {/* <!-- Plugins JS --> */}
    <script src="/static/assets/js/plugins.js"></script>

    {/* <!-- Main JS --> */}
    <script src="/static/assets/js/main.js"></script>

  </div>
)

export default Index