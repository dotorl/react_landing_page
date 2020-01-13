/*global daum*/
import React, { Component } from 'react';

class KakaoMap extends Component {
    componentDidMount() {                                                    
      let el = document.getElementById('map');
      let map = new daum.maps.Map(el, {
        center: new daum.maps.LatLng(37.8330194,127.0867313)
      });
    }
                                                    
    render() {
      return (
        <div className="App" id="map" ></div>
      );
    }
}

export default KakaoMap;
