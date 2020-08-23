import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, ToastAndroid, Alert } from 'react-native';
import { Header } from 'react-native-elements';
import db from '../config';

const TextInputBox = (props) => {
    return (
      <TextInput {...props} 
      editable
      maxLength={40}
      />
    );
  }

export default class WriteStoryScreen extends React.Component{
    constructor(){
        super();
        this.state={
            storyTitle: '',
            storyAuthor: '',
            storyContent: ''
        }
    }

    submitStory = async () => {
        var submitMessage;

        db.collection("writtenBookDetails").doc("2PRk27qHvZKanAmjsvvB").update({
            "authorName": this.state.storyAuthor,
            "storyHeading": this.state.storyTitle,
            "story": this.state.storyContent
        });

        submitMessage = "Story Submitted";

        ToastAndroid.show(submitMessage, ToastAndroid.SHORT);
    }

    render(){
        return(
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <View style={styles.container}>
                    <Header
                        centerComponent={{
                            text: 'Story Hub',
                            style: { color: '#000000', fontSize: 30, fontWeight: "bold"}
                        }}
                    />

                    <View style={styles.inputView}>
                        <TextInput 
                            style={styles.inputBox} 
                            placeholder="Title of the story" 
                            onChangeText={text1 => this.setState({storyTitle: text1})}
                            value={this.state.storyTitle}
                        />  
                    </View>

                    <View style={styles.inputView}>
                        <TextInput 
                            style={styles.inputBox2} 
                            placeholder="Author of the story" 
                            onChangeText={text2 => this.setState({storyAuthor: text2})}
                            value={this.state.storyAuthor}
                        />   
                    </View>

                    <View style={styles.inputView}>
                        <TextInputBox
                            style={styles.inputBox3} 
                            multiline numberOfLines={10} 
                            placeholder="Write Story" 
                            onChangeText={text3 => this.setState({storyContent: text3})}
                            value={this.state.storyContent}
                        />
                    </View>

                    <View style={styles.container}>
                        <TouchableOpacity 
                            style={styles.button}
                            onPress={async () => {this.submitStory(); this.setState({
                                storyAuthor: '',
                                storyContent: '',
                                storyTitle: ''
                            });
                        }}>
                            <Text style={styles.buttonText}>SUBMIT</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        justifyContent:'center',
        alignItems:'center'
    },
    inputView:{
        flexDirection:"row",
        margin:20
    },
    inputBox:{
        width:280,
        height:40,
        borderWidth:1.5,
        fontSize:20,
        marginTop: 50
    },
    inputBox2:{
        width:280,
        height:40,
        borderWidth:1.5,
        fontSize:20
    },
    inputBox3:{
        width:280,
        height:200,
        borderWidth:1.5,
        fontSize:20,
    },
    button:{
        backgroundColor:'#f6416c',
        width:200,
        height:50,
        alignItems:"center",
        alignSelf:"center"
    },
    buttonText:{
        fontSize:30,
        fontWeight:"bold"
    }
});