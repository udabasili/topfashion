import React  from 'react'
import { slideData } from '../redux/utils/slide-data'
import Slide from '../components/slides/slide.jsx';

export default class Home extends React.PureComponent {
    constructor(props) {
      super(props)
      this.state = {
        data: slideData,
      }
    }
    
  render() {
  const {data} = this.state
    return (
        <div className="home">
            <Slide slideImages={data} />
        </div>
    )
  }
}
