class Splash extends React.Component {
  render () {
    return(
        <div id="splash" className="row">
            <section className="col-md-6 col-sm-12 row">
                <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
                    <h1>Ian Horsman</h1>
                    <h4>Software Developer - Toronto, Canada</h4>
                    <p>Find me on
                        <a className="social-link" href="#">Twitter</a>,
                        <a className="social-link" href="#">CodePen</a>,
                        <a className="social-link" href="#">LinkedIn</a>,
                        or explore my work here!</p>
                </div>
            </section>
            <section className="col-md-6 col-sm-0 row">
                <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
                    <div className="portfolio-card">
                        <h3>Data Preprocessing Tutorials</h3>
                        <p className="tag-list">
                            <span>Python</span>
                            <span>Pandas</span>
                            <span>Data Analysis</span>
                        </p>
                        <div className="caret"><i className="fa fa-angle-down"></i></div>
                    </div>
                    <div className="portfolio-card">
                        <h3>Neural Networks from Scratch with Numpy</h3>
                        <p className="tag-list">
                            <span>Python</span>
                            <span>Numpy</span>
                            <span>Machine Learning</span>
                        </p>
                        <div className="caret"><i className="fa fa-angle-down"></i></div>
                    </div>
                </div>
            </section>
        </div>
    )
  }
}

