import React, { Component, UIManager, Platform } from 'react';
import { 
    Text, 
    StyleSheet, 
    TouchableWithoutFeedback, 
    View, 
    LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import CardSection from './common/CardSection';
import * as actions from '../actions';

class ListItem extends Component {

    constructor(){
        super();
    }

    componentWillMount(){
        LayoutAnimation.spring();
    }

    // renderDescription() {
    //     const { library, selectedLibraryId } = this.props;
    //     if(library.id === selectedLibraryId){
    //         return (
    //             <Text>{library.description}</Text>
    //         );
    //     }
    // }

    renderDescription() {
        const { library, expanded } = this.props;

        if(expanded){
            return (
                <CardSection>
                    <Text style={{flex: 1}}>{library.description}</Text>
                </CardSection>
            );
        }
    }

    render() {
        //console.log(this.props);
        //console.log(this.props);
        const { id, title } = this.props.library;
        return (
            <TouchableWithoutFeedback
                onPress={()=>this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    <View>
                        {this.renderDescription()}
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
    }
});

const mapStateToProps = (state, ownProps) => {

    const expanded = state.selectedLibraryId === ownProps.library.id;

    // return { selectedLibraryId: state.selectedLibraryId, }
    return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);

// whenever we use connect helper it is modifying what data will show in ListItem

//whenever actioncreator is called it will return an action that get sent off to all the reducers

//ownProps is the props that we are wrapping in ie ListItem

//ownProps is equal to this.props inside our component(ListItem)