import React, { Component } from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";

export default class App extends Component {
	messageHandler = function (ev) {
		try {
			const messageData = JSON.parse(ev.nativeEvent.data);
			console.log(messageData);
		} catch (error) {
			console.log(error);
		}
	};
	render() {
		return (
			<View style={{ flex: 1 }}>
				<WebView
					ref={(r) => (this.webref = r)}
					source={{
						uri: "https://tlabs.az1.qualtrics.com/jfe/preview/previewId/a1618a3b-3804-462e-8788-e55eccd35015/SV_3gUKUHgcleGVyCi/BL_eqvzrBmILBwtlwa?Q_SurveyVersionID=current"
					}}
					onMessage={this.messageHandler}
				/>
			</View>
		);
	}
}
