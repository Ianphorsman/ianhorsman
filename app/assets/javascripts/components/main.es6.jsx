class Main extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            blogPost: this.props.blogPost,
            blogPostList: this.props.blogPostList,
            blogPostData: this.props.blogPostData,
            routeTo: this.props.routeTo,
        }
    }

    renderBlogPostList(blogPostListId) {
        this.setState({
            blogPostList: blogPostListId,
            routeTo: 'blogPostList'
        })
    }

    renderPortfolioCardList() {
        this.setState({
            routeTo: 'splash'
        })
    }

    getBlogPost(path) {
        let successHandler = (data) => {
            this.setState({
                blogPost: data.blogPost,
                routeToBlog: data.routeToBlog,
            })
        }
        let errorHandler = (data) => {
        }
        $.ajax({
            method: 'GET',
            headers: {
                'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
            },
            dataType: 'json',
            contentType: 'application/json',
            accepts: 'application/json',
            url: '/home/show/' + path + '.json',
            success: successHandler.bind(this),
            error: errorHandler.bind(this)
        })
    }


    showPost() {
        if (this.state.routeToBlog) {
            return (
                <BlogPost
                    blogPost={this.state.blogPost}
                />
            )
        }
    }

    renderMain() {
        return(
            <Splash
                renderBlogPostList={this.renderBlogPostList.bind(this)}
                renderPortfolioCardList={this.renderPortfolioCardList.bind(this)}
                blogPostData={this.state.blogPostData}
                queueRouteTo={this.state.routeTo}
                getBlogPost={this.getBlogPost.bind(this)}
                blogPostList={this.state.blogPostList}
            />
        )
    }


  render () {
    return(
        <div>
            <header>
            </header>
            <main>
                {this.renderMain()}
            </main>
            <footer>
            </footer>
        </div>
    );
  }
}

