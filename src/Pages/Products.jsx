import React, {Component} from 'react'
import JsonData from '../data/data.json'

export default class Product extends Component {
  state={ data: JsonData,
    path:'a'
  }

handleClick = (e) => {
  // console.log(e)
  this.setState({path:e.target.textContent})
  // console.log(e.target.parentElement.children)
  e.target.parentElement.childNodes.forEach(item => item.classList.remove('alpha'))
  e.target.classList.add('alpha')
  }
    render() {
      return (
        <div className='container'>
            <h1 className='main_heading'>Products {"&"} Catalogues</h1>
            <hr/>
            <ul onClick={this.handleClick} className='d-flex flex-row list-unstyled'>
              <li className='px-5 py-2 border rounded'>a</li>
              <li className='px-5 py-2 border rounded'>s</li>
              <li className='px-5 py-2 border rounded'>d</li>
              <li className='px-5 py-2 border rounded'>f</li>
            </ul> 
            <div className="text-center">
            <div className="row">
            {this.state.data
              ? this.state.data[this.state.path].map((d, i) => (
                  <div  key={`${d.name}-${i}`} className="col-md-4">
                    {" "}
                    <i className={d.icon}></i>
                    <div className="service-desc">
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
            </div>
        </div>
      )
    }
  }