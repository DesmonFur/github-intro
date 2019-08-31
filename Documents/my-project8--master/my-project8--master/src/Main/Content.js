import React, { Component } from 'react'

export class Content extends Component {
    render() {
        getData() {
            axios
              .get(`/api/cars`)
              .then(res => {
                console.log(res.data);
                this.setState({
                  sportCars: res.data,
                  currentImg: res.data[res.data.Length - 1].img
                });
              })
              .catch(error => {
                alert(error);
                //user method
              });
          }
          
        return (
            <div>
                
                
                
            </div>
        )
    }
}

export default Content