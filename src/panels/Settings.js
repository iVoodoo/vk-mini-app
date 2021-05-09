import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack, Div, Group, CellButton, Cell, Switch, FormItem, Checkbox, DatePicker, Input, Radio, Spacing} from '@vkontakte/vkui';

import '@vkontakte/vkui/dist/vkui.css';

const Settings = props => (
	<Panel id="settings">
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>
			Настройки
		</PanelHeader>
		<Group>
            <FormItem top="Основные" >
              	<Checkbox onClick={ () => alert("test")}>Параметр 1</Checkbox >
              	<Checkbox>Параметр 2</Checkbox>
			  	<Cell disabled after={<Switch defaultChecked />}>
               		<Div >Переключатель</Div>
				</Cell>
            </FormItem>
			<Spacing separator />
			<FormItem top="Дополнительные" >
              	<Checkbox>Параметр 3</Checkbox>
              	<Checkbox>Параметр 4</Checkbox>
			  	<Cell disabled after={<Switch defaultChecked />}>
               		<Div >Переключатель 2</Div>
				</Cell>
            </FormItem>
          </Group>
	</Panel>
);

Settings.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Settings;
