class BlogPostList extends React.Component {

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
        <div key={1} id="blog-posts" className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 show">
            {Object.keys(blogPostList.blogPosts).map(this.renderPost.bind(this))}
        </div>
    );
  }
}

