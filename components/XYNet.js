import React from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';
import axios from 'axios';

export default class XYNet extends React.Component {

  constructor(props){
    super(props);
    this.state ={ 
        isLoading: true,
        dataSource:[]
    }
  }
  componentDidMount(){
    /**
     * 1.采用fetch方式
     *  */   
    // return fetch('https://facebook.github.io/react-native/movies.json')
    //   .then((response) => response.json())
    //   .then((responseJson) => {

    //     this.setState({
    //       isLoading: false,
    //       dataSource: responseJson.movies,
    //     }, function(){

    //     });

    //   })
    //   .catch((error) =>{
    //     console.error(error);
    //   });
    /**
     * 2.采用async/await方式,注意函数头要加async关键字
     *  */  
    // try {
    //     let response = await fetch('https://facebook.github.io/react-native/movies.json',);
    //     let responseJson = await response.json();
    //     this.setState({
    //         isLoading: false,
    //         dataSource: responseJson.movies
    //     })
    // }catch(error) {
    //     console.error(error);
    // }
    /**
     * 3. 采用axios
     */
    axios('https://facebook.github.io/react-native/movies.json')
    .then((response)=>{
        let responseJson = response.data.movies;
        this.setState({
            dataSource:responseJson
        })
    }).catch((error)=>{
        console.log(error)
    }).finally(()=>{
        console.log('finally')
    })
  }

  render(){
    return(
        <View>
        <FlatList
          data= {this.state.dataSource}
          renderItem={({item}) => (<Text style = {{backgroundColor:'cyan'}}>{item.title}, {item.releaseYear}</Text>)}
          keyExtractor={(item, index) => item.id}
        />
        </View>
    );
  }
}