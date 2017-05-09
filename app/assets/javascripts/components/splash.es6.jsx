let TransitionGroup = React.addons.CSSTransitionGroup
class Splash extends React.Component {

    componentWillReceiveProps() {

    }

    renderTag(tag) {
        return(
            <span>{tag}</span>
        )
    }

    renderPortfolioCard(id) {
        const blogPostList = this.props.blogPostData[id].blogPostList
        return(
            <div className="portfolio-card" onClick={this.props.renderBlogPostList.bind(null, blogPostList.id)}>
                <h3>{blogPostList.title}</h3>
                <p className="tag-list">
                    {blogPostList.tags.split('_').map(this.renderTag)}
                </p>
                <div className="caret"><i className="fa fa-angle-down"></i></div>
            </div>
        )
    }

    getAnimationClass() {
        return null
    }

    renderBlogPostList() {
        if (this.props.routeTo === 'splash') {
            return(
                    <div key={1} id="blog-post-list" className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 show">
                        {Object.keys(this.props.blogPostData).map(this.renderPortfolioCard.bind(this))}
                    </div>
            )
        } else if (this.props.routeTo === 'blogPostList') {
            return(
                    <BlogPostList
                        getBlogPost={this.props.getBlogPost}
                        blogPostData={this.props.blogPostData}
                        blogPostList={this.props.blogPostList}
                    />
            )
        }
    }

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
                <TransitionGroup transitionName="fadein">
                    {this.renderBlogPostList()}
                </TransitionGroup>
            </section>
        </div>
    )
  }
}

