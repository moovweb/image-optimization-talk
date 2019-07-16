import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import Container from 'react-storefront/Container'
import Typography from '@material-ui/core/Typography'
import Row from 'react-storefront/Row'
import CmsSlot from 'react-storefront/CmsSlot'
import { withStyles } from '@material-ui/core'
import InstagramFeed from './InstagramFeed'
import Lazy from 'react-storefront/Lazy'

@withStyles(theme => ({
  cmsSlot: {
    '& .hero-image': {
      width: '100%'
    },
    '& .button': {
      padding: '10px 20px',
      border: '1px solid black',
      margin: '10px 0',
      textTransform: 'uppercase',
      textAlign: 'center'
    }
  }
}))
@inject('app')
@observer
export default class Home extends Component {
  render() {
    const { app, classes } = this.props

    return (
      <Container>
        <Row>
          <Typography variant="h4">React Storefront</Typography>
        </Row>
        <Row>
          <Typography variant="subtitle1">
            <CmsSlot className={classes.cmsSlot} lazyLoadImages>
              {app.cmsSlot}
            </CmsSlot>
          </Typography>
        </Row>
        <Row>
          <Lazy style={{ minHeight: 600 }}>
            <InstagramFeed />
          </Lazy>
        </Row>
      </Container>
    )
  }
}
