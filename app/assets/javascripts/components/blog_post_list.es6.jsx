class BlogPostList extends React.Component {

    getAnimationClassName() {
        return "col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 fade-" + this.props.animationContext
    }

    renderPost(id) {
        const post = this.props.blogPostData[this.props.blogPostList].blogPosts[id]
        return (
            <div className="portfolio-card" onClick={this.props.getBlogPost.bind(null, post.id)}>
                <h3>{post.title}</h3>
                <p className="tag-list">
                </p>
                <div className="caret"><i className="fa fa-angle-down"></i></div>
            </div>
        )
    }

  render () {
        const blogPostList = this.props.blogPostData[this.props.blogPostList]
    return (
        <div key={1} id="blog-posts" className={this.getAnimationClassName()}>
            {Object.keys(blogPostList.blogPosts).map(this.renderPost.bind(this))}
            <nav id="splash-nav" className={this.getAnimationClassName()}>
                <ul className="col-sm-4 col-sm-offset-4">
                    <a type="button" className="btn" onClick={this.props.renderPortfolioCardList.bind(null)}>
                        <span className="glyphicon glyphicon-home"></span>
                    </a>
                </ul>
            </nav>
        </div>
    );
  }
}

