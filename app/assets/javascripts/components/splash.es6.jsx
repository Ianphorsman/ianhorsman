class Splash extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            routeTo: 'splash',
            animationContext: 'appear', /* nothing, appear, rendered, leave*/

        }
    }

    renderTag(tag) {
        return(
            <span>{tag}</span>
        )
    }

    renderPortfolioCard(id) {
        const blogPostList = this.props.blogPostData[id].blogPostList
        return(
            <div className="portfolio-card" onClick={this.props.renderBlogPostList.bind(null, blogPostList.id-1)}>
                <h3>{blogPostList.title}</h3>
                <p className="tag-list">
                    {blogPostList.tags.split('_').map(this.renderTag)}
                </p>
                <div className="caret"><i className="fa fa-angle-down"></i></div>
            </div>
        )
    }


    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.queueRouteTo !== this.state.routeTo) {
            if (this.state.animationContext === 'rendered') {
                this.setState({
                    animationContext: 'leave'
                })
            } else if (this.state.animationContext === 'leave') {
                let that = this
                setTimeout(function() {
                    that.setState({
                        animationContext: 'appear',
                        routeTo: that.props.queueRouteTo
                    })
                }, 100)
            }
        } else if (this.state.animationContext === 'appear') {
            let that = this
            setTimeout(function() {
                that.setState({
                    animationContext: 'rendered'
                })
            }, 100)
        }
    }

    componentDidMount() {
        if (this.state.animationContext === 'appear') {
            this.setState({
                animationContext: 'rendered'
            })
        }
    }

    renderBlogPostList() {
        if (this.state.routeTo === 'splash') {
            return (
                <PortfolioCardList
                    renderPortfolioCard={this.renderPortfolioCard.bind(this)}
                    blogPostData={this.props.blogPostData}
                    animationContext={this.state.animationContext}>

                </PortfolioCardList>
            )
        } else if (this.state.routeTo === 'blogPostList') {
            return (
                <BlogPostList
                    getBlogPost={this.props.getBlogPost}
                    blogPostData={this.props.blogPostData}
                    blogPostList={this.props.blogPostList}
                    animationContext={this.state.animationContext}
                    renderPortfolioCardList={this.props.renderPortfolioCardList}
                />
            )
        }
    }

  render () {
    return(
        <div id="splash" className="row">
            <section id="splash-bio" className="col-md-6 col-sm-12 row">
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
            <section id="splash-main-nav" ref="navigation" className="col-md-6 col-sm-0 row">
                {this.renderBlogPostList()}
            </section>
        </div>
    )
  }
}

