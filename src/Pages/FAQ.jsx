import React, {Component} from 'react'
// import JsonData from '../data/data.json'

export default class FAQ extends Component {

handleClick = (e) => {
  console.log(e)
  e.target.classList.toggle('active')
  e.target.nextSibling.classList.toggle('d-none')
  }
    render() {
      return (
        <div>
            <h1 className='main_heading'>Frequently Asked Questions</h1>
            <hr/>
            <div className="text-center">
            <button onClick={this.handleClick} className={`expanding container text-left p-3 mt-3 font-weight-bold`}>2019</button>
            <ul className='d-none'>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
            </ul>
            <button onClick={this.handleClick} className={`expanding container text-left p-3 mt-3 font-weight-bold`}>2018</button>
            <ul className='d-none'>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
            </ul>
            <button onClick={this.handleClick} className={`expanding container text-left p-3 mt-3 font-weight-bold`}>2017</button> 
            <ul className='d-none'>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
            </ul> 
            </div>
            <a download="" href="https://drive.google.com/file/d/1hwlPVPBQoAavpv9p9tAsuz4RUT_Y3Sad/view?usp=sharing">Download</a>
            <a download="" target='_blank' rel="noreferrer" href="https://www.dropbox.com/h?preview=6a_Casting_Details.pdf">Download</a>
        </div>
      )
    }
  }