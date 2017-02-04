import React, { Component, PropTypes } from 'react';

import api from '../../api.js';


class Vehicles extends Component {
    constructor(props){
        super(props);

        this.state = {
            loading: true,
            user: {},
            comments: [],
        };
    }

    async componentDidMount() {
        const [
            user,
            comments,
        ] = await Promise.all([
            api.users.getSingle(this.props.userId),
            api.posts.getComments(this.props.id),
        ]);

        this.setState({
            loading: false,
            user,
            comments,
        })
    }
    render() {
        return(
            <article id={`post-${this.props.id}`}>
                <h2> {this.props.title} </h2>
                <p>
                    {this.props.body}
                </p>
                {!this.props.loading && (
                    <div>
                        <a href={`//${this.state.user.website}`} target="_black" rel="nofollow">
                            {this.state.user.name}
                        </a>
                        <span>
              hay {this.state.comments.length} comentarios
            </span>
                    </div>
                )}
            </article>
        )
    }
}

Vehicles.propTypes= {
    id: PropTypes.number,
    userId: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
};

export default Vehicles;