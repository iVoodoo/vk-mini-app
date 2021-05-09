import React from 'react';
import PropTypes from 'prop-types';
import '@vkontakte/vkui/dist/vkui.css';
import { Panel, PanelHeader, Group, ContentCard, CardGrid, PanelHeaderButton} from '@vkontakte/vkui';
import { Icon28SettingsOutline } from '@vkontakte/icons';

const Home =  ({go}) => (

		
	<Panel id="home">
		<PanelHeader style={{textAlign:'center'}}
			left={<PanelHeaderButton onClick={go} data-to='settings'><Icon28SettingsOutline/></PanelHeaderButton>}
		>
			Список мест</PanelHeader>		
		
		<Group>
        <CardGrid size="m">
          <ContentCard 
		  	image="https://hatrabbits.com/wp-content/uploads/2018/10/risky-assumptions.jpg"
		  	subtitle="Type"
			header="Name"
			caption="Quick info"
			id="1"
		  >
          </ContentCard>
		  <ContentCard 
		  	image="https://hatrabbits.com/wp-content/uploads/2018/10/risky-assumptions.jpg"
		  	subtitle="Type"
			header="Name"
			caption="Quick info"
			id="2"
		  >
            
          </ContentCard>
		  <ContentCard 
		  	image="https://hatrabbits.com/wp-content/uploads/2018/10/risky-assumptions.jpg"
		  	subtitle="Type"
			header="Name"
			caption="Quick info"
			id="3"
		  >
            
          </ContentCard>
		  <ContentCard 
		  	image="https://hatrabbits.com/wp-content/uploads/2018/10/risky-assumptions.jpg"
		  	subtitle="Type"
			header="Name"
			caption="Quick info"
			id="4"
		  >
            
          </ContentCard>
		  <ContentCard 
		  	image="https://hatrabbits.com/wp-content/uploads/2018/10/risky-assumptions.jpg"
		  	subtitle="Type"
			header="Name"
			caption="Quick info"
			id="5"
		  >
            
          </ContentCard>
        </CardGrid>
      </Group>

	</Panel>
	
)
Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Home;
