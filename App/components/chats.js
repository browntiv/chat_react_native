/* @flow */
'use strict';

import React, {
  Component,
} from 'react';

import {
  View,
  Text
} from 'react-native';

class Chats extends Component {
	constructor(props){
		super(props)

	}

	render() {
		return(<View>
			<Nav />
			<Holder />
			<BottomBit />
			</View>);
	}
}				
