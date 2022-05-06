import { Component } from 'react'

class Section extends Component {
    render() {
        const { title, children } = this.props;
        return (
            <div className="FeedBack">
                <h2 className="Title">{title}</h2>
                {children}
            </div>
        )
    }
};

export default Section;