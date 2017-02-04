import React, { Component, PropTypes } from 'react';
import Graphic from '../../Graphic/components/Graphic.jsx'

class Graphics extends Component {
    constructor(props){
        super(props);

        this.state = {
            loading: true,
        };
    }

    async componentDidMount() {
        this.setState({
            loading: false,
        })
    }
    render() {
        return(
            <article id={`graphics-${this.props.id}`}>
                <Graphic/>
                <Graphic/>
                <Graphic/>
            </article>
        )
    }
}

Graphics.propTypes= {
    id: PropTypes.string,
};

export default Graphics;