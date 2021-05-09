import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, AdaptivityProvider, AppRoot } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';
import Settings from './panels/Settings';

const App = () => {
	const [activePanel, setActivePanel] = useState('home');

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<AdaptivityProvider>
			<AppRoot>
				<View activePanel={activePanel}>
					<Home id='home' go={go} />
					<Persik id='persik' go={go} />
					<Settings id='settings' go={go} />
				</View>
			</AppRoot>
		</AdaptivityProvider>
	);
}

export default App;
