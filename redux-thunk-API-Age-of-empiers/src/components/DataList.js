import React from 'react';
import { connect } from 'react-redux';

import { getData } from '../redux/actions';

class DataList extends React.Component {

    handleClick = () => {
        const { path } = this.props;

        console.log(this.props)

        this.props.getDataAction(path);

        console.log(this.props)
    }

    render() {

        const { civilizations } = this.props.civilizations.data;

        return (
            <>
            <div>
                <h1>Civilizations</h1>
                <button onClick={this.handleClick}>Get Civilizations</button>
            </div>

            {Boolean(civilizations) && 

            <ul className = 'list'>
                {civilizations.map(item => <li key = {item.id}>{item.name}</li>)}
            </ul>}
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        civilizations: state.civilizations,
    })
};

const mapDispatchToProps = dispatch => ({
    getDataAction: path => dispatch(getData(path)),
});


export default connect(mapStateToProps, mapDispatchToProps)(DataList);
