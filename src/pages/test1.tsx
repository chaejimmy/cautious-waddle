import React from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({text}) => <div>{text}</div>

const latitude = 50.06742170154
const longitude = 14.3436062335968

// export default function SimpleMap() {
// 	const defaultProps = {
// 		center: {
// 			lat: 10.99835602,
// 			lng: 77.01502627,
// 		},
// 		zoom: 11,
// 	}

// 	return (
// 		// Important! Always set the container height explicitly
// 		<div style={{height: '100vh', width: '100%'}}>
// 			<GoogleMapReact bootstrapURLKeys={{key: ''}} defaultCenter={defaultProps.center} defaultZoom={defaultProps.zoom}>
// 				<AnyReactComponent lat={59.955413} lng={30.337844} text='My Marker' />
// 			</GoogleMapReact>
// 		</div>
// 	)
// }


export default function SimpleMap() {
	return <div>Testing maps</div>
}