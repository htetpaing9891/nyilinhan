import { Link, Outlet } from "react-router-dom";

const WorkComponent = () => {
  return (
    <>
      <header
        className="about-masthead"
        style={{ height: "100%", paddingTop: "100px" }}
      >
        <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
          <div className="row d-flex justify-content-center">
            <div className="col-12">
              <div className="text-center">
                <h3 className="text-white mx-auto mt-4 mb-2 text-uppercase">
                  FEATURED TVC CAMPAIGNS
                </h3>
                <div className="row">
                  <div className="col-lg-3">
                    <Link
                      to="/work/HMZ-1K2AWts"
                      className="text-decoration-none"
                    >
                      <img
                        className="img-fluid"
                        src="assets/img/work/work-01.png"
                        alt="..."
                      />
                      <p className="py-2 text-white">
                        PEP Solidified Milk Commercial
                      </p>
                    </Link>
                  </div>
                  <div className="col-lg-3">
                    <Link
                      to="/work/axjAJ1vXrUc"
                      className="text-decoration-none"
                    >
                      <img
                        className="img-fluid"
                        src="assets/img/work/work-02.png"
                        alt="..."
                      />
                      <p className="py-2 text-white">
                        Nescafe Black Ice 15sec TVC
                      </p>
                    </Link>
                  </div>
                  <div className="col-lg-3">
                    <Link
                      to="/work/2o1e7lC1Lw0"
                      className="text-decoration-none"
                    >
                      <img
                        className="img-fluid"
                        src="assets/img/work/work-03.png"
                        alt="..."
                      />
                      <p className="py-2 text-white">Nescafe Latte 15sec TVC</p>
                    </Link>
                  </div>
                  <div className="col-lg-3">
                    <Link
                      to="/work/1wpGWhIoVNQ"
                      className="text-decoration-none"
                    >
                      <img
                        className="img-fluid"
                        src="assets/img/work/work-20.png"
                        alt="..."
                      />
                      <p className="py-2 text-white">
                        CANAL PLUS PU TU TUE Channel Indent Video
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="row my-4">
                  <div className="col-lg-3">
                    <Link
                      to="/work/qkhqNVdwwKA"
                      className="text-decoration-none"
                    >
                      <img
                        className="img-fluid"
                        src="assets/img/work/work-04.png"
                        alt="..."
                      />
                      <p className="py-2 text-white">L'oreal Micellar Water</p>
                    </Link>
                  </div>
                  <div className="col-lg-3">
                    <Link
                      to="/work/jDwzq2LAKVs"
                      className="text-decoration-none"
                    >
                      <img
                        className="img-fluid"
                        src="assets/img/work/work-05.png"
                        alt="..."
                      />
                      <p className="py-2 text-white">
                        Canal+ Pu Tu Tue Indent Video
                      </p>
                    </Link>
                  </div>
                  <div className="col-lg-3">
                    <Link
                      to="/work/--yLsMYgZZI"
                      className="text-decoration-none"
                    >
                      <img
                        className="img-fluid"
                        src="assets/img/work/work-06.png"
                        alt="..."
                      />
                      <p className="py-2 text-white">
                        Marketplace Thadingyut Festival Promo
                      </p>
                    </Link>
                  </div>
                  <div className="col-lg-3">
                    <Link
                      to="/work/DGpKBGZg2ek"
                      className="text-decoration-none"
                    >
                      <img
                        className="img-fluid"
                        src="assets/img/work/work-15.png"
                        alt="..."
                      />
                      <p className="py-2 text-white">
                        MPT Shwe Zagar Campaign TVC
                      </p>
                    </Link>
                  </div>
                  <div className="col-lg-3">
                    <Link
                      to="/work/HAPahcWWtF8"
                      className="text-decoration-none"
                    >
                      <img
                        className="img-fluid"
                        src="assets/img/work/work-16.png"
                        alt="..."
                      />
                      <p className="py-2 text-white">
                        MPT - Htaw B Campaign TVC by Green Screen Production
                      </p>
                    </Link>
                  </div>
                  <div className="col-lg-3">
                    <Link
                      to="/work/naS66lVDW6I"
                      className="text-decoration-none"
                    >
                      <img
                        className="img-fluid"
                        src="assets/img/work/work-17.png"
                        alt="..."
                      />
                      <p className="py-2 text-white">
                        MPT - Hti Tine Htaw Campaign TVC
                      </p>
                    </Link>
                  </div>
                  <div className="col-lg-3">
                    <Link
                      to="/work/8-Evbv30jk4"
                      className="text-decoration-none"
                    >
                      <img
                        className="img-fluid"
                        src="assets/img/work/work-18.png"
                        alt="..."
                      />
                      <p className="py-2 text-white">
                        Ooredoo Don Don Don TVC by Green Screen Productions
                      </p>
                    </Link>
                  </div>
                  <div className="col-lg-3">
                    <Link
                      to="/work/SCtxcCXZ7MQ"
                      className="text-decoration-none"
                    >
                      <img
                        className="img-fluid"
                        src="assets/img/work/work-19.png"
                        alt="..."
                      />
                      <p className="py-2 text-white">
                        Ooredoo 4G Fastest by Green Screen Production
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="projects-section bg-light" id="projects">
        <div className="container px-4 px-lg-5">
          {/* <!-- Featured Project Row--> */}
          <h3 className="text-center mb-4">Music Videos</h3>
          {/* <!-- Project One Row--> */}
          <div className="row gx-0 mb-5 mb-lg-0 justify-content-center">
            <div className="col-lg-6">
              <img
                className="img-fluid"
                src="assets/img/work/work-07.png"
                alt="..."
              />
            </div>
            <div className="col-lg-6">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <Link to="/work/b1Pg4kAvk2Y" className="text-decoration-none">
                    <div className="project-text w-100 my-auto text-center text-lg-left">
                      <h4 className="text-white">
                        Sandy Myint Lwin - Feat. XBox - အသဲကွဲမနေနဲ့
                      </h4>
                      <p className="mb-0 text-white-50">
                        Directed by - Kaung Myat Kyaw Saman Luciano <br />
                        Director of Photography - Ko Ag Ko Moe Thorn
                      </p>
                      <hr className="d-none d-lg-block mb-0 ms-0" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Project Two Row--> */}
          <div className="row gx-0 justify-content-center">
            <div className="col-lg-6">
              <img
                className="img-fluid"
                src="assets/img/work/work-08.png"
                alt="..."
              />
            </div>
            <div className="col-lg-6 order-lg-first">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <Link to="/work/4Df-7DPZU9Y" className="text-decoration-none">
                    <div className="project-text w-100 my-auto text-center text-lg-right">
                      <h4 className="text-white">
                        X Box -အရှိုက်တည့်တည့်လေးပဲ
                      </h4>
                      <p className="mb-0 text-white-50">
                        Here is another trailer video of X-Box Music Video by
                        Green Box Production. The album is coming out soon from
                        Bo Bo Entertainment
                      </p>
                      <hr className="d-none d-lg-block mb-0 me-0" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Project Three Row--> */}
          <div className="row gx-0 mb-5 mb-lg-0 justify-content-center">
            <div className="col-lg-6">
              <img
                className="img-fluid"
                src="assets/img/work/work-12.png"
                alt="..."
              />
            </div>
            <div className="col-lg-6">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <Link to="/work/AQ_3xTXVIgc" className="text-decoration-none">
                    <div className="project-text w-100 my-auto text-center text-lg-left">
                      <h4 className="text-white">
                        IDIOTS - Nga Bawa Ko Pyan Yu
                      </h4>
                      <p className="mb-0 text-white-50">Green Screen</p>
                      <hr className="d-none d-lg-block mb-0 ms-0" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Project Four Row--> */}
          <div className="row gx-0 justify-content-center">
            <div className="col-lg-6">
              <img
                className="img-fluid"
                src="assets/img/work/work-13.png"
                alt="..."
              />
            </div>
            <div className="col-lg-6 order-lg-first">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <Link to="/work/Irwt-r8kqcc" className="text-decoration-none">
                    <div className="project-text w-100 my-auto text-center text-lg-right">
                      <h4 className="text-white">
                        Angel တွေလို (Music Video) - Htet Yan - Feat. XBox (HD)
                      </h4>
                      <p className="mb-0 text-white-50">Green Screen</p>
                      <hr className="d-none d-lg-block mb-0 me-0" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Project Five Row--> */}
          <div className="row gx-0 mb-5 mb-lg-0 justify-content-center">
            <div className="col-lg-6">
              <img
                className="img-fluid"
                src="assets/img/work/work-14.png"
                alt="..."
              />
            </div>
            <div className="col-lg-6">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <Link to="/work/r4QsHHY9EQI" className="text-decoration-none">
                    <div className="project-text w-100 my-auto text-center text-lg-left">
                      <h4 className="text-white">
                        Shwe Htoo - စိတ္တဇဆေးရုံ - Music Video Trailer
                      </h4>
                      <p className="mb-0 text-white-50">Green Screen</p>
                      <hr className="d-none d-lg-block mb-0 ms-0" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-section bg-light" id="projects">
        <div className="container px-4 px-lg-5">
          {/* <!-- Featured Project Row--> */}
          <h3 className="text-center mb-4">Corporate Video</h3>
          <div className="row">
            <div className="col-lg-12">
              <Link to="/work/4bSWdaC7b1g" className="text-decoration-none">
                <img
                  className="img-fluid"
                  src="assets/img/work/work-24.jpeg"
                  alt="..."
                />
                <p className="pt-2 text-black text-center fs-3">
                  M Square Construction (Bonita Garden)
                </p>
                <p className="pb-2 text-black text-center fs-5">Producer</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-section bg-light" id="projects">
        <div className="container px-4 px-lg-5">
          {/* <!-- Featured Project Row--> */}
          <h3 className="text-center mb-4">Photoshoot</h3>
          <div
            id="portfolio-grid"
            className="row no-gutter"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="item web col-sm-6 col-md-4 col-lg-4 mb-4">
              <Link to="" className="item-wrap fancybox">
                <div className="work-info">
                  <h3>Ooredoo Brand Ambassador Photoshoot</h3>
                  <span>Producer</span>
                </div>
                <img className="img-fluid" src="assets/img/work/work-09.png" />
              </Link>
            </div>
            <div className="item web col-sm-6 col-md-4 col-lg-4 mb-4">
              <Link to="" className="item-wrap fancybox">
                <div className="work-info">
                  <h3>Lovita Coffee Photoshoot</h3>
                  <span>Producer</span>
                </div>
                <img className="img-fluid" src="assets/img/work/work-10.png" />
              </Link>
            </div>
            <div className="item web col-sm-6 col-md-4 col-lg-4 mb-4">
              <Link to="" className="item-wrap fancybox">
                <div className="work-info">
                  <h3>Terminal M Shopping Mall Photoshoot</h3>
                  <span>Producer</span>
                </div>
                <img className="img-fluid" src="assets/img/work/work-11.png" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="projects-section bg-light" id="projects">
        <div className="container px-4 px-lg-5">
          {/* <!-- Featured Project Row--> */}
          <h3 className="text-center mb-4">Billboard</h3>
          <div
            id="portfolio-grid"
            className="row no-gutter"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="item web col-sm-6 col-md-4 col-lg-4 mb-4">
              <Link to="" className="item-wrap fancybox">
                <div className="work-info">
                  <h3>Lovita Coffee</h3>
                  <span>Billboard</span>
                </div>
                <img className="img-fluid" src="assets/img/work/work-21.jpg" />
              </Link>
            </div>
            <div className="item web col-sm-6 col-md-4 col-lg-4 mb-4">
              <Link to="" className="item-wrap fancybox">
                <div className="work-info">
                  <h3>Ooredoo billboard</h3>
                  <span>Producer</span>
                </div>
                <img className="img-fluid" src="assets/img/work/work-22.jpg" />
              </Link>
            </div>
            <div className="item web col-sm-6 col-md-4 col-lg-4 mb-4">
              <Link to="" className="item-wrap fancybox">
                <div className="work-info">
                  <h3>Ooredoo billboard</h3>
                  <span>Producer</span>
                </div>
                <img className="img-fluid" src="assets/img/work/work-23.jpg" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default WorkComponent;
