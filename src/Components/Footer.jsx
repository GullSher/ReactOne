import React from 'react';
import '../Components/FooterCss.css';

export default function Footer() {
    return (
        <div>

            <div className='footer1' class="mt-auto" >
                <h3 style={{ backgroundColor: 'green', alignContent: 'center' }}>This is Footer1</h3>
                {/* <h3 style={"color: green"}>This is Footer</h3> */}
                {/* <p style="border: 1px solid black">Hello World</p> */}
                {/* <p>This is an inline span <span style="border: 1px solid black">Hello World</span> element inside a paragraph.</p> */}
                {/* <h1 style="background-color:grey;">This is inline sytle</h1> */}
                <h2 style={{ color: 'blue' }}>This is a Footer Heading 2</h2>
                {/* <div style={{ backgroundColor: 'lime', color: 'white' }}>This is changed 1. </div> */}
                <div className='lastfooter1'>This is changed. </div>

            </div>
            {/* Start of footer */}
            {/*
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap 4 Footer with Social icons</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
   <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" >
<style>
/* FOOTER*/
/*
              footer {
              background: #16222A;
          background: -webkit-linear-gradient(59deg, #3A6073, #16222A);
          background: linear-gradient(59deg, #3A6073, #16222A);
          color: white;
          margin-top:100px;
}

          footer a {
              color: #fff;
          font-size: 14px;
          transition-duration: 0.2s;
}

          footer a:hover {
              color: #FA944B;
          text-decoration: none;
}

          .copy {
              font - size: 12px;
          padding: 10px;
          border-top: 1px solid #FFFFFF;
}

          .footer-middle {
              padding - top: 2em;
          color: white;
}


          /*SOCİAL İCONS*/

          /* footer social icons */
/*
          ul.social-network {
              list - style: none;
          display: inline;
          margin-left: 0 !important;
          padding: 0;
}

          ul.social-network li {
              display: inline;
          margin: 0 5px;
}


          /* footer social icons */
/*
          .social-network a.icoFacebook:hover {
              background - color: #3B5998;
}

          .social-network a.icoLinkedin:hover {
              background - color: #007bb7;
}

          .social-network a.icoFacebook:hover i,
          .social-network a.icoLinkedin:hover i {
              color: #fff;
}

          .social-network a.socialIcon:hover,
          .socialHoverClass {
              color: #44BCDD;
}

          .social-circle li a {
              display: inline-block;
          position: relative;
          margin: 0 auto 0 auto;
          -moz-border-radius: 50%;
          -webkit-border-radius: 50%;
          border-radius: 50%;
          text-align: center;
          width: 30px;
          height: 30px;
          font-size: 15px;
}

          .social-circle li i {
              margin: 0;
          line-height: 30px;
          text-align: center;
}

          .social-circle li a:hover i,
          .triggeredHover {
              -moz - transform: rotate(360deg);
          -webkit-transform: rotate(360deg);
          -ms--transform: rotate(360deg);
          transform: rotate(360deg);
          -webkit-transition: all 0.2s;
          -moz-transition: all 0.2s;
          -o-transition: all 0.2s;
          -ms-transition: all 0.2s;
          transition: all 0.2s;
}

          .social-circle i {
              color: #595959;
          -webkit-transition: all 0.8s;
          -moz-transition: all 0.8s;
          -o-transition: all 0.8s;
          -ms-transition: all 0.8s;
          transition: all 0.8s;
}

          .social-network a {
              background - color: #F9F9F9;
}



</styl>

</head>
<body>

<footer class="mainfooter" role="contentinfo">
  <div class="footer-middle">
  <div class="container">
    <div class="row">
      <div class="col-md-3 col-sm-6">
        <!--Column1-->
        <div class="footer-pad">
          <h4>Heading 1</h4>
          <ul class="list-unstyled">
            <li><a href="#"></a></li>
            <li><a href="#">Payment Center</a></li>
            <li><a href="#">Contact Directory</a></li>
            <li><a href="#">Forms</a></li>
            <li><a href="#">News and Updates</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
      </div>
      <div class="col-md-3 col-sm-6">
        <!--Column1-->
        <div class="footer-pad">
          <h4>Heading 2</h4>
          <ul class="list-unstyled">
            <li><a href="#">Website Tutorial</a></li>
            <li><a href="#">Accessibility</a></li>
            <li><a href="#">Disclaimer</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Webmaster</a></li>
          </ul>
        </div>
      </div>
      <div class="col-md-3 col-sm-6">
        <!--Column1-->
        <div class="footer-pad">
          <h4>Heading 3</h4>
          <ul class="list-unstyled">
            <li><a href="#">Parks and Recreation</a></li>
            <li><a href="#">Public Works</a></li>
            <li><a href="#">Police Department</a></li>
            <li><a href="#">Fire</a></li>
            <li><a href="#">Mayor and City Council</a></li>
            <li>
              <a href="#"></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-3">
        <h4>Follow Us</h4>
            <ul class="social-network social-circle">
             <li><a href="#" class="icoFacebook" title="Facebook"><i class="fa fa-facebook"></i></a></li>
             <li><a href="#" class="icoLinkedin" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
            </ul>       
    </div>
    </div>
  <div class="row">
    <div class="col-md-12 copy">
      <p class="text-center">&copy; Copyright 2018 - Company Name.  All rights reserved.</p>
    </div>
  </div>


  </div>
  </div>
</footer>
  
  
  </body>
</html>


*/}
            {/* End of footer */}
            {/* Start of footer1 */}
            {/* 
            <footer class="mainfooter" role="contentinfo">
                <div class="footer-middle">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-3 col-sm-6">
                                <!--Column1-->
                                <div class="footer-pad">
                                    <h4>Heading 1</h4>
                                    <ul class="list-unstyled">
                                        <li><a href="#"></a></li>
                                        <li><a href="#">Payment Center</a></li>
                                        <li><a href="#">Contact Directory</a></li>
                                        <li><a href="#">Forms</a></li>
                                        <li><a href="#">News and Updates</a></li>
                                        <li><a href="#">FAQs</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6">
                                <!--Column1-->
                                <div class="footer-pad">
                                    <h4>Heading 2</h4>
                                    <ul class="list-unstyled">
                                        <li><a href="#">Website Tutorial</a></li>
                                        <li><a href="#">Accessibility</a></li>
                                        <li><a href="#">Disclaimer</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">FAQs</a></li>
                                        <li><a href="#">Webmaster</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6">
                                <!--Column1-->
                                <div class="footer-pad">
                                    <h4>Heading 3</h4>
                                    <ul class="list-unstyled">
                                        <li><a href="#">Parks and Recreation</a></li>
                                        <li><a href="#">Public Works</a></li>
                                        <li><a href="#">Police Department</a></li>
                                        <li><a href="#">Fire</a></li>
                                        <li><a href="#">Mayor and City Council</a></li>
                                        <li>
                                            <a href="#"></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <h4>Follow Us</h4>
                                <ul class="social-network social-circle">
                                    <li><a href="#" class="icoFacebook" title="Facebook"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="#" class="icoLinkedin" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 copy">
                                <p class="text-center">&copy; Copyright 2018 - Company Name.  All rights reserved.</p>
                            </div>
                        </div>


                    </div>
                </div>
            </footer>
*/}

            {/* End of footer */}

        </div >
    )
}
