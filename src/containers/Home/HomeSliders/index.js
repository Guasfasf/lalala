import React,{Component} from 'react';
import ReactSwipe from 'react-swipe';
import './index.less'

export default class HomeSlider extends Component {
    constructor(){
        super();
        this.state={index:0}
    }

    render(){
        let options ={
            auto:2000,
            continuous:true,
            callback:(index,elem)=>{
                this.setState({index})
            }
        };
        let swipe = (
            <ReactSwipe swipeOptions={options}>
                {
                    this.props.sliders.map((item,index)=>(
                        <div key={index}>
                            <img src={item} alt=""/>
                        </div>
                    ))
                }

            </ReactSwipe>
        );
        return (
            <div className='home-sliders'>
                {
                    this.props.sliders.length>0?swipe:''
                }
                <div className='dots'>
                    {
                        this.props.sliders.map((item,index)=>(
                            <span className={'dot '+(this.state.index===index?'active':'')} key={index}> </span>
                        ))
                    }
                </div>
            </div>
        )
    }
}