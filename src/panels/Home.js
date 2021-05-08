import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import PropTypes from 'prop-types';
import '@vkontakte/vkui/dist/vkui.css';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, ContentCard ,Avatar, CardGrid, Card } from '@vkontakte/vkui';

const TEST_PANEL = 'test';

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>vk-mini-app-dev</PanelHeader>
		{fetchedUser &&
		<Group header={<Header mode="secondary">User Data Fetched with VK Bridge</Header>}>
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}

		<Group header={<Header mode="secondary">Test Small Header</Header>}>
			<Div>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="persik">
					Кнопка
				</Button>
			</Div>
		</Group>
		
		<Group mode="plain" header={<Header mode="secondary">Карта ( на ней будем скорее всего показывать фотки)</Header>}>
        <CardGrid size="l">
          <ContentCard onClick={() => this.go(TEST_PANEL)}
		  	image="https://www.vao-moscow.ru/wp-content/uploads/2017/01/UY1GE8lXJ1A.jpg"
		  	subtitle="Тип/вид достопримечательности"
			header="Имя достопримечательности"
			caption="Здесь будет краткое описание арт-объекта."
		  >
            
          </ContentCard>
        </CardGrid>
      </Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
