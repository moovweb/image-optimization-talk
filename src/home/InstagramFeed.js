import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import { inject, observer } from 'mobx-react'

const fourSixty = {
  feedId: 'venus-fashion-inc',
  theme: 'sizes_v2_5',
  pageSize: '6'
}

@withStyles(theme => ({
  root: {
    padding: theme.margins.container
  },
  title: {
    textAlign: 'center'
  },
  subtitle: {
    textAlign: 'center'
  },
  text: {
    fontSize: 14
  },
  widget: {
    margin: `${theme.margins.container}px ${theme.margins.container * -1}px`
  }
}))
@inject(({ app }) => ({ isAmp: app.amp }))
@observer
export default class InstagramFeed extends Component {
  componentDidMount() {
    this.injectScriptIntoRefEl(this.instance)
  }

  injectScriptIntoRefEl(instance) {
    const script = document.createElement('script')
    script.setAttribute('src', '//foursixty.com/media/scripts/fs.embed.v2.5.js')
    script.setAttribute('data-track-link-performance', 'false')
    script.setAttribute('data-feed-id', fourSixty.feedId)
    script.setAttribute('data-theme', fourSixty.theme)
    script.setAttribute('data-page-size', fourSixty.pageSize)
    script.setAttribute('async', 'true')
    instance.appendChild(script)
  }

  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <div className={classes.widget} ref={el => (this.instance = el)} />
      </div>
    )
  }
}
