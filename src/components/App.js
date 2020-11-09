import React from 'react';
import SearchBar from './SearchBar'
import Youtube from '../Api/Youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

class App extends React.Component{
    state={Videos :[],selectedVideo:null}

    componentDidMount(){
        this.onTermSubmit('java')
    }

    onTermSubmit=async (term) =>{
        const response=await Youtube.get('/search',{
            params:{
                q:term
            }
        });
        this.setState({
            Videos:response.data.items,
            selectedVideo:response.data.items[0]
        })
    }
    onVideoSelect=(video) => {
        this.setState({selectedVideo:video})

    }

    render() {
        return (
            <div className="ui container">
            <SearchBar onTermSubmit={this.onTermSubmit}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={this.state.selectedVideo} />
                    </div>
                    <div className="five wide column">               
                        <VideoList onVideoSelect={this.onVideoSelect}videos={this.state.Videos}/>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default App;