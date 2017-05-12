class PortfolioCardList extends React.Component {

    getAnimationClassName() {
        return "col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 fade-" + this.props.animationContext
    }

  render () {
      return(
          <div key={1} id="blog-post-list" className={this.getAnimationClassName()}>
              {Object.keys(this.props.blogPostData).map(this.props.renderPortfolioCard)}
          </div>
      )
  }
}

