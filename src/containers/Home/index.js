import React,{Component} from 'react';
import HomeHeader from "./HomeHeader/index";
import HomeSlider from "./HomeSliders/index";
import {connect} from 'react-redux'
import actions from '../../store/actions/home';
import HomeLesson from "./HomeLesson/index";


class Home extends Component{
    componentDidMount(){
        this.props.fetchSliders();
        this.props.fetchLessons();
    }
    render(){
        return (
            <div>
                <HomeHeader type={this.props.type}
                            changeType={this.props.changeType}
                />
                <HomeSlider sliders={this.props.sliders.list}/>
                <HomeLesson lessons={this.props.lessons.list}
                            fetchLessons={this.props.fetchLessons}
                            hasMore={this.props.lessons.hasMore}
                            // loading={this.props.lessons.loading}
                />
            </div>
        )
    }
}
export default connect(
    state=>state.home,
    actions
)(Home);