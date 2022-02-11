import { Link, Outlet } from "react-router-dom";

const HomeComponent = () => {
  return (
    <>
      <header className="masthead">
        <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
          <div className="d-flex justify-content-center">
            <div className="text-center">
              <h1 className="mx-auto my-0 text-uppercase">Nyi Lin Han</h1>
              <h2 className="text-white-50 mx-auto mt-2 mb-5">PRODUCER</h2>
              <p className="text-white">
                Hi, my name is Nyi Lin Han
                <br />
                I’m a co-founder, producer & generalist with over 6 years’
                experience in leading production & project management. I
                currently work as a Producer at Green Screen Productions,
                Myanmar.{" "}
              </p>
              <a className="btn btn-primary" href="#about">
                More about me
              </a>
            </div>
          </div>
        </div>
      </header>
      <section className="projects-section bg-light" id="projects">
        <h2 className="text-center mb-4">Portfolio</h2>
        <div
          id="portfolio-grid"
          className="row no-gutter"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="item web col-sm-6 col-md-3 col-lg-3 mb-4">
            <Link to="/work/HMZ-1K2AWts" className="item-wrap fancybox">
              <div className="work-info">
                <h3>PEP Solidified Milk Commercial</h3>
                <span>
                  Third Commercial for PEP with Green Screen Productions
                </span>
              </div>
              <img className="img-fluid" src="assets/img/work/work-01.png" />
            </Link>
          </div>
          <div className="item photography col-sm-6 col-md-3 col-lg-3 mb-4">
            <Link to="/work/axjAJ1vXrUc" className="item-wrap fancybox">
              <div className="work-info">
                <h3>Nescafe Black Ice 15sec TVC</h3>
                <span>Green Screen Productions</span>
              </div>
              <img className="img-fluid" src="assets/img/work/work-02.png" />
            </Link>
          </div>
          <div className="item branding col-sm-6 col-md-3 col-lg-3 mb-4">
            <Link to="/work/2o1e7lC1Lw0" className="item-wrap fancybox">
              <div className="work-info">
                <h3>Nescafe Latte 15sec TVC</h3>
                <span>Green Screen Productions</span>
              </div>
              <img className="img-fluid" src="assets/img/work/work-03.png" />
            </Link>
          </div>
          <div className="item design col-sm-6 col-md-3 col-lg-3 mb-4">
            <Link to="/work/qkhqNVdwwKA" className="item-wrap fancybox">
              <div className="work-info">
                <h3>L'oreal Micellar Water</h3>
                <span>Green Screen Productions</span>
              </div>
              <img className="img-fluid" src="assets/img/work/work-04.png" />
            </Link>
          </div>
          <div className="item photography col-sm-6 col-md-3 col-lg-3 mb-4">
            <Link to="/work/jDwzq2LAKVs" className="item-wrap fancybox">
              <div className="work-info">
                <h3>Canal+ Pu Tu Tue Indent Video</h3>
                <span>Green Screen Productions</span>
              </div>
              <img className="img-fluid" src="assets/img/work/work-05.png" />
            </Link>
          </div>
          <div className="item branding col-sm-6 col-md-3 col-lg-3 mb-4">
            <Link to="/work/--yLsMYgZZI" className="item-wrap fancybox">
              <div className="work-info">
                <h3>Marketplace Thadingyut Festival Promo</h3>
                <span>Green Screen Productions</span>
              </div>
              <img className="img-fluid" src="assets/img/work/work-06.png" />
            </Link>
          </div>
          <div className="item branding col-sm-6 col-md-3 col-lg-3 mb-4">
            <a href="#" className="item-wrap fancybox">
              <div className="work-info">
                <h3>Ooredoo Brand Ambassador Photoshoot</h3>
                <span>Producer</span>
              </div>
              <img className="img-fluid" src="assets/img/work/work-09.png" />
            </a>
          </div>
          <div className="item branding col-sm-6 col-md-3 col-lg-3 mb-4">
            <a href="#" className="item-wrap fancybox">
              <div className="work-info">
                <h3>Lovita Coffee Photoshoot</h3>
                <span>Producer</span>
              </div>
              <img className="img-fluid" src="assets/img/work/work-10.png" />
            </a>
          </div>
        </div>
      </section>
      <section className="about-section text-center" id="about">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8">
              <h2 className="text-white mb-4">About Me</h2>
              <p className="text-white-50">
                Nyi Lin Han started his career in Yangon after getting his
                bachelor degree from Oxford Brookes University. After coming
                back to Yangon, he started working in E-commerce industries and
                advertising agencies. Then, he moved into film industry learning
                and working as a producer for 4 years from the start of Green
                Box later rebrand into Green Screen Productions. Green Screen
                established itself as one of Myanmar’s best video production
                companies, delivering professional, compelling and memorable
                films for clients in all sorts of businesses and budgets. Today
                Green Screen Productions works for a number of agencies,
                charities and individual companies delivering a huge variety of
                contents.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="projects-section bg-light" id="clients">
        <div className="container px-4 px-lg-5">
          {/* <!-- Featured Project Row--> */}
          <h2 className="text-center mb-4 text-uppercase">
            Clients over the years
          </h2>
          <div className="row">
            <div className="col-6 col-md-2 my-2">
              <img
                className="img-fluid"
                src="assets/img/clients/mpt-logo.svg"
                alt="MPT"
              />
            </div>
            <div className="col-6 col-md-2 my-2">
              <img
                className="img-fluid"
                src="assets/img/clients/brands-logo.svg"
                alt="Brands"
              />
            </div>
            <div className="col-6 col-md-2 my-2">
              <img
                className="img-fluid"
                src="assets/img/clients/grey-logo.svg"
                alt="Grey"
              />
            </div>
            <div className="col-6 col-md-2 my-2">
              <img
                className="img-fluid"
                src="assets/img/clients/nexlabs-logo.svg"
                alt="Nexlabs"
              />
            </div>
            <div className="col-6 col-md-2 my-2">
              <img
                className="img-fluid"
                src="assets/img/clients/cmhl-logo.svg"
                alt="CMHL"
              />
            </div>
            <div className="col-6 col-md-2 my-2">
              <img
                className="img-fluid"
                src="assets/img/clients/canalplus-logo.svg"
                alt="Canal+"
              />
            </div>
            <div className="col-6 col-md-2 my-2">
              <img
                className="img-fluid"
                src="assets/img/clients/loreal-logo.svg"
                alt="Loreal"
              />
            </div>
            <div className="col-6 col-md-2 my-2">
              <img
                className="img-fluid"
                src="assets/img/clients/pantene-logo.svg"
                alt="Pantene"
              />
            </div>
            <div className="col-6 col-md-2 my-2">
              <img
                className="img-fluid"
                src="assets/img/clients/azuri-logo.svg"
                alt="Azuri"
              />
            </div>
            <div className="col-6 col-md-2 my-2">
              <img
                className="img-fluid"
                src="assets/img/clients/samsung-logo.svg"
                alt="Samsung"
              />
            </div>
            <div className="col-6 col-md-2 my-2">
              <img
                className="img-fluid"
                src="assets/img/clients/nescafe-logo.svg"
                alt="Nescafe"
              />
            </div>
            <div className="col-6 col-md-2 my-2">
              <img
                className="img-fluid"
                src="assets/img/clients/telenor-logo.svg"
                alt="Telenor"
              />
            </div>
            <div className="col-6 col-md-2 my-2">
              <img
                className="img-fluid"
                src="assets/img/clients/strategy-first.svg"
                alt="Strategy First"
              />
            </div>
            <div className="col-6 col-md-2 my-2">
              <img
                className="img-fluid"
                src="assets/img/clients/sunkist-logo.svg"
                alt="Sunkist"
              />
            </div>
            <div className="col-6 col-md-2 my-2">
              <img
                className="img-fluid"
                src="assets/img/clients/yoma-logo.svg"
                alt="Yoma"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HomeComponent;
