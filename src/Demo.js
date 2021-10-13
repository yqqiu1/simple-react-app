import React from 'react'
import { connect } from 'react-redux'
import { Button, TreeSelect } from 'antd';
import './Demo.css';
import { store } from './store';
import { actions } from './actions';

const actionSaga = type => store.dispatch({ type })

class Demo extends React.Component {
    state = {
        treeData:[],
    };

    componentDidMount() {
        store.subscribe(() => this.setState({ treeData: store.getState() }))
    }

    onChange = categoryId => {
        alert("The categoryId of this category is: "+ categoryId);
    };
    fetchBySaga() {
        actionSaga('FETCH_REQUESTED_SAGA');
    }
    render() {
        return (
            <div>
                <Button onClick={this.fetchBySaga}>
                    Button 1
                </Button>
                <Button onClick={this.props.fetchByHook}>
                    Button 2
                </Button>
                <TreeSelect
                    style={{ width: '100%' }}
                    value={this.state.value}
                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                    treeData={this.state.treeData}
                    fieldNames={{ label: "name", value: "categoryId", children: "children" }}
                    placeholder="Please select"
                    treeDefaultExpandAll
                    onChange={this.onChange}
                />
            </div>

        );
    }
}

function mapStateToProps(state) {
    const treeData = state;
    return { treeData }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchByHook: actions.fetchByHook
    }
}

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Demo)


export default App;