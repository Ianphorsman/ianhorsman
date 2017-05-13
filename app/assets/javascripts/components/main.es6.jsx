class Main extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            blogPost: this.props.blogPost,
            blogPostList: this.props.blogPostList,
            blogPostData: this.props.blogPostData,
            routeTo: this.props.routeTo,
            queueRouteTo: this.props.routeTo,
            mainAnimationContext: 'appear',
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.queueRouteTo !== this.state.routeTo) {
            if (this.state.mainAnimationContext === 'rendered') {
                this.setState({
                    mainAnimationContext: 'leave'
                })
            } else if (this.state.mainAnimationContext === 'leave') {
                let that = this
                setTimeout(function() {
                    that.setState({
                        mainAnimationContext: 'appear',
                        routeTo: that.state.queueRouteTo,
                    })
                }, 100)
            }
        } else if (this.state.mainAnimationContext === 'appear') {
            let that = this
            setTimeout(function() {
                that.setState({
                    mainAnimationContext: 'rendered'
                })
            }, 100)
        }
    }

    componentDidMount() {
        if (this.state.mainAnimationContext === 'appear') {
            this.setState({
                mainAnimationContext: 'rendered'
            })
        }
    }

    renderBlogPostList(blogPostListId) {
        this.setState({
            blogPostList: blogPostListId,
            queueRouteTo: 'blogPostList'
        })
    }

    renderPortfolioCardList() {
        this.setState({
            queueRouteTo: 'splash'
        })
    }

    getBlogPost(path) {
        let successHandler = (data) => {
            this.setState({
                blogPost: data.blogPost,
                queueRouteTo: 'blogPost',
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

    renderMain() {
        if (this.state.routeTo === 'splash' || this.state.routeTo === 'blogPostList') {
            return (
                <Splash
                    renderBlogPostList={this.renderBlogPostList.bind(this)}
                    renderPortfolioCardList={this.renderPortfolioCardList.bind(this)}
                    blogPostData={this.state.blogPostData}
                    queueRouteTo={this.state.routeTo}
                    getBlogPost={this.getBlogPost.bind(this)}
                    blogPostList={this.state.blogPostList}
                />
            )
        } else if (this.state.routeTo === 'blogPost') {
            return (
                <BlogPost
                    blogPost={this.state.blogPost}
                    mainAnimationContext={this.state.mainAnimationContext}>

                </BlogPost>
            )
        }
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

