import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux'
import { numberInputA, numberInputB, add, sub, mult, div } from './actions'
class CalcScreen extends Component {


    onNumInputA(num) {
        this.props.numberInputA(num)
    }

    onNumInputB(num) {
        this.props.numberInputB(num)
    }

    addResults = () => {
        this.props.add(this.props.numA, this.props.numB)
    }

    subResults = () => {
        this.props.sub(this.props.numA, this.props.numB)
    }

    multResults = () => {
        this.props.mult(this.props.numA, this.props.numB)
    }

    divResults = () => {
        this.props.div(this.props.numA, this.props.numB)
    }


    render() {
        return (
            <View style={ styles.container }>
                <View style={{ flexDirection: 'row' }}>
                    <TextInput
                            style={styles.textInput}
                            keyboardType='numeric'
                            onChangeText={this.onNumInputA.bind(this)}
                            value={this.props.numA}
                    />
                    <TextInput
                            style={styles.textInput}
                            keyboardType='numeric'
                            onChangeText={this.onNumInputB.bind(this)}
                            value={this.props.numB}
                    />
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.buttonPress} onPress={()=>this.addResults()}>
                        <Text style={styles.operatorStyle}>
                            +
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonPress} onPress={()=>this.subResults()}>
                        <Text style={styles.operatorStyle}>
                            -
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonPress} onPress={()=>this.multResults()}>
                        <Text style={styles.operatorStyle}>
                            x
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonPress} onPress={()=>this.divResults()}>
                        <Text style={styles.operatorStyle}>
                            /
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text style={{marginTop: 20, fontSize: 30 }}>
                    { this.props.result }
                </Text>

            </View>
        );
    }
}

mapStateToProps = ({ calc }) => {
    const { numA, numB, result } = calc
    return { numA, numB, result }
}

export default connect(mapStateToProps, { numberInputA, numberInputB, add, sub, mult, div })(CalcScreen);

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
        },
    subContainer: {
        flexDirection: 'row',
        width: 300,
        justifyContent: 'space-around'
    },
    textInput: {
        height: 50,
        width: 70,
        backgroundColor: '#eaeaea',
        marginHorizontal: 5,
        borderRadius: 10,
        alignSelf: 'center',
        textAlign: 'center'
    },
    buttonPress: {
        height: 30,
        width: 30,
        borderRadius: 30,
        backgroundColor: '#e41e2b',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5
    },
    operatorStyle: {
        color: 'white',
        fontWeight: 'bold'
    }
}