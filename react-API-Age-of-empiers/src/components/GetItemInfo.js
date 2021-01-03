import React from 'react';

import List from './List'
import Spinner from './Spinner'


class GetItemInfo extends React.Component {

    state = {   
      data: null,
      isLoading: false,
    }
  
  async getData() {

      this.setState(prevState => ({
        ...prevState,
        isLoading: true
      }));

      const res = await fetch(url);
      const data = await res.json();
  
      this.setState(prevState => ({
        ...prevState,
        data,
        isLoading: false 
      }))

    };
  
    componentDidMount() {
      this.getData();
    }
  
    render() {
  
      const { data, isLoading } = this.state;
      const { endpoint } = this.props
  
      return (
        <div style = {{position: 'relative'}}>
          {
            isLoading ? Spinner() :
            Boolean(data.length) && this.props.render(data)
          }
        </div>  
       
      );
    } 
  }
  
  export default GetItemInfo