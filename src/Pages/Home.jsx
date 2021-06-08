import React, {Component} from "react"
import Swiper from "../Component/Swiper/Swiper"
import HomeAbout from '../Component/Home_About'
import Values from "../Component/Values"
// import Quality from "../Component/Quality"
// import Testimonials from "../Component/Testimonials"
import JsonData from '../data/data.json'
// import Features from '../Component/Features'
import Services from '../Component/Services'

export default class Home extends Component {
    state = {
      landingPageData: {},
    }
    getlandingPageData() {
      this.setState({landingPageData : JsonData})
    }
  
    componentDidMount() {
      this.getlandingPageData();
    }
  
    render() {
      return (
        <div>
            <Swiper/>
            <HomeAbout/>
            <Values/>
            {/* <Quality/> */}
            {/* <Testimonials/> */}
            <Services data={this.state.landingPageData.Services} />
          {/* <Features data={this.state.landingPageData.Features} /> */}
          {/* <Testimonials data={this.state.landingPageData.Testimonials} /> */}
        </div>
      )
    }
  }