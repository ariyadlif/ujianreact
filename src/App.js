import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="wrapper" id="wrapper"> 
        <div className="content" id="navbar"> 
          <div className="nav-left"> 
            <ul> 
              <li className="brand"><h1>ZALORA</h1></li>
              <li>WANITA</li>
              <li>PRIA</li>
              <li>ANAK-ANAK<sup className="sup">new</sup></li>
              <li>
                <input type="text" name="name" autocomplete="off" placeholder="Cari produk, dan merek" required/>
              </li>
              <i class="material-icons">icon</i>
              <i class="material-icons">icon</i>
              <i class="material-icons">icon</i>
            </ul>
          </div>
        </div>
        <div className="content" id="slider"> 
          <div className="label"> 
            <div className="l-label"> 
              <ul> 
                <li className="bold"> 
                  <li className="material-icons"></li>
                  PRODUK ORIGINAL & TERJAMIN
                </li>
                <li class="bold">
                  <i class="material-icons"></i>
                  RIBUAN FASHION BRAND
                </li>
                <li class="bold">
                  <i class="material-icons"></i>
                  GRATIS PENGEMBALIAN
                </li>
                <li class="bold">
                  <i class="material-icons"></i>
                  PERTANYAAN?
                </li>
              </ul>

            </div>
            <div class="r-label">
        <b class="bold">Download & Dapatkan Diskon 22%! </b>
        <i class="material-icons"></i>
      </div>
          </div>

        </div>

        
<br/>
<br/>
<br/>

        <div> 
          <img className="imgfluid" src={require('./images/zalora2.JPG')}/> 
        </div>
        <br/>
        <div> 
          <img className="imgfluid" src={require('./images/zalora1.jpg')}/> 
        </div>

        <div className="content" id="nowEvent"> 
          <div className="b-label">
            <img height="40" src={require('./images/bni.png')}/>
            <div className="c-label">Additional Diskon 25% Dengan Kode Voucher: BNI1111</div>
            <div className="r-label">Info Selengkapnya <i class="material-icons"></i></div>
            <a href="" class="style_hover"></a>
          </div>
        </div>

        <div className="content" id="brand">
          <center> 
            <h1>Feature Brands</h1>
          </center>
          <br/>
          <div> 
            <a href="#"><img className="geser" height="40" src={require('./images/logo1.png')}/></a>
            <a href="#"><img className="geser" height="40" src={require('./images/logo2.png')}/></a>
            <a href="#"><img className="geser" height="40" src={require('./images/logo3.png')}/></a>
            <a href="#"><img className="geser" height="40" src={require('./images/logo4.png')}/></a>
            <a href="#"><img className="geser" height="40" src={require('./images/logo5.png')}/></a>
            <a href="#"><img className="geser" height="40" src={require('./images/logo6.png')}/></a>
            <a href="#"><img className="geser" height="40" src={require('./images/logo7.png')}/></a>
          </div>
        </div>
<br/>
        <div className="content" id="newProduk"> 
          <center><h1>New This Week</h1></center>
          <div className="produk"> 
            <div className="ls-produk"> 
              <a href="#"><img className="geser" height="300" width="100" src={require('./images/zalora5.jpg')}/></a> <br/>
              <h4>All Under Rp. 188.000</h4>
              <p>Semua produk fashion untuk stylish anda di bawah Rp.188.000</p>
            </div>
            <div className="ls-produk"> 
              <a href="#"><img className="geser" height="300" width="100" src={require('./images/zalora4.jpg')}/></a> <br/>
              <h4>All Under Rp. 188.000</h4>
              <p>Semua produk fashion untuk stylish anda di bawah Rp.188.000</p>
            </div>
            <div className="ls-produk"> 
              <a href="#"><img className="geser" height="300" width="100" src={require('./images/zalora3.jpg')}/></a> <br/>
              <h4>Diskon Up To 50%</h4>
              <p>Style fashion paling popular untuk menemani hari-hari kasual anda</p>
            </div>
          </div>
        </div>

        <div id="footer"> 
          <br/>
          <center>CopyRight Achmad Riyadli</center>
          <br/>
        </div>
      </div>
    </div>
  );
}

export default App;
